var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(111028),
    p = n(569471),
    m = n(488131),
    f = n(592125),
    g = n(306680),
    C = n(979651),
    _ = n(938475),
    v = n(714794),
    x = n(135724),
    I = n(25601),
    b = n(207055),
    E = n(981631),
    S = n(124368),
    Z = n(388032),
    N = n(872356),
    y = n(206197),
    T = n(82915);
function j(e) {
    let { style: t, withGuildIcon: n } = e;
    return (0, i.jsx)('svg', {
        className: a()(T.spine, { [T.spineWithGuildIcon]: n }),
        width: '12',
        height: '11',
        viewBox: '0 0 12 11',
        fill: 'none',
        'aria-hidden': !0,
        style: t,
        children: (0, i.jsx)('path', {
            d: 'M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z',
            fill: 'currentColor'
        })
    });
}
t.Z = l.memo(function (e) {
    let { thread: t, isSelectedChannel: r, isSelectedVoice: T, isLast: A, withGuildIcon: P } = e,
        M = (0, s.e7)([_.ZP], () => _.ZP.getVoiceStatesForChannel(t), [t]),
        R = (0, s.e7)([C.Z], () => C.Z.hasVideo(t.id)),
        { unread: w, mentionCount: L } = (0, s.cj)([g.ZP], () => ({
            unread: g.ZP.hasUnread(t.id),
            mentionCount: g.ZP.getMentionCount(t.id)
        })),
        D = (0, s.e7)([p.Z], () => p.Z.isMuted(t.id)),
        O = l.useCallback(
            (e) => {
                (0, m.ok)(t, !e.shiftKey, S.on.CHANNEL_LIST);
            },
            [t]
        ),
        k = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        U = l.useCallback(
            (e) => {
                let l = f.Z.getChannel(t.id);
                null != l &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: l
                            });
                    });
            },
            [t.id]
        ),
        G = null == M ? 0 : M.length,
        { role: B, ...H } = (0, o.JA)(t.id),
        V = l.useRef(null),
        F =
            L > 0
                ? Z.intl.formatToPlainString(Z.t['ZL7+Iy'], {
                      channelName: t.name,
                      mentionCount: L
                  })
                : w
                  ? Z.intl.formatToPlainString(Z.t.YlVvmZ, { channelName: t.name })
                  : Z.intl.formatToPlainString(Z.t['0nZpiI'], { channelName: t.name });
    return (0, i.jsxs)('li', {
        role: B,
        className: a()(N.containerDefault, { [N.selected]: r }),
        children: [
            (0, i.jsx)(j, { withGuildIcon: P }),
            A
                ? null
                : (0, i.jsx)(j, {
                      withGuildIcon: P,
                      style: { transform: 'rotateX(180deg) translateY(-9px)' }
                  }),
            (0, i.jsx)(c.FocusRing, {
                focusTarget: V,
                ringTarget: V,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4
                },
                children: (0, i.jsxs)('div', {
                    className: a()(N.iconVisibility, y.wrapper, y.typeThread, {
                        [y.modeSelected]: r,
                        [y.modeMuted]: !r && D,
                        [y.modeUnreadImportant]: !D && !r && w,
                        [y.withGuildIcon]: P
                    }),
                    onMouseDown: k,
                    onContextMenu: U,
                    children: [
                        !w || D || r ? null : (0, i.jsx)('div', { className: a()(y.unread, y.unreadImportant) }),
                        (0, i.jsx)(c.Clickable, {
                            ...H,
                            innerRef: V,
                            className: y.link,
                            onClick: O,
                            'aria-label': F,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)('div', {
                                className: a()(y.linkTop, y.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        className: y.name,
                                        'aria-hidden': !0,
                                        children: t.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: y.children,
                                        children: [
                                            G > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(x.Z, {
                                                      userCount: G,
                                                      video: R,
                                                      channel: t
                                                  })
                                                : null,
                                            (0, v.Z)(L) ? (0, i.jsx)(I.Z, { mentionsCount: L }) : null
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(b.Z, {
                channel: t,
                collapsed: !T,
                collapsedMax: 6,
                voiceStates: M,
                location: E.Sbl.GUILD_CHANNEL_LIST
            })
        ]
    });
});
