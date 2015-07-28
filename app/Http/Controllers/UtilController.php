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
use App\BasicInfo;
class UtilController extends Controller
{

public function test(){
  if(Request::ajax()) {
      $binfo = Input::all();
    }
    $Info = new BasicInfo;
    $Info->email='alguno';
    $Info->password='alguno';
    /*$User->nickname=$binfo['nickname'];
    $User->dob=$binfo['date'];
    $User->email=$binfo['email'];*/
    $Info->save();

  return "Agregado a la DB :D ".$binfo['_token'];
}
}