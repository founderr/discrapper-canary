n(47120), n(653041);
var s = n(200651),
    a = n(192379),
    o = n(120356),
    i = n.n(o),
    l = n(913527),
    r = n.n(l),
    c = n(481060),
    d = n(285888),
    u = n(388032),
    f = n(234293);
let _ = r()().localeData().months(),
    p = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    m = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: _[e]
    })),
    h = /[a-zA-Z0-9]/;
function E(e) {
    let { options: t, selectOption: n, children: o } = e,
        [i, l] = a.useState('');
    a.useEffect(() => {
        if ('' !== i) {
            let e = setTimeout(() => l(''), 1000);
            return () => clearTimeout(e);
        }
    }, [i, l]);
    let r = a.useCallback(
        (e) => {
            if (h.test(e.key)) {
                let s = ''.concat(i).concat(e.key.toLowerCase()),
                    a = t.find((e) => e.label.toLowerCase().startsWith(s));
                null != a && n(a.value), l(s);
            }
        },
        [n, l, i, t]
    );
    return (0, s.jsx)('div', {
        onKeyDown: r,
        children: o
    });
}
function x() {
    let e = r()().localeData().longDateFormat('L'),
        t = e.indexOf('D'),
        n = e.indexOf('M'),
        s = e.indexOf('Y');
    return (
        (-1 === t || -1 === n || -1 === s) && ((t = 0), (n = 1), (s = 2)),
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
                index: s,
                type: 'year'
            }
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let N = a.forwardRef(function (e, t) {
    let { value: n, wrapperClassName: o, onChange: l, onPopulated: _, error: h, autoFocus: N, required: T } = e,
        {
            day: A,
            setDay: C,
            month: b,
            setMonth: I,
            year: v,
            setYear: j
        } = (function (e) {
            let t = null,
                n = null,
                s = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (s = e.year()));
            let [o, i] = a.useState(t),
                [l, r] = a.useState(n),
                [c, d] = a.useState(s);
            return {
                day: o,
                setDay: i,
                month: l,
                setMonth: r,
                year: c,
                setYear: d
            };
        })(n),
        g = a.useMemo(() => (null != A && null != b && null != v ? r()(''.concat(A, '/').concat(b, '/').concat(v), 'DD/MM/YYYY') : null), [A, b, v]);
    a.useEffect(() => {
        l((null == g ? void 0 : g.isValid()) ? g : null);
    }, [g, l]);
    let G = h;
    null != g && !g.isValid() && (G = u.intl.string(u.t.udnqh4));
    let y = (function () {
            let e = new Date().getFullYear(),
                t = a.useRef(
                    Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }))
                );
            return (
                a.useEffect(() => {
                    t.current = Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }));
                }, [e]),
                t.current
            );
        })(),
        [S, F] = a.useState(N ? 0 : -1),
        O = a.useRef(null),
        M = a.useRef(null),
        D = a.useRef(null),
        L = a.useMemo(x, []),
        k = a.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = L[S]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = O.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (n = M.current) || void 0 === n || n.focus();
                    break;
                case 'year':
                    null === (s = D.current) || void 0 === s || s.focus();
            }
        }, [S, O, M, D, L]);
    a.useEffect(() => {
        setTimeout(k, 500);
    }, []),
        a.useEffect(() => {
            if (S >= L.length) {
                null == _ || _();
                return;
            }
            k();
        }, [S, k]);
    let Z = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = L[e];
        switch (t) {
            case 'day':
                Z.push({
                    key: 'day',
                    input: (0, s.jsx)(E, {
                        options: p,
                        selectOption: C,
                        children: (0, s.jsx)(d.Z, {
                            ref: O,
                            className: f.__invalid_inputDay,
                            'aria-label': u.intl.string(u.t.Voklra),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, s.jsx)('span', {
                                'aria-hidden': !0,
                                children: u.intl.string(u.t.Voklra)
                            }),
                            options: p,
                            value: A,
                            onChange: (t) => {
                                let { value: n } = t;
                                C(n), F(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                Z.push({
                    key: 'month',
                    input: (0, s.jsx)(E, {
                        options: m,
                        selectOption: I,
                        children: (0, s.jsx)(d.Z, {
                            ref: M,
                            className: f.__invalid_inputMonth,
                            'aria-label': u.intl.string(u.t.UDlN8f),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, s.jsx)('span', {
                                'aria-hidden': !0,
                                children: u.intl.string(u.t.UDlN8f)
                            }),
                            options: m,
                            value: b,
                            onChange: (t) => {
                                let { value: n } = t;
                                I(n), F(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                Z.push({
                    key: 'year',
                    input: (0, s.jsx)(E, {
                        options: y,
                        selectOption: j,
                        children: (0, s.jsx)(d.Z, {
                            ref: D,
                            className: f.__invalid_inputYear,
                            'aria-label': u.intl.string(u.t.ZWr5WF),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, s.jsx)('span', {
                                'aria-hidden': !0,
                                children: u.intl.string(u.t.ZWr5WF)
                            }),
                            options: y,
                            value: v,
                            onChange: (t) => {
                                let { value: n } = t;
                                j(n), F(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, s.jsxs)('fieldset', {
        className: i()(f.container, o),
        children: [
            (0, s.jsx)(c.FormTitle, {
                tag: 'legend',
                required: T,
                error: G,
                children: u.intl.string(u.t.xNpFJy)
            }),
            (0, s.jsx)('div', {
                className: f.inputs,
                children: Z.map((e, t) => {
                    let { key: n, input: a } = e;
                    return (0, s.jsx)(
                        'div',
                        {
                            tabIndex: t + 1,
                            className: f[n],
                            children: a
                        },
                        n
                    );
                })
            })
        ]
    });
});
t.Z = N;
