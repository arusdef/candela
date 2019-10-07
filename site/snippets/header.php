<!DOCTYPE html>
<html>
<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-148733003-1"></script>
	<script>
  	window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());

  	gtag('config', 'UA-148733003-1');
	  gtag('config', 'AW-707658595'); // added for google tags oct 2, 2019
	</script>

	<!-- Event snippet for Sign-up conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. --> <script> function gtag_report_conversion(url) { var callback = function () { 
			console.log("Google Ad Tag callback");
			if (typeof(url) != 'undefined') { 
				window.location = url; 
			} 
		}; 
		gtag('event', 'conversion', { 'send_to': 'AW-707658595/Y_ZTCMv3yKwBEOOGuNEC', 'event_callback': callback }); return false; } </script>
	<!-- Site start -->
	<title><?= $site->title()->html() ?></title>

	<link rel="icon" type="image/png" href="<?= $site->url() ?>/assets/favicon/favicon16.png" sizes="16x16">  
	<link rel="icon" type="image/png" href="<?= $site->url() ?>/assets/favicon/favicon32.png" sizes="32x32">  
	<link rel="icon" type="image/png" href="<?= $site->url() ?>/assets/favicon/favicon96.png" sizes="96x96">  

	<?php snippet('metatags') ?>
	<?= css('assets/main.css') ?>
	<?= js([
	  'assets/js/jquery-3.3.1.min.js',
	  'assets/js/barba.min.js',
	  'assets/js/TweenMax.min.js',
	  'assets/js/flickity.pkgd.min.js',
	  'assets/js/player.js',
	  'assets/js/script.js'
	]) ?>

	<noscript>
		<style type="text/css">
			.fader{
				opacity: 0;
			}

			.candela_section{
				opacity: 1;
			}

			.sub_fader{
				opacity: 0;
			}

			.mobile_footer{
				opacity: 1;
			}

		</style>

	</noscript>

</head>
<body>

<?php $pagecount = ($site->index()->published()->filterBy('template', 'section')->count() == 6 ? 'seven' : ''); ?>

<header class="sliver <?= $pagecount ?>">
	<div class="header_section" id="temp">
		<h3 class="cloudy">
			<?php if($site->weatherchannelurl()->isNotEmpty()): ?>
			<a href="<?= $site->weatherchannelurl()->html() ?>" target="_blank">Current Temperature in Tulum</a>
			<?php else: ?>
				Current Temperature in Tulum
			<?php endif ?>
			<span class="current_temp">
				<span class="temperature_display" id="fahrenheit"></span> / <span class="temperature_display" id="celsius"></span>
		</span>
		</h3>
	</div>
	<a class="header_section" id="wordmark" href="<?= $site->url() ?>"></a>
	<a class="header_section <?= $open ?>" id="logomark" href="<?= $site->url() ?>">
		<?php snippet('icon') ?>
	</a>
</header>
<main class="<?= $pagecount ?>">
	<div id="barba-wrapper">