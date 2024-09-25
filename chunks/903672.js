n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(524437),
    s = n(481060),
    l = n(235820),
    u = n(494404),
    c = n(110924),
    d = n(198620),
    _ = n(294218),
    E = n(695346),
    f = n(592125),
    h = n(731290),
    p = n(944486),
    m = n(455199),
    I = n(655354),
    T = n(999671),
    g = n(324081),
    S = n(240126),
    A = n(791914),
    v = n(981631),
    N = n(689938),
    O = n(42967);
let R = 'Recent Mentions',
    C = {
        offset: {
            left: 4,
            right: -12
        }
    };
function y(e, t, n) {
    let r = t ? m.Z.guildFilter : null,
        i = t ? m.Z.roleFilter : null,
        a = t ? m.Z.everyoneFilter : null,
        o = null;
    null != e && null != r && (o = r === v.NgX.ALL_SERVERS ? null : e.getGuildId()), l.Z.fetchRecentMentions(n, v.DJj, o, i, a);
}
function b(e) {
    let { setTab: t, onJump: n, badgeState: s, closePopout: _ } = e,
        E = (0, a.e7)([f.Z, p.Z], () => f.Z.getChannel(p.Z.getChannelId())),
        {
            messages: h,
            hasMore: I,
            loading: g,
            guildFilter: S,
            roleFilter: C,
            everyoneFilter: b
        } = (0, a.cj)([m.Z], () => ({
            messages: m.Z.getMentions(),
            hasMore: m.Z.hasMore,
            loading: m.Z.loading,
            guildFilter: m.Z.guildFilter,
            roleFilter: m.Z.roleFilter,
            everyoneFilter: m.Z.everyoneFilter
        })),
        M = !0,
        U = (0, c.Z)(S),
        w = (0, c.Z)(C),
        x = (0, c.Z)(b);
    function G() {
        y(E, M, null != h && h.length > 0 ? h[h.length - 1].id : null);
    }
    function k(e) {
        l.Z.deleteRecentMention(e.id);
    }
    i.useEffect(() => {
        if (!m.Z.hasLoadedEver) {
            y(E, M);
            return;
        }
        M && ((null != U && S !== U) || (null != w && C !== w) || (null != x && b !== x)) && y(E, M);
    }, [U, S, w, C, x, b, E, M]),
        i.useEffect(() => {
            (null == h ? void 0 : h.some(d.k5)) && (l.Z.clearMentions(), y(E, M));
        }, []),
        i.useEffect(
            () => () => {
                l.Z.truncateMentions(v.DJj);
            },
            []
        );
    let B = i.useCallback(
        () =>
            (0, r.jsx)(A.Z, {
                tab: o.X.MENTIONS,
                setTab: t,
                badgeState: s,
                closePopout: _,
                children: M ? (0, r.jsx)(T.Z, {}) : null
            }),
        [M, t, s, _]
    );
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(u.ZP, {
            className: O.recentMentionsPopout,
            scrollerClassName: O.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: k,
            channel: E,
            messages: h,
            loading: g,
            hasMore: I,
            analyticsName: R,
            loadMore: G,
            canCloseAllMessages: !0,
            renderHeader: B,
            renderEmptyState: P,
            renderMessage: M ? D : L,
            'aria-label': N.Z.Messages.RECENT_MENTIONS,
            listName: 'recents'
        })
    });
}
function L(e, t) {
    return [
        (0, r.jsx)(
            M,
            {
                message: e,
                gotoMessage: t
            },
            e.id
        )
    ];
}
function D(e, t) {
    return [
        (0, r.jsx)(
            M,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function M(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let a = f.Z.getChannel(t.channel_id);
    if (null == a) return null;
    let o = h.Z.didAgree(a.getGuildId()),
        u = !!a.isNSFW() && !o;
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsx)(g.Z, {
                channel: a,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(s.CircleIconButton, {
                              className: O.closeButton,
                              tooltip: N.Z.Messages.CLOSE,
                              color: s.CircleIconButtonColors.TERTIARY,
                              icon: (0, r.jsx)(s.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => l.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: O.messageContainer,
                children: [
                    (0, r.jsx)(I.Z, {
                        className: O.jumpMessageButton,
                        onJump: n
                    }),
                    (0, r.jsx)(
                        _.Z,
                        {
                            message: t,
                            channel: a,
                            className: O.message,
                            hideAccessories: u,
                            compact: E.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: C,
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
    return (0, r.jsx)(S.Z, {
        Icon: s.AtIcon,
        header: N.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
        tip: N.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
    });
}
