<?php snippet('header') ?>
	<div class="barba-container <?= $page->title()->slug() ?>" id="section_page" data-namespace="section_page" >
		<?php 
			foreach ($site->index()->filterBy('template', 'section') as $section): 
				if($section->title() == $page->title()): 
					snippet('currentsection', ['section' => $page]); 
				else: 
					snippet('condensedsection', ['sectiontitle' => $section->title(), 'sectionsubtitle' => $section->sectionsubtitle(), 'sectionurl' => $section->url(), 'sectionsize' => $section->sectionsize() ]);
				endif;
			endforeach;
		?>
	</div>

<?php snippet('footer') ?>