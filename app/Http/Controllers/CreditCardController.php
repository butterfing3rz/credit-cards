<?php

namespace App\Http\Controllers;

use http\Exception\InvalidArgumentException;
use Illuminate\Http\Request;
use App\Models\CreditCard;

// functions that api.php call
class CreditCardController extends Controller {

    public function add_card(Request $request) {
        // make sure nothing is blank
        if (is_null($request->month) || is_null($request->year) || is_null($request->cardNum)) {
            throw new InvalidArgumentException();
        }

        $card = new CreditCard();

        // charge date
        date_default_timezone_set("America/Los_Angeles");
        $card->chargeDate = date("m/d/y", time());

        // expiration date
        // check if card is expired
        if (intval($request->year) < intval(date("y", time()))) {
            throw new InvalidArgumentException();
        } else if (intval($request->year) == intval(date("y", time()))) {
            if (intval($request->month) <= intval(date("m", time()))) {
                throw new InvalidArgumentException();
            }
        }
        // set the expiration date
        $card->expDate = ($request->month).'/'.($request->year);

        // card number
        if (!$this->luhnValidate($request->cardNum)) {
            throw new InvalidArgumentException();
        }
        $card->cardNum = $request->cardNum;

        // authorization code
        $authorizationCode = '';
        for ($i = 0; $i < 6; $i++) {
            $authorizationCode .= rand(0,9);
        }
        $card->authCode = $authorizationCode;

        $card->save();
    }

    public function luhnValidate($cardNum) {
        $len = strlen($cardNum) - 1;
        $sum = 0;
        $isSecond = false;

        for ($i = $len; $i >= 0; $i--) {
            $digit = $cardNum[$i];

            if ($isSecond) {
                $digit *= 2;
            }

            if ($digit >= 10) {
                $sum += 1;
            }
            $sum += $digit % 10;

            $isSecond = !$isSecond;
        }
        return ($sum % 10 == 0);
    }

    public function get_all_card() {
        $cards = CreditCard::all();
        return response()->json([
            'cards' => $cards
        ],200);
    }

    public function delete_card($id) {
        $card = CreditCard::findOrFail($id);
        $card->delete();
    }
}
