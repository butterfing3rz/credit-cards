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

        $card->cardNum = $request->cardNum;
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
