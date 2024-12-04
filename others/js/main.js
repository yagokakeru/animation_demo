document.addEventListener('DOMContentLoaded', () => {
    const splitTextList = [
        ...document.querySelectorAll('.section_title'),
        ...document.querySelectorAll('.section_title_jp'),
    ]
    // const sectionTitleDOM = document.querySelector('.section_title');

    splitTextList.forEach(splitText => {
        textSpan(splitText)
        // gsap.set(splitText.querySelectorAll('span'), {x: 100})
        gsap.fromTo(splitText.querySelectorAll('span'), 
        { autoAlpha: 0, x: 70 },
        { autoAlpha: 1, x: 0, duration: 1.5, stagger: 0.05, ease: 'power3.out' });
    });
    // textSpan(sectionTitleDOM);
    
    
    function textSpan(textTarget) {
        const string = textTarget.textContent;
        let textHTML = '';
    
        if(string !== null){
            string.split('').forEach(text =>{
                textHTML += `<span style="display: inline-block">${text}</span>`;
            });
            textTarget.innerHTML = textHTML;
        }else{
            //
        }
    }

    var stroke;
    stroke = new Vivus('mask_anim', {//アニメーションをするIDの指定
        start:'manual',//自動再生をせずスタートをマニュアルに
        type: 'scenario-sync',// アニメーションのタイプを設定
        duration: 100,//アニメーションの時間設定。数字が小さくなるほど速い
        forceRender: false,//パスが更新された場合に再レンダリングさせない
        animTimingFunction:Vivus.EASE,//動きの加速減速設定
    });
    stroke.play();
});
