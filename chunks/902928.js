n.d(t, {
    u: function () {
        return f;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(159277),
    i = n(243814),
    c = n(481060),
    l = n(388032),
    s = n(577125),
    d = n(942605),
    u = n(534345);
let f = (e) => {
    let { onComplete: t, data: n } = e,
        f = (0, r.useId)(),
        x = null,
        p = null;
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? (x = d.Z) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (x = u.Z),
        null != n.twoWayLinkCode ? (p = l.intl.string(l.t.QhATl5)) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (p = l.intl.string(l.t.vBPvKy)),
        (0, a.jsxs)('div', {
            className: s.content,
            children: [
                null != x
                    ? (0, a.jsx)('img', {
                          src: x,
                          className: s.artwork,
                          alt: '',
                          'aria-labelledby': f
                      })
                    : null,
                (0, a.jsxs)('div', {
                    className: s.innerContent,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: 'heading-xl/extrabold',
                            id: f,
                            children: l.intl.string(l.t.qDtJmJ)
                        }),
                        null != p
                            ? (0, a.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  children: p
                              })
                            : null
                    ]
                }),
                (0, a.jsx)(c.Button, {
                    className: s.footerButton,
                    color: c.Button.Colors.BRAND,
                    onClick: t,
                    children: l.intl.string(l.t.i4jeWV)
                })
            ]
        })
    );
};
