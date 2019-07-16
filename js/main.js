function require(src){
    let script = document.createElement('script')
    script.src = src + '.js'
    script.setAttribute('defer', '')
    document.head.appendChild(script)
}
require('js/helpers')
require('js/vector')
require('js/planet')
require('js/simulation')

function start(){
    console.log('Start simulation')

    

}

window.onload = start
