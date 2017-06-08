/*------------------------------------*\
    NAVIGATION MODULE
\*------------------------------------*/
class Navigation {

    constructor() {

        // Load items
        this.items = [].slice.call(document.querySelectorAll('.js-navigation__item'));

        // Set some settings 
        this.settings = {
            activeClass: 'is-active'
        };

        // Load up the active URL
        this.activeUrl = window.location.pathname;

        // Load the page title
        this.pageTitle = document.title;
    }
    
    load() {
        let self = this;
        
        self.processItems();
    }

    // Determine if an item is active, a parent or inactive
    getState(passedUrl) {
        let self = this;
        var response = (passedUrl === self.activeUrl ? 'active' : 'inactive');

        // If there was no exact match
        if(response !== 'active') {
        
            // Break into parts on slash andremove empties
            let urlParts = passedUrl.split('/').filter((part) => { return part.length; });
            
            // Loop and test if the active url contains this part
            urlParts.map((part) => {

                if(self.activeUrl.indexOf(part) > -1) {
                    response = 'parent';
                    return;
                }
            });
        }

        return response; 
    }       

    // Loop items and set or remove states accordingly
    processItems() {
        let self = this;
        
        self.items.map((item) => {
            
            switch(self.getState(item.getAttribute('href'))) {
                case 'active':
                
                    item.classList.add(self.settings.activeClass);
                    item.setAttribute('aria-label', `Current page: '${self.pageTitle}'`);
                    break;
                case 'parent':
                
                    item.classList.add(self.settings.activeClass);
                    item.removeAttribute('aria-label');
                    break;
                default:
                    
                    item.classList.remove(self.settings.activeClass);
                    item.removeAttribute('aria-label');
                    break;
            }

        });
    }                                                                                                                                                                                                                                                                  
}

export default Navigation;
