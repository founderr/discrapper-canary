n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
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
    f = n(455199),
    h = n(655354),
    N = n(999671),
    p = n(324081),
    C = n(240126),
    g = n(791914),
    S = n(981631),
    A = n(689938),
    x = n(42967);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};
function O(e, t, n) {
    let i = t ? f.Z.guildFilter : null,
        a = t ? f.Z.roleFilter : null,
        s = t ? f.Z.everyoneFilter : null,
        r = null;
    null != e && null != i && (r = i === S.NgX.ALL_SERVERS ? null : e.getGuildId()), o.Z.fetchRecentMentions(n, S.DJj, r, a, s);
}
function v(e) {
    let { setTab: t, onJump: n, badgeState: l, closePopout: _ } = e,
        E = (0, s.e7)([I.Z, T.Z], () => I.Z.getChannel(T.Z.getChannelId())),
        {
            messages: m,
            hasMore: h,
            loading: p,
            guildFilter: C,
            roleFilter: R,
            everyoneFilter: v
        } = (0, s.cj)([f.Z], () => ({
            messages: f.Z.getMentions(),
            hasMore: f.Z.hasMore,
            loading: f.Z.loading,
            guildFilter: f.Z.guildFilter,
            roleFilter: f.Z.roleFilter,
            everyoneFilter: f.Z.everyoneFilter
        })),
        M = (0, u.Z)(C),
        Z = (0, u.Z)(R),
        P = (0, u.Z)(v);
    a.useEffect(() => {
        if (!f.Z.hasLoadedEver) {
            O(E, !0);
            return;
        }
        ((null != M && C !== M) || (null != Z && R !== Z) || (null != P && v !== P)) && O(E, !0);
    }, [M, C, Z, R, P, v, E, !0]);
    a.useEffect(() => {
        (null == m ? void 0 : m.some(d.k5)) && (o.Z.clearMentions(), O(E, !0));
    }, []),
        a.useEffect(
            () => () => {
                o.Z.truncateMentions(S.DJj);
            },
            []
        );
    let D = a.useCallback(
        () =>
            (0, i.jsx)(g.Z, {
                tab: r.X.MENTIONS,
                setTab: t,
                badgeState: l,
                closePopout: _,
                children: (0, i.jsx)(N.Z, {})
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
            loading: p,
            hasMore: h,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                O(E, !0, null != m && m.length > 0 ? m[m.length - 1].id : null);
            },
            canCloseAllMessages: !0,
            renderHeader: D,
            renderEmptyState: b,
            renderMessage: L,
            'aria-label': A.Z.Messages.RECENT_MENTIONS,
            listName: 'recents'
        })
    });
}
function M(e, t) {
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
    let r = m.Z.didAgree(s.getGuildId()),
        c = !!s.isNSFW() && !r;
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(p.Z, {
                channel: s,
                gotoChannel: n,
                children:
                    null != a
                        ? (0, i.jsx)(l.CircleIconButton, {
                              className: x.closeButton,
                              tooltip: A.Z.Messages.CLOSE,
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
                    (0, i.jsx)(h.Z, {
                        className: x.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(
                        _.Z,
                        {
                            message: t,
                            channel: s,
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
function b(e) {
    return (0, i.jsx)(C.Z, {
        Icon: l.AtIcon,
        header: A.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
        tip: A.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
    });
}
