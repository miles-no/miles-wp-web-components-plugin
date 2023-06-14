
<?php

$attributestring = '';


foreach ($attributes as $key=>$value){
	if ($key == 'text') {
		$text = $value;
		continue;
	}
	$attributestring .=  $key . '="' . $value .'" ';
}


echo '<miles-info-block ' . $attributestring . '>'.$text.'</miles-info-block>';
