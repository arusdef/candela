<?php snippet('header', ['open' => '']) ?>
<div class="barba-container" id="home_page" data-namespace="home_page">
	<?php foreach($site->index()->filterBy('template', 'section') as $page): 
			if(!$page->isDraft()):
	?><a href="<?= $page->url() ?>" id="<?= $page->title()->slug() ?>" class="sliver section_link <?= 'width_'.$page->sectionsize()->html() ?> <?= ($page->sectionpinned()->isNotEmpty() ? '' : 'mobile_width_half') ?>">
			<div class="fader"></div>
			<div class="gradient"></div>
			<h1><?= $page->title()->html() 
			?><?php if($page->sectionsubtitle()->isNotEmpty()): 
			?>: <span class="section_subtitle"><?= $page->sectionsubtitle()->html() ?></span>
				<?php endif ?>
			</h1>
			<?php if($page->sectionpreviewfull()->isNotEmpty()): ?>
				<?php if($page->sectionpreviewfull()->toStructure()->count() > 7): ?>
					<div class="desktop_preview lots_of_images">
				<?php else: ?>
					<div class="desktop_preview">
				<?php endif ?>
					<?php foreach ($page->sectionpreviewfull()->toStructure() as $preview): ?>
						<?php if($preview->previewimage()->isNotEmpty() && $preview->previewimage()->image()): ?>
							<span class="image_wrapper"
							<?php if($preview->targetslide()->isNotEmpty()): ?> 
								data-target-slide="<?= $preview->targetslide()->first() ?>"
							<?php endif ?>
							><img src="<?= $preview->previewimage()->toFile()->resize(400)->url() ?>" ><div class="image_wrapper_outline"></div></span>
						<?php endif ?>
					<?php endforeach ?>
				</div>
			<?php endif ?>
			<?php if($page->sectionpinned()->isNotEmpty()): ?>
				<?php if($page->sectionpinned()->first()->exists()): ?>
					<img class="mobile_preview" src="<?= $page->sectionpinned()->first()->toFile()->resize(400)->url() ?>">
				<?php endif ?>
			<?php endif ?>
		</a><?php 
					endif;
				endforeach ?>
</div>
<?php snippet('footer') ?>