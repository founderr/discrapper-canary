n.r(t),
    n.d(t, {
        ACTIVITY_ENCOURAGES_HW_ACCELERATION: function () {
            return p;
        },
        default: function () {
            return g;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(153867),
    s = n(835473),
    o = n(600164),
    c = n(626135),
    d = n(998502),
    u = n(981631),
    h = n(388032),
    m = n(13194);
let p = 'Activity Encourages Hardware Acceleration';
function g(e) {
    var t;
    let { applicationId: n, ...g } = e,
        [f, _] = r.useState(!1),
        [E] = (0, s.Z)([n]),
        I = null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : 'This Activity';
    r.useEffect(() => {
        c.default.track(u.rMx.OPEN_MODAL, { type: p });
    }, []);
    let C = () => {
        let e = 'temporary';
        f && ((e = 'permanent'), l.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
            c.default.track(u.rMx.MODAL_DISMISSED, {
                type: p,
                dismiss_type: e
            }),
            g.onClose();
    };
    return (0, i.jsxs)(a.ModalRoot, {
        className: m.root,
        'aria-label': h.intl.string(h.t.NQkK4u),
        ...g,
        children: [
            (0, i.jsxs)(a.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(a.Text, {
                        className: m.__invalid_header,
                        variant: 'text-lg/normal',
                        children: h.intl.string(h.t.NQkK4u)
                    }),
                    (0, i.jsx)(a.ModalCloseButton, {
                        onClick: C,
                        className: m.closeButton
                    })
                ]
            }),
            (0, i.jsx)(a.ModalContent, {
                className: m.content,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    className: m.__invalid_ratingBody,
                    children: h.intl.format(h.t.B9eiaG, { applicationName: I })
                })
            }),
            (0, i.jsxs)(a.ModalFooter, {
                className: m.footer,
                direction: o.Z.Direction.HORIZONTAL,
                children: [
                    (0, i.jsx)(a.Checkbox, {
                        type: a.Checkbox.Types.INVERTED,
                        size: 18,
                        value: f,
                        onChange: () => _(!f),
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: h.intl.string(h.t['5E9SBw'])
                        })
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        onClick: C,
                        children: h.intl.string(h.t['Ibf5/v'])
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.BRAND,
                        onClick: () => {
                            c.default.track(u.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: n }), d.ZP.setEnableHardwareAcceleration(!0);
                        },
                        children: h.intl.string(h.t['/wlDqq'])
                    })
                ]
            })
        ]
    });
}
