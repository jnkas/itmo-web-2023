import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
    <div class='sidebar'><div>
    <div class='main'>
        <div class='header'></div>
        <div class='header'></div>
    </div>
`

function testFn () {
   // может не забраться сборщиком, если в ней ничего нет
   alert('s')

}

testFn ()



function testFn2 () {
    // может не забраться сборщиком, если в ней ничего нет
    prompt('Who are you?')
 
 }
 
 testFn2 ()

