type heroi = {
    name: string;
    vulgo:string;
};

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
};

printaObjeto({
    name: "guilherme",
    vulgo: "moreira",

})
console.log("Olá mundo");

//sempre colocar para rodar com "npx tsc + o caminho (src/components/index.ts)" para criar um arquivo js
//Para executar o arquino no powershell "node + o caminho criado em js (src/components/index.js")
// crie um arquivo de config do typescript com "npx tsc --init" para não precisar ficar compilando toda hora
// dentro de package.json crie a função start e direcione para a pasta e arquivo build/index.js que foi criada na configuração, para executar pasta chamar o comando "npm run start"

//VARIÁVEIS

//**Tipos primitivos: boolean(recebe o valor verdadeiro ou falso),  number, string**

let ligado:boolean = false;
let nome: string = "Guilherme";
let idade: number = 30;
let altura: number = 1.9;

//**tipos especiais: null e undefined**

//null

let nulo: null = null; //define que o valor será nulo, desta forma não terá como alterar!
 
//undefined

let indefinido: undefined = undefined; //define que o valor será indefinido, desta forma não terá como alterar!

//**tipos abrangentes:any e void**/

//any: poderá voltar qualquer coisa
let retornoView: any = false;
let retornoViews: any = 30;


//void: retorna sempre vazio
function executaQuery(): void {}
let retorno: void  


//objeto: deverá receber um objeto criado com chaves (objeto sem previsibilidade)
let produto:object = {
    name:"Guilherme",
    cidade:"Uberlândia",
    idade:27,
};
//objeto tipado com previsibilidade
type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;

};

let meuProduto: produtoLoja = {
    nome: "tenis",
    preco: 50,
    unidades: 10,

};

//arrays

let dados: string[] = ["guilherme", "ana", "gabi"];

let dados2: Array<string> = ["guilherme", "ana", "gabi"];

let infos: (string | number) [] = ["guilherme", 27]; //typescript permite criar vetores com 2 tipos podendo ser eles do tipo numero ou string mas n aceita booleano. É preferencial criar um objeto tipado!

//tuplas - na tupla você deve respeitar a ordem citada 

let boleto: [string, number, number] = ["agua", 50, 25487541215457854545];

//datas

let aniversario: Date = new Date( "06-04-1997 2:00");
console.log(aniversario.toString());

//funções

function addNumber(X:number, Y:number): number{
    return X + Y;

};

function addToHello(name: string):string{
    return `Hello ${name}`;
};


let soma: number = addNumber(5,7);
console.log(soma);

console.log(addToHello ("Guilherme"));

//funções multi tipos

function CallToPhone (phone:number|string): string|number {
    return phone;
}

console.log(CallToPhone("Contato: 34 9 84429193"));

//funções async

async function getDatabase (id: number): Promise <number|string>{
    return "Guilherme";
}

//interfaces (type x interface)


type robot = {
    id: number;
    name: string;
};

interface robot2 {
    id: number;
    name: string;
};

const bot: robot2 = {
    id: 1,
    name: "Guilherme"
};

// clases
class character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    };

    attack(): void{
        console.log(`attack with ${this.stregth}points`);
    };
};

console.log(character)

let dado: string = "naruto";
console.log(dado);

//decorators
//class decorator
function apiVersion(version: string) {
    return (target: any) => {
      Object.assign(target.prototype, { __version: version, __name: "felipe" });
    };
  }
  
  //attribute decorator
  function minLength(length: number) {
    return (target: any, key: string) => {
      let _value = target[key];
  
      const getter = () => "[play]" + _value;
      const setter = (value: string) => {
        if (value.length < length) {
          throw new Error(`Tamanho menor do que ${length}`);
        } else {
          _value = value;
        }
      };
  
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
      });
    };
  }
  
  class Api {
    @minLength(10)
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const api = new Api("usaadasdaaaaa");
  console.log(api.name);


