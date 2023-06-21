<!-- Render the block -->
<?php

$attributestring = '';


foreach ($attributes as $key=>$value){
	if ($key == 'mediaId') {
		$attributestring .=  'image="' . wp_get_attachment_image_url($value, 'full') .'" ';
		continue;
	}
	$attributestring .=  $key . '="' . $value .'" ';
}


echo '<miles-banner ' . $attributestring . '></miles-banner>';?>
