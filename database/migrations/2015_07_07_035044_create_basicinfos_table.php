<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBasicinfosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('basicinfos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('firstname');
			$table->string('lastname');
			$table->string('minitial');
			$table->string('legalname');
			$table->string('nickname');
			$table->string('dob');
			$table->string('email')->unique();
			$table->string('password');
			$table->rememberToken();
			$table->string('referred');
			$table->string('address1');
			$table->string('address2');
			$table->string('city');
			$table->string('state');
			$table->integer('zip');
			$table->integer('phone');
			$table->string('shipadress1');
			$table->string('shipadress2');
			$table->string('shipcity');
			$table->string('shipstate');
			$table->integer('shipzip');
			$table->string('emrgncyfullname');
			$table->string('emrgncyrelation');
			$table->string('emrgncyadress1');
			$table->string('emrgncyadress2');
			$table->string('emrgncycity');
			$table->string('emrgncystate');
			$table->integer('emrgncyzip');
			$table->integer('emrgncyphone');
			$table->string('emrgncyinfo');
			
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
		Schema::drop('basicinfos');

	}

}
