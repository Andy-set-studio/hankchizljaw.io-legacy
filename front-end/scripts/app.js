/*------------------------------------*\
    MODULES
\*------------------------------------*/
import CSS from './modules/css';
import Navigation from './modules/navigation';

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
    }
};


// Launch
app.init();
