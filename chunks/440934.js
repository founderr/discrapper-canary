t.r(n),
    t.d(n, {
        default: function () {
            return _;
        },
        openInteractionModal: function () {
            return p;
        }
    });
var i = t(200651);
t(192379);
var o = t(481060),
    r = t(118012),
    a = t(970184),
    l = t(471073),
    s = t(293979),
    c = t(954654),
    u = t(388032),
    d = t(517753);
function _(e) {
    let { title: n, onClose: t, transitionState: _ } = e,
        { components: p, applicationIconURL: f, applicationName: I, submissionState: S, error: C, validators: T, onSubmit: m } = (0, s.X9)(e, t);
    return (0, i.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), m();
        },
        children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: _,
            children: [
                (0, i.jsxs)(o.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.Avatar, {
                            src: f,
                            size: o.AvatarSizes.SIZE_24,
                            'aria-label': I,
                            className: d.applicationIcon
                        }),
                        (0, i.jsx)(r.Z, {
                            color: r.Z.Colors.HEADER_PRIMARY,
                            size: r.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, i.jsx)(o.ModalCloseButton, {
                            onClick: t,
                            className: d.closeButton
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalContent, {
                    children: [
                        null != C && '' !== C
                            ? (0, i.jsx)(o.HelpMessage, {
                                  messageType: o.HelpMessageTypes.ERROR,
                                  className: d.submissionWarning,
                                  children: C
                              })
                            : null,
                        (0, i.jsx)(o.HelpMessage, {
                            messageType: o.HelpMessageTypes.WARNING,
                            className: d.submissionWarning,
                            children: u.intl.format(u.t['dSTy//'], { applicationName: I })
                        }),
                        (0, i.jsx)(o.FormSection, {
                            children: (0, i.jsx)(a.Il, {
                                modal: e,
                                validators: T,
                                children: (0, c.xX)(p)
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
                            submitting: S === l.i.IN_FLIGHT,
                            children: u.intl.string(u.t.geKm7u)
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: t,
                            children: u.intl.string(u.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function p(e) {
    (0, o.openModal)((n) =>
        (0, i.jsx)(_, {
            ...n,
            ...e
        })
    );
}
