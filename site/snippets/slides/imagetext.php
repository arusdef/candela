<div class="slide_column column_image column_image_left">
	<span>
		<?php if($slideimage->isNotEmpty()): ?>
		<img class="slide_image image_left" src="<?= $slideimage->toFile()->resize(1000)->url() ?>">
		<?php endif ?>
		<p class="image_caption caption_left"><?= $slidecaption->html() ?></p>
	</span>
</div
><div class="slide_column column_text">
	<?php if( $slidetexttitle->isNotEmpty() ): ?>
		<h2><?= $slidetexttitle->html() ?></h2>
	<?php endif ?>
	<?= $slidetext->kirbytext() ?>
</div>