import React, { Component } from 'react';


export default class Loader extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.createLoader();
    }

    createLoader() {
        var $body = document.body,
            $wrap = document.getElementById('wrap'),

            areawidth = window.innerWidth,
            areaheight = window.innerHeight,

            canvassize = 500,

            length = 30,
            radius = 5.6,

            rotatevalue = 0.035,
            acceleration = 0,
            animatestep = 0,
            toend = false,

            pi2 = Math.PI * 2,

            group = new THREE.Group(),
            mesh, ringcover, ring,

            camera, scene, renderer;


        camera = new THREE.PerspectiveCamera(65, 1, 1, 10000);
        camera.position.z = 150;

        scene = new THREE.Scene();
        // scene.add(new THREE.AxisHelper(30));
        scene.add(group);

        mesh = new THREE.Mesh(
            new THREE.TubeGeometry(new (THREE.Curve.create(function () { },
                function (percent) {

                    var x = length * Math.sin(pi2 * percent),
                        y = radius * Math.cos(pi2 * 3 * percent),
                        z, t;

                    t = percent % 0.25 / 0.25;
                    t = percent % 0.25 - (2 * (1 - t) * t * -0.0185 + t * t * 0.25);
                    if (Math.floor(percent / 0.25) == 0 || Math.floor(percent / 0.25) == 2) {
                        t *= -1;
                    }
                    z = radius * Math.sin(pi2 * 2 * (percent - t));

                    return new THREE.Vector3(x, y, z);

                }
            ))(), 200, 1.1, 2, true),
            new THREE.MeshBasicMaterial({
                color: 0xffffff
                // , wireframe: true
            })
        );
        group.add(mesh);

        ringcover = new THREE.Mesh(new THREE.PlaneGeometry(50, 15, 1), new THREE.MeshBasicMaterial({ color: 0xd1684e, opacity: 0, transparent: true }));
        ringcover.position.x = length + 1;
        ringcover.rotation.y = Math.PI / 2;
        group.add(ringcover);

        ring = new THREE.Mesh(new THREE.RingGeometry(4.3, 5.55, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0, transparent: true }));
        ring.position.x = length + 1.1;
        ring.rotation.y = Math.PI / 2;
        group.add(ring);

        // fake shadow
        (function () {
            var plain, i;
            for (i = 0; i < 10; i++) {
                plain = new THREE.Mesh(new THREE.PlaneGeometry(length * 2 + 1, radius * 3, 1), new THREE.MeshBasicMaterial({ color: 0xd1684e, transparent: true, opacity: 0.13 }));
                plain.position.z = -2.5 + i * 0.5;
                group.add(plain);
            }
        })();

        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvassize, canvassize);
        renderer.setClearColor('#d1684e');

        $wrap.appendChild(renderer.domElement);

        animate();

        function render() {

            var progress;

            animatestep = Math.max(0, Math.min(240, toend ? animatestep + 1 : animatestep - 4));
            acceleration = easing(animatestep, 0, 1, 240);

            renderer.render(scene, camera);

        }

        function animate() {
            mesh.rotation.x += rotatevalue + acceleration;
            render();
            requestAnimationFrame(animate);
        }

        function easing(t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t + b; return c / 2 * ((t -= 2) * t * t + 2) + b; }
    }
    render() {
        debugger;
        const { isLoading } = this.props;
        { if (isLoading) {
            return (
                <div id="wrap"></div>
                // <canvas ref="canvas" width={300} height={300}/>
            );

        }}
    }
}