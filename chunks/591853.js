n.d(t, {
    Ll: function () {
        return ef;
    },
    St: function () {
        return em;
    },
    WT: function () {
        return ex;
    },
    jL: function () {
        return ep;
    },
    wG: function () {
        return eC;
    },
    yR: function () {
        return ec;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(512722),
    o = n.n(s);
n(995295);
var u = n(442837),
    c = n(704215),
    d = n(692547),
    h = n(481060),
    m = n(493683),
    x = n(475179),
    E = n(287734),
    _ = n(872810),
    v = n(607070),
    C = n(220779),
    p = n(201133),
    f = n(557135),
    T = n(194082),
    g = n(605236),
    I = n(543241),
    N = n(318374),
    Z = n(258609),
    P = n(810568),
    M = n(168524),
    L = n(382182),
    S = n(871118),
    A = n(565138),
    R = n(66999),
    y = n(790642),
    O = n(359110),
    j = n(12168),
    w = n(237583),
    b = n(131704),
    D = n(592125),
    U = n(430824),
    k = n(496675),
    H = n(699516),
    B = n(9156),
    V = n(594174),
    F = n(979651),
    G = n(938475),
    Y = n(626135),
    z = n(768581),
    W = n(5192),
    q = n(379357),
    J = n(26033),
    K = n(91907),
    X = n(358696),
    $ = n(656709),
    Q = n(192918),
    ee = n(22211),
    et = n(561308),
    en = n(206295),
    el = n(111386),
    ea = n(896449),
    ei = n(469153),
    er = n(206583),
    es = n(981631),
    eo = n(689938),
    eu = n(738127);
function ec(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (
        (0, h.useFocusLock)(n),
        (0, l.jsx)('div', {
            className: eu.popout,
            ref: n,
            children: t
        })
    );
}
function ed(e) {
    let { children: t, backgroundImgSrc: n, className: a, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, en.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, l.jsx)(h.ThemeProvider, {
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
function em(e) {
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
function ex(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: E, buttons: _ = [], header: v, onVoiceChannelPreview: T } = e,
        [I, N] = a.useState(!1),
        [Z, P] = a.useState(null),
        M = (0, u.e7)([k.Z], () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && k.Z.can(es.Plq.SEND_MESSAGES, t)),
        [L, S] = a.useState(!1),
        [j, z] = a.useState(!1),
        { voiceBar: q, joinVoiceButton: J } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, ee.Z)(n),
                { needSubscriptionToAccess: o } = (0, R.Z)(null == t ? void 0 : t.id),
                c = (0, u.e7)([U.Z], () => (null != s ? U.Z.getGuild(s.guild_id) : void 0)),
                m = (0, u.Wu)([G.ZP], () => (null != s ? G.ZP.getVoiceStatesForChannel(s) : []), [s]),
                E = (0, u.e7)([F.Z], () => F.Z.isInChannel(null == s ? void 0 : s.id)),
                _ = a.useMemo(() => {
                    for (let e of m) {
                        let t = D.Z.getDMFromUserId(e.user.id),
                            n = null != t && B.ZP.isChannelMuted(null, t),
                            l = H.Z.isBlocked(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [m]);
            if (null == s || null == c)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let v = null != r,
                C = () => {
                    x.Z.updateChatOpen(s.id, !0), (0, O.Kh)(s.id), null == i || i(s);
                },
                p = () => {
                    f.Z.handleVoiceConnect({
                        channel: s,
                        connected: E,
                        needSubscriptionToAccess: o,
                        routeDirectlyToChannel: !0
                    });
                },
                T = (e) => {
                    let { children: t, text: n, hasBlockedOrMutedVCParticipant: a } = e,
                        i = a
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      a &&
                                          (0, l.jsx)(h.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: eu.popoutBlockedWarningIcon
                                          }),
                                      eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        h.Tooltip,
                        {
                            'aria-label': a ? eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                g = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: eu.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, l.jsx)(T, {
                                    text: eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: _,
                                    children: (e) =>
                                        (0, l.jsxs)(h.Clickable, {
                                            ...e,
                                            'aria-label': eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: C,
                                            className: eu.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(A.Z, {
                                                    guild: c,
                                                    size: A.Z.Sizes.SMOL,
                                                    className: eu.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, l.jsx)(h.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, l.jsx)(h.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, l.jsx)(h.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: eu.voiceChannelName,
                                                    children: s.name
                                                })
                                            ]
                                        })
                                }),
                                (0, l.jsx)(w.Z, {
                                    guildId: c.id,
                                    users: m,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(h.Avatar, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: h.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)('div', {
                                            className: eu.voiceChannelAdditionalParticipants,
                                            children: (0, l.jsx)(h.Text, {
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
                voiceBar: g,
                joinVoiceButton: E
                    ? null
                    : (0, l.jsx)(T, {
                          hasBlockedOrMutedVCParticipant: _,
                          children: (e) =>
                              (0, l.jsx)(ef, {
                                  ...e,
                                  color: h.Button.Colors.GREEN,
                                  onClick: p,
                                  IconComponent: v ? h.ScreenIcon : h.VoiceNormalIcon,
                                  children: v ? eo.Z.Messages.WATCH : eo.Z.Messages.JOIN
                              })
                      })
            };
        })({
            channel: t,
            entry: E,
            onVoiceChannelPreview: T
        }),
        { embeddedActivity: K } = (0, et.qy)(E),
        X = (function (e) {
            let t = (0, u.e7)([U.Z], () => U.Z.getGuild(null == e ? void 0 : e.guildId)),
                n = (0, u.e7)([D.Z], () => D.Z.getChannel(null == e ? void 0 : e.channelId)),
                a = (0, u.Wu)([V.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => V.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && b.sR.has(n.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: eu.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, l.jsxs)(h.Clickable, {
                                      'aria-label': eo.Z.Messages.VIEW_CHANNEL,
                                      onClick: () => (0, O.Kh)(n.id),
                                      className: eu.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, l.jsx)(A.Z, {
                                              guild: t,
                                              size: A.Z.Sizes.SMOL,
                                              className: eu.voiceChannelGuildIcon,
                                              active: !0
                                          }),
                                          (0, l.jsx)(h.ChevronSmallRightIcon, {
                                              size: 'xxs',
                                              color: d.Z.colors.INTERACTIVE_NORMAL
                                          }),
                                          (0, l.jsx)(h.TextIcon, {
                                              size: 'xs',
                                              color: d.Z.colors.TEXT_NORMAL
                                          }),
                                          (0, l.jsx)(h.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              className: eu.voiceChannelName,
                                              children: null == n ? void 0 : n.name
                                          })
                                      ]
                                  }),
                                  (0, l.jsx)(w.Z, {
                                      guildId: t.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(h.Avatar, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: h.AvatarSizes.SIZE_16,
                                              'aria-label': 'avatar',
                                              className: n
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)('div', {
                                              className: eu.voiceChannelAdditionalParticipants,
                                              children: (0, l.jsx)(h.Text, {
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
        })(K),
        Q = null != J && 0 === _.length ? [J] : _,
        en = Q.length > 0,
        ea = Q.length >= 2,
        [ec, ed] = a.useState(!en),
        eh = W.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        em = null != t && I ? '#'.concat(t.name) : '@'.concat(eh),
        ex = I ? eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        e_ = async (e) => {
            let l;
            if (null != e) {
                if (
                    (Y.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: er.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    S(!0),
                    z(!1),
                    I)
                )
                    o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = D.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    o()(null != l, 'Send channel must be defined'),
                    eC({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            z(!0),
                                setTimeout(() => {
                                    S(!1), s(e, t);
                                }, 600);
                        },
                        interactionType: er.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        ev = async (e) => {
            let l;
            if (((0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I)) o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                    t = D.Z.getChannel(e);
                o()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === es.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eC({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: s,
                requiresChannelReadiness: !0
            });
        },
        eC = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a, requiresChannelReadiness: s } = e;
            if ((null == Z || Z.focus(), (0, y.Io)('ContentPopout Reactor')))
                await (0, $.p)({
                    channel: n,
                    content: t,
                    entry: E,
                    whenReady: s
                });
            else {
                var u;
                let e = await ((u = i),
                async function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    try {
                        return await u(...t);
                    } catch (e) {
                        throw e;
                    }
                })(n.id);
                o()(null != e, 'Reaction image must be defined'),
                    await (0, p.B)({
                        file: e,
                        channel: n,
                        altText: r,
                        reply: t
                    });
            }
            null == l || l(a, n);
        },
        ep = null != v ? v : null != q ? q : null != X ? X : void 0;
    return (
        a.useEffect(() => {
            ec && (null == Z || Z.focus());
        }, [Z, I, ec]),
        (0, l.jsxs)('div', {
            style: { pointerEvents: L ? 'none' : 'all' },
            children: [
                (0, l.jsx)(ei.Z, {
                    sent: j,
                    shown: L,
                    className: eu.toastContainer
                }),
                null != ep
                    ? ep
                    : (0, l.jsx)(el.Z, {
                          children: (0, l.jsxs)('div', {
                              className: eu.emojiHotrailShareToChannel,
                              children: [
                                  (0, l.jsx)(eE, {
                                      channel: t,
                                      onClickSuggestion: e_
                                  }),
                                  (0, l.jsx)(C.dE, { onSelectEmoji: e_ })
                              ]
                          })
                      }),
                (0, l.jsxs)('div', {
                    className: ec ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
                    children: [
                        (0, l.jsx)(C.A7, {
                            placeholder: eo.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: em }),
                            onEnter: ev,
                            setEditorRef: (e) => P(e),
                            channel: I ? t : void 0,
                            showEmojiButton: null != ep,
                            renderAttachButton: M
                                ? () =>
                                      (0, l.jsx)(h.Tooltip, {
                                          text: ex,
                                          children: (e) =>
                                              (0, l.jsx)(h.Clickable, {
                                                  ...e,
                                                  className: eu.shareToChannelButton,
                                                  onClick: () => N((e) => !e),
                                                  children: I
                                                      ? (0, l.jsx)(h.TextIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, l.jsx)(h.AtIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        en &&
                            (0, l.jsx)(h.Clickable, {
                                onClick: () => ed(!1),
                                className: eu.primaryActionPopoutMessageCloseIcon,
                                children: (0, l.jsx)(h.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === ec &&
                    (0, l.jsxs)('div', {
                        className: eu.primaryActionPopoutActionButtons,
                        children: [
                            (0, l.jsxs)(
                                h.Button,
                                {
                                    className: eu.secondaryButton,
                                    color: h.Button.Colors.CUSTOM,
                                    onClick: () => ed(!0),
                                    innerClassName: eu.iconButton,
                                    size: ea ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                                    children: [
                                        (0, l.jsx)(h.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: eu.secondaryText
                                        }),
                                        !ea &&
                                            (0, l.jsx)(h.Text, {
                                                variant: 'text-md/semibold',
                                                className: eu.secondaryText,
                                                children: eo.Z.Messages.USER_POPOUT_MESSAGE
                                            })
                                    ]
                                },
                                'toggleMessageMode'
                            ),
                            Q
                        ]
                    })
            ]
        })
    );
}
let eE = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let s = !!v.Z.keyboardModeEnabled && !i,
        o = (0, I.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, z.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58
                          })
                      }
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
                ? (0, l.jsx)(
                      'div',
                      {
                          children: (0, l.jsx)(h.TooltipContainer, {
                              text: eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              position: 'top',
                              'aria-label': eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              color: h.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, l.jsx)(j.u, {
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
function e_(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: s } = e,
        o = null == t ? void 0 : t.guild_id,
        { displayParticipants: c, participant1: d, participant2: m, numOtherParticipants: x } = (0, Q.Z)(a, 3),
        E = (0, u.e7)([V.default], () => V.default.getUser(a.author_id)),
        { streamPreviewUrl: _ } = (0, ee.Z)(a),
        v = [d, m];
    return (0, l.jsxs)('div', {
        className: eu.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: eu.popoutUserContainer,
                children: [
                    (0, l.jsx)(N.Z, {
                        maxUsers: 3,
                        users: c,
                        size: h.AvatarSizes.SIZE_24,
                        avatarClassName: eu.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: s
                    }),
                    (0, l.jsx)(h.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, l.jsx)(h.Heading, {
                        variant: 'heading-sm/normal',
                        className: eu.popoutTextSecondary,
                        children: n.format({
                            user0: W.ZP.getName(o, null == t ? void 0 : t.id, v[0]),
                            user1: W.ZP.getName(o, null == t ? void 0 : t.id, v[1]),
                            countOthers: x,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    h.Text,
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
                                        onPopoutClosed: s
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
                                        onPopoutClosed: s
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            null != _ && (0, l.jsx)(T.ZP, { size: T.ZP.Sizes.SMALL }),
            null != E &&
                (0, l.jsx)(ea.Z, {
                    user: E,
                    channel: t,
                    guildId: o,
                    entry: a,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function ev(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(h.Clickable, {
              className: eu.maybeClickable,
              onClick: n,
              children: t
          });
}
function eC(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: s, onClickThumbnail: o, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: m = !1, onUserPopoutClosed: x, trackRankingItemInteraction: E, ..._ } = e,
        { entry: v } = _,
        C = (0, J.dX)(v),
        p = (0, M.Z)(
            {
                location: 'ContentPopout',
                applicationId: C && !m ? (null === (t = v.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: P.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: v.author_id
            },
            { onOpened: () => (null == E ? void 0 : E(er.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: f, smallImage: T } = (0, q.rv)({ entry: v }),
        g = C ? p : void 0;
    return (0, l.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, l.jsx)(e_, {
                disableGameProfileLinks: m,
                ..._,
                onUserPopoutClosed: x
            }),
            (0, l.jsxs)(ed, {
                backgroundImgSrc: null == f ? void 0 : f.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: eu.popoutThumbnailContainer,
                                children: (0, l.jsx)(X.E, {
                                    image: f,
                                    smallImage: T,
                                    onClick: null != o ? o : g,
                                    size: X.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(ev, {
                                        onClick: null != u ? u : g,
                                        children: (0, l.jsx)(h.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(ev, {
                                              onClick: null != c ? c : g,
                                              children: (0, l.jsx)(h.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eu.popoutHeroTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(h.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, l.jsx)('div', {
                                className: eu.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    s
                ]
            })
        ]
    });
}
function ep(e) {
    var t;
    let { title: n, subtitle: i, badges: r, stream: s, onClickThumbnail: o, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: m, trackRankingItemInteraction: x, ...v } = e,
        C = (0, u.e7)([D.Z], () => D.Z.getChannel(null == s ? void 0 : s.channelId)),
        [p] = a.useMemo(() => (0, L.p9)(C, F.Z, U.Z, k.Z, Z.Z), [C]),
        { entry: f } = v,
        T = (0, J.dX)(f),
        g = (0, M.Z)(
            {
                location: 'ContentPopout',
                applicationId: T ? (null === (t = f.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: P.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id
            },
            { onOpened: () => (null == x ? void 0 : x(er.xP.OPENED_GAME_PROFILE)) }
        ),
        I = T ? g : void 0,
        { activity: N, activityApplication: A, fallbackApplication: R } = (0, et.qy)(f),
        { largeImage: y, smallImage: O } = (0, q.YC)(N, null != A ? A : R);
    return null == s
        ? null
        : (0, l.jsxs)('div', {
              className: eu.popoutContentWrapper,
              children: [
                  (0, l.jsx)(e_, {
                      ...v,
                      onUserPopoutClosed: m
                  }),
                  (0, l.jsxs)('div', {
                      className: eu.streamingPopoutHero,
                      children: [
                          (0, l.jsx)(ev, {
                              onClick: p
                                  ? () => {
                                        E.default.selectVoiceChannel(s.channelId), (0, _.iV)(s);
                                    }
                                  : void 0,
                              children: (0, l.jsxs)('div', {
                                  className: eu.streamingPopoutPreviewContainer,
                                  children: [
                                      (0, l.jsx)(S.Z, {
                                          className: eu.streamingPopoutImg,
                                          stream: s
                                      }),
                                      p &&
                                          (0, l.jsx)('div', {
                                              className: eu.streamCTA,
                                              children: (0, l.jsx)(h.Text, {
                                                  variant: 'text-md/normal',
                                                  children: eo.Z.Messages.WATCH_STREAM
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, l.jsxs)('div', {
                              className: eu.streamingPopoutHeader,
                              children: [
                                  null != y &&
                                      (0, l.jsx)('div', {
                                          className: eu.popoutThumbnailContainer,
                                          children: (0, l.jsx)(X.E, {
                                              image: y,
                                              smallImage: O,
                                              onClick: null != o ? o : I,
                                              size: X.J.SIZE_72
                                          })
                                      }),
                                  (0, l.jsxs)('div', {
                                      className: eu.streamingPopoutHeaderText,
                                      children: [
                                          (0, l.jsx)(ev, {
                                              onClick: null != c ? c : I,
                                              children: (0, l.jsx)(h.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: eu.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, l.jsx)(ev, {
                                                    onClick: null != d ? d : I,
                                                    children: (0, l.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: eu.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, l.jsx)(h.Spacer, { size: 8 }),
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
function ef(e) {
    let { IconComponent: t, children: n, className: a, ...i } = e;
    return (0, l.jsxs)(h.Button, {
        ...i,
        className: r()(a, eu.primaryButton),
        innerClassName: null != t ? eu.iconButton : void 0,
        size: h.Button.Sizes.LARGE,
        children: [
            null != t
                ? (0, l.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, l.jsx)(h.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}
