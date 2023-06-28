/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import { InspectorControls, RichText, MediaUpload, ColorPalette, InnerBlocks, useBlockProps,useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Button,TextControl, ToggleControl } from '@wordpress/components';


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

	return (
		<div>
			<InspectorControls>
				<PanelBody title="Image Settings" initialOpen={true}>
					<PanelRow>
						<MediaUpload
							onSelect={(media) => setAttributes({ image: media.url })}
							allowedTypes={['image']}
							value={attributes.image}
							render={({ open }) => (
								<Button onClick={open} isPrimary>
									Upload Image
								</Button>
							)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Enter image description"
							value={attributes.alt}
							onChange={(value) => setAttributes({ alt: value })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Color Settings" initialOpen={true}>
					<PanelRow>
						<ColorPalette
							value={attributes.color}
							onChange={(value) => setAttributes({ color: value })}
						/>
						<ColorPalette
							value={attributes.background}
							onChange={(value) => setAttributes({ background: value })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Other Settings" initialOpen={true}>
					<PanelRow>
						<ToggleControl
							checked={(attributes.reverse == 'true') }
							help={(attributes.reverse == 'true') ? 'Yes' : 'No'}
							label="Use reversed layout."
							onChange={() => setAttributes({ reverse: attributes.reverse == 'true' ? '' : 'true' })}
								/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Enter link URL"
							value={attributes.href}
							onChange={(value) => setAttributes({ href: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Enter button text"
							value={attributes.button}
							onChange={(value) => setAttributes({ button: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className="wp-block-miles-blocks-miles-image-block">
				<InnerBlocks {...useBlockProps()}>

					<div {...useInnerBlocksProps()} />
				</InnerBlocks>
				<ServerSideRender block={blockInfo.name} attributes={attributes}   />
			</div>
		</div>
	);
}
