<section class="candela_section current_section">
	<h1><?= $section->title()->html()
		?><?php if($section->sectionsubtitle()->isNotEmpty()): 
				?>: <span class="section_subtitle"><?= $section->sectionsubtitle()->html() ?></span>
		<?php endif ?>
	</h1>
	<h2 class="slide_counter">
		<span class="slide_counter_current_slide">1</span>/<?= $section->sectionslides()->toStructure()->count() ?>
	</h2>

	<div class="section_carousel">
		<?php foreach ($section->sectionslides()->toStructure() as $slide): ?>
			<div class="section_carousel_cell">
				<?php snippet('slides/'.$slide->selectcontent(), ['slidetexttitle' => $slide->textualtitle(), 'slidetext' => $slide->textualcontent(), 'slideimage' => $slide->imagecontent(), 'slidecaption' => $slide->imagecaption(), 'slidevideo' => $slide->videocontent()]) ?>
			</div>
		<?php endforeach ?>
		<div class="button previous"></div>
		<div class="button next"></div>
	</div>

</section>