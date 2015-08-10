<?php
function existPhoto($photo)
{
    return File::exists(public_path().'\uploads\\'.$photo);
}
?>