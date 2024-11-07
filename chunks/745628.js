t(47120);
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    s = t(481060),
    o = t(18100),
    l = t(308083),
    c = t(388032),
    d = t(306882);
n.Z = (e) => {
    var n, t, a;
    let { guildId: u, handleUpdate: m, progress: f, errors: h } = e,
        { wildcardDescriptors: x, description: p } = f,
        g = (e, n) => {
            let t = [...x];
            (t[n] = e), m({ wildcardDescriptors: t });
        };
    return (0, r.jsxs)('div', {
        className: d.slideContent,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-xxl/medium',
                className: d.title,
                children: c.intl.string(c.t.pdVsBA)
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: d.subtitle,
                children: c.intl.string(c.t.E1L1o6)
            }),
            (null == h ? void 0 : h.description) != null &&
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: d.errorText,
                    children: h.description
                }),
            (0, r.jsxs)('div', {
                className: d.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: d.mainPanelContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: d.maxWidthContainer,
                                children: (0, r.jsx)(s.TextArea, {
                                    className: d.input,
                                    maxLength: l.Us,
                                    onChange: (e) => m({ description: e }),
                                    value: null != p ? p : '',
                                    rows: 5,
                                    autoFocus: !0,
                                    autosize: !0,
                                    placeholder: c.intl.string(c.t['/pfXKi'])
                                })
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                className: d.optionalTag,
                                children: c.intl.string(c.t['vWEL6+'])
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: d.title,
                                children: c.intl.string(c.t['2g9zfX'])
                            }),
                            (null == h ? void 0 : h.wildcardDescriptors) != null &&
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'status-danger',
                                    className: d.errorText,
                                    children: h.wildcardDescriptors
                                }),
                            (0, r.jsxs)('div', {
                                className: d.wildcardRow,
                                children: [
                                    (0, r.jsx)(s.TextInput, {
                                        inputClassName: i()(d.input, d.wildcardInput),
                                        value: null !== (n = x[0]) && void 0 !== n ? n : '',
                                        onChange: (e) => g(e, 0),
                                        maxLength: l.TY,
                                        placeholder: l.LK['0']
                                    }),
                                    (0, r.jsx)(s.TextInput, {
                                        inputClassName: i()(d.input, d.wildcardInput),
                                        value: null !== (t = x[1]) && void 0 !== t ? t : '',
                                        onChange: (e) => g(e, 1),
                                        maxLength: l.TY,
                                        placeholder: l.LK['1']
                                    }),
                                    (0, r.jsx)(s.TextInput, {
                                        inputClassName: i()(d.input, d.wildcardInput),
                                        value: null !== (a = x[2]) && void 0 !== a ? a : '',
                                        onChange: (e) => g(e, 2),
                                        maxLength: l.TY,
                                        placeholder: l.LK['2']
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: d.fixedWidthSidebar,
                        children: (0, r.jsx)(o.Z, {
                            guildId: u,
                            progress: f,
                            maskTraits: !0
                        })
                    })
                ]
            })
        ]
    });
};
