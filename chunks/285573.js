var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(239091),
    c = n(146773),
    u = n(592125),
    d = n(984933),
    h = n(496675),
    p = n(98597),
    f = n(473403),
    m = n(981631),
    g = n(490897),
    C = n(872356);
let _ = (0, c.B)(function (e) {
    let { guild: t, selectedChannelId: r, position: c, disableManageChannels: _, sorting: x, sortingType: v, sortingPosition: I, connectChannelDragSource: b, connectChannelDropTarget: N, tabIndex: E } = e,
        S = (0, o.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        Z = (0, o.e7)([u.Z], () => u.Z.getChannel(null == S ? void 0 : S.parent_id)),
        y = r === (null == S ? void 0 : S.id),
        T = (0, o.e7)([h.Z], () => (null != Z ? h.Z.can(m.Plq.MANAGE_CHANNELS, Z) : null != t && h.Z.can(m.Plq.MANAGE_CHANNELS, t))),
        j = l.useCallback(
            (e) => {
                null != S &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: S
                            });
                    });
            },
            [S]
        );
    if (null == S) return null;
    let A = (0, p.jo)(c, I),
        P = (0, p.CN)(S, x, v),
        R = (0, i.jsx)('div', {
            className: a()(A, {
                [C.disabled]: P,
                [C.selected]: y
            }),
            'data-dnd-name': S.name,
            children: (0, i.jsxs)(f.Z, {
                className: C.iconVisibility,
                channel: S,
                guild: t,
                selected: y,
                onContextMenu: j,
                forceInteractable: !0,
                resolvedUnreadSetting: g.i.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(p.eP, {
                        channel: S,
                        tabIndex: E
                    }),
                    (0, i.jsx)(p.hR, {
                        channel: S,
                        disableManageChannels: _,
                        tabIndex: E
                    })
                ]
            })
        });
    return T && (R = N(b(R))), R;
});
t.Z = _;
