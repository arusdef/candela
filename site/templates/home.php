<?php snippet('header') ?>
<div class="barba-container" data-namespace="home_page">
	<?php foreach($site->index()->filterBy('template', 'section') as $page): 
		?><a href="<?= $page->url() ?>" class="sliver section_link width_<?= $page->sectionsize()->html() ?>">
			<div class="gradient"></div>
			<h1><?= $page->title()->html() 
			?><?php if($page->sectionsubtitle()->isNotEmpty()): 
			?>: <span class="section_subtitle"><?= $page->sectionsubtitle()->html() ?></span>
				<?php endif ?>
			</h1>
			
			<?php if($page->sectionpreview()->toFiles()->count() > 7): ?>
				<div class="desktop_preview lots_of_images">
			<?php else: ?>
				<div class="desktop_preview">
			<?php endif ?>
				<?php foreach ($page->sectionpreview()->toFiles() as $previewImage): ?>
					<?php if($previewImage->image()): ?>
						<img src="<?= $previewImage->resize(400)->url() ?>" >
					<?php endif ?>

				<?php endforeach ?>
			</div>
		</a
	><?php endforeach ?>
</div>
<?php snippet('footer') ?>