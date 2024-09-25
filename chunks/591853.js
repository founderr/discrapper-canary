n.d(t, {
    Ll: function () {
        return eg;
    },
    St: function () {
        return ex;
    },
    WT: function () {
        return eE;
    },
    jL: function () {
        return ep;
    },
    wG: function () {
        return eT;
    },
    yR: function () {
        return ed;
    }
}),
    n(47120);
var a = n(735250),
    l = n(470079),
    i = n(120356),
    r = n.n(i),
    s = n(512722),
    o = n.n(s);
n(699581);
var u = n(442837),
    c = n(704215),
    d = n(692547),
    h = n(481060),
    m = n(493683),
    x = n(475179),
    E = n(287734),
    v = n(872810),
    _ = n(607070),
    f = n(220779),
    T = n(201133),
    p = n(557135),
    g = n(194082),
    I = n(605236),
    N = n(543241),
    C = n(318374),
    A = n(258609),
    Z = n(810568),
    P = n(168524),
    S = n(382182),
    M = n(871118),
    O = n(565138),
    R = n(66999),
    j = n(790642),
    y = n(359110),
    L = n(12168),
    w = n(237583),
    D = n(131704),
    b = n(592125),
    U = n(430824),
    B = n(496675),
    k = n(699516),
    F = n(9156),
    G = n(594174),
    H = n(979651),
    Y = n(938475),
    z = n(626135),
    V = n(768581),
    W = n(5192),
    q = n(379357),
    K = n(26033),
    J = n(91907),
    X = n(358696),
    $ = n(656709),
    Q = n(192918),
    ee = n(22211),
    et = n(561308),
    en = n(206295),
    ea = n(111386),
    el = n(797342),
    ei = n(896449),
    er = n(469153),
    es = n(206583),
    eo = n(981631),
    eu = n(689938),
    ec = n(738127);
