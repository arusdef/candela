<?php snippet('header', ['open' => 'open']) ?>
	<div class="barba-container <?= $page->title()->slug() ?>" id="section_page" data-namespace="section_page" >
		<?php 
			$key = 0;
			foreach ($site->index()->filterBy('template', 'section') as $section): 
				$sectionindex = ($key >= $site->index()->filterBy('template', 'section')->count() - 1) ? "last_section" : "";

				if($section->title() == $page->title()): 
					snippet('currentsection', ['section' => $page, 'lastsection' => $sectionindex]); 
				else: 
					snippet('condensedsection', ['sectiontitle' => $section->title(), 'sectionsubtitle' => $section->sectionsubtitle(), 'sectionurl' => $section->url(), 'sectionsize' => $section->sectionsize(), 'sectionpinned' => $section->sectionpinned(), 'lastsection' => $sectionindex ]);
				endif;
				$key++;
			endforeach;
		?>
	</div>

<?php snippet('footer') ?>