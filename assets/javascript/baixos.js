//IMAGEM PRINCIPAL
let imagemprincipalb = document.getElementById('imagemprincipalb');

//GALERIA
let imgbaixo1 = document.getElementById('imgBaixo1');
let imgbaixo2 = document.getElementById('imgBaixo2');
let imgbaixo3 = document.getElementById('imgBaixo3');
let imgbaixo4 = document.getElementById('imgBaixo4');
let imgbaixo5 = document.getElementById('imgBaixo5');

// ESPECIFICAÇÕES
let titulodesc12 = document.getElementById('p_title_desc_1_2');
let desc12 = document.getElementById('p_desc_1_2');
let titulodesc22 = document.getElementById('p_title_desc_2_2');
let desc22 = document.getElementById('p_desc_2_2');
let titulodesc32 = document.getElementById('p_title_desc_3_2');
let desc32 = document.getElementById('p_desc_3_2');
let cod2 = document.getElementById('p_cod_2');
let origem2 = document.getElementById('p_origem_2');
let serie2 = document.getElementById('p_serie_2');
let cor2 = document.getElementById('p_cor_2');
let escudo2 = document.getElementById('p_escudo_2');
let corpo2 = document.getElementById('p_corpo_2');
let braco2 = document.getElementById('p_braco_2');
let tensor2 = document.getElementById('p_tensor_2');
let tarraxas2 = document.getElementById('p_tarraxas_2');
let escala2 = document.getElementById('p_escala_2');
let comprimentoescala2 = document.getElementById('p_comprimentodaescala_2');
let raiodaescala2 = document.getElementById('p_raiodaescala_2');
let trastes2 = document.getElementById('p_trastes_2');
let pestana2 = document.getElementById('p_pestana_2');
let larguradapestana2 = document.getElementById('p_larguradapestana_2');
let marcacoesdeescala2 = document.getElementById('p_marcacoesdeescala_2');
let captadores2 = document.getElementById('p_captadores_2');
let controles2 = document.getElementById('p_controles_2');
let ponte2 = document.getElementById('p_ponte_2');
let acabamento2 = document.getElementById('p_acabamento_2');
let encordoamento2 = document.getElementById('p_encordoamento_2');
let corpobaixo01 = document.getElementById('corpobaixo01');
let corpobaixo02 = document.getElementById('corpobaixo02');
let corpobaixo03 = document.getElementById('corpobaixo03');

corpobaixo01.style.transition = "300ms all";
corpobaixo02.style.transition = "300ms all";
corpobaixo03.style.transition = "300ms all";

