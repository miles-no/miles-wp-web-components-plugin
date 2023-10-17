
<?php

    $attributestring = '';

    foreach ($attributes as $key => $value) {
        $attributestring .= $key . '="' . esc_attr($value) . '" ';
    }

    // latest post block
    $numberOfPosts = isset($attributes['numberOfPosts']) ? intval($attributes['numberOfPosts']) : 3;
    
	$latestPostsBlock = '<!-- wp:latest-posts {"postsToShow":' . $numberOfPosts . ', "displayAuthor":' . ($attributes['displayAuthor'] ? 'true' : 'false') . ', "displayPostDate":' . ($attributes['displayPostDate'] ? 'true' : 'false') . ', "displayFeaturedImage":' . ($attributes['displayFeaturedImage'] ? 'true' : 'false');

    if (isset($attributes['featuredImageSizeSlug'])) {
        $latestPostsBlock .= ', "featuredImageSizeSlug":"' . $attributes['featuredImageSizeSlug'] . '"';
    }

    $latestPostsBlock .= '} /-->';

    $parsedPosts = do_blocks($latestPostsBlock);

    $output = '<miles-fagblogg-teaser ' . $attributestring . '>';
    $output .= $parsedPosts;
    $output .= '</miles-fagblogg-teaser>';

    echo $output;

