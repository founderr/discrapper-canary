var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(387640),
    l = n(113207);
let u = (e) => {
        let { element: t, onChange: n, initialOption: r } = e,
            [u, c] = a.useState('');
        a.useEffect(() => {
            c(null != r ? r : '');
        }, [r]);
        let d = t.name,
            { title: _, options: E } = t.data,
            f = a.useCallback(
                (e) => {
                    null != e && (c(e), n(e));
                },
                [n]
            );
        return (0, i.jsxs)(
            'div',
            {
                className: l.marginBottom8,
                children: [
                    null != _ &&
                        (0, i.jsx)('div', {
                            className: l.marginBottom8,
                            children: (0, i.jsxs)(o.Text, {
                                variant: 'text-sm/bold',
                                children: [
                                    _,
                                    t.should_submit_data &&
                                        (0, i.jsx)('span', {
                                            className: s.required,
                                            children: '*'
                                        })
                                ]
                            })
                        }),
                    (0, i.jsx)(o.SingleSelect, {
                        value: u,
                        onChange: f,
                        options: E
                    })
                ]
            },
            d
        );
    },
    c = (e) => {
        let { elements: t, onChange: n, state: r } = e,
            a = t.map((e) => {
                var t, a;
                let o = e.name;
                return (0, i.jsx)(
                    u,
                    {
                        element: e,
                        initialOption: null !== (a = null == r ? void 0 : null === (t = r[o]) || void 0 === t ? void 0 : t.value) && void 0 !== a ? a : void 0,
                        onChange: (e) => n(o, e)
                    },
                    o
                );
            });
        return (0, i.jsx)('div', { children: a });
    };
t.Z = c;
