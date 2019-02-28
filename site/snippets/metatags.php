<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="<?= $site->seodescription()->html() ?>" />
<meta name="keywords" content="<?= $site->seotags()->html() ?>">

<!-- Schema.org markup for Google+ -->
	<meta itemprop="name" content="<?= $site->title()->html() ?>">
	<meta itemprop="description" content="<?= $site->seodescription()->html() ?>">
	<?php if($site->seoimage()->isNotEmpty()): ?>
		<meta itemprop="image" content="<?= $site->seoimage()->toFile()->url() ?>">
	<?php endif ?>
<!-- Twitter Card data -->
	<meta name="twitter:card" content="">
	<meta name="twitter:site" content="<?= $site->url() ?>">
	<meta name="twitter:title" content="<?= $site->title()->html() ?>">
	<meta name="twitter:description" content="<?= $site->seodescription()->html() ?>">
	<meta name="twitter:creator" content="">
<!-- Twitter summary card with large image must be at least 280x150px -->
	<?php if($site->seoimage()->isNotEmpty()): ?>
		<meta name="twitter:image:src" content="<?= $site->seoimage()->toFile()->url() ?>">
	<?php endif ?>
<!-- Open Graph data -->
	<meta property="og:title" content="<?= $site->title()->html() ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?= $site->url() ?>" />
	<!-- 1200 x 630 For optimal sharing -->
	<?php if($site->seoimage()->isNotEmpty()): ?>
	<meta property="og:image" content="<?= $site->seoimage()->toFile()->url() ?>" />
	<?php endif ?>
	<meta property="og:description" content="<?= $site->seodescription()->html() ?>" />
	<meta property="og:site_name" content="<?= $site->title()->html() ?>" />