n(47120), n(653041);
var l = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    u = n(913527),
    o = n.n(u),
    s = n(481060),
    c = n(285888),
    d = n(388032),
    f = n(535701);
let _ = o()().localeData().months(),
    p = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    m = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: _[e]
    })),
    A = /[a-zA-Z0-9]/;
function E(e) {
    let { options: t, selectOption: n, children: r } = e,
        [i, u] = a.useState('');
    a.useEffect(() => {
        if ('' !== i) {
            let e = setTimeout(() => u(''), 1000);
            return () => clearTimeout(e);
        }
    }, [i, u]);
    let o = a.useCallback(
        (e) => {
            if (A.test(e.key)) {
                let l = ''.concat(i).concat(e.key.toLowerCase()),
                    a = t.find((e) => e.label.toLowerCase().startsWith(l));
                null != a && n(a.value), u(l);
            }
        },
        [n, u, i, t]
    );
    return (0, l.jsx)('div', {
        onKeyDown: o,
        children: r
    });
}
function T() {
    let e = o()().localeData().longDateFormat('L'),
        t = e.indexOf('D'),
        n = e.indexOf('M'),
        l = e.indexOf('Y');
    return (
        (-1 === t || -1 === n || -1 === l) && ((t = 0), (n = 1), (l = 2)),
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
                index: l,
                type: 'year'
            }
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let N = a.forwardRef(function (e, t) {
    let { value: n, wrapperClassName: r, onChange: u, onPopulated: _, error: A, autoFocus: N, required: h } = e,
        {
            day: y,
            setDay: g,
            month: S,
            setMonth: v,
            year: G,
            setYear: C
        } = (function (e) {
            let t = null,
                n = null,
                l = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (l = e.year()));
            let [r, i] = a.useState(t),
                [u, o] = a.useState(n),
                [s, c] = a.useState(l);
            return {
                day: r,
                setDay: i,
                month: u,
                setMonth: o,
                year: s,
                setYear: c
            };
        })(n),
        M = a.useMemo(() => (null != y && null != S && null != G ? o()(''.concat(y, '/').concat(S, '/').concat(G), 'DD/MM/YYYY') : null), [y, S, G]);
    a.useEffect(() => {
        u((null == M ? void 0 : M.isValid()) ? M : null);
    }, [M, u]);
    let x = A;
    null != M && !M.isValid() && (x = d.intl.string(d.t.udnqh4));
    let U = (function () {
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
        [w, O] = a.useState(N ? 0 : -1),
        b = a.useRef(null),
        R = a.useRef(null),
        D = a.useRef(null),
        I = a.useMemo(T, []),
        k = a.useCallback(() => {
            var e, t, n, l;
            switch (null === (e = I[w]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = b.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (n = R.current) || void 0 === n || n.focus();
                    break;
                case 'year':
                    null === (l = D.current) || void 0 === l || l.focus();
            }
        }, [w, b, R, D, I]);
    a.useEffect(() => {
        setTimeout(k, 500);
    }, []),
        a.useEffect(() => {
            if (w >= I.length) {
                null == _ || _();
                return;
            }
            k();
        }, [w, k]);
    let F = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = I[e];
        switch (t) {
            case 'day':
                F.push({
                    key: 'day',
                    input: (0, l.jsx)(E, {
                        options: p,
                        selectOption: g,
                        children: (0, l.jsx)(c.Z, {
                            ref: b,
                            className: f.__invalid_inputDay,
                            'aria-label': d.intl.string(d.t.Voklra),
                            menuPlacement: c.Z.MenuPlacements.TOP,
                            placeholder: (0, l.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.Voklra)
                            }),
                            options: p,
                            value: y,
                            onChange: (t) => {
                                let { value: n } = t;
                                g(n), O(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                F.push({
                    key: 'month',
                    input: (0, l.jsx)(E, {
                        options: m,
                        selectOption: v,
                        children: (0, l.jsx)(c.Z, {
                            ref: R,
                            className: f.__invalid_inputMonth,
                            'aria-label': d.intl.string(d.t.UDlN8f),
                            menuPlacement: c.Z.MenuPlacements.TOP,
                            placeholder: (0, l.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.UDlN8f)
                            }),
                            options: m,
                            value: S,
                            onChange: (t) => {
                                let { value: n } = t;
                                v(n), O(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                F.push({
                    key: 'year',
                    input: (0, l.jsx)(E, {
                        options: U,
                        selectOption: C,
                        children: (0, l.jsx)(c.Z, {
                            ref: D,
                            className: f.__invalid_inputYear,
                            'aria-label': d.intl.string(d.t.ZWr5WF),
                            menuPlacement: c.Z.MenuPlacements.TOP,
                            placeholder: (0, l.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.ZWr5WF)
                            }),
                            options: U,
                            value: G,
                            onChange: (t) => {
                                let { value: n } = t;
                                C(n), O(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, l.jsxs)('fieldset', {
        className: i()(f.container, r),
        children: [
            (0, l.jsx)(s.FormTitle, {
                tag: 'legend',
                required: h,
                error: x,
                children: d.intl.string(d.t.xNpFJy)
            }),
            (0, l.jsx)('div', {
                className: f.inputs,
                children: F.map((e, t) => {
                    let { key: n, input: a } = e;
                    return (0, l.jsx)(
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
