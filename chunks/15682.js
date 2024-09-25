var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(632031);
let s = (e) => {
        let { onChange: t, label: n, subtitle: r, selected: s } = e;
        return (0, i.jsx)('div', {
            className: o.checkboxRow,
            children: (0, i.jsxs)(a.Checkbox, {
                type: a.Checkbox.Types.INVERTED,
                onChange: () => t(),
                value: s,
                children: [
                    (0, i.jsx)(a.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != r
                        ? (0, i.jsx)(a.Text, {
                              color: 'interactive-active',
                              variant: 'text-sm/normal',
                              children: r
                          })
                        : null
                ]
            })
        });
    },
    l = (e) => {
        let { element: t, state: n, onChange: r } = e;
        if ((null == t ? void 0 : t.type) !== 'checkbox') return null;
        let { data: a } = t;
        return (0, i.jsx)('div', {
            children: a.map((e, t) => {
                let [a, o, l] = e;
                return (0, i.jsx)(
                    s,
                    {
                        onChange: () => r(a, o),
                        selected: a in n,
                        label: o,
                        subtitle: l
                    },
                    ''.concat(t, '+button')
                );
            })
        });
    };
t.Z = l;
