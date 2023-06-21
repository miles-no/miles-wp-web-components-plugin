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

import { InnerBlocks, useBlockProps,useInnerBlocksProps } from '@wordpress/block-editor';
import {Panel, PanelBody, PanelRow, TextControl,TextareaControl, SelectControl} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { useState } from '@wordpress/element';
import {MilesInfoBlock} from "miles-wc/public/miles-wc.es";



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import blockInfo from './block.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes	}) {

	function changeId(changedId) {
		setAttributes({id: changedId});
	}

	function changeHeading(changedHeading) {
		setAttributes({heading: changedHeading});
	}

	function changeText(changedText) {
		setAttributes({text: changedText});
	}

	return (
		<section { ...useBlockProps() }>
			<InspectorControls>
				<Panel header='Info block settings'>


					<PanelBody title='Basics' initialOpen={true} >
						<PanelRow>
							<TextControl label="id" onChange={changeId} value={attributes.id}/>
						</PanelRow>
						<PanelRow>
							<TextControl label="Heading" onChange={changeHeading} value={attributes.heading}/>
						</PanelRow>
						<PanelRow>
							<TextareaControl label="text" onChange={changeText} value={attributes.text}/>
						</PanelRow>
					</PanelBody>

				</Panel>
			</InspectorControls>
			<div className="wp-block-miles-blocks-miles-info-block">
				<InnerBlocks {...useBlockProps()}>

					<div {...useInnerBlocksProps()} />
				</InnerBlocks>
			</div>
			<ServerSideRender skipBlockSupportAttributes  block={blockInfo.name} attributes={attributes} />
		</section>
	);
}
