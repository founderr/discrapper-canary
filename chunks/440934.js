o.r(n),
    o.d(n, {
        default: function () {
            return f;
        },
        openInteractionModal: function () {
            return _;
        }
    });
var t = o(735250);
o(470079);
var i = o(481060),
    a = o(112831),
    r = o(970184),
    l = o(471073),
    c = o(293979),
    d = o(954654),
    s = o(689938),
    u = o(167990);
function f(e) {
    let { title: n, onClose: o, transitionState: f } = e,
        { components: _, applicationIconURL: p, applicationName: m, submissionState: I, error: h, validators: b, onSubmit: C } = (0, c.X9)(e, o);
    return (0, t.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), C();
        },
        children: (0, t.jsxs)(i.ModalRoot, {
            transitionState: f,
            children: [
                (0, t.jsxs)(i.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, t.jsx)(i.Avatar, {
                            src: p,
                            size: i.AvatarSizes.SIZE_24,
                            'aria-label': m,
                            className: u.applicationIcon
                        }),
                        (0, t.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, t.jsx)(i.ModalCloseButton, {
                            onClick: o,
                            className: u.closeButton
                        })
                    ]
                }),
                (0, t.jsxs)(i.ModalContent, {
                    children: [
                        null != h && '' !== h
                            ? (0, t.jsx)(i.HelpMessage, {
                                  messageType: i.HelpMessageTypes.ERROR,
                                  className: u.submissionWarning,
                                  children: h
                              })
                            : null,
                        (0, t.jsx)(i.HelpMessage, {
                            messageType: i.HelpMessageTypes.WARNING,
                            className: u.submissionWarning,
                            children: s.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({ applicationName: m })
                        }),
                        (0, t.jsx)(i.FormSection, {
                            children: (0, t.jsx)(r.Il, {
                                modal: e,
                                validators: b,
                                children: (0, d.xX)(_)
                            })
                        })
                    ]
                }),
                (0, t.jsxs)(i.ModalFooter, {
                    children: [
                        (0, t.jsx)(i.Button, {
                            type: 'submit',
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.MEDIUM,
                            submitting: I === l.i.IN_FLIGHT,
                            children: s.Z.Messages.SUBMIT
                        }),
                        (0, t.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: o,
                            children: s.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function _(e) {
    (0, i.openModal)((n) =>
        (0, t.jsx)(f, {
            ...n,
            ...e
        })
    );
}
