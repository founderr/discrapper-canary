n.r(t),
    n.d(t, {
        default: function () {
            return _;
        },
        openInteractionModal: function () {
            return p;
        }
    });
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(118012),
    a = n(970184),
    l = n(471073),
    s = n(293979),
    c = n(954654),
    u = n(388032),
    d = n(251686);
function _(e) {
    let { title: t, onClose: n, transitionState: _ } = e,
        { components: p, applicationIconURL: I, applicationName: S, submissionState: f, error: C, validators: T, onSubmit: m } = (0, s.X9)(e, n);
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
                            src: I,
                            size: o.AvatarSizes.SIZE_24,
                            'aria-label': S,
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
                            children: u.intl.format(u.t['dSTy//'], { applicationName: S })
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
                            submitting: f === l.i.IN_FLIGHT,
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
function p(e) {
    (0, o.openModal)((t) =>
        (0, i.jsx)(_, {
            ...t,
            ...e
        })
    );
}
