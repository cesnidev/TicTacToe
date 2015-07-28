<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLegalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Legals', function (Blueprint $table) {
            $table->increments('id');
			$table->boolean('bailwarranttrial');
			$table->boolean('legallywork');
			$table->string('banname');
			$table->integer('accntnumber');
			$table->integer('abarouting');
			$table->integer('ssn');
            $table->string('agreement');
            $table->boolean('acceptdecline');
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
        Schema::drop('Legals');
    }
}
