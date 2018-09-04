var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(0,-1), INTERSECTED;
var obj, objs = [], currentIndex = 1 //获取得到第几个
var radius = 100, theta = 0;

if (typeof(sum) == 'undefined') {
  sum = 4  //总共图片数量
}

init();
animate();

    var width
    var height

function init() {

  // container = document.createElement( 'div' );
  // document.body.appendChild( container );

  container = document.getElementById('menuDiv')
     width = container.offsetWidth
     height = container.offsetHeight
  // var info = document.createElement( 'div' );
  // info.style.position = 'absolute';
  // info.style.top = '10px';
  // info.style.width = '100%';
  // info.style.textAlign = 'center';
  // info.innerHTML = '<a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> webgl - interactive cubes';
  // container.appendChild( info );
  var center = new THREE.Vector3(0,0,0)

  // camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
  camera.position.z = -42;
  camera.lookAt( center );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );

  // var light = new THREE.DirectionalLight( 0xffffff, 1 );
  // light.position.set( 1, 1, 1 ).normalize();
  // scene.add( light );
  // var helper = new THREE.DirectionalLightHelper( light, 5 );
  // scene.add(helper)
  scene.add( new THREE.AmbientLight( 0xeeeeee ) );

  var geometry = new THREE.BoxBufferGeometry( 20, 11.25, 0.5 );

  obj = new THREE.Object3D()
  scene.add(obj)
  objs.push(obj)
  // console.log('obj', obj)

  var mapLoad = new THREE.TextureLoader()

  var radius = 30
  for ( var i = 1; i <= sum; i ++ ) {
    var map = mapLoad.load(img_path + i + '.png')
    var mat = new THREE.MeshLambertMaterial( {
      // color: Math.random() * 0xffffff,
      map : map
    })
    var object = new THREE.Mesh( geometry, mat);

    object.position.x = radius * Math.sin(2 * Math.PI * i / sum)
    object.position.z = radius * Math.cos(2 * Math.PI * i / sum)


    // object.position.x = Math.random() * granz * 2 - granz;
    object.position.y = 0;
    // object.position.z = Math.random() * granz * 2 - granz;

    // object.rotation.x = Math.random() * 2 * Math.PI;
    // object.rotation.y = Math.random() * 2 * Math.PI;
    // object.rotation.z = Math.random() * 2 * Math.PI;
    //
    // object.scale.x = Math.random() + 0.5;
    // object.scale.y = Math.random() + 0.5;
    // object.scale.z = Math.random() + 0.5;

    object.lookAt(center)
    // scene.add( object );
    object.index = i
    obj.add(object)
  }

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  // renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setSize( width, height );
  container.appendChild(renderer.domElement);

  // stats = new Stats();
  // container.appendChild( stats.dom );

  container.addEventListener( 'mousemove', onDocumentMouseMove, false );
  container.addEventListener( 'mousedown', onDocumentMouseClic, false );
  container.addEventListener( 'mouseout', function() {
    if(!currentIndex) return
    mouse.x = 9999;
    mouse.y = 9999;
  }, false );

  //

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  // camera.aspect = window.innerWidth / window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize( width, height );
  // renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

  event.preventDefault();
  var tx =  ( event.clientX / window.innerWidth ) * 2 - 1;
  var ty = - ( event.clientY / window.innerHeight ) * 2 + 1;
  // if(tx > container.offsetWidth || ty < container.offsetHeight) return
  // console.log(tx, ty, container.offsetHeight)

  mouse.x = tx
  mouse.y = ty

}

//

function animate() {

  requestAnimationFrame( animate );

  render();
  // stats.update();

}

function render() {

  theta += 0.1;
  if(obj && !currentIndex){
      obj.rotation.y += 0.002
  }

  // camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  // camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  // camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  // camera.lookAt( scene.position );

  camera.updateMatrixWorld();

  // find intersections

  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects( obj.children );

  if ( intersects.length > 0 ) {

    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

      INTERSECTED = intersects[ 0 ].object;
      currentIndex = INTERSECTED.index  //获取得到第几个
      // console.log('saa', INTERSECTED, currentIndex)
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( 0xff0000 );

    }

  } else {

    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    currentIndex = null //获取得到第几个
    INTERSECTED = null;

  }

  renderer.render( scene, camera );

}

function onDocumentMouseClic () {
  if(!currentIndex) return
  window.location.href = img_url[currentIndex - 1];
  // console.log('dianji ', currentIndex)
}
