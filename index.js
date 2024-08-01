
api = process.cwd()
__path = process.cwd()

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const path = require('path');
const axios = require('axios');
const util = require('util')
//const fetch = require('node-fetch');
const request = require('request');
const moment = require('moment-timezone');
const data = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();
const uuid = require('uuid').v4
const ffmpeg = require('fluent-ffmpeg');
const cron = require('node-cron');
const AssemblyAI = require("assemblyai");
//const rsnchat = require('./lib/rsnchat.js');
const { exec, spawn, execSync } = require('child_process');
const deepai = require('deepai')
//const canvacord = require('canvacord').Canvas;
const cfonts = require('cfonts');
const chalk = require('chalk')
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

var key = 'layonapis'
//=============( CONFIGURAÇÕES DO BOT )=============//

const config = JSON.parse(fs.readFileSync('./dono/config.json'));
var {prefix, botName, fotomenu, numeroDono ,dono1, dono2, dono3, donoName, emoji, bannerName, linkp, criador, porta, wallpaperLink} = require('./dono/config.json')
const usuariosAutorizados = ["comefemea"];
var keyAdm = ["comefemea"];
const adminList = ["comefemea"];
bronxyKey = `pedrozz_Mods` 
bronxyKey2 = `tiomaker8930`
    
//===============================================//

const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require("./lib/youtube");
const { geturl, pensador, styletext, getgrupos, gpwhatsapp, hentaistube, nerding, apkmodhacker, uptodown, pornhub, st, gpsrc, dafontSearch, dafontDown, igstalk, ff, papeldeparede, htdl, assistithtdl, assistitht, pornogratis, wallmob, pinterest, rastrear, xvideos, xvideos1} = require('./lib/api')
const { rastrearEncomendas, pensador1, dicionarioNome, XvideosSearch, XvideosDL, buscarMenoresPrecos, XnxxDL, XnxxSearch } = require("./lib/@api.js");
const mediafire = require("./lib/mediafire");
const { audioMeme, yt2mate, yt1s, savef, get, y2bs } = require("./lib/sociais-2.js")
const { igdl, ytdl } = require('./lib/api3') 
const { pensadorSearch, wallpaper2 } = require('./lib/api2.js')
const { TelegraPh, AyuUp } = require("./lib/uploader");
const { contaOnly } = require('./lib/contasOnly.js');
const { only } = require('./lib/onlyfans.js');
const {video_18, foto_18, travazap, femininotrava} = require('./lib/pack.js')
const gtts = require('./lib/gtts'); 
const { saveig, saveig_reels, getmyfb } = require("./lib/sociais.js")
const { ttdownloader } = require("./lib/tkdl");
const { twitterdl } = require("./lib/twitterdl");
const { soundl  } = require('./lib/api')
const { GDriveDl, mediafiredl__ } = require('./lib/download.js');

//===============================================//
const app = express();
const router = express.Router();
const PORT = `99999`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
async function fetchJson (url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}          
//=============MENSAGENS RAPIDAS================//
resposta = {
    semkey: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'Insira a apikey na url'
    },
    cdtxt: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'insira o texto na url'
    },
    cdimg: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'Insira a imagem na url'
    },
    nottext: {
        status: false,
        criador: `${criador}`,
        code: 406,
        message: 'insira o parâmetro text'
    },
    error: {
       status: false,
        criador: `${criador}`,
        mensagem: 
        'ops :/ deu erro no servidor interno'
    }
}

msg = {
espere:  `⌛ Aguarda um pouco ai humano`,
dono: "🔒 Comando somente para dono do bot",
grupo: "🔒 Esse comando so pode ser utilizado em grupos ",
privado: "🔒 este comando so pode ser usado no pv",
adm: `🔒 Você tem que ser adm mn`,
error: "❗𝐴𝑐𝑜𝑛𝑡𝑒𝑐𝑒𝑢 𝑢𝑚 𝑒𝑟𝑟𝑜 𝑛𝑜 𝑐𝑜𝑚𝑎𝑛𝑑𝑜, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑚𝑒𝑢 𝑑𝑜𝑛𝑜 𝑎𝑟𝑟𝑢𝑚𝑎-𝑙𝑜❗", 
botadm: `🔒 𝑆𝐸𝑀 𝑀𝐸𝑈 𝐴𝐷𝑀 𝐸𝑈 𝑁𝐴𝑂 𝑃𝑂𝑆𝑆𝑂 𝐸𝑋𝐸𝐶𝑈𝑇𝐴𝑅 𝐸𝑆𝑆𝐸 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 😕😕`
}         

var keyinvalida = api + '/views/SemKey.html'   


//=================[ Função da api de login etc... ]==============\\

function diminuirSaldo(username) {
    const users = readUsersFromFile();
    const user = users.find(user => user.username === username);

    if (!user || user.request <= 0) {
        return false;
    }

    user.request -= 1;
    writeUsersToFile(users);
    return true;
}
  
function readUsersFromFile() {
  const filePath = path.join(__dirname, "users.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}
function writeUsersToFile(users) {
  const filePath = path.join(__dirname, "users.json");
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}
/*
(  * * * * *  )
1- **Minuto (0 - 59)**
2- **Hora (0 - 23)**
3- **Dia do mês (1 - 31)**
4- **Mês (1 - 12)**
5- **Dia da semana (0 - 7) (Domingo = 0 ou 7)**

Use essa explicação para a função abaixo kkk
*/

cron.schedule('0 0 * * *', () => {
  const users = readUsersFromFile();

  users.forEach(user => {
    if (user.adm && user.adm.toLowerCase() === 'sim') {
      user.request = 10000000; //7
    } else if (user.premium && user.premium.toLowerCase() === 'sim') {
      user.request = 20000; //4
    } else {
      user.request = 300; //2
    }
  });

  writeUsersToFile(users);
  console.log('As requisições dos usuários foram reiniciadas.');
});

// Função para verificar se o usuário é premium
function checkPremium(username) {
    const users = readUsersFromFile();
    const user = users.find(user => user.username === username);
    return user && user.premium === 'sim';
}

// Função para alterar a API key do usuário
function changeKey(username, newKey) {
    const users = readUsersFromFile();
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
        users[userIndex].key = newKey;
        writeUsersToFile(users);
    }
}
//========( BANNERS DO BOT QUE APARECEM NO TERMINAL )==========\\

if(hora > "00:00:00"){
var timed = 'Boa Madrugada 🌆' 
} 
if(hora > "05:30:00"){
var timed = 'Bom Dia 🏙️' 
}
if(hora > "12:00:00"){
var timed = 'Boa Tarde 🌇' 
}
if(hora > "19:00:00"){
var timed = 'Boa Noite 🌃' 
}            

if(hora > "00:00:00"){
var dia1 = 'Tenha uma ótima madrugada ☺️' 
} 
if(hora > "05:30:00"){
var dia1 = 'Tenha um ótimo dia 🥰' 
}
if(hora > "12:00:00"){
var dia1 = 'Tenha uma ótima tarde 🌇' 
}
if(hora > "19:00:00"){
var dia1 = 'Tenha um ótimo noite 🌃' 
}       

var corzinhas = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]

const cor13 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

const banner = cfonts.render((`LAYON API`), {
font: 'block',
align: 'center',
colors: [`whiteBright`, `red`]
});  
const banner3 = cfonts.render((`©2025 Copyright World Ecletix company`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});

console.log(banner.string)
console.log(banner3.string)


//===================[ COMEÇO DO SITE ]===================//


// Rota para exibir o formulário de registro
app.get("/register", (req, res) => {
  res.render("register", { message: "" });
});

// Função para gerar uma chave aleatória de 8 dígitos
function generateRandomKey() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 8; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
}

