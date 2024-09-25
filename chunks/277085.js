n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(906732),
    d = n(951394),
    _ = n(695346),
    E = n(785717),
    f = n(689938),
    h = n(332102);
let p = 300,
    m = (e) =>
        (0, l.openModalLazy)(async () => {
            let { default: t } = await n.e('51714').then(n.bind(n, 211065));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    sourceAnalyticsLocations: e
                });
        });
function I(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: r } = e,
        { analyticsLocations: a } = (0, c.ZP)(),
        { trackUserProfileAction: I } = (0, E.KZ)(),
        [T, g] = (0, s.Wu)([u.Z], () => [u.Z.useReducedMotion, u.Z.keyboardModeEnabled]),
        S = !n || T || g ? 0 : p,
        A = () => {
            I({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), m(a), null == r || r();
        },
        v = () => {
            I({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), _.Ok.updateSetting(void 0);
        };
    return (0, i.jsxs)(d.ZP, {
        className: o()(h.popover, {
            [h.visible]: t,
            [h.expandable]: n
        }),
        children: [
            (0, i.jsx)(l.TooltipContainer, {
                text: f.Z.Messages.EDIT,
                delay: S,
                'aria-label': !1,
                children: (0, i.jsx)(d.zx, {
                    className: o()(h.button, h.left),
                    'aria-label': f.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_A11Y_LABEL,
                    'aria-haspopup': 'dialog',
                    onClick: A,
                    children: (0, i.jsx)(l.PencilIcon, {
                        size: 'xs',
                        colorClass: h.icon
                    })
                })
            }),
            (0, i.jsx)(l.TooltipContainer, {
                text: f.Z.Messages.CLEAR,
                delay: S,
                'aria-label': !1,
                children: (0, i.jsx)(d.zx, {
                    className: o()(h.button, h.right),
                    'aria-label': f.Z.Messages.CUSTOM_STATUS_CLEAR_CUSTOM_STATUS_A11Y_LABEL,
                    onClick: v,
                    children: (0, i.jsx)(l.TrashIcon, {
                        size: 'xs',
                        colorClass: h.icon
                    })
                })
            })
        ]
    });
}
