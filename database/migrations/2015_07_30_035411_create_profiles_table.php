<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('profiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('userid')->unsigned();
			$table->foreign('userid')->references('id')->on('basicinfos')->onDelete('cascade');
            $table->string('gender');
            $table->string('height');
            $table->integer('weight');
            $table->string('eye_color');
            $table->string('hair_color');
            $table->string('hair_length');
            $table->string('tshirtsz');
            $table->string('pantssz');
            $table->string('shoesz');
            $table->string('chest');
            $table->string('jacketsz');
            $table->string('waist');
            $table->string('hips');
            $table->string('dresssz');
            $table->string('nat_first_lang');
            $table->string('sec_lang');
            $table->boolean('speak_eng');
            $table->boolean('speakes');
            $table->boolean('tattos');
			$table->boolean('piercings');
            $table->string('pic1');
            $table->string('pic2');
            $table->string('pic3');
            $table->string('pic4');
            $table->string('pic5');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('profiles');
	}

}
