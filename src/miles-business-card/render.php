<?php

include_once '../../../miles-wp-theme/miles_limes.php';
use miles_limes;

if ( is_email($attributes['cvemail']) ) :
	$cv_reply = (array) miles_limes\get_consultants(null, null,  $attributes['cvemail']);
	$cv_data = $cv_reply[0];


	if (!empty($cv_data['imageUrlThumbnail'])) :
		$cv_data['image'] = $cv_data['imageUrlThumbnail'];
	endif;
	if (!empty($cv_data['telephone'])) :
		$cv_data['phone'] = $cv_data['telephone'];
	endif;
	if (!empty($cv_data['title'])) :
		$cv_data['jobtitle'] = $cv_data['title'];
	endif;


	$attributes = array_merge(  array_filter($attributes), array_filter((array) $cv_data));
endif;

$attributestring = '';


foreach ($attributes as $key=>$value){
	$attributestring .=  $key . '="' . $value .'" ';
}


echo '<miles-business-card ' . $attributestring . '></miles-business-card>';
