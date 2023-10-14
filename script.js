let list = ["HTML" , "CSS" , "JavaScript" , "PHP"];
    let i = 0;
    let intervals = "";
    text_animation();
    setintervals();

    // This below javascript line is give height to slider_box class. It won't get its inner element height (slider class), because it set to position absolute.
    slider_box.style.height = slider.clientHeight + "px";

    // Functionality to hide custom placeholder when input field is focused or it has value inside it.
    input.onfocus = function(){
        placeholder.style.display = "none";
        clearInterval(intervals);
    }
    input.onblur = function(){
        if(input.value == ""){
            placeholder.style.display = "flex";
            i = 0;
            text_animation();
            setintervals();
        }
    }

    // Functionality to animate the text;

    function setintervals(){
         intervals = setInterval(() => {
            text_animation();
            console.log("started");
        }, 2500);
    }

    function text_animation(){
        i++;
        slider.innerHTML = list[i - 1];
        slider.style.opacity = "1";
        slider.style.left = "0px";
        setTimeout(() => {
            slider.style.opacity = "0";
        slider.style.left = "-5px";
        }, 2000);
        if(list.length == i){
            i = 0;
        }
    }