n.d(a, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var t = n(481060),
    r = n(463571),
    l = n(744142),
    s = n(981631),
    o = n(689938),
    c = n(558562);
function d(e) {
    let { applications: a, className: n, listingClassName: l, title: d, showViewAll: _, onViewOne: p, onViewAll: m } = e;
    return (0, i.jsxs)('div', {
        className: n,
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
                                    onClick: m,
                                    children: o.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
                                })
                              : null
                      ]
                  })
                : null,
            (0, i.jsx)('ul', {
                className: c.list,
                children: a.map((e) =>
                    (0, i.jsx)(
                        r.Z,
                        {
                            href: s.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, i.jsx)(u, {
                                className: l,
                                application: e,
                                onClick: (a) => {
                                    let { mutualGuilds: n } = a;
                                    return p({
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
