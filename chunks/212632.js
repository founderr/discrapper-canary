t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(981631),
    c = t(689938),
    d = t(526201),
    u = t(224499);
let _ = 0,
    E = () => 'notification-position-selector-'.concat(_++),
    T = (e) => {
        switch (e) {
            case l._vf.TOP_LEFT:
                return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
            case l._vf.TOP_RIGHT:
                return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
            case l._vf.BOTTOM_LEFT:
                return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
            case l._vf.BOTTOM_RIGHT:
                return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
            default:
                return c.Z.Messages.OVERLAY_NOTIFICATIONS_DISABLED;
        }
    },
    I = [l._vf.DISABLED, l._vf.TOP_LEFT, l._vf.TOP_RIGHT, l._vf.BOTTOM_LEFT, l._vf.BOTTOM_RIGHT];
function S(e) {
    let { position: s, onChange: t } = e,
        [i] = a.useState(() => E()),
        _ = s === l._vf.DISABLED ? c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({ position: T(s) });
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(o.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, n.jsx)('div', {
                    className: r()(d.wrapper, { [d.disabledSelected]: s === l._vf.DISABLED }),
                    children: I.map((e) =>
                        (0, n.jsxs)(
                            'label',
                            {
                                className: r()({
                                    [d.selected]: e === s,
                                    [d.disabled]: e === l._vf.DISABLED,
                                    [d.topRight]: e === l._vf.TOP_RIGHT,
                                    [d.topLeft]: e === l._vf.TOP_LEFT,
                                    [d.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === l._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    T(e),
                                    e === l._vf.DISABLED
                                        ? (0, n.jsx)(o.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, n.jsx)('input', {
                                        type: 'radio',
                                        name: i,
                                        value: e,
                                        onChange: (s) => t(s, e),
                                        className: d.hiddenInput
                                    })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            (0, n.jsx)(o.FormText, {
                type: o.FormTextTypes.DESCRIPTION,
                className: u.marginTop8,
                children: _
            })
        ]
    });
}
(S.Positions = l._vf), (s.Z = S);
