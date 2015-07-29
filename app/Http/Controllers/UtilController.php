<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Filesystem\Filesystem;
use Input;
use Validator;
use Redirect;
use Request;
use Session;
use Response;
use Crypt;
use App\BasicInfo;
class UtilController extends Controller
{

public function basicinfo(){
  if(Request::ajax()) {
      $binfo = Input::all();
    }
    $Info = new BasicInfo;
    $Info->legalname=$binfo['legalname'];    
    $Info->nickname=$binfo['nickname'];
    $Info->dob=$binfo['date'];
    $Info->email=$binfo['email'];
    $Info->password=Crypt::encrypt($binfo['password']);
    $Info->save();
  return "Agregado a la DB :D ";
}
}