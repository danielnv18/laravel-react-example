<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use App\Store;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Article::class, function (Faker $faker) {
    return [
        'name' => 'Store ' . $faker->name,
        'description' => 'Description' . $faker->text(),
        'price' => $faker->numberBetween(30, 100),
        'total_in_shelf' => $faker->numberBetween(1, 10),
        'total_in_vault' => $faker->numberBetween(1, 60),
        'store_id' => factory(Store::class),
    ];
});
