<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInsertMiddleInitialTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('basicinfos', function(Blueprint $table)
		{
			$table->string('minitial');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('basicinfos', function($table)
		{
			$table->dropColumn('minitial');
		});
	}

}
