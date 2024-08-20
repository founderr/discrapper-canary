t.r(n),
    t.d(n, {
        default: function () {
            return f;
        },
        openInteractionModal: function () {
            return m;
        }
    });
var o = t(735250);
t(470079);
var i = t(481060),
    a = t(112831),
    r = t(777036),
    l = t(970184),
    s = t(471073),
    u = t(293979),
    d = t(954654),
    c = t(689938),
    p = t(167990);
function f(e) {
    let { title: n, onClose: t, transitionState: f } = e,
        { components: m, applicationIconURL: h, applicationName: I, submissionState: _, error: C, validators: g, onSubmit: b } = (0, u.X9)(e, t);
    return (0, o.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), b();
        },
        children: (0, o.jsxs)(i.ModalRoot, {
            transitionState: f,
            children: [
                (0, o.jsxs)(i.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, o.jsx)(i.Avatar, {
                            src: h,
                            size: i.AvatarSizes.SIZE_24,
                            'aria-label': I,
                            className: p.applicationIcon
                        }),
                        (0, o.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, o.jsx)(i.ModalCloseButton, {
                            onClick: t,
                            className: p.closeButton
                        })
                    ]
                }),
                (0, o.jsxs)(i.ModalContent, {
                    children: [
                        null != C && '' !== C
                            ? (0, o.jsx)(r.Z, {
                                  messageType: r.Q.ERROR,
                                  className: p.submissionWarning,
                                  children: C
                              })
                            : null,
                        (0, o.jsx)(r.Z, {
                            messageType: r.Q.WARNING,
                            className: p.submissionWarning,
                            children: c.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({ applicationName: I })
                        }),
                        (0, o.jsx)(i.FormSection, {
                            children: (0, o.jsx)(l.Il, {
                                modal: e,
                                validators: g,
                                children: (0, d.xX)(m)
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
                            submitting: _ === s.i.IN_FLIGHT,
                            children: c.Z.Messages.SUBMIT
                        }),
                        (0, o.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: c.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function m(e) {
    (0, i.openModal)((n) =>
        (0, o.jsx)(f, {
            ...n,
            ...e
        })
    );
}
