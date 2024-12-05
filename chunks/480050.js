t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(956664),
    s = t(981656);
n.Z = r.memo(function (e) {
    let { children: n, active: t, onClick: a, className: u, style: c, width: d, height: h, maxWidth: m, maxHeight: p } = e,
        f = (0, r.useRef)(null),
        [g, x] = (0, r.useState)(!1),
        [_, C] = (0, r.useState)({
            x: 0,
            y: 0
        }),
        [S, v] = (0, r.useState)({
            x: 0,
            y: 0
        }),
        [y, E] = (0, r.useState)({
            x: 0,
            y: 0
        });
    (0, r.useEffect)(() => {
        !t &&
            (E({
                x: 0,
                y: 0
            }),
            v({
                x: 0,
                y: 0
            }));
    }, [t]);
    let I = (0, r.useCallback)(
            (e) => {
                if (!t || 0 !== e.button) return;
                e.preventDefault();
                let { clientX: n, clientY: i } = e;
                x(!0),
                    C({
                        x: n,
                        y: i
                    }),
                    v({
                        x: n - y.x,
                        y: i - y.y
                    });
            },
            [t, y]
        ),
        b = (0, r.useCallback)(
            (e) => {
                if (!t) {
                    0 === e.button && (null == a || a(e));
                    return;
                }
                (e.clientX - _.x) ** 2 + (e.clientY - _.y) ** 2 < 400 && (null == a || a(e)), x(!1);
            },
            [t, a, _]
        ),
        L = (0, r.useCallback)(
            (e) => {
                var n;
                if (!g) return;
                let t = null === (n = f.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                if (null == t) return;
                let [i, r] = [t.width > window.innerWidth, t.height > window.innerHeight];
                if (!i && !r) return;
                let { x: a, y: l } = y,
                    [o, s] = [i ? e.clientX - S.x : 0, r ? e.clientY - S.y : 0],
                    [u, c] = [o - a, s - l];
                i && u + t.x >= 0 && (o -= u + t.x), r && c + t.y >= 0 && (s -= c + t.y);
                let [d, h] = [t.x + t.width, t.y + t.height];
                i && u + d <= window.innerWidth && (o = window.innerWidth + a - d),
                    r && c + h <= window.innerHeight && (s = window.innerHeight + l - h),
                    E({
                        x: o,
                        y: s
                    });
            },
            [g, y, S.x, S.y]
        ),
        M = t ? (0, o.vV)(d, h, m, p) : 1,
        j = (0, r.useCallback)(() => {
            let e = f.current;
            if (null == e) return !1;
            let n = null != M ? M : 1;
            return e.offsetWidth * n > window.innerWidth || e.offsetHeight * n > window.innerHeight;
        }, [M]);
    return (0, i.jsx)('div', {
        ref: f,
        onMouseDown: I,
        onMouseUp: b,
        onMouseMove: L,
        onMouseLeave: () => x(!1),
        className: l()(u, s.wrapper, {
            [s.panning]: t && g,
            [s.pannable]: t && j()
        }),
        style: {
            ...(null != c ? c : {}),
            translate: ''.concat(y.x, 'px ').concat(y.y, 'px'),
            scale: ''.concat(null != M ? M : 1)
        },
        children: n
    });
});
