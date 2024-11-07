n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(481060),
    u = n(285888),
    d = n(388032),
    h = n(49872);
let g = o()().localeData().months(),
    f = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    m = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: g[e]
    })),
    p = /[a-zA-Z0-9]/;
function _(e) {
    let { options: t, selectOption: n, children: s } = e,
        [a, l] = r.useState('');
    r.useEffect(() => {
        if ('' !== a) {
            let e = setTimeout(() => l(''), 1000);
            return () => clearTimeout(e);
        }
    }, [a, l]);
    let o = r.useCallback(
        (e) => {
            if (p.test(e.key)) {
                let i = ''.concat(a).concat(e.key.toLowerCase()),
                    r = t.find((e) => e.label.toLowerCase().startsWith(i));
                null != r && n(r.value), l(i);
            }
        },
        [n, l, a, t]
    );
    return (0, i.jsx)('div', {
        onKeyDown: o,
        children: s
    });
}
function x() {
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
    let { value: n, wrapperClassName: s, onChange: l, onPopulated: g, error: p, autoFocus: E, required: v } = e,
        {
            day: I,
            setDay: N,
            month: b,
            setMonth: C,
            year: S,
            setYear: T
        } = (function (e) {
            let t = null,
                n = null,
                i = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (i = e.year()));
            let [s, a] = r.useState(t),
                [l, o] = r.useState(n),
                [c, u] = r.useState(i);
            return {
                day: s,
                setDay: a,
                month: l,
                setMonth: o,
                year: c,
                setYear: u
            };
        })(n),
        A = r.useMemo(() => (null != I && null != b && null != S ? o()(''.concat(I, '/').concat(b, '/').concat(S), 'DD/MM/YYYY') : null), [I, b, S]);
    r.useEffect(() => {
        l((null == A ? void 0 : A.isValid()) ? A : null);
    }, [A, l]);
    let Z = p;
    null != A && !A.isValid() && (Z = d.intl.string(d.t.udnqh4));
    let j = (function () {
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
        [R, O] = r.useState(E ? 0 : -1),
        L = r.useRef(null),
        y = r.useRef(null),
        P = r.useRef(null),
        D = r.useMemo(x, []),
        k = r.useCallback(() => {
            var e, t, n, i;
            switch (null === (e = D[R]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = L.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (n = y.current) || void 0 === n || n.focus();
                    break;
                case 'year':
                    null === (i = P.current) || void 0 === i || i.focus();
            }
        }, [R, L, y, P, D]);
    r.useEffect(() => {
        setTimeout(k, 500);
    }, []),
        r.useEffect(() => {
            if (R >= D.length) {
                null == g || g();
                return;
            }
            k();
        }, [R, k]);
    let M = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = D[e];
        switch (t) {
            case 'day':
                M.push({
                    key: 'day',
                    input: (0, i.jsx)(_, {
                        options: f,
                        selectOption: N,
                        children: (0, i.jsx)(u.Z, {
                            ref: L,
                            className: h.__invalid_inputDay,
                            'aria-label': d.intl.string(d.t.Voklra),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, i.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.Voklra)
                            }),
                            options: f,
                            value: I,
                            onChange: (t) => {
                                let { value: n } = t;
                                N(n), O(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                M.push({
                    key: 'month',
                    input: (0, i.jsx)(_, {
                        options: m,
                        selectOption: C,
                        children: (0, i.jsx)(u.Z, {
                            ref: y,
                            className: h.__invalid_inputMonth,
                            'aria-label': d.intl.string(d.t.UDlN8f),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, i.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.UDlN8f)
                            }),
                            options: m,
                            value: b,
                            onChange: (t) => {
                                let { value: n } = t;
                                C(n), O(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                M.push({
                    key: 'year',
                    input: (0, i.jsx)(_, {
                        options: j,
                        selectOption: T,
                        children: (0, i.jsx)(u.Z, {
                            ref: P,
                            className: h.__invalid_inputYear,
                            'aria-label': d.intl.string(d.t.ZWr5WF),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, i.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.ZWr5WF)
                            }),
                            options: j,
                            value: S,
                            onChange: (t) => {
                                let { value: n } = t;
                                T(n), O(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, i.jsxs)('fieldset', {
        className: a()(h.container, s),
        children: [
            (0, i.jsx)(c.FormTitle, {
                tag: 'legend',
                required: v,
                error: Z,
                children: d.intl.string(d.t.xNpFJy)
            }),
            (0, i.jsx)('div', {
                className: h.inputs,
                children: M.map((e, t) => {
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
