
<?php
include_once '../../../miles-wp-theme/shortcodes.php';

if ($attributes["use_specific_episodes"]==false){
    echo shortcode_podcast_episodes($attributes);
}else{
    echo shortcode_podcast_specific_episodes($attributes);
}