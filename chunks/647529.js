n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    o = n(481060),
    l = n(565138),
    a = n(430824),
    r = n(63063),
    d = n(981631),
    c = n(388032),
    u = n(436728),
    x = n(767688);
function m(e) {
    let { guildId: t, title: n, transitionState: m, children: h, buttons: g, onClose: j } = e,
        _ = (0, s.e7)([a.Z], () => a.Z.getGuild(t));
    if (null == _) return null;
    let f = (0, i.jsx)(o.Button, {
        onClick: j,
        children: c.intl.string(c.t.i4jeWV)
    });
    return (0, i.jsxs)(o.ModalRoot, {
        transitionState: m,
        size: o.ModalSize.SMALL,
        className: u.container,
        children: [
            (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, i.jsx)('div', { className: u.gradientSplash }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: x,
                        className: u.heroImage
                    }),
                    (0, i.jsx)(o.Spacer, { size: 16 }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: n
                    }),
                    (0, i.jsx)(o.Spacer, { size: 4 }),
                    (0, i.jsxs)('div', {
                        className: u.guildContainer,
                        children: [
                            (0, i.jsx)(l.Z, {
                                size: l.Z.Sizes.SMOL,
                                guild: _,
                                className: u.guildIcon
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: _.name
                            })
                        ]
                    }),
                    (0, i.jsx)(o.ModalCloseButton, {
                        onClick: j,
                        innerClassName: u.closeButton,
                        className: u.close
                    })
                ]
            }),
            h,
            (0, i.jsxs)(o.ModalFooter, {
                className: u.footer,
                children: [
                    (0, i.jsx)('div', {
                        className: u.footerButtons,
                        children: null != g ? g : f
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: c.intl.format(c.t.zbMH0d, { link: r.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD) })
                    })
                ]
            })
        ]
    });
}
