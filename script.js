    
    
    document.addEventListener('DOMContentLoaded', () => {
        const loginBtn = document.querySelector('body > header > button');
        const geStartedTrialBtn = document.querySelector('#features > div.trial > button');
        const priceCardBtnOne = document.querySelector('#pricing > div.price-card-wrapper > div:nth-child(1) > button');
        const priceCardBtnTwo = document.querySelector('#pricing > div.price-card-wrapper > div:nth-child(2) > button');
        const priceCardBtnThree = document.querySelector('#pricing > div.price-card-wrapper > div:nth-child(3) > button');
        const getStarterTrialTwoBtn = document.querySelector('#pricing > div.trial-pricing > button');
    
        loginBtn.addEventListener('click', loginBtnHandler);
        geStartedTrialBtn.addEventListener('click', getStartedTrialBtnHandler)
        priceCardBtnOne.addEventListener('click', priceCardOneHandler)
        priceCardBtnTwo.addEventListener('click', priceCardTwoHandler)
        priceCardBtnThree.addEventListener('click', priceCardThreeHandler)
        getStarterTrialTwoBtn.addEventListener('click', getStartedTrialTwoHandler)

        function loginBtnHandler() {
            window.open('login-form.html', '_blank')
        }
        
        function priceCardOneHandler() {
            window.open('login-form.html', '_blank')
        }

        function getStartedTrialBtnHandler() {
            window.open('login-form.html', '_blank')
        }

        function priceCardTwoHandler() {
            window.open('login-form.html', '_blank')
        }

        function priceCardThreeHandler() {
            window.open('login-form.html', '_blank')
        }

        function getStartedTrialTwoHandler() {
            window.open('login-form.html', '_blank')
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const bookConsultationBtn = document.querySelector('#welcome-heading > div > a > button');
    
        bookConsultationBtn.addEventListener('click', bookingBtnHandler);
    
        function bookingBtnHandler() {
            window.open('consultation-form.html', '_blank');
        }
    });


    
  

    