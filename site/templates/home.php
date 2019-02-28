<?php snippet('header') ?>
<div class="barba-wrapper" data-namespace="home_page">
	<?php foreach($site->index()->filterBy('template', 'section') as $page): 
		?><a href="<?= $page->url() ?>" class="sliver section_link width_<?= $page->sectionsize()->html() ?>">
			<div class="gradient"></div>
			<h1><?= $page->title()->html() ?></h1>

			<div class="desktop_preview">
				<?php foreach ($page->sectionpreview()->toFiles() as $previewImage): ?>
					<img src="<?= $previewImage->url() ?>" >
				<?php endforeach ?>
			</div>
		</a
	><?php endforeach ?>
</div>
<?php snippet('footer') ?>