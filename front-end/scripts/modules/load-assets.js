/*------------------------------------*\
    LOAD ASSETS MODULE

    Load a collection of assets into
    the head and resolve a merged promise
\*------------------------------------*/
class LoadAssets {
    
    constructor(args) {

        let self = this;

        // An array of objects with "type" and "url" props
        // Type = script|css
        // Url = resource url
        self.items = args;
    }

    load() {
        
        let self = this;
        let loaders = [];

        // Bail out if no items
        if(!self.items.length) {
            return Promise.reject('No url passed');
        }

        // loop each item and build a loader
        self.items.map((item) => {

            loaders.push(new Promise((resolve, reject) => {
                
                let tag = null;

                switch(item.type) {
                    
                    case 'css':

                        tag = document.createElement('link');                    
                        break;

                    case 'script':

                        tag = document.createElement('script');
                        break;
                }
                
                // Set onload event to resolve promise
                tag.onload = function() {
                    resolve(item.url);    
                };

                // Set onerror event to reject promise
                tag.onerror = function () {
                    reject(`The following url failed to load ${item.url}`);
                };

                // Switch over types and generate relevant attributes
                switch(item.type) {
                    
                    case 'css':

                        tag.type = 'text/css';
                        tag.rel = 'stylesheet';
                        tag.href = item.url;

                        break;

                    case 'script':

                        tag.async = true;
                        tag.src = item.url;
                        break;
                }

                // Add to the head
                document.head.appendChild(tag);
            }));

        });
        
        // Resolve or reject all the loaders
        return Promise.all(loaders);
    }

}

export default LoadAssets;
