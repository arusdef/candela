	</div>

	<?php snippet('mobilefooter') ?>
	</main>
	<?php $pagecount = ($site->index()->published()->filterBy('template', 'section')->count() == 6 ? 'seven' : '');  ?>
	<?php $show = ($site->trailerpopup() == 'true') ? 'show' : ' '; ?>
	<?php snippet('popup', ['show' => $show, 'pagecount' => $pagecount]) ?>
	<?php snippet('contact', ['pagecount' => $pagecount]) ?>
	<footer>
		<?php if($site->contactvisibility() == "true"): ?>
		<div id="contact_tab" class="footer_section"><?= $site->contacttitle()->html() ?></div>	
		<?php endif ?>
		<?php if($site->trailervisibility() == "true" ): ?>
			<div id="trailer_tab" class="footer_section"><?= $site->trailertitle()->html() ?></div>	
		<?php endif ?>
		<?php if($site->brochurevisibility() == "true"): ?>
			<div id="brochure_tab" class="footer_section">
				<a target="_blank" 
				<?php if($site->brochurefile()->isNotEmpty()): ?>
					href="<?= $site->brochurefile()->toFile()->url() ?>" 
				<?php endif ?>
				>
					<?= $site->brochuretitle()->html() ?>
				</a>
			</div>	
		<?php endif ?>
	</footer>
</body>
</html>