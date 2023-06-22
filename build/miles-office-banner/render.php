<?php

$attributestring = '';


foreach ($attributes as $key=>$value){
	if ($key == 'mediaId') {
		$attributestring .=  'background="' . wp_get_attachment_image_url($value, 'full') .'" ';
		continue;
	}
	if ($key == 'bannerHeading') {
		$attributestring .=  'city="' . $value .'" ';
		continue;
	}
	$attributestring .=  $key . '="' . $value .'" ';
}

?>

<miles-office-banner <?php echo $attributestring ?>>
		<?php echo $content;?>
</miles-office-banner>
