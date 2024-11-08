n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(524437),
    o = n(481060),
    s = n(235820),
    c = n(494404),
    d = n(110924),
    u = n(198620),
    m = n(294218),
    h = n(695346),
    f = n(592125),
    p = n(731290),
    _ = n(944486),
    g = n(455199),
    E = n(655354),
    C = n(999671),
    I = n(324081),
    x = n(240126),
    N = n(791914),
    v = n(981631),
    T = n(388032),
    S = n(835329);
let A = {
    offset: {
        left: 4,
        right: -12
    }
};
function b(e, t, n) {
    let i = t ? g.Z.guildFilter : null,
        r = t ? g.Z.roleFilter : null,
        l = t ? g.Z.everyoneFilter : null,
        a = null;
    null != e && null != i && (a = i === v.NgX.ALL_SERVERS ? null : e.getGuildId()), s.Z.fetchRecentMentions(n, v.DJj, a, r, l);
}
function j(e) {
    let { setTab: t, onJump: n, badgeState: o, closePopout: m } = e,
        h = (0, l.e7)([f.Z, _.Z], () => f.Z.getChannel(_.Z.getChannelId())),
        {
            messages: p,
            hasMore: E,
            loading: I,
            guildFilter: x,
            roleFilter: A,
            everyoneFilter: j
        } = (0, l.cj)([g.Z], () => ({
            messages: g.Z.getMentions(),
            hasMore: g.Z.hasMore,
            loading: g.Z.loading,
            guildFilter: g.Z.guildFilter,
            roleFilter: g.Z.roleFilter,
            everyoneFilter: g.Z.everyoneFilter
        })),
        Z = (0, d.Z)(x),
        L = (0, d.Z)(A),
        y = (0, d.Z)(j);
    r.useEffect(() => {
        if (!g.Z.hasLoadedEver) {
            b(h, !0);
            return;
        }
        ((null != Z && x !== Z) || (null != L && A !== L) || (null != y && j !== y)) && b(h, !0);
    }, [Z, x, L, A, y, j, h, !0]);
    r.useEffect(() => {
        (null == p ? void 0 : p.some(u.k5)) && (s.Z.clearMentions(), b(h, !0));
    }, []),
        r.useEffect(
            () => () => {
                s.Z.truncateMentions(v.DJj);
            },
            []
        );
    let O = r.useCallback(
        () =>
            (0, i.jsx)(N.Z, {
                tab: a.X.MENTIONS,
                setTab: t,
                badgeState: o,
                closePopout: m,
                children: (0, i.jsx)(C.Z, {})
            }),
        [!0, t, o, m]
    );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(c.ZP, {
            className: S.recentMentionsPopout,
            scrollerClassName: S.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
                s.Z.deleteRecentMention(e.id);
            },
            channel: h,
            messages: p,
            loading: I,
            hasMore: E,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                b(h, !0, null != p && p.length > 0 ? p[p.length - 1].id : null);
            },
            canCloseAllMessages: !0,
            renderHeader: O,
            renderEmptyState: P,
            renderMessage: R,
            'aria-label': T.intl.string(T.t.jbV6MD),
            listName: 'recents'
        })
    });
}
function Z(e, t) {
    return [
        (0, i.jsx)(
            L,
            {
                message: e,
                gotoMessage: t
            },
            e.id
        )
    ];
}
function R(e, t) {
    return [
        (0, i.jsx)(
            L,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function L(e) {
    let { message: t, gotoMessage: n, dismissible: r } = e;
    if (null == t) return null;
    let l = f.Z.getChannel(t.channel_id);
    if (null == l) return null;
    let a = p.Z.didAgree(l.getGuildId()),
        c = !!l.isNSFW() && !a;
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(I.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != r
                        ? (0, i.jsx)(o.CircleIconButton, {
                              className: S.closeButton,
                              tooltip: T.intl.string(T.t.cpT0Cg),
                              color: o.CircleIconButtonColors.TERTIARY,
                              icon: (0, i.jsx)(o.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => s.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: S.messageContainer,
                children: [
                    (0, i.jsx)(E.Z, {
                        className: S.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(
                        m.Z,
                        {
                            message: t,
                            channel: l,
                            className: S.message,
                            hideAccessories: c,
                            compact: h.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: A,
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
    return (0, i.jsx)(x.Z, {
        Icon: o.AtIcon,
        header: T.intl.string(T.t['bgDz7+']),
        tip: T.intl.string(T.t.NS15vr)
    });
}
