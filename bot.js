const VkBot = require('node-vk-bot-api')
const Markup = require('node-vk-bot-api/lib/markup')
const api = require('node-vk-bot-api/lib/api');
 
const bot = new VkBot("f3b868fd237828bcfad7c3bde78512ad59d118b4301d5fd82c1bd9d3979e97fa6142093a2051d8bdcccc8")

let beseda = '0'

bot.command('Прив', (ctx) => {
	if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Привет, чтобы пользоваться ботом, нажмите на кнопку "Меню".', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());
	}
});

bot.command('Команды', (ctx) => {
	if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Привет, чтобы пользоваться ботом, нажмите на кнопку "Меню".', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('Привет', (ctx) => {
	if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Привет, чтобы пользоваться ботом, нажмите на кнопку "Меню".', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());
}
});


bot.command('Программы', (ctx) => {
	if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Выберите категорию:', null, Markup
    .keyboard([
    [
      Markup.button('Графика', 'positive'),
      Markup.button('Монтаж', 'negative'),
    ],
    [
      Markup.button('Аудио', 'positive'),
      Markup.button('Утилиты', 'negative'),
    ],
    [
      Markup.button('Запись с экрана', 'positive'),
      Markup.button('Помощь', 'negative'),
    ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

//ПОМОЩЬ......................................................................
bot.command('Помощь', (ctx) => {
	if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Для работы множества программ нужно иметь некоторые драйвера на компьютере, мы рекомендуем вам установить программу Driver Booster, чтобы избавиться от ошибки недостатка драйверов. \n \n Также если вы скачали не качественную программу или же программа оказалась с вирусами, то отправьте нам скриншот и опишите проблему.', null, Markup
    .keyboard([
    [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://vk.com',
      		label: 'Driver Booster',
      		payload: JSON.stringify({
        		url: 'https://vk.com',
        	}),
      	},
      	})
    ],
    [
      Markup.button('Отчет об ошибке', 'primary'),
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('Отчет об ошибке', (ctx) => {
	if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Опишите вашу проблему и приложите скриншот с тегом #Проблема', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('#проблема', (ctx) => {
	if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Отчет об ошибке отправлен, вскоре вам ответят.', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});



//Графика................................................................................
bot.command('Графика', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Категория: Графика', null, Markup
    .keyboard([
    [
      Markup.button('Adobe Photoshop', 'positive'),
      Markup.button('Paint Tool SAI', 'negative'),
    ],
    [
      Markup.button('Adobe Illustrator', 'positive'),
      Markup.button('Paint Tool SAI', 'negative'),
    ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});
 
 //монтаж................................................................................
bot.command('Монтаж', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Категория: Монтаж', null, Markup
    .keyboard([
    [
      Markup.button('Adobe After Effects', 'positive'),
      Markup.button('Adobe Premiere Pro', 'negative'),
    ],
    [
      Markup.button('Vegas Pro', 'default'),
    ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

//utilits/////////////////////////////////////////////////////////////////

bot.command('Утилиты', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Категория: Утилиты', null, Markup
    .keyboard([
    [
      Markup.button('CCleaner', 'positive'),
      Markup.button('Driver Booster', 'negative'),
    ],
    [
      Markup.button('Winrar', 'default'),
    ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

//Аудио......................................................................................
bot.command('Аудио', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Категория: Аудио', null, Markup
    .keyboard([
    [
      Markup.button('Audacity', 'positive'),
      Markup.button('Adobe Audition', 'negative'),
      ],
    [
      Markup.button('FL Studio', 'default'),
    ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});


//запись с экрана..........................................
bot.command('Запись с экрана', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Категория: Запись с экрана', null, Markup
    .keyboard([
    [
      Markup.button('OBS', 'positive'),
      Markup.button('Bandicam', 'negative'),
      ],
    [
      Markup.button('Mirillis Action', 'positive'),
    ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});


//МЕНЮ.................................................................................

bot.command('меню', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Меню:', null, Markup
    .keyboard([
    [
      Markup.button('Программы', 'primary'),
    ],
    [
      Markup.button('Дизайн', 'positive'),
      Markup.button('Арт', 'positive'),
    ],
    [
      Markup.button('Ютуб', 'positive'),
    ],
    [
      Markup.button('Информация о конкурсах', 'negative'),
      Markup.button('О Beeming', 'negative'),
    ],
    [
      Markup.button('Оценить работу/видео', 'primary'),
      Markup.button('Вступить в комьюнити', 'primary'),
    ],
    ])
    .oneTime());}
});


bot.command('Информация о конкурсах', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('На данный момент доступно 2 конкурса. \n\n 1. Турнир дизайнеров - Проходит \n Участники постятся каждый день по очереди и набирают баллы. За 10 дней выступают 10 участников, после чего проводится согласование баллов и вводится выигрывший. \n Приз - Засекречен. \n\n 2. Конкурс Художников - Набор участников \n Выйдет пост с десятью конкурсантами и их работами, также будет опрос. Чья работа наберет больше баллов, тот и выиграл. \n Приз - 100 рублей.', null, Markup
    .keyboard([
    [
      Markup.button('Участвовать в конкурсе', 'positive'),
    ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('Вступить в комьюнити', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Чтобы подать заявку скиньте свое сообщество или канал с пометкой #вступить, также не забывайте досконально ознакомиться с правилами комьюнити. \n\n https://vk.com/@bming-why', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('#вступить', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Заявка подана, вскоре мы ответим вам.', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('О Beeming', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('О нас: vk.com/@bming-why', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('Участвовать в конкурсе', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Напишите в каком конкурсе вы хотите участвовать с тегом #участие', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('#участие', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Заявка на участие принята, скоро мы вам отпишем.', null, Markup
    .keyboard([
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('Дизайн', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Для дизайнеров:', null, Markup
		.keyboard([
			[
				Markup.button('Выдать ТЗ', 'default'),
			],
			[
				Markup.button('Паки', 'negative'),
				Markup.button('Сайты для дизайнеров', 'positive'),
			],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Ютуб', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Для ютуберов:', null, Markup
		.keyboard([
			[
				Markup.button('Выдать идею для ролика', 'default'),
			],
			[
				Markup.button('Паки для ютуберов', 'negative'),
				Markup.button('Сайты для ютуберов', 'positive'),
			],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Паки для ютуберов', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Паки для ютуберов:', null, Markup
    .keyboard([
    [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://yadi.sk/d/XI6kvEjOTvWpMw',
      		label: 'Основной пак',
      		payload: JSON.stringify({
        		url: 'https://yadi.sk/',
        	}),
      	},
      	}),
      ],
      [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://drive.google.com/file/d/1RG78AOPzEEUEOwxBnhiLwwJKCVZZx2Tj/view',
      		label: 'Пак ютубера',
      		payload: JSON.stringify({
        		url: 'https://drive.google.com',
        	}),
      	},
      	}),
      ],
      [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://yadi.sk/d/gIFFAQui_DtT9Q',
      		label: 'Пак ютубера 2',
      		payload: JSON.stringify({
        		url: 'https://yadi.sk',
        	}),
      	},
      	}),
      ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});


bot.command('Музыка', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('На данный момент пусто', null, Markup
		.keyboard([
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Арт', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Для артеров:', null, Markup
		.keyboard([
			[
				Markup.button('Выдать идею для арта', 'default'),
			],
			[
				Markup.button('Паки с кистями и т.д', 'negative'),
				Markup.button('Сайты для артеров', 'positive'),
			],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});






bot.command('Сайты для артеров', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  ctx.reply('Сайты для артеров:', null, Markup
    .keyboard([
    [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://vk.com/drawit_reference',
      		label: 'Референсы',
      		payload: JSON.stringify({
        		url: 'https://vk.com/',
        	}),
      	},
      	}),
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://vk.com/anatomy_reference',
      		label: 'Референсы. Уроки анатомии',
      		payload: JSON.stringify({
        		url: 'https://vk.com/',
        	}),
      	},
      	}),
      ],
      [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://www.deviantart.com',
      		label: 'DeviantArt',
      		payload: JSON.stringify({
        		url: 'https://www.deviantart.com',
        	}),
      	},
      	}),
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://render.ru',
      		label: 'Render',
      		payload: JSON.stringify({
        		url: 'https://render.ru',
        	}),
      	},
      	}),
      ],
      [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://web-paint.ru',
      		label: 'Уроки рисования',
      		payload: JSON.stringify({
        		url: 'https://web-paint.ru',
        	}),
      	},
      	}),
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'http://artdrawing.ru',
      		label: 'Уроки рисования 2',
      		payload: JSON.stringify({
        		url: 'http://artdrawing.ru',
        	}),
      	},
      	}),
      ],
      [
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'https://colorscheme.ru',
      		label: 'Онлайн палитра',
      		payload: JSON.stringify({
        		url: 'https://colorscheme.ru',
        	}),
      	},
      	}),
      Markup.button({
      	action: {
      		type: 'open_link',
      		link: 'http://linteum.ru',
      		label: 'Статьи о живописи',
      		payload: JSON.stringify({
        		url: 'http://linteum.ru',
        	}),
      	},
      	}),
      ],
    [
      Markup.button('Меню', 'primary'),
    ],
    ])
    .oneTime());}
});

bot.command('Паки с кистями и т.д', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Паки с кистями и т.д', null, Markup
		.keyboard([
			[
				Markup.button('AI Brush Pack - 2.6мб', 'negative'),
				Markup.button('LynnChen Brush Set - 103.2мб', 'positive'),
			],
			[
				Markup.button('Webang Brushes - 142.3мб', 'negative'),
				Markup.button('Не добавлено', 'positive'),
			],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		)}
});

bot.command('AI Brush', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваши кисти.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555490012')
 }
})

bot.command('LynnChen Brush', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваши кисти.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555490738')}
})

bot.command('Webang Brushes', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваши кисти.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555493173')}
})


bot.command('Оценить работу/видео', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Пришли свою работу или видео с пометкой #чек', null, Markup
		.keyboard([
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());
}
});

