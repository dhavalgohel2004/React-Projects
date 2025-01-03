function customeRendor(reactElement, cotainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children 
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    cotainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me!'
}

const cotainer = document.querySelector('#root')

customeRendor(reactElement, cotainer)

