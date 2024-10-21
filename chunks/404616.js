n.d(t, {
    Lp: function () {
        return ee;
    },
    NN: function () {
        return ei;
    },
    TJ: function () {
        return et;
    },
    au: function () {
        return er;
    },
    kZ: function () {
        return el;
    },
    m9: function () {
        return ea;
    },
    og: function () {
        return ed;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(512722),
    r = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(91192),
    h = n(442837),
    m = n(692547),
    p = n(481060),
    g = n(738619),
    f = n(393238),
    _ = n(963374),
    T = n(884338),
    v = n(446489),
    E = n(95398),
    b = n(406432),
    I = n(169525),
    R = n(566006),
    S = n(255269),
    C = n(937889),
    x = n(443877),
    N = n(524444),
    O = n(287151),
    Z = n(267128),
    A = n(695346),
    j = n(433355),
    M = n(592125),
    L = n(496675),
    y = n(699516),
    P = n(451478),
    U = n(55935),
    w = n(109434),
    D = n(456269),
    k = n(109590),
    B = n(660189),
    F = n(208970),
    V = n(73315),
    H = n(470623),
    G = n(196255),
    W = n(858543),
    z = n(265641),
    K = n(627896),
    Y = n(883728),
    J = n(981631),
    X = n(217702),
    q = n(689938),
    $ = n(646230),
    Q = n(554034);
let ee = 72,
    et = 72;
t.ZP = s.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: o, overrideMedia: l, className: c, containerWidth: d } = e,
        {
            channel: m,
            isOpen: g,
            messageCount: _,
            firstMessage: T,
            content: v,
            media: E
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                i = (0, h.e7)([M.Z], () => M.Z.getChannel(t));
            r()(null != i, 'the thread should not be null here, a store must have missed an update');
            let s = (0, h.e7)([j.ZP], () => j.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                { firstMessage: o } = (0, k.cl)(i),
                { content: a, firstMedia: l } = (0, D.mX)({ firstMessage: o }),
                { messageCountText: c } = (0, D.nP)(i);
            return {
                channel: i,
                isOpen: s,
                messageCount: c,
                firstMessage: o,
                content: a,
                media: null != n ? n : l
            };
        })({
            threadId: t,
            overrideMedia: l
        }),
        { ref: b, height: I } = (0, f.Z)(),
        R = (0, H.xH)((e) => e.setCardHeight);
    s.useEffect(() => {
        null != I && R(t, I);
    }, [I, R, t]),
        s.useEffect(() => {
            null == o || o(b.current, t);
        }, [b, o, t]);
    let S = s.useRef(null),
        { handleLeftClick: C, handleRightClick: x } = (0, Y.Z)({
            facepileRef: S,
            goToThread: n,
            channel: m
        }),
        { role: N, onFocus: O, ...Z } = (0, u.JA)(t),
        { isFocused: A, handleFocus: L, handleBlur: y } = (0, z.Z)(O);
    return (0, i.jsxs)('div', {
        ref: b,
        'data-item-id': t,
        onClick: C,
        onContextMenu: x,
        className: a()($.container, c, { [$.isOpen]: g }),
        children: [
            (0, i.jsx)(p.Clickable, {
                onClick: C,
                focusProps: { ringTarget: b },
                onContextMenu: x,
                'aria-label': q.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                    title: m.name,
                    count: _
                }),
                className: $.focusTarget,
                onFocus: L,
                onBlur: y,
                ...Z
            }),
            (0, i.jsxs)('div', {
                className: $.left,
                children: [
                    (0, i.jsx)(p.HeadingLevel, {
                        children: (0, i.jsx)(en, {
                            channel: m,
                            firstMessage: T,
                            content: v,
                            hasMediaAttachment: null != E,
                            containerWidth: d
                        })
                    }),
                    (0, i.jsx)(p.FocusBlock, {
                        enabled: !A,
                        children: (0, i.jsx)(eo, {
                            channel: m,
                            firstMessage: T,
                            facepileRef: S
                        })
                    })
                ]
            }),
            (null == T ? void 0 : T.blocked) || null == E
                ? null
                : (0, i.jsx)(eu, {
                      channel: m,
                      firstMedia: E
                  })
        ]
    });
});
function en(e) {
    let { channel: t, firstMessage: n, content: s, hasMediaAttachment: o, containerWidth: l } = e,
        { isNew: r, hasUnreads: c } = (0, D.J$)(t),
        d = ei(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, K.x)(r, 24, l);
    return (0, i.jsxs)('div', {
        className: $.body,
        children: [
            (0, i.jsx)(W.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: a()($.header, { [$.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: $.headerText,
                    children: [
                        (0, i.jsx)(p.Heading, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: $.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: u,
                                children: [
                                    d,
                                    r &&
                                        (0, i.jsx)('span', {
                                            className: $.newBadgeWrapper,
                                            children: (0, i.jsx)(p.TextBadge, {
                                                className: $.newBadge,
                                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                                text: q.Z.Messages.NEW
                                            })
                                        })
                                ]
                            })
                        }),
                        r &&
                            h &&
                            (0, i.jsx)(p.TextBadge, {
                                className: $.newBadge,
                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                text: q.Z.Messages.NEW
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: $.message,
                children: (0, i.jsx)(es, {
                    channel: t,
                    message: n,
                    content: s,
                    hasMediaAttachment: o,
                    hasUnreads: c
                })
            })
        ]
    });
}
function ei(e) {
    let t = (0, h.e7)([F.Z], () => F.Z.getHasSearchResults(e.parent_id)),
        n = (0, h.e7)([F.Z], () => F.Z.getSearchQuery(e.parent_id)),
        i = s.useMemo(() => (0, _.nC)(t && null != n ? n : ''), [t, n]);
    return s.useMemo(
        () =>
            (0, C.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: i }
            ).content,
        [e.name, i]
    );
}
let es = s.memo(function (e) {
    let { message: t, channel: n, content: s, hasMediaAttachment: o, hasUnreads: l } = e,
        r = (0, h.e7)([y.Z], () => null != t && y.Z.isBlockedForMessage(t)),
        c = (0, h.e7)([B.Z], () => B.Z.isLoading(n.id)),
        d = (0, h.e7)([L.Z], () => L.Z.can(J.Plq.MANAGE_MESSAGES, n)),
        u = A.cC.useSetting(),
        m = null;
    if (r)
        m = (0, i.jsx)(p.Text, {
            className: $.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: q.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, Z.f)(t, s, r, a()($.messageContent, Q.inlineFormat, Q.__invalid_smallFontSize), {
                      leadingIconClass: $.messageContentLeadingIcon,
                      trailingIconClass: $.messageContentTrailingIcon,
                      iconSize: X.WW
                  });
        m =
            null != n
                ? (0, i.jsx)(p.Text, {
                      variant: 'text-sm/semibold',
                      color: l ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : o
                  ? null
                  : (0, i.jsx)(p.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: l ? 'header-secondary' : 'text-muted',
                        className: $.messageContent,
                        children: null == t ? (c ? null : q.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED) : e
                    });
    }
    return (0, i.jsxs)(E.a.Provider, {
        value: (0, S.Z)(u, d),
        children: [
            !r &&
                (0, i.jsx)(G.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != m,
                    hasUnreads: l
                }),
            (0, i.jsx)(p.FocusBlock, {
                className: $.messageFocusBlock,
                children: m
            })
        ]
    });
});
function eo(e) {
    let { channel: t, facepileRef: n, firstMessage: s } = e,
        o = (0, D.Q)(t),
        a = (null == s ? void 0 : s.reactions) != null && s.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: $.footer,
        children: [
            a || null == s
                ? null
                : (0, i.jsx)(el, {
                      firstMessage: s,
                      channel: t
                  }),
            null == s
                ? null
                : (0, i.jsx)(er, {
                      firstMessage: s,
                      channel: t
                  }),
            (0, i.jsx)(ea, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: $.bullet,
                children: '\u2022'
            }),
            o.length > 0
                ? (0, i.jsxs)('div', {
                      className: $.typing,
                      children: [
                          (0, i.jsx)(ed, {
                              channel: t,
                              userIds: o,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: $.dots,
                              children: (0, i.jsx)(p.Dots, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(g.Z, {
                              channel: t,
                              className: $.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(ec, { channel: t })
        ]
    });
}
function ea(e) {
    let { channel: t, iconSize: n, showReadState: s = !1 } = e,
        { messageCountText: o, unreadCount: l } = (0, D.nP)(t);
    return (0, i.jsxs)('div', {
        className: a()($.messageCountBox, { [$.hasRead]: s && null == l }),
        children: [
            (0, i.jsx)('span', {
                className: $.messageCountIcon,
                children: (0, i.jsx)(p.ChatIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof o
                ? (0, i.jsx)(v.Z, {
                      value: o,
                      digitWidth: 9,
                      className: $.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: $.messageCountText,
                      children: o
                  }),
            null == l
                ? null
                : (0, i.jsxs)(p.Text, {
                      className: $.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', q.Z.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({ count: l }), ')']
                  })
        ]
    });
}
function el(e) {
    let { firstMessage: t, channel: n } = e,
        s = (0, h.e7)([M.Z], () => M.Z.getChannel(n.parent_id)),
        o = (0, D.Bs)(s),
        { disableReactionCreates: a, isLurking: l, isPendingMember: r } = (0, x.Z)(n);
    return null == o || a
        ? null
        : (0, i.jsx)(O.le, {
              className: $.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: l,
              isPendingMember: r,
              emoji: o,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: R.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function er(e) {
    var t;
    let { firstMessage: n, channel: s } = e,
        o = (0, D.IN)(n),
        { disableReactionUpdates: a, isLurking: l, isPendingMember: r } = (0, x.Z)(s);
    return null == o
        ? null
        : (0, i.jsx)(
              O.le,
              {
                  className: $.updateReactionButton,
                  message: n,
                  readOnly: a || s.isArchivedLockedThread(),
                  isLurking: l,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: o.burst_count >= o.count ? R.O.BURST : R.O.NORMAL,
                  emojiSize: 'reaction',
                  emojiSizeTooltip: 'reaction',
                  ...o
              },
              ''.concat(null !== (t = o.emoji.id) && void 0 !== t ? t : 0, ':').concat(o.emoji.name)
          );
}
function ec(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: s } = (0, w.H)(n.parent_id),
        o = (0, D.xw)(n, s),
        a = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        l = null == a ? null : q.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({ timestamp: (0, U.vc)(d()(a), 'LLLL') });
    return (0, i.jsx)(p.Tooltip, {
        text: l,
        tooltipClassName: $.timestampTooltip,
        children: (e) =>
            (0, i.jsx)(p.Text, {
                className: $.__invalid_activityText,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                ...e,
                children: o
            })
    });
}
function ed(e) {
    let { channel: t, userIds: n, facepileRef: s } = e,
        o = (0, D.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: s,
        children: (0, i.jsx)(T.Z, {
            className: $.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: o,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function eu(e) {
    let t,
        n,
        { channel: s, firstMedia: o } = e,
        l = (0, h.e7)([P.Z], () => P.Z.isFocused()),
        r = (0, b.d$)(o.src),
        c = A.QK.useSetting(),
        [d, u] = (0, I.hL)({
            media: o,
            channel: s
        }),
        m = (0, I.MC)(u),
        { src: g, width: f, height: _, alt: T } = o;
    return (
        _ > f ? (n = et) : (t = ee),
        (0, i.jsx)(p.FocusBlock, {
            enabled: !0,
            children: (0, i.jsxs)('div', {
                className: $.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    g.startsWith('data:')
                        ? (0, i.jsx)(p.Image, {
                              src: g,
                              maxHeight: t,
                              maxWidth: n,
                              width: f,
                              height: _,
                              alt: null != T && d ? m : T,
                              className: $.thumbnailContainer,
                              imageClassName: a()({
                                  [$.obscured]: d,
                                  [$.thumbnailOverride]: !0
                              })
                          })
                        : (0, N.Yi)({
                              src: g,
                              maxHeight: t,
                              maxWidth: n,
                              width: f,
                              height: _,
                              alt: null != T && d ? m : T,
                              autoPlay: c,
                              animated: r && !d && l,
                              containerClassName: $.thumbnailContainer,
                              imageClassName: a()({ [$.obscured]: d })
                          }),
                    d &&
                        (0, i.jsx)(V.Z, {
                            iconClassname: $.obscuredTag,
                            obscureReason: u
                        })
                ]
            })
        })
    );
}
