n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(524437),
    r = n(481060),
    o = n(235820),
    c = n(494404),
    d = n(110924),
    u = n(198620),
    _ = n(294218),
    E = n(695346),
    I = n(592125),
    m = n(731290),
    T = n(944486),
    N = n(455199),
    h = n(655354),
    C = n(999671),
    f = n(324081),
    p = n(240126),
    g = n(791914),
    A = n(981631),
    S = n(689938),
    M = n(42967);
let O = {
    offset: {
        left: 4,
        right: -12
    }
};
function x(e, t, n) {
    let i = t ? N.Z.guildFilter : null,
        a = t ? N.Z.roleFilter : null,
        s = t ? N.Z.everyoneFilter : null,
        l = null;
    null != e && null != i && (l = i === A.NgX.ALL_SERVERS ? null : e.getGuildId()), o.Z.fetchRecentMentions(n, A.DJj, l, a, s);
}
function R(e) {
    let { setTab: t, onJump: n, badgeState: r, closePopout: _ } = e,
        E = (0, s.e7)([I.Z, T.Z], () => I.Z.getChannel(T.Z.getChannelId())),
        {
            messages: m,
            hasMore: h,
            loading: f,
            guildFilter: p,
            roleFilter: O,
            everyoneFilter: R
        } = (0, s.cj)([N.Z], () => ({
            messages: N.Z.getMentions(),
            hasMore: N.Z.hasMore,
            loading: N.Z.loading,
            guildFilter: N.Z.guildFilter,
            roleFilter: N.Z.roleFilter,
            everyoneFilter: N.Z.everyoneFilter
        })),
        v = (0, d.Z)(p),
        Z = (0, d.Z)(O),
        b = (0, d.Z)(R);
    a.useEffect(() => {
        if (!N.Z.hasLoadedEver) {
            x(E, !0);
            return;
        }
        ((null != v && p !== v) || (null != Z && O !== Z) || (null != b && R !== b)) && x(E, !0);
    }, [v, p, Z, O, b, R, E, !0]);
    a.useEffect(() => {
        (null == m ? void 0 : m.some(u.k5)) && (o.Z.clearMentions(), x(E, !0));
    }, []),
        a.useEffect(
            () => () => {
                o.Z.truncateMentions(A.DJj);
            },
            []
        );
    let D = a.useCallback(
        () =>
            (0, i.jsx)(g.Z, {
                tab: l.X.MENTIONS,
                setTab: t,
                badgeState: r,
                closePopout: _,
                children: (0, i.jsx)(C.Z, {})
            }),
        [!0, t, r, _]
    );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(c.ZP, {
            className: M.recentMentionsPopout,
            scrollerClassName: M.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
                o.Z.deleteRecentMention(e.id);
            },
            channel: E,
            messages: m,
            loading: f,
            hasMore: h,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                x(E, !0, null != m && m.length > 0 ? m[m.length - 1].id : null);
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
    let { message: t, gotoMessage: n, dismissible: a } = e;
    if (null == t) return null;
    let s = I.Z.getChannel(t.channel_id);
    if (null == s) return null;
    let l = m.Z.didAgree(s.getGuildId()),
        c = !!s.isNSFW() && !l;
    return (0, i.jsxs)('div', {
        className: M.container,
        children: [
            (0, i.jsx)(f.Z, {
                channel: s,
                gotoChannel: n,
                children:
                    null != a
                        ? (0, i.jsx)(r.CircleIconButton, {
                              className: M.closeButton,
                              tooltip: S.Z.Messages.CLOSE,
                              color: r.CircleIconButtonColors.TERTIARY,
                              icon: (0, i.jsx)(r.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => o.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: M.messageContainer,
                children: [
                    (0, i.jsx)(h.Z, {
                        className: M.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(
                        _.Z,
                        {
                            message: t,
                            channel: s,
                            className: M.message,
                            hideAccessories: c,
                            compact: E.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: O,
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
        Icon: r.AtIcon,
        header: S.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
        tip: S.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
    });
}
