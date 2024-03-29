<section class="candela_section current_section <?= $lastsection ?> <?= 'current_size_'.$section->sectionsize() ?>">
	<div class="sub_fader"></div>
	<h1 class="current_section_title"><a href="<?= $site->url() ?>" id="close_section"><?= $section->title()->html()
		?></a><?php if($section->sectionsubtitle()->isNotEmpty()): 
				?>: <span class="section_subtitle"><?= $section->sectionsubtitle()->html() ?></span>
		<?php endif ?>
	</h1>
	<h2 class="slide_counter">
		<span class="slide_counter_current_slide">1</span> / <?= $section->sectionslides()->toStructure()->count() ?>
	</h2>

	<div class="section_carousel">
		<?php foreach ($section->sectionslides()->toStructure() as $slide): ?>
			<div class="section_carousel_cell <?= 'target_slide-'.$slide->fulltitle() ?> <?= 'slide_type_'.$slide->selectcontent() ?>" >
				<?php snippet('slides/'.$slide->selectcontent(), ['slidetexttitle' => $slide->textualtitle(), 'slidetext' => $slide->textualcontent(), 'slideimage' => $slide->imagecontent(), 'slidecaption' => $slide->imagecaption(), 'secondslideimage' => $slide->secondimagecontent(), 'secondslidecaption' => $slide->secondimagecaption(), 'slidevideo' => $slide->videocontent()]) ?>
			</div>
		<?php endforeach ?>
		<div class="slide_button previous"></div>
		<div class="slide_button next"></div>
	</div>

</section>