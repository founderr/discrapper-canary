n(47120), n(653041);
var s = n(735250),
    r = n(470079),
    i = n(120356),
    a = n.n(i),
    o = n(913527),
    l = n.n(o),
    c = n(481060),
    u = n(285888),
    d = n(689938),
    _ = n(535701);
let h = l()().localeData().months(),
    E = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    p = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: h[e]
    })),
    g = /[a-zA-Z0-9]/;
function f(e) {
    let { options: t, selectOption: n, children: i } = e,
        [a, o] = r.useState('');
    r.useEffect(() => {
        if ('' !== a) {
            let e = setTimeout(() => o(''), 1000);
            return () => clearTimeout(e);
        }
    }, [a, o]);
    let l = r.useCallback(
        (e) => {
            if (g.test(e.key)) {
                let s = ''.concat(a).concat(e.key.toLowerCase()),
                    r = t.find((e) => e.label.toLowerCase().startsWith(s));
                null != r && n(r.value), o(s);
            }
        },
        [n, o, a, t]
    );
    return (0, s.jsx)('div', {
        onKeyDown: l,
        children: i
    });
}
function m() {
    let e = l()().localeData().longDateFormat('L'),
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
let I = r.forwardRef(function (e, t) {
    let { value: n, wrapperClassName: i, onChange: o, onPopulated: h, error: g, autoFocus: I, required: N } = e,
        {
            day: T,
            setDay: A,
            month: x,
            setMonth: C,
            year: v,
            setYear: S
        } = (function (e) {
            let t = null,
                n = null,
                s = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (s = e.year()));
            let [i, a] = r.useState(t),
                [o, l] = r.useState(n),
                [c, u] = r.useState(s);
            return {
                day: i,
                setDay: a,
                month: o,
                setMonth: l,
                year: c,
                setYear: u
            };
        })(n),
        Z = r.useMemo(() => (null != T && null != x && null != v ? l()(''.concat(T, '/').concat(x, '/').concat(v), 'DD/MM/YYYY') : null), [T, x, v]);
    r.useEffect(() => {
        o((null == Z ? void 0 : Z.isValid()) ? Z : null);
    }, [Z, o]);
    let R = g;
    null != Z && !Z.isValid() && (R = d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
    let O = (function () {
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
        [b, D] = r.useState(I ? 0 : -1),
        M = r.useRef(null),
        L = r.useRef(null),
        P = r.useRef(null),
        j = r.useMemo(m, []),
        y = r.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = j[b]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = M.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (n = L.current) || void 0 === n || n.focus();
                    break;
                case 'year':
                    null === (s = P.current) || void 0 === s || s.focus();
            }
        }, [b, M, L, P, j]);
    r.useEffect(() => {
        setTimeout(y, 500);
    }, []),
        r.useEffect(() => {
            if (b >= j.length) {
                null == h || h();
                return;
            }
            y();
        }, [b, y]);
    let G = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = j[e];
        switch (t) {
            case 'day':
                G.push({
                    key: 'day',
                    input: (0, s.jsx)(f, {
                        options: E,
                        selectOption: A,
                        children: (0, s.jsx)(u.Z, {
                            ref: M,
                            className: _.__invalid_inputDay,
                            'aria-label': d.Z.Messages.AGE_GATE_DOB_DAY,
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, s.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.Z.Messages.AGE_GATE_DOB_DAY
                            }),
                            options: E,
                            value: T,
                            onChange: (t) => {
                                let { value: n } = t;
                                A(n), D(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                G.push({
                    key: 'month',
                    input: (0, s.jsx)(f, {
                        options: p,
                        selectOption: C,
                        children: (0, s.jsx)(u.Z, {
                            ref: L,
                            className: _.__invalid_inputMonth,
                            'aria-label': d.Z.Messages.AGE_GATE_DOB_MONTH,
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, s.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.Z.Messages.AGE_GATE_DOB_MONTH
                            }),
                            options: p,
                            value: x,
                            onChange: (t) => {
                                let { value: n } = t;
                                C(n), D(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                G.push({
                    key: 'year',
                    input: (0, s.jsx)(f, {
                        options: O,
                        selectOption: S,
                        children: (0, s.jsx)(u.Z, {
                            ref: P,
                            className: _.__invalid_inputYear,
                            'aria-label': d.Z.Messages.AGE_GATE_DOB_YEAR,
                            menuPlacement: u.Z.MenuPlacements.TOP,
                            placeholder: (0, s.jsx)('span', {
                                'aria-hidden': !0,
                                children: d.Z.Messages.AGE_GATE_DOB_YEAR
                            }),
                            options: O,
                            value: v,
                            onChange: (t) => {
                                let { value: n } = t;
                                S(n), D(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, s.jsxs)('fieldset', {
        className: a()(_.container, i),
        children: [
            (0, s.jsx)(c.FormTitle, {
                tag: 'legend',
                required: N,
                error: R,
                children: d.Z.Messages.AGE_GATE_DATE_OF_BIRTH
            }),
            (0, s.jsx)('div', {
                className: _.inputs,
                children: G.map((e, t) => {
                    let { key: n, input: r } = e;
                    return (0, s.jsx)(
                        'div',
                        {
                            tabIndex: t + 1,
                            className: _[n],
                            children: r
                        },
                        n
                    );
                })
            })
        ]
    });
});
t.Z = I;
