<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetailEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('DetailEvents', function (Blueprint $table) {
            $table->increments('id');
			$table->string('accntname');
			$table->date('eventdate');
			$table->string('day');
			$table->string('ocassion');
			$table->string('team');
			$table->time('startime');
			$table->time('endtime');
			$table->string('notes');
			$table->string('category');
			$table->string('city');
			$table->string('address');
			$table->integer('zip');
			$table->integer('totalstaffreq');
			$table->integer('woman');
			$table->integer('man');
			$table->string('uniformreq');
			$table->string('equipment');
			$table->string('jobduties');
			$table->string('contact');
			$table->integer('phone');
			$table->string('salesrep');
			$table->integer('phonerep');
			$table->integer('hours');
			$table->string('teamassigned');
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
        Schema::drop('DetailEvents');
    }
}
