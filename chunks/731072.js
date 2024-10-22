t.d(n, {
    Z: function () {
        return I;
    }
});
var i = t(200651),
    a = t(192379),
    s = t(481060),
    l = t(139387),
    r = t(726542),
    o = t(434404),
    c = t(486199),
    d = t(13051),
    u = t(734761);
function I(e) {
    let { integrations: n, editedIntegration: t, guild: I, platformType: m, labelText: _, descriptionText: N, helpText: E, canNavigate: T } = e,
        h = r.Z.get(m),
        g = a.useCallback(
            async (e) => {
                T() && (await o.Z.enableIntegration(I.id, e.type, e.id), l.Z.startEditingIntegration(e.id));
            },
            [T, I.id]
        ),
        p = a.useCallback(
            (e) => {
                T() && (e.id === (null == t ? void 0 : t.id) && l.Z.stopEditingIntegration(), o.Z.disableIntegration(I.id, e.id));
            },
            [T, t, I.id]
        ),
        f = a.useCallback(
            (e) => {
                T() && (e === (null == t ? void 0 : t.id) ? l.Z.stopEditingIntegration() : l.Z.startEditingIntegration(e));
            },
            [T, t]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                name: _,
                icon: null == h ? void 0 : h.icon.whiteSVG,
                iconBackgroundColor: null == h ? void 0 : h.color,
                iconClassName: u.platformIcon,
                description: N,
                isHeader: !0
            }),
            (0, i.jsx)(s.FormDivider, { className: u.headerDivider }),
            n.map((e) =>
                (0, i.jsx)(
                    d.Z,
                    {
                        integration: e,
                        editedIntegration: t,
                        guild: I,
                        isExpanded: (null == t ? void 0 : t.id) === e.id,
                        onEnable: g,
                        onDisable: p,
                        onToggleExpand: () => f(e.id)
                    },
                    e.id
                )
            ),
            (0, i.jsx)(s.Text, {
                className: u.helpText,
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: E
            })
        ]
    });
}
