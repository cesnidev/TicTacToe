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
use App\CompleteForms;
use File;
class UtilController extends Controller
{
public function basicinfo(){
  if(Request::ajax()) {
      $databinfo = Input::all();

      $Info = new BasicInfo;

      $complete = CompleteForms::where('id','1')->first();

      $Info->legalname=$databinfo['legalname'];
      $Info->nickname=$databinfo['nickname'];
      $Info->dob=$databinfo['dob'];
      $Info->email=$databinfo['email'];
      $Info->password=Hash::make($databinfo['password']);
      $Info->referred=$databinfo['referred'];
      $Info->address1=$databinfo['address1'];
      $Info->address2=$databinfo['address2'];
      $Info->city=$databinfo['city'];
      $Info->state=$databinfo['state'];
      $Info->zip=$databinfo['zip'];
      $Info->phone=$databinfo['phone'];
      $Info->shipadress1=$databinfo['shipadress1'];
      $Info->shipadress2=$databinfo['shipadress2'];
      $Info->shipcity=$databinfo['shipcity'];
      $Info->shipstate=$databinfo['shipstate'];
      $Info->shipzip=$databinfo['shipzip'];
      $Info->emrgncyfullname=$databinfo['emrgncyfullname'];
      $Info->emrgncyrelation=$databinfo['emrgncyrelation'];
      $Info->emrgncyadress1=$databinfo['emrgncyadress1'];
      $Info->emrgncyadress2=$databinfo['emrgncyadress2'];
      $Info->emrgncycity=$databinfo['emrgncycity'];
      $Info->emrgncystate=$databinfo['emrgncystate'];
      $Info->emrgncyzip=$databinfo['emrgncyzip'];
      $Info->emrgncyphone=$databinfo['emrgncyphone'];
      $Info->emrgncyinfo=$databinfo['emrgncyinfo'];

      $Info->save();
    }
    
  //return "successfully added ".$databinfo['nickname']." :D ";
    return "successfully added ".$Info->id." :D ";
}

public function profile()
{
  if(Request::ajax()) {
      $dataprofile = Input::all();
      $profile = new Profile;

      $profile->save();
    }
    
  return "";
}
public function experience()
{
  if(Request::ajax()) {
      $dataexperience = Input::all();
      $experience = new Experience;

      $experience->save();
    }
    
  return "";
}
public function availability()
{
  if(Request::ajax()) {
      $dataavailability = Input::all();
      $availability = new Availability;

      $availability->save();
    }
    
  return "";
}

public function UploadPhotos()
{
  $image = Request::file('file');
  $destinationPath = 'uploads';
  $filename = $image->getClientOriginalName(); 
  $upload_success = Request::file('file')->move($destinationPath, $filename);
  

  return "Loaded!! ".$image->getClientOriginalName();
}
public function DeletePhoto(){

  if(Request::ajax()) {
      $data = Input::all();
    }
    if(existPhoto($data['filename'])){
      \File::delete('uploads/'.$data['filename']);
    }
    
  return $data['filename']." deleted.";
}
}