n.d(t, {
    $x: function () {
        return l;
    },
    GV: function () {
        return s;
    },
    S$: function () {
        return g;
    },
    Vn: function () {
        return o;
    },
    tu: function () {
        return m;
    }
});
var a = n(192379),
    i = n(31775),
    r = n.n(i);
let l = 0,
    s = 4,
    o = 4,
    c = 'absolute',
    d = (e, t, n, a) => {
        if (0 === n) return [];
        if (1 === n)
            return [
                {
                    width: e,
                    height: t,
                    top: 0,
                    left: 0,
                    position: c
                }
            ];
        if (2 === n) {
            let n = Math.ceil((e - a) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: t
                },
                {
                    top: 0,
                    left: n + a,
                    position: c,
                    width: n,
                    height: t
                }
            ];
        }
        if (3 === n) {
            let n = Math.ceil((e - a) / 2),
                i = Math.ceil((t - a) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: t
                },
                {
                    top: 0,
                    left: n + a,
                    position: c,
                    width: n,
                    height: i
                },
                {
                    top: i + a,
                    left: n + a,
                    position: c,
                    width: n,
                    height: i
                }
            ];
        } else {
            let n = Math.ceil((e - a) / 2),
                i = Math.ceil((t - a) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: i
                },
                {
                    top: i + a,
                    left: 0,
                    position: c,
                    width: n,
                    height: i
                },
                {
                    top: 0,
                    left: n + a,
                    position: c,
                    width: n,
                    height: i
                },
                {
                    top: i + a,
                    left: n + a,
                    position: c,
                    width: n,
                    height: i
                }
            ];
        }
    },
    u = new (r())({ max: 100 });
function m(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: i } = e;
    return a.useMemo(
        () =>
            (function (e) {
                var t, n, a;
                let { numAttachments: i, containerWidth: r, containerHeight: l } = e;
                let s = ((t = i), (n = r), (a = l), ''.concat(t, '-').concat(n, '-').concat(a)),
                    o = u.get(s);
                if (null != o) return o;
                {
                    let e = d(r, l, i, 4);
                    return u.set(s, e), e;
                }
            })({
                numAttachments: t,
                containerWidth: n,
                containerHeight: i
            }),
        [t, n, i]
    );
}
function h(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height
    }));
}
function g(e) {
    let { imageContainerStyles: t, containerWidth: n, containerHeight: i } = e,
        r = a.useRef(h(t)),
        l = a.useRef(n),
        s = a.useRef(i),
        o = n > l.current + 100,
        c = i > s.current + 100;
    return (o || c) && (r.current = h(t)), r.current;
}
