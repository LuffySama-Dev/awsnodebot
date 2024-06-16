const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Bot is listening on port ${port}`);
});

const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token);
const webLink = 'https://buidl.so/';
const webLink1 = 'https://opensea.io/';
const webLink2 = 'https://holesky-faucet.vercel.app/';

bot.start((ctx) => {
  const username = ctx.from.username
    ? `@${ctx.from.username}`
    : ctx.from.first_name || 'there';

  ctx.reply(
    `Hi !! ${username}!
Looking for Holesky Eth ?
Click on Holesky-Faucet button to get some 😃

If you want try out our other mini-apps below ?`,

    Markup.inlineKeyboard([
      [Markup.button.webApp('Build.so', webLink)],

      [Markup.button.webApp('OpenSea', webLink1)],
    ])

    // Working code
    // Markup.inlineKeyboard([
    //   [
    //     Markup.button.webApp('Build.so', webLink),
    //     Markup.button.webApp('OpenSea', webLink1),
    //   ],
    // ])
  );
});
bot.launch();
