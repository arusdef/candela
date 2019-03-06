<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
	<form action="https://candela.us20.list-manage.com/subscribe/post?u=c8388ed325757d81671bf4904&amp;id=dfe4278efc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
			<h2><?= $site->contactsubscribeheader()->html()?></h2>
			<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
			<div class="mc-field-group">
				<label class="form_name" for="mce-EMAIL">Email Address <span class="asterisk">*</span></label
					><input class="form_entry" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
			</div>
			<div class="mc-field-group">
				<label class="form_name" for="mce-FNAME">Name </label
					><input class="form_entry" type="text" value="" name="FNAME" class="" id="mce-FNAME">
			</div>
			<div class="mc-field-group size1of2">
				<label class="form_name" for="mce-MMERGE6">Phone Number </label
					><input class="form_entry" type="text" name="MMERGE6" class="" value="" id="mce-MMERGE6">
			</div>
			<div id="mce-responses" class="clear">
				<div class="response" id="mce-error-response" style="display:none"></div>
				<div class="response" id="mce-success-response" style="display:none"></div>
			</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
	    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c8388ed325757d81671bf4904_dfe4278efc" tabindex="-1" value=""></div>
	    <div class="clear"><input type="submit" value="<?= $site->contactsubscribebutton()->html()?>" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
  	</div>
	</form>
</div>
<!--End mc_embed_signup-->