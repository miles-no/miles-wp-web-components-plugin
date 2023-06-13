<?php
$content = $attributes['content'] ?? '';
?>
<miles-button-anchor color="#3F1221" <?php
foreach ($attributes as $key=>$value){
	echo $key . '="' . $value .'" ';
}
?>><?php echo $content?></miles-button-anchor>
