t.r(n),
    t.d(n, {
        default: function () {
            return m;
        }
    });
var a = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    s = t(481060),
    o = t(388905),
    l = t(313201),
    c = t(659900),
    d = t(473855),
    u = t(689938),
    p = t(881549);
function m(e) {
    let { transitionState: n, onClose: t, guildTemplate: i } = e,
        { form: m, preview: x, handleSubmit: b } = (0, c.Z)(i, !1),
        _ = (0, l.Dt)();
    return (0, a.jsx)('div', {
        children: (0, a.jsxs)(s.ModalRoot, {
            size: s.ModalSize.DYNAMIC,
            transitionState: n,
            className: r()(p.modalRoot),
            'aria-labelledby': _,
            children: [
                (0, a.jsxs)('div', {
                    className: p.modalContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: r()(p.modalSection, p.ctaSection),
                            children: (0, a.jsx)('div', {
                                className: p.ctaContainer,
                                children: (0, a.jsx)(d.Z, {
                                    guildTemplate: i,
                                    headerId: _
                                })
                            })
                        }),
                        (0, a.jsx)('div', {
                            className: r()(p.modalSection, p.formSection),
                            children: (0, a.jsxs)(s.Scroller, {
                                className: p.formContainer,
                                children: [
                                    (0, a.jsx)(o.Dx, {
                                        className: p.header,
                                        children: u.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
                                    }),
                                    m,
                                    x
                                ]
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(s.ModalFooter, {
                    className: p.modalFooter,
                    children: [
                        (0, a.jsx)(s.Button, {
                            color: s.Button.Colors.PRIMARY,
                            onClick: t,
                            children: u.Z.Messages.CLOSE
                        }),
                        (0, a.jsx)(s.Button, {
                            color: s.Button.Colors.GREEN,
                            onClick: async () => {
                                null != (await b()) && t();
                            },
                            children: u.Z.Messages.CREATE
                        })
                    ]
                })
            ]
        })
    });
}
