e.r(t),
    e.d(t, {
        default: function () {
            return _;
        }
    });
var r = e(200651);
e(192379);
var i = e(481060),
    c = e(313201),
    l = e(471253),
    o = e(930180),
    s = e(46920),
    a = e(939863),
    d = e(388032),
    u = e(851836);
function _(n) {
    let { channel: t, transitionState: e, onClose: _, ...h } = n,
        m = (0, c.Dt)(),
        g = (0, o._d)(t.id),
        f = async () => {
            await (0, l.yi)(t), _();
        },
        E = async () => {
            await (0, l.RK)(t, !1), _();
        };
    return (0, r.jsx)(i.ModalRoot, {
        transitionState: e,
        'aria-labelledby': m,
        ...h,
        size: i.ModalSize.SMALL,
        children: (0, r.jsxs)(i.ModalContent, {
            className: u.content,
            children: [
                (0, r.jsx)(a.Z, {
                    children: (0, r.jsx)('div', {
                        className: u.stageIconBackground,
                        children: (0, r.jsx)(i.StageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 40,
                            height: 40,
                            className: u.stageIcon
                        })
                    })
                }),
                (0, r.jsx)(i.Heading, {
                    id: m,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: u.headerTitle,
                    children: d.intl.string(d.t.njetU1)
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: u.headerSubtitle,
                    children: d.intl.string(d.t.LQY4JS)
                }),
                g > 0 && (0, r.jsx)(s.mv, { channelId: t.id }),
                (0, r.jsxs)('div', {
                    className: u.buttonsContainer,
                    children: [
                        (0, r.jsxs)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: E,
                            children: [
                                (0, r.jsx)('div', {
                                    className: u.icon,
                                    children: (0, r.jsx)(i.MicrophoneIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.intl.string(d.t['Q8o/tb'])
                            ]
                        }),
                        (0, r.jsxs)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: f,
                            children: [
                                (0, r.jsx)('div', {
                                    className: u.icon,
                                    children: (0, r.jsx)(i.GroupIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.intl.string(d.t['N3/Oyc'])
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
