const { registerBlockType } = wp.blocks;

registerBlockType( 'koke/gif-rnw', {
	title: 'GIF [RNW]',
	icon: 'search',
	category: 'embeds',
	edit: () => <div>Hola, mundo!</div>,
	save: () => <div>Hola, mundo!</div>,
} );