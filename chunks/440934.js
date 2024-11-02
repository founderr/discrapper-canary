n.r(e),
    n.d(e, {
        default: function () {
            return p;
        },
        openInteractionModal: function () {
            return S;
        }
    });
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(112831),
    l = n(970184),
    s = n(471073),
    a = n(293979),
    c = n(954654),
    u = n(388032),
    d = n(251686);
function p(t) {
    let { title: e, onClose: n, transitionState: p } = t,
        { components: S, applicationIconURL: _, applicationName: I, submissionState: T, error: f, validators: C, onSubmit: E } = (0, a.X9)(t, n);
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
                            src: _,
                            size: o.AvatarSizes.SIZE_24,
                            'aria-label': I,
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
                            children: u.intl.format(u.t['dSTy//'], { applicationName: I })
                        }),
                        (0, i.jsx)(o.FormSection, {
                            children: (0, i.jsx)(l.Il, {
                                modal: t,
                                validators: C,
                                children: (0, c.xX)(S)
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
                            submitting: T === s.i.IN_FLIGHT,
                            children: u.intl.string(u.t.geKm7u)
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: n,
                            children: u.intl.string(u.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function S(t) {
    (0, o.openModal)((e) =>
        (0, i.jsx)(p, {
            ...e,
            ...t
        })
    );
}
