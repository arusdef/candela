<!DOCTYPE html>
<html>
<head>
	<title><?= $site->title()->html() ?></title>

	<link rel="icon" type="image/png" href="<?= $site->url() ?>/assets/favicon/favicon16.png" sizes="16x16">  
	<link rel="icon" type="image/png" href="<?= $site->url() ?>/assets/favicon/favicon32.png" sizes="32x32">  
	<link rel="icon" type="image/png" href="<?= $site->url() ?>/assets/favicon/favicon96.png" sizes="96x96">  

	<?php snippet('metatags') ?>
	<?= css('assets/main.css') ?>

</head>
<body>

<header class="sliver">
	<div class="header_section" id="temp">
		<h3 class="">Current Temperature in Tulum</h3>
	</div>
	<a class="header_section" id="wordmark" href="<?= $site->url() ?>"></a>
	<a class="header_section" id="logomark" href="<?= $site->url() ?>"></a>
</header>
<main>
	