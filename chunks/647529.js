s.d(t, {
    Z: function () {
        return u;
    }
});
var n = s(200651);
s(192379);
var o = s(442837),
    a = s(481060),
    l = s(565138),
    i = s(430824),
    r = s(689938),
    d = s(583117),
    c = s(767688);
function u(e) {
    let { guildId: t, title: s, transitionState: u, children: x, buttons: m, onClose: h } = e,
        _ = (0, o.e7)([i.Z], () => i.Z.getGuild(t));
    if (null == _) return null;
    let g = (0, n.jsx)(a.Button, {
        onClick: h,
        children: r.Z.Messages.DONE
    });
    return (0, n.jsxs)(a.ModalRoot, {
        transitionState: u,
        size: a.ModalSize.SMALL,
        className: d.container,
        children: [
            (0, n.jsxs)(a.ModalHeader, {
                separator: !1,
                className: d.modalHeader,
                children: [
                    (0, n.jsx)('div', { className: d.gradientSplash }),
                    (0, n.jsx)('img', {
                        alt: '',
                        src: c,
                        className: d.heroImage
                    }),
                    (0, n.jsx)(a.Spacer, { size: 16 }),
                    (0, n.jsx)(a.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: d.title,
                        children: s
                    }),
                    (0, n.jsx)(a.Spacer, { size: 4 }),
                    (0, n.jsxs)('div', {
                        className: d.guildContainer,
                        children: [
                            (0, n.jsx)(l.Z, {
                                size: l.Z.Sizes.SMOL,
                                guild: _,
                                className: d.guildIcon
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: _.name
                            })
                        ]
                    }),
                    (0, n.jsx)(a.ModalCloseButton, {
                        onClick: h,
                        innerClassName: d.closeButton,
                        className: d.close
                    })
                ]
            }),
            x,
            (0, n.jsx)(a.ModalFooter, {
                className: d.footer,
                children: (0, n.jsx)('div', {
                    className: d.footerButtons,
                    children: null != m ? m : g
                })
            })
        ]
    });
}