// Rota para processar o formulário de registro
app.post("/register", async (req, res) => {
  try {
    const { username, password, key, numero } = req.body;
    const users = readUsersFromFile();
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      return res.render("register", {
        message: "Esse usuário já existe no sistema. Tente outro nome de usuário.",
      });
    }

    const defaultWallpaperLink = "https://telegra.ph/file/a68bceacf6d0c6943fc2f.jpg";
const foto = ["https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg","https://telegra.ph/file/43f022f05e8a1fa797386.jpg",
"https://telegra.ph/file/34456db457bbe05f2f218.jpg","https://telegra.ph/file/416d36fda7f6b737f5f93.jpg","https://telegra.ph/file/064837a8bfdd4884834c4.jpg","https://telegra.ph/file/56492e6b1f017cc74120c.jpg","https://telegra.ph/file/e50382d3286c966d64fd9.jpg","https://telegra.ph/file/4f59e2aa75d039088b4a3.jpg","https://telegra.ph/file/87ec6e3d2f047c3c20807.jpg"] 
var defaultPhotoLink = foto[Math.floor(Math.random() * foto.length)]
const key2 = generateRandomKey();
const isAdm = adminList.includes(username);
const saldo = '300'
const newUser = {
      username,
      password,
      numero,
      photoLink: defaultPhotoLink,
      key: key2,
      request: saldo,
      premium: isAdm ? 'sim' : 'nao',
      adm: isAdm ? 'sim' : 'nao'
    };
    users.push(newUser);
    writeUsersToFile(users);

    res.cookie("username", username);
    res.redirect("/login");
  } catch (error) {
    console.error("Erro ao registrar novo usuário:", error);
    res.status(500).send("Erro interno ao processar a solicitação.");
  }
});

//====================[ ROTAS ADM ]=======================//

app.post("/perfil2", async (req, res) => {
  const { key, username } = req.body;
  const users = readUsersFromFile();
  const currentUserIndex = users.findIndex((user) => user.username === username);
  
  const isPremium = checkPremium(username);
    if (isPremium) {
  if (currentUserIndex !== -1) {
    // Atualizando as informações do usuário
    users[currentUserIndex].key = key;
  
    writeUsersToFile(users);
    res.redirect("/login");
        const inf2 = "Por ventura, se não foi você que mudou, contate algum administrador do site.";

  }
    } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/perfil');
    }
    
});

app.get('/admin', async (req, res) => {
    const { username } = req.cookies;
    const users = await readUsersFromFile();
    const currentUser = users.find((user) => user.username === username);

    if (!usuariosAutorizados.includes(username)) {
        return res.redirect('/docs');
    }

    if (currentUser) {
        const { password, photoLink, key, request, numero } = currentUser;
        const data = new Date().toLocaleDateString();
        const hora = new Date().toLocaleTimeString();
        res.render("adm", { username, password, photoLink, wallpaperLink, key, numero, request, data, hora, readUsersFromFile, user: currentUser });
    } else {
        res.redirect("/login");
    }
});


app.get("/perfil", (req, res) => {
  const username = req.cookies.username;
  const users = readUsersFromFile();
  const currentUser = users.find((user) => user.username === username);

  if (currentUser) {
    res.render("perfil", { currentUser });
  } else {
    res.redirect("/login");
  }
});

// Rota para processar o formulário de alteração de configurações do usuário
app.post("/perfil", (req, res) => {
  const { username, password, photoLink, wallpaperLink } = req.body;
  const users = readUsersFromFile();
  const currentUserIndex = users.findIndex((user) => user.username === username);

  if (currentUserIndex !== -1) {
    // Atualizando as informações do usuário
    users[currentUserIndex].photoLink = photoLink;
    users[currentUserIndex].password = password;


    writeUsersToFile(users);
    res.redirect("/login");
  } else {
    res.redirect("/login");
  }
});
// Rota para processar o formulário de login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = readUsersFromFile();

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.cookie("username", username);
    res.redirect("/docs");
  } else {
    res.json({ error: "Nome ou senha incorretos." });
        res.redirect('/login');
  }
});

app.get("/docs", (req, res) => {
  const { username } = req.cookies;
  const users = readUsersFromFile();
  const user = users.find((user) => user.username === username);
  const currentUser = users.find((user) => user.username === username);
  let mscpadrao = 'https://j.top4top.io/m_30109j32g0.mp3'
  if (currentUser) {
    const { password, photoLink, key, request, numero, premium } = currentUser;
    res.render("docs", { username, password, photoLink, wallpaperLink, key, request, data, hora, readUsersFromFile, user, numero, mscpadrao }); 
  } else {
    res.redirect("/login");
  }
});

//==================[ ROTAS DAS API ]====================\\
   
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, './views/index.html');
  res.sendFile(htmlPath);
});

app.get("/login", (req, res) => {
  res.render("login", { message: "" });
});

app.get("/upload", (req, res) => {
  res.render("upload", { message: "" });
});


app.get('/valores', (req, res) => {
  const htmlPath = path.join(__dirname, './views/valor.html');
  res.sendFile(htmlPath);
});

app.get('/sh-start', (req, res) => {
  const htmlPath = path.join(__dirname, './views/sh-start.html');
  res.sendFile(htmlPath);
});

  
app.get('/chatPedrozz', (req, res) => {
const htmlPath = path.join(__dirname, './views/CHAT.html');
res.sendFile(htmlPath);
});

app.get('/love', (req, res) => {
const htmlPath = path.join(__dirname, './views/love.html');
res.sendFile(htmlPath);
});

app.get('/chat', (req, res) => {
const htmlPath = path.join(__dirname, './views/chat1.html');
res.sendFile(htmlPath);
});

app.get('/login1', (req, res) => {
const htmlPath = path.join(__dirname, './views/login.html');
res.sendFile(htmlPath);
});

app.get('/raivosap', (req, res) => {
const htmlPath = path.join(__dirname, './views/IA/raivosap.html');
res.sendFile(htmlPath);
});

app.get('/ciumentap', (req, res) => {
const htmlPath = path.join(__dirname, './views/IA/ciumentap.html');
res.sendFile(htmlPath);
});

app.get('/normalp', (req, res) => {
const htmlPath = path.join(__dirname, './views/IA/normalp.html');
res.sendFile(htmlPath);
});

app.get('/alegrep', (req, res) => {
const htmlPath = path.join(__dirname, './views/IA/alegrep.html');
res.sendFile(htmlPath);
});

app.get('/amavelp', (req, res) => {
const htmlPath = path.join(__dirname, './views/IA/amavelp.html');
res.sendFile(htmlPath);
});

app.get('/curiosap', (req, res) => {
const htmlPath = path.join(__dirname, './views/IA/curiosap.html');
res.sendFile(htmlPath);
});

app.get('/namoradap', (req, res) => {
const htmlPath = path.join(__dirname, './views/IA/namoradap.html');
res.sendFile(htmlPath);
});

//====================[ COMEÇO DA API ]==================\\
   
  router.get('/api/meme', async (req, res, next) => {
     var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
      const meme = JSON.parse(fs.readFileSync(__dirname + '/lib/meme.json'));
      const randmeme = meme[Math.floor(Math.random() * meme.length)];

      res.json({
      status: true,
      código: 200,
      criador: `${criador}`,
      url: `${randmeme}`
    })
    } catch {
      res.status(400).send(resposta.error)
    }
    })
     router.get('/api/memes', async (req, res, next) => {
    var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
      const meme = JSON.parse(fs.readFileSync(__dirname + '/lib/memes-video.json'));
      const randmeme = meme[Math.floor(Math.random() * meme.length)];

      res.json({
      status: true,
      código: 200,
      criador: `${criador}`,
      url: `${randmeme}`
    })
    } catch {
      res.status(400).send(resposta.error)
    }
    })
 router.get('/nsfw/hentai', async (req, res) => {
 var cdapikey = req.query.apikey;
 try {
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 end = getRandom([,"waifu", "neko"])
 let { url } = await getJson(`https://api.waifu.pics/nsfw/${end}`)
 let buffer = await getBuffer(url)
 res.type('png')
 res.send(buffer)
 } catch {
 res.type('text/json')
 res.status(400).send(resposta.error)
 }
 })
  
  router.get('/download/ytmp3', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 link = req.query.link          
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o link"})
 ytDonlodMp3(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(resposta.error)})})

 router.get('/download/ytmp4', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 link = req.query.link          
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o link"})
 ytDonlodMp4(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(resposta.error)})})

 router.get('/download/play', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
 ytPlayMp3(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(resposta.error)})})

 router.get('/download/playv', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
 ytPlayMp4(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(resposta.error)})})

