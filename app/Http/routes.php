<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', ['as'=>'home',function () {
    return view('static.index');
}]);
Route::get('home', 'HomeController@index');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

/*
Route::get('home', function () {
    return view('static.login');
});*/
Route::get('contact', function () {
    return view('static.contact');
});

Route::get('comming', function () {
    return view('static.comming');
});

Route::get('demos', function () {
    return view('static.demos');
});
Route::get('privacy', function () {
    return view('static.privacy');
});
Route::get('terms', function () {
    return view('static.terms');
});

Route::get('signup', function () {
    return view('static.signup');
});

Route::get('uc', function () {
    return view('static.uc');
});
Route::post('loguear','Home\HomeController@Login');

Route::post('BIAdd','UtilController@basicinfo');

Route::post('api/up',[
    'as'=>'subir',
    'uses'=>'UtilController@uploadfile'
]);

/**Start Forms Sign Up**/
Route::post('basicuser',function(){
    return 'Basic User';
});
Route::post('profile',function(){
    return "Profile";
});
Route::post('experience',function(){
    return "Experience";
});
Route::post('availability',function(){
    return "Availability";
});
Route::post('legal',function(){
    return "Legal";
});
Route::get('upload',function(){
	return view('static.upload');
});

/***End Forms Sign Up**/


