n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(906732),
    c = n(951394),
    d = n(695346),
    f = n(785717),
    _ = n(388032),
    p = n(119231);
let h = (e) =>
    (0, o.openModalLazy)(async () => {
        let { default: t } = await n.e('51714').then(n.bind(n, 211065));
        return (n) =>
            (0, r.jsx)(t, {
                ...n,
                sourceAnalyticsLocations: e
            });
    });
function m(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: i } = e,
        { analyticsLocations: m } = (0, u.ZP)(),
        { trackUserProfileAction: g } = (0, f.KZ)(),
        [E, v] = (0, s.Wu)([l.Z], () => [l.Z.useReducedMotion, l.Z.keyboardModeEnabled]),
        I = !n || E || v ? 0 : 300;
    return (0, r.jsxs)(c.ZP, {
        className: a()(p.popover, {
            [p.visible]: t,
            [p.expandable]: n
        }),
        children: [
            (0, r.jsx)(o.TooltipContainer, {
                text: _.intl.string(_.t.bt75u7),
                delay: I,
                'aria-label': !1,
                children: (0, r.jsx)(c.zx, {
                    className: a()(p.button, p.left),
                    'aria-label': _.intl.string(_.t.QdHxoq),
                    'aria-haspopup': 'dialog',
                    onClick: () => {
                        g({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), h(m), null == i || i();
                    },
                    children: (0, r.jsx)(o.PencilIcon, {
                        size: 'xs',
                        colorClass: p.icon
                    })
                })
            }),
            (0, r.jsx)(o.TooltipContainer, {
                text: _.intl.string(_.t.VkKicX),
                delay: I,
                'aria-label': !1,
                children: (0, r.jsx)(c.zx, {
                    className: a()(p.button, p.right),
                    'aria-label': _.intl.string(_.t.wfYTHR),
                    onClick: () => {
                        g({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), d.Ok.updateSetting(void 0);
                    },
                    children: (0, r.jsx)(o.TrashIcon, {
                        size: 'xs',
                        colorClass: p.icon
                    })
                })
            })
        ]
    });
}
