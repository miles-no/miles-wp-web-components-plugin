<?php

$attributestring = '';


foreach ($attributes as $key=>$value){
	$attributestring .=  $key . '="' . $value .'" ';
}


echo '<miles-image-block '  .$attributestring . '>'.$content.'</miles-image-block>';
