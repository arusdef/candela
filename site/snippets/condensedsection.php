<a href="<?= $sectionurl ?>" class="candela_section small_section width_<?= $sectionsize ?>">
	<h3><?= $sectiontitle->html() 
	?><?php if($sectionsubtitle->isNotEmpty()): ?>: 
		<span class="section_subtitle"><?= $sectionsubtitle->html() ?></span>
	<?php endif ?>
	</h3>
</a>