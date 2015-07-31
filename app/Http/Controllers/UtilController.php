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
use Hash;
use App\BasicInfo;
class UtilController extends Controller
{

public function basicinfo(){
  if(Request::ajax()) {
      $binfo = Input::all();
      $Info = new BasicInfo;

      $Info->legalname=$binfo['legalname'];
      $Info->nickname=$binfo['nickname'];
      $Info->dob=$binfo['dob'];
      $Info->email=$binfo['email'];
      $Info->password=Hash::make($binfo['password']);
      $Info->referred=$binfo['referred'];
      $Info->address1=$binfo['address1'];
      $Info->address2=$binfo['address2'];
      $Info->city=$binfo['city'];
      $Info->state=$binfo['state'];
      $Info->zip=$binfo['zip'];
      $Info->phone=$binfo['phone'];
      $Info->shipadress1=$binfo['shipadress1'];
      $Info->shipadress2=$binfo['shipadress2'];
      $Info->shipcity=$binfo['shipcity'];
      $Info->shipstate=$binfo['shipstate'];
      $Info->shipzip=$binfo['shipzip'];
      $Info->emrgncyfullname=$binfo['emrgncyfullname'];
      $Info->emrgncyrelation=$binfo['emrgncyrelation'];
      $Info->emrgncyadress1=$binfo['emrgncyadress1'];
      $Info->emrgncyadress2=$binfo['emrgncyadress2'];
      $Info->emrgncycity=$binfo['emrgncycity'];
      $Info->emrgncystate=$binfo['emrgncystate'];
      $Info->emrgncyzip=$binfo['emrgncyzip'];
      $Info->emrgncyphone=$binfo['emrgncyphone'];
      $Info->emrgncyinfo=$binfo['emrgncyinfo'];

      $Info->save();
    }
    
  return "successfully added ".$binfo['nickname']." :D ";
}
public function uploadfile()
{
  return "Loaded!!";
}
}