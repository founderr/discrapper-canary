n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    i = n(913527),
    s = n.n(i),
    c = n(481060),
    u = n(285888),
    d = n(388032),
    p = n(234293);
let h = s()().localeData().months(),
    f = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    v = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: h[e]
    })),
    m = /[a-zA-Z0-9]/;
function b(e) {
    let { options: t, selectOption: n, children: l } = e,
        [o, i] = a.useState('');
    a.useEffect(() => {
        if ('' !== o) {
            let e = setTimeout(() => i(''), 1000);
            return () => clearTimeout(e);
        }
    }, [o, i]);
    let s = a.useCallback(
        (e) => {
            if (m.test(e.key)) {
                let r = ''.concat(o).concat(e.key.toLowerCase()),
                    a = t.find((e) => e.label.toLowerCase().startsWith(r));
                null != a && n(a.value), i(r);
            }
        },
        [n, i, o, t]
    );
    return (0, r.jsx)('div', {
        onKeyDown: s,
        children: l
    });
}
function g() {
    let e = s()().localeData().longDateFormat('L'),
        t = e.indexOf('D'),
        n = e.indexOf('M'),
        r = e.indexOf('Y');
    return (
        (-1 === t || -1 === n || -1 === r) && ((t = 0), (n = 1), (r = 2)),
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
                index: r,
                type: 'year'
            }
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let x = a.forwardRef(function (e, t) {
    let { value: n, wrapperClassName: l, onChange: i, onPopulated: h, error: m, autoFocus: x, required: E } = e,
        {
            day: y,
            setDay: _,
            month: A,
            setMonth: k,
            year: T,
            setYear: M
        } = (function (e) {
            let t = null,
                n = null,
                r = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (r = e.year()));
            let [l, o] = a.useState(t),
                [i, s] = a.useState(n),
                [c, u] = a.useState(r);
            return {
                day: l,
                setDay: o,
                month: i,
                setMonth: s,
                year: c,
                setYear: u
            };
        })(n),
        C = a.useMemo(() => (null != y && null != A && null != T ? s()(''.concat(y, '/').concat(A, '/').concat(T), 'DD/MM/YYYY') : null), [y, A, T]);
    a.useEffect(() => {
        i((null == C ? void 0 : C.isValid()) ? C : null);
    }, [C, i]);
    let O = m;
    null != C && !C.isValid() && (O = d.intl.string(d.t.udnqh4));
    let R = (function () {
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
        [G, N] = a.useState(x ? 0 : -1),
        S = a.useRef(null),
        w = a.useRef(null),
        D = a.useRef(null),
        j = a.useMemo(g, []),
        P = a.useCallback(() => {
            var e, t, n, r;
            switch (null === (e = j[G]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = S.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (n = w.current) || void 0 === n || n.focus();
                    break;
                case 'year':
                    null === (r = D.current) || void 0 === r || r.focus();
            }
        }, [G, S, w, D, j]);
    a.useEffect(() => {
        setTimeout(P, 500);
    }, []),
        a.useEffect(() => {
            if (G >= j.length) {
                null == h || h();
                return;
            }
            P();
        }, [G, P]);
    let F = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = j[e];
        switch (t) {
            case 'day':
                F.push({
                    key: 'day',
                    input: (0, r.jsx)(b, {
                        options: f,
                        selectOption: _,
                        children: (0, r.jsx)(u.Z, {
                            ref: S,
                            className: p.__invalid_inputDay,
                            'aria-label': d.intl.string(d.t.Voklra),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.Voklra)
                            }),
                            options: f,
                            value: y,
                            onChange: (t) => {
                                let { value: n } = t;
                                _(n), N(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                F.push({
                    key: 'month',
                    input: (0, r.jsx)(b, {
                        options: v,
                        selectOption: k,
                        children: (0, r.jsx)(u.Z, {
                            ref: w,
                            className: p.__invalid_inputMonth,
                            'aria-label': d.intl.string(d.t.UDlN8f),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.UDlN8f)
                            }),
                            options: v,
                            value: A,
                            onChange: (t) => {
                                let { value: n } = t;
                                k(n), N(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                F.push({
                    key: 'year',
                    input: (0, r.jsx)(b, {
                        options: R,
                        selectOption: M,
                        children: (0, r.jsx)(u.Z, {
                            ref: D,
                            className: p.__invalid_inputYear,
                            'aria-label': d.intl.string(d.t.ZWr5WF),
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.intl.string(d.t.ZWr5WF)
                            }),
                            options: R,
                            value: T,
                            onChange: (t) => {
                                let { value: n } = t;
                                M(n), N(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, r.jsxs)('fieldset', {
        className: o()(p.container, l),
        children: [
            (0, r.jsx)(c.FormTitle, {
                tag: 'legend',
                required: E,
                error: O,
                children: d.intl.string(d.t.xNpFJy)
            }),
            (0, r.jsx)('div', {
                className: p.inputs,
                children: F.map((e, t) => {
                    let { key: n, input: a } = e;
                    return (0, r.jsx)(
                        'div',
                        {
                            tabIndex: t + 1,
                            className: p[n],
                            children: a
                        },
                        n
                    );
                })
            })
        ]
    });
});
t.Z = x;
