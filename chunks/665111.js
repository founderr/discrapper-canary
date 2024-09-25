n.r(s),
    n.d(s, {
        default: function () {
            return _;
        }
    });
var c = n(735250);
n(470079);
var t = n(481060),
    o = n(313201),
    a = n(471253),
    r = n(930180),
    i = n(582019),
    l = n(939863),
    d = n(689938),
    u = n(851836);
function _(e) {
    let { channel: s, transitionState: n, onClose: _, ...I } = e,
        m = (0, o.Dt)(),
        x = (0, r._d)(s.id),
        h = async () => {
            await (0, a.yi)(s), _();
        },
        E = async () => {
            await (0, a.RK)(s, !1), _();
        };
    return (0, c.jsx)(t.ModalRoot, {
        transitionState: n,
        'aria-labelledby': m,
        ...I,
        size: t.ModalSize.SMALL,
        children: (0, c.jsxs)(t.ModalContent, {
            className: u.content,
            children: [
                (0, c.jsx)(l.Z, {
                    children: (0, c.jsx)('div', {
                        className: u.stageIconBackground,
                        children: (0, c.jsx)(t.StageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 40,
                            height: 40,
                            className: u.stageIcon
                        })
                    })
                }),
                (0, c.jsx)(t.Heading, {
                    id: m,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: u.headerTitle,
                    children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                }),
                (0, c.jsx)(t.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: u.headerSubtitle,
                    children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                }),
                x > 0 && (0, c.jsx)(i.mv, { channelId: s.id }),
                (0, c.jsxs)('div', {
                    className: u.buttonsContainer,
                    children: [
                        (0, c.jsxs)(t.Button, {
                            color: t.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: E,
                            children: [
                                (0, c.jsx)('div', {
                                    className: u.icon,
                                    children: (0, c.jsx)(t.MicrophoneIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER
                            ]
                        }),
                        (0, c.jsxs)(t.Button, {
                            color: t.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: h,
                            children: [
                                (0, c.jsx)('div', {
                                    className: u.icon,
                                    children: (0, c.jsx)(t.GroupIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
