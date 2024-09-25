n.d(t, {
    Lp: function () {
        return et;
    },
    NN: function () {
        return eo;
    },
    TJ: function () {
        return en;
    },
    au: function () {
        return e_;
    },
    kZ: function () {
        return ed;
    },
    m9: function () {
        return ec;
    },
    og: function () {
        return ef;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    _ = n(91192),
    E = n(442837),
    f = n(692547),
    h = n(481060),
    p = n(738619),
    m = n(393238),
    I = n(963374),
    T = n(884338),
    g = n(446489),
    S = n(95398),
    A = n(406432),
    v = n(169525),
    N = n(566006),
    O = n(255269),
    R = n(937889),
    C = n(443877),
    y = n(524444),
    b = n(287151),
    L = n(267128),
    D = n(695346),
    M = n(433355),
    P = n(592125),
    U = n(496675),
    w = n(699516),
    x = n(451478),
    G = n(55935),
    k = n(109434),
    B = n(456269),
    F = n(109590),
    Z = n(660189),
    V = n(208970),
    H = n(73315),
    Y = n(470623),
    j = n(196255),
    W = n(858543),
    K = n(265641),
    z = n(627896),
    q = n(883728),
    Q = n(981631),
    X = n(217702),
    $ = n(689938),
    J = n(646230),
    ee = n(554034);
let et = 72,
    en = 72;
function er(e) {
    let { threadId: t, overrideMedia: n } = e,
        r = (0, E.e7)([P.Z], () => P.Z.getChannel(t));
    u()(null != r, 'the thread should not be null here, a store must have missed an update');
    let i = (0, E.e7)([M.ZP], () => M.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
        { firstMessage: a } = (0, F.cl)(r),
        { content: o, firstMedia: s } = (0, B.mX)({ firstMessage: a }),
        l = null != n ? n : s,
        { messageCountText: c } = (0, B.nP)(r);
    return {
        channel: r,
        isOpen: i,
        messageCount: c,
        firstMessage: a,
        content: o,
        media: l
    };
}
t.ZP = a.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: r, overrideMedia: o, className: l, containerWidth: u } = e,
        {
            channel: c,
            isOpen: d,
            messageCount: E,
            firstMessage: f,
            content: p,
            media: I
        } = er({
            threadId: t,
            overrideMedia: o
        }),
        { ref: T, height: g } = (0, m.Z)(),
        S = (0, Y.xH)((e) => e.setCardHeight);
    a.useEffect(() => {
        null != g && S(t, g);
    }, [g, S, t]),
        a.useEffect(() => {
            null == r || r(T.current, t);
        }, [T, r, t]);
    let A = a.useRef(null),
        { handleLeftClick: v, handleRightClick: N } = (0, q.Z)({
            facepileRef: A,
            goToThread: n,
            channel: c
        }),
        { role: O, onFocus: R, ...C } = (0, _.JA)(t),
        { isFocused: y, handleFocus: b, handleBlur: L } = (0, K.Z)(R);
    return (0, i.jsxs)('div', {
        ref: T,
        'data-item-id': t,
        onClick: v,
        onContextMenu: N,
        className: s()(J.container, l, { [J.isOpen]: d }),
        children: [
            (0, i.jsx)(h.Clickable, {
                onClick: v,
                focusProps: { ringTarget: T },
                onContextMenu: N,
                'aria-label': $.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                    title: c.name,
                    count: E
                }),
                className: J.focusTarget,
                onFocus: b,
                onBlur: L,
                ...C
            }),
            (0, i.jsxs)('div', {
                className: J.left,
                children: [
                    (0, i.jsx)(h.HeadingLevel, {
                        children: (0, i.jsx)(ea, {
                            channel: c,
                            firstMessage: f,
                            content: p,
                            hasMediaAttachment: null != I,
                            containerWidth: u
                        })
                    }),
                    (0, i.jsx)(h.FocusBlock, {
                        enabled: !y,
                        children: (0, i.jsx)(eu, {
                            channel: c,
                            firstMessage: f,
                            facepileRef: A
                        })
                    })
                ]
            }),
            (null == f ? void 0 : f.blocked) || null == I
                ? null
                : (0, i.jsx)(eh, {
                      channel: c,
                      firstMedia: I
                  })
        ]
    });
});
let ei = 24;
function ea(e) {
    let { channel: t, firstMessage: n, content: r, hasMediaAttachment: a, containerWidth: o } = e,
        { isNew: l, hasUnreads: u } = (0, B.J$)(t),
        c = eo(t),
        { postTitleRef: d, isNewBadgeOverflow: _ } = (0, z.x)(l, ei, o);
    return (0, i.jsxs)('div', {
        className: J.body,
        children: [
            (0, i.jsx)(W.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: s()(J.header, { [J.withNewBadgeOverflow]: _ }),
                children: (0, i.jsxs)('div', {
                    className: J.headerText,
                    children: [
                        (0, i.jsx)(h.Heading, {
                            variant: 'heading-lg/semibold',
                            color: u ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: J.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: d,
                                children: [
                                    c,
                                    l &&
                                        (0, i.jsx)('span', {
                                            className: J.newBadgeWrapper,
                                            children: (0, i.jsx)(h.TextBadge, {
                                                className: J.newBadge,
                                                color: f.Z.unsafe_rawColors.BRAND_260.css,
                                                text: $.Z.Messages.NEW
                                            })
                                        })
                                ]
                            })
                        }),
                        l &&
                            _ &&
                            (0, i.jsx)(h.TextBadge, {
                                className: J.newBadge,
                                color: f.Z.unsafe_rawColors.BRAND_260.css,
                                text: $.Z.Messages.NEW
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: J.message,
                children: (0, i.jsx)(el, {
                    channel: t,
                    message: n,
                    content: r,
                    hasMediaAttachment: a,
                    hasUnreads: u
                })
            })
        ]
    });
}
function eo(e) {
    let t = (0, E.e7)([V.Z], () => V.Z.getHasSearchResults(e.parent_id)),
        n = (0, E.e7)([V.Z], () => V.Z.getSearchQuery(e.parent_id)),
        r = a.useMemo(() => (0, I.nC)(t && null != n ? n : ''), [t, n]);
    return a.useMemo(
        () =>
            (0, R.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: r }
            ).content,
        [e.name, r]
    );
}
function es(e) {
    let { message: t, channel: n, content: r, hasMediaAttachment: a, hasUnreads: o } = e,
        l = (0, E.e7)([w.Z], () => null != t && w.Z.isBlockedForMessage(t)),
        u = (0, E.e7)([Z.Z], () => Z.Z.isLoading(n.id)),
        c = (0, E.e7)([U.Z], () => U.Z.can(Q.Plq.MANAGE_MESSAGES, n)),
        d = D.cC.useSetting(),
        _ = null;
    if (l)
        _ = (0, i.jsx)(h.Text, {
            className: J.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: $.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, L.f)(t, r, l, s()(J.messageContent, ee.inlineFormat, ee.__invalid_smallFontSize), {
                      leadingIconClass: J.messageContentLeadingIcon,
                      trailingIconClass: J.messageContentTrailingIcon,
                      iconSize: X.WW
                  });
        _ =
            null != n
                ? (0, i.jsx)(h.Text, {
                      variant: 'text-sm/semibold',
                      color: o ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : a
                  ? null
                  : (0, i.jsx)(h.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: o ? 'header-secondary' : 'text-muted',
                        className: J.messageContent,
                        children: null == t ? (u ? null : $.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED) : e
                    });
    }
    return (0, i.jsxs)(S.a.Provider, {
        value: (0, O.Z)(d, c),
        children: [
            !l &&
                (0, i.jsx)(j.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != _,
                    hasUnreads: o
                }),
            (0, i.jsx)(h.FocusBlock, {
                className: J.messageFocusBlock,
                children: _
            })
        ]
    });
}
let el = a.memo(es);
function eu(e) {
    let { channel: t, facepileRef: n, firstMessage: r } = e,
        a = (0, B.Q)(t),
        o = (null == r ? void 0 : r.reactions) != null && r.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: J.footer,
        children: [
            o || null == r
                ? null
                : (0, i.jsx)(ed, {
                      firstMessage: r,
                      channel: t
                  }),
            null == r
                ? null
                : (0, i.jsx)(e_, {
                      firstMessage: r,
                      channel: t
                  }),
            (0, i.jsx)(ec, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: J.bullet,
                children: '\u2022'
            }),
            a.length > 0
                ? (0, i.jsxs)('div', {
                      className: J.typing,
                      children: [
                          (0, i.jsx)(ef, {
                              channel: t,
                              userIds: a,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: J.dots,
                              children: (0, i.jsx)(h.Dots, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(p.Z, {
                              channel: t,
                              className: J.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(eE, { channel: t })
        ]
    });
}
function ec(e) {
    let { channel: t, iconSize: n, showReadState: r = !1 } = e,
        { messageCountText: a, unreadCount: o } = (0, B.nP)(t),
        l = r && null == o;
    return (0, i.jsxs)('div', {
        className: s()(J.messageCountBox, { [J.hasRead]: l }),
        children: [
            (0, i.jsx)('span', {
                className: J.messageCountIcon,
                children: (0, i.jsx)(h.ChatIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof a
                ? (0, i.jsx)(g.Z, {
                      value: a,
                      digitWidth: 9,
                      className: J.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: J.messageCountText,
                      children: a
                  }),
            null == o
                ? null
                : (0, i.jsxs)(h.Text, {
                      className: J.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', $.Z.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({ count: o }), ')']
                  })
        ]
    });
}
function ed(e) {
    let { firstMessage: t, channel: n } = e,
        r = (0, E.e7)([P.Z], () => P.Z.getChannel(n.parent_id)),
        a = (0, B.Bs)(r),
        { disableReactionCreates: o, isLurking: s, isPendingMember: l } = (0, C.Z)(n);
    return null == a || o
        ? null
        : (0, i.jsx)(b.le, {
              className: J.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: s,
              isPendingMember: l,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: N.O.NORMAL,
              emojiSize: 'reaction'
          });
}
function e_(e) {
    var t;
    let { firstMessage: n, channel: r } = e,
        a = (0, B.IN)(n),
        { disableReactionUpdates: o, isLurking: s, isPendingMember: l } = (0, C.Z)(r);
    return null == a
        ? null
        : (0, i.jsx)(
              b.le,
              {
                  className: J.updateReactionButton,
                  message: n,
                  readOnly: o || r.isArchivedLockedThread(),
                  isLurking: s,
                  isPendingMember: l,
                  useChatFontScaling: !1,
                  type: a.burst_count >= a.count ? N.O.BURST : N.O.NORMAL,
                  emojiSize: 'reaction',
                  ...a
              },
              ''.concat(null !== (t = a.emoji.id) && void 0 !== t ? t : 0, ':').concat(a.emoji.name)
          );
}
function eE(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: r } = (0, k.H)(n.parent_id),
        a = (0, B.xw)(n, r),
        o = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        s = null == o ? null : $.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({ timestamp: (0, G.vc)(d()(o), 'LLLL') });
    return (0, i.jsx)(h.Tooltip, {
        text: s,
        tooltipClassName: J.timestampTooltip,
        children: (e) =>
            (0, i.jsx)(h.Text, {
                className: J.__invalid_activityText,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                ...e,
                children: a
            })
    });
}
function ef(e) {
    let { channel: t, userIds: n, facepileRef: r } = e,
        a = (0, B.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: r,
        children: (0, i.jsx)(T.Z, {
            className: J.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: a,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function eh(e) {
    let t,
        n,
        { channel: r, firstMedia: a } = e,
        o = (0, E.e7)([x.Z], () => x.Z.isFocused()),
        l = (0, A.d$)(a.src),
        u = D.QK.useSetting(),
        [c, d] = (0, v.hL)({
            media: a,
            channel: r
        }),
        _ = (0, v.MC)(d),
        { src: f, width: p, height: m, alt: I } = a;
    return (
        m > p ? (n = en) : (t = et),
        (0, i.jsx)(h.FocusBlock, {
            enabled: !0,
            children: (0, i.jsxs)('div', {
                className: J.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    f.startsWith('data:')
                        ? (0, i.jsx)(h.Image, {
                              src: f,
                              maxHeight: t,
                              maxWidth: n,
                              width: p,
                              height: m,
                              alt: null != I && c ? _ : I,
                              className: J.thumbnailContainer,
                              imageClassName: s()({
                                  [J.obscured]: c,
                                  [J.thumbnailOverride]: !0
                              })
                          })
                        : (0, y.Yi)({
                              src: f,
                              maxHeight: t,
                              maxWidth: n,
                              width: p,
                              height: m,
                              alt: null != I && c ? _ : I,
                              autoPlay: u,
                              animated: l && !c && o,
                              containerClassName: J.thumbnailContainer,
                              imageClassName: s()({ [J.obscured]: c }),
                              renderForwardComponent: Q.VqG
                          }),
                    c &&
                        (0, i.jsx)(H.Z, {
                            iconClassname: J.obscuredTag,
                            obscureReason: d
                        })
                ]
            })
        })
    );
}
