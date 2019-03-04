<!DOCTYPE html>
<html>
<head>
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

		</style>

	</noscript>

</head>
<body>

<?php $pagecount = ($site->index()->published()->filterBy('template', 'section')->count() == 6 ? 'seven' : ''); ?>

<header class="sliver <?= $pagecount ?>">
	<div class="header_section" id="temp">
		<h3 class="cloudy">Current Temperature in Tulum
			<span class="current_temp">
				<span class="temperature_display" id="fahrenheit"></span> / <span class="temperature_display" id="celsius"></span>
		</span>
		</h3>
	</div>
	<a class="header_section" id="wordmark" href="<?= $site->url() ?>"></a>
	<a class="header_section" id="logomark" href="<?= $site->url() ?>"></a>
</header>
<main class="<?= $pagecount ?>">
	<div id="barba-wrapper">