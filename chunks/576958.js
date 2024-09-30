a.d(n, {
    Z: function () {
        return d;
    }
});
var i = a(735250);
a(470079);
var t = a(481060),
    r = a(463571),
    l = a(744142),
    s = a(981631),
    o = a(689938),
    c = a(558562);
function d(e) {
    let { applications: n, className: a, listingClassName: l, title: d, showViewAll: _, onViewOne: m, onViewAll: p } = e;
    return (0, i.jsxs)('div', {
        className: a,
        children: [
            null != d
                ? (0, i.jsxs)('div', {
                      className: c.header,
                      children: [
                          (0, i.jsx)(t.Heading, {
                              variant: 'heading-lg/semibold',
                              children: d
                          }),
                          _
                              ? (0, i.jsx)(t.Button, {
                                    look: t.Button.Looks.LINK,
                                    color: t.Button.Colors.LINK,
                                    onClick: p,
                                    children: o.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
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
                            href: s.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, i.jsx)(u, {
                                className: l,
                                application: e,
                                onClick: (n) => {
                                    let { mutualGuilds: a } = n;
                                    return m({
                                        application: e,
                                        mutualGuilds: a
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
