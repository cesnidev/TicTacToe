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
Route::get('signup', function () {return view('static.register');});
Route::get('uc', function () {return view('static.uc');});
/**End GET Views**/

/**Start POST AJAX Forms**/
Route::post('BIAdd','UtilController@basicinfo');//Basic info
Route::post('ProfAdd','UtilController@profile');//Profile
Route::post('XpAdd','UtilController@experience');//Experience
Route::post('AvAdd','UtilController@availability');//Availability
Route::post('LgAdd','UtilController@legal');//Legal

Route::post('DCheck','UtilController@DuplicatedUser');
/**End POST AJAX Forms**/

/**Start Forms Helpers & Functions**/
Route::post('api/up',['as'=>'subir','uses'=>'UtilController@UploadPhotos']);
Route::post('delete','UtilController@DeletePhoto');
/***End Forms Helpers & Functions**/

Route::get('test',function(){
	return view('static.test');
});
