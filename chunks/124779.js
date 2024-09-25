t.r(s),
    t.d(s, {
        default: function () {
            return u;
        }
    });
var n = t(735250);
t(470079);
var c = t(481060),
    o = t(287734),
    a = t(313201),
    r = t(471253),
    l = t(939863),
    i = t(689938),
    d = t(101957);
function u(e) {
    let { channel: s, transitionState: t, onClose: u } = e,
        I = (0, a.Dt)();
    function _() {
        o.default.disconnect(), u();
    }
    return (0, n.jsxs)(c.ModalRoot, {
        transitionState: t,
        'aria-labelledby': I,
        children: [
            (0, n.jsxs)(c.ModalContent, {
                className: d.content,
                children: [
                    (0, n.jsx)(l.Z, {
                        children: (0, n.jsx)('div', {
                            className: d.iconBackground,
                            children: (0, n.jsx)(c.StageXIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: d.headerIcon
                            })
                        })
                    }),
                    (0, n.jsx)(c.Heading, {
                        id: I,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: d.title,
                        children: i.Z.Messages.EXPLICIT_END_STAGE_TITLE
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.subtitle,
                        children: i.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE
                    })
                ]
            }),
            (0, n.jsxs)(c.ModalFooter, {
                children: [
                    (0, n.jsx)(c.Button, {
                        color: c.Button.Colors.RED,
                        onClick: function () {
                            (0, r.NZ)(s), _();
                        },
                        children: i.Z.Messages.EXPLICIT_END_STAGE_CONFIRM
                    }),
                    (0, n.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        className: d.cancelButton,
                        onClick: _,
                        children: i.Z.Messages.EXPLICIT_END_STAGE_CANCEL
                    })
                ]
            })
        ]
    });
}
