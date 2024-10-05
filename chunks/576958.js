t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(463571),
    o = t(744142),
    l = t(981631),
    s = t(689938),
    c = t(558562);
function d(e) {
    let { applications: n, className: t, listingClassName: o, title: d, showViewAll: _, onViewOne: p, onViewAll: m } = e;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            null != d
                ? (0, i.jsxs)('div', {
                      className: c.header,
                      children: [
                          (0, i.jsx)(a.Heading, {
                              variant: 'heading-lg/semibold',
                              children: d
                          }),
                          _
                              ? (0, i.jsx)(a.Button, {
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.LINK,
                                    onClick: m,
                                    children: s.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
                                })
                              : null
                      ]
                  })
                : null,
            (0, i.jsx)('ul', {
                className: c.list,
                children: n.map((e) =>
                    (0, i.jsx)(
                        r.Z,
                        {
                            href: l.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, i.jsx)(u, {
                                className: o,
                                application: e,
                                onClick: (n) => {
                                    let { mutualGuilds: t } = n;
                                    return p({
                                        application: e,
                                        mutualGuilds: t
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
