function require(src) {
    let script = document.createElement('script');
    script.src = src + '.js';
    script.setAttribute('defer', '');
    document.head.appendChild(script);
}

require('js/constants');
require('js/helpers');
require('js/vector');
require('js/element');
require('js/periodic-table');
require('js/composition');
require('js/planet');
require('js/simulation');

let camera, controls, scene, renderer, PERIODIC_TABLE_ELEMENTS;

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function start() {
    console.log('Start simulation');

    PERIODIC_TABLE_ELEMENTS = (new PeriodicTable()).atoms;

    const width = window.innerWidth;
    const height = window.innerHeight;
    // Camera
    camera = new THREE.PerspectiveCamera(70, width / height, 0.1, PLANETS_POSITION_RANGE ** 3);
    camera.position.z = 5;
    // Renderer
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(BACKGROUND_COLOR);
    // Camera Helper
    // const helper = new THREE.CameraHelper(camera);
    // scene.add(helper);
    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    // Listeners
    window.addEventListener('resize', onWindowResize, false);
    Object.assign(window, {scene});
    const simulation = new Simulation();

    simulation.planets.forEach((planet, i) => {
        planet.sphere.name = `planet-${i}`;
        scene.add(planet.sphere);
    });

    document.body.appendChild(renderer.domElement);

    function removeEntity(object) {
        const selectedObject = scene.getObjectByName(object.name);
        if (selectedObject && selectedObject.parent) {
            selectedObject.parent.remove(selectedObject);
        }
    }

    setInterval(() => {
        simulation.update(FIXED_DT, removeEntity);
        controls.update();
        simulation.planets.forEach((planet) => {
            planet.sphere.position.x = planet.position.x;
            planet.sphere.position.y = planet.position.y;
            planet.sphere.position.z = planet.position.z;
            const radius = planet.initialRadius / planet.radius;
            planet.sphere.scale.x = radius;
            planet.sphere.scale.y = radius;
            planet.sphere.scale.z = radius;
            planet.sphere.material.color.set(planet.color());
            planet.sphere.colorsNeedUpdate = true;
        });
        renderer.render(scene, camera);
    }, FIXED_DT * 1000);

    setInterval(() => {
        console.table({
            'Planet Number': simulation.planets.length,
            'Max Element': PERIODIC_TABLE_ELEMENTS[MAX_ELEMENT].name
        });
    }, LOG_AT * 1000);
}

window.onload = start;
