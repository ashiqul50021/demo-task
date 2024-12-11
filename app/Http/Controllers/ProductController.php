<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $category = $request->input('category');
        $products = $category
            ? Product::where('category_id', $category)->get()
            : Product::all();
        $categories = Category::all();

        return Inertia::render('Products', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }
}