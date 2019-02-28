	</main>
	<?php snippet('popup', ['show' => '']) ?>	
	<footer>
		<?php if($site->contactvisibility()): ?>
		<div id="contact_tab" class="footer_section"><?= $site->contacttitle()->html() ?></div>	
		<?php endif ?>
		<?php if($site->trailervisibility()): ?>
			<div id="trailer_tab" class="footer_section"><?= $site->trailertitle()->html() ?></div>	
		<?php endif ?>
		<?php if($site->brochurevisibility()): ?>
			<div id="brochure_tab" class="footer_section"><?= $site->brochuretitle()->html() ?></div>	
		<?php endif ?>
	</footer>
</body>
</html>