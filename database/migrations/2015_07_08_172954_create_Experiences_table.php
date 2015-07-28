<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Experiences', function (Blueprint $table) {
            $table->increments('id');
			
			$table->string('brands1');
			$table->string('brands2');
			$table->string('brands3');
			$table->string('brands4');
			$table->string('brands5');
            $table->string('jobs1');
			$table->string('jobs2');
			$table->string('jobs3');
			$table->string('jobs4');
			$table->string('jobs5');
			$table->integer('manyevents');
			$table->integer('doingevents');
			$table->integer('activatedevents');
			$table->integer('difbrands');
			$table->boolean('certtabc');
			
			$table->string('skills');
			$table->boolean('techxp');
			$table->boolean('capturedevent');
			$table->boolean('socialmediaxp');
			$table->enum('educationlevel',['1','2','3','4','5','6']);
			
			$table->boolean('eventmodeling');
            $table->boolean('streetteam');
            $table->boolean('flashmob');
            $table->boolean('instoredemo');
            $table->boolean('driving');
            $table->boolean('costume');
            $table->boolean('hostess');
            $table->boolean('setupbreak');
            $table->boolean('promotions');
            $table->boolean('retailsales');
            $table->boolean('liquor');
            $table->boolean('techps');
            $table->boolean('tradeshow');
            $table->boolean('national_tours');
            $table->boolean('sampling');
            $table->boolean('indoor');
            $table->boolean('outdoor');
            $table->boolean('brand_ambassador');
            $table->boolean('model');
            $table->boolean('teamlead');
            $table->boolean('driver');
            $table->boolean('emcee');
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
        Schema::drop('Experiences');
    }
}
