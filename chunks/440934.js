t.r(n),
    t.d(n, {
        default: function () {
            return _;
        },
        openInteractionModal: function () {
            return f;
        }
    });
var o = t(200651);
t(192379);
var i = t(481060),
    a = t(118012),
    r = t(970184),
    c = t(471073),
    d = t(293979),
    l = t(954654),
    s = t(388032),
    u = t(223674);
function _(e) {
    let { title: n, onClose: t, transitionState: _ } = e,
        { components: f, applicationIconURL: p, applicationName: I, submissionState: m, error: S, validators: C, onSubmit: b } = (0, d.X9)(e, t);
    return (0, o.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), b();
        },
        children: (0, o.jsxs)(i.ModalRoot, {
            transitionState: _,
            children: [
                (0, o.jsxs)(i.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, o.jsx)(i.Avatar, {
                            src: p,
                            size: i.AvatarSizes.SIZE_24,
                            'aria-label': I,
                            className: u.applicationIcon
                        }),
                        (0, o.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, o.jsx)(i.ModalCloseButton, {
                            onClick: t,
                            className: u.closeButton
                        })
                    ]
                }),
                (0, o.jsxs)(i.ModalContent, {
                    children: [
                        null != S && '' !== S
                            ? (0, o.jsx)(i.HelpMessage, {
                                  messageType: i.HelpMessageTypes.ERROR,
                                  className: u.submissionWarning,
                                  children: S
                              })
                            : null,
                        (0, o.jsx)(i.HelpMessage, {
                            messageType: i.HelpMessageTypes.WARNING,
                            className: u.submissionWarning,
                            children: s.intl.format(s.t['dSTy//'], { applicationName: I })
                        }),
                        (0, o.jsx)(i.FormSection, {
                            children: (0, o.jsx)(r.Il, {
                                modal: e,
                                validators: C,
                                children: (0, l.xX)(f)
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(i.ModalFooter, {
                    children: [
                        (0, o.jsx)(i.Button, {
                            type: 'submit',
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.MEDIUM,
                            submitting: m === c.i.IN_FLIGHT,
                            children: s.intl.string(s.t.geKm7u)
                        }),
                        (0, o.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: s.intl.string(s.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function f(e) {
    (0, i.openModal)((n) =>
        (0, o.jsx)(_, {
            ...n,
            ...e
        })
    );
}
