import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

registerBlockType( 'koke/gif-rnw', {
	title: 'GIF [RNW]',
	icon: 'format-image',
    category: 'embed',
    attributes: {
		caption: {
			type: 'string',
		},
		giphyUrl: {
			type: 'string',
		},
		searchText: {
			type: 'string',
		},
	},
	edit,
	save: ( props ) => <iframe src={ props.attributes.giphyUrl}></iframe>,
} );