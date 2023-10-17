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
import { Panel, PanelBody, PanelRow, TextControl, SelectControl} from '@wordpress/components';

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
export default function Edit({ attributes, setAttributes }) {

	function changeLink(changedLink) {
		setAttributes({ link: changedLink });
	}

	function changeNumberOfPosts(changedNumberOfPosts) {
		setAttributes({ numberOfPosts: parseInt(changedNumberOfPosts, 10) });
	}

	function changeImageSize(newImageSize) {
		setAttributes({ featuredImageSizeSlug: newImageSize });
	}

	function toggleDisplayAuthor(checked) {
		setAttributes({ displayAuthor: checked });
	}
	function toggleDisplayPostDate(checked) {
		setAttributes({ displayPostDate: checked });
	}
	function toggleDisplayFeaturedImage(checked) {
		setAttributes({ displayFeaturedImage: checked });
	}

	return (
		<section {...useBlockProps()}>
			<InspectorControls>
				<Panel header={__('Miles Fagblogg Teaser Settings', 'miles-fagblogg-teaser')}>
					<PanelBody title={__('Miles Fagblogg Teaser Settings', 'miles-fagblogg-teaser')}>
						<PanelRow>
							<TextControl
								label={__('Link', 'miles-fagblogg-teaser')}
								onChange={changeLink}
								value={attributes.link}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__('Number of Posts', 'miles-fagblogg-teaser')}
								onChange={changeNumberOfPosts}
								value={attributes.numberOfPosts}
								type="number"
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Display Author"
								checked={attributes.displayAuthor}
								onChange={toggleDisplayAuthor}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Display Post Date"
								checked={attributes.displayPostDate}
								onChange={toggleDisplayPostDate}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Display Image"
								checked={attributes.displayFeaturedImage}
								onChange={toggleDisplayFeaturedImage}
							/>
						</PanelRow>
						{attributes.displayFeaturedImage &&
							<PanelRow>
								<SelectControl
									label={"Select image size"}
									value={attributes.featuredImageSizeSlug}
									onChange={changeImageSize}
									options={[
										{
											label: 'Small',
											value: 'thumbnail'
										},
										{
											label: 'Medium',
											value: 'medium'
										},
										{
											label: 'Large',
											value: 'large'
										}
									]}
								/>
							</PanelRow>}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<ServerSideRender skipBlockSupportAttributes block={blockInfo.name} attributes={attributes} />
		</section>
	);
}
