/*------------------------------------*\
    MODULES
\*------------------------------------*/
import CSS from './modules/css';
import Navigation from './modules/navigation';
import TypeSet from './modules/typeset';

/*------------------------------------*\
    APP DELEGATE
\*------------------------------------*/
const app = {
    
    init() {
        
        // Run CSS module
        let cssInstance = new CSS();

        cssInstance.load();

        // Run navigation module
        let navigationInstance = new Navigation();
        
        navigationInstance.load();

        // Remove the no-js class
        document.documentElement.classList.remove('no-js');

        let typesetInstance = new TypeSet();

        // Run the initial typeset on the whole rendered document
        typesetInstance.init(document.body);
    }
};


// Launch
app.init();
