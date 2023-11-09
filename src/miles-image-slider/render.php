
<?php
include_once '../../../miles-wp-theme/shortcodes.php';


$attributestring = '';

foreach ($attributes as $key => $value) {
    $attributestring .= $key . '="' . esc_attr($value) . '" ';
}

$output = '<miles-image-slider ' . $attributestring . '>';
$output .= $content;
$output .= '</miles-image-slider>';

echo $output;