bot.command('#чек', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	let arr = ['Годно сделано!', 'Не очень, постарайся', 'Круто!', 'Хрень', 'Ну... 3/10', 'ТОП 10/10!', 'А что, выглядит хайпово', 'Прекрасно', 'Такое себе...', 'Оо класс'];
	let rand = Math.floor(Math.random() * arr.length);
	ctx.reply('' + arr[rand] + '', null, Markup
		.keyboard([
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Выдать ТЗ', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	let arr = ['Афиша', 'Обложка', 'Визитка', 'Рекламный креатив', 'Превью', 'Баннер', 'Шапка', 'Флаер', 'Обложка для товара', 'Оо класс'];
	let rand = Math.floor(Math.random() * arr.length);
	let arr1 = ['Магазин кроссовок', 'Скейтпарк', 'Лего', 'Бизнес', 'Ювелирный магазин', 'Космос', 'Театр', 'Концерт', 'О себе', 'Пицца'];
	let rand1 = Math.floor(Math.random() * arr1.length);
	let arr2 = ['Лиловый, Фуксия', 'Пурпурный, Травяной', 'Белый, красный', 'Салатовый, какао', 'Бледно-синий, белый', 'Бежевый, голубой', 'Серый, фуксия', 'Розовый, зеленый', 'Красный, желтый', 'Вишнево-красный, лазурный'];
	let rand2 = Math.floor(Math.random() * arr2.length);
	let arr3 = ['1 час', '2 часа', '3 часа', '1.5 часа', '2.5 часа', '3.5 часа', '4 часа', '4.5 часа', '5 часов', '5.5 часов'];
	let rand3 = Math.floor(Math.random() * arr3.length);
	ctx.reply('Твое техническое задание: \n\n Нужно сделать: \n– '+arr[rand]+'\n\n Тематика: \n– '+arr1[rand1]+'\n\nОсновные цвета: \n– '+arr2[rand2]+'\n\n Время на выполнение: \n– '+arr3[rand3]+'', null, Markup
		.keyboard([
			[
				Markup.button('Выдать ТЗ', 'positive'),
				Markup.button('Приступить', 'negative'),
			],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Приступить', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Приступай к работе, как выполнишь - скидывай сюда с пометкой #ВыполнилТЗ.', null, Markup
		.keyboard([
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});


bot.command('#ВыполнилТЗ', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Вскоре мы обработаем вашу заявку и проверим сделали ли вы в срок, если все правила из ТЗ были учтены, то мы опубликуем вашу работу с ссылкой на вашу группу.', null, Markup
		.keyboard([
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Сайты для дизайнеров', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Сайты для дизайнеров:', null, Markup
		.keyboard([
			[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://fonts.google.com/',
      				label: 'Поиск шрифтов',
      				payload: JSON.stringify({
        			url: 'https://fonts.google.com/',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://graphicsland.ru/',
      				label: 'Поиск шрифтов 2',
      				payload: JSON.stringify({
        			url: 'https://graphicsland.ru/',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://www.flaticon.com/',
      				label: 'Поиск иконок',
      				payload: JSON.stringify({
        			url: 'https://www.flaticon.com/',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://icons8.com/',
      				label: 'Поиск иконок 2',
      				payload: JSON.stringify({
        			url: 'https://icons8.com/',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://unsplash.com/',
      				label: 'Бесплатный фотосток',
      				payload: JSON.stringify({
        			url: 'https://unsplash.com/',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://picjumbo.com/',
      				label: 'Бесплатный фотосток 2',
      				payload: JSON.stringify({
        			url: 'https://picjumbo.com/',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://colorhunt.co/',
      				label: 'Поиск цвета/Градиента',
      				payload: JSON.stringify({
        			url: 'https://colorhunt.co/',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://coolors.co/',
      				label: 'Поиск цвета/Градиента 2',
      				payload: JSON.stringify({
        			url: 'https://coolors.co/',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://www.remove.bg/#',
      				label: 'Вырезать фон',
      				payload: JSON.stringify({
        			url: 'https://www.remove.bg/#',
        			}),
      			},
      			}),
      		],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Паки', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Паки для дизайнеров:', null, Markup
		.keyboard([
			[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://fonts.google.com/',
      				label: 'SAX Arts',
      				payload: JSON.stringify({
        			url: 'https://fonts.google.com/',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://graphicsland.ru/',
      				label: '16K',
      				payload: JSON.stringify({
        			url: 'https://graphicsland.ru/',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://www.flaticon.com/',
      				label: 'Illusion Design Pack',
      				payload: JSON.stringify({
        			url: 'https://www.flaticon.com/',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://icons8.com/',
      				label: 'Rodins Design Pack',
      				payload: JSON.stringify({
        			url: 'https://icons8.com/',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://unsplash.com/',
      				label: 'Fortnite Gfx Pack',
      				payload: JSON.stringify({
        			url: 'https://unsplash.com/',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://picjumbo.com/',
      				label: 'Brawl Stars Pack',
      				payload: JSON.stringify({
        			url: 'https://picjumbo.com/',
        			}),
      			},
      			}),
      		],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Выдать идею для ролика', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	let arr = ['Тема: дизайн \n Идея: Как сделать превью по КСГО в Фотошопе', 'Тема: дизайн \n Идея: Крутые фишки в фотошопе', 'Тема: Саморазвитие \n Идея: 4 книги, прочитав которые, вы изменетесь раз и навсегда', 'Тема: Теории \n Идея: Рассказать о теории по какой-нибудь игре/сериалу/фильму ', 'Тема: Дизайн \n Как я создаю свои превью', 'Тема: компьютеры \n Идея: Топ 5 бюджетных видеокарт 2020', 'Тема: Техноблог \n Идея: Слив Айфона 12 и новые утечки', 'Тема: Летсплеи \n Идея: Прохождение майнкрафт', 'Тема: Теории \n Идея: Что будет во второй серии отель хазбин', 'Тема: Космос \n Идея: Планеты, которые человек может колонизировать в ближайшее время', 'Тема: Лайфстайл \n Идея: Что в моем рюкзачке??', 'Тема: Лайфстайл \n Идея: Сыграть музыку с подручными средствами'];
	let rand = Math.floor(Math.random() * arr.length);
	ctx.reply('' + arr[rand] + '', null, Markup
		.keyboard([
			[
				Markup.button('Выдать идею для ролика', 'default'),
			],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Выдать идею для арта', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	let idea = ['Кот в космическом пространстве', 'Горный пейзаж', 'Нарисовать Боба Росса', 'Девочка хентай', 'Натюрморт', 'Парень в шляпе', 'Бананчик в шляпе', 'Ч/Б Арт в стиле Аниме', 'Необычная хоррор композиция', 'Девушка в реализме', 'Обложка для трека в сюрреализме', 'Депрессивная композиция'];
	let rand1 = Math.floor(Math.random() * idea.length);
	ctx.reply('Идея для арта: ' + idea[rand1] + '', null, Markup
		.keyboard([
			[
				Markup.button('Нарисовать по идее', 'positive'),
			],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Нарисовать по идее', (ctx) =>{
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Если вы нарисуете по выданной идее, то можете скинуть сюда готовую работу вместе с ссылкой на группу и тегом #арт. В порядке очереди мы опубликуем вашу работу на стене.', null, Markup
		.keyboard([
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('Сайты для ютуберов', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
	ctx.reply('Сайты для ютуберов:', null, Markup
		.keyboard([
			[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://google.ru/trends',
      				label: 'Google Trends',
      				payload: JSON.stringify({
        			url: 'https://google.ru',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://wordstat.yandex.ru',
      				label: 'Yandex Wordstat',
      				payload: JSON.stringify({
        			url: 'https://wordstat.yandex.ru',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'http://mysitec.ru/yt/',
      				label: 'Подбор тегов',
      				payload: JSON.stringify({
        			url: 'http://mysitec.ru',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://vidiq.com',
      				label: 'Расширение VIDIQ',
      				payload: JSON.stringify({
        			url: 'https://vidiq.com',
        			}),
      			},
      			}),
      		],
      		[
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://vk.com/music_for_youtube',
      				label: 'Музыка без АП',
      				payload: JSON.stringify({
        			url: 'https://vk.com',
        			}),
      			},
      			}),
      		Markup.button({
      			action: {
      				type: 'open_link',
      				link: 'https://motionarray.com',
      				label: 'Переходы, анимации, интро',
      				payload: JSON.stringify({
        			url: 'https://motionarray.com',
        			}),
      			},
      			}),
      		],
			[
				Markup.button('Меню', 'primary'),
			],
			])
		.oneTime());}
});

bot.command('/test', (ctx) => {
  bot.sendMessage(ctx.message.peer_id, 'Hello!', 'doc-190615627_555490012')
})

bot.command('Adobe Photoshop', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555490012')}
})
bot.command('Adobe After Effects', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555542982')}
})
bot.command('Adobe Audition', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555542983')}
})
bot.command('Adobe Premiere Pro', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555542987')}
})
bot.command('Audacity', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555542989')}
})
bot.command('Bandicam', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555542991')}
})
bot.command('Ccleaner', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555542995')}
})
bot.command('Cinema 4D', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555542997')}
})
bot.command('Driver Booster', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543001')}
}) 
bot.command('Paint Tool Sai', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543004')}
})
 bot.command('FL Studio', (ctx) => {
 		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543046')}
})
 bot.command('Adobe Illustrator', (ctx) => {
 		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543047')}
})
bot.command('Mirillis Action', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543049')}
})
bot.command('OBS', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543050')}
})
 bot.command('Vegas Pro', (ctx) => {
 		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543051')}
})
bot.command('Winrar', (ctx) => {
		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543052')}
})
 bot.command('Microsoft Office', (ctx) => {
 		if (String(ctx.message.peer_id)[0] == 2) {
		ctx.reply('')
		} else {
  bot.sendMessage(ctx.message.peer_id, 'Ваша программа.\n\n Напишите меню, чтобы вернуться.', 'doc-190615627_555543054')}
})



bot.startPolling(() => {
  console.log('Bot started.')
})