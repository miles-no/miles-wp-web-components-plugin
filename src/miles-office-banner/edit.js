import blockInfo from "./block.json";

const { InspectorControls, InnerBlocks,MediaUpload, MediaUploadCheck, useBlockProps , useInnerBlocksProps } = wp.blockEditor;
const { Button, PanelBody, PanelRow, ResponsiveWrapper, TextControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
const { Fragment } = wp.element;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { __ } = wp.i18n;
import {MilesOfficeBanner} from "miles-wc/public/miles-wc.es"


const BlockEdit = (props) => {
	const { attributes, setAttributes } = props;

	const changeHeading = ( heading ) => {
		setAttributes( {
			bannerHeading: heading,
		} );
	};

	const changeId = (changedId) => {
		setAttributes({id: changedId});
	}

	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}

	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Select banner image', 'miles-office-banner')}
					initialOpen={ true }
				>
					<PanelRow>
						<TextControl label="id" onChange={changeId} value={attributes.id}/>
					</PanelRow>
					<PanelRow>
						<TextControl label="Banner heading" onChange={changeHeading} value={attributes.bannerHeading}/>
					</PanelRow>
					<PanelRow className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectMedia}
								value={attributes.mediaId}
								allowedTypes={ ['image'] }
								render={({open}) => (
									<Button

										onClick={open}
									>
										{attributes.mediaId == 0 && __('Choose a banner image', 'miles-blocks')}
										{props.media != undefined &&
											<img src={props.media.media_details.sizes.thumbnail.source_url} />
										}
									</Button>
								)}
							/><br />
						</MediaUploadCheck>
						{attributes.mediaId != 0 &&
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace image', 'miles-blocks')}
									value={attributes.mediaId}
									onSelect={onSelectMedia}
									allowedTypes={['image']}
									render={({open}) => (
										<Button onClick={open} isDefault isLarge>{__('Replace image', 'miles-blocks')}</Button>
									)}
								/>
							</MediaUploadCheck>
						}
						{attributes.mediaId != 0 &&
							<MediaUploadCheck>
								<Button onClick={removeMedia} isLink isDestructive>{__('Remove banner image', 'miles-blocks')}</Button>
							</MediaUploadCheck>
						}

					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className="wp-block-miles-blocks-miles-office-banner">
				<InnerBlocks {...useBlockProps()}>

					<div {...useInnerBlocksProps()} />
				</InnerBlocks>
				<ServerSideRender block={blockInfo.name} attributes={attributes}   />
			</div>
		</Fragment>
	);
};

export default withSelect((select, props) => {
	return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
})(BlockEdit);
