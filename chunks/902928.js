n.d(e, {
    u: function () {
        return f;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(159277),
    s = n(243814),
    c = n(481060),
    i = n(689938),
    l = n(715802),
    u = n(942605),
    d = n(534345);
let f = (t) => {
    let { onComplete: e, data: n } = t,
        f = (0, r.useId)(),
        _ = null,
        p = null;
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? (_ = u.Z) : n.scopes.includes(s.x.SDK_SOCIAL_LAYER) && (_ = d.Z),
        null != n.twoWayLinkCode ? (p = i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY) : n.scopes.includes(s.x.SDK_SOCIAL_LAYER) && (p = i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_SOCIAL_LAYER_BODY),
        (0, a.jsxs)('div', {
            className: l.content,
            children: [
                null != _
                    ? (0, a.jsx)('img', {
                          src: _,
                          className: l.artwork,
                          alt: '',
                          'aria-labelledby': f
                      })
                    : null,
                (0, a.jsxs)('div', {
                    className: l.innerContent,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: 'heading-xl/extrabold',
                            id: f,
                            children: i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE
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
                    className: l.footerButton,
                    color: c.Button.Colors.BRAND,
                    onClick: e,
                    children: i.Z.Messages.DONE
                })
            ]
        })
    );
};
