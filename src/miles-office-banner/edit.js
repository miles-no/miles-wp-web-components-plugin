/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks,InspectorControls, useBlockProps , useInnerBlocksProps, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import {Panel, PanelBody, PanelRow, TextControl, Button, Spinner, ResponsiveWrapper, SelectControl, ToggleControl} from '@wordpress/components';

import ServerSideRender from '@wordpress/server-side-render';
import {MilesContactCard, MilesBusinessCard} from "miles-wc/public/miles-wc.es";


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import blockInfo from "./block.json";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes	}) {


	function changeHeading(changedName) {
		setAttributes({bannerHeading: changedName});
	}

	const onUpdateImage = ( image ) => {
		setAttributes( {
			bannerImageId: image.id,
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			bgImageId: undefined,
		} );
	};
	const innerBlocksRef = useRef();

	const OFFICE_BANNER_TEMPLATE = [
		[ 'core/image', {} ],
		[ 'miles-blocks/MilesContactCard', { placeholder: 'Office Name' } ],
	];
	return (
<div>
	<InspectorControls>
		<Panel>
			<PanelBody title={ __( 'Office Banner Settings' ) }>
				<PanelRow>
					<TextControl label="Banner heading" onChange={changeHeading} value={attributes.bannerHeading}/>
				</PanelRow>
				<PanelRow>
					<div className="wp-block-image-selector-example-image">
					<MediaUploadCheck>
						<MediaUpload

							onSelect={ onUpdateImage }
							className={ ! attributes.bannerImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
							allowedTypes={ [ 'image' ] }
							value={ attributes.bannerImageId }
							render={ ( { open } ) => (
								<Button
									className={ ! attributes.bannerImageId  ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
									onClick={ open }>
									{ ! attributes.bannerImageId  && ( __( 'Set background image', 'image-selector-example' ) ) }
									{ !! attributes.bannerImageId  && ! bgImage && <Spinner /> }
									{ !! attributes.bannerImageId  && bgImage &&
										<ResponsiveWrapper
											naturalWidth={ bgImage.media_details.width }
											naturalHeight={ bgImage.media_details.height }
										>
											<img src={ bgImage.source_url } alt={ __( 'Select banner image', 'image-selector-example' ) } />
										</ResponsiveWrapper>
									}
								</Button>

							) }
						/>
					</MediaUploadCheck>
					{ !! attributes.bannerImageId  && bgImage &&
						<MediaUploadCheck>
							<MediaUpload
								title={ __( 'Background image', 'image-selector-example' ) }
								onSelect={ onUpdateImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ attributes.bannerImageId }
								render={ ( { open } ) => (
									<Button onClick={ open } isDefault isLarge>
										{ __( 'Replace background image', 'image-selector-example' ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					}
					{ !! bgImageId &&
						<MediaUploadCheck>
							<Button onClick={ onRemoveImage } isLink isDestructive>
								{ __( 'Remove background image', 'image-selector-example' ) }
							</Button>
						</MediaUploadCheck>
					}
					</div>
				</PanelRow>

			</PanelBody>
		</Panel>

	</InspectorControls>
	<div class="wp-block-miles-blocks-miles-office-banner">
		<InnerBlocks { ...useBlockProps() }>

			<div {...useInnerBlocksProps() } />
		</InnerBlocks>
	</div>

</div>

	);
}
