//TODO script_menu_ & _hamburger:
/*
// first variant of menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        closeBtn = document.querySelector('.menu__close'),
        veil = document.querySelector('.veil'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        veil.classList.toggle('presentation-veil'); //пелена 
    });

    closeBtn.addEventListener('click', () => {
		menu.classList.toggle('menu-active');
		veil.classList.toggle('presentation-veil'); //пелена 
	});

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            veil.classList.toggle('presentation-veil');
        })
    })
})

//second variant of menu
const humburger = document.querySelector('.humburger'),
   menu = document.querySelector('.menu'),
   closeBtn = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
   menu.classList.add('active');
});
closeBtn.addEventListener('click', () => {
   menu.classList.remove('active');
});
*/

//TODO script_validation:
/*
//validation
function validateForms(form) {
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
         },
         message: {
            required: true
         },
         policy: {
            required: true
         }
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format('Минимальное количество символов: {0}')
			},
			email: {
				required: 'Пожалуйста, введите свой почтовый адрес',
				email: 'Неправильно введен адрес почты'
         },
         message: {
				required: 'Пожалуйста, опишите задачу'
         },
         policy: {
            required: 'Чтобы отправить сообщение Вы должны согласиться с политикой конфиденциальности'
         }
		}
	});
}
validateForms('#contacts__forms-row');
*/

//TODO smooth scroll and pageup:
/*
//Smooth scroll and pageup
$(window).scroll(function () {
	if ($(this).scrollTop() > 1600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

$("a[href^='#']").click(function () {
	const _href = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
	return false;
});
*/
