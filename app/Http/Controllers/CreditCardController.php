<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CreditCard;

// functions that api.php call
class CreditCardController extends Controller
{
    // guessing that here is where the logic for digit validation would go
    public function add_card(Request $request) {
        $card = new CreditCard();

        // card number
        $card->cardNum = $request->cardNum;

        // expiration date
        $card->expDate = ($request->month).'/'.($request->year);

        // authorization code
        $authorizationCode = '';
        for ($i = 0; $i < 6; $i++) {
            $authorizationCode .= rand(0,9);
        }
        $card->authCode = $authorizationCode;

        // charge date
        date_default_timezone_set("America/Los_Angeles");
        $card->chargeDate = date("m/d/y", time());

        $card->save();
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
