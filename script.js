    document.addEventListener('DOMContentLoaded', () => {
        const loginBtn = document.querySelector('body > header > button');
    
        loginBtn.addEventListener('click', loginBtnHandler);
    
        function loginBtnHandler() {
            console.log('TEST');
        }
    });