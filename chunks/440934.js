n.r(e),
    n.d(e, {
        default: function () {
            return I;
        },
        openInteractionModal: function () {
            return S;
        }
    });
var i = n(735250);
n(470079);
var s = n(481060),
    o = n(112831),
    r = n(970184),
    l = n(471073),
    a = n(293979),
    c = n(954654),
    u = n(689938),
    d = n(251686);
function I(t) {
    let { title: e, onClose: n, transitionState: I } = t,
        { components: S, applicationIconURL: _, applicationName: p, submissionState: T, error: C, validators: f, onSubmit: E } = (0, a.X9)(t, n);
    return (0, i.jsx)('form', {
        onSubmit: (t) => {
            t.preventDefault(), E();
        },
        children: (0, i.jsxs)(s.ModalRoot, {
            transitionState: I,
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.Avatar, {
                            src: _,
                            size: s.AvatarSizes.SIZE_24,
                            'aria-label': p,
                            className: d.applicationIcon
                        }),
                        (0, i.jsx)(o.Z, {
                            color: o.Z.Colors.HEADER_PRIMARY,
                            size: o.Z.Sizes.SIZE_24,
                            children: e
                        }),
                        (0, i.jsx)(s.ModalCloseButton, {
                            onClick: n,
                            className: d.closeButton
                        })
                    ]
                }),
                (0, i.jsxs)(s.ModalContent, {
                    children: [
                        null != C && '' !== C
                            ? (0, i.jsx)(s.HelpMessage, {
                                  messageType: s.HelpMessageTypes.ERROR,
                                  className: d.submissionWarning,
                                  children: C
                              })
                            : null,
                        (0, i.jsx)(s.HelpMessage, {
                            messageType: s.HelpMessageTypes.WARNING,
                            className: d.submissionWarning,
                            children: u.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({ applicationName: p })
                        }),
                        (0, i.jsx)(s.FormSection, {
                            children: (0, i.jsx)(r.Il, {
                                modal: t,
                                validators: f,
                                children: (0, c.xX)(S)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(s.ModalFooter, {
                    children: [
                        (0, i.jsx)(s.Button, {
                            type: 'submit',
                            color: s.Button.Colors.BRAND,
                            size: s.Button.Sizes.MEDIUM,
                            submitting: T === l.i.IN_FLIGHT,
                            children: u.Z.Messages.SUBMIT
                        }),
                        (0, i.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            onClick: n,
                            children: u.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function S(t) {
    (0, s.openModal)((e) =>
        (0, i.jsx)(I, {
            ...e,
            ...t
        })
    );
}
