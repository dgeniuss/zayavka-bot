const { Bot, Keyboard } = require('node-vk-bot')

const bot = new Bot({
token: 'fed29e110d83eae94ca63c21f4cd76dc5973bcf1208bbbad3b7b794c21916a9451dc391f39a90e1f9c590',
group_id: 190615627
}).start()
console.log ('Бот успешно запущен')

let get
get = '0'
let click
click = '0'
let url
url = '0'
let work
work = '0'
let send
send = '0'

var getP
var clickP
var urlP
var workP

getP = '0'
clickP = '0'
urlP = '0'
workP = '0'

bot.get(/заявка|подать заявку|заявка/i, (message, exec, reply) => { // команда
const options = { forward_messages: message.id} // получает страницы и т.д
reply(' Начинаем заполнять анкету. \n \n Ввведите свой никнейм с командой "ник" ', options)
get = '1'
console.log ('Введена команда "Заявка"', options)

})

bot.get(/гетинг|гет ноль|аннулировать/i, (message, exec, reply) => { // команда
	const options = { forward_messages: message.id } // получает страницы и т.д
	reply(' Заявка аннулирована ', options)
	console.log ('Заявка аннулирована')
	get = '0'
	click = '0'
	url = '0'
	work = '0'
})

bot.get(/команды|помощь|привет/i, (message, exec, reply) => { // команда

const options = { forward_messages: message.id} // получает страницы и т.д
reply(' Мои команды: \n заявка: Оставить заявку \n \n Аннулировать: Аннулировать заявку', options)
console.log ('Введена команда "Команды"')
})

bot.get(/ник|nick|имя/i, (message, exec, reply) => { // команда
const keyboard = new Keyboard(true)
.addButton('Да')
.addButton('Нет') // это клавитура
const options = { forward_messages: message.id, keyboard} // получает страницы и т.д
	if(get == '1') {

		reply(' Ник введен. \n \n Делать ли ваш никнейм кликабельным в постах и в чарте? ', options)
		console.log ('Ник введен')
		click = '1'
	} //else {
		//reply(' Не обработано \n \n Error(code: get = 0) ', options)
		//console.log ('Error(code: get = 0)')
	//}
})

bot.get(/да|да|да/i, (message, exec, reply) => { // команда
const keyboard = new Keyboard(false)
const options = { forward_messages: message.id, keyboard} // получает страницы и т.д
	if(click == '1') {
		reply(' Никнейм будет кликабельным. \n \n Отправьте ссылку на вашу группу с командой "ссылка"', options)
		console.log ('Кликабельный ник')
		url = '1'
	}// else {
		//reply(' Не обработано \n \n Error(code: click = 0) ', options)
		//console.log ('Error(code: click = 0)')
	//}
})

bot.get(/нет|нет|нет/i, (message, exec, reply) => { // команда
const keyboard = new Keyboard(false)
const options = { forward_messages: message.id, keyboard} // получает страницы и т.д
	if(click == '1') {
		reply(' Никнейм не будет кликабельным. \n \n Отправьте ссылку на вашу группу с командой "ссылка" ', options)
		console.log ('Не кликабельный ник')
		url = '1';
	} //else {
		//reply(' Не обработано \n \n Error(code: click = 0) ', options)
	//	console.log ('Error(code: click = 0)')
	//}
})

bot.get(/ссылка|ссылка|ссылка/i, (message, exec, reply) => { // команда
const options = { forward_messages: message.id} // получает страницы и т.д
	if(url == '1') {
		reply(' Ссылка добавлена. \n \n Отправьте работу, которая будет участвовать в турнире с командой "работа" ', options)
		console.log ('Ссылка добавлена')
		work = '1'
	} //else {
		//reply(' Не обработано \n \n Error(code: url = 0) ', options)
		//console.log ('Error(code: url = 0)')
	//}
})

bot.get(/работа|работа|работа/i, (message, exec, reply) => { // команда
const keyboard = new Keyboard(true)
.addButton('Отправить')
const options = { forward_messages: message.id, keyboard} // получает страницы и т.д
	if(work == '1') {
		reply(' Работа добавлена. Нажмите отправить, чтобы отправить заявку.', options)
		console.log ('Работа добавлена')
		send = '1'
	} //else {
		//reply(' Не обработано \n \n Error(code: work = 0) ', options)
		//console.log ('Error(code: work = 0)')
	//}
})

bot.get(/отправить|send|отпр/i, (message, exec, reply) => {// команда
const keyboard = new Keyboard(false)
const options = { forward_messages: message.id, keyboard} // получает страницы и т.д
bot.api('users.get', { user_ids: 1 })
  .then(res => console.log(res[0].id))
	if(send == '1') {
		reply(' Заявка отправлена, вскоре мы ее обработаем и вам ответим.', options)
		console.log ('Заявка отправлена', options)
		get = '0'
		click = '0'
		url = '0'
		work = '0'
		send = '0'
	} //else {
		//reply(' Не обработано \n \n Error(code: send = 0) ', options)
		//console.log ('Error(code: send = 0)')
	//}
	bot.send('ЭЭЭ ЛЕЕ КУДА ПРЕШЬ ИДИ ЗАЯВКУ В ЛС ЧЕКАЙ', 424616130)
	bot.send('ЗАХАР ЭЭЭ ЛЕЕ КУДА ПРЕШЬ ИДИ ЗАЯВКУ В ЛС ЧЕКАЙ', 400266576) // Захар
	bot.send('ИГОРЬ ЭЭЭ ЛЕЕ КУДА ПРЕШЬ ИДИ ЗАЯВКУ В ЛС ЧЕКАЙ', 393838764) // Игорь
	bot.send('АНДРЕЙ ЭЭЭ ЛЕЕ КУДА ПРЕШЬ ИДИ ЗАЯВКУ В ЛС ЧЕКАЙ', 555360429) //АНДРЕЙ
	bot.send('МИША ЭЭЭ ЛЕЕ КУДА ПРЕШЬ ИДИ ЗАЯВКУ В ЛС ЧЕКАЙ', 242007638) //миша
	bot.send('МАТВЕЙ ЭЭЭ ЛЕЕ КУДА ПРЕШЬ ИДИ ЗАЯВКУ В ЛС ЧЕКАЙ', 179642340) //матвей
})

