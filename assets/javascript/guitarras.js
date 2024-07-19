let imagemprincipalg = document.getElementById('imagemprincipalg');

let titulodesc1 = document.getElementById('p_title_desc_1');
let desc1 = document.getElementById('p_desc_1');
let titulodesc2 = document.getElementById('p_title_desc_2');
let desc2 = document.getElementById('p_desc_2');
let titulodesc3 = document.getElementById('p_title_desc_3');
let desc3 = document.getElementById('p_desc_3');
let cod = document.getElementById('p_cod');
let origem = document.getElementById('p_origem');
let serie = document.getElementById('p_serie');
let cor = document.getElementById('p_cor');
let escudo = document.getElementById('p_escudo');
let corpo = document.getElementById('p_corpo');
let braco = document.getElementById('p_braco');
let tensor = document.getElementById('p_tensor');
let tarraxas = document.getElementById('p_tarraxas');
let escala = document.getElementById('p_escala');
let comprimentoescala = document.getElementById('p_comprimentodaescala');
let raiodaescala = document.getElementById('p_raiodaescala');
let trastes = document.getElementById('p_trastes');
let pestana = document.getElementById('p_pestana');
let larguradapestana = document.getElementById('p_larguradapestana');
let marcacoesdeescala = document.getElementById('p_marcacoesdeescala');
let captadores = document.getElementById('p_captadores');
let chaveseletora = document.getElementById('p_chaveseletora');
let controles = document.getElementById('p_controles');
let ponte = document.getElementById('p_ponte');
let acabamento = document.getElementById('p_acabamento');
let encordoamento = document.getElementById('p_encordoamento');
let corpoguitarra01 = document.getElementById('corpoguitarra01') 
let corpoguitarra02 = document.getElementById('corpoguitarra02') 
let corpoguitarra03 = document.getElementById('corpoguitarra03') 
let corpoguitarra04 = document.getElementById('corpoguitarra04') 
let corpoguitarra05 = document.getElementById('corpoguitarra05') 
let corpoguitarra06 = document.getElementById('corpoguitarra06') 
let corpoguitarra07 = document.getElementById('corpoguitarra07') 
let corpoguitarra08 = document.getElementById('corpoguitarra08') 
let corpoguitarra09 = document.getElementById('corpoguitarra09') 

corpoguitarra01.style.transition = "300ms all "
corpoguitarra02.style.transition = "300ms all "
corpoguitarra03.style.transition = "300ms all "
corpoguitarra04.style.transition = "300ms all "
corpoguitarra05.style.transition = "300ms all "
corpoguitarra06.style.transition = "300ms all "
corpoguitarra07.style.transition = "300ms all "
corpoguitarra08.style.transition = "300ms all "
corpoguitarra09.style.transition = "300ms all "

