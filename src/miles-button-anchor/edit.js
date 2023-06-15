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
import { useBlockProps, PlainText } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl} from '@wordpress/components';
import {MilesButtonAnchor} from "miles-wc/public/miles-wc.es";

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
	function changeHref(changedHref) {
		setAttributes({href: changedHref});
	}
	function changeContent(changedContent) {
		setAttributes({content: changedContent});
	}

	return (
		<section { ...useBlockProps() }>
			<InspectorControls>
				<Panel header='Button Anchor Settings'>
					<PanelBody title='Button Anchor Settings'>
						<PanelRow>
							<TextControl label="Link to anchor id" onChange={changeHref} value={attributes.href}/>
						</PanelRow>
						<PanelRow>
							<TextControl label="Link text" onChange={changeContent} value={attributes.content}/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<ServerSideRender skipBlockSupportAttributes block={blockInfo.name} attributes={attributes}/>
		</section>
	);
}
