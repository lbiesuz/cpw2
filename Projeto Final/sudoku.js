//INICIAR PARTIDA SEM NADA SELECIONADO
var numSelected = null;
var tileSelected = null;
var dif = null;
var board = [];
var solution = [];
//NUMERO DE ERROS
//FIM DE JOGO CONDICIONADO PELA DIFICULDADE E ERROS
var errors = 0;
//NUM FUTURO COLOCAR NUM ARQUIVO SEPARADO JOGOS E SOLUCOES
//JOGOS
//FACIL
var facil_1 = ["--8------","49-157--2","--3--419-","185-6--2-","----2--6-","96-4-53--","-3--72--4","-49-3--57","827--9-13"]
var facil_2 = ["-----1-9-","-2436----","61----4--","86-5937-4","2796-45-1","--3---9-8","7--91--4-","--2---6--","---8-637-"]
var facil_3 = ["----32-57","--51-----","281745-96","----7----","--8--976-","-4-5-1--8","5-3984-7-","6-4-57-31","--2-1---9"]
var facil_4 = ["65---79-3","--21--6--","9---63--4","129------","3-49-81--","---3--479","--6-8-3-5","74-5----1","5814---26"]
var facil_5 = ["4973--5--","1--9-8-37","5-3674---","-7-19-2-3","--124--6-","2-----79-","3-47---2-","76--39---","-19---3--"]
//MEDIO
var medio_1 = ["----8-7--","832-5----","7-539--1-","-135--82-","2---3--49","98-------","-7-------","4-9-6-185","--1------"]
var medio_2 = ["4---5-913","-1----68-","--------4","-7-296---","3-----7-6","25-7-3---","----741--","-3---5---","7--1295--"]
var medio_3 = ["62---135-","374-56---","-5--4---2","-1-7-4---","--613----","----9----","---------","--3--5678","791-8-2--"]
var medio_4 = ["-9-8---5-","1-53---62","---2-68--","---1-249-","47----1--","----64-8-","8----7--1","2-49-----","7---8-2--"]
var medio_5 = ["2-768----","-68---47-","---3-7-6-","4-65--3--","--2----5-","51--76-9-","----3-5-9","----5----","935468---"]
//DIFICIL
var dific_1 = ["5-376----","-26---7--","---1---8-","7---4---1","--4-----6","-1---6-73","9-------8","-----5---","---6-319-"]
var dific_2 = ["---------","--3--7--1","-8---6-2-","6--7-4-8-","--1--2-7-","--9----4-","--6--3--5","---94----","9---6---2"]
var dific_3 = ["---5-1-7-","--764----","-------49","1--7---8-","745-1----","----9-1--","3--9-----","42--85---","5-1-74--8"]
var dific_4 = ["-154-6-3-","-----8-45","--8---1-6","-4-9---7-","---37-56-","3---8---9","--4---6--","18-------","-6-53----"]
var dific_5 = ["----9-3--","-49---7--","-56------","---6-8---","----32---","-8-91-2-4","-9---41-2","--4---5-8","----6---9"]
//ESPECIALISTA
var espec_1 = ["5--67--8-","-9-------","--25--3--","--6------","--8--392-","----2-1-5","----5----","----9--47","-3---4--1"]
var espec_2 = ["-----5-7-","2-5---4--","---6--8--","--7----19","-1-------","-9---8--6","---196---","74--8----","3---7----"]
var espec_3 = ["-----8-46","-----4-3-","---972---","2-7---4--","9--8----2","--------7","--45-----","-8--9----","-6----51-"]
var espec_4 = ["---659---","4--3-----","3-78-----","21------7","-----13--","----9---8","--5------","--6--8-9-","-3----56-"]
var espec_5 = ["1----8---","-5--4----","-7-----82","---5--7-1","---1----3","---964---","6-9----1-","--4--59--","------6--"]
//MESTRE
var mestr_1 = ["5---78---","------4--","--8-9-1-7","--7----4-","2--1--7-6","----6--5-","-3-2-----","--5-1-8-9","-------6-"]
var mestr_2 = ["47-8--69-","----3-1--","--6------","56---19--","--8----6-","--25-----","95-4---7-","-----8--4","2--------"]
var mestr_3 = ["--8--4--2","-5---1---","7--25--3-","4-----6--","-6-53---8","----1----","--9----7-","-4-86---3","-----2---"]
var mestr_4 = ["-2---85--","-4--3----","5-3--9-7-","---8---4-","9-5-6-8--","2--------","-----7--1","-3-------","8-6-9-4--"]
var mestr_5 = ["8-42--15-","3----9---","--------8","-5--2----","-------6-","--15--74-","--8-----2","4---3-87-","---7----6"]
//SOLUCOES
//FACIL
var facil_1s = ["218396745","496157832","753284196","185763429","374928561","962415378","531672984","649831257","827549613"]
var facil_2s = ["358471296","924368157","617259483","861593724","279684531","543127968","736912845","482735619","195846372"]
var facil_3s = ["469832157","735196284","281745396","926378415","158429763","347561928","513984672","694257831","872613549"]
var facil_4s = ["658247913","432195687","917863254","129674538","374958162","865312479","296781345","743526891","581439726"]
var facil_5s = ["497312586","126958437","583674912","678195243","931247865","245863791","354781629","762439158","819526374"]
// //MEDIO
var medio_1s = ["196284753","832157496","745396218","613549827","257831649","984672531","378415962","429763185","561928374"]
var medio_2s = ["427658913","915432687","683917254","871296345","349581726","256743891","598374162","132865479","764129538"]
var medio_3s = ["629871354","374256819","158349762","912764583","586132497","437598126","865427931","243915678","791683245"]
var medio_4s = ["692871354","185349762","347256819","568132497","473598126","921764583","856427931","234915678","719683245"]
var medio_5s = ["257684931","368915472","149327865","476592318","892143756","513876294","624731589","781259643","935468127"]
// //DIFICIL
var dific_1s = ["583764219","126598734","497132685","762349851","354871926","819256473","931427568","678915342","245683197"]
var dific_2s = ["164529738","293487651","785316924","652794183","841632579","379158246","416273895","528941367","937865412"]
var dific_3s = ["984531672","257649831","613827549","196753284","745218396","832496157","378962415","429185763","561374928"]
var dific_4s = ["715496832","639218745","428753196","541962378","892374561","376185429","954827613","183649257","267531984"]
var dific_5s = ["871296345","349581726","256743891","427658913","915432687","683917254","598374162","764129538","132865749"]
// //ESPECIALISTA
var espec_1s = [""]
var espec_2s = [""]
var espec_3s = [""]
var espec_4s = [""]
var espec_5s = [""]
// //MESTRE
var mestr_1s = [""]
var mestr_2s = [""]
var mestr_3s = [""]
var mestr_4s = [""]
var mestr_5s = [""]
//EVENTO CARREGAMENTO
window.onload = function() {
    dificuldade();
}
    function clean_dificuldade(){
        document.getElementById("tagErros").style.display = 'block';
        document.getElementById("errors").style.display = 'block';
        document.getElementById("dificuldade").style.display = 'none';
    }
    function dificuldade(){
        
        let pergunta = document.createElement("h2");
        pergunta.innerText = "Escolha um nível de dificuldade:"
        document.getElementById("dificuldade").appendChild(pergunta);
        let facil = document.createElement("div");
        facil.innerText = "Fácil";
        facil.classList.add("dificuldade");
        document.getElementById("dificuldade").appendChild(facil);
        facil.addEventListener("click", sorteiafacil);
        let medio = document.createElement("div");
        medio.innerText = "Médio";
        medio.classList.add("dificuldade");
        document.getElementById("dificuldade").appendChild(medio);
        medio.addEventListener("click", sorteiamedio);
        let dificil = document.createElement("div");
        dificil.innerText = "Difícil";
        dificil.classList.add("dificuldade");
        document.getElementById("dificuldade").appendChild(dificil);
        dificil.addEventListener("click", sorteiadificil);
        // let especialista = document.createElement("div");
        // especialista.innerText = "Especialista";
        // especialista.classList.add("dificuldade");
        // document.getElementById("dificuldade").appendChild(especialista);
        // especialista.addEventListener("click", sorteiaespecialista);
        // let mestre = document.createElement("div");
        // mestre.innerText = "Mestre";
        // mestre.classList.add("dificuldade");
        // document.getElementById("dificuldade").appendChild(mestre);
        // mestre.addEventListener("click", sorteiamestre);
}
function sorteiafacil(){
    if (dif != null) {
        dif.classList.remove("dificuldade-selecionada");
    }
    dif = this;
    dif.classList.add("dificuldade-selecionada");
    var escolha = Math.floor((Math.random() * 4)+1);
    switch(escolha){
        case 1:{
            board = facil_1;
            solution = facil_1s;
            clean_dificuldade();
            setGame();
            break;
        }
        case 2:{
            board = facil_2;
            solution = facil_2s;
            clean_dificuldade();
            setGame();
            break;
        }
        case 3:{
            board = facil_3;
            solution = facil_3s;
            clean_dificuldade();
            setGame();
            break;
        }
        case 4:{
            board = facil_4;
            solution = facil_4s;
            clean_dificuldade();
            setGame();
            break;
        }
        case 5:{
            board = facil_5;
            solution = facil_5s;
            clean_dificuldade();
            setGame();
            break;
        }
        default:{
            board = facil_1;
            solution = facil_1s;
            clean_dificuldade();
            setGame();
            break;
        }
        }
    }
    function sorteiamedio(){
        if (dif != null) {
            dif.classList.remove("dificuldade-selecionada");
        }
        dif = this;
        dif.classList.add("dificuldade-selecionada");
        var escolha = Math.floor((Math.random() * 4)+1);
        switch(escolha){
            case 1:{
                board = medio_1;
                solution = medio_1s;
                clean_dificuldade();
                setGame();
                break;
            }
            case 2:{
                board = medio_2;
                solution = medio_2s;
                clean_dificuldade();
                setGame();
                break;
            }
            case 3:{
                board = medio_3;
                solution = medio_3s;
                clean_dificuldade();
                setGame();
                break;
            }
            case 4:{
                board = medio_4;
                solution = medio_4s;
                clean_dificuldade();
                setGame();
                break;
            }
            case 5:{
                board = medio_5;
                solution = medio_5s;
                clean_dificuldade();
                setGame();
                break;
            }
            default:{
                board = medio_1;
                solution = medio_1s;
                clean_dificuldade();
                setGame();
                break;
            }
            }
        }
        function sorteiadificil(){
            if (dif != null) {
                dif.classList.remove("dificuldade-selecionada");
            }
            dif = this;
            dif.classList.add("dificuldade-selecionada");
            var escolha = Math.floor((Math.random() * 4)+1);
            switch(escolha){
                case 1:{
                    board = dific_1;
                    clean_dificuldade();
                    setGame();
                    break;
                }
                case 2:{
                    board = dific_2;
                    clean_dificuldade();
                    setGame();
                    break;
                }
                case 3:{
                    board = dific_3;
                    clean_dificuldade();
                    setGame();
                    break;
                }
                case 4:{
                    board = dific_4;
                    clean_dificuldade();
                    setGame();
                    break;
                }
                case 5:{
                    board = dific_5;
                    clean_dificuldade();
                    setGame();
                    break;
                }
                default:{
                    board = dific_1;
                    clean_dificuldade();
                    setGame();
                    break;
                }
                }
            }
            // function sorteiaespecialista(){
            //     if (dif != null) {
            //         dif.classList.remove("dificuldade-selecionada");
            //     }
            //     dif = this;
            //     dif.classList.add("dificuldade-selecionada");
            //     var escolha = Math.floor((Math.random() * 4)+1);
            //     switch(escolha){
            //         case 1:{
            //             board = espec_1;
            //             clean_dificuldade();
            //             setGame();
            //             break;
            //         }
            //         case 2:{
            //             board = espec_2;
            //             clean_dificuldade();
            //             setGame();
            //             break;
            //         }
            //         case 3:{
            //             board = espec_3;
            //             clean_dificuldade();
            //             setGame();
            //             break;
            //         }
            //         case 4:{
            //             board = espec_4;
            //             clean_dificuldade();
            //             setGame();
            //             break;
            //         }
            //         case 5:{
            //             board = espec_5;
            //             clean_dificuldade();
            //             setGame();
            //             break;
            //         }
            //         default:{
            //             board = espec_1;
            //             clean_dificuldade();
            //             setGame();
            //             break;
            //         }
            //         }
            //     }
            //     function sorteiamestre(){
            //         if (dif != null) {
            //             dif.classList.remove("dificuldade-selecionada");
            //         }
            //         dif = this;
            //         dif.classList.add("dificuldade-selecionada");
            //         var escolha = Math.floor((Math.random() * 4)+1);
            //         switch(escolha){
            //             case 1:{
            //                 board = mestr_1;
            //                 clean_dificuldade();
            //                 setGame();
            //                 break;
            //             }
            //             case 2:{
            //                 board = mestr_2;
            //                 clean_dificuldade();
            //                 setGame();
            //                 break;
            //             }
            //             case 3:{
            //                 board = mestr_3;
            //                 clean_dificuldade();
            //                 setGame();
            //                 break;
            //             }
            //             case 4:{
            //                 board = mestr_4;
            //                 clean_dificuldade();
            //                 setGame();
            //                 break;
            //             }
            //             case 5:{
            //                 board = mestr_5
            //                 clean_dificuldade();
            //                 setGame();
            //                 break;
            //             }
            //             default:{
            //                 board = mestr_1;
            //                 clean_dificuldade();
            //                 setGame();
            //                 break;
            //             }
            //             }
            //         }
//FUNCAO QUE CRIA TABULEIRO E DIGITOS PARA INTERAGIR
function setGame() {
    // Digits 1-9
    //NUMA PROXIMA VERSAO CRIAR ZERO OU EQUIVALENTE PARA REMOVER REGISTROS DE USUARIO
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}