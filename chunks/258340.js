t(653041);
var i = t(192379),
    r = t(392711);
n.Z = (e) => {
    let n = {
            y: 0.8 * e.h,
            x: 0.3 * e.w
        },
        t = i.useRef([]);
    return {
        update: (n) => {
            let i = [];
            if (
                (t.current.forEach((t, r) => {
                    (t.position.x -= t.velocity.x * n), (t.position.y -= t.velocity.y * n), (t.velocity.x *= 0.92 ** n), (t.velocity.y *= 0.92 ** n), (t.velocity.y -= 1200 * n), t.position.y > e.h && i.push(r);
                }),
                i.length > 0)
            ) {
                let e = t.current.filter((e, n) => !i.includes(n));
                t.current = e;
            }
        },
        draw: (n) => {
            n.clearRect({
                x: 0,
                y: 0,
                w: e.w,
                h: e.h
            }),
                t.current.forEach((e) => {
                    let { x: t, y: i } = e.position;
                    n.drawImage(
                        e.key,
                        {
                            x: t,
                            y: i
                        },
                        {
                            w: 32 * e.scale,
                            h: 32 * e.scale
                        }
                    );
                });
        },
        emit: (i, a) => {
            for (let c = 0; c < a; c++)
                t.current.push({
                    position: {
                        x: e.w / 2 + (0, r.random)(-50, 50),
                        y: e.h
                    },
                    velocity: {
                        x: (0, r.random)(-n.x, n.x, !0),
                        y: n.y + (0, r.random)(-150, 150, !0)
                    },
                    color: 'red',
                    scale: (0, r.random)(0.8, 1.6),
                    rotation: (0, r.random)(-20, 20),
                    key: i
                });
        }
    };
};
