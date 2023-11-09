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
import {
    Panel, PanelBody, PanelRow, __experimentalNumberControl as NumberControl, TextControl, CheckboxControl
} from '@wordpress/components';

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

    const ALLOWED_BLOCKS = ['core/image'];
    const TEMPLATE = [
		//['core/image', {placeholder: 'Add images here', sizeSlug: 'medium'}],
        ['core/gallery', {sizeSlug: "thumbnail", columns: 6}]
	];
    const { inview, autoplay } = attributes;

    const handleInviewChange = (value) => {
        setAttributes({ inview: value.length > 0 ? value : 0 });
    };

    const handleToggleAutoplay = (value) => {
        setAttributes({ end: value });
    }


    return (
        <section {...useBlockProps()}>
            <InspectorControls>
                <Panel header={'Image carousel'}>
                    <PanelBody title={"Settings"}>
                        <PanelRow>
                            <NumberControl
                                label="# in view"
                                onChange={handleInviewChange}
                                value={inview}
                            />
                        </PanelRow>
                        <PanelRow>
                            <NumberControl
                                label="Autoplay"
                                onChange={handleToggleAutoplay}
                                value={autoplay}
                            />
                        </PanelRow>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <miles-image-slider autoplay={autoplay} inview={inview} >
                <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                />
            </miles-image-slider>
        </section>
    );
}
