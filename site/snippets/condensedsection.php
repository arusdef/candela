<a href="<?= $sectionurl ?>" 
	class="candela_section small_section width_<?= $sectionsize ?> <?= $lastsection ?> <?= ($sectionpinned->isNotEmpty() ? '' : 'mobile_width_half') ?>" 
	id="<?= $sectiontitle->slug() ?>">
	<div class="sub_fader"></div>
	<h3><?= $sectiontitle->html() 
	?><?php if($sectionsubtitle->isNotEmpty()): ?>: 
		<span class="section_subtitle"><?= $sectionsubtitle->html() ?></span>
	<?php endif ?>
	</h3>
	<?php if($sectionpinned->isNotEmpty()): ?>
		<?php if($sectionpinned->first()->exists()): ?>
			<img class="mobile_preview" src="<?= $sectionpinned->first()->toFile()->resize(400)->url() ?>">
		<?php endif ?>
	<?php endif ?>
</a>