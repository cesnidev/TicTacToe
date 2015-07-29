@extends('app')

@section('content')
		
		@if (count($errors) > 0)
						<div class="alert alert-danger">
							<strong>Whoops!</strong> There were some problems with your input.<br><br>
							<ul>
								@foreach ($errors->all() as $error)
									<li>{{ $error }}</li>
								@endforeach
							</ul>
						</div>
		@endif
		
				{!! Form::open(array(
					'url' => '/auth/login',
					'method' => 'post',
					'role'=>'form',
					'class'=>'form form-horizontal component-uff p15','style'=>'border:2px solid #fff;')) !!}
				{!! Form::token() !!}
				<div class="row">
						<div class="large-12 columns">
							<div data-step>
								<div class="row">
									<div class="large-12 columns">
											<h2 data-sb="fadeInLeft" class="sub-title">Welcome to Eventica</h2>
										
										<div class="form-group">
											<label class="columns large-3 control-label" data-sb="fadeInRight">Username</label>
											<div class="columns large-9">
												<!--{!! Form::email('email',null,['data-sb'=>'fadeInLeft','class'=>'form-control','data-validation-required'=>'#manager_first_name_error_required','placeholder'=>'eventica']); !!}-->
												<input type="email" class="form-control" name="email" value="{{ old('email') }}">
												

												<!--<div class="clearfix"></div>
												<div id="manager_first_name_error_required" class="alert-box warning warning-danger">
												Username is required
												</div>-->
											</div>
										</div>
										<div class="form-group">
											<label class="columns large-3 control-label" data-sb="fadeInRight">Password</label>
											<div class="columns large-9">
												<!--{!! Form::password('password',['data-sb'=>'fadeInLeft','class'=>'form-control','data-validation-required'=>'#manager_last_name_error_required','placeholder'=>'••••••••••••']) !!}
												<div class="clearfix"></div>
												<div id="manager_last_name_error_required" class="alert-box warning warning-danger">
												Password is required
												</div>-->
												<input type="password" class="form-control" name="password">
											</div>
											</div>
										</div>
										{!! Form::checkbox('remember',null,false,['id'=>'rememberMe','style'=>'margin-left:10px;']); !!}
										<label for="rememberMe"><div style="color:#fff;">Remember me</div></label>
										{!! Form::button('Log in',array('class'=>'button send_form radius','type'=>'submit','data-sb'=>'bounceInLeft','data-step-finish')) !!}
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
					<div class="clear"></div>
				
				{!! Form::close() !!}
@endsection
