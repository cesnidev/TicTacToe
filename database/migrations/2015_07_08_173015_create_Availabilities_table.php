<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAvailabilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Availabilities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('userid')->unsigned();
            $table->foreign('userid')->references('id')->on('basicinfos')->onDelete('cascade');
			$table->boolean('validlicense');
            $table->string('validlicense_img');
			$table->boolean('owncar');
			$table->boolean('receiveperm');
			$table->boolean('oneoffday');
			$table->boolean('multipledays');
			$table->boolean('multiplemonths');
			$table->boolean('shortshift');
			$table->boolean('longshift');
			$table->boolean('mornshift');
			$table->boolean('afternoonshift');
			$table->boolean('lastminuteshift');
			$table->boolean('holidayshift');
			$table->boolean('backupshift');
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
        Schema::drop('Availabilities');
    }
}
