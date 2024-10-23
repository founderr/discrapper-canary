t.d(n, {
    Z: function () {
        return I;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(481060),
    s = t(139387),
    o = t(726542),
    r = t(434404),
    d = t(486199),
    c = t(13051),
    u = t(734761);
function I(e) {
    let { integrations: n, editedIntegration: t, guild: I, platformType: m, labelText: _, descriptionText: N, helpText: E, canNavigate: T } = e,
        h = o.Z.get(m),
        g = a.useCallback(
            async (e) => {
                T() && (await r.Z.enableIntegration(I.id, e.type, e.id), s.Z.startEditingIntegration(e.id));
            },
            [T, I.id]
        ),
        p = a.useCallback(
            (e) => {
                T() && (e.id === (null == t ? void 0 : t.id) && s.Z.stopEditingIntegration(), r.Z.disableIntegration(I.id, e.id));
            },
            [T, t, I.id]
        ),
        f = a.useCallback(
            (e) => {
                T() && (e === (null == t ? void 0 : t.id) ? s.Z.stopEditingIntegration() : s.Z.startEditingIntegration(e));
            },
            [T, t]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                name: _,
                icon: null == h ? void 0 : h.icon.whiteSVG,
                iconBackgroundColor: null == h ? void 0 : h.color,
                iconClassName: u.platformIcon,
                description: N,
                isHeader: !0
            }),
            (0, i.jsx)(l.FormDivider, { className: u.headerDivider }),
            n.map((e) =>
                (0, i.jsx)(
                    c.Z,
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
            (0, i.jsx)(l.Text, {
                className: u.helpText,
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: E
            })
        ]
    });
}
