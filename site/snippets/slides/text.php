<div class="slide_single_column column_text">
	<?php if( $slidetexttitle->isNotEmpty() ): ?>
		<h2><?= $slidetexttitle->html() ?></h2>
	<?php endif ?>
	<?= $slidetext->kirbytext() ?>
</div>