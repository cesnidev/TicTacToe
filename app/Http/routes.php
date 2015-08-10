<?php
Route::get('/', ['as'=>'home',function () {return view('static.index');}]);
Route::get('home', 'HomeController@index');
Route::controllers(['auth' => 'Auth\AuthController','password' => 'Auth\PasswordController']);

/**Start GET Views**/
Route::get('contact', function () {return view('static.contact');});
Route::get('comming', function () {return view('static.comming');});
Route::get('demos', function () {return view('static.demos');});
Route::get('privacy', function () {return view('static.privacy');});
Route::get('terms', function () {return view('static.terms');});
Route::get('signup', function () {return view('static.signup2');});
Route::get('uc', function () {return view('static.uc');});
/**End GET Views**/

/**Start POST AJAX Forms**/
Route::post('BIAdd','UtilController@basicinfo');//Basic info
Route::post('ProAdd','UtilController@basicinfo');//Profile
Route::post('XpAdd','UtilController@basicinfo');//Experience
Route::post('AvAdd','UtilController@basicinfo');//Availability
Route::post('LgAdd','UtilController@basicinfo');//Legal
/**End POST AJAX Forms**/

/**Start Forms Helpers & Functions**/
Route::post('api/up',['as'=>'subir','uses'=>'UtilController@UploadPhotos']);
Route::post('delete','UtilController@DeletePhoto');
/***End Forms Helpers & Functions**/

