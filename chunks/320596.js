n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(454585),
    o = n(273744),
    l = n(388032),
    u = n(936230),
    c = n(971436);
let d = (e) => {
    let {
            data: { title: t, subtitle: n, placeholder: d, rows: f, character_limit: _, pattern: h },
            onChange: p,
            initialText: m,
            isRequired: g
        } = e,
        E = i.useRef(
            s.Z.reactParserFor({
                ...s.Z.defaultRules,
                link: o.s
            })
        ),
        [v, I] = i.useState(''),
        [S, T] = i.useState('');
    i.useEffect(() => {
        var e;
        I(null !== (e = null == m ? void 0 : m.value) && void 0 !== e ? e : '');
    }, [m]);
    let b = i.useCallback(
        (e) => {
            let t = null != h ? new RegExp(h) : null;
            null != t && null == t.exec(e)
                ? (T(l.intl.string(l.t['24xrGR'])),
                  p({
                      value: e,
                      isValid: !1
                  }))
                : null != e &&
                  (T(''),
                  I(e),
                  p({
                      value: e,
                      isValid: !0
                  }));
        },
        [p, h]
    );
    return (0, r.jsxs)('div', {
        className: c.marginBottom8,
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: c.marginBottom8,
                    children: (0, r.jsxs)(a.Text, {
                        variant: 'text-sm/bold',
                        children: [
                            t,
                            g &&
                                (0, r.jsx)('span', {
                                    className: u.required,
                                    children: '*'
                                })
                        ]
                    })
                }),
            (0, r.jsx)(a.TextArea, {
                maxLength: _,
                onChange: b,
                value: v,
                error: S,
                rows: f,
                placeholder: d,
                autoFocus: !0
            }),
            null != n &&
                (0, r.jsx)('div', {
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        children: E.current(n)
                    })
                })
        ]
    });
};
t.Z = (e) => {
    let { elements: t, onChange: n, state: i } = e,
        a = t.map((e) => {
            var t;
            let a = e.name;
            return (0, r.jsx)(
                d,
                {
                    data: e.data,
                    onChange: (e) => n(a, e.value, e.isValid),
                    initialText: null !== (t = null == i ? void 0 : i[a]) && void 0 !== t ? t : void 0,
                    isRequired: e.should_submit_data
                },
                a
            );
        });
    return (0, r.jsx)('div', { children: a });
};
