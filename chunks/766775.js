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
    l = t(481060),
    o = t(388905),
    s = t(313201),
    c = t(659900),
    d = t(473855),
    u = t(388032),
    p = t(881549);
function m(e) {
    let { transitionState: n, onClose: t, guildTemplate: i } = e,
        { form: m, preview: x, handleSubmit: b } = (0, c.Z)(i, !1),
        h = (0, s.Dt)();
    return (0, a.jsx)('div', {
        children: (0, a.jsxs)(l.ModalRoot, {
            size: l.ModalSize.DYNAMIC,
            transitionState: n,
            className: r()(p.modalRoot),
            'aria-labelledby': h,
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
                                    headerId: h
                                })
                            })
                        }),
                        (0, a.jsx)('div', {
                            className: r()(p.modalSection, p.formSection),
                            children: (0, a.jsxs)(l.Scroller, {
                                className: p.formContainer,
                                children: [
                                    (0, a.jsx)(o.Dx, {
                                        className: p.header,
                                        children: u.intl.string(u.t.UNFvtL)
                                    }),
                                    m,
                                    x
                                ]
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(l.ModalFooter, {
                    className: p.modalFooter,
                    children: [
                        (0, a.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            onClick: t,
                            children: u.intl.string(u.t.cpT0Cg)
                        }),
                        (0, a.jsx)(l.Button, {
                            color: l.Button.Colors.GREEN,
                            onClick: async () => {
                                null != (await b()) && t();
                            },
                            children: u.intl.string(u.t.CumH4u)
                        })
                    ]
                })
            ]
        })
    });
}