function baixo1() {

    imagemprincipalb.src = 'assets/images/Masterwood/Sonic ST Bass GMW83B-4/Sonic ST Bass GMW83B-4 01.jpg';

    corpobaixo01.style.width = "60%";
    corpobaixo02.style.width = "";
    corpobaixo03.style.width = "";

    //GALERIA
    imgbaixo1.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW83B-4/Sonic ST Bass GMW83B-4 01.jpg');
    imgbaixo2.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW83B-4/Sonic ST Bass GMW83B-4 02.jpg');
    imgbaixo3.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW83B-4/Sonic ST Bass GMW83B-4 03.jpg');
    imgbaixo4.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW83B-4/Sonic ST Bass GMW83B-4 04.jpg');
    imgbaixo5.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW83B-4/Sonic ST Bass GMW83B-4 05.jpg');

    //ESPECIFICAÇÕES
    titulodesc12.textContent = "Cedro Brasileiro";
    desc12.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc22.textContent = "Pau-Ferro";
    desc22.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc32.textContent = "Pau-Marfim";
    desc32.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod2.textContent = "COD: 26010";
    origem2.textContent = "Origem: Brasil";
    serie2.textContent = "Serie: Masterwood Series";
    cor2.textContent = "Cor: Natural (disponível também nas versões Three Tone Sunburst ou Tobacco Burst)";
    escudo2.textContent = "Escudo: Preto";
    corpo2.textContent = "Corpo: Cedro Brasileiro com tampo em Pau-Ferro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “8” no código GMW8_)";
    braco2.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor2.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas2.textContent = "Tarraxas: Blindadas cromadas";
    escala2.textContent = "Escala: Pau-Ferro";
    comprimentoescala2.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala2.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes2.textContent = "Trastes: 22 em alpaca";
    pestana2.textContent = "Pestana: Osso";
    larguradapestana2.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala2.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores2.textContent = "Captadores: HSS, Wilkinson com ímã cerâmico, 1 Humbucker Zebra e 2 Single Coils";
    controles2.textContent = "Controles: Volume (1) e Tone (2)";
    ponte2.textContent = "Ponte: Tremolo Wilkinson cromado, com dois pivôs";
    acabamento2.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento2.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function baixo2(){

    imagemprincipalb.src = 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 01.jpg';

    corpobaixo01.style.width = "";
    corpobaixo02.style.width = "60%";
    corpobaixo03.style.width = "";

    //GALERIA
    imgbaixo1.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 01.jpg');
    imgbaixo2.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 02.jpg');
    imgbaixo3.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 03.jpg');
    imgbaixo4.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 04.jpg');
    imgbaixo5.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 05.jpg');

    //ESPECIFICAÇÕES
    titulodesc12.textContent = "Cedro Brasileiro";
    desc12.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc22.textContent = "Pau-Ferro";
    desc22.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc32.textContent = "Pau-Marfim";
    desc32.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod2.textContent = "COD: 26006";
    origem2.textContent = "Origem: Brasil";
    serie2.textContent = "Serie: Masterwood Series";
    cor2.textContent = "Cor: Natural (disponível também nas versões Three Tone Sunburst ou Tobacco Burst)";
    escudo2.textContent = "Escudo: Preto";
    corpo2.textContent = "Corpo: Cedro Brasileiro com tampo em Louro-Preto (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “8” no código GMW8_)";
    braco2.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor2.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas2.textContent = "Tarraxas: Cromadas tipo open gear";
    escala2.textContent = "Escala: Pau-Ferro";
    comprimentoescala2.textContent = "Comprimento da escala: 863,6 mm (34”)";
    raiodaescala2.textContent = "Raio da escala: 304,8 mm (12”)";
    trastes2.textContent = "Trastes: 20 em alpaca";
    pestana2.textContent = "Pestana: Osso";
    larguradapestana2.textContent = "Largura da pestana: 47 mm (1,85”)";
    marcacoesdeescala2.textContent = "Marcação: Madrepérola (escala), bolinhas brancas (lateral)";
    captadores2.textContent = "Captadores: JJ, Wilkinson com ímã cerâmico, 2 tipo “J” para 5 cordas, passivos";
    controles2.textContent = "Controles: Volume, Balance, Bass e Treble (Active EQ, 9V)";
    ponte2.textContent = "Ponte: Wilkinson cromada tradicional para 5 cordas";
    acabamento2.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento2.textContent = "Encordoamento: Giannini Nickel Round Wound GEEBRS5 (.045/.130)";
}

function baixo3(){

    imagemprincipalb.src = 'assets/images/Masterwood/Sonic ST Bass GMW81B-4/Sonic ST Bass GMW81B-4 02.png';

    corpobaixo01.style.width = "";
    corpobaixo02.style.width = "";
    corpobaixo03.style.width = "60%";

    //GALERIA
    imgbaixo1.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW81B-4/Sonic ST Bass GMW81B-4 01.jpg');
    imgbaixo2.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW81B-4/Sonic ST Bass GMW81B-4 02.png');
    imgbaixo3.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 03.jpg');
    imgbaixo4.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 04.jpg');
    imgbaixo5.setAttribute('src', 'assets/images/Masterwood/Sonic ST Bass GMW82B-5/Sonic ST Bass GMW82B-5 05.jpg');

    //ESPECIFICAÇÕES
    titulodesc12.textContent = "Cedro Brasileiro";
    desc12.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc22.textContent = "Pau-Ferro";
    desc22.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc32.textContent = "Pau-Marfim";
    desc32.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod2.textContent = "COD: 26006";
    origem2.textContent = "Origem: Brasil";
    serie2.textContent = "Serie: Masterwood Series";
    cor2.textContent = "Cor: Natural";
    escudo2.textContent = "Escudo: Preto";
    corpo2.textContent = "Corpo: Cedro Brasileiro";
    braco2.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor2.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas2.textContent = "Tarraxas: Cromadas tipo open gear";
    escala2.textContent = "Escala: Pau-Ferro";
    comprimentoescala2.textContent = "Comprimento da escala: 863,6 mm (34”)";
    raiodaescala2.textContent = "Raio da escala: 304,8 mm (12”)";
    trastes2.textContent = "Trastes: 20 em alpaca";
    pestana2.textContent = "Pestana: Osso, feita à mão";
    larguradapestana2.textContent = "Largura da pestana: 41,5 mm (1,63”)";
    marcacoesdeescala2.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores2.textContent = "Captadores: JJ, Wilkinson com ímã cerâmico, 2 tipo “J”, passivos";
    controles2.textContent = "Controles: Volume (2) e Tone (1)";
    ponte2.textContent = "Ponte: Wilkinson cromada tradicional para 4 cordas";
    acabamento2.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento2.textContent = "Encordoamento: Giannini Nickel Round Wound GEEBRS5 (.045/.130)";
}