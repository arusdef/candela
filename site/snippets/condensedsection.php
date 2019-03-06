<a href="<?= $sectionurl ?>" class="candela_section small_section width_<?= $sectionsize ?>" id="<?= $sectiontitle->slug() ?>">
	<div class="sub_fader"></div>
	<h3><?= $sectiontitle->html() 
	?><?php if($sectionsubtitle->isNotEmpty()): ?>: 
		<span class="section_subtitle"><?= $sectionsubtitle->html() ?></span>
	<?php endif ?>
	</h3>
	<?php if($page->sectionpinned()->isNotEmpty()): ?>
		<img class="mobile_preview" src="<?= $sectionpinned->first()->toFile()->resize(400)->url() ?>">
	<?php endif ?>
</a>