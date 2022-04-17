/**Crio esta função anónima pra proteger o meu escopo global */
(()=>{

    /**Nesta primeira parte faço selecão dos elementos html */
    const watch = document.querySelector('#relogio');
    const startWatch = document.querySelector('#start');
    const stopWatch = document.querySelector('#stop');
    const restartWatch = document.querySelector('#restart');
    let seconds = 0;
    let time;

    /**Começando com função para acertar relógio */
    const setMyWatch = () => {
    const date = new Date(seconds *1000);
    return date.toLocaleTimeString('pt-mz', {
        hour12: false,
        timeZone: 'GMT'
    
    });
};

/**Uma função para iniciar o meu relógio */

const startMyWatch = () => {
   time = setInterval( () => {
       seconds ++;
       watch.textContent = setMyWatch()
   }, 1000);
};

/**Já começo a adicionar eventos ao meu documento para o meu relógio funcionar */
   startWatch.addEventListener('click', (e) =>{
       clearInterval(time);
       startMyWatch();
   });

   stopWatch.addEventListener('click', (e)=>{
       clearInterval(time);
   })

   restartWatch.addEventListener('click', (e) =>{
       clearInterval(time);
       watch.textContent = "00:00:00";
       seconds = 0;
   });
})();