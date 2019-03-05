<section>
	<div class="logo_up"></div>
	<?php if($site->trailervisibility()): ?>
			<div class="mobile_trailer">
				<?= $site->trailertitle()->html() ?>
			</div>
		<?php endif ?>
</section>