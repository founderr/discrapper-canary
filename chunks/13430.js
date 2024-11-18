n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(913527),
    o = n.n(a),
    c = n(481060),
    u = n(285888),
    d = n(388032),
    h = n(49872);
let p = o()().localeData().months(),
    g = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    m = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: p[e]
    })),
    f = /[a-zA-Z0-9]/;
function x(e) {
    let { options: t, selectOption: n, children: s } = e,
        [l, a] = r.useState('');
    r.useEffect(() => {
        if ('' !== l) {
            let e = setTimeout(() => a(''), 1000);
            return () => clearTimeout(e);
        }
    }, [l, a]);
    let o = r.useCallback(
        (e) => {
            if (f.test(e.key)) {
                let i = ''.concat(l).concat(e.key.toLowerCase()),
                    r = t.find((e) => e.label.toLowerCase().startsWith(i));
                null != r && n(r.value), a(i);
            }
        },
        [n, a, l, t]
    );
    return (0, i.jsx)('div', {
        onKeyDown: o,
        children: s
    });
}
function _() {
    let e = o()().localeData().longDateFormat('L'),
        t = e.indexOf('D'),
        n = e.indexOf('M'),
        i = e.indexOf('Y');
    return (
        (-1 === t || -1 === n || -1 === i) && ((t = 0), (n = 1), (i = 2)),
        [
            {
                index: t,
                type: 'day'
            },
            {
                index: n,
                type: 'month'
            },
            {
                index: i,
                type: 'year'
            }
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let E = r.forwardRef(function (e, t) {
    let { value: n, wrapperClassName: s, onChange: a, onPopulated: p, error: f, autoFocus: E, required: v } = e,
        {
            day: I,
            setDay: b,
            month: N,
            setMonth: C,
            year: S,
            setYear: A
        } = (function (e) {
            let t = null,
                n = null,
                i = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (i = e.year()));
            let [s, l] = r.useState(t),
                [a, o] = r.useState(n),
                [c, u] = r.useState(i);
            return {
                day: s,
                setDay: l,
                month: a,
                setMonth: o,
                year: c,
                setYear: u
            };
        })(n),
        T = r.useMemo(() => (null != I && null != N && null != S ? o()(''.concat(I, '/').concat(N, '/').concat(S), 'DD/MM/YYYY') : null), [I, N, S]);
    r.useEffect(() => {
        a((null == T ? void 0 : T.isValid()) ? T : null);
    }, [T, a]);
    let j = f;
    null != T && !T.isValid() && (j = d.intl.string(d.t.udnqh4));
    let Z = (function () {
            let e = new Date().getFullYear(),
                t = r.useRef(
                    Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }))
                );
            return (
                r.useEffect(() => {
                    t.current = Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }));
                }, [e]),
                t.current
            );
        })(),
        [R, L] = r.useState(E ? 0 : -1),
        P = r.useRef(null),
        O = r.useRef(null),
        y = r.useRef(null),
        D = r.useMemo(_, []),
        k = r.useCallback(() => {
            var e, t, n, i;
            switch (null === (e = D[R]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = P.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (n = O.current) || void 0 === n || n.focus();
                    break;
                case 'year':
                    null === (i = y.current) || void 0 === i || i.focus();
            }
        }, [R, P, O, y, D]);
    r.useEffect(() => {
        setTimeout(k, 500);
    }, []),
        r.useEffect(() => {
            if (R >= D.length) {
                null == p || p();
                return;
            }
            k();
        }, [R, k]);
    let w = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = D[e];
        switch (t) {
            case 'day':
                w.push({
                    key: 'day',
                    input: (0, i.jsx)(x, {
                        options: g,
                        selectOption: b,
                        children: (0, i.jsx)(u.Z, {
                            ref: P,
                            className: h.__invalid_inputDay,
                            'aria-label': d.intl.string(d.t.Voklra),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, i.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.Voklra)
                            }),
                            options: g,
                            value: I,
                            onChange: (t) => {
                                let { value: n } = t;
                                b(n), L(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                w.push({
                    key: 'month',
                    input: (0, i.jsx)(x, {
                        options: m,
                        selectOption: C,
                        children: (0, i.jsx)(u.Z, {
                            ref: O,
                            className: h.__invalid_inputMonth,
                            'aria-label': d.intl.string(d.t.UDlN8f),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, i.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.UDlN8f)
                            }),
                            options: m,
                            value: N,
                            onChange: (t) => {
                                let { value: n } = t;
                                C(n), L(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                w.push({
                    key: 'year',
                    input: (0, i.jsx)(x, {
                        options: Z,
                        selectOption: A,
                        children: (0, i.jsx)(u.Z, {
                            ref: y,
                            className: h.__invalid_inputYear,
                            'aria-label': d.intl.string(d.t.ZWr5WF),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, i.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.ZWr5WF)
                            }),
                            options: Z,
                            value: S,
                            onChange: (t) => {
                                let { value: n } = t;
                                A(n), L(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, i.jsxs)('fieldset', {
        className: l()(h.container, s),
        children: [
            (0, i.jsx)(c.FormTitle, {
                tag: 'legend',
                required: v,
                error: j,
                children: d.intl.string(d.t.xNpFJy)
            }),
            (0, i.jsx)('div', {
                className: h.inputs,
                children: w.map((e, t) => {
                    let { key: n, input: r } = e;
                    return (0, i.jsx)(
                        'div',
                        {
                            tabIndex: t + 1,
                            className: h[n],
                            children: r
                        },
                        n
                    );
                })
            })
        ]
    });
});
t.Z = E;
