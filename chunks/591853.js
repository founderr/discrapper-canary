t.d(n, {
    Ll: function () {
        return eC;
    },
    St: function () {
        return eE;
    },
    WT: function () {
        return eT;
    },
    jL: function () {
        return ep;
    },
    wG: function () {
        return eN;
    },
    yR: function () {
        return ed;
    }
}),
    t(47120);
var a = t(735250),
    l = t(470079),
    i = t(120356),
    r = t.n(i),
    s = t(512722),
    o = t.n(s);
t(699581);
var u = t(442837),
    c = t(704215),
    d = t(692547),
    _ = t(481060),
    m = t(493683),
    E = t(475179),
    T = t(287734),
    h = t(872810),
    x = t(607070),
    I = t(220779),
    N = t(201133),
    p = t(557135),
    C = t(194082),
    g = t(605236),
    v = t(543241),
    f = t(318374),
    M = t(258609),
    P = t(810568),
    Z = t(168524),
    A = t(382182),
    S = t(871118),
    O = t(565138),
    j = t(66999),
    R = t(790642),
    y = t(359110),
    L = t(12168),
    w = t(237583),
    B = t(592125),
    b = t(430824),
    k = t(496675),
    U = t(699516),
    D = t(9156),
    G = t(594174),
    H = t(979651),
    V = t(938475),
    Y = t(626135),
    F = t(768581),
    W = t(5192),
    z = t(792125),
    q = t(379357),
    K = t(26033),
    J = t(91907),
    X = t(358696),
    $ = t(656709),
    Q = t(192918),
    ee = t(22211),
    en = t(561308),
    et = t(206295),
    ea = t(111386),
    el = t(797342),
    ei = t(896449),
    er = t(469153),
    es = t(206583),
    eo = t(981631),
    eu = t(689938),
    ec = t(164384);
