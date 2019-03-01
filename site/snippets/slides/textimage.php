<div class="slide_column column_text">
	<?php if( $slidetexttitle->isNotEmpty() ): ?>
		<h2><?= $slidetexttitle->html() ?></h2>
	<?php endif ?>
	<?= $slidetext->kirbytext() ?>
</div
><div class="slide_column column_image">
	<img class="slide_image image_right" src="<?= $slideimage->toFile()->resize(1000)->url() ?>">
	<p class="image_caption caption_right"><?= $slidecaption->html() ?></p>
</div>