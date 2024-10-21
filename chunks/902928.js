n.d(e, {
    u: function () {
        return u;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(159277),
    s = n(481060),
    i = n(689938),
    l = n(715802),
    c = n(290661);
let u = (t) => {
    let { onComplete: e, data: n } = t,
        u = null,
        d = (0, r.useId)();
    return (
        (n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID) &&
            (u = (0, a.jsx)('img', {
                src: c,
                width: '241',
                height: '118',
                alt: '',
                'aria-labelledby': d
            })),
        (0, a.jsxs)('div', {
            className: l.bodyContent,
            children: [
                u,
                (0, a.jsx)(s.Heading, {
                    className: l.title,
                    variant: 'heading-xl/extrabold',
                    id: d,
                    children: i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE
                }),
                null != n.twoWayLinkCode
                    ? (0, a.jsx)(s.Text, {
                          tag: 'p',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY
                      })
                    : null,
                (0, a.jsx)(s.Button, {
                    className: l.footerButton,
                    color: s.Button.Colors.BRAND,
                    onClick: e,
                    children: i.Z.Messages.DONE
                })
            ]
        })
    );
};
