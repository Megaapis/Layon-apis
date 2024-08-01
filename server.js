const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
var mainrouter = require('./index.js'); // Importa o roteador principal

// Define o diretório público para servir os arquivos estáticos
app.use(express.static(path.join(__dirname)));

var app = express();
app.enable('trust proxy');
app.use(morgan('dev'));
app.set("json spaces", 2);
app.use(secure);
app.use(express.static("public"));

app.use('/', mainrouter); // Usa o roteador principal

app.listen(PORT, () => {
    console.log('Conectando...');
    console.log("Servidor rodando em http://localhost:" + PORT);
});

module.exports = app
