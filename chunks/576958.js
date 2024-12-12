n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    r = n(463571),
    o = n(744142),
    l = n(981631),
    s = n(388032),
    c = n(535040);
function d(e) {
    let { applications: t, className: n, listingClassName: o, title: d, showViewAll: p, onViewOne: m, onViewAll: _ } = e;
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
                children: t.map((e, t) =>
                    (0, i.jsx)(
                        r.Z,
                        {
                            href: l.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, i.jsx)(u, {
                                className: o,
                                application: e,
                                onClick: (n) => {
                                    let { mutualGuilds: i } = n;
                                    return m({
                                        application: e,
                                        mutualGuilds: i,
                                        index: t
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
    return (0, i.jsx)(o.Z, { ...e });
}
