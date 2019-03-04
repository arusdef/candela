<?php snippet('header') ?>
<div class="barba-container" id="home_page" data-namespace="home_page">
	<?php foreach($site->index()->filterBy('template', 'section') as $page): 
					if(!$page->isDraft()):
		?><a href="<?= $page->url() ?>" id="<?= $page->title()->slug() ?>" class="sliver section_link width_<?= $page->sectionsize()->html() ?>">
			<div class="fader"></div>
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
						<span class="image_wrapper"><img src="<?= $previewImage->resize(400)->url() ?>" ></span>
					<?php endif ?>
				<?php endforeach ?>
			</div>
		</a
	><?php 
					endif;
				endforeach ?>
</div>
<?php snippet('footer') ?>