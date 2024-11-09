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
    let { guild: t, selectedChannelId: r, position: c, disableManageChannels: _, sorting: v, sortingType: x, sortingPosition: I, connectChannelDragSource: b, connectChannelDropTarget: S, tabIndex: Z } = e,
        N = (0, o.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        E = (0, o.e7)([u.Z], () => u.Z.getChannel(null == N ? void 0 : N.parent_id)),
        y = r === (null == N ? void 0 : N.id),
        j = (0, o.e7)([h.Z], () => (null != E ? h.Z.can(m.Plq.MANAGE_CHANNELS, E) : null != t && h.Z.can(m.Plq.MANAGE_CHANNELS, t))),
        T = l.useCallback(
            (e) => {
                null != N &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: N
                            });
                    });
            },
            [N]
        );
    if (null == N) return null;
    let P = (0, p.jo)(c, I),
        A = (0, p.CN)(N, v, x),
        M = (0, i.jsx)('div', {
            className: a()(P, {
                [C.disabled]: A,
                [C.selected]: y
            }),
            'data-dnd-name': N.name,
            children: (0, i.jsxs)(f.Z, {
                className: C.iconVisibility,
                channel: N,
                guild: t,
                selected: y,
                onContextMenu: T,
                forceInteractable: !0,
                resolvedUnreadSetting: g.i.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(p.eP, {
                        channel: N,
                        tabIndex: Z
                    }),
                    (0, i.jsx)(p.hR, {
                        channel: N,
                        disableManageChannels: _,
                        tabIndex: Z
                    })
                ]
            })
        });
    return j && (M = S(b(M))), M;
});
t.Z = _;
