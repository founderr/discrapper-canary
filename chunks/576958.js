n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    r = n(463571),
    l = n(744142),
    o = n(981631),
    s = n(388032),
    c = n(535040);
function d(e) {
    let { applications: t, className: n, listingClassName: l, title: d, showViewAll: p, onViewOne: m, onViewAll: _ } = e;
    return (0, i.jsxs)('div', {
        className: n,
        children: [
            null != d
                ? (0, i.jsxs)('div', {
                      className: c.header,
                      children: [
                          (0, i.jsx)(a.Heading, {
                              variant: 'heading-lg/semibold',
                              children: d
                          }),
                          p
                              ? (0, i.jsx)(a.Button, {
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.LINK,
                                    onClick: _,
                                    children: s.intl.string(s.t['e+T3go'])
                                })
                              : null
                      ]
                  })
                : null,
            (0, i.jsx)('ul', {
                className: c.list,
                children: t.map((e) =>
                    (0, i.jsx)(
                        r.Z,
                        {
                            href: o.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, i.jsx)(u, {
                                className: l,
                                application: e,
                                onClick: (t) => {
                                    let { mutualGuilds: n } = t;
                                    return m({
                                        application: e,
                                        mutualGuilds: n
                                    });
                                }
                            })
                        },
                        e.id
                    )
                )
            })
        ]
    });
}
function u(e) {
    return (0, i.jsx)(l.Z, { ...e });
}
