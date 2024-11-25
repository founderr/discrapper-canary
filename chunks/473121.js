var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(454585),
    o = n(273744),
    l = n(388032),
    u = n(494045);
t.Z = (e) => {
    let {
            node: { header: t, subheader: n, button: c }
        } = e,
        d = (null == c ? void 0 : c.type) === 'submit',
        f = i.useRef(
            s.Z.reactParserFor({
                ...s.Z.defaultRules,
                link: o.s
            })
        );
    return (0, r.jsxs)('div', {
        className: u.headerContainer,
        children: [
            null != t && '' !== t
                ? (0, r.jsx)(a.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      children: t
                  })
                : null,
            null != n && '' !== t
                ? (0, r.jsx)(a.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: f.current(n)
                  })
                : null,
            d &&
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    children: l.intl.format(l.t.Q0tSKS, {})
                })
        ]
    });
};
