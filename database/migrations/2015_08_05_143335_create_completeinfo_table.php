<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompleteinfoTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('completeforms', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('userid')->unsigned();
			$table->foreign('userid')->references('id')->on('basicinfos')->onDelete('cascade');
			$table->boolean('basic_complete');
			$table->boolean('profile_complete');
			$table->boolean('experience_complete');
			$table->boolean('legal_complete');
			$table->boolean('availability_complete');
			$table->boolean('full_complete');
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
		Schema::drop('completeforms');
	}

}
