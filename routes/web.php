<?php

use App\Http\Controllers\GestionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// })->name('welcome');

Route::get('/index', [GestionController::class, 'index'])->name('index');
Route::get('/create', [GestionController::class, 'create'])->name('create');
Route::post('/store', [GestionController::class, 'store'])->name('store');
Route::post('/edit', [GestionController::class, 'edit'])->name('edit');
Route::get('/show/{produit}', [GestionController::class, 'show'])->name('show');




Route::get('/login', [GestionController::class, 'loginform'])->name('login');
Route::post('/loginstore', [GestionController::class, 'loginstore'])->name('loginstore');

Route::get('/{produit}/edit', [GestionController::class,"edit"])->name('edit');
Route::put('/{produit}', [GestionController::class,"update"])->name('update');

Route::delete('/destroy/{produit}', [GestionController::class, 'destroy'])->name('product.destroy');
