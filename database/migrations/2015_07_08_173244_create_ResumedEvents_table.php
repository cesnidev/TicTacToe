<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResumedEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ResumedEvents', function (Blueprint $table) {
            $table->increments('id');
			$table->string('eventname');
			$table->string('product');
			$table->date('eventdate');
			$table->date('starttime');
			$table->integer('hours');
			$table->integer('qty');
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
        Schema::drop('ResumedEvents');
    }
}
