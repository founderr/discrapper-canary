var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(239091),
    c = n(146773),
    u = n(592125),
    d = n(984933),
    h = n(496675),
    p = n(98597),
    f = n(473403),
    m = n(981631),
    _ = n(490897),
    g = n(872356);
let C = (0, c.B)(function (e) {
    let { guild: t, selectedChannelId: r, position: c, disableManageChannels: C, sorting: I, sortingType: E, sortingPosition: N, connectChannelDragSource: S, connectChannelDropTarget: x, tabIndex: v } = e,
        T = (0, s.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        Z = (0, s.e7)([u.Z], () => u.Z.getChannel(null == T ? void 0 : T.parent_id)),
        A = r === (null == T ? void 0 : T.id),
        b = (0, s.e7)([h.Z], () => (null != Z ? h.Z.can(m.Plq.MANAGE_CHANNELS, Z) : null != t && h.Z.can(m.Plq.MANAGE_CHANNELS, t))),
        R = l.useCallback(
            (e) => {
                null != T &&
                    (0, o.jW)(e, async () => {
                        let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: T
                            });
                    });
            },
            [T]
        );
    if (null == T) return null;
    let M = (0, p.jo)(c, N),
        L = (0, p.CN)(T, I, E),
        P = (0, i.jsx)('div', {
            className: a()(M, {
                [g.disabled]: L,
                [g.selected]: A
            }),
            'data-dnd-name': T.name,
            children: (0, i.jsxs)(f.Z, {
                className: g.iconVisibility,
                channel: T,
                guild: t,
                selected: A,
                onContextMenu: R,
                forceInteractable: !0,
                resolvedUnreadSetting: _.i.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(p.eP, {
                        channel: T,
                        tabIndex: v
                    }),
                    (0, i.jsx)(p.hR, {
                        channel: T,
                        disableManageChannels: C,
                        tabIndex: v
                    })
                ]
            })
        });
    return b && (P = x(S(P))), P;
});
t.Z = C;
