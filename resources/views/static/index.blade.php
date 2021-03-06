@include('assets.header')
<header>
	<button id="eventica_menu_button" class="menu-toggle radius hide-for-large-up">
		<span class="bar"></span>
		<span class="bar"></span>
	<span class="bar"></span>	  </button>
	
	<div class="row nav-collapse collapse">
		<nav id="eventica_menu_nav" class="menu" data-topbar role="navigation" data-options="is_hover: false">
			<ul style="margin-left:-30px;">
				<li>
					<a onClick="close_nav();" href="#services">Services</a>
				</li>
				<li class="hide-for-small" >
					<a onClick="close_nav();" href="#events">Events</a>
				</li>
				<li class="show-for-medium-only" style="margin-top:-10px;">
					<a onClick="close_nav();" href="contact.php">Contact</a>
				</li>
				
				<li class="show-for-small-only" style="margin-top:-10px;">
					<a onClick="close_nav();"  href="#events_mobile">Events</a>
				</li>
				<li class="show-for-small-only" style="margin-top:-10px;">
					<!--<a onClick="close_nav();" style="margin-top:10px;" href="contact.php">Contact</a>-->
					{!! Html::link('contact','Contact',array('onClick'=>'close_nav();')) !!}
				</li>
				<li style="margin-top:-10px;">{!! Html::link('home','Login',array('class' => 'button white radius')) !!}</li>
				<li style="margin-top:-10px;">{!! Html::link('signup','Sign Up',array('class' => 'button red radius')) !!}</li>
			</ul>
		</nav>
		<div class="logo">
			{!! html_entity_decode(Html::link('/',Html::image('img/index_logo.png'),array('id'=>'logo_eventica','alt'=>'logo'))) !!}
		</div> 
		<div class="row show-for-large-up">
			<div class="call_us"><font color="red"><i class="step fi-telephone size-96"></i></font> 713.497.6689</div>
		</div>
	</div>
</header>
<div class="cover hide-for-small">
	<div class="video-wrapper wrapper">
		<video autobuffer="autobuffer" poster="img/video/poster.png" autoplay="autoplay" loop="loop"  preload="true">
			<source src="img/video/DemoB.mp4" type="video/mp4"/>
			
		</video>
	</div>
	
	<div class="hero-wrapper wrapper">
		<div class="hero">
			<h1 class="tagline"><br> <span class="nowrap"></span></h1>
			{!! Html::link('home','Start Now!!',array('class' => 'button white radius')) !!}
		</div>
	</div>
</div>
<div class="show-for-small-only" style="margin-bottom:50px;">
	<img class="poster_eventica" src="img/video/poster.png" />
</div>
</div>
<section id="services" class="row" style="margin-top:-100px;margin-bottom:50px;">
	<div class="small-12 large-4 columns service">
		<div class="row">
			<section class="main">
				
				<ul class="ch-grid">
					<div class="row">
						<div class="large-12 columns">
							<li>
								<div class="ch-item recruiting">
									<div class="ch-info"><br>
										<h3>Promotional Staff</h3>
										<p><a href="privacy.php">Right Reserved</a></p>
									</div>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</section>
		</div>
		<div class="row" style="margin-top:-40px;">
			<p style="font-family:'Century Gothic'; font-size:22px;">Our Brand Ambassadors & Sampling Demonstrators are energetic, personable,<font color="red"> reliable and experienced </font>in high volume retail accounts. They educate and inform consumers by sharing key messages and creating memorable <font color="red">brand experiences.</font></p>
		</div>
	</div>
	<div class="small-12 large-4 columns service">
		<div class="row">
			<section class="main">
				
				<ul class="ch-grid">
					<div class="row">
						<div class="large-12 columns">
							<li>
								<div class="ch-item managment">
									<div class="ch-info"><br>
										<h3>Staff Management</h3>
										<p><a href="privacy">Right Reserved</a></p>
									</div>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</section>
		</div>
		<div class="row" style="margin-top:-40px;">
			<p style="font-family:'Century Gothic'; font-size:22px;">We are all in one shop!!!<br>From Labor Staff needed for Setting up & Breaking down <font color="red">large scale events</font> to <i>Go Go dancers, Photographers, and Emcees;</i> we provide<font color="red"> the best talent </font>  to meet our clients needs.</p>
		</div>
	</div>
	<div class="small-12 large-4 columns service">
		<div class="row">
			<section class="main">
				
				<ul class="ch-grid">
					<div class="row">
						<div class="large-12 columns">
							<li>
								<div class="ch-item trainning">
									<div class="ch-info"><br>
										<h3>Staff Training</h3>
										<p><a href="privacy">Right Reserved</a></p>
									</div>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</section>
		</div>
		<div class="row" style="margin-top:-40px;">
			<p style="font-family:'Century Gothic'; font-size:22px;">At Eventica, we ensure that every member of the team receives the <font color="red"> proper training </font>required to execute an effective activation. Our staff mantains <font color="red">working knowledge</font> of all client's products to represent each brand appropriately.</p>
		</div>
	</div>
</section>
<section id="events" class="events_e hide-for-small" style="margin-top:50px;">
	<img src="img/Slide/EventValues.png">  
	<div class="boton" align="center">
		<a class="button read_more radius" href="uc">Eventica in Action</a>  
	</div>
	
</section>

<section id="events_mobile" class="events_e show-for-small-only" style="margin-top:50px;">
	<div class="row" align="center">
		<h1 class="inspire">Excellence</h1>
	</div>
	<div class="boton" align="center">
		<a class="button read_more radius" href="uc">Gallery</a> 
	</div>
	<div class="row" align="center">
		<h1 class="inspire">Commitment</h1>
	</div>
