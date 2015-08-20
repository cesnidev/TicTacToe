<?php
function existPhoto($photo)
{
    return File::exists(public_path().'\uploads\\'.$photo);
}
function setEventicaData($data,$status)
{
	Response::json($data,$status);
}
function EventicaMsg($msg,$code)
{
	return Response::json(array(
            'message' => $msg, 
            'errorcode' => $code
            ));
}
?>