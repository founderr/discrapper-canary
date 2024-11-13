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
    let { guild: t, selectedChannelId: r, position: c, disableManageChannels: _, sorting: v, sortingType: x, sortingPosition: I, connectChannelDragSource: b, connectChannelDropTarget: S, tabIndex: E } = e,
        Z = (0, o.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        N = (0, o.e7)([u.Z], () => u.Z.getChannel(null == Z ? void 0 : Z.parent_id)),
        y = r === (null == Z ? void 0 : Z.id),
        T = (0, o.e7)([h.Z], () => (null != N ? h.Z.can(m.Plq.MANAGE_CHANNELS, N) : null != t && h.Z.can(m.Plq.MANAGE_CHANNELS, t))),
        j = l.useCallback(
            (e) => {
                null != Z &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: Z
                            });
                    });
            },
            [Z]
        );
    if (null == Z) return null;
    let A = (0, p.jo)(c, I),
        P = (0, p.CN)(Z, v, x),
        M = (0, i.jsx)('div', {
            className: a()(A, {
                [C.disabled]: P,
                [C.selected]: y
            }),
            'data-dnd-name': Z.name,
            children: (0, i.jsxs)(f.Z, {
                className: C.iconVisibility,
                channel: Z,
                guild: t,
                selected: y,
                onContextMenu: j,
                forceInteractable: !0,
                resolvedUnreadSetting: g.i.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(p.eP, {
                        channel: Z,
                        tabIndex: E
                    }),
                    (0, i.jsx)(p.hR, {
                        channel: Z,
                        disableManageChannels: _,
                        tabIndex: E
                    })
                ]
            })
        });
    return T && (M = S(b(M))), M;
});
t.Z = _;
