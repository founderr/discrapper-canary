n.r(e),
    n.d(e, {
        default: function () {
            return p;
        },
        openInteractionModal: function () {
            return I;
        }
    });
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(112831),
    s = n(970184),
    l = n(471073),
    a = n(293979),
    c = n(954654),
    u = n(689938),
    d = n(251686);
function p(t) {
    let { title: e, onClose: n, transitionState: p } = t,
        { components: I, applicationIconURL: S, applicationName: _, submissionState: T, error: f, validators: C, onSubmit: E } = (0, a.X9)(t, n);
    return (0, i.jsx)('form', {
        onSubmit: (t) => {
            t.preventDefault(), E();
        },
        children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: p,
            children: [
                (0, i.jsxs)(o.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.Avatar, {
                            src: S,
                            size: o.AvatarSizes.SIZE_24,
                            'aria-label': _,
                            className: d.applicationIcon
                        }),
                        (0, i.jsx)(r.Z, {
                            color: r.Z.Colors.HEADER_PRIMARY,
                            size: r.Z.Sizes.SIZE_24,
                            children: e
                        }),
                        (0, i.jsx)(o.ModalCloseButton, {
                            onClick: n,
                            className: d.closeButton
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalContent, {
                    children: [
                        null != f && '' !== f
                            ? (0, i.jsx)(o.HelpMessage, {
                                  messageType: o.HelpMessageTypes.ERROR,
                                  className: d.submissionWarning,
                                  children: f
                              })
                            : null,
                        (0, i.jsx)(o.HelpMessage, {
                            messageType: o.HelpMessageTypes.WARNING,
                            className: d.submissionWarning,
                            children: u.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({ applicationName: _ })
                        }),
                        (0, i.jsx)(o.FormSection, {
                            children: (0, i.jsx)(s.Il, {
                                modal: t,
                                validators: C,
                                children: (0, c.xX)(I)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    children: [
                        (0, i.jsx)(o.Button, {
                            type: 'submit',
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.MEDIUM,
                            submitting: T === l.i.IN_FLIGHT,
                            children: u.Z.Messages.SUBMIT
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: n,
                            children: u.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function I(t) {
    (0, o.openModal)((e) =>
        (0, i.jsx)(p, {
            ...e,
            ...t
        })
    );
}
