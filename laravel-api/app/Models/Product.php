<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_barcode',
        'product_description',
        'price',
        'available_quantity',
        'category',
    ];

    public function user()
    {
    return $this->belongsTo(User::class);
    }   

}


