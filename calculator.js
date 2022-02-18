const nerdamer = require('nerdamer/all.min');

try {
        if (message.body.toLowerCase().startsWith('!solve ')) {
            var question = nerdamer(`${message.body.slice(7)}`);
            message.reply(`${question.toString()}`)
        }
    } catch(err) {
        message.reply(`${err}`)
    }
