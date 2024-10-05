n.r(t),
    n.d(t, {
        default: function () {
            return p;
        },
        openInteractionModal: function () {
            return S;
        }
    });
var i = n(735250);
n(470079);
var o = n(481060),
    r = n(112831),
    l = n(970184),
    s = n(471073),
    a = n(293979),
    u = n(954654),
    c = n(689938),
    d = n(251686);
function p(e) {
    let { title: t, onClose: n, transitionState: p } = e,
        { components: S, applicationIconURL: I, applicationName: _, submissionState: C, error: f, validators: T, onSubmit: h } = (0, a.X9)(e, n);
    return (0, i.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), h();
        },
        children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: p,
            children: [
                (0, i.jsxs)(o.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.Avatar, {
                            src: I,
                            size: o.AvatarSizes.SIZE_24,
                            'aria-label': _,
                            className: d.applicationIcon
                        }),
                        (0, i.jsx)(r.Z, {
                            color: r.Z.Colors.HEADER_PRIMARY,
                            size: r.Z.Sizes.SIZE_24,
                            children: t
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
                            children: c.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({ applicationName: _ })
                        }),
                        (0, i.jsx)(o.FormSection, {
                            children: (0, i.jsx)(l.Il, {
                                modal: e,
                                validators: T,
                                children: (0, u.xX)(S)
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
                            submitting: C === s.i.IN_FLIGHT,
                            children: c.Z.Messages.SUBMIT
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: n,
                            children: c.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function S(e) {
    (0, o.openModal)((t) =>
        (0, i.jsx)(p, {
            ...t,
            ...e
        })
    );
}
