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
    f = n(488131),
    m = n(592125),
    g = n(306680),
    v = n(979651),
    C = n(938475),
    x = n(714794),
    _ = n(135724),
    I = n(25601),
    Z = n(207055),
    b = n(981631),
    S = n(124368),
    N = n(388032),
    E = n(831746),
    y = n(193877),
    j = n(329986);
function T(e) {
    let { style: t, withGuildIcon: n } = e;
    return (0, i.jsx)('svg', {
        className: a()(j.spine, { [j.spineWithGuildIcon]: n }),
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
    let { thread: t, isSelectedChannel: r, isSelectedVoice: j, isLast: P, withGuildIcon: A } = e,
        w = (0, s.e7)([C.ZP], () => C.ZP.getVoiceStatesForChannel(t), [t]),
        M = (0, s.e7)([v.Z], () => v.Z.hasVideo(t.id)),
        {
            unread: L,
            mentionCount: R,
            isMentionLowImportance: D
        } = (0, s.cj)([g.ZP], () => ({
            unread: g.ZP.hasUnread(t.id),
            mentionCount: g.ZP.getMentionCount(t.id),
            isMentionLowImportance: g.ZP.getIsMentionLowImportance(t.id)
        })),
        G = (0, s.e7)([p.Z], () => p.Z.isMuted(t.id)),
        k = l.useCallback(
            (e) => {
                (0, f.ok)(t, !e.shiftKey, S.on.CHANNEL_LIST);
            },
            [t]
        ),
        B = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        U = l.useCallback(
            (e) => {
                let l = m.Z.getChannel(t.id);
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
        O = null == w ? 0 : w.length,
        { role: V, ...H } = (0, o.JA)(t.id),
        F = l.useRef(null),
        W =
            R > 0
                ? N.intl.formatToPlainString(N.t['ZL7+Iy'], {
                      channelName: t.name,
                      mentionCount: R
                  })
                : L
                  ? N.intl.formatToPlainString(N.t.YlVvmZ, { channelName: t.name })
                  : N.intl.formatToPlainString(N.t['0nZpiI'], { channelName: t.name });
    return (0, i.jsxs)('li', {
        role: V,
        className: a()(E.containerDefault, { [E.selected]: r }),
        children: [
            (0, i.jsx)(T, { withGuildIcon: A }),
            P
                ? null
                : (0, i.jsx)(T, {
                      withGuildIcon: A,
                      style: { transform: 'rotateX(180deg) translateY(-9px)' }
                  }),
            (0, i.jsx)(c.FocusRing, {
                focusTarget: F,
                ringTarget: F,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4
                },
                children: (0, i.jsxs)('div', {
                    className: a()(E.iconVisibility, y.wrapper, y.typeThread, {
                        [y.modeSelected]: r,
                        [y.modeMuted]: !r && G,
                        [y.modeUnreadImportant]: !G && !r && L,
                        [y.withGuildIcon]: A
                    }),
                    onMouseDown: B,
                    onContextMenu: U,
                    children: [
                        !L || G || r ? null : (0, i.jsx)('div', { className: a()(y.unread, y.unreadImportant) }),
                        (0, i.jsx)(c.Clickable, {
                            ...H,
                            innerRef: F,
                            className: y.link,
                            onClick: k,
                            'aria-label': W,
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
                                            O > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(_.Z, {
                                                      userCount: O,
                                                      video: M,
                                                      channel: t
                                                  })
                                                : null,
                                            (0, x.Z)(R)
                                                ? (0, i.jsx)(I.Z, {
                                                      mentionsCount: R,
                                                      isMentionLowImportance: D
                                                  })
                                                : null
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(Z.Z, {
                channel: t,
                collapsed: !j,
                collapsedMax: 6,
                voiceStates: w,
                location: b.Sbl.GUILD_CHANNEL_LIST
            })
        ]
    });
});
