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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl} from '@wordpress/components';
import { useState } from '@wordpress/element';
import {MilesBusinessCard} from "miles-wc/public/miles-wc.es";


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


	function toggleWide(state) {
		setAttributes({variant: state ? 'wide' : ''});
	}

	function changeCvEmail(changedCvEmail) {
		setAttributes({cvemail: changedCvEmail});
	}
	function changeName(changedName) {
		setAttributes({name: changedName});
	}

	function changeEmail(changedEmail) {
		setAttributes({email: changedEmail});
	}

	function changeJobTitle(changedJobTitle) {
		setAttributes({jobtitle: changedJobTitle});
	}

	function changePhone(changedPhone) {
		setAttributes({phone: changedPhone});
	}

	function changeImageUrl(changedImageUrl) {
		setAttributes({image: changedImageUrl});
	}
	return (
		<p { ...useBlockProps() }>
			<InspectorControls>
				<Panel header='Business Card Settings'>
					<PanelBody title='Basics' initialOpen={ true }>
						<PanelRow>
							<ToggleControl
								checked={(attributes.variant == 'wide') }
								help={(attributes.variant == 'wide') ? 'Yes' : 'No'}
								label="Use wide layout."
								onChange={toggleWide}
							/>
						</PanelRow>

						<PanelRow>
							<TextControl label="CV Partner e-mail" help="Write in email-address to try to fetch data from CV-partner" onChange={changeCvEmail} value={attributes.cvemail}/>
						</PanelRow>
					</PanelBody>

					<PanelBody title='Manual datas' initialOpen={false} >
						<PanelRow><p>This will override data from CV-partner.</p></PanelRow>
						<PanelRow>
							<TextControl label="Name" onChange={changeName} value={attributes.name}/>
						</PanelRow>
						<PanelRow>
							<TextControl label="Job title" onChange={changeJobTitle} value={attributes.jobtitle}/>
						</PanelRow>
						<PanelRow>
							<TextControl label="E-mail" onChange={changeEmail} value={attributes.email}/>
						</PanelRow>
						<PanelRow>
							<TextControl label="Phone" onChange={changePhone} value={attributes.phone}/>
						</PanelRow>
						<PanelRow>
							<TextControl label="Image URL" onChange={changeImageUrl} value={attributes.image}/>
						</PanelRow>
					</PanelBody>

				</Panel>
			</InspectorControls>
			<ServerSideRender skipBlockSupportAttributes  block={blockInfo.name} attributes={attributes} />
		</p>

);
}
