	</div>

	<?php snippet('mobilefooter') ?>
	</main>
	<?php $pagecount = ($site->index()->published()->filterBy('template', 'section')->count() == 6 ? 'seven' : '');  ?>
	<?php $show = ($site->trailerpopup() == 'true') ? 'show' : ' '; ?>
	<?php snippet('popup', ['show' => $show, 'pagecount' => $pagecount]) ?>
	<?php snippet('contact', ['pagecount' => $pagecount]) ?>
	<footer>
		<?php if($site->contactvisibility()): ?>
		<div id="contact_tab" class="footer_section"><?= $site->contacttitle()->html() ?></div>	
		<?php endif ?>
		<?php if($site->trailervisibility()): ?>
			<div id="trailer_tab" class="footer_section"><?= $site->trailertitle()->html() ?></div>	
		<?php endif ?>
		<?php if($site->brochurevisibility()): ?>
			<div id="brochure_tab" class="footer_section">
				<a target="_blank" href="<?= $site->brochurefile()->toFile()->url() ?>" >
					<?= $site->brochuretitle()->html() ?>
				</a>
			</div>	
		<?php endif ?>
	</footer>
</body>
</html>