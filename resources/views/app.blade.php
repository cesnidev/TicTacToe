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
		
		<!-- CSS -->
		{!! Html::style('css/foundation.css')!!}
		{!! Html::style('http://fonts.googleapis.com/css?family=PT+Sans:400,700')!!}
		{!! Html::style('css/proyecto.form.css')!!}
		{!! Html::style('css/test/coming-soon-style.css')!!}
		{!! Html::style('css/foundation-icons.css')!!}
		{!! Html::style('css/foundation-datepicker.min.css')!!}
		{!! Html::style('css/fileup/dropzone.css')!!}
		@include('assets.notify_header')
		<link rel="shortcut icon" href="{{ asset('img/favicon.ico') }}">
	</head>
	<body>
		<div class="container">
			<div class="header row" style="border-bottom: 3px solid #dc222b;" >
				<div class="large-4 columns">
					{!! Html::decode(Html::link('/',Html::image('img/logo2.png',null,array('style'=>'width:30%;margin-top:10px;')))) !!}
				</div>
				<div class="tel-skype large-8 columns">
					<div class="row">
						<p><i class="step fi-telephone size-72"></i> Phone: 0039 123 45 679</p>
					</div>
					
					<div class="row">
						<div class="large-4 columns"></div>
						<div class="large-8 columns" align="center">
							<div class="row">
								
								@if (Auth::guest())
								<div class="large-6 columns small-4 columns"><a class="button radius" href="/auth/login">Login</a></div>
								<div class="large-6 columns small-4 columns"><a class="button radius" href="/signup">Register</a></div>
								@else
								<div class="large-6 columns small-4 columns hide-for-small"></div>
								<div class="large-6 columns small-4 columns">
									<a href="#" class="button radius" data-dropdown="hover1" data-options="is_hover:true; hover_timeout:5000">{{ Auth::user()->nickname }}</a>
									<ul id="hover1" class="f-dropdown" data-dropdown-content><!-- class="f-dropdown"-->
										<li><a href="#">Dashboard</a></li>
										<li><a href="/auth/logout">Logout</a></li>
									</ul>
								</div>
								@endif
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		@yield('content')
		@include('assets.notify_footer')
		{!! Html::script("js/fileup/dropzone.js")!!}
		{!! Html::script("js/proyecto.form.js")!!}
		{!! Html::script("js/jquery.backstretch.min.js")!!}
		{!! Html::script('js/jquery.easing.1.3.js')!!}
		{!! Html::script("js/foundation.min.js")!!}
		{!! Html::script("js/foundation-datepicker.min.js")!!}
		<script>
			$(document).foundation();
		</script>
	
	</body>
	</html>
		