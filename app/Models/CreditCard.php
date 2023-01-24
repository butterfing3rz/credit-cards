<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


// only has the cardNum for now
class CreditCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'cardNum',
    ];
}
