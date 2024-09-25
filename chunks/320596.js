var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(454585),
    l = n(273744),
    u = n(689938),
    c = n(650626),
    d = n(113207);
let _ = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: r, rows: _, character_limit: E, pattern: f },
                onChange: h,
                initialText: p,
                isRequired: m
            } = e,
            I = a.useRef(
                s.Z.reactParserFor({
                    ...s.Z.defaultRules,
                    link: l.s
                })
            ),
            [T, g] = a.useState(''),
            [S, A] = a.useState('');
        a.useEffect(() => {
            var e;
            g(null !== (e = null == p ? void 0 : p.value) && void 0 !== e ? e : '');
        }, [p]);
        let v = a.useCallback(
            (e) => {
                let t = null != f ? new RegExp(f) : null;
                null != t && null == t.exec(e)
                    ? (A(u.Z.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR),
                      h({
                          value: e,
                          isValid: !1
                      }))
                    : null != e &&
                      (A(''),
                      g(e),
                      h({
                          value: e,
                          isValid: !0
                      }));
            },
            [h, f]
        );
        return (0, i.jsxs)('div', {
            className: d.marginBottom8,
            children: [
                null != t &&
                    (0, i.jsx)('div', {
                        className: d.marginBottom8,
                        children: (0, i.jsxs)(o.Text, {
                            variant: 'text-sm/bold',
                            children: [
                                t,
                                m &&
                                    (0, i.jsx)('span', {
                                        className: c.required,
                                        children: '*'
                                    })
                            ]
                        })
                    }),
                (0, i.jsx)(o.TextArea, {
                    maxLength: E,
                    onChange: v,
                    value: T,
                    error: S,
                    rows: _,
                    placeholder: r,
                    autoFocus: !0
                }),
                null != n &&
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: I.current(n)
                        })
                    })
            ]
        });
    },
    E = (e) => {
        let { elements: t, onChange: n, state: r } = e,
            a = t.map((e) => {
                var t;
                let a = e.name;
                return (0, i.jsx)(
                    _,
                    {
                        data: e.data,
                        onChange: (e) => n(a, e.value, e.isValid),
                        initialText: null !== (t = null == r ? void 0 : r[a]) && void 0 !== t ? t : void 0,
                        isRequired: e.should_submit_data
                    },
                    a
                );
            });
        return (0, i.jsx)('div', { children: a });
    };
t.Z = E;
