(() =>{
     
    let ecraCalculo = document.querySelector('#ecra-de-calculo')
    const btnZero = document.querySelector('#zero')
    const btn1 = document.querySelector('#n-1')
    const btn2 = document.querySelector('#n-2')
    const btn3 = document.querySelector('#n-3')
    const btn4 = document.querySelector('#n-4')
    const btn5 = document.querySelector('#n-5')
    const btn6 = document.querySelector('#n-6')
    const btn7 = document.querySelector('#n-7')
    const btn8 = document.querySelector('#n-8')
    const btn9 = document.querySelector('#n-9')
    const btnVirgula = document.querySelector('#virgula')
    const btnAdicionar = document.querySelector('#adicao')
    const btnSubtrair = document.querySelector('#subtrair')
    const btnividir = document.querySelector('#dividir')
    const btnMultipic = document.querySelector('#multiplicar')
    const apagarTela = document.querySelector('#clear')
    const btnDel = document.querySelector('#del')
    const btnResultado = document.querySelector('#igual')

    
    const adicionar =(num) => {
        ecraCalculo.textContent += num
    }

    const apagaTela = (ms) =>{
        ecraCalculo.textContent = ms
    }

    const deleteOne = ()=>{
        ecraCalculo.textContent.length -1
    }
    
    const soma = (n1, n2) =>{
        return n1 + n2
    }
    

    const subtrair =(n1, n2) => {
        return n1 - n2
    }

    const multiplicar = (n1, n2) =>{
        return n1 * n2
    }
    
    const dividir = (n1, n2) => {
        return n1 / n2
    }


    const confiramar = ()=>{
    if(ecraCalculo.textContent != ''){
    ecraCalculo.textContent = eval(ecraCalculo.textContent)
        }else{
            ecraCalculo.textContent = 'Erro, haaa...Não!'
        }

        }


    btnZero.addEventListener('click', (e)=>{
        adicionar('0')
    });

    btn1.addEventListener('click', (e)=>{
        adicionar('1')
    });
    btn2.addEventListener('click', (e)=>{
        adicionar('2')  } );
    btn3.addEventListener('click', (e)=>{
        adicionar('3')});
    btn4.addEventListener('click', (e)=>{
        adicionar('4')});
    btn5.addEventListener('click',(e) =>{
        adicionar('5')});
    btn6.addEventListener('click',(e) =>{
        adicionar('6')});
    btn7.addEventListener('click',(e)=> {
        adicionar('7') });
    btn8.addEventListener('click', ()=>{
        adicionar('8')});
    btn9.addEventListener('click',(e) =>{
        adicionar('9')});

    btnVirgula.addEventListener('click',(e) =>{
            adicionar('.')});

     btnAdicionar.addEventListener('click',(e) =>{
                adicionar('+')});
     btnSubtrair.addEventListener('click',(e) =>{
                    adicionar('-')});
     btnividir.addEventListener('click',(e) =>{
                        adicionar('/')});

    btnMultipic.addEventListener('click',(e) =>{
                            adicionar('*')});

    apagarTela.addEventListener('click',(e) =>{
                                apagaTela('')});

    btnResultado.addEventListener('click', (e)=>{
        confiramar()
    })

    
 })();