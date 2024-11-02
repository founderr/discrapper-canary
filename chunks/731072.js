t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(139387),
    o = t(726542),
    s = t(434404),
    d = t(486199),
    c = t(13051),
    u = t(734761);
function m(e) {
    let { integrations: n, editedIntegration: t, guild: m, platformType: h, labelText: p, descriptionText: g, helpText: f, canNavigate: x } = e,
        b = o.Z.get(h),
        v = l.useCallback(
            async (e) => {
                x() && (await s.Z.enableIntegration(m.id, e.type, e.id), a.Z.startEditingIntegration(e.id));
            },
            [x, m.id]
        ),
        C = l.useCallback(
            (e) => {
                x() && (e.id === (null == t ? void 0 : t.id) && a.Z.stopEditingIntegration(), s.Z.disableIntegration(m.id, e.id));
            },
            [x, t, m.id]
        ),
        I = l.useCallback(
            (e) => {
                x() && (e === (null == t ? void 0 : t.id) ? a.Z.stopEditingIntegration() : a.Z.startEditingIntegration(e));
            },
            [x, t]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                name: p,
                icon: null == b ? void 0 : b.icon.whiteSVG,
                iconBackgroundColor: null == b ? void 0 : b.color,
                iconClassName: u.platformIcon,
                description: g,
                isHeader: !0
            }),
            (0, i.jsx)(r.FormDivider, { className: u.headerDivider }),
            n.map((e) =>
                (0, i.jsx)(
                    c.Z,
                    {
                        integration: e,
                        editedIntegration: t,
                        guild: m,
                        isExpanded: (null == t ? void 0 : t.id) === e.id,
                        onEnable: v,
                        onDisable: C,
                        onToggleExpand: () => I(e.id)
                    },
                    e.id
                )
            ),
            (0, i.jsx)(r.Text, {
                className: u.helpText,
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: f
            })
        ]
    });
}
