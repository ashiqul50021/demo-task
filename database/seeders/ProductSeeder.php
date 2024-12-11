<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::all();

        foreach ($categories as $category) {
            Product::create([
                'name' => $category->name . ' Product 1',
                'category_id' => $category->id,
                'price' => rand(10, 100),
            ]);

            Product::create([
                'name' => $category->name . ' Product 2',
                'category_id' => $category->id,
                'price' => rand(10, 100),
            ]);
        }
    }
}