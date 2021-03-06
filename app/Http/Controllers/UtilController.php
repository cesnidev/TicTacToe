<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Filesystem\Filesystem;
use Response;
use Input;
use Validator;
use Redirect;
use Request;
use Session;
use Crypt;
use Hash;
use App\BasicInfo;
use App\CompleteForms;
use App\Profile;
use App\Experience;
use App\Availability;
use App\Legal;
use File;
use Auth;
use \Illuminate\Database\QueryException as EventicaDB;
class UtilController extends Controller
{
public function basicinfo(){
  if(Request::ajax()) {
      $databinfo = Input::all();
      $Info = new BasicInfo;

      $Info->firstname=$databinfo['firstname'];
      $Info->lastname=$databinfo['lastname'];
      $Info->minitial=$databinfo['mininitial'];
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

    }

    try {
        $Info->save();
        $complete =new  CompleteForms;
        $complete->userid=$Info->id;
        $complete->basic_complete=1;
        $complete->save();
        return EventicaMsg("successfully added ".$databinfo['nickname'],200);
    }catch (EventicaDB $e)
    {

      $errorCode = $e->errorInfo[1];
      if($errorCode == 1062)
      {
          return EventicaMsg('Duplicated User',$errorCode);
      }
      return EventicaMsg('Not specified error',$e->errorInfo[1]);
    }
}

public function profile()
{
  if(Request::ajax()) {
      $dataprofile = Input::all();
      $profile = new Profile;
      $profile->gender =$dataprofile['gender'];
      $profile->height =$dataprofile['height'];
      $profile->weight =$dataprofile['weight'];
      $profile->eye_color =$dataprofile['eyecolor'];
      $profile->hair_color =$dataprofile['haircolor'];
      $profile->hair_length =$dataprofile['hairlength'];
      $profile->tshirtsz =$dataprofile['tshirt'];
      $profile->pantssz =$dataprofile['pantsize'];
      $profile->shoesz =$dataprofile['shoesize'];
      $profile->chest =$dataprofile['chest'];
      $profile->jacketsz =$dataprofile['jacketsize'];
      $profile->waist =$dataprofile['waist'];
      $profile->hips =$dataprofile['hips'];
      $profile->dresssz =$dataprofile['dressize'];
      $profile->nat_first_lang =$dataprofile['nflanguage'];
      $profile->sec_lang =$dataprofile['slanguage'];
      $profile->speak_eng =$dataprofile['englishacent'];
      $profile->speakes =$dataprofile['englishfuently'];
      $profile->tattos =$dataprofile['tatoos'];
      $profile->piercings =$dataprofile['piercings'];
      $profile->userid = Auth::user()->id;
      /*$profile->pic1 =$dataprofile[' '];
      $profile->pic2 =$dataprofile[' '];
      $profile->pic3 =$dataprofile[' '];
      $profile->pic4 =$dataprofile[' '];
      $profile->pic5 =$dataprofile[' '];
      Faltan las rutas de las imagenes, ademas de que la primera imagen subida ser la del perfil, se podra cambiar en el dashboard*/
      $profile->save();
      $complete =CompleteForms::where('id',Auth::user()->id)->first();
      $complete->profile_complete=1;
      $complete->save();

    }
  return EventicaMsg("Profile Complete",200);
}
public function experience()
{
  if(Request::ajax()) {
      $dataexperience = Input::all();
      $experience = new Experience;
      $experience->userid=Auth::user()->id;
      /*$experience->brands1= $dataexperience[''];
      $experience->brands2= $dataexperience[''];
      $experience->brands3= $dataexperience[''];
      $experience->brands4= $dataexperience[''];
      $experience->brands5= $dataexperience[''];
      $experience->jobs1= $dataexperience[''];
      $experience->jobs2= $dataexperience[''];
      $experience->jobs3= $dataexperience[''];
      $experience->jobs4= $dataexperience[''];
      $experience->jobs5= $dataexperience[''];*/
      $experience->manyevents= $dataexperience['hmevents'];
      $experience->doingevents= $dataexperience['hlevents'];
      $experience->activatedevents= $dataexperience['hmactivated'];
      $experience->difbrands= $dataexperience['hmbrands'];
      $experience->certtabc= $dataexperience['tabcertified'];
      /*$experience->certtabc_img ='';FALTA GUARDAR EL PATH DE LA LICENCIA ALCOHOL*/

      $experience->skills= $dataexperience['skills'];
      $experience->techxp= $dataexperience['xptech'];
      $experience->capturedevent= $dataexperience['cap_info'];
      $experience->socialmediaxp= $dataexperience['xpsocial'];
      $experience->educationlevel= $dataexperience['educationlevel'];
      $experience->eventmodeling= $dataexperience['emodeling'];
      $experience->streetteam= $dataexperience['streeteam'];
      $experience->flashmob= $dataexperience['flashmg'];
      $experience->instoredemo= $dataexperience['demostore'];
      $experience->driving= $dataexperience['driving'];
      $experience->costume= $dataexperience['costume'];
      $experience->hostess= $dataexperience['hostess'];
      $experience->setupbreak= $dataexperience['setbd'];
      $experience->promotions= $dataexperience['promos'];
      $experience->retailsales= $dataexperience['retailsales'];
      $experience->liquor= $dataexperience['liquor'];
      $experience->techps= $dataexperience['techp'];
      $experience->tradeshow= $dataexperience['tradeshow'];
      $experience->national_tours= $dataexperience['natours'];
      $experience->sampling= $dataexperience['sampling'];
      $experience->indoor= $dataexperience['indoor'];
      $experience->outdoor= $dataexperience['outdoor'];
      $experience->brand_ambassador= $dataexperience['bambass'];
      $experience->model= $dataexperience['model'];
      $experience->teamlead= $dataexperience['teaml'];
      $experience->driver= $dataexperience['driver'];
      $experience->emcee= $dataexperience['emcee'];
      $experience->save();
      $complete =CompleteForms::where('id',Auth::user()->id)->first();
      $complete->experience_complete=1;
      $complete->save();
    }
    
  return EventicaMsg("Experience Complete",200);
    //return redirect('home');
}
public function availability()
{
  /*availabilityvalidlicense_img''; FALTA GUARDAR EL PATH DE LA LICENCIA*/
  if(Request::ajax()) {
      $dataavailability = Input::all();
      $availability = new Availability;
      $availability->userid=Auth::user()->id;
      $availability->validlicense=$dataavailability['licensev'];
      $availability->owncar=$dataavailability['ownmb'];
      $availability->receiveperm=$dataavailability['apitm'];
      $availability->oneoffday=$dataavailability['days'];
      $availability->multipledays=$dataavailability['cmdays'];
      $availability->multiplemonths=$dataavailability['cmmonths'];
      $availability->shortshift=$dataavailability['sshift'];
      $availability->longshift=$dataavailability['lshift'];
      $availability->mornshift=$dataavailability['mshift'];
      $availability->afternoonshift=$dataavailability['ashift'];
      $availability->lastminuteshift=$dataavailability['lmshift'];
      $availability->holidayshift=$dataavailability['hshift'];
      $availability->backupshift=$dataavailability['bshift']; 
      $availability->save();
      $complete =CompleteForms::where('id',Auth::user()->id)->first();
      $complete->availability_complete=1;
      $complete->save();
    }
    
  return EventicaMsg("Availability Complete",200);
  //return redirect('home');
}
public function legal()
{
  /*$legal->banname=$datalegal[''];
      $legal->accntnumber=$datalegal[''];
      $legal->abarouting=$datalegal[''];FALTA AGREGAR ESTOS CAMPOS A LA VISTA*/
      /*$legal->agreement=$datalegal[''];*/
  if(Request::ajax()) {
      $datalegal = Input::all();
      $legal = new Legal;
      $legal->userid=Auth::user()->id;
      $legal->bailwarranttrial=$datalegal['answ2'];
      $legal->legallywork=$datalegal['legally'];
      $legal->ssn=$datalegal['ssn'];
      $legal->acceptdecline=$datalegal['termsofs'];
      $legal->save();
      $complete =CompleteForms::where('id',Auth::user()->id)->first();
      $complete->legal_complete=1;
      $complete->save();
    }
    return EventicaMsg("Legal Complete",200);
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
public function DuplicatedUser(){
  if(Request::ajax()) {
      $data = Input::all();
    }
    $Dup = BasicInfo::where('email',$data['email'])->get();
	if(count($Dup)==1)
		return EventicaMsg('the user '.$data['email'].' already exists.','1062');
	else
		return EventicaMsg('Unique User','0');
}
public function test()
{
      $availability = new Availability;
      $availability->userid=Auth::user()->id;
      $availability->save();
  dd('exito es');
}
}