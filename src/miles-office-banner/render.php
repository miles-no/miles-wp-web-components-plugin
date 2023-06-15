<miles-office-banner>

		<?php if($attributes['mediaId'] != ''):?>
			<figure slot="bannerimage">
				<?php echo wp_get_attachment_image( $attributes['mediaId'], 'full' ); ?>
			</figure>
		<?php endif;?>


		<?php if($attributes['bannerHeading'] != ''):?>
			<h2 slot="bannerheading"><?php  echo $attributes['bannerHeading'] ?></h2>
		<?php endif;?>


		<div class="miles-office-menu">
			<?php echo $content;?>
		</div>

</miles-office-banner>
