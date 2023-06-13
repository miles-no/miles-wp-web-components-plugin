
<?php

$attributestring = '';


foreach ($attributes as $key=>$value){
	$attributestring .=  $key . '="' . $value .'" ';
}


echo '<miles-contact-card ' . $attributestring . '></miles-contact-card>';
