t.r(n),
    t.d(n, {
        default: function () {
            return p;
        },
        openInteractionModal: function () {
            return f;
        }
    });
var o = t(735250);
t(470079);
var i = t(481060),
    a = t(112831),
    l = t(970184),
    r = t(471073),
    s = t(293979),
    u = t(954654),
    d = t(689938),
    c = t(167990);
function p(e) {
    let { title: n, onClose: t, transitionState: p } = e,
        { components: f, applicationIconURL: m, applicationName: h, submissionState: I, error: _, validators: g, onSubmit: C } = (0, s.X9)(e, t);
    return (0, o.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), C();
        },
        children: (0, o.jsxs)(i.ModalRoot, {
            transitionState: p,
            children: [
                (0, o.jsxs)(i.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, o.jsx)(i.Avatar, {
                            src: m,
                            size: i.AvatarSizes.SIZE_24,
                            'aria-label': h,
                            className: c.applicationIcon
                        }),
                        (0, o.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, o.jsx)(i.ModalCloseButton, {
                            onClick: t,
                            className: c.closeButton
                        })
                    ]
                }),
                (0, o.jsxs)(i.ModalContent, {
                    children: [
                        null != _ && '' !== _
                            ? (0, o.jsx)(i.HelpMessage, {
                                  messageType: i.HelpMessageTypes.ERROR,
                                  className: c.submissionWarning,
                                  children: _
                              })
                            : null,
                        (0, o.jsx)(i.HelpMessage, {
                            messageType: i.HelpMessageTypes.WARNING,
                            className: c.submissionWarning,
                            children: d.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({ applicationName: h })
                        }),
                        (0, o.jsx)(i.FormSection, {
                            children: (0, o.jsx)(l.Il, {
                                modal: e,
                                validators: g,
                                children: (0, u.xX)(f)
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
                            submitting: I === r.i.IN_FLIGHT,
                            children: d.Z.Messages.SUBMIT
                        }),
                        (0, o.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: d.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function f(e) {
    (0, i.openModal)((n) =>
        (0, o.jsx)(p, {
            ...n,
            ...e
        })
    );
}
