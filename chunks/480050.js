t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(956664),
    s = t(981656);
n.Z = a.memo(function (e) {
    let { children: n, active: t, onClick: r, className: u, style: c, width: d, height: h, maxWidth: m, maxHeight: p } = e,
        f = (0, a.useRef)(null),
        [g, _] = (0, a.useState)(!1),
        [x, C] = (0, a.useState)({
            x: 0,
            y: 0
        }),
        [S, v] = (0, a.useState)({
            x: 0,
            y: 0
        }),
        [E, I] = (0, a.useState)({
            x: 0,
            y: 0
        });
    (0, a.useEffect)(() => {
        !t &&
            (I({
                x: 0,
                y: 0
            }),
            v({
                x: 0,
                y: 0
            }));
    }, [t]);
    let y = (0, a.useCallback)(
            (e) => {
                if (!t || 0 !== e.button) return;
                e.preventDefault();
                let { clientX: n, clientY: i } = e;
                _(!0),
                    C({
                        x: n,
                        y: i
                    }),
                    v({
                        x: n - E.x,
                        y: i - E.y
                    });
            },
            [t, E]
        ),
        b = (0, a.useCallback)(
            (e) => {
                if (!t) {
                    0 === e.button && (null == r || r(e));
                    return;
                }
                (e.clientX - x.x) ** 2 + (e.clientY - x.y) ** 2 < 400 && (null == r || r(e)), _(!1);
            },
            [t, r, x]
        ),
        L = (0, a.useCallback)(
            (e) => {
                var n;
                if (!g) return;
                let t = null === (n = f.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                if (null == t) return;
                let [i, a] = [t.width > window.innerWidth, t.height > window.innerHeight];
                if (!i && !a) return;
                let { x: r, y: l } = E,
                    [o, s] = [i ? e.clientX - S.x : 0, a ? e.clientY - S.y : 0],
                    [u, c] = [o - r, s - l];
                i && u + t.x >= 0 && (o -= u + t.x), a && c + t.y >= 0 && (s -= c + t.y);
                let [d, h] = [t.x + t.width, t.y + t.height];
                i && u + d <= window.innerWidth && (o = window.innerWidth + r - d),
                    a && c + h <= window.innerHeight && (s = window.innerHeight + l - h),
                    I({
                        x: o,
                        y: s
                    });
            },
            [g, E, S.x, S.y]
        ),
        M = t ? (0, o.vV)(d, h, m, p) : 1,
        A = (0, a.useCallback)(() => {
            let e = f.current;
            if (null == e) return !1;
            let n = null != M ? M : 1;
            return e.offsetWidth * n > window.innerWidth || e.offsetHeight * n > window.innerHeight;
        }, [M]);
    return (0, i.jsx)('div', {
        ref: f,
        onMouseDown: y,
        onMouseUp: b,
        onMouseMove: L,
        onMouseLeave: () => _(!1),
        className: l()(u, s.wrapper, {
            [s.panning]: t && g,
            [s.pannable]: t && A()
        }),
        style: {
            ...(null != c ? c : {}),
            translate: ''.concat(E.x, 'px ').concat(E.y, 'px'),
            scale: ''.concat(null != M ? M : 1)
        },
        children: n
    });
});
