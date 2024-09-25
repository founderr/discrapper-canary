t.d(n, {
    Z: function () {
        return u;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(782568),
    s = t(626135),
    r = t(132871),
    c = t(981631),
    o = t(689938),
    d = t(862661);
function u(e) {
    let { guildId: n } = e;
    return (0, a.jsxs)('div', {
        className: d.container,
        children: [
            (0, a.jsx)('img', {
                className: d.image,
                src: t(731914),
                alt: ''
            }),
            (0, a.jsxs)('div', {
                className: d.content,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: 'heading-md/extrabold',
                        children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
                    })
                ]
            }),
            (0, a.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                onClick: function () {
                    s.default.track(c.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        cta: 'submit_music_app',
                        current_page: r.ApplicationDirectoryViews.SEARCH,
                        guild_id: n
                    }),
                        (0, l.Z)('https://dis.gd/music-search-page-inclusion');
                },
                color: i.Button.Colors.TRANSPARENT,
                className: d.button,
                children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
            })
        ]
    });
}
