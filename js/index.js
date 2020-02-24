let viewer = document.getElementById('modelviewer');
let loading = document.getElementById('loading');
let errored = document.getElementById('errored');

var isLoaded = false;

function loadVRM() {

  loading.style.visibility = "visible";

  // renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( window.devicePixelRatio );
  viewer.appendChild( renderer.domElement );

  // camera
  const camera = new THREE.PerspectiveCamera( 30.0, window.innerWidth / window.innerHeight, 0.1, 20.0 );
  camera.position.set( 0.0, 1.0, 5.0 );

  // camera controls
  const controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.enablePan = false;
  controls.target.set( 0.0, 1.0, 0.0 );
  // limit of orbit vertically
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI * 0.65;
  controls.update();

  // scene
  const scene = new THREE.Scene();

  // light
  const light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 1.0, 1.0, 1.0 ).normalize();
  scene.add( light );

  // gltf and vrm
  const loader = new THREE.GLTFLoader();
  loader.crossOrigin = 'anonymous';
  loader.load(

    // URL of the VRM you want to load
    'http://drive.google.com/uc?export=view&id=18YWLwbV_2U4Amh2EDlYA8aOrql1bpt14',

    // called when the resource is loaded
    ( gltf ) => {
      // generate VRM instance from gltf
      THREE.VRM.from( gltf ).then( ( vrm ) => {

        console.log( vrm );
        scene.add( vrm.scene );

        vrm.humanoid.getBoneNode( THREE.VRMSchema.HumanoidBoneName.Hips ).rotation.y = Math.PI;

        loading.style.visibility = "hidden";
        isLoaded = true;

      } );

    },

    // called while loading is progressing
    ( progress ) => console.log( 'Loading model...', 100.0 * ( progress.loaded / progress.total ), '%' ),

    // called when loading has errors
    ( error ) => {
      console.error( error );
      loading.style.visibility = "hidden";
      errored.style.visibility = "visible";
    }

  );

  // helpers
  const gridHelper = new THREE.GridHelper( 10, 10 );
  scene.add( gridHelper );

  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }

  animate();
}

function showViewer() {
  if (!isLoaded) {
    loadVRM();
  }
  viewer.style.visibility = "visible";
}

function closeViewer() {
  viewer.style.visibility = "hidden";
  loading.style.visibility = "hidden";
  errored.style.visibility = "hidden";
}
