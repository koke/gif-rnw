import { useEffect, useState } from '@wordpress/element';
import {
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import WebView from 'WebView';

const GIPHY_API_KEY = 'WWM50KQNv1KFzhrtWfUT60B6pfwV5VsB';
const urlForSearch = searchText => {
    return `https://api.giphy.com/v1/gifs/search?q=${ encodeURIComponent(
        searchText
    ) }&api_key=${ encodeURIComponent( GIPHY_API_KEY ) }&limit=10`;
};

const GifEdit = ( { attributes, setAttributes } ) => {
    const { caption, giphyUrl, searchText } = attributes;
    const [ results, setResults ] = useState( null );
    const [ resultsWidth, setResultsWidth ] = useState( 0 );
    console.log(attributes);

    useEffect( () => {
        fetch( urlForSearch( searchText ) )
            .then( (response) => response.json() )
            .then( (response) => {
                // If there is only one result, Giphy's API does not return an array.
                // The following statement normalizes the data into an array with one member in this case.
                const results = typeof response.data.images !== 'undefined' ? [ response.data ] : response.data;
                // No results
                if ( ! results[0].images ) {
                    return;
                }
                return results;
            } )
            .then(setResults);
    }, [ searchText ] );

    const image = results && results[0].images.downsized_still;
    const thumbnailSize = ( resultsWidth / 10 );

    return (
        <View style={ { flex: 1 } }>
            <TextInput
                value={ searchText }
                onChange={ (event) => setAttributes( { searchText: event.nativeEvent.text } ) }
                onSubmitEditing={ () => console.log("submit") }
            />
            { results && (
                <View
                    style={ { flex: 1, flexDirection: 'row' } }
                    onLayout={ (event) => setResultsWidth( event.nativeEvent.layout.width ) } >
                    {
                        results.map( (result ) => {
                                const image = result.images.downsized_still;
                                return (
                                    <TouchableHighlight onPress={ () => setAttributes( { giphyUrl: result.embed_url }) }>
                                        <Image
                                            source={ { uri: image.url } }
                                            style={ { width: thumbnailSize, height: thumbnailSize, marginRight: 4 } }
                                        />
                                    </TouchableHighlight>
                                )
                            } )
                    }
                </View>
            ) }
            { giphyUrl && (
                <WebView source={ { uri: giphyUrl } } scrollEnabled={ false } style={ { flexGrow: 1 } } />
            ) }
        </View>
    );
}

export default GifEdit;
