var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(111028),
    p = n(569471),
    f = n(488131),
    m = n(592125),
    _ = n(306680),
    g = n(979651),
    C = n(938475),
    I = n(714794),
    E = n(135724),
    N = n(25601),
    S = n(207055),
    x = n(981631),
    v = n(124368),
    T = n(689938),
    Z = n(872356),
    A = n(206197),
    b = n(82915);
function R(e) {
    let { style: t, withGuildIcon: n } = e;
    return (0, i.jsx)('svg', {
        className: a()(b.spine, { [b.spineWithGuildIcon]: n }),
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
    let { thread: t, isSelectedChannel: r, isSelectedVoice: b, isLast: M, withGuildIcon: L } = e,
        P = (0, o.e7)([C.ZP], () => C.ZP.getVoiceStatesForChannel(t), [t]),
        y = (0, o.e7)([g.Z], () => g.Z.hasVideo(t.id)),
        { unread: O, mentionCount: j } = (0, o.cj)([_.ZP], () => ({
            unread: _.ZP.hasUnread(t.id),
            mentionCount: _.ZP.getMentionCount(t.id)
        })),
        D = (0, o.e7)([p.Z], () => p.Z.isMuted(t.id)),
        w = l.useCallback(
            (e) => {
                (0, f.ok)(t, !e.shiftKey, v.on.CHANNEL_LIST);
            },
            [t]
        ),
        G = l.useCallback(() => {
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
        k = null == P ? 0 : P.length,
        { role: B, ...V } = (0, s.JA)(t.id),
        H = l.useRef(null),
        F =
            j > 0
                ? T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format({
                      channelName: t.name,
                      mentionCount: j
                  })
                : O
                  ? T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format({ channelName: t.name })
                  : T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({ channelName: t.name });
    return (0, i.jsxs)('li', {
        role: B,
        className: a()(Z.containerDefault, { [Z.selected]: r }),
        children: [
            (0, i.jsx)(R, { withGuildIcon: L }),
            M
                ? null
                : (0, i.jsx)(R, {
                      withGuildIcon: L,
                      style: { transform: 'rotateX(180deg) translateY(-9px)' }
                  }),
            (0, i.jsx)(c.FocusRing, {
                focusTarget: H,
                ringTarget: H,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4
                },
                children: (0, i.jsxs)('div', {
                    className: a()(Z.iconVisibility, A.wrapper, A.typeThread, {
                        [A.modeSelected]: r,
                        [A.modeMuted]: !r && D,
                        [A.modeUnreadImportant]: !D && !r && O,
                        [A.withGuildIcon]: L
                    }),
                    onMouseDown: G,
                    onContextMenu: U,
                    children: [
                        !O || D || r ? null : (0, i.jsx)('div', { className: a()(A.unread, A.unreadImportant) }),
                        (0, i.jsx)(c.Clickable, {
                            ...V,
                            innerRef: H,
                            className: A.link,
                            onClick: w,
                            'aria-label': F,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)('div', {
                                className: a()(A.linkTop, A.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        className: A.name,
                                        'aria-hidden': !0,
                                        children: t.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: A.children,
                                        children: [
                                            k > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(E.Z, {
                                                      userCount: k,
                                                      video: y,
                                                      channel: t
                                                  })
                                                : null,
                                            (0, I.Z)(j) ? (0, i.jsx)(N.Z, { mentionsCount: j }) : null
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(S.Z, {
                channel: t,
                collapsed: !b,
                collapsedMax: 6,
                voiceStates: P,
                location: x.Sbl.GUILD_CHANNEL_LIST
            })
        ]
    });
});
