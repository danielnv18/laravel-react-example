<?php

use App\Article;
use App\Store;
use Illuminate\Database\Seeder;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Store::class, 30)->create()->each(function ($store) {
//            $store->articles()->save(factory(Article::class, 50)->make());
        });
    }
}
