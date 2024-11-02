e.r(t),
    e.d(t, {
        default: function () {
            return _;
        }
    });
var i = e(200651);
e(192379);
var r = e(481060),
    c = e(313201),
    l = e(471253),
    s = e(930180),
    o = e(582019),
    a = e(939863),
    d = e(388032),
    u = e(851836);
function _(n) {
    let { channel: t, transitionState: e, onClose: _, ...h } = n,
        m = (0, c.Dt)(),
        g = (0, s._d)(t.id),
        f = async () => {
            await (0, l.yi)(t), _();
        },
        p = async () => {
            await (0, l.RK)(t, !1), _();
        };
    return (0, i.jsx)(r.ModalRoot, {
        transitionState: e,
        'aria-labelledby': m,
        ...h,
        size: r.ModalSize.SMALL,
        children: (0, i.jsxs)(r.ModalContent, {
            className: u.content,
            children: [
                (0, i.jsx)(a.Z, {
                    children: (0, i.jsx)('div', {
                        className: u.stageIconBackground,
                        children: (0, i.jsx)(r.StageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 40,
                            height: 40,
                            className: u.stageIcon
                        })
                    })
                }),
                (0, i.jsx)(r.Heading, {
                    id: m,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: u.headerTitle,
                    children: d.intl.string(d.t.njetU1)
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: u.headerSubtitle,
                    children: d.intl.string(d.t.LQY4JS)
                }),
                g > 0 && (0, i.jsx)(o.mv, { channelId: t.id }),
                (0, i.jsxs)('div', {
                    className: u.buttonsContainer,
                    children: [
                        (0, i.jsxs)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: p,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.icon,
                                    children: (0, i.jsx)(r.MicrophoneIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.intl.string(d.t['Q8o/tb'])
                            ]
                        }),
                        (0, i.jsxs)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: f,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.icon,
                                    children: (0, i.jsx)(r.GroupIcon, {
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
