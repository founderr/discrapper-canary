n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(442837),
    c = n(481060),
    d = n(904245),
    u = n(902840),
    h = n(607070),
    p = n(835473),
    m = n(95398),
    f = n(580747),
    g = n(135938),
    C = n(160404),
    x = n(765104),
    v = n(695346),
    _ = n(314897),
    I = n(323873),
    E = n(607744),
    b = n(375954),
    Z = n(496675),
    S = n(306680),
    N = n(62817),
    T = n(594174),
    j = n(459273),
    A = n(255269),
    y = n(47481),
    P = n(977391),
    M = n(959258),
    R = n(73274),
    L = n(419388),
    k = n(406534),
    O = n(981631),
    D = n(388032),
    w = n(991823);
let B = l.memo(
    function (e) {
        var t, n;
        let { className: r, messageGroupSpacing: u, scrollerClassName: p, channel: m, messages: f, unreadCount: g, showNewMessagesBar: x, messageDisplayCompact: v, channelStream: _, uploads: I, hasUnreads: E, editingMessageId: b, fontSize: S, keyboardModeEnabled: N, filterAfterTimestamp: T, showingQuarantineBanner: A, hideSummaries: y = !1, jumpBarClassName: M } = e,
            [B, U] = l.useState(!1),
            H = l.useMemo(
                () =>
                    v
                        ? (0, P.aJ)({
                              compact: !0,
                              messageGroups: 30,
                              groupRange: 4,
                              attachments: 8,
                              fontSize: S,
                              groupSpacing: u
                          })
                        : (0, P.aJ)({
                              compact: !1,
                              messageGroups: 26,
                              groupRange: 4,
                              attachments: 8,
                              fontSize: S,
                              groupSpacing: u
                          }),
                [v, S, u]
            ),
            G = (0, L.ZP)({
                messages: f,
                channel: m,
                compact: v,
                hasUnreads: E,
                focusId: b,
                placeholderHeight: H.totalHeight,
                canLoadMore: null == T,
                handleScrollToBottom: l.useCallback(() => U(!0), [U]),
                handleScrollFromBottom: l.useCallback(() => U(!1), [U])
            }),
            F = (0, R.Z)({
                scrollerRef: G.ref,
                isEditing: null != b,
                keyboardModeEnabled: N,
                hasMoreAfter: f.hasMoreAfter
            });
        let V = ((n = m), (0, o.e7)([C.Z], () => (Z.Z.can(O.Plq.READ_MESSAGE_HISTORY, n) ? null : C.Z.getViewingRolesTimestamp(n.getGuildId())))),
            {
                channelStreamMarkup: z,
                newMessagesBar: W,
                jumpToPresentBar: K,
                forumPostActionBar: Y,
                safetyWarningBanner: q
            } = (0, k.Z)({
                channel: m,
                messages: f,
                unreadCount: g,
                showNewMessagesBar: x,
                messageDisplayCompact: v,
                channelStream: _,
                uploads: I,
                loadMore: G.loadMore,
                scrollManager: G,
                specs: H,
                filterAfterTimestamp: null != T ? T : V,
                showingQuarantineBanner: A,
                hideSummaries: y,
                isAtBottom: B,
                jumpToPresent: () => {
                    if (f.hasPresent()) {
                        var e;
                        null === (e = G.ref.current) || void 0 === e || e.scrollToBottom({ animate: !h.Z.useReducedMotion });
                    } else d.Z.jumpToPresent(m.id, O.AQB);
                },
                jumpBarClassName: M
            });
        !(function (e) {
            let t = l.useCallback(() => {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom();
                }, [e]),
                n = l.useCallback(() => {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({ animate: !h.Z.useReducedMotion });
                }, [e]),
                i = l.useCallback(() => {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({ animate: !h.Z.useReducedMotion });
                }, [e]);
            (0, j.yp)({
                event: O.CkL.SCROLLTO_PRESENT,
                handler: t
            }),
                (0, j.yp)({
                    event: O.CkL.SCROLL_PAGE_UP,
                    handler: n
                }),
                (0, j.yp)({
                    event: O.CkL.SCROLL_PAGE_DOWN,
                    handler: i
                });
        })(G.ref);
        let X = (0, c.useFocusJumpSection)(),
            { ref: J, ...Q } = (0, s.l2)(F),
            $ = l.useCallback((e) => {
                var t;
                (G.ref.current = e), (J.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
            }, []);
        return (0, i.jsxs)(s.bG, {
            navigator: F,
            children: [
                null != q && q,
                (0, i.jsxs)('div', {
                    className: a()(w.messagesWrapper, r, 'group-spacing-'.concat(u)),
                    children: [
                        null == q && W,
                        (0, i.jsxs)(c.PinToBottomScrollerAuto, {
                            ref: $,
                            customTheme: !0,
                            className: a()(p, w.scroller),
                            contentClassName: w.scrollerContent,
                            onResize: G.handleResize,
                            onScroll: G.handleScroll,
                            onMouseDown: G.handleMouseDown,
                            onMouseUp: G.handleMouseUp,
                            ...X,
                            tabIndex: -1,
                            role: 'group',
                            children: [
                                Y,
                                (0, i.jsxs)('ol', {
                                    className: w.scrollerInner,
                                    'aria-label': D.intl.formatToPlainString(D.t.XarRiI, { channelName: m.name }),
                                    ...Q,
                                    children: [
                                        (0, i.jsx)('span', {
                                            className: w.navigationDescription,
                                            id: 'messagesNavigationDescription',
                                            'aria-hidden': !0,
                                            children: D.intl.string(D.t.Spb3s7)
                                        }),
                                        z,
                                        (0, i.jsx)('div', {
                                            className: a()({
                                                [w.scrollerSpacer]: !A,
                                                [w.empty]: 0 === f.length && !f.loadingMore,
                                                [w.emptyForum]: 1 === f.length && !f.loadingMore && m.isForumPost() && (null === (t = f.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(m))
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        K
                    ]
                })
            ]
        });
    },
    (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden
);
t.Z = l.memo(function (e) {
    let { channel: t, showingQuarantineBanner: n, hideSummaries: r = !1, forceCompact: a = !1, forceCozy: s = !1, ...c } = e,
        {
            canManageMessages: d,
            permissionVersion: C,
            canChat: j
        } = (function (e) {
            let t = e.getGuildId(),
                n = (0, o.e7)([E.Z], () => null == t || E.Z.canChatInGuild(t), [t]),
                { canManageMessages: i, permissionVersion: l } = (0, o.cj)(
                    [Z.Z],
                    () => ({
                        canManageMessages: Z.Z.can(O.Plq.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? Z.Z.getGuildVersion(t) : null
                    }),
                    [e, t]
                );
            return {
                canChat: n,
                permissionVersion: l,
                canManageMessages: i
            };
        })(t),
        {
            messageGroupSpacing: P,
            fontSize: R,
            messageDisplayCompact: L,
            renderSpoilers: k,
            keyboardModeEnabled: D
        } = (function () {
            let e = v.jU.useSetting(),
                t = v.cC.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: i,
                    keyboardModeEnabled: l
                } = (0, o.cj)([h.Z], () => {
                    let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = h.Z;
                    return {
                        messageGroupSpacing: e,
                        fontSize: t,
                        keyboardModeEnabled: n
                    };
                });
            return {
                messageGroupSpacing: n,
                messageDisplayCompact: e,
                renderSpoilers: t,
                fontSize: i,
                keyboardModeEnabled: l
            };
        })(),
        {
            messages: w,
            channelStream: U,
            oldestUnreadMessageId: H,
            editingMessageId: G
        } = (function (e) {
            var t, n;
            let i = (0, o.e7)([b.Z], () => b.Z.getMessages(e.id), [e.id]),
                r = (0, o.e7)(
                    [S.ZP],
                    () => {
                        var t;
                        return null !== (t = S.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null;
                    },
                    [e.id]
                ),
                { enabled: a } = g.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                s = null !== (n = null === (t = T.default.getUser(_.default.getId())) || void 0 === t ? void 0 : t.hasFlag(O.xW$.SPAMMER)) && void 0 !== n && n,
                c = (0, u.ts)(e),
                d = (0, f.Z)('use_topic_dividers_in_chat'),
                h = (0, o.Wu)(
                    [x.Z],
                    () => {
                        var t;
                        return c && d && null !== (t = x.Z.summaries(e.id)) && void 0 !== t ? t : [];
                    },
                    [c, e.id, d]
                ),
                m = (0, o.e7)([x.Z], () => (c ? x.Z.selectedSummary(e.id) : null), [c, e.id]),
                C = (function (e) {
                    let t = l.useMemo(() => {
                        let t = new Set();
                        return (
                            e.forEach((e) => {
                                null != e.applicationId && null == e.application && t.add(e.applicationId);
                            }),
                            Array.from(t)
                        );
                    }, [e]);
                    return (0, p.Z)(t);
                })(i),
                v = l.useMemo(
                    () =>
                        (0, y.Z)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: r,
                            treatSpam: a && !s,
                            summaries: h,
                            selectedSummary: m
                        }),
                    [i, e, r, a, h, m, C]
                );
            return {
                messages: i,
                channelStream: v,
                oldestUnreadMessageId: r,
                editingMessageId: (0, o.e7)([I.Z], () => {
                    var t;
                    return null === (t = I.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id;
                })
            };
        })(t);
    return (0, i.jsx)(m.a.Provider, {
        value: (0, A.Z)(k, d),
        children: (0, i.jsx)(M.v, {
            children: (0, i.jsx)(B, {
                ...c,
                messageGroupSpacing: P,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (a || L),
                messages: w,
                channelStream: U,
                permissionVersion: C,
                uploads: (0, o.e7)([N.Z], () => N.Z.getFiles(t.id), [t]),
                unreadCount: (0, o.e7)([S.ZP], () => S.ZP.getUnreadCount(t.id), [t]),
                hasUnreads: null != H,
                canChat: j,
                editingMessageId: G,
                fontSize: R,
                keyboardModeEnabled: D,
                showingQuarantineBanner: n,
                hideSummaries: r
            })
        })
    });
});
