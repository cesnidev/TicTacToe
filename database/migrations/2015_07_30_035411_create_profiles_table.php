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
            $table->enum('gender', ['male', 'female','other']);
            $table->integer('height');
            $table->integer('weight');
            $table->enum('eye_color', ['color1', 'color2','color3']);
            $table->enum('hair_color', ['color1', 'color2','color3']);
            $table->enum('hair_length', ['color1', 'color2','color3']);
            $table->enum('tshirtsz', ['color1', 'color2','color3']);
            $table->enum('pantssz', ['color1', 'color2','color3']);
            $table->enum('shoesz', ['color1', 'color2','color3']);
            $table->enum('chest', ['color1', 'color2','color3']);
            $table->enum('jacketsz', ['color1', 'color2','color3']);
            $table->enum('waist', ['color1', 'color2','color3']);
            $table->enum('hips', ['color1', 'color2','color3']);
            $table->enum('dresssz', ['color1', 'color2','color3']);
            $table->enum('nat_first_lang', ['color1', 'color2','color3']);
            $table->enum('sec_lang', ['color1', 'color2','color3']);
            $table->boolean('speak_eng');
            $table->boolean('speakes');
            $table->boolean('tattos');
			$table->boolean('piercings');
            $table->string('pic1');
            $table->string('pic2');
            $table->string('pic3');
            $table->string('pic4');
            $table->string('pic5');
			$table->integer('basicinfo_id')->unsigned();
			$table->foreign('basicinfo_id')->references('id')->on('basicinfos')->onDelete('cascade');	
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
