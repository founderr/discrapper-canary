i.d(t, {
    Z: function () {
        return h;
    }
});
var n = i(200651);
i(192379);
var a = i(481060),
    r = i(782568),
    o = i(626135),
    l = i(132871),
    s = i(981631),
    c = i(388032),
    d = i(741079),
    u = i(820305);
function h() {
    let e = (0, l.useApplicationDirectoryHistory)((e) => e.guildId);
    return (0, n.jsxs)('div', {
        className: d.container,
        role: 'contentinfo',
        children: [
            (0, n.jsx)('img', {
                className: d.image,
                src: u,
                alt: ''
            }),
            (0, n.jsxs)('div', {
                className: d.content,
                children: [
                    (0, n.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        children: c.intl.string(c.t['mKC+Ii'])
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: c.intl.string(c.t.jDmham)
                    })
                ]
            }),
            (0, n.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                onClick: function () {
                    o.default.track(s.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        cta: 'new_to_apps',
                        current_page: l.ApplicationDirectoryViews.HOME,
                        guild_id: e
                    }),
                        (0, r.Z)('https://discord.com/blog/how-to-use-discord-apps');
                },
                className: d.button,
                children: c.intl.string(c.t['B90I9/'])
            })
        ]
    });
}