function ed(e) {
    let { children: t } = e,
        n = l.useRef(null);
    return (
        (0, h.useFocusLock)(n),
        (0, a.jsx)('div', {
            className: ec.popout,
            ref: n,
            children: t
        })
    );
}
function eh(e) {
    let { children: t, backgroundImgSrc: n, className: l, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, en.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, a.jsx)(h.ThemeProvider, {
            theme: eo.BRd.DARK,
            children: (e) =>
                (0, a.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(ec.hero, e, l),
                    style: i,
                    children: t
                })
        })
    );
}
let em = l.createContext(null);
function ex(e) {
    let { children: t } = e,
        n = l.useRef(null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: ec.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, a.jsx)('div', {
                className: ec.interactionsContainer,
                children: (0, a.jsx)(em.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function eE(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: E, buttons: v = [], header: _, onVoiceChannelPreview: g } = e,
        [N, C] = l.useState(!1),
        [A, Z] = l.useState(null),
        P = (0, u.e7)([B.Z], () => null != t && eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(eo.Plq.SEND_MESSAGES, t)),
        [S, M] = l.useState(!1),
        [L, V] = l.useState(!1),
        { voiceBar: q, joinVoiceButton: K } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, ee.Z)(n),
                { isRich: o, appName: c } = (0, el.n)(n),
                { needSubscriptionToAccess: m } = (0, R.Z)(null == t ? void 0 : t.id),
                E = (0, u.e7)([U.Z], () => (null != s ? U.Z.getGuild(s.guild_id) : void 0)),
                v = (0, u.Wu)([Y.ZP], () => (null != s ? Y.ZP.getVoiceStatesForChannel(s) : []), [s]),
                _ = (0, u.e7)([H.Z], () => H.Z.isInChannel(null == s ? void 0 : s.id)),
                f = l.useMemo(() => {
                    for (let e of v) {
                        let t = b.Z.getDMFromUserId(e.user.id),
                            n = null != t && F.ZP.isChannelMuted(null, t),
                            a = k.Z.isBlocked(e.user.id);
                        if (n || a) return !0;
                    }
                    return !1;
                }, [v]);
            if (null == s || null == E)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let T = null != r,
                g = () => {
                    x.Z.updateChatOpen(s.id, !0), (0, y.Kh)(s.id);
                    null == i || i(s, o ? c : void 0);
                },
                I = () => {
                    p.Z.handleVoiceConnect({
                        channel: s,
                        connected: _,
                        needSubscriptionToAccess: m,
                        routeDirectlyToChannel: !0
                    });
                },
                N = (e) => {
                    let { children: t, text: n, hasBlockedOrMutedVCParticipant: l } = e,
                        i = l
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      l &&
                                          (0, a.jsx)(h.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: ec.popoutBlockedWarningIcon
                                          }),
                                      eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : n;
                    return (0, a.jsx)(
                        h.Tooltip,
                        {
                            'aria-label': l ? eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                C = (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: ec.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, a.jsx)(N, {
                                    text: eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: f,
                                    children: (e) =>
                                        (0, a.jsxs)(h.Clickable, {
                                            ...e,
                                            'aria-label': eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: g,
                                            className: ec.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, a.jsx)(O.Z, {
                                                    guild: E,
                                                    size: O.Z.Sizes.SMOL,
                                                    className: ec.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, a.jsx)(h.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, a.jsx)(h.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, a.jsx)(h.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: ec.voiceChannelName,
                                                    children: s.name
                                                })
                                            ]
                                        })
                                }),
                                (0, a.jsx)(w.Z, {
                                    guildId: E.id,
                                    users: v,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, a.jsx)(h.Avatar, {
                                            src: e.user.getAvatarURL(E.id, 16),
                                            size: h.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, a.jsx)('div', {
                                            className: ec.voiceChannelAdditionalParticipants,
                                            children: (0, a.jsx)(h.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', { className: ec.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: C,
                joinVoiceButton: _
                    ? null
                    : (0, a.jsx)(N, {
                          hasBlockedOrMutedVCParticipant: f,
                          children: (e) =>
                              (0, a.jsx)(eg, {
                                  ...e,
                                  color: h.Button.Colors.GREEN,
                                  onClick: I,
                                  IconComponent: T ? h.ScreenIcon : h.VoiceNormalIcon,
                                  children: T ? eu.Z.Messages.WATCH : eu.Z.Messages.JOIN
                              })
                      })
            };
        })({
            channel: t,
            entry: E,
            onVoiceChannelPreview: g
        }),
        { embeddedActivity: J } = (0, et.qy)(E),
        X = (function (e) {
            let t = (0, u.e7)([U.Z], () => U.Z.getGuild(null == e ? void 0 : e.guildId)),
                n = (0, u.e7)([b.Z], () => b.Z.getChannel(null == e ? void 0 : e.channelId)),
                l = (0, u.Wu)([G.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => G.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && D.sR.has(n.type)
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)('div', {
                              className: ec.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, a.jsxs)(h.Clickable, {
                                      'aria-label': eu.Z.Messages.VIEW_CHANNEL,
                                      onClick: () => (0, y.Kh)(n.id),
                                      className: ec.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, a.jsx)(O.Z, {
                                              guild: t,
                                              size: O.Z.Sizes.SMOL,
                                              className: ec.voiceChannelGuildIcon,
                                              active: !0
                                          }),
                                          (0, a.jsx)(h.ChevronSmallRightIcon, {
                                              size: 'xxs',
                                              color: d.Z.colors.INTERACTIVE_NORMAL
                                          }),
                                          (0, a.jsx)(h.TextIcon, {
                                              size: 'xs',
                                              color: d.Z.colors.TEXT_NORMAL
                                          }),
                                          (0, a.jsx)(h.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              className: ec.voiceChannelName,
                                              children: null == n ? void 0 : n.name
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(w.Z, {
                                      guildId: t.id,
                                      users: l,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, a.jsx)(h.Avatar, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: h.AvatarSizes.SIZE_16,
                                              'aria-label': 'avatar',
                                              className: n
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, a.jsx)('div', {
                                              className: ec.voiceChannelAdditionalParticipants,
                                              children: (0, a.jsx)(h.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-normal',
                                                  children: e
                                              })
                                          })
                                  })
                              ]
                          }),
                          (0, a.jsx)('div', { className: ec.primaryActionPopoutDivider })
                      ]
                  })
                : null;
        })(J),
        Q = null != K && 0 === v.length ? [K] : v,
        en = Q.length > 0,
        ei = Q.length >= 2,
        [ed, eh] = l.useState(!en),
        em = W.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        ex = null != t && N ? '#'.concat(t.name) : '@'.concat(em),
        eE = N ? eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        e_ = async (e) => {
            let a;
            if (null != e) {
                if (
                    (z.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: es.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    M(!0),
                    V(!1),
                    N)
                )
                    o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (a = t);
                else {
                    var l;
                    let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                    a = null !== (l = b.Z.getChannel(e)) && void 0 !== l ? l : null;
                }
                return (
                    o()(null != a, 'Send channel must be defined'),
                    eT({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: a,
                        onComplete: (e, t) => {
                            V(!0),
                                setTimeout(() => {
                                    M(!1), s(e, t);
                                }, 600);
                        },
                        interactionType: es.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        ef = async (e) => {
            let a;
            if (((0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), N)) o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (a = t);
            else {
                let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                    t = b.Z.getChannel(e);
                o()(null != t, 'DM channel must be defined'), (a = t);
            }
            let l = a.type === eo.d4z.DM ? es.xP.DM_REACTION_MESSAGE_SENT : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eT({
                reply: e,
                sendToChannel: a,
                interactionType: l,
                onComplete: s,
                requiresChannelReadiness: !0
            });
        },
        eT = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: a, interactionType: l, requiresChannelReadiness: s } = e;
            if ((null == A || A.focus(), (0, j.Io)('ContentPopout Reactor')))
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
                    await (0, T.B)({
                        file: e,
                        channel: n,
                        altText: r,
                        reply: t
                    });
            }
            null == a || a(l, n);
        },
        ep = null != _ ? _ : null != q ? q : null != X ? X : void 0;
    return (
        l.useEffect(() => {
            ed && (null == A || A.focus());
        }, [A, N, ed]),
        (0, a.jsxs)('div', {
            style: { pointerEvents: S ? 'none' : 'all' },
            children: [
                (0, a.jsx)(er.Z, {
                    sent: L,
                    shown: S,
                    className: ec.toastContainer
                }),
                null != ep
                    ? ep
                    : (0, a.jsx)(ea.Z, {
                          children: (0, a.jsxs)('div', {
                              className: ec.emojiHotrailShareToChannel,
                              children: [
                                  (0, a.jsx)(ev, {
                                      channel: t,
                                      onClickSuggestion: e_
                                  }),
                                  (0, a.jsx)(f.dE, { onSelectEmoji: e_ })
                              ]
                          })
                      }),
                (0, a.jsxs)('div', {
                    className: ed ? ec.inputContainerShareToChannel : ec.hiddenButRenderedInputField,
                    children: [
                        (0, a.jsx)(f.A7, {
                            placeholder: eu.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: ex }),
                            onEnter: ef,
                            setEditorRef: (e) => Z(e),
                            channel: N ? t : void 0,
                            showEmojiButton: null != ep,
                            renderAttachButton: P
                                ? () =>
                                      (0, a.jsx)(h.Tooltip, {
                                          text: eE,
                                          children: (e) =>
                                              (0, a.jsx)(h.Clickable, {
                                                  ...e,
                                                  className: ec.shareToChannelButton,
                                                  onClick: () => C((e) => !e),
                                                  children: N
                                                      ? (0, a.jsx)(h.TextIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, a.jsx)(h.AtIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        en &&
                            (0, a.jsx)(h.Clickable, {
                                onClick: () => eh(!1),
                                className: ec.primaryActionPopoutMessageCloseIcon,
                                children: (0, a.jsx)(h.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === ed &&
                    (0, a.jsxs)('div', {
                        className: ec.primaryActionPopoutActionButtons,
                        children: [
                            (0, a.jsxs)(
                                h.Button,
                                {
                                    className: ec.secondaryButton,
                                    color: h.Button.Colors.CUSTOM,
                                    onClick: () => eh(!0),
                                    innerClassName: ec.iconButton,
                                    size: ei ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                                    children: [
                                        (0, a.jsx)(h.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: ec.secondaryText
                                        }),
                                        !ei &&
                                            (0, a.jsx)(h.Text, {
                                                variant: 'text-md/semibold',
                                                className: ec.secondaryText,
                                                children: eu.Z.Messages.USER_POPOUT_MESSAGE
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
let ev = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = l.useState(!1);
    l.useEffect(() => {
        r(!0);
    }, []);
    let s = !!_.Z.keyboardModeEnabled && !i,
        o = (0, N.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, V.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58
                          })
                      }
            );
    return (0, a.jsx)(a.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: l } = e;
            return null != l
                ? (0, a.jsx)(
                      'div',
                      {
                          children: (0, a.jsx)(h.TooltipContainer, {
                              text: eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              position: 'top',
                              'aria-label': eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              color: h.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, a.jsx)(L.u, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n(t),
                                  className: ec.emoji
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
    let { channel: t, userDescription: n, entry: l, disableGameProfileLinks: i, onUserPopoutClosed: s } = e,
        o = null == t ? void 0 : t.guild_id,
        { displayParticipants: c, participant1: d, participant2: m, numOtherParticipants: x } = (0, Q.Z)(l, 3),
        E = (0, u.e7)([G.default], () => G.default.getUser(l.author_id)),
        { streamPreviewUrl: v } = (0, ee.Z)(l),
        _ = [d, m];
    return (0, a.jsxs)('div', {
        className: ec.popoutContentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: ec.popoutUserContainer,
                children: [
                    (0, a.jsx)(C.Z, {
                        maxUsers: 3,
                        users: c,
                        size: h.AvatarSizes.SIZE_24,
                        avatarClassName: ec.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: s
                    }),
                    (0, a.jsx)(h.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, a.jsx)(h.Heading, {
                        variant: 'heading-sm/normal',
                        className: ec.popoutTextSecondary,
                        children: n.format({
                            user0: W.ZP.getName(o, null == t ? void 0 : t.id, _[0]),
                            user1: W.ZP.getName(o, null == t ? void 0 : t.id, _[1]),
                            countOthers: x,
                            countOthersHook: (e, t) =>
                                (0, a.jsx)(
                                    h.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, a.jsx)(
                                    J.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: _[0],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, a.jsx)(
                                    J.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: _[1],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            null != v && (0, a.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL }),
            null != E &&
                (0, a.jsx)(ei.Z, {
                    user: E,
                    channel: t,
                    guildId: o,
                    entry: l,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function ef(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, a.jsx)(a.Fragment, { children: t })
        : (0, a.jsx)(h.Clickable, {
              className: ec.maybeClickable,
              onClick: n,
              children: t
          });
}
function eT(e) {
    var t;
    let { title: n, subtitle: l, badges: i, children: s, onClickThumbnail: o, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: m = !1, onUserPopoutClosed: x, ...E } = e,
        { entry: v } = E,
        _ = (0, K.dX)(v),
        f = (0, P.Z)({
            location: 'ContentPopout',
            applicationId: _ && !m ? (null === (t = v.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: v.author_id
        }),
        { largeImage: T, smallImage: p } = (0, q.rv)({ entry: v }),
        g = _ ? f : void 0;
    return (0, a.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, a.jsx)(e_, {
                disableGameProfileLinks: m,
                ...E,
                onUserPopoutClosed: x
            }),
            (0, a.jsxs)(eh, {
                backgroundImgSrc: null == T ? void 0 : T.src,
                children: [
                    (0, a.jsxs)('div', {
                        className: ec.popoutHeroInner,
                        children: [
                            (0, a.jsx)('div', {
                                className: ec.popoutThumbnailContainer,
                                children: (0, a.jsx)(X.E, {
                                    image: T,
                                    smallImage: p,
                                    onClick: null != o ? o : g,
                                    size: X.J.SIZE_72
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: ec.popoutHeroBody,
                                children: [
                                    (0, a.jsx)(ef, {
                                        onClick: null != u ? u : g,
                                        children: (0, a.jsx)(h.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(ec.popoutHeroTextPrimary, { [ec.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != l
                                        ? (0, a.jsx)(ef, {
                                              onClick: null != c ? c : g,
                                              children: (0, a.jsx)(h.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutHeroTextSecondary,
                                                  children: l
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(h.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, a.jsx)('div', {
                                className: ec.popoutHeaderIcons,
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
    let { title: n, subtitle: i, badges: r, stream: s, onClickThumbnail: o, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: m, ...x } = e,
        _ = (0, u.e7)([b.Z], () => b.Z.getChannel(null == s ? void 0 : s.channelId)),
        [f] = l.useMemo(() => (0, S.p9)(_, H.Z, U.Z, B.Z, A.Z), [_]),
        { entry: T } = x,
        p = (0, K.dX)(T),
        g = (0, P.Z)({
            location: 'ContentPopout',
            applicationId: p ? (null === (t = T.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: T.author_id
        }),
        I = p ? g : void 0,
        { activity: N, activityApplication: C, fallbackApplication: O } = (0, et.qy)(T),
        { largeImage: R, smallImage: j } = (0, q.YC)(N, null != C ? C : O);
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: ec.popoutContentWrapper,
              children: [
                  (0, a.jsx)(e_, {
                      ...x,
                      onUserPopoutClosed: m
                  }),
                  (0, a.jsxs)('div', {
                      className: ec.streamingPopoutHero,
                      children: [
                          (0, a.jsx)(ef, {
                              onClick: f
                                  ? () => {
                                        E.default.selectVoiceChannel(s.channelId), (0, v.iV)(s);
                                    }
                                  : void 0,
                              children: (0, a.jsxs)('div', {
                                  style: { position: 'relative' },
                                  children: [
                                      (0, a.jsx)(M.Z, {
                                          className: ec.streamingPopoutImg,
                                          stream: s
                                      }),
                                      f &&
                                          (0, a.jsx)('div', {
                                              className: ec.streamCTA,
                                              children: (0, a.jsx)(h.Text, {
                                                  variant: 'text-md/normal',
                                                  children: eu.Z.Messages.WATCH_STREAM
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, a.jsxs)('div', {
                              className: ec.streamingPopoutHeader,
                              children: [
                                  null != R &&
                                      (0, a.jsx)('div', {
                                          className: ec.popoutThumbnailContainer,
                                          children: (0, a.jsx)(X.E, {
                                              image: R,
                                              smallImage: j,
                                              onClick: null != o ? o : I,
                                              size: X.J.SIZE_72
                                          })
                                      }),
                                  (0, a.jsxs)('div', {
                                      className: ec.streamingPopoutHeaderText,
                                      children: [
                                          (0, a.jsx)(ef, {
                                              onClick: null != c ? c : I,
                                              children: (0, a.jsx)(h.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: ec.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, a.jsx)(ef, {
                                                    onClick: null != d ? d : I,
                                                    children: (0, a.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: ec.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, a.jsx)(h.Spacer, { size: 8 }),
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
function eg(e) {
    let { IconComponent: t, children: n, className: l, ...i } = e;
    return (0, a.jsxs)(h.Button, {
        ...i,
        className: r()(l, ec.primaryButton),
        innerClassName: null != t ? ec.iconButton : void 0,
        size: h.Button.Sizes.LARGE,
        children: [
            null != t
                ? (0, a.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, a.jsx)(h.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}
