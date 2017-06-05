/*------------------------------------*\
    MODULES
\*------------------------------------*/
import CSS from './modules/css';

/*------------------------------------*\
    APP DELEGATE
\*------------------------------------*/
const app = {
    
    init() {
        
        // Run CSS module
        let cssInstance = new CSS();

        cssInstance.load();
    },

};


// Launch
app.init();
