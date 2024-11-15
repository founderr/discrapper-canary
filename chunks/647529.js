n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    o = n(481060),
    l = n(565138),
    a = n(430824),
    r = n(388032),
    d = n(436728),
    c = n(767688);
function u(e) {
    let { guildId: t, title: n, transitionState: u, children: x, buttons: m, onClose: h } = e,
        g = (0, s.e7)([a.Z], () => a.Z.getGuild(t));
    if (null == g) return null;
    let j = (0, i.jsx)(o.Button, {
        onClick: h,
        children: r.intl.string(r.t.i4jeWV)
    });
    return (0, i.jsxs)(o.ModalRoot, {
        transitionState: u,
        size: o.ModalSize.SMALL,
        className: d.container,
        children: [
            (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                className: d.modalHeader,
                children: [
                    (0, i.jsx)('div', { className: d.gradientSplash }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: c,
                        className: d.heroImage
                    }),
                    (0, i.jsx)(o.Spacer, { size: 16 }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: d.title,
                        children: n
                    }),
                    (0, i.jsx)(o.Spacer, { size: 4 }),
                    (0, i.jsxs)('div', {
                        className: d.guildContainer,
                        children: [
                            (0, i.jsx)(l.Z, {
                                size: l.Z.Sizes.SMOL,
                                guild: g,
                                className: d.guildIcon
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: g.name
                            })
                        ]
                    }),
                    (0, i.jsx)(o.ModalCloseButton, {
                        onClick: h,
                        innerClassName: d.closeButton,
                        className: d.close
                    })
                ]
            }),
            x,
            (0, i.jsx)(o.ModalFooter, {
                className: d.footer,
                children: (0, i.jsx)('div', {
                    className: d.footerButtons,
                    children: null != m ? m : j
                })
            })
        ]
    });
}