function ed(e) {
    let { children: n } = e,
        t = l.useRef(null);
    return (
        (0, _.useFocusLock)(t),
        (0, a.jsx)('div', {
            className: ec.popout,
            ref: t,
            children: n
        })
    );
}
function e_(e) {
    let { children: n, backgroundImgSrc: t, className: l, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, et.Z)(t);
    return (
        null != t && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, a.jsx)('div', {
            'data-disable-adaptive-theme': !0,
            className: r()(ec.hero, (0, z.Q)(eo.BRd.DARK), l),
            style: i,
            children: n
        })
    );
}
let em = l.createContext(null);
function eE(e) {
    let { children: n } = e,
        t = l.useRef(null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: ec.interactionsContainerHeader,
                ref: (e) => (t.current = e)
            }),
            (0, a.jsx)('div', {
                className: ec.interactionsContainer,
                children: (0, a.jsx)(em.Provider, {
                    value: t.current,
                    children: n
                })
            })
        ]
    });
}
function eT(e) {
    let { channel: n, user: t, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: T, buttons: h = [], header: x, onVoiceChannelPreview: C } = e,
        [v, f] = l.useState(!1),
        [M, P] = l.useState(null),
        Z = (0, u.e7)([k.Z], () => null != n && k.Z.can(eo.Plq.SEND_MESSAGES, n)),
        [A, S] = l.useState(!1),
        [L, G] = l.useState(!1),
        { voiceBar: F, joinVoiceButton: z } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, ee.Z)(t),
                { isRich: o, appName: c } = (0, el.n)(t),
                { needSubscriptionToAccess: m } = (0, j.Z)(null == n ? void 0 : n.id),
                T = (0, u.e7)([b.Z], () => (null != s ? b.Z.getGuild(s.guild_id) : void 0)),
                h = (0, u.Wu)([V.ZP], () => (null != s ? V.ZP.getVoiceStatesForChannel(s) : []), [s]),
                x = (0, u.e7)([H.Z], () => H.Z.isInChannel(null == s ? void 0 : s.id)),
                I = l.useMemo(() => {
                    for (let e of h) {
                        let n = B.Z.getDMFromUserId(e.user.id),
                            t = null != n && D.ZP.isChannelMuted(null, n),
                            a = U.Z.isBlocked(e.user.id);
                        if (t || a) return !0;
                    }
                    return !1;
                }, [h]);
            if (null == s || null == T)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let N = null != r,
                C = () => {
                    E.Z.updateChatOpen(s.id, !0), (0, y.Kh)(s.id);
                    null == i || i(s, o ? c : void 0);
                },
                g = () => {
                    p.Z.handleVoiceConnect({
                        channel: s,
                        connected: x,
                        needSubscriptionToAccess: m,
                        routeDirectlyToChannel: !0
                    });
                },
                v = (e) => {
                    let { children: n, text: t, hasBlockedOrMutedVCParticipant: l } = e,
                        i = l
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      l &&
                                          (0, a.jsx)(_.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: ec.popoutBlockedWarningIcon
                                          }),
                                      eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : t;
                    return (0, a.jsx)(
                        _.Tooltip,
                        {
                            'aria-label': l ? eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != t && t,
                            text: i,
                            shouldShow: !0,
                            children: n
                        },
                        'voice-preview'
                    );
                },
                f = (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: ec.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, a.jsx)(v, {
                                    text: eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: I,
                                    children: (e) =>
                                        (0, a.jsxs)(_.Clickable, {
                                            ...e,
                                            'aria-label': eu.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: C,
                                            className: ec.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, a.jsx)(O.Z, {
                                                    guild: T,
                                                    size: O.Z.Sizes.SMOL,
                                                    className: ec.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, a.jsx)(_.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, a.jsx)(_.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, a.jsx)(_.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: ec.voiceChannelName,
                                                    children: s.name
                                                })
                                            ]
                                        })
                                }),
                                (0, a.jsx)(w.Z, {
                                    guildId: T.id,
                                    users: h,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, a.jsx)(_.Avatar, {
                                            src: e.user.getAvatarURL(T.id, 16),
                                            size: _.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: n
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, a.jsx)('div', {
                                            className: ec.voiceChannelAdditionalParticipants,
                                            children: (0, a.jsx)(_.Text, {
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
                voiceBar: f,
                joinVoiceButton: x
                    ? null
                    : (0, a.jsx)(v, {
                          hasBlockedOrMutedVCParticipant: I,
                          children: (e) =>
                              (0, a.jsx)(eC, {
                                  ...e,
                                  color: _.Button.Colors.GREEN,
                                  onClick: g,
                                  IconComponent: N ? _.ScreenIcon : _.VoiceNormalIcon,
                                  children: N ? eu.Z.Messages.WATCH : eu.Z.Messages.JOIN
                              })
                      })
            };
        })({
            channel: n,
            entry: T,
            onVoiceChannelPreview: C
        }),
        q = null != z && 0 === h.length ? [z] : h,
        K = q.length > 0,
        J = q.length >= 2,
        [X, Q] = l.useState(!K),
        en = W.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
        et = null != n && v ? '#'.concat(n.name) : '@'.concat(en),
        ei = v ? eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        ed = async (e) => {
            let a;
            if (null != e) {
                if (
                    (Y.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: es.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == n ? void 0 : n.id,
                        guild_id: null == n ? void 0 : n.guild_id
                    }),
                    (0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    S(!0),
                    G(!1),
                    v)
                )
                    o()(null != n, 'shareToChannelMode should only be true if a valid channel is passed'), (a = n);
                else {
                    var l;
                    let e = await m.Z.getOrEnsurePrivateChannel(t.id);
                    a = null !== (l = B.Z.getChannel(e)) && void 0 !== l ? l : null;
                }
                return (
                    o()(null != a, 'Send channel must be defined'),
                    em({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: a,
                        onComplete: (e, n) => {
                            G(!0),
                                setTimeout(() => {
                                    S(!1), s(e, n);
                                }, 600);
                        },
                        interactionType: es.xP.REACTION_EMOJI_REACT_SENT
                    })
                );
            }
        },
        e_ = async (e) => {
            let a;
            if (((0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), v)) o()(null != n, 'shareToChannelMode should only be true if a valid channel is passed'), (a = n);
            else {
                let e = await m.Z.openPrivateChannel(t.id, !1, !1),
                    n = B.Z.getChannel(e);
                o()(null != n, 'DM channel must be defined'), (a = n);
            }
            let l = a.type === eo.d4z.DM ? es.xP.DM_REACTION_MESSAGE_SENT : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return em({
                reply: e,
                sendToChannel: a,
                interactionType: l,
                onComplete: s
            });
        },
        em = async (e) => {
            let { reply: n, sendToChannel: t, onComplete: a, interactionType: l } = e;
            if ((null == M || M.focus(), (0, R.Io)('ContentPopout Reactor')))
                await (0, $.p)({
                    channel: t,
                    content: n,
                    entry: T,
                    whenReady: !1
                });
            else {
                var s;
                let e = await ((s = i),
                async function () {
                    for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    try {
                        return await s(...n);
                    } catch (e) {
                        throw e;
                    }
                })(t.id);
                o()(null != e, 'Reaction image must be defined'),
                    await (0, N.B)({
                        file: e,
                        channel: t,
                        altText: r,
                        reply: n
                    });
            }
            null == a || a(l, t);
        },
        eE = null != x ? x : null != F ? F : void 0;
    return (
        l.useEffect(() => {
            X && (null == M || M.focus());
        }, [M, v, X]),
        (0, a.jsxs)('div', {
            style: { pointerEvents: A ? 'none' : 'all' },
            children: [
                (0, a.jsx)(er.Z, {
                    sent: L,
                    shown: A,
                    className: ec.toastContainer
                }),
                null != eE
                    ? eE
                    : (0, a.jsx)(ea.Z, {
                          children: (0, a.jsxs)('div', {
                              className: ec.emojiHotrailShareToChannel,
                              children: [
                                  (0, a.jsx)(eh, {
                                      channel: n,
                                      onClickSuggestion: ed
                                  }),
                                  (0, a.jsx)(I.dE, { onSelectEmoji: ed })
                              ]
                          })
                      }),
                (0, a.jsxs)('div', {
                    className: X ? ec.inputContainerShareToChannel : ec.hiddenButRenderedInputField,
                    children: [
                        (0, a.jsx)(I.A7, {
                            placeholder: eu.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: et }),
                            onEnter: e_,
                            setEditorRef: (e) => P(e),
                            channel: v ? n : void 0,
                            showEmojiButton: null != eE,
                            renderAttachButton: Z
                                ? () =>
                                      (0, a.jsx)(_.Tooltip, {
                                          text: ei,
                                          children: (e) =>
                                              (0, a.jsx)(_.Clickable, {
                                                  ...e,
                                                  className: ec.shareToChannelButton,
                                                  onClick: () => f((e) => !e),
                                                  children: v
                                                      ? (0, a.jsx)(_.TextIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, a.jsx)(_.AtIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        K &&
                            (0, a.jsx)(_.Clickable, {
                                onClick: () => Q(!1),
                                className: ec.primaryActionPopoutMessageCloseIcon,
                                children: (0, a.jsx)(_.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === X &&
                    (0, a.jsxs)('div', {
                        className: ec.primaryActionPopoutActionButtons,
                        children: [
                            (0, a.jsxs)(
                                _.Button,
                                {
                                    className: ec.secondaryButton,
                                    color: _.Button.Colors.CUSTOM,
                                    onClick: () => Q(!0),
                                    innerClassName: ec.iconButton,
                                    size: J ? _.Button.Sizes.MIN : _.Button.Sizes.LARGE,
                                    children: [
                                        (0, a.jsx)(_.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: ec.secondaryText
                                        }),
                                        !J &&
                                            (0, a.jsx)(_.Text, {
                                                variant: 'text-md/semibold',
                                                className: ec.secondaryText,
                                                children: eu.Z.Messages.USER_POPOUT_MESSAGE
                                            })
                                    ]
                                },
                                'toggleMessageMode'
                            ),
                            q
                        ]
                    })
            ]
        })
    );
}
let eh = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = l.useState(!1);
    l.useEffect(() => {
        r(!0);
    }, []);
    let s = !!x.Z.keyboardModeEnabled && !i,
        o = (0, v.wC)(null == n ? void 0 : n.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, F.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58
                          })
                      }
            );
    return (0, a.jsx)(a.Fragment, {
        children: o.map((e) => {
            let { emoji: n, url: l } = e;
            return null != l
                ? (0, a.jsx)(
                      'div',
                      {
                          children: (0, a.jsx)(_.TooltipContainer, {
                              text: eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              position: 'top',
                              'aria-label': eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              color: _.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, a.jsx)(L.u, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t(n),
                                  className: ec.emoji
                              })
                          })
                      },
                      n.name
                  )
                : null;
        })
    });
};
function ex(e) {
    let { channel: n, userDescription: t, entry: l, disableGameProfileLinks: i } = e,
        s = null == n ? void 0 : n.guild_id,
        { displayParticipants: o, participant1: c, participant2: d, numOtherParticipants: m } = (0, Q.Z)(l, 3),
        E = (0, u.e7)([G.default], () => G.default.getUser(l.author_id)),
        { streamPreviewUrl: T } = (0, ee.Z)(l),
        h = [c, d];
    return (0, a.jsxs)('div', {
        className: ec.popoutContentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: ec.popoutUserContainer,
                children: [
                    (0, a.jsx)(f.Z, {
                        maxUsers: 3,
                        users: o,
                        size: _.AvatarSizes.SIZE_24,
                        avatarClassName: ec.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0
                    }),
                    (0, a.jsx)(_.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, a.jsx)(_.Heading, {
                        variant: 'heading-sm/normal',
                        className: ec.popoutTextSecondary,
                        children: t.format({
                            user0: W.ZP.getName(s, null == n ? void 0 : n.id, h[0]),
                            user1: W.ZP.getName(s, null == n ? void 0 : n.id, h[1]),
                            countOthers: m,
                            countOthersHook: (e, n) =>
                                (0, a.jsx)(
                                    _.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        children: e
                                    },
                                    n
                                ),
                            name0Hook: (e, t) =>
                                (0, a.jsx)(
                                    J.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: h[0],
                                        channel: n
                                    },
                                    t
                                ),
                            name1Hook: (e, t) =>
                                (0, a.jsx)(
                                    J.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: h[1],
                                        channel: n
                                    },
                                    t
                                )
                        })
                    })
                ]
            }),
            null != T && (0, a.jsx)(C.ZP, { size: C.ZP.Sizes.SMALL }),
            null != E &&
                (0, a.jsx)(ei.Z, {
                    user: E,
                    channel: n,
                    guildId: s,
                    entry: l,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function eI(e) {
    let { children: n, onClick: t } = e;
    return null == t
        ? (0, a.jsx)(a.Fragment, { children: n })
        : (0, a.jsx)(_.Clickable, {
              className: ec.maybeClickable,
              onClick: t,
              children: n
          });
}
function eN(e) {
    var n;
    let { title: t, subtitle: l, badges: i, children: s, onClickThumbnail: o, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: m = !1, ...E } = e,
        { entry: T } = E,
        h = (0, K.dX)(T),
        x = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: h && !m ? (null === (n = T.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: T.author_id
        }),
        { largeImage: I, smallImage: N } = (0, q.rv)({ entry: T }),
        p = h ? x : void 0;
    return (0, a.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, a.jsx)(ex, {
                disableGameProfileLinks: m,
                ...E
            }),
            (0, a.jsxs)(e_, {
                backgroundImgSrc: null == I ? void 0 : I.src,
                children: [
                    (0, a.jsxs)('div', {
                        className: ec.popoutHeroInner,
                        children: [
                            (0, a.jsx)('div', {
                                className: ec.popoutThumbnailContainer,
                                children: (0, a.jsx)(X.E, {
                                    image: I,
                                    smallImage: N,
                                    onClick: null != o ? o : p,
                                    size: X.J.SIZE_72
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: ec.popoutHeroBody,
                                children: [
                                    (0, a.jsx)(eI, {
                                        onClick: null != u ? u : p,
                                        children: (0, a.jsx)(_.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(ec.popoutHeroTextPrimary, { [ec.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: t
                                        })
                                    }),
                                    null != l
                                        ? (0, a.jsx)(eI, {
                                              onClick: null != c ? c : p,
                                              children: (0, a.jsx)(_.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutHeroTextSecondary,
                                                  children: l
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(_.Spacer, { size: 8 }),
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
    var n;
    let { title: t, subtitle: i, badges: r, stream: s, onClickThumbnail: o, onClickTitle: c, onClickSubtitle: d, ...m } = e,
        E = (0, u.e7)([B.Z], () => B.Z.getChannel(null == s ? void 0 : s.channelId)),
        [x] = l.useMemo(() => (0, A.p9)(E, H.Z, b.Z, k.Z, M.Z), [E]),
        { entry: I } = m,
        N = (0, K.dX)(I),
        p = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: N ? (null === (n = I.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: I.author_id
        }),
        C = N ? p : void 0,
        { activity: g, activityApplication: v, fallbackApplication: f } = (0, en.qy)(I),
        { largeImage: O, smallImage: j } = (0, q.YC)(g, null != v ? v : f);
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: ec.popoutContentWrapper,
              children: [
                  (0, a.jsx)(ex, { ...m }),
                  (0, a.jsxs)('div', {
                      className: ec.streamingPopoutHero,
                      children: [
                          (0, a.jsx)(eI, {
                              onClick: x
                                  ? () => {
                                        T.default.selectVoiceChannel(s.channelId), (0, h.iV)(s);
                                    }
                                  : void 0,
                              children: (0, a.jsxs)('div', {
                                  style: { position: 'relative' },
                                  children: [
                                      (0, a.jsx)(S.Z, {
                                          className: ec.streamingPopoutImg,
                                          stream: s
                                      }),
                                      x &&
                                          (0, a.jsx)('div', {
                                              className: ec.streamCTA,
                                              children: (0, a.jsx)(_.Text, {
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
                                  null != O &&
                                      (0, a.jsx)('div', {
                                          className: ec.popoutThumbnailContainer,
                                          children: (0, a.jsx)(X.E, {
                                              image: O,
                                              smallImage: j,
                                              onClick: null != o ? o : C,
                                              size: X.J.SIZE_72
                                          })
                                      }),
                                  (0, a.jsxs)('div', {
                                      className: ec.streamingPopoutHeaderText,
                                      children: [
                                          (0, a.jsx)(eI, {
                                              onClick: null != c ? c : C,
                                              children: (0, a.jsx)(_.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: ec.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: t
                                              })
                                          }),
                                          null != i
                                              ? (0, a.jsx)(eI, {
                                                    onClick: null != d ? d : C,
                                                    children: (0, a.jsx)(_.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: ec.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, a.jsx)(_.Spacer, { size: 8 }),
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
function eC(e) {
    let { IconComponent: n, children: t, className: l, ...i } = e;
    return (0, a.jsxs)(_.Button, {
        ...i,
        className: r()(l, ec.primaryButton),
        innerClassName: null != n ? ec.iconButton : void 0,
        size: _.Button.Sizes.LARGE,
        children: [
            null != n
                ? (0, a.jsx)(n, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, a.jsx)(_.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: t
            })
        ]
    });
}
