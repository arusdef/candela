<section>
	<div class="logo_up">
		<img src="assets/icons/candela_icon.svg">
	</div>
	<?php if($site->trailervisibility()): ?>
			<div class="mobile_brochure">
				<a target="_blank"
				<?php if($site->brochurefile()->isNotEmpty()): ?>
					href="<?= $site->brochurefile()->toFile()->url() ?>" 
				<?php endif ?>
				 id="download_brochure">Download Brochure</a>
				<p id="mobile_weather" class="" 
				<?php if($site->weatherchannelurl()->isNotEmpty()): ?>
					data-link="<?= $site->weatherchannelurl()->html() ?>"
				<?php endif ?>
				>All rights reserved. Candela 2019</p>
			</div>
		<?php endif ?>
</section>