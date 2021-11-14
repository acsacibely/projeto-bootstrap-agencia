//PARTE DOS CÍRCULOS

//const progressbarMin = require("./progressbar.min");

//basicamente, essa função só vai carregar e aparecer no arquivo, quando o arquivo carregar totalmente
$(document).ready(function(){
    //Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: "#AAA"
        },
        to: {
            color: '#65DAF9'
        },

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 60);
            circle.setText(value);
        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: {
            color: "#AAA"
        },
        to: {
            color: '#65DAF9'
        },

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 254);
            circle.setText(value);
        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: {
            color: "#AAA"
        },
        to: {
            color: '#65DAF9'
        },

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 32);
            circle.setText(value);
        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: {
            color: "#AAA"
        },
        to: {
            color: '#65DAF9'
        },

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 5432);
            circle.setText(value);
        }

    });

    //INICIANDO O LOADER QUANDO O USUÁRIO CHEGA NO ELEMENTO

    let dataAreaOffset = $('#data-area').offset();

    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    //parallax 
    setTimeout(function(){
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})

        //$('#apply-area').parallax({imageSrc: 'img/pattern.png'})
    }, 250);


    //Filtro portfólio

    /*$('.filter-btn').containerA('click', function(){

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');
    })
    */

    //filtro do portfolio
    var bts = document.getElementsByClassName("filter-btn");
    for(bt of bts){
        adEvent(bt.id);
    }
    function adEvent(bt){
        let botao = document.getElementById(bt);
        botao.addEventListener("click", () => {
            //altera botão ativo
            for(elemento of bts){
                elemento.className = "main-btn filter-btn";
            }
            botao.className = "main-btn filter-btn active";
            //filtragem
            let todosElem = document.getElementsByClassName("project-box");
            let tipo = bt.substr(0, 3);
            for(imgs of todosElem){
                if(tipo == "all"){
                    imgs.removeAttribute("hidden");
                }else{
                    imgs.removeAttribute("hidden");
                    if(imgs.className != ("col-md-4 project-box "+tipo)){
                        let att = document.createAttribute("hidden");
                        imgs.setAttributeNode(att);
                    }
                }
            }
        });
    }
    
}); 