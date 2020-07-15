function onShareClick(){
    // const share_btn = document.getElementById('share');
    let tooltip = document.getElementById('tooltip');
    console.log(tooltip.style.display);
    if(tooltip.style.visibility === 'hidden'){   
        tooltip.style.visibility = 'visible';
    }
    else {
        tooltip.style.visibility = 'hidden';
        tooltip.style.animation = 'none';
    }
}