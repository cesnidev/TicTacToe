<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class CompleteForms extends Model {

	protected $table='completeforms';

	public function IncompleteInfo()
	{
		if(!$this->profile_complete||!$this->experience_complete||!$this->availability_complete||!$this->legal_complete)
			return 1;
		else
			return 0;
	}

}
