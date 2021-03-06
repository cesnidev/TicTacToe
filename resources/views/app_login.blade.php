<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Eventica Project</title>
		
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		
		
		<link rel="shortcut icon" href="asset('img/favicon.ico')">

		{!! Html::style('css/uff/animate.css') !!}
		{!! Html::style('css/uff/jquery-ultimate-fancy-form.css') !!}
		{!! Html::style('css/uff/hint.css') !!}
		{!! Html::style('css/normalize.css') !!}
		{!! Html::style('css/foundation.min.css') !!}
		{!! Html::style('css/foundation.css') !!}
		{!! Html::style('css/uff/custom.css') !!}
	</head>
	<body>
		<div class="large-4 large-offset-4 columns" style="vertical-align:middle; " class="form">

	<div class="row show-for-large-only" align="center" style="margin-top:8rem;">
	</div>
	<div class="row hide-for-small" align="center">
		{!! html_entity_decode(Html::link('/',
			Html::image('img/index_logo.png',null,array('style'=>'margin-bottom:10px;')),array(
		'id'=>'logo_login',
		'style'=>'width:350px;'
		))) !!}
	</div>
	<div class="row show-for-small-only" align="center" style="margin-top:100px;">

		{!! html_entity_decode(Html::link('/',
			Html::image('img/index_logo.png',null,array('style'=>'margin-bottom:10px;')),array(
		'id'=>'logo_login'
		)
		)
		) !!}

	</div>
		
		<div class="row">
			
			@if (count($errors) > 0)
						<div class="alert alert-danger">
							<font color="white"><strong>Whoops!</strong> There were some problems with your input.<br><br></font>
							<ul>
								@foreach ($errors->all() as $error)
									<li style="color:white;">{{ $error }}</li>
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
											<label class="columns large-3 control-label" data-sb="fadeInRight">Email</label>
											<div class="columns large-9">
												{!! Form::email('email',null,['data-sb'=>'fadeInLeft','class'=>'form-control','data-validation-required'=>'#manager_first_name_error_required','placeholder'=>'eventica@email.com','value'=>'{{old("email")}}']); !!}
												<div class="clearfix"></div>
												<div id="manager_first_name_error_required" class="alert-box warning warning-danger">
												Email is required
												</div>
											</div>
										</div>
										<div class="form-group">
											<label class="columns large-3 control-label" data-sb="fadeInRight">Password</label>
											<div class="columns large-9">
												{!! Form::password('password',['data-sb'=>'fadeInLeft','class'=>'form-control','data-validation-required'=>'#manager_last_name_error_required','placeholder'=>'••••••••••••']) !!}
												<div class="clearfix"></div>
												<div id="manager_last_name_error_required" class="alert-box warning warning-danger">
												Password is required
												</div>
											</div>
										</div>
									</div>
										<div class="row">
											<div class="large-3 columns"></div>
											<div class="large-9 columns" align="center">
												{!! Form::button('Log in',array('class'=>'button send_form radius','type'=>'submit','data-sb'=>'bounceInLeft','data-step-finish')) !!}
												{{-- {!! Form::button('Log in',array('class'=>'button send_form radius','type'=>'submit','data-sb'=>'bounceInLeft','data-step-finish','disabled')) !!} --}}
											</div>
											
										</div>
										
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
					<div class="clear"></div>
				
				{!! Form::close() !!}

			<div style="color:#fff;text-align:center;">&copy; 2015 Eventica. All Rights Reserverd.</div>
		</div>
	</div>

	{!! Html::script('js/jquery.js') !!}
	{!! Html::script('js/uff/jquery-ultimate-fancy-form.min.js') !!}
	{!! Html::script('js/foundation.min.js') !!}
	{!! Html::script('js/foundation/foundation.js') !!}
	{!! Html::script('js/foundation/foundation.dropdown.js') !!}

	</body>
	</html>