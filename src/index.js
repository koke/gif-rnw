import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'koke/gif-rnw', {
	title: 'GIF [RNW]',
	icon: 'format-image',
	category: 'embed',
	edit: () => <div>Hola, mundo!</div>,
	save: () => <div>Hola, mundo!</div>,
} );