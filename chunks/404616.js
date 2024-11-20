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
        return ec;
    },
    kZ: function () {
        return er;
    },
    m9: function () {
        return es;
    },
    og: function () {
        return eu;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    r = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(976649),
    h = n(91192),
    m = n(442837),
    p = n(692547),
    f = n(481060),
    g = n(738619),
    v = n(393238),
    b = n(963374),
    T = n(884338),
    x = n(446489),
    _ = n(95398),
    S = n(406432),
    C = n(169525),
    I = n(566006),
    j = n(255269),
    E = n(937889),
    R = n(443877),
    N = n(524444),
    Z = n(287151),
    y = n(267128),
    A = n(695346),
    O = n(433355),
    M = n(592125),
    w = n(496675),
    P = n(699516),
    L = n(451478),
    k = n(55935),
    U = n(109434),
    B = n(456269),
    D = n(109590),
    F = n(660189),
    V = n(208970),
    H = n(73315),
    G = n(470623),
    W = n(196255),
    z = n(858543),
    J = n(265641),
    K = n(627896),
    X = n(883728),
    Y = n(981631),
    q = n(217702),
    $ = n(388032),
    Q = n(724754),
    ee = n(882530);
let et = 72,
    en = 72;
t.ZP = o.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: a, overrideMedia: s, className: c, containerWidth: d } = e,
        {
            channel: p,
            isOpen: g,
            messageCount: b,
            firstMessage: T,
            content: x,
            media: _
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                i = (0, m.e7)([M.Z], () => M.Z.getChannel(t));
            r()(null != i, 'the thread should not be null here, a store must have missed an update');
            let o = (0, m.e7)([O.ZP], () => O.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                { firstMessage: a } = (0, D.cl)(i),
                { content: l, firstMedia: s } = (0, B.mX)({ firstMessage: a }),
                { messageCountText: c } = (0, B.nP)(i);
            return {
                channel: i,
                isOpen: o,
                messageCount: c,
                firstMessage: a,
                content: l,
                media: null != n ? n : s
            };
        })({
            threadId: t,
            overrideMedia: s
        }),
        { ref: S, height: C } = (0, v.Z)(),
        I = (0, G.xH)((e) => e.setCardHeight, u.X);
    o.useEffect(() => {
        null != C && I(t, C);
    }, [C, I, t]),
        o.useEffect(() => {
            null == a || a(S.current, t);
        }, [S, a, t]);
    let j = o.useRef(null),
        { handleLeftClick: E, handleRightClick: R } = (0, X.Z)({
            facepileRef: j,
            goToThread: n,
            channel: p
        }),
        { role: N, onFocus: Z, ...y } = (0, h.JA)(t),
        { isFocused: A, handleFocus: w, handleBlur: P } = (0, J.Z)(Z);
    return (0, i.jsxs)('div', {
        ref: S,
        'data-item-id': t,
        onClick: E,
        onContextMenu: R,
        className: l()(Q.container, c, { [Q.isOpen]: g }),
        children: [
            (0, i.jsx)(f.Clickable, {
                onClick: E,
                focusProps: { ringTarget: S },
                onContextMenu: R,
                'aria-label': $.intl.formatToPlainString($.t.pgYN6e, {
                    title: p.name,
                    count: b
                }),
                className: Q.focusTarget,
                onFocus: w,
                onBlur: P,
                ...y
            }),
            (0, i.jsxs)('div', {
                className: Q.left,
                children: [
                    (0, i.jsx)(f.HeadingLevel, {
                        children: (0, i.jsx)(ei, {
                            channel: p,
                            firstMessage: T,
                            content: x,
                            hasMediaAttachment: null != _,
                            containerWidth: d
                        })
                    }),
                    (0, i.jsx)(f.FocusBlock, {
                        enabled: !A,
                        children: (0, i.jsx)(el, {
                            channel: p,
                            firstMessage: T,
                            facepileRef: j
                        })
                    })
                ]
            }),
            (null == T ? void 0 : T.blocked) || null == _
                ? null
                : (0, i.jsx)(eh, {
                      channel: p,
                      firstMedia: _
                  })
        ]
    });
});
function ei(e) {
    let { channel: t, firstMessage: n, content: o, hasMediaAttachment: a, containerWidth: s } = e,
        { isNew: r, hasUnreads: c } = (0, B.J$)(t),
        d = eo(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, K.x)(r, 24, s);
    return (0, i.jsxs)('div', {
        className: Q.body,
        children: [
            (0, i.jsx)(z.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: l()(Q.header, { [Q.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: Q.headerText,
                    children: [
                        (0, i.jsx)(f.Heading, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: Q.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: u,
                                children: [
                                    d,
                                    r &&
                                        (0, i.jsx)('span', {
                                            className: Q.newBadgeWrapper,
                                            children: (0, i.jsx)(f.TextBadge, {
                                                className: Q.newBadge,
                                                color: p.Z.unsafe_rawColors.BRAND_260.css,
                                                text: $.intl.string($.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        r &&
                            h &&
                            (0, i.jsx)(f.TextBadge, {
                                className: Q.newBadge,
                                color: p.Z.unsafe_rawColors.BRAND_260.css,
                                text: $.intl.string($.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: Q.message,
                children: (0, i.jsx)(ea, {
                    channel: t,
                    message: n,
                    content: o,
                    hasMediaAttachment: a,
                    hasUnreads: c
                })
            })
        ]
    });
}
function eo(e) {
    let t = (0, m.e7)([V.Z], () => V.Z.getHasSearchResults(e.parent_id)),
        n = (0, m.e7)([V.Z], () => V.Z.getSearchQuery(e.parent_id)),
        i = o.useMemo(() => (0, b.nC)(t && null != n ? n : ''), [t, n]);
    return o.useMemo(
        () =>
            (0, E.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: i }
            ).content,
        [e.name, i]
    );
}
let ea = o.memo(function (e) {
    let { message: t, channel: n, content: o, hasMediaAttachment: a, hasUnreads: s } = e,
        r = (0, m.e7)([P.Z], () => null != t && P.Z.isBlockedForMessage(t)),
        c = (0, m.e7)([F.Z], () => F.Z.isLoading(n.id)),
        d = (0, m.e7)([w.Z], () => w.Z.can(Y.Plq.MANAGE_MESSAGES, n)),
        u = A.cC.useSetting(),
        h = null;
    if (r)
        h = (0, i.jsx)(f.Text, {
            className: Q.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: $.intl.string($.t.Lkp2fH)
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, y.f)(t, o, r, l()(Q.messageContent, ee.inlineFormat, ee.__invalid_smallFontSize), {
                      leadingIconClass: Q.messageContentLeadingIcon,
                      trailingIconClass: Q.messageContentTrailingIcon,
                      iconSize: q.WW
                  });
        h =
            null != n
                ? (0, i.jsx)(f.Text, {
                      variant: 'text-sm/semibold',
                      color: s ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : a
                  ? null
                  : (0, i.jsx)(f.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: s ? 'header-secondary' : 'text-muted',
                        className: Q.messageContent,
                        children: null == t ? (c ? null : $.intl.string($.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(_.a.Provider, {
        value: (0, j.Z)(u, d),
        children: [
            !r &&
                (0, i.jsx)(W.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != h,
                    hasUnreads: s
                }),
            (0, i.jsx)(f.FocusBlock, {
                className: Q.messageFocusBlock,
                children: h
            })
        ]
    });
});
function el(e) {
    let { channel: t, facepileRef: n, firstMessage: o } = e,
        a = (0, B.Q)(t),
        l = (null == o ? void 0 : o.reactions) != null && o.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: Q.footer,
        children: [
            l || null == o
                ? null
                : (0, i.jsx)(er, {
                      firstMessage: o,
                      channel: t
                  }),
            null == o
                ? null
                : (0, i.jsx)(ec, {
                      firstMessage: o,
                      channel: t
                  }),
            (0, i.jsx)(es, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: Q.bullet,
                children: '\u2022'
            }),
            a.length > 0
                ? (0, i.jsxs)('div', {
                      className: Q.typing,
                      children: [
                          (0, i.jsx)(eu, {
                              channel: t,
                              userIds: a,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: Q.dots,
                              children: (0, i.jsx)(f.Dots, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(g.Z, {
                              channel: t,
                              className: Q.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(ed, { channel: t })
        ]
    });
}
function es(e) {
    let { channel: t, iconSize: n, showReadState: o = !1 } = e,
        { messageCountText: a, unreadCount: s } = (0, B.nP)(t);
    return (0, i.jsxs)('div', {
        className: l()(Q.messageCountBox, { [Q.hasRead]: o && null == s }),
        children: [
            (0, i.jsx)('span', {
                className: Q.messageCountIcon,
                children: (0, i.jsx)(f.ChatIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof a
                ? (0, i.jsx)(x.Z, {
                      value: a,
                      digitWidth: 9,
                      className: Q.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: Q.messageCountText,
                      children: a
                  }),
            null == s
                ? null
                : (0, i.jsxs)(f.Text, {
                      className: Q.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', $.intl.format($.t.z3PEtr, { count: s }), ')']
                  })
        ]
    });
}
function er(e) {
    let { firstMessage: t, channel: n } = e,
        o = (0, m.e7)([M.Z], () => M.Z.getChannel(n.parent_id)),
        a = (0, B.Bs)(o),
        { disableReactionCreates: l, isLurking: s, isPendingMember: r } = (0, R.Z)(n);
    return null == a || l
        ? null
        : (0, i.jsx)(Z.le, {
              className: Q.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: s,
              isPendingMember: r,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: I.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function ec(e) {
    var t;
    let { firstMessage: n, channel: o } = e,
        a = (0, B.IN)(n),
        { disableReactionUpdates: l, isLurking: s, isPendingMember: r } = (0, R.Z)(o);
    return null == a
        ? null
        : (0, i.jsx)(
              Z.le,
              {
                  className: Q.updateReactionButton,
                  message: n,
                  readOnly: l || o.isArchivedLockedThread(),
                  isLurking: s,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: a.burst_count >= a.count ? I.O.BURST : I.O.NORMAL,
                  emojiSize: 'reaction',
                  emojiSizeTooltip: 'reaction',
                  ...a
              },
              ''.concat(null !== (t = a.emoji.id) && void 0 !== t ? t : 0, ':').concat(a.emoji.name)
          );
}
function ed(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: o } = (0, U.H)(n.parent_id),
        a = (0, B.xw)(n, o),
        l = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        s = null == l ? null : $.intl.formatToPlainString($.t['13euCQ'], { timestamp: (0, k.vc)(d()(l), 'LLLL') });
    return (0, i.jsx)(f.Tooltip, {
        text: s,
        tooltipClassName: Q.timestampTooltip,
        children: (e) =>
            (0, i.jsx)(f.Text, {
                className: Q.__invalid_activityText,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                ...e,
                children: a
            })
    });
}
function eu(e) {
    let { channel: t, userIds: n, facepileRef: o } = e,
        a = (0, B.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(T.Z, {
            className: Q.__invalid_facepile,
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
        { channel: o, firstMedia: a } = e,
        s = (0, m.e7)([L.Z], () => L.Z.isFocused()),
        r = (0, S.d$)(a.src),
        c = A.QK.useSetting(),
        [d, u] = (0, C.hL)({
            media: a,
            channel: o
        }),
        h = (0, C.MC)(u),
        { src: p, width: g, height: v, alt: b } = a;
    return (
        v > g ? (n = en) : (t = et),
        (0, i.jsx)(f.FocusBlock, {
            enabled: !0,
            children: (0, i.jsxs)('div', {
                className: Q.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    p.startsWith('data:')
                        ? (0, i.jsx)(f.Image, {
                              src: p,
                              maxHeight: t,
                              maxWidth: n,
                              width: g,
                              height: v,
                              alt: null != b && d ? h : b,
                              className: Q.thumbnailContainer,
                              imageClassName: l()({
                                  [Q.obscured]: d,
                                  [Q.thumbnailOverride]: !0
                              })
                          })
                        : (0, N.Yi)({
                              src: p,
                              maxHeight: t,
                              maxWidth: n,
                              width: g,
                              height: v,
                              alt: null != b && d ? h : b,
                              autoPlay: c,
                              animated: r && !d && s,
                              containerClassName: Q.thumbnailContainer,
                              imageClassName: l()({ [Q.obscured]: d })
                          }),
                    d &&
                        (0, i.jsx)(H.Z, {
                            iconClassname: Q.obscuredTag,
                            obscureReason: u
                        })
                ]
            })
        })
    );
}