////////////////(ia)//////////////////

router.get('/ia/gpt4', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/gpt4?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});


router.get('/ia/gemini', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
     if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/gemini?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/ia/turbo', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
     if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/turbo?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/ia/bingia', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
     if (!text) return res.json("coloque sua perqunta na URL 🥰)");

    fetch("https://aemt.me/bingai?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});
 
router.all('/api/attp', async (req, res) => {
var cdapikey = req.query.apikey;
if (!cdapikey) return res.json(resposta.semkey);
if (cdapikey !== key) return res.sendFile(keyinvalida);
const text = req.query.text1;
if (!text) return res.json("falta o parâmetro text1");
  try {
    const text = req.query.text;
    res.type('gif');
    const gifBuffer = await getBuffer(`https://aemt.me/attp?text=${text1}`);
    res.send(gifBuffer);
  } catch (e) {
    res.send(resposta.error);
  }
});

   
router.all('/api/pinterest', async (req, res) => {
var cdapikey = req.query.apikey;
if (!cdapikey) return res.json(resposta.semkey);
if (cdapikey !== key) return res.sendFile(keyinvalida);
const text = req.query.text1;
if (!text) return res.json("cade o titulo da sua pesquisa");
   try {
   res.type('png')
   res.send(await getBuffer(`https://aemt.me/pinimg?query=${text}`))
   } catch (e) {
   res.send(resposta.error)
   }
   })   

//////////////////(ia)//////////////////
//////////////// +18 \\\\\\\\\\\\\\\\\\\\

router.get('/18/video18', async (req, res, next) => {
    var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
      const vid = require("./lib/pack.js")
      const video_18 = vid.video_18
      const xvid = video_18[Math.floor(Math.random() * video_18.length)];

      res.json({
        url: `${xvid}`
    })
    } catch {
      res.send(resposta.error)
    }
    })
router.all('/18/foto18', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const tra = require("./lib/video+18.json")
const foto_18 = tra.foto_18
const traft = foto_18[Math.floor(Math.random() *foto_18.length)];
   res.json({
    url: `${traft}`
    })
   } catch (e) {
   res.send(resposta.error)
   }
   })

//////////////////fim +18\\\\\\\\\\\\\\\\
//////////////wallpaper\\\\\\\\\\\\\\\\\\
router.all('/wallpapernime', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/wallpapernime.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
  router.all('/satanic', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/satanic.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })  
   router.all('/bonek', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/bonek.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/travazap', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/travazap.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/femeninotrava', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/femininotrava.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/aesthetic', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/aesthetic.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/GameWallp', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/GameWallp.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })

//////////////fim wallpaper\\\\\\\\\\\\\\\\\\
////////////// Animes \\\\\\\\\\\\\\\\\\   
router.all('/cosplay', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/cosplay.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })   
router.all('/cosplayloli', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/cosplayloli.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   }) 
   router.all('/cosplaysagiri', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/cosplaysagiri.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })   
   router.all('/akira', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/akira.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })     
    router.all('/boruto', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/boruto.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })      
   router.all('/deidara', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/deidara.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })          
   router.all('/elaina', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/elaina.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })              
   router.all('/emilia', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/emilia.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/erza', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/erza.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/hinata', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/hinata.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })   
   router.all('/itachi', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/itachi.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/itori', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/itori.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/madara', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/madara.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
    router.all('/mikasa', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/mikasa.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
    router.all('/minato', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/minato.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
    router.all('/nezuko', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/nezuko.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/onepiece', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/onepiece.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   }) 
   router.all('/pokemon', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/pokemon.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   }) 
    router.all('/rize', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/rize.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })     
   router.all('/roze', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/roze.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })           
    router.all('/sakura', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/sakura.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })               
      router.all('/sagiri', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/sagiri.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })               
   router.all('/sasuke', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/sasuke.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })                     
   router.all('/tsunade', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/tsunade.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })                                   
//===============DOWNLOAD==================//

app.get('/download/ytmp3', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
 let link = req.query.link;
  if (!link) return res.json({ status: false, criador: `${criador}`, mensagem: "Coloque o link" });
  ytDonlodMp3(link)
    .then((akk) => {
      res.json({
        status: true,
        código: 200,
        criador: `${criador}`,
        resultado: akk
      });
    })
    .catch(e => {
      res.sendFile(error);
    });
});

app.get('/api/telegraPh', async(req, res, next) => {
 let img = req.query.imagem;
   if (!img) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro imagem" });
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey)
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
    ran = getRandom('.jpg')
    rano = getRandom('.jpg')
    buff = await getBuffer(img)
    fs.writeFileSync(ran, buff)
    anu = await TelegraPh(ran)
    res.status(200).send({resultado: util.format(anu) });
   })
   
app.get('/download/ytmp4', async(req, res, next) => {
  const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
 let link = req.query.link
  if (!link) return res.json({ status: false, criador: `${criador}`, mensagem: "Coloque o link" });
  
  ytDonlodMp4(link)
    .then((akk) => {
      res.json({
        status: true,
        código: 200,
        criador: `${criador}`,
        resultado: akk
      });
    })
    .catch(e => {
      res.sendFile(error);
    });
});