</section>
<section style="background-color:#dc222b;">
	<div class="row" align="center" style="background-color:#dc222b;">
		<div class="large-12 columns" >
			
			<div id="owl-demo" class="owl-carousel" >
				<div class="item"><img src="img/sponsors/1.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/2.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/3.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/4.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/5.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/6.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/7.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/8.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/9.png" style="width:150px;" alt="Owl Image"></div>
				<div class="item"><img src="img/sponsors/10.png" style="width:150px;" alt="Owl Image"></div>
			</div>
			
		</div>
	</div>
</section>
<section style="background-color:#fff;width:100%;">
	<div class="row"  style="background-color:#fff;">   
		
		<div class="large-8 columns visible-for-xlarge hide-for-medium hide-for-small">
			
			<ul class="tca-orbit_2" style="height:400px;" data-orbit data-options="bullets: false; animation:fade; animation_speed: 800; pause_on_hover: false; bullets: false; timer_speed: 3000;">
				<li>
					<img src="img/slider_2/slide11.png" id="tca_banner_img_2" alt="slide 1" />
				</li>
				<li class="active">
					<img src="img/slider_2/slide21.png" id="tca_banner_img_2" alt="slide 2" />
				</li>
				<li>
					<img src="img/slider_2/slide31.png" id="tca_banner_img_2" alt="slide 3" />
				</li>
			</ul>
			
		</div>
		<div class="hide-for-large hide-for-xlarge" align="center">
			<h2 style="font-family:Century gothic;color:gray;">Call Us: (333) 333-3333</h2>
		</div>
		
		<div class="large-4 columns hide-for-small hide-for-medium" align="left" style="margin-top:-10px;">          
			<br>
			<div class="row">
				<div class="large-12 columns" >
					<a href="#" target="_blank">
						<img onMouseOver="this.src='img/social/twitter.png'" onMouseOut="this.src='img/social/twitter2.png'" src="img/social/twitter2.png" id="tca_social">
					</a>
					<a href="#"  target="_blank">
						<img onMouseOver="this.src='img/social/facebook.png'" onMouseOut="this.src='img/social/facebook3.png'" src="img/social/facebook3.png" id="tca_social">
					</a>
					<a  href="#"  target="_blank">
						<img onMouseOver="this.src='img/social/youtube.png'" onMouseOut="this.src='img/social/youtube2.png'" src="img/social/youtube2.png" id="tca_social">
					</a>
					<a  href="#"  target="_blank">
						<img onMouseOver="this.src='img/social/linkedin.png'" onMouseOut="this.src='img/social/linkedin2.png'" src="img/social/linkedin2.png" id="tca_social">
					</a>
				</div>
			</div>
			<div class="row" align="center">
				<h1 style="color:#dc222b;">Conect With Us</h1>
			</div>
			
		</div>
		<div class="small-12 medium-12 columns hide-for-large-up hide-for-xlarge-up" align="left" style="margin-bottom:20px;margin-top:-20px;" >          
			
			<div class="row">
				<div class="small-3 medium-3 columns" align="right">
					<a href="#" target="_blank">
						<img onMouseOver="this.src='img/social/twitter.png'" onMouseOut="this.src='img/social/twitter2.png'" src="img/social/twitter2.png" id="tca_social_mobile">
					</a>
				</div>
				<div class="small-3 medium-3 columns" align="center">
					<a href="#"  target="_blank">
						<img onMouseOver="this.src='img/social/facebook.png'" onMouseOut="this.src='img/social/facebook3.png'" src="img/social/facebook3.png" id="tca_social_mobile">
					</a>
				</div>
				<div class="small-3 medium-3 columns" align="center">
					<a  href="#"  target="_blank">
						<img onMouseOver="this.src='img/social/youtube.png'" onMouseOut="this.src='img/social/youtube2.png'" src="img/social/youtube2.png" id="tca_social_mobile">
					</a>
				</div>
				<div class="small-3 medium-3 columns" align="left">
					<a  href="#"  target="_blank">
						<img onMouseOver="this.src='img/social/linkedin.png'" onMouseOut="this.src='img/social/linkedin2.png'" src="img/social/linkedin2.png" id="tca_social_mobile">
					</a>
				</div>
			</div>
		</div>
		
	</div>
</section>
<footer style="background-color:#293440;">
	<section style="background-color:#293440;">
		<div class="row" style="background-color:#293440;">
			<div class="large-4 columns" style="color:white;margin-top:25px;text-align:center;">
				<img class="imgfooter" src="{{asset('img/logo_footer2.png')}}" alt="">
				{{--<span class="nowrap"><b>&copy; 2015</b></span>--}}
			</div>
			<div class="large-5 columns hide-for-small" style="margin-top:5px;text-align:center;">
				<nav class="menu">
					<ul>
						<li style="color:white;">|</li>
						<li>{!! Html::link('#services','Services',array('style'=>'color:white;'))!!}</li>
						<li>{!! Html::link('#events','Events',array('style'=>'color:white;'))!!}</li>
						<li>{!! Html::link('contact','Contact',array('style'=>'color:white;'))!!}</li>
						<li>{!! Html::link('signup','Sign Up',array('style'=>'color:white;'))!!}</li>
						<li style="color:white;">|</li>
					</ul>
				</nav>
			</div>
			<div class="large-3 columns" style="color:white;margin-top:25px;text-align:center;margin-bottom:15px;"  align="right">
				{!! Html::link('terms','Terms',array('style'=>'color:white;')) !!}
				|
				 {!! HTML::Link('privacy','Privacy',array('style'=>'color:white;')) !!}
			</div>
		</div>
	</section>
</footer>
@include('assets.scripts')

