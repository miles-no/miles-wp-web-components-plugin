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

    const { start, end, episode_numbers, use_specific_episodes} = attributes;

    const handleChangeStart = (value) => {
        setAttributes({ start: value.length > 0 ? value : 0 });
    };

    const handleChangeEnd = (value) => {
        setAttributes({ end: value.length > 0 ? value : 5});
    }

    const handleChangeSpecificEpisodes = (value) => {
        setAttributes({ episode_numbers: value });
    }

    const handleChangeCheckBox = (value) => {
        setAttributes({ use_specific_episodes: value });
    }

    return (
        <section { ...useBlockProps() }>
            <InspectorControls>
                <Panel header={'Podcast Feed'}>
                    <PanelBody title={"Podcast Feed Settings"}>
                        <PanelRow>
                            <CheckboxControl
                                label="Use Specific Episodes"
                                onChange={handleChangeCheckBox}
                                checked={use_specific_episodes}
                                help="If checked, only the episodes listed in the specific episodes field will be displayed."
                            />
                        </PanelRow>
                        <PanelRow>
                            <NumberControl
                                disabled={use_specific_episodes}
                                label="Start"
                                onChange={handleChangeStart}
                                value={start}
                            />
                        </PanelRow>
                        <PanelRow>
                            <NumberControl
                                disabled={use_specific_episodes}
                                label="Stop"
                                onChange={handleChangeEnd}
                                value={end}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label="Specific Episodes"
                                onChange={handleChangeSpecificEpisodes}
                                value={episode_numbers}
                                help="Comma separated list of episode numbers."
                            />
                        </PanelRow>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <ServerSideRender skipBlockSupportAttributes block={blockInfo.name} attributes={attributes} />
        </section>
    );
}
