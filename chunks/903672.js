n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(524437),
    l = n(481060),
    o = n(235820),
    c = n(494404),
    u = n(110924),
    d = n(198620),
    _ = n(294218),
    E = n(695346),
    I = n(592125),
    m = n(731290),
    T = n(944486),
    h = n(455199),
    N = n(655354),
    f = n(999671),
    C = n(324081),
    p = n(240126),
    g = n(791914),
    A = n(981631),
    S = n(689938),
    x = n(42967);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};
function O(e, t, n) {
    let i = t ? h.Z.guildFilter : null,
        s = t ? h.Z.roleFilter : null,
        a = t ? h.Z.everyoneFilter : null,
        r = null;
    null != e && null != i && (r = i === A.NgX.ALL_SERVERS ? null : e.getGuildId()), o.Z.fetchRecentMentions(n, A.DJj, r, s, a);
}
function M(e) {
    let { setTab: t, onJump: n, badgeState: l, closePopout: _ } = e,
        E = (0, a.e7)([I.Z, T.Z], () => I.Z.getChannel(T.Z.getChannelId())),
        {
            messages: m,
            hasMore: N,
            loading: C,
            guildFilter: p,
            roleFilter: R,
            everyoneFilter: M
        } = (0, a.cj)([h.Z], () => ({
            messages: h.Z.getMentions(),
            hasMore: h.Z.hasMore,
            loading: h.Z.loading,
            guildFilter: h.Z.guildFilter,
            roleFilter: h.Z.roleFilter,
            everyoneFilter: h.Z.everyoneFilter
        })),
        v = (0, u.Z)(p),
        Z = (0, u.Z)(R),
        b = (0, u.Z)(M);
    s.useEffect(() => {
        if (!h.Z.hasLoadedEver) {
            O(E, !0);
            return;
        }
        ((null != v && p !== v) || (null != Z && R !== Z) || (null != b && M !== b)) && O(E, !0);
    }, [v, p, Z, R, b, M, E, !0]);
    s.useEffect(() => {
        (null == m ? void 0 : m.some(d.k5)) && (o.Z.clearMentions(), O(E, !0));
    }, []),
        s.useEffect(
            () => () => {
                o.Z.truncateMentions(A.DJj);
            },
            []
        );
    let D = s.useCallback(
        () =>
            (0, i.jsx)(g.Z, {
                tab: r.X.MENTIONS,
                setTab: t,
                badgeState: l,
                closePopout: _,
                children: (0, i.jsx)(f.Z, {})
            }),
        [!0, t, l, _]
    );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(c.ZP, {
            className: x.recentMentionsPopout,
            scrollerClassName: x.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
                o.Z.deleteRecentMention(e.id);
            },
            channel: E,
            messages: m,
            loading: C,
            hasMore: N,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                O(E, !0, null != m && m.length > 0 ? m[m.length - 1].id : null);
            },
            canCloseAllMessages: !0,
            renderHeader: D,
            renderEmptyState: P,
            renderMessage: L,
            'aria-label': S.Z.Messages.RECENT_MENTIONS,
            listName: 'recents'
        })
    });
}
function v(e, t) {
    return [
        (0, i.jsx)(
            Z,
            {
                message: e,
                gotoMessage: t
            },
            e.id
        )
    ];
}
function L(e, t) {
    return [
        (0, i.jsx)(
            Z,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function Z(e) {
    let { message: t, gotoMessage: n, dismissible: s } = e;
    if (null == t) return null;
    let a = I.Z.getChannel(t.channel_id);
    if (null == a) return null;
    let r = m.Z.didAgree(a.getGuildId()),
        c = !!a.isNSFW() && !r;
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(C.Z, {
                channel: a,
                gotoChannel: n,
                children:
                    null != s
                        ? (0, i.jsx)(l.CircleIconButton, {
                              className: x.closeButton,
                              tooltip: S.Z.Messages.CLOSE,
                              color: l.CircleIconButtonColors.TERTIARY,
                              icon: (0, i.jsx)(l.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => o.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: x.messageContainer,
                children: [
                    (0, i.jsx)(N.Z, {
                        className: x.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(
                        _.Z,
                        {
                            message: t,
                            channel: a,
                            className: x.message,
                            hideAccessories: c,
                            compact: E.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: R,
                            trackAnnouncementViews: !0
                        },
                        t.id
                    )
                ]
            })
        ]
    });
}
function P(e) {
    return (0, i.jsx)(p.Z, {
        Icon: l.AtIcon,
        header: S.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
        tip: S.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
    });
}
