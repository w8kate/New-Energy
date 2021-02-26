let checkInput = document.querySelector('.answers-form__check')

document.querySelector('.answers-form__check-checked').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        if (checkInput.checked) {
            checkInput.removeAttribute('checked', '');
        }
        else {
            checkInput.setAttribute('checked', '');
        }
    }
})



let downloadInput = document.querySelector('.answers-form__input-download');

downloadInput.addEventListener('change', () => {
    document.querySelector('.answers-form__label-download-info').classList.add('answers-form__label-download-info--download');
    let fileName = downloadInput.files[0].name;
    if (fileName.length > 13) {
        pointIndex = fileName.lastIndexOf('.')
        str1 = fileName.substr(0, 12);
        str2 = fileName.substr(pointIndex, fileName.length - 1);
        fileName = str1 + '..' + str2;
    }
    document.querySelector('.answers-form__label-download-info').innerHTML = fileName;
});

let downloadInputLabel = document.querySelector('.answers-form__label-download-info');

downloadInputLabel.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        downloadInput.click();
    }
})



let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.section-hero__answers-form', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
        check: {
            required: true,
        }
    },

    colorWrong: '#EF7676',
})

let nameIn = document.getElementById('name');
let mailIn = document.getElementById('mail');
let phoneIn = document.getElementById('phone');

nameIn.onblur = function() {
    if (nameIn.value) {
        nameIn.classList.add('answers-form__input--is-active');
    }
}

mailIn.onblur = function() {
    if (mailIn.value) {
        mailIn.classList.add('answers-form__input--is-active');
    }
}

phoneIn.onblur = function() {
    if (!phoneIn.classList.contains('js-validate-error-field')) {
        let count = 0;
        for (let i = 0; i < phoneIn.value.length; i++) {
            if (parseInt(phoneIn.value[i])) {
                count++;
            }
        }
        if (count === 11) phoneIn.classList.add('answers-form__input--is-active');
    }
}



const arrow = document.querySelector('.footer__arrow')

  arrow.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = arrow.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })