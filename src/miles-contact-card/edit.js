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
import {Panel, PanelBody, PanelRow, TextControl, SelectControl} from '@wordpress/components';
import {MilesContactCard} from "miles-wc/public/miles-wc.es";

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

	function changeName(changedName) {
		setAttributes({name: changedName});
	}
	function changeAddress(changedAddress) {
		setAttributes({address: changedAddress});
	}

	function changeEmail(changedEmail) {
		setAttributes({email: changedEmail});
	}
	function changePhone(changedPhone) {
		setAttributes({phone: changedPhone});
	}
	function changeOrgnr(changedOrgnr) {
		setAttributes({orgnr: changedOrgnr});
	}

	return (
		<p { ...useBlockProps() }>
			<InspectorControls>
				<Panel header={ __( 'Contact Card Settings', 'miles-contact-card' ) }>
					<PanelBody title={ __( 'Contact Card Settings', 'miles-contact-card' ) }>
						<PanelRow>
							<TextControl label={ __( 'Name', 'miles-contact-card' ) } onChange={changeName} value={attributes.name}/>
						</PanelRow>
						<PanelRow>
							<TextControl label={ __( 'Address', 'miles-contact-card' ) } onChange={changeAddress} value={attributes.address}/>
						</PanelRow>
						<PanelRow>
							<TextControl label={ __( 'E-mail', 'miles-contact-card' ) } onChange={changeEmail} value={attributes.email}/>
						</PanelRow>
						<PanelRow>
							<TextControl label={ __( 'Phone', 'miles-contact-card' ) } onChange={changePhone} value={attributes.phone}/>
						</PanelRow>
						<PanelRow>
							<TextControl label={ __( 'Orgnr', 'miles-contact-card' ) } onChange={changeOrgnr} value={attributes.orgnr}/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<ServerSideRender skipBlockSupportAttributes block={blockInfo.name} attributes={attributes} />
		</p>
	);
}
