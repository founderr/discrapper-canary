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
        return ef;
    },
    wG: function () {
        return ep;
    },
    yR: function () {
        return ed;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
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
    _ = n(872810),
    v = n(607070),
    T = n(220779),
    p = n(201133),
    f = n(557135),
    g = n(194082),
    I = n(605236),
    C = n(543241),
    N = n(318374),
    P = n(258609),
    Z = n(810568),
    A = n(168524),
    S = n(382182),
    M = n(871118),
    y = n(565138),
    O = n(66999),
    R = n(790642),
    j = n(359110),
    L = n(12168),
    w = n(237583),
    b = n(131704),
    D = n(592125),
    U = n(430824),
    B = n(496675),
    k = n(699516),
    F = n(9156),
    G = n(594174),
    H = n(979651),
    V = n(938475),
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
    ea = n(797342),
    ei = n(896449),
    er = n(469153),
    es = n(206583),
    eo = n(981631),
    eu = n(689938),
    ec = n(738127);
function ed(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (
        (0, h.useFocusLock)(n),
        (0, l.jsx)('div', {
            className: ec.popout,
            ref: n,
            children: t
        })
    );
}
function eh(e) {
    let { children: t, backgroundImgSrc: n, className: a, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, en.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, l.jsx)(h.ThemeProvider, {
            theme: eo.BRd.DARK,
            children: (e) =>
                (0, l.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(ec.hero, e, a),
                    style: i,
                    children: t
                })
        })
    );
}
let em = a.createContext(null);
function ex(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: ec.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, l.jsx)('div', {
                className: ec.interactionsContainer,
                children: (0, l.jsx)(em.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function eE(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: E, buttons: _ = [], header: v, onVoiceChannelPreview: g } = e,
        [C, N] = a.useState(!1),
        [P, Z] = a.useState(null),
        A = (0, u.e7)([B.Z], () => null != t && eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(eo.Plq.SEND_MESSAGES, t)),
        [S, M] = a.useState(!1),
        [L, z] = a.useState(!1),
        { voiceBar: q, joinVoiceButton: J } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, ee.Z)(n),
                { isRich: o, appName: c } = (0, ea.n)(n),
                { needSubscriptionToAccess: m } = (0, O.Z)(null == t ? void 0 : t.id),
                E = (0, u.e7)([U.Z], () => (null != s ? U.Z.getGuild(s.guild_id) : void 0)),
                _ = (0, u.Wu)([V.ZP], () => (null != s ? V.ZP.getVoiceStatesForChannel(s) : []), [s]),
                v = (0, u.e7)([H.Z], () => H.Z.isInChannel(null == s ? void 0 : s.id)),
                T = a.useMemo(() => {
                    for (let e of _) {
                        let t = D.Z.getDMFromUserId(e.user.id),
                            n = null != t && F.ZP.isChannelMuted(null, t),
                            l = k.Z.isBlocked(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [_]);
            if (null == s || null == E)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let p = null != r,
                g = () => {
                    x.Z.updateChatOpen(s.id, !0), (0, j.Kh)(s.id);
                    null == i || i(s, o ? c : void 0);
                },
                I = () => {
                    f.Z.handleVoiceConnect({
                        channel: s,
                        connected: v,
                        needSubscriptionToAccess: m,
                        routeDirectlyToChannel: !0
                    });
                },
                C = (e) => {
                    let { children: t, text: n, hasBlockedOrMutedVCParticipant: a } = e,
                        i = a
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      a &&
                                          (0, l.jsx)(h.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: ec.popoutBlockedWarningIcon
                                          }),
                                      eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        h.Tooltip,
                        {
                            'aria-label': a ? eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                N = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: ec.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, l.jsx)(C, {
                                    text: eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: T,
                                    children: (e) =>
                                        (0, l.jsxs)(h.Clickable, {
                                            ...e,
                                            'aria-label': eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: g,
                                            className: ec.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(y.Z, {
                                                    guild: E,
                                                    size: y.Z.Sizes.SMOL,
                                                    className: ec.voiceChannelGuildIcon,
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
                                                    className: ec.voiceChannelName,
                                                    children: s.name
                                                })
                                            ]
                                        })
                                }),
                                (0, l.jsx)(w.Z, {
                                    guildId: E.id,
                                    users: _,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(h.Avatar, {
                                            src: e.user.getAvatarURL(E.id, 16),
                                            size: h.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)('div', {
                                            className: ec.voiceChannelAdditionalParticipants,
                                            children: (0, l.jsx)(h.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', { className: ec.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: N,
                joinVoiceButton: v
                    ? null
                    : (0, l.jsx)(C, {
                          hasBlockedOrMutedVCParticipant: T,
                          children: (e) =>
                              (0, l.jsx)(eg, {
                                  ...e,
                                  color: h.Button.Colors.GREEN,
                                  onClick: I,
                                  IconComponent: p ? h.ScreenIcon : h.VoiceNormalIcon,
                                  children: p ? eu.Z.Messages.WATCH : eu.Z.Messages.JOIN
                              })
                      })
            };
        })({
            channel: t,
            entry: E,
            onVoiceChannelPreview: g
        }),
        { embeddedActivity: K } = (0, et.qy)(E),
        X = (function (e) {
            let t = (0, u.e7)([U.Z], () => U.Z.getGuild(null == e ? void 0 : e.guildId)),
                n = (0, u.e7)([D.Z], () => D.Z.getChannel(null == e ? void 0 : e.channelId)),
                a = (0, u.Wu)([G.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => G.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && b.sR.has(n.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: ec.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, l.jsxs)(h.Clickable, {
                                      'aria-label': eu.Z.Messages.VIEW_CHANNEL,
                                      onClick: () => (0, j.Kh)(n.id),
                                      className: ec.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, l.jsx)(y.Z, {
                                              guild: t,
                                              size: y.Z.Sizes.SMOL,
                                              className: ec.voiceChannelGuildIcon,
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
                                              className: ec.voiceChannelName,
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
                                              className: ec.voiceChannelAdditionalParticipants,
                                              children: (0, l.jsx)(h.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-normal',
                                                  children: e
                                              })
                                          })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', { className: ec.primaryActionPopoutDivider })
                      ]
                  })
                : null;
        })(K),
        Q = null != J && 0 === _.length ? [J] : _,
        en = Q.length > 0,
        ei = Q.length >= 2,
        [ed, eh] = a.useState(!en),
        em = W.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        ex = null != t && C ? '#'.concat(t.name) : '@'.concat(em),
        eE = C ? eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        ev = async (e) => {
            let l;
            if (null != e) {
                if (
                    (Y.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: es.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    M(!0),
                    z(!1),
                    C)
                )
                    o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = D.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    o()(null != l, 'Send channel must be defined'),
                    ep({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            z(!0),
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
        eT = async (e) => {
            let l;
            if (((0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), C)) o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                    t = D.Z.getChannel(e);
                o()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === eo.d4z.DM ? es.xP.DM_REACTION_MESSAGE_SENT : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return ep({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: s,
                requiresChannelReadiness: !0
            });
        },
        ep = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a, requiresChannelReadiness: s } = e;
            if ((null == P || P.focus(), (0, R.Io)('ContentPopout Reactor')))
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
        ef = null != v ? v : null != q ? q : null != X ? X : void 0;
    return (
        a.useEffect(() => {
            ed && (null == P || P.focus());
        }, [P, C, ed]),
        (0, l.jsxs)('div', {
            style: { pointerEvents: S ? 'none' : 'all' },
            children: [
                (0, l.jsx)(er.Z, {
                    sent: L,
                    shown: S,
                    className: ec.toastContainer
                }),
                null != ef
                    ? ef
                    : (0, l.jsx)(el.Z, {
                          children: (0, l.jsxs)('div', {
                              className: ec.emojiHotrailShareToChannel,
                              children: [
                                  (0, l.jsx)(e_, {
                                      channel: t,
                                      onClickSuggestion: ev
                                  }),
                                  (0, l.jsx)(T.dE, { onSelectEmoji: ev })
                              ]
                          })
                      }),
                (0, l.jsxs)('div', {
                    className: ed ? ec.inputContainerShareToChannel : ec.hiddenButRenderedInputField,
                    children: [
                        (0, l.jsx)(T.A7, {
                            placeholder: eu.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: ex }),
                            onEnter: eT,
                            setEditorRef: (e) => Z(e),
                            channel: C ? t : void 0,
                            showEmojiButton: null != ef,
                            renderAttachButton: A
                                ? () =>
                                      (0, l.jsx)(h.Tooltip, {
                                          text: eE,
                                          children: (e) =>
                                              (0, l.jsx)(h.Clickable, {
                                                  ...e,
                                                  className: ec.shareToChannelButton,
                                                  onClick: () => N((e) => !e),
                                                  children: C
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
                                onClick: () => eh(!1),
                                className: ec.primaryActionPopoutMessageCloseIcon,
                                children: (0, l.jsx)(h.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === ed &&
                    (0, l.jsxs)('div', {
                        className: ec.primaryActionPopoutActionButtons,
                        children: [
                            (0, l.jsxs)(
                                h.Button,
                                {
                                    className: ec.secondaryButton,
                                    color: h.Button.Colors.CUSTOM,
                                    onClick: () => eh(!0),
                                    innerClassName: ec.iconButton,
                                    size: ei ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                                    children: [
                                        (0, l.jsx)(h.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: ec.secondaryText
                                        }),
                                        !ei &&
                                            (0, l.jsx)(h.Text, {
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
let e_ = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let s = !!v.Z.keyboardModeEnabled && !i,
        o = (0, C.wC)(null == t ? void 0 : t.guild_id)
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
                              text: eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              position: 'top',
                              'aria-label': eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              color: h.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, l.jsx)(L.u, {
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
function ev(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: s } = e,
        o = null == t ? void 0 : t.guild_id,
        { displayParticipants: c, participant1: d, participant2: m, numOtherParticipants: x } = (0, Q.Z)(a, 3),
        E = (0, u.e7)([G.default], () => G.default.getUser(a.author_id)),
        { streamPreviewUrl: _ } = (0, ee.Z)(a),
        v = [d, m];
    return (0, l.jsxs)('div', {
        className: ec.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: ec.popoutUserContainer,
                children: [
                    (0, l.jsx)(N.Z, {
                        maxUsers: 3,
                        users: c,
                        size: h.AvatarSizes.SIZE_24,
                        avatarClassName: ec.popoutStackedAvatar,
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
                        className: ec.popoutTextSecondary,
                        children: n.format({
                            user0: W.ZP.getName(o, null == t ? void 0 : t.id, v[0]),
                            user1: W.ZP.getName(o, null == t ? void 0 : t.id, v[1]),
                            countOthers: x,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    h.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
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
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
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
            null != _ && (0, l.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL }),
            null != E &&
                (0, l.jsx)(ei.Z, {
                    user: E,
                    channel: t,
                    guildId: o,
                    entry: a,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function eT(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(h.Clickable, {
              className: ec.maybeClickable,
              onClick: n,
              children: t
          });
}
function ep(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: s, onClickThumbnail: o, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: m = !1, onUserPopoutClosed: x, ...E } = e,
        { entry: _ } = E,
        v = (0, J.dX)(_),
        T = (0, A.Z)({
            location: 'ContentPopout',
            applicationId: v && !m ? (null === (t = _.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: _.author_id
        }),
        { largeImage: p, smallImage: f } = (0, q.rv)({ entry: _ }),
        g = v ? T : void 0;
    return (0, l.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, l.jsx)(ev, {
                disableGameProfileLinks: m,
                ...E,
                onUserPopoutClosed: x
            }),
            (0, l.jsxs)(eh, {
                backgroundImgSrc: null == p ? void 0 : p.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: ec.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: ec.popoutThumbnailContainer,
                                children: (0, l.jsx)(X.E, {
                                    image: p,
                                    smallImage: f,
                                    onClick: null != o ? o : g,
                                    size: X.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: ec.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(eT, {
                                        onClick: null != u ? u : g,
                                        children: (0, l.jsx)(h.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(ec.popoutHeroTextPrimary, { [ec.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(eT, {
                                              onClick: null != c ? c : g,
                                              children: (0, l.jsx)(h.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutHeroTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(h.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, l.jsx)('div', {
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
function ef(e) {
    var t;
    let { title: n, subtitle: i, badges: r, stream: s, onClickThumbnail: o, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: m, ...x } = e,
        v = (0, u.e7)([D.Z], () => D.Z.getChannel(null == s ? void 0 : s.channelId)),
        [T] = a.useMemo(() => (0, S.p9)(v, H.Z, U.Z, B.Z, P.Z), [v]),
        { entry: p } = x,
        f = (0, J.dX)(p),
        g = (0, A.Z)({
            location: 'ContentPopout',
            applicationId: f ? (null === (t = p.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id
        }),
        I = f ? g : void 0,
        { activity: C, activityApplication: N, fallbackApplication: y } = (0, et.qy)(p),
        { largeImage: O, smallImage: R } = (0, q.YC)(C, null != N ? N : y);
    return null == s
        ? null
        : (0, l.jsxs)('div', {
              className: ec.popoutContentWrapper,
              children: [
                  (0, l.jsx)(ev, {
                      ...x,
                      onUserPopoutClosed: m
                  }),
                  (0, l.jsxs)('div', {
                      className: ec.streamingPopoutHero,
                      children: [
                          (0, l.jsx)(eT, {
                              onClick: T
                                  ? () => {
                                        E.default.selectVoiceChannel(s.channelId), (0, _.iV)(s);
                                    }
                                  : void 0,
                              children: (0, l.jsxs)('div', {
                                  style: { position: 'relative' },
                                  children: [
                                      (0, l.jsx)(M.Z, {
                                          className: ec.streamingPopoutImg,
                                          stream: s
                                      }),
                                      T &&
                                          (0, l.jsx)('div', {
                                              className: ec.streamCTA,
                                              children: (0, l.jsx)(h.Text, {
                                                  variant: 'text-md/normal',
                                                  children: eu.Z.Messages.WATCH_STREAM
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, l.jsxs)('div', {
                              className: ec.streamingPopoutHeader,
                              children: [
                                  null != O &&
                                      (0, l.jsx)('div', {
                                          className: ec.popoutThumbnailContainer,
                                          children: (0, l.jsx)(X.E, {
                                              image: O,
                                              smallImage: R,
                                              onClick: null != o ? o : I,
                                              size: X.J.SIZE_72
                                          })
                                      }),
                                  (0, l.jsxs)('div', {
                                      className: ec.streamingPopoutHeaderText,
                                      children: [
                                          (0, l.jsx)(eT, {
                                              onClick: null != c ? c : I,
                                              children: (0, l.jsx)(h.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: ec.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, l.jsx)(eT, {
                                                    onClick: null != d ? d : I,
                                                    children: (0, l.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: ec.popoutTextSecondary,
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
function eg(e) {
    let { IconComponent: t, children: n, className: a, ...i } = e;
    return (0, l.jsxs)(h.Button, {
        ...i,
        className: r()(a, ec.primaryButton),
        innerClassName: null != t ? ec.iconButton : void 0,
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
