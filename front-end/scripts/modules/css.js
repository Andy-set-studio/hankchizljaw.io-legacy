/*------------------------------------*\
    OTHER MODULES
\*------------------------------------*/
import LoadAssets from './load-assets';

/*------------------------------------*\
    CSS MODULE
\*------------------------------------*/
class CSS {

    constructor() {
        let self = this;

        // Set some asset settings
        self.settings = {
            assetBase: (typeof(window._ASSET_BASE !== 'undefined') ? window._ASSET_BASE : ''),
            assetVersion: (typeof(window._ASSET_VERSION !== 'undefined') ? window._ASSET_VERSION : '')
        };

        // Define paths to any enhancement CSS assets
        self.paths = [
            '/css/enhancements.css'
        ];
    }

    load() {
        
        let self = this;
        
        // An array that will store the args passed through to the asset loader
        let loadAssetsArgs = [];
        
        // Build args to pass to the loader
        self.paths.map((path) => {
            
            loadAssetsArgs.push({
                type: 'css',
                url: self.settings.assetBase + path + '?' + self.settings.assetVersion
            });
        });

        // Load up a load assets instance
        let loadAssetsInstance = new LoadAssets(loadAssetsArgs);

        // Run the loader
        loadAssetsInstance.load()
            .then((status) => {
                console.log('CSS assets loaded successfully');  
            })
            .catch((message) => {
                console.error(`There was an error loading some CSS. The following message was passed through: "${message}"`); 
            });
    }
}

export default CSS;