function guitarra1() {
    
    corpoguitarra01.style.width = "80%"
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = ""

    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25986";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural";
    escudo.textContent = "Escudo: Tortoise";
    corpo.textContent = "Corpo: Cedro Brasileiro com tampo em Pau-Ferro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “3” no código GMW3_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores:  3S, Wilkinson com ímã cerâmico, 3 Single Coils";
    chaveseletora.textContent = "Chave seletora: Três chaves tipo “On-Off” de alta qualidade, uma para cada captador"
    controles.textContent = "Controles: Volume (1) e Tone (1)";
    ponte.textContent = "Ponte: Tremolo Wilkinson cromado, com dois pivôs";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra2() {
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = "80%"
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = ""
        
    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25990";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural";
    escudo.textContent = "Escudo: Tortoise";
    corpo.textContent = "Corpo: Cedro Brasileiro com tampo em Louro-Preto (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “4” no código GMW4_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: P90-P90, Wilkinson com imã cerâmico, 2 Single Coils P-90 na cor creme";
    chaveseletora.textContent = "Chave seletora: Três posições de alta qualidade, tipo “Toggle” tradicional"
    controles.textContent = "Controles: Volume (1) e Tone (1)";
    ponte.textContent = "Ponte: Wilkinson cromada fixa tipo Tune-O-Matic";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra3() {  
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = "80%"
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = ""
    
    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25991";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural";
    escudo.textContent = "Escudo: Tortoise";
    corpo.textContent = "Corpo: Cedro Brasileiro com tampo em Pau-Ferro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “4” no código GMW4_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: P90-P90, Wilkinson com imã cerâmico, 2 Single Coils P-90 na cor creme";
    chaveseletora.textContent = "Chave seletora: Três posições de alta qualidade, tipo “Toggle” tradicional"
    controles.textContent = "Controles: Volume (1) e Tone (1)";
    ponte.textContent = "Ponte: Wilkinson cromada fixa tipo Tune-O-Matic";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra4() {
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = "80%"
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = ""
        
    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25976";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural";
    escudo.textContent = "Escudo: Não tem";
    corpo.textContent = "Corpo: Cedro Brasileiro com tampo em Pau-Ferro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “2” no código GMW2_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: P-90, Wilkinson com ímã cerâmico";
    chaveseletora.textContent = "Chave seletora: Três posições tipo “Lever” tradicional, de alta qualidade"
    controles.textContent = "Controles: Volume (1) e Tone (1)";
    ponte.textContent = "Ponte: Wilkinson cromada fixa tele standard";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra5() {
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = "80%"
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = ""
        
    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25974";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural (disponível também nas versões Three Tone Sunburst ou Tobacco Burst)";
    escudo.textContent = "Escudo: Não tem";
    corpo.textContent = "Corpo: Cedro Brasileiro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “2” no código GMW2_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso, feita à mão";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: P90-P90, Wilkinson com imã cerâmico, 2 Single Coils P-90 na cor creme";
    chaveseletora.textContent = "Chave seletora: Três posições tipo “Lever” tradicional, de alta qualidade"
    controles.textContent = "Controles: Volume (1) e Tone (1)";
    ponte.textContent = "Ponte: Wilkinson cromada fixa, com 6 saddles";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra6() {
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = "80%"
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = ""
        
    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25983";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural";
    escudo.textContent = "Escudo: Não tem";
    corpo.textContent = "Corpo: Cedro Brasileiro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “2” no código GMW2_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: HH, Wilkinson com ímã cerâmico, 2 Humbuckers Zebra";
    chaveseletora.textContent = "Chave seletora: Três posições tipo “Lever” tradicional, de alta qualidade"
    controles.textContent = "Controles: Volume (1) e Tone (1)";
    ponte.textContent = "Ponte: Wilkinson cromada fixa tipo Tune-O-Matic";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra7() {
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = "80%"
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = ""
    
    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25971";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural";
    escudo.textContent = "Escudo: Preto";
    corpo.textContent = "Corpo: Cedro Brasileiro com tampo em Pau-Ferro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “2” no código GMW2_))";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: SS, Wilkinson, 2 Single Coils tradicionais, c /imã cerâmico (ponte) e Alnico (braço)";
    chaveseletora.textContent = "Chave seletora: Três posições tipo “Lever” tradicional, de alta qualidade"
    controles.textContent = "Controles: Volume (1) e Tone (1)";
    ponte.textContent = "Ponte: Wilkinson, cromada fixa standard";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra8() {
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = "80%"
    corpoguitarra09.style.width = ""

    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 25997";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Three Tone Sunburst (também disponível nas versões Natural ou Tobacco Burst)";
    escudo.textContent = "Escudo: Tortoise";
    corpo.textContent = "Corpo: Cedro Brasileiro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “8” no código GMW8_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: 3S, Wilkinson com ímã cerâmico, 3 Single Coils";
    chaveseletora.textContent = "Chave seletora: Cinco posições tipo “Lever” tradicional, de alta qualidade"
    controles.textContent = "Controles: Volume (1) e Tone (2)";
    ponte.textContent = "Ponte: Tremolo Wilkinson cromado, com dois pivôs";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

function guitarra9() {
    
    corpoguitarra01.style.width = ""
    corpoguitarra02.style.width = ""
    corpoguitarra03.style.width = ""
    corpoguitarra04.style.width = ""
    corpoguitarra05.style.width = ""
    corpoguitarra06.style.width = ""
    corpoguitarra07.style.width = ""
    corpoguitarra08.style.width = ""
    corpoguitarra09.style.width = "80%"
    
    //ESPECIFICAÇÕES
    titulodesc1.textContent = "Cedro Brasileiro";
    desc1.textContent = "Bastante utilizado em instrumentos maciços, por sua leveza e estabilidade. O som proporcionado pelo Cedro Brasileiro caracteriza-se pelo timbre mais grave e aveludado, ótima definição do brilho (por ser pouco resinoso), boa projeção e sustain. Madeira natural de florestas abertas e campos de clima quente/úmido, com larga distribuição na região Norte, principalmente nos estados do Acre, Amapá, Amazonas, Pará e Rondônia. Possui densidade baixa, textura de média a grossa, cor bege-rosado, e veios formando desenhos regulares suaves.";
    titulodesc2.textContent = "Pau-Ferro";
    desc2.textContent = "Usado em instrumentos acústicos e na elaboração de escalas e cavaletes. Produz peças com boa sonoridade, belo acabamento e excelente sustain, de timbre mais brilhante que o Jacarandá, mas que consegue reter o calor pelo qual esta última é celebrada. Sua cor varia entre o pardo-claro-amarelado ao pardo-acastanhado, com veios escuros formando desenhos irregulares característicos e exóticos. Conhecido pela rigidez, moderadamente leve e muito durável, o Pau-Ferro é encontrado em Goiás, Minas Gerais, Espírito Santo, São Paulo e Paraná.";
    titulodesc3.textContent = "Pau-Marfim";
    desc3.textContent = "Madeira pesada, dotada de ótima durabilidade, fácil de ser serrada e trabalhada, é ideal para braços de instrumentos musicais, por conta de sua superfície naturalmente lustrosa e lisa ao tato. Espécie de árvore longeva e de grande porte, frequente em florestas secundárias e capoeirões, é comum nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo, Minas Gerais e Espírito Santo. Possui alta densidade, boa resistência mecânica, e coloração que vai do branco-palha ao amarelo-pálido.";
    cod.textContent = "COD: 26001";
    origem.textContent = "Origem: Brasil";
    serie.textContent = "Serie: Masterwood Series";
    cor.textContent = "Cor: Natural (disponível também nas versões Three Tone Sunburst ou Tobacco Burst)";
    escudo.textContent = "Escudo: Preto";
    corpo.textContent = "Corpo: Cedro Brasileiro com tampo em Pau-Ferro (disponível também com tampo em Cedro Brasileiro (1), Louro-Preto (2), Pau-Ferro (3), Three Tone Sunburst (4), Tobacco Burst (5), cujo número de cada opção aparece após o “8” no código GMW8_)";
    braco.textContent = "Braço: Pau-Marfim (parafusado)";
    tensor.textContent = "Tensor: Dupla ação, tipo 'spoke wheel'";
    tarraxas.textContent = "Tarraxas: Blindadas cromadas";
    escala.textContent = "Escala: Pau-Ferro";
    comprimentoescala.textContent = "Comprimento da escala: 647,7 mm (25,5”)";
    raiodaescala.textContent = "Raio da escala: 241,3 mm (9,5”)";
    trastes.textContent = "Trastes: 22 em alpaca";
    pestana.textContent = "Pestana: Osso";
    larguradapestana.textContent = "Largura da pestana: 42,8 mm (1,68”)";
    marcacoesdeescala.textContent = "Marcações de escala: Madrepérola artificial (frontal), bolinhas brancas (lateral)";
    captadores.textContent = "Captadores: HSS, Wilkinson com ímã cerâmico, 1 Humbucker Zebra e 2 Single Coils";
    chaveseletora.textContent = "Chave seletora de captadores: Cinco posições tipo “Lever” tradicional, de alta qualidade"
    controles.textContent = "Controles: Volume (1) e Tone (2)";
    ponte.textContent = "Ponte: Tremolo Wilkinson cromado, com dois pivôs";
    acabamento.textContent = "Acabamento: Verniz fosco open pore";
    encordoamento.textContent = "Encordoamento: Giannini GEEGST10 (.010/.052)";
}

window.addEventListener("load", guitarra1)