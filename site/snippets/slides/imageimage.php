<div class="slide_column column_image column_image_left">
	<span>
		<img class="slide_image image_left" src="<?= $slideimage->toFile()->resize(1000)->url() ?>">
		<p class="image_caption caption_left"><?= $slidecaption->html() ?></p>
	</span>
</div
><div class="slide_column column_image column_image_right">
	<span>
		<img class="slide_image image_right" src="<?= $secondslideimage->toFile()->resize(1000)->url() ?>">
		<p class="image_caption caption_right"><?= $secondslidecaption->html() ?></p>
	</span>
</div>