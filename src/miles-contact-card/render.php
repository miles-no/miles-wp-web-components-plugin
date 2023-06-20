
<?php

$attributestring = '';


foreach ($attributes as $key=>$value){
	$attributestring .=  $key . '="' . $value .'" ';
}


echo '<miles-contact-card slot="office"' . $attributestring . '></miles-contact-card>';