app.get('/download/play', async (req, res) => {
try {
const { nome, username, apikey } = req.query;
if (!nome) {
return res.json({ error: "Faltou o parâmetro 'nome' na url" });
}
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

try {
            const resultadoDownload = await ytPlayMp3(nome);
            res.json({
                status: true,
                código: 200,
                criador: `${criador}`,
                resultado: resultadoDownload
            });
        } catch (error) {
            console.error('Erro ao processar o download:', error);
            res.status(500).json({ status: false, mensagem: "Erro ao processar o download." });
        }
    } catch (error) {
        console.error('Erro no endpoint /download/play:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

app.get('/download/play2', async (req, res, next) => {
  try {
const { nome, username, apikey } = req.query;
if (!nome) {
return res.json({ error: "Faltou o parâmetro 'nome' na query" });
}
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

    ytPlayMp3(nome).then((resultado) => {
        const audioLink = resultado.link;
        res.setHeader('Content-Type', 'audio/mpeg');
        request.get(audioLink).pipe(res);
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ message: "Erro no Servidor Interno" });
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro no Servidor Interno" });
  }
});

app.get('/download/playvd', async(req, res, next) => {
const { nome, username, apikey } = req.query;
if (!nome) {
return res.json({ error: "Faltou o parâmetro 'nome' na query" });
}
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
  ytPlayMp4(nome)
    .then((akk) => {
      res.json({
        status: true,
        código: 200,
        criador: `${criador}`,
        resultado: akk
      });
    })
    .catch(e => {
      res.sendFile(error);
    });
});

app.get('/download/playvd2', async (req, res, next) => {
  try {
const { nome, username, apikey } = req.query;
if (!nome) {
return res.json({ error: "Faltou o parâmetro 'nome' na query" });
}
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

    ytPlayMp4(nome).then((resultado) => {
        const audioLink = resultado.link;
        res.setHeader('Content-Type', 'video/mp4');
        request.get(audioLink).pipe(res);
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ message: "Erro no Servidor Interno" });
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro no Servidor Interno" });
  }
});

app.get('/api/xvideosdl', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey)
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
link = req.query.url
if (!link) return res.json({ status : false, criador : `${criador}`, resultado : "Coloque o parametro: url"})
XvideosDL(link).then(async(e) => {
res.json({status: 200, resultado: e});
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.all('/creator/qr-code', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

    const texto = req.query.texto;
  if (!texto) return res.json({ status: false, criador: `${criador}`, mensagem: "Coloque o parâmetro texto!" });
   try {
   res.type('png')
   res.send(await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${texto}`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })

app.get('/api/metadinha', async(req, res, next) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

 	try {
 json = JSON.parse(fs.readFileSync(__path +'/lib/metadinha.json').toString())
 random = json[Math.floor(Math.random() * json.length)]
 res.json(random)
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'ops, aconteceu um erro no servidor interno, contate o admin pelo Whatsapp wa.me/556199317165', resultado: 'error'
		})
	}
	} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
})

app.get('/api/letras', async(req, res, next) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

const nome = req.query.nome;
  if (!nome) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro nome" });
styletext(nome).then(resultado => {
res.json({
status: true,
code: 200,
criador: `@${criador}`,
resultado: resultado
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
})

app.get('/api/mediafire', async(req, res, next) => {
 let query = req.query.url
 if (!query) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro url" });
 try {
 const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

 if (!query.includes('mediafire.com')) return res.json({
status: 'ERRO', 
admin: 'https://wa.me/556199317165', 
resultado: 'preciso de um link que seja do MediaFire!!!'
})       
try {
mediafire(query).then(result => {
res.json({
status: 'FUNCIONANDO', 
admin: 'https://wa.me/556199317165', 
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'ERRO', 
admin: 'https://wa.me/556199317165', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
});
} catch(err) {
console.log(err)
res.json({
status: 'ERRO', 
admin: 'https://wa.me/556199317165', 
resultado: 'ocorreu um erro no servidor interno, contate o admin no número acima!!'
})
}
} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
})

app.get('/api/instagram', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
var { url } = req.query;
if (!url) return res.json({status: false, message: "cade o parametro url?"})
saveig(url).then(data => {
res.json({status: true, resultado: data, código: 200})
}).catch(e => {
res.json({status: false, código: 404, message: `Erro no Servidor Interno`})
})
})

app.get('/api/twitter', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
 let query = req.query.link
 if (!query) return res.sendFile(paramtroerro)
 if (!query.includes('twitter.com')) return res.json({
status: 'ERRO', 
admin: 'https://wa.me/556199317165', 
resultado: 'preciso de um link que seja do Twitter!!!'
})     
twitterdl(query).then(result => {
res.json({
status: 'FUNCIONANDO', 
Criador: `${criador}`,
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'ERRO', 
Criador: `${criador}`,
resultado: 'ocorreu um erro no servidor interno, contate o suporte!'
})
})
})

app.get('/api/soundcloud', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
 let query = req.query.link
 if (!query) return res.sendFile(paramtroerro) 
 if (!query.includes('soundcloud.com')) return res.json({
status: 'ERRO', 
Criador: `${criador}`,
resultado: 'preciso de um link que seja do SoundCloud!!!'
})
try {
soundl(query).then(result => {
res.json({
status: 'FUNCIONANDO', 
Criador: `${criador}`,
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'ERRO', 
Criador: `${criador}`,
resultado: 'ocorreu um erro no servidor interno, contate o suporte!'
})
});
} catch(err) {
console.log(err)
res.json({
status: 'ERRO', 
Criador: `${criador}`,
resultado: 'ocorreu um erro no servidor interno, contate o suporte!'
})
}
})

app.get('/api/tiktok', async(req, res, next) => {
 let query = req.query.link
 if (!query) return res.sendFile(paramtroerro)
 if (!query.includes('tiktok.com')) return res.json({
status: 'ERRO', 
Criador: `${criador}`,
resultado: 'preciso de um link que seja do TikTok!!!'
})    
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
ttdownloader(query).then(result => {
res.json({
status: 'FUNCIONANDO', 
Criador: `${criador}`,
resultado: result
})
}).catch(error => {
console.log(error);
res.json({
status: 'ERRO', 
Criador: `${criador}`,
resultado: 'ocorreu um erro no servidor interno, contate o suporte!'
})
});
})

app.get('/api/google-drive', async(req, res, next) => {
var { url } = req.query;
if(!url)return res.json({status:false, message:'Cadê o parâmetro url'})
GDriveDl(url).then(data => {
res.json({resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/api/filme', async (req, res, next) => {
  try {
    const { nome } = req.query;
    if (!nome) return res.json({ status: false, message: 'Cadê o parâmetro nome' });

    const movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(nome)}&language=pt`);
    const movie = movieInfo.data.results[0];
    const ImageMovieLink = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const fotoFilme = await getBuffer(ImageMovieLink);

    res.json({
      status: 'FUNCIONANDO',
      Criador: criador,
      Nome: movie.title,
      Nome_original: movie.original_title,
      Lançamento: movie.release_date,
      Avaliações: `${movie.vote_average} - ${movie.vote_count} Votos`,
      Popularidade: `${movie.popularity.toFixed(1)}%`,
      Classificação_adulta: movie.adult ? 'Sim.' : 'Não.',
      Linguagem_oficial: movie.original_language,
      Sinopse: movie.overview,
      imagem: ImageMovieLink
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: false,
      message: 'Erro ao processar a solicitação',
      error: e.message
    });
  }
});

app.get('/api/serie', async (req, res, next) => {
  try {
    const { nome } = req.query;
    if (!nome) return res.json({ status: false, message: 'Cadê o parâmetro nome' });

    const serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(nome)}&language=pt`);
    const serie = serieInfo.data.results[0];
    const ImageSerieLink = `https://image.tmdb.org/t/p/original${serie.backdrop_path}`;
    const fotoSerie = await getBuffer(ImageSerieLink);

    res.json({
      status: 'FUNCIONANDO',
      Criador: criador,
      Nome: serie.name,
      Nome_original: serie.original_name,
      Lançamento: serie.first_air_date,
      Avaliações: `${serie.vote_average} - ${serie.vote_count} Votos`,
      Popularidade: `${serie.popularity.toFixed(1)}%`,
      Classificação_adulta: serie.adult ? 'Sim.' : 'Não.',
      Linguagem_oficial: serie.original_language,
      Sinopse: serie.overview,
      imagem: ImageSerieLink
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: false,
      message: 'Erro ao processar a solicitação',
      error: e.message
    });
  }
});
//=================PESQUISA================//
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'public/file',
    filename: (req, file, cb) => {
        cb(null, makeid(5) +
            path.extname(file.originalname))
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 100000000 // 100 MB
    }
})

app.post('/arquivo', upload.single('file'), (req, res) => {
    if (!req.file.path) return res.status(400).json({
        status: false,
        mensagem: "Nenhum arquivo foi carregado"
    })
    res.status(200).json({
        status: true,
        criador: "@pedrozz_Mods",
        resultado: {
            nomeoriginal: req.file.originalname,
            encoding: req.file.encoding,
            tipo: req.file.mimetype,
            tamanho: req.file.size,
            link: "https://marcos025.onrender.com/file/" + req.file.filename
        }
    })
}, (error, req, res, next) => {
    res.status(400).json({
        error: error.message
    })
})

app.post('/multi-upload', upload.array('files', 10), (req, res) => {
    if (!req.files) return res.status(400).json({
        status: false,
        mensagem: "Nenhum arquivo foi carregado"
    })
    const resultado = []
    req.files.forEach(v => {
        resultado.push({
            nomeoriginal: v.originalname,
            encoding: v.encoding,
            tipo: v.mimetype,
            tamanho: v.size,
            link: "https://" + req.hostname + "/file/" + v.filename
        })
    });
    res.status(200).json({
        status: true,
        criador: "@Pedrozz_Mods",
        resultado: resultado
    })
})

app.get('/api/xvideossh', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey)
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
query = req.query.q
XvideosSearch(query).then(async(e) => {
res.json({status: 200, resultado: e});
}).catch((error) => { 
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.get('/api/xvideoporn', async(req, res, next) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const nome = req.query.nome;
  if (!nome) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro nome" });
xvideos1(nome).then(resultado => {
res.json({
status: true,
code: 200,
criador: `@${criador}`,
resultado: resultado
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
})

app.get('/api/wallpaper', async (req,res) => {
var { query } = req.query
if(!query)return res.json({status:false, message:'Cadê o parâmetro: query'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
try {
const result = await wallpaper2(query); 
const resultado1 = result[Math.floor(Math.random() * result.length)];
    const buffer = await getBuffer(resultado1);
    res.type('png');
    res.send(buffer);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      mensagem: 'Erro no Servidor Interno'
    });
  }
})

app.get('/api/gp', async(req, res, next) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const nome = req.query.nome;
  if (!nome) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro nome" });
gpsrc(nome).then(resultado => {
const resultado1 = resultado[Math.floor(Math.random() * resultado.length)];
res.json({
status: true,
code: 200,
criador: `@${criador}`,
resultado: resultado1
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
})

app.get('/api/pin', async (req, res, next) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

  const query = req.query.query;
  try {
    const resultado = await pinterest(query); 
const resultado1 = resultado[Math.floor(Math.random() * resultado.length)];
    const buffer = await getBuffer(resultado1);
    res.type('png');
    res.send(buffer);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      mensagem: 'Erro no Servidor Interno'
    });
  }
  } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
});

app.get('/api/pensador2', async(req, res, next) => {
const { username, apikey } = req.query;
const text = req.query.nome;
  if (!text) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro nome" });
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
pensador1(text).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/api/pensador', async(req, res, next) => {
const nome = req.query.nome;
  if (!nome) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro q" });
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

pensador(nome).then(resultado => {
const resultado1 = resultado[Math.floor(Math.random() * resultado.length)];
res.json({
status: true,
code: 200,
criador: `@${criador}`,
resultado: resultado1
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
})

app.get('/api/tempo', async(req, res, next ) => {
const city = req.query.city;
  if (!city) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro city" });
  try {
  const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5c0840c2457fbb64188a6d4be05618f&units=metric&lang=pt_b`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter dados do clima');
    }
    return response.json();
  })
  .then(clima => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      resultado: {
        temperatura: clima.main.temp,
        cidade: clima.name,
        'temperatura_max': clima.main.temp_max,
        'temperatura_min': clima.main.temp_min,
        clima: clima.weather[0].description,
        umidade: clima.main.humidity,
        ventos: clima.wind.speed
      }
    });
  })
  .catch(error => {
    console.error('Erro ao obter dados do clima:', error);
    res.status(500).json({ status: false, message: 'Erro ao obter dados do clima' });
  });
  } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
});

app.all('/api/printsite', async (req, res) => {
const url = req.query.url;
  if (!url) return res.json({ status: false, criador: `${criador}`, mensagem: "Faltou o parâmetro url" });
  try {
  const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
   res.send(await getBuffer(`https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${url}&apikey=tiomaker8930`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
//==================FIGURINHAS================//
app.all('/sticker/figu_emoji', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 102)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-emoji/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })

app.all('/sticker/figu_flork2', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 102)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/anya-bot/master/Figurinhas/figu_flork/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })

app.all('/sticker/figu_aleatori', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 8051)
   res.send(await getBuffer(`https://raw.githubusercontent.com/badDevelopper/Testfigu/master/fig (${rnd}).webp`))
   } catch (e) {
   res.send(resposta.error)
   }
} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
app.all('/sticker/figu_memes', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 109)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-memes/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
} catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
   
app.all('/sticker/figu_anime', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 109)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-anime/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
   
app.all('/sticker/figu_coreana', async (req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 43)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-coreana/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   })
app.all('/sticker/figu_bebe', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 17)
   res.send(await getBuffer(`https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figbebe/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
   
app.all('/sticker/figu_desenho', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 50)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-desenho/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
   
app.all('/sticker/figu_animais', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 50)
   res.send(await getBuffer(`https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figanimais/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })

app.all('/sticker/figu_engracada', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 25)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-engracadas/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
   
app.all('/sticker/figu_raiva', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 25)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-raiva/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })

app.all('/sticker/figu_roblox', async (req, res) => {
try {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

   try {
   res.type('png')
    var rnd = Math.floor(Math.random() * 25)
   res.send(await getBuffer(`https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-roblox/${rnd}.webp`))
   } catch (e) {
   res.send(resposta.error)
   }
   } catch (error) {
console.error('Erro no endpoint:', error);
res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
}
   })
   
app.get('/api/ttp', async(req, res) => {
texto = req.query.texto
if(!texto)return res.json({status:false, message:'Cade o parametro texto??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})   

function muptime(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var days = Math.floor(seconds / (3600 * 24))
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return 'Dias: ' + `${Dias}` + ' • ' + 'Horas: ' + pad(hours) + ' • ' + 'Minutos: ' + pad(minutes) + ' • ' + 'Segundos: ' +  pad(seconds)
}

function ping() {
  const speed = require('performance-now');
  const timestampm = speed();
  const latency = speed() - timestampm;
  const ms = latency.toFixed(4);
    return ms
}

app.get('/api/attp', async (req, res) => {
  try {
    const texto = req.query.texto;
    if (!texto) {
      return res.json({ status: false, motivo: 'Cadê o parâmetro texto?' });
    }

    const apiUrl = `http://br3.bronxyshost.com:3039/api-bronxys/attp?texto=${texto}&apikey=daniel_dzn`;
    const buffer = await getBuffer(apiUrl);

    res.set({ 'Content-Type': 'image/gif' });
    res.send(buffer);
  } catch (error) {
    console.error('Erro ao buscar o GIF:', error);
    res.status(500).json({ status: false, motivo: 'Erro interno do servidor' });
  }
});

 

app.get('/api/attp1', async (req, res, next) => {

      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
    hasil = `https://marcos025.onrender.com/api/maker/attp1?texto=${texto}&apikey=XANAX-VNCS$`
const buffer = await getBuffer(hasil);
res.set({ 'Content-Type': 'image/gif' });
    res.send(buffer);
}) 

app.get('/api/attp2', async (req, res, next) => {   
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
    hasil = `https://marcos025.onrender.com/api/maker/attp2?texto=${texto}&apikey=XANAX-VNCS$`
const buffer = await getBuffer(hasil);
res.set({ 'Content-Type': 'image/gif' });
    res.send(buffer);
}) 


app.get('/api/attp3', async (req, res, next) => {
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})

    hasil = `https://marcos025.onrender.com/api/maker/attp3?texto=${texto}&apikey=XANAX-VNCS$`
const buffer = await getBuffer(hasil);
res.set({ 'Content-Type': 'image/gif' });
    res.send(buffer);
}) 

app.get('/api/attp4', async (req, res, next) => {
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
    hasil = `https://marcos025.onrender.com/api/maker/attp4?texto=${texto}&apikey=XANAX-VNCS$`
const buffer = await getBuffer(hasil);
res.set({ 'Content-Type': 'image/gif' });
    res.send(buffer);
}) 


app.get('/api/attp5', async (req, res, next) => {
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})

    hasil = `https://marcos025.onrender.com/api/maker/attp5?texto=${texto}&apikey=XANAX-VNCS$`
const buffer = await getBuffer(hasil);
res.set({ 'Content-Type': 'image/gif' });
    res.send(buffer);
}) 


app.get('/api/attp6', async (req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
var texto = req.query.texto 
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
console.log(color(' │ APIKEY:'  + ` ${apikey} • USERNAME: ${username}\n`,'red'),color('│','red'), color('REQUEST', 'red'), '• ' + color('PING: ' + ping(), 'red'))
hasil = `https://marcos025.onrender.com/api/maker/attp6?texto=${texto}&apikey=XANAX-VNCS$`
const buffer = await getBuffer(hasil);
res.set({ 'Content-Type': 'image/gif' });
    res.send(buffer);
}) 


app.get('/api/emojimix', async (req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
    try {
        const { emoji1, emoji2 } = req.query;

        if (!emoji1) {
            return res.json({ status: false, message: "Parâmetro ausente: emoji1" });
        }

        if (!emoji2) {
            return res.json({ status: false, message: "Parâmetro ausente: emoji2" });
        }

        const apiKey = "AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ";
        const url = `https://tenor.googleapis.com/v2/featured?key=${apiKey}&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            return res.json({ status: false, message: "Nenhum resultado encontrado para os emojis fornecidos." });
        }

        const randomResult = data.results[Math.floor(Math.random() * data.results.length)];
        const imageUrl = randomResult.url;
        const buffer = await getBuffer(imageUrl);

        res.set({ 'Content-Type': 'image/png' });
        res.send(buffer);
    } catch (error) {
        res.json({ status: false, message: "Erro no Servidor Interno.", error: error.message });
    }
});


app.get('/api/emojimixt', async (req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
    try {
        const { emoji1, emoji2, texto } = req.query;

        if (!emoji1) {
            return res.json({ status: false, message: "Parâmetro ausente: emoji1" });
        }

        if (!emoji2) {
            return res.json({ status: false, message: "Parâmetro ausente: emoji2" });
        }
        
        if (!texto) {
            return res.json({ status: false, message: "Parâmetro ausente: texto" });
        }

        const apiKey = "AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ";
        const url = `https://tenor.googleapis.com/v2/featured?key=${apiKey}&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            return res.json({ status: false, message: "Nenhum resultado encontrado para os emojis fornecidos." });
        }

        const randomResult = data.results[Math.floor(Math.random() * data.results.length)];
        const imageUrl = randomResult.url;
        const ttt = `https://api.popcat.xyz/quote?image=${imageUrl}&text=${texto}&font=Poppins-Bold&name=-`;
        const buffer = await getBuffer(ttt);

        res.set({ 'Content-Type': 'image/png' });
        res.send(buffer);
    } catch (error) {
        res.json({ status: false, message: "Erro no Servidor Interno.", error: error.message });
    }
});

app.get('/api/attp', async (req, res) => {
try {
texto = req.query.texto
if(!texto)return res.json({status:false, message:'Cade o parametro texto??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
await attp(texto).then(img => {
res.sendFile(img, { root: __dirname})
}).catch(e => {
return res.json({message: "Ocorreu um erro ao gerar o gif, por favor notifique ao administrador, enviando o print da página.", errorMessage: String(e)})
})
} catch (e) {
return res.json({message: "Ocorreu um erro ao gerar o gif, por favor notifique ao administrador, enviando o print da página.", errorMessage: String(e)})
}
})

//==================OUTROS=================//
app.all('/creator/img', async (req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const frase = req.query.frase;
if (!frase) return res.json({ status: false, motivo: 'Cadê o parâmetro frase' });
const autor = req.query.autor;
if (!autor) return res.json({ status: false, motivo: 'Cadê o parâmetro autor' });

   try {
   res.type('png')
var pedrox =[`https://junimk.sirv.com/Api2/2b74dbae3404bd472f384e88f7e11056.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/9d7caf002efa649234adcec4aadb96fc.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/42bedf2e32baa91631ec09e690aa88da.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/42bedf2e32baa91631ec09e690aa88da.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/051b30dd2f6c78be9db719b46d12ced1.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/84f5533218ae3fbc050349d5d1937d13.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/199b8cd98e4ef6f48a82d35ac26527c7.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/09509cab4a132de6c3cde4b1574fb6a7.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/488017c0584356cf50d6207aa84514df.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`,`https://junimk.sirv.com/Api2/b283338faf5ec21ace9efe8408c3aba0.jpg?text.0.text=${frase}&text.0.position.gravity=center&text.0.size=100&text.0.color=ffffff&text.0.font.style=italic&text.0.outline.width=4&text.0.outline.blur=26&text.1.text=-%20${autor}%20-&text.1.position.gravity=south&text.1.size=35&text.1.color=ffffff&text.1.outline.width=2&text.1.outline.blur=4`]
var frit = pedrox[Math.floor(Math.random() * pedrox.length)]			
   res.send(await getBuffer(`${frit}`))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
app.all('/fr/frases', async (req, res) => {

var frases = ['amor imaturo diz: Eu te amo porque preciso de você','A vida começa a cada cinco minutos','Onde as palavras falham, a música fala','Um bom viajante não tem planos','Uma vez que aceitamos nossos limites, vamos além deles','O que não nos mata nos fortalece','Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','Nunca perca o senso de humor e aprenda a rir de suas próprias falhas','A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes','O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção','Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. ??','Fazendo dos meus sonhos, um objetivo. 💭']
var frase = frases[Math.floor(Math.random() * frases.length)]
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
  try {
    res.json({
      resultado: frase
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Erro ao processar a requisição" });
  }
});


app.all('/api/wall', async (req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
try {
res.type('png')
var wall2 = [
"https://wallpaperaccess.com/full/395986.jpg",
"https://wallpaperaccess.com/full/21628.jpg",
"https://wallpaperaccess.com/full/21622.jpg",
"https://wallpaperaccess.com/full/21612.jpg",
"https://wallpaperaccess.com/full/21611.png",
"https://wallpaperaccess.com/full/21597.jpg",
"https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png",
"https://wallpaperaccess.com/full/21591.jpg",
"https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg",
"https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg",
"https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png",
"https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg",
"https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png",
"https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg",
"https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg",
"https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png",
"https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png",
"https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg",
"https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg",
"https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png",
"https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png",
"https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg",
"https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png",
"https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg",
"https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg",
"https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg",
"https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png",
"https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg",
"https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg",
"https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png",
"https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg",
"https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png",
"https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg",
"https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg",
"https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg",
"https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png",
"https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg",
"https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png",
"https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg",
"https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg",
"https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg",
"https://cdn.nekos.life/wallpaper/3db40hylKs8.png",
"https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg",
"https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png",
"https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg",
"https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg",
"https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg",
"https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg",
"https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg",
"https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg",
"https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png",
"https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg",
"https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg",
"https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg",
"https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png",
"https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png",
"https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png",
"https://cdn.nekos.life/wallpaper/yO6ioREenLA.png",
"https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg",
"https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png",
"https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png",
"https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg",
"https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg",
"https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg",
"https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg",
"https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg",
"https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png",
"https://cdn.nekos.life/wallpaper/32EAswpy3M8.png",
"https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png",
"https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg",
"https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png",
"https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg",
"https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png",
"https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png",
"https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg",
"https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg",
"https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png",
"https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg",
"https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg",
"https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg",
"https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png",
"https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png",
"https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg",
"https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg",
"https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg",
"https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png",
"https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg",
"https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png",
"https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg",
"https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png",
"https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg",
"https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg",
"https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg",
"https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg",
"https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg",
"https://cdn.nekos.life/wallpaper/9ru2luBo360.png",
"https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png",
"https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png",
"https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg",
"https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg",
"https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg",
"https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg",
"https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg",
"https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg",
"https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg",
"https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png",
"https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png",
"https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg",
"https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg",
"https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png",
"https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg",
"https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg",
"https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg",
"https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg",
"https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg",
"https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg",
"https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg",
"https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg",
"https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg",
"https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png",
"https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg",
"https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg",
"https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png",
"https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg",
"https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png",
"https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg",
"https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png",
"https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg",
"https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png",
"https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg",
"https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg",
"https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png",
"https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png",
"https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png",
"https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png",
"https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png",
"https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png",
"https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png",
"https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png",
"https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg",
"https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg",
"https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg",
"https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg",
"https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg",
"https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png",
"https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg",
"https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg",
"https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg",
"https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg",
"https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg",
"https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg",
"https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png",
"https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png",
"https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png",
"https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg",
"https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg",
"https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg",
"https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg",
"https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg",
"https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png",
"https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png",
"https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg",
"https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png",
"https://cdn.nekos.life/wallpaper/3db40hylKs8.png",
"https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg",
"https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg",
"https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png",
"https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png",
"https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg",
"https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png",
"https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg",
"https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg",
"https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png",
"https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg",
"https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg",
"https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg",
"https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg",
"https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg",
"https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg",
"https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg",
"https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png",
"https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png",
"https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg",
"https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png",
"https://cdn.nekos.life/wallpaper/58C37kkq39Y.png",
"https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg",
"https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg",
"https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg",
"https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png",
"https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg",
"https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg",
"https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg",
"https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg",
"https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png",
"https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg",
"https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg",
"https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png",
"https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg",
"https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg",
"https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg",
"https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg",
"https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png",
"https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png",
"https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg",
"https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg",
"https://cdn.nekos.life/wallpaper/89MQq6KaggI.png",
"https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png"]
var wall = wall2[Math.floor(Math.random() * wall2.length)]
   res.send(await getBuffer(`${wall}`))
   } catch (e) {
   res.send(resposta.error)
   }
   })

app.get('/api/audiomeme', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
var { query } = req.query;
if(!query) return res.json({status:false, message:'Cadê o parâmetro query'})
audioMeme.myinstants(query).then(data => {
res.json({
resultado: data
})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

//===================IMAGENS==================//

app.get('/api/alerta', async(req, res) => {
texto = req.query.texto
if(!texto)return res.json({status:false, message:'Cade o parametro texto??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = `https://api.popcat.xyz/alert?text=${texto}`
res.type('jpg')
res.send(await getBuffer(sitee))
})   

app.get('/api/fatos', async(req, res) => {
texto = req.query.texto
if(!texto)return res.json({status:false, message:'Cade o parametro texto??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = `https://api.popcat.xyz/facts?text=${texto}`
res.type('jpg')
res.send(await getBuffer(sitee))
})   

app.get('/api/sadcat', async(req, res) => {
texto = req.query.texto
if(!texto)return res.json({status:false, message:'Cade o parametro texto??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = `https://api.popcat.xyz/sadcat?text=${texto}`
res.type('jpg')
res.send(await getBuffer(sitee))
})   

app.get('/api/letramusica', async(req, res) => {
texto = req.query.texto
if(!texto)return res.json({status:false, message:'Cade o parametro texto??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = await fetchJson(`https://api.popcat.xyz/lyrics?song=${texto}`)
try {
res.json({
titulo: sitee.title,
imagem: sitee.image,
artista: sitee.artist,
letra: sitee.lyrics
});
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Erro ao processar a requisição" });
  }
})   

app.get('/api/mm', async(req, res) => {
url = req.query.url
if(!url)return res.json({status:false, message:'Cade o parametro url??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = `https://api.popcat.xyz/mnm?image=${url}`
res.type('jpg')
res.send(await getBuffer(sitee))
})   

app.get('/api/bemvindo', async(req, res) => {
avatar = req.query.avatar
fundo = req.query.fundo
texto1 = req.query.texto1
texto2 = req.query.texto2
texto3 = req.query.texto3
if(!avatar)return res.json({status:false, message:'Cade o parametro avatar (link)??'})
if(!fundo)return res.json({status:false, message:'Cade o parametro fundo (link)??'})
if(!texto1)return res.json({status:false, message:'Cade o parametro texto1??'})
if(!texto2)return res.json({status:false, message:'Cade o parametro texto2??'})
if(!texto3)return res.json({status:false, message:'Cade o parametro texto3?'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = `https://api.popcat.xyz/welcomecard?background=${fundo}&text1=${texto1}&text2=${texto2}&text3=Member+${texto3}&avatar=${avatar}`
res.type('jpg')
res.send(await getBuffer(sitee))
})   

app.get('/api/legendaimg', async(req, res) => {
image = req.query.image
texto1 = req.query.texto1
texto2 = req.query.texto2
if(!image)return res.json({status:false, message:'Cade o parametro image??'})
if(!texto1)return res.json({status:false, message:'Cade o parametro texto1??'})
if(!texto2)return res.json({status:false, message:'Cade o parametro texto2??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = `https://api.popcat.xyz/quote?image=${image}&text=${texto1}&font=Poppins-Bold&name=${texto2}`
res.type('jpg')
res.send(await getBuffer(sitee))
})   

app.get('/api/nokia', async(req, res) => {
url = req.query.url
if(!url)return res.json({status:false, message:'Cade o parametro url??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
sitee = `https://api.popcat.xyz/nokia?image=${url}`
res.type('jpg')
res.send(await getBuffer(sitee))
})  

//=========================( Premium )========================//

app.get('/api/only', async(req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const isPremium = checkPremium(username);
    if (isPremium) {

var random = only[Math.floor(Math.random() * only.length)]
res.type('jpg')
res.send(await getBuffer(random))
    } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/docs');
    }
})   

app.get('/api/contasOnly', async(req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const isPremium = checkPremium(username);
    if (isPremium) {

var random = contaOnly[Math.floor(Math.random() * contaOnly.length)]
try {
res.json({
status: 'online',
criafor: `${criador}`,
resultado: random
});
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Erro ao processar a requisição" });
  }
    } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/docs');
    }
})   

app.get('/api/foto18', async(req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const isPremium = checkPremium(username);
    if (isPremium) {

var random = foto_18[Math.floor(Math.random() * foto_18.length)]
res.type('jpg')
res.send(await getBuffer(random))
    } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/docs');
    }
})

app.get('/api/travazap', async(req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

var random = travazap[Math.floor(Math.random() * travazap.length)]
res.type('jpg')
res.send(await getBuffer(random))

}) 

app.get('/api/femininotrava', async(req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

var random = femininotrava[Math.floor(Math.random() * femininotrava.length)]
res.type('jpg')
res.send(await getBuffer(random))

}) 

app.get('/api/video18', async(req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const isPremium = checkPremium(username);
    if (isPremium) {

var random = video_18[Math.floor(Math.random() * video_18.length)]
try {
res.json({
status: 'online',
criafor: `${criador}`,
resultado: random
});
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Erro ao processar a requisição" });
  }
    } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/docs');
    }
})   


app.get('/api/nome', async (req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
  const nome = req.query.nome;
  if (!nome) return res.json("Coloque o nome da pessoa na URL👩‍💻");
const isPremium = checkPremium(username);
    if (isPremium) {
    
  try {
    const puxada = await fetchJson(`https://hydra-systems.online/api/info/search/2?documento=${nome}`);
    const data = puxada.resultado[0];

    res.json({
      status: true,
      code: 200,
      criador: `${criador}/Lucasx7`,
      nome: data.NOME,
      'nome-da-mae': data.NOME_MAE,
      sexo: data.SEXO,
      nascimento: data.NASC,
      cpf: data.CPF
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: false,
      code: 500,
      message: 'Erro ao processar a solicitação',
      error: e.message
    });
  }
      } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/docs');
    }
})



app.get('/api/cpf', async (req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
  const cpf = req.query.cpf;
  if (!cpf) return res.json("Coloque o nome da pessoa na URL👩‍💻");
const isPremium = checkPremium(username);
    if (isPremium) {
  try {
    const puxada = await fetchJson(`https://hydra-systems.online/api/info/search/1?documento=${cpf}`);
    const data = puxada.DADOS[0];
    const emails = puxada.EMAIL.map(e => e.EMAIL).join(', ');
    const enderecos = puxada.ENDERECOS.map(e => 
        `${e.LOGR_TIPO} ${e.LOGR_NOME}, ${e.LOGR_NUMERO} ${e.LOGR_COMPLEMENTO}, ${e.BAIRRO}, ${e.CIDADE} - ${e.UF}, CEP: ${e.CEP}`
      ).join('\n');
    res.json({
      status: true,
      code: 200,
      criador: `${criador}/Lucasx7`,
      CONTATOS_ID: data.CONTATOS_ID,
      CPF: data.CPF,
      NOME: data.NOME,
      SEXO: data.SEXO,
      NASC: data.NASC,
      NOME_MAE: data.NOME_MAE,
      NOME_PAI: data.NOME_PAI,
      CADASTRO_ID: data.CADASTRO_ID,
      ESTCIV: data.ESTCIV,
      RG: data.RG,
      NACIONALID: data.NACIONALID,
      CONTATOS_ID_CONJUGE: data.CONTATOS_ID_CONJUGE,
      SO: data.SO,
      CD_SIT_CAD: data.CD_SIT_CAD,
      DT_SIT_CAD: data.DT_SIT_CAD,
      DT_INFORMACAO: data.DT_INFORMACAO,
      CBO: data.CBO,
      ORGAO_EMISSOR: data.ORGAO_EMISSOR,
      UF_EMISSAO: data.UF_EMISSAO,
      DT_OB: data.DT_OB,
      CD_MOSAIC: data.CD_MOSAIC,
      RENDA: data.RENDA,
      FAIXA_RENDA_ID: data.FAIXA_RENDA_ID,
      TITULO_ELEITOR: data.TITULO_ELEITOR,
      CD_MOSAIC_NOVO: data.CD_MOSAIC_NOVO,
      CD_MOSAIC_SECUNDARIO: data.CD_MOSAIC_SECUNDARIO,
      EMAIL: emails,
      ENDEREÇO: enderecos
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: false,
      code: 500,
      message: 'Erro ao processar a solicitação',
      error: e.message
    });
  }
        } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/docs');
    }
});

app.get('/api/cep', async(req, res, next) => {
var { code } = req.query;
if (!code) return res.json({ status : false, message: "faltando o parametro: code"})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const isPremium = checkPremium(username);
    if (isPremium) {
    
axios.get(`https://brasilapi.com.br/api/cep/v2/${code}`).then(bankCode => {
res.json({status: 200, criador: `${criador}`, resultado: bankCode.data})
}).catch(error => {
res.json({status: 404, message: error})
})
        } else {
        res.json({ error: "Você não é um usuário premium." });
        res.redirect('/docs');
    }
})

app.get('/api/numero', async (req, res) => {
query = req.query.query 
if(!query)return res.json({status:false, resultado:'Cade o parametro query??'})
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const isPremium = checkPremium(username);
    if (isPremium) {
anu = await fetchJson(`http://apilayer.net/api/validate?access_key=d57f91cf25db296a9e223888cfdc064a&number=${query}`)
var FomartN = query.substring(2);
var pro = await fetchJson(`https://apisdedicado.nexos.dev/SerasaTelefones/telefone?token=2ae274ad75c45b657547631a82358dbc&telefone=${FomartN}`)
res.json({
status: true, 
criador: `${criador}`,
resultado: {
number: anu.number,
country: anu.country_name, 
location: anu.location,
dispositivo: anu.line_type, 
}})

} else {
res.json({ error: "Você não é um usuário premium." });
res.redirect('/docs');
}

})
//===================INTELIGÊNCIAS=================//

app.get('/api/transcrever', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

const link = req.query.link;
if (!link) return res.json("coloque o link do áudio e na URL 🥰");
try {
//CÓDIGO DO ASSEMBLYAi
const ju = new AssemblyAI({ apiKey: "11d7fb1a4e8f4e4fac85d3b9be844b4a" });
const data = await ju.transcripts.create({ audio_url: link, language_code: "pt" });

if (data.status === 'error') {
return 
res.json({
status: true,
code: 200,
criador: `${criador}`,
Erro: "Ocorreu um erro ao transcrever o áudio! Por favor, tente novamente."
});}
if (data.words.length == 0) { return 
res.json({
status: true,
code: 200,
criador: `${criador}`,
Erro: "Não foi possível transcrever o áudio enviado."
});}
res.json({
status: true,
code: 200,
criador: `${criador}`,
resultado: data.text
});

} catch (e) {
console.log(e.toString());
}
})

app.get('/api/turbo', async(req, res, next) => {
  const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
  try {

    const text = req.query.text;
     if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/turbo?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        })
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

app.get('/api/gemini', async(req, res, next) => {
  const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
  try {

    const text = req.query.query;
     if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/gemini?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        })
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

app.get('/api/simih', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
var { text, language } = req.query;
if (!text) return res.json({ status : false,  message: "faltando o parametro: text"})
if (!language) return res.json({ status : false,  message: "faltando o parametro: language"})
axios.post('https://api.simsimi.vn/v2/simtalk', new URLSearchParams({'text': text, 'lc': language})).then(async ({data: {message, status}}) => {
res.json({status: 200, resultado: message});
}).catch(error => {
res.json({status: 404, resultado: "Não entendi, por favor me ensine!"});
});
})

app.get('/api/tradutor', async (req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
var { text, ling } = req.query;
if (!text) return res.json({ status: 404, message : "digite o parâmetro de texto."})  
if (!ling) return res.json({status: 404, message : "parâmetro de entrada: ling. Você pode ver a lista de idiomas em https://cloud.google.com/translate/docs/languages"})  
defaultLang = 'en'; defaultBrazilian = 'pt'
let result
try {
result = await translate(`${text}`, {tld: defaultBrazilian, to: ling})
} catch (e) {
result = await translate(`${text}`, {tld: defaultBrazilian, to: defaultLang})
} finally {
res.json({status: true, result: result[0]})
}
})

app.get('/api/gpt4', async (req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
  try {
    const text = req.query.text;
    if (!text) return res.json({ status: false, criador: `${criador}`, mensagem: "Coloque sua pergunta na URL 🥰" });
    const data = await fetchJson("https://aemt.me/gpt4?text=" + text);
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      resultado: data.result
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(`Deu erro: ${error.message}`);
  }
})



app.get('/api/chatgpt', async(req, res, next) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}
const question = req.query.pergunta
if(!question) return res.json({message: "Faltando o parâmetro: ( pergunta )"});
rsnchat.chatgpt(question).then((response) => {
return res.json(response);
}).catch((errorMessage) => {
return res.json({status: "Offline", resultado: {message: 'Ocorreu um erro ao executar à ação, por favor, notifique ao administrador da página.', errorMessage: String(errorMessage)}, statusCode: 404});
});
});

app.get('/api/gtts', async (req, res) => {
const { username, apikey } = req.query;
if (!username || !apikey) {
return res.status(400).json({ error: "Faltou o parâmetro 'username' ou 'key' na query" });}
const users = readUsersFromFile();
const user = users.find(user => user.username === username && user.key === apikey);
if (!user) {return res.status(401).send('Acesso não autorizado.');}
const resultadoDiminuicao = diminuirSaldo(username);
if (!resultadoDiminuicao) {return res.status(400).json({ error: "Saldo insuficiente." });}

    const text = req.query.text;
    if (!text) return res.json({ status: false, criador: `${criador}`, mensagem: "Coloque sua pergunta na URL 🥰" });
    const ling = req.query.ling;
    if (!ling) return res.json({ status: false, criador: `${criador}`, mensagem: "Coloque linguagem na url" });
    const gttsInstance = gtts(ling); 
    const ranm = getRandom('.mp3');
    const rano = getRandom('.ogg');
    gttsInstance.save(ranm, text, function() {
        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
            if (err) {
                fs.unlinkSync(ranm);
                return res.status(500).json({ status: false, criador: `${criador}`, mensagem: "Erro ao processar o áudio" });
            }

            fs.unlinkSync(ranm);
            const buffer = fs.readFileSync(rano);
            res.setHeader('Content-Type', 'audio/mpeg');
            res.send(buffer);

            fs.unlinkSync(rano);
        });
    });
});

//===================[ PHOTOOXY ]===================//

   router.all('*', async (req, res) => {
   res.status(404).json({
            status:404,
            error: 'Esta página não esta presente na Rest Api',
            endpoint: req.path
        })
})

//===================[ PORTAS ]====================//

app.listen(PORT, () => {
    console.log('Conectando...');
    console.log("Servidor rodando em http://localhost:" + PORT);
});

module.exports = app;

//==============( ÁREA DAS ATUALIZAÇÕES )==========\\
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O arquivo index.js foi editado. Reiniciando...');
process.exit();
}
});
//==========================(  )========================\\




