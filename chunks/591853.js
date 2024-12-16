n.d(t, {
    Ll: function () {
        return ej;
    },
    St: function () {
        return ex;
    },
    WT: function () {
        return ep;
    },
    jL: function () {
        return eI;
    },
    wG: function () {
        return ef;
    },
    yR: function () {
        return ed;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(512722),
    s = n.n(o);
n(995295);
var c = n(442837),
    u = n(704215),
    d = n(692547),
    m = n(481060),
    h = n(493683),
    x = n(475179),
    p = n(287734),
    C = n(872810),
    v = n(607070),
    g = n(220779),
    f = n(201133),
    I = n(557135),
    j = n(194082),
    Z = n(540059),
    P = n(605236),
    L = n(543241),
    T = n(318374),
    N = n(258609),
    y = n(810568),
    _ = n(168524),
    A = n(102172),
    E = n(871118),
    S = n(565138),
    R = n(66999),
    M = n(790642),
    k = n(359110),
    w = n(12168),
    O = n(237583),
    b = n(131704),
    H = n(592125),
    V = n(430824),
    B = n(496675),
    D = n(699516),
    U = n(9156),
    G = n(594174),
    z = n(979651),
    Y = n(938475),
    W = n(626135),
    q = n(768581),
    F = n(5192),
    J = n(379357),
    X = n(26033),
    K = n(91907),
    $ = n(358696),
    Q = n(656709),
    ee = n(593294),
    et = n(192918),
    en = n(22211),
    el = n(206295),
    ea = n(111386),
    ei = n(896449),
    er = n(469153),
    eo = n(206583),
    es = n(981631),
    ec = n(388032),
    eu = n(179546);
function ed(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (
        (0, m.useFocusLock)(n),
        (0, l.jsx)('div', {
            className: eu.popout,
            ref: n,
            children: t
        })
    );
}
function em(e) {
    let { children: t, backgroundImgSrc: n, className: a, style: i = {} } = e,
        { primaryColor: o, secondaryColor: s } = (0, el.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(o, ', ').concat(s, ')')),
        (0, l.jsx)(m.ThemeProvider, {
            theme: es.BRd.DARK,
            children: (e) =>
                (0, l.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(eu.hero, e, a),
                    style: i,
                    children: t
                })
        })
    );
}
let eh = a.createContext(null);
function ex(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: eu.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, l.jsx)('div', {
                className: eu.interactionsContainer,
                children: (0, l.jsx)(eh.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function ep(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: o, onReaction: p, entry: C, buttons: v = [], header: j, onVoiceChannelPreview: L } = e,
        [T, N] = a.useState(!1),
        [y, _] = a.useState(null),
        A = (0, c.e7)([B.Z], () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(es.Plq.SEND_MESSAGES, t)),
        [E, w] = a.useState(!1),
        [q, J] = a.useState(!1),
        { voiceBar: X, joinVoiceButton: K } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: o } = (0, en.Z)(n),
                { needSubscriptionToAccess: s } = (0, R.Z)(null == t ? void 0 : t.id),
                u = (0, c.e7)([V.Z], () => (null != o ? V.Z.getGuild(o.guild_id) : void 0)),
                h = (0, c.Wu)([Y.ZP], () => (null != o ? Y.ZP.getVoiceStatesForChannel(o) : []), [o]),
                p = (0, c.e7)([z.Z], () => z.Z.isInChannel(null == o ? void 0 : o.id)),
                C = a.useMemo(() => {
                    for (let e of h) {
                        let t = H.Z.getDMFromUserId(e.user.id),
                            n = null != t && U.ZP.isChannelMuted(null, t),
                            l = D.Z.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [h]);
            if (null == o || null == u)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let v = null != r,
                g = () => {
                    x.Z.updateChatOpen(o.id, !0), (0, k.Kh)(o.id), null == i || i(o);
                },
                f = () => {
                    I.Z.handleVoiceConnect({
                        channel: o,
                        connected: p,
                        needSubscriptionToAccess: s,
                        routeDirectlyToChannel: !0
                    });
                },
                j = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: a } = e,
                        i = a
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      a &&
                                          (0, l.jsx)(m.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: eu.popoutBlockedWarningIcon
                                          }),
                                      ec.intl.string(ec.t.d6DpXF)
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        m.Tooltip,
                        {
                            'aria-label': a ? ec.intl.string(ec.t.d6DpXF) : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                Z = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: eu.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, l.jsx)(j, {
                                    text: ec.intl.string(ec.t.WIVYqK),
                                    hasRestrictedOrMutedVCParticipant: C,
                                    children: (e) =>
                                        (0, l.jsxs)(m.Clickable, {
                                            ...e,
                                            'aria-label': ec.intl.string(ec.t.WIVYqK),
                                            onClick: g,
                                            className: eu.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(S.Z, {
                                                    guild: u,
                                                    size: S.Z.Sizes.SMOL,
                                                    className: eu.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, l.jsx)(m.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, l.jsx)(m.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, l.jsx)(m.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: eu.voiceChannelName,
                                                    children: o.name
                                                })
                                            ]
                                        })
                                }),
                                (0, l.jsx)(O.Z, {
                                    guildId: u.id,
                                    users: h,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(m.Avatar, {
                                            src: e.user.getAvatarURL(u.id, 16),
                                            size: m.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)('div', {
                                            className: eu.voiceChannelAdditionalParticipants,
                                            children: (0, l.jsx)(m.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', { className: eu.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: Z,
                joinVoiceButton: p
                    ? null
                    : (0, l.jsx)(j, {
                          hasRestrictedOrMutedVCParticipant: C,
                          children: (e) =>
                              (0, l.jsx)(ej, {
                                  ...e,
                                  color: m.Button.Colors.GREEN,
                                  onClick: f,
                                  IconComponent: v ? m.ScreenIcon : m.VoiceNormalIcon,
                                  children: v ? ec.intl.string(ec.t['I6JG4+']) : ec.intl.string(ec.t.VJlc0d)
                              })
                      })
            };
        })({
            channel: t,
            entry: C,
            onVoiceChannelPreview: L
        }),
        { embeddedActivity: $ } = (0, ee.Z)(C),
        et = (function (e) {
            let t = (0, c.e7)([V.Z], () => V.Z.getGuild(null == e ? void 0 : e.guildId)),
                n = (0, c.e7)([H.Z], () => H.Z.getChannel(null == e ? void 0 : e.channelId)),
                a = (0, c.Wu)([G.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => G.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && b.sR.has(n.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: eu.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, l.jsxs)(m.Clickable, {
                                      'aria-label': ec.intl.string(ec.t['W/A4Qk']),
                                      onClick: () => (0, k.Kh)(n.id),
                                      className: eu.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, l.jsx)(S.Z, {
                                              guild: t,
                                              size: S.Z.Sizes.SMOL,
                                              className: eu.voiceChannelGuildIcon,
                                              active: !0
                                          }),
                                          (0, l.jsx)(m.ChevronSmallRightIcon, {
                                              size: 'xxs',
                                              color: d.Z.colors.INTERACTIVE_NORMAL
                                          }),
                                          (0, l.jsx)(m.TextIcon, {
                                              size: 'xs',
                                              color: d.Z.colors.TEXT_NORMAL
                                          }),
                                          (0, l.jsx)(m.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              className: eu.voiceChannelName,
                                              children: null == n ? void 0 : n.name
                                          })
                                      ]
                                  }),
                                  (0, l.jsx)(O.Z, {
                                      guildId: t.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(m.Avatar, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: m.AvatarSizes.SIZE_16,
                                              'aria-label': 'avatar',
                                              className: n
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)('div', {
                                              className: eu.voiceChannelAdditionalParticipants,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-normal',
                                                  children: e
                                              })
                                          })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', { className: eu.primaryActionPopoutDivider })
                      ]
                  })
                : null;
        })($),
        el = null != K && 0 === v.length ? [K] : v,
        ei = el.length > 0,
        ed = el.length >= 2,
        [em, eh] = a.useState(!ei),
        ex = F.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        ep = (0, Z.Q3)('ContentPopout.Reactor'),
        ev = null != t && T ? ec.intl.formatToPlainString(ec.t['8lzR/f'], { channel: '#'.concat(t.name) }) : ec.intl.formatToPlainString(ec.t['4c+CAw'], { channel: '@'.concat(ex) }),
        eg = T ? ec.intl.string(ec.t.Z2CUgo) : ec.intl.string(ec.t.XLGiTE),
        ef = async (e) => {
            let l;
            if (null != e) {
                if (
                    (W.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eo.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, P.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    w(!0),
                    J(!1),
                    T)
                )
                    s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await h.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = H.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    s()(null != l, 'Send channel must be defined'),
                    eZ({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            J(!0),
                                setTimeout(() => {
                                    w(!1), p(e, t);
                                }, 600);
                        },
                        interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        eI = async (e) => {
            let l;
            if (((0, P.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T)) s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await h.Z.openPrivateChannel(n.id, !1, !1),
                    t = H.Z.getChannel(e);
                s()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === es.d4z.DM ? eo.xP.DM_REACTION_MESSAGE_SENT : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eZ({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: p,
                requiresChannelReadiness: !0
            });
        },
        eZ = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a, requiresChannelReadiness: r } = e;
            if ((null == y || y.focus(), (0, M.Io)('ContentPopout Reactor')))
                await (0, Q.p)({
                    channel: n,
                    content: t,
                    entry: C,
                    whenReady: r
                });
            else {
                var c;
                let e = await ((c = i),
                async function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    try {
                        return await c(...t);
                    } catch (e) {
                        throw e;
                    }
                })(n.id);
                s()(null != e, 'Reaction image must be defined'),
                    await (0, f.B)({
                        file: e,
                        channel: n,
                        altText: o,
                        reply: t
                    });
            }
            null == l || l(a, n);
        },
        eP = null != j ? j : null != X ? X : null != et ? et : void 0;
    a.useEffect(() => {
        em && (null == y || y.focus());
    }, [y, T, em]);
    let eL = (0, l.jsx)(m.Tooltip, {
        text: eg,
        children: (e) =>
            (0, l.jsx)(m.Clickable, {
                ...e,
                className: r()(eu.shareToChannelButton, { [eu.refresh]: ep }),
                onClick: () => N((e) => !e),
                children: T
                    ? (0, l.jsx)(m.TextIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20
                      })
                    : (0, l.jsx)(m.AtIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20
                      })
            })
    });
    return (0, l.jsxs)('div', {
        style: { pointerEvents: E ? 'none' : 'all' },
        children: [
            (0, l.jsx)(er.Z, {
                sent: q,
                shown: E,
                className: eu.toastContainer
            }),
            null != eP
                ? eP
                : (0, l.jsx)(ea.Z, {
                      children: (0, l.jsxs)('div', {
                          className: eu.emojiHotrailShareToChannel,
                          children: [
                              (0, l.jsx)(eC, {
                                  channel: t,
                                  onClickSuggestion: ef
                              }),
                              (0, l.jsx)(g.dE, { onSelectEmoji: ef })
                          ]
                      })
                  }),
            (0, l.jsxs)('div', {
                className: r()({
                    [eu.inputContainerShareToChannel]: em,
                    [eu.hiddenButRenderedInputField]: !em,
                    [eu.refresh]: ep
                }),
                children: [
                    ep && eL,
                    (0, l.jsx)(g.A7, {
                        placeholder: ev,
                        onEnter: eI,
                        setEditorRef: (e) => _(e),
                        channel: T ? t : void 0,
                        showEmojiButton: null != eP,
                        renderAttachButton: A && !ep ? () => eL : void 0
                    }),
                    ei &&
                        (0, l.jsx)(m.Clickable, {
                            onClick: () => eh(!1),
                            className: eu.primaryActionPopoutMessageCloseIcon,
                            children: (0, l.jsx)(m.XSmallIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY
                            })
                        })
                ]
            }),
            !1 === em &&
                (0, l.jsxs)('div', {
                    className: eu.primaryActionPopoutActionButtons,
                    children: [
                        (0, l.jsxs)(
                            m.Button,
                            {
                                className: eu.secondaryButton,
                                color: m.Button.Colors.CUSTOM,
                                onClick: () => eh(!0),
                                innerClassName: eu.iconButton,
                                size: ed ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                                children: [
                                    (0, l.jsx)(m.ChatIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        colorClass: eu.secondaryText
                                    }),
                                    !ed &&
                                        (0, l.jsx)(m.Text, {
                                            variant: 'text-md/semibold',
                                            className: eu.secondaryText,
                                            children: ec.intl.string(ec.t.OAJQlJ)
                                        })
                                ]
                            },
                            'toggleMessageMode'
                        ),
                        el
                    ]
                })
        ]
    });
}
let eC = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let o = !!v.Z.keyboardModeEnabled && !i,
        s = (0, L.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, q.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58
                          })
                      }
            );
    return (0, l.jsx)(l.Fragment, {
        children: s.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
                ? (0, l.jsx)(
                      'div',
                      {
                          children: (0, l.jsx)(m.TooltipContainer, {
                              text: ec.intl.formatToPlainString(ec.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': ec.intl.formatToPlainString(ec.t.kilW3t, { emojiName: t.name }),
                              color: m.Tooltip.Colors.PRIMARY,
                              shouldShow: !o && void 0,
                              children: (0, l.jsx)(w.u, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n(t),
                                  className: eu.emoji
                              })
                          })
                      },
                      t.name
                  )
                : null;
        })
    });
};
function ev(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: o } = e,
        s = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: h, numOtherParticipants: x } = (0, et.Z)(a, 3),
        p = (0, c.e7)([G.default], () => G.default.getUser(a.author_id)),
        { streamPreviewUrl: C } = (0, en.Z)(a),
        v = [d, h];
    return (0, l.jsxs)('div', {
        className: eu.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: eu.popoutUserContainer,
                children: [
                    (0, l.jsx)(T.Z, {
                        maxUsers: 3,
                        users: u,
                        size: m.AvatarSizes.SIZE_24,
                        avatarClassName: eu.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: o
                    }),
                    (0, l.jsx)(m.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, l.jsx)(m.Heading, {
                        variant: 'heading-sm/normal',
                        className: eu.popoutTextSecondary,
                        children: ec.intl.format(n, {
                            user0: F.ZP.getName(s, null == t ? void 0 : t.id, v[0]),
                            user1: F.ZP.getName(s, null == t ? void 0 : t.id, v[1]),
                            countOthers: x,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    m.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: v[0],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: v[1],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            null != C && (0, l.jsx)(j.ZP, { size: j.ZP.Sizes.SMALL }),
            null != p &&
                (0, l.jsx)(ei.Z, {
                    user: p,
                    channel: t,
                    guildId: s,
                    entry: a,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function eg(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(m.Clickable, {
              className: eu.maybeClickable,
              onClick: n,
              children: t
          });
}
function ef(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: o, onClickThumbnail: s, onClickTitle: c, onClickSubtitle: u, headerIcons: d, disableGameProfileLinks: h = !1, showCoverImage: x = !0, onUserPopoutClosed: p, trackRankingItemInteraction: C, ...v } = e,
        { entry: g } = v,
        f = (0, X.dX)(g),
        I = (0, _.Z)(
            {
                location: 'ContentPopout',
                applicationId: f && !h ? (null === (t = g.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: g.author_id
            },
            { onOpened: () => (null == C ? void 0 : C(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: j, smallImage: Z } = (0, J.rv)({
            entry: g,
            showCoverImage: x
        }),
        P = f ? I : void 0;
    return (0, l.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, l.jsx)(ev, {
                disableGameProfileLinks: h,
                ...v,
                onUserPopoutClosed: p
            }),
            (0, l.jsxs)(em, {
                backgroundImgSrc: null == j ? void 0 : j.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: eu.popoutThumbnailContainer,
                                children: (0, l.jsx)($.E, {
                                    image: j,
                                    smallImage: Z,
                                    aspectRatio: x ? 'none' : void 0,
                                    onClick: null != s ? s : P,
                                    size: $.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(eg, {
                                        onClick: null != c ? c : P,
                                        children: (0, l.jsx)(m.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(eg, {
                                              onClick: null != u ? u : P,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eu.popoutHeroTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(m.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, l.jsx)('div', {
                                className: eu.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    o
                ]
            })
        ]
    });
}
function eI(e) {
    var t;
    let { title: n, subtitle: i, badges: r, stream: o, onClickThumbnail: s, onClickTitle: u, onClickSubtitle: d, onUserPopoutClosed: h, trackRankingItemInteraction: x, ...v } = e,
        g = (0, c.e7)([H.Z], () => H.Z.getChannel(null == o ? void 0 : o.channelId)),
        [f] = a.useMemo(() => (0, A.p9)(g, z.Z, V.Z, B.Z, N.Z), [g]),
        { entry: I } = v,
        j = (0, X.dX)(I),
        Z = (0, _.Z)(
            {
                location: 'ContentPopout',
                applicationId: j ? (null === (t = I.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id
            },
            { onOpened: () => (null == x ? void 0 : x(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        P = j ? Z : void 0,
        { activity: L, activityApplication: T, fallbackApplication: S } = (0, ee.Z)(I),
        { largeImage: R, smallImage: M } = (0, J.YC)(L, null != T ? T : S);
    return null == o
        ? null
        : (0, l.jsxs)('div', {
              className: eu.popoutContentWrapper,
              children: [
                  (0, l.jsx)(ev, {
                      ...v,
                      onUserPopoutClosed: h
                  }),
                  (0, l.jsxs)('div', {
                      className: eu.streamingPopoutHero,
                      children: [
                          (0, l.jsx)(eg, {
                              onClick: f
                                  ? () => {
                                        p.default.selectVoiceChannel(o.channelId), (0, C.iV)(o);
                                    }
                                  : void 0,
                              children: (0, l.jsxs)('div', {
                                  className: eu.streamingPopoutPreviewContainer,
                                  children: [
                                      (0, l.jsx)(E.Z, {
                                          className: eu.streamingPopoutImg,
                                          stream: o
                                      }),
                                      f &&
                                          (0, l.jsx)('div', {
                                              className: eu.streamCTA,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-md/normal',
                                                  children: ec.intl.string(ec.t['7Xq/nZ'])
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, l.jsxs)('div', {
                              className: eu.streamingPopoutHeader,
                              children: [
                                  null != R &&
                                      (0, l.jsx)('div', {
                                          className: eu.popoutThumbnailContainer,
                                          children: (0, l.jsx)($.E, {
                                              image: R,
                                              smallImage: M,
                                              onClick: null != s ? s : P,
                                              size: $.J.SIZE_72
                                          })
                                      }),
                                  (0, l.jsxs)('div', {
                                      className: eu.streamingPopoutHeaderText,
                                      children: [
                                          (0, l.jsx)(eg, {
                                              onClick: null != u ? u : P,
                                              children: (0, l.jsx)(m.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: eu.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, l.jsx)(eg, {
                                                    onClick: null != d ? d : P,
                                                    children: (0, l.jsx)(m.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: eu.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, l.jsx)(m.Spacer, { size: 8 }),
                                          r
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function ej(e) {
    let { IconComponent: t, children: n, className: a, ...i } = e;
    return (0, l.jsxs)(m.Button, {
        ...i,
        className: r()(a, eu.primaryButton),
        innerClassName: null != t ? eu.iconButton : void 0,
        size: m.Button.Sizes.LARGE,
        children: [
            null != t
                ? (0, l.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, l.jsx)(m.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}
