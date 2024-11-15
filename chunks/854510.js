t.r(n),
    t.d(n, {
        default: function () {
            return d;
        }
    });
var r = t(200651);
t(192379);
var c = t(481060),
    s = t(313201),
    o = t(930180),
    i = t(46920),
    l = t(388032),
    a = t(18201);
function d(e) {
    let { channel: n, onAccept: t, transitionState: d, onClose: u, ...x } = e,
        m = (0, s.Dt)(),
        h = (0, o.z)(n.id);
    return (0, r.jsxs)(c.ModalRoot, {
        transitionState: d,
        'aria-labelledby': m,
        ...x,
        size: c.ModalSize.SMALL,
        children: [
            (0, r.jsxs)(c.ModalHeader, {
                className: a.header,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        children: l.intl.format(l.t.HviVAw, { number: h.length })
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        className: a.description,
                        variant: 'text-sm/normal',
                        children: l.intl.format(l.t['28qZMT'], { number: h.length })
                    })
                ]
            }),
            (0, r.jsx)(c.ModalContent, {
                className: a.content,
                children: h.map((e) => {
                    let { user: t, id: c, speaker: s } = e;
                    return (0, r.jsx)(
                        i.Xd,
                        {
                            user: t,
                            speaker: s,
                            showStatus: !0,
                            channelId: n.id
                        },
                        c
                    );
                })
            }),
            (0, r.jsxs)(c.ModalFooter, {
                className: a.footer,
                children: [
                    (0, r.jsx)(c.Button, {
                        onClick: () => {
                            t(n), u();
                        },
                        color: c.Button.Colors.BRAND,
                        children: l.intl.string(l.t.mbD50N)
                    }),
                    (0, r.jsx)(c.Button, {
                        onClick: () => {
                            u();
                        },
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.LINK,
                        children: l.intl.string(l.t.CZGqeX)
                    })
                ]
            })
        ]
    });
}
