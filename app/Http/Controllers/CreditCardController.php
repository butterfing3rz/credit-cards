<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CreditCard;

class CreditCardController extends Controller
{
    public function add_card(Request $request) {
        $card = new CreditCard();

        $card->cardNum = $request->cardNum;
        $card->save();
    }
}
