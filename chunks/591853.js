t.d(n, {
    Ll: function () {
        return ep;
    },
    St: function () {
        return em;
    },
    WT: function () {
        return eE;
    },
    jL: function () {
        return eN;
    },
    wG: function () {
        return eI;
    },
    yR: function () {
        return ec;
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
    P = t(258609),
    M = t(810568),
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
    U = t(430824),
    b = t(496675),
    k = t(699516),
    D = t(9156),
    G = t(594174),
    H = t(979651),
    V = t(938475),
    Y = t(626135),
    F = t(768581),
    W = t(5192),
    z = t(379357),
    q = t(26033),
    K = t(91907),
    J = t(358696),
    X = t(656709),
    $ = t(192918),
    Q = t(22211),
    ee = t(561308),
    en = t(206295),
    et = t(111386),
    ea = t(797342),
    el = t(896449),
    ei = t(469153),
    er = t(206583),
    es = t(981631),
    eo = t(689938),
    eu = t(164384);
function ec(e) {
    let { children: n } = e,
        t = l.useRef(null);
    return (
        (0, _.useFocusLock)(t),
        (0, a.jsx)('div', {
            className: eu.popout,
            ref: t,
            children: n
        })
    );
}
function ed(e) {
    let { children: n, backgroundImgSrc: t, className: l, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, en.Z)(t);
    return (
        null != t && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, a.jsx)(_.ThemeProvider, {
            theme: es.BRd.DARK,
            children: (e) =>
                (0, a.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(eu.hero, e, l),
                    style: i,
                    children: n
                })
        })
    );
}
let e_ = l.createContext(null);
function em(e) {
    let { children: n } = e,
        t = l.useRef(null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: eu.interactionsContainerHeader,
                ref: (e) => (t.current = e)
            }),
            (0, a.jsx)('div', {
                className: eu.interactionsContainer,
                children: (0, a.jsx)(e_.Provider, {
                    value: t.current,
                    children: n
                })
            })
        ]
    });
}
function eE(e) {
    let { channel: n, user: t, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: T, buttons: h = [], header: x, onVoiceChannelPreview: C } = e,
        [v, f] = l.useState(!1),
        [P, M] = l.useState(null),
        Z = (0, u.e7)([b.Z], () => null != n && b.Z.can(es.Plq.SEND_MESSAGES, n)),
        [A, S] = l.useState(!1),
        [L, G] = l.useState(!1),
        { voiceBar: F, joinVoiceButton: z } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, Q.Z)(t),
                { isRich: o, appName: c } = (0, ea.n)(t),
                { needSubscriptionToAccess: m } = (0, j.Z)(null == n ? void 0 : n.id),
                T = (0, u.e7)([U.Z], () => (null != s ? U.Z.getGuild(s.guild_id) : void 0)),
                h = (0, u.Wu)([V.ZP], () => (null != s ? V.ZP.getVoiceStatesForChannel(s) : []), [s]),
                x = (0, u.e7)([H.Z], () => H.Z.isInChannel(null == s ? void 0 : s.id)),
                I = l.useMemo(() => {
                    for (let e of h) {
                        let n = B.Z.getDMFromUserId(e.user.id),
                            t = null != n && D.ZP.isChannelMuted(null, n),
                            a = k.Z.isBlocked(e.user.id);
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
                                              className: eu.popoutBlockedWarningIcon
                                          }),
                                      eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : t;
                    return (0, a.jsx)(
                        _.Tooltip,
                        {
                            'aria-label': l ? eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != t && t,
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
                            className: eu.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, a.jsx)(v, {
                                    text: eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: I,
                                    children: (e) =>
                                        (0, a.jsxs)(_.Clickable, {
                                            ...e,
                                            'aria-label': eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: C,
                                            className: eu.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, a.jsx)(O.Z, {
                                                    guild: T,
                                                    size: O.Z.Sizes.SMOL,
                                                    className: eu.voiceChannelGuildIcon,
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
                                                    className: eu.voiceChannelName,
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
                                            className: eu.voiceChannelAdditionalParticipants,
                                            children: (0, a.jsx)(_.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', { className: eu.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: f,
                joinVoiceButton: x
                    ? null
                    : (0, a.jsx)(v, {
                          hasBlockedOrMutedVCParticipant: I,
                          children: (e) =>
                              (0, a.jsx)(ep, {
                                  ...e,
                                  color: _.Button.Colors.GREEN,
                                  onClick: g,
                                  IconComponent: N ? _.ScreenIcon : _.VoiceNormalIcon,
                                  children: N ? eo.Z.Messages.WATCH : eo.Z.Messages.JOIN
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
        [$, ee] = l.useState(!K),
        en = W.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
        el = null != n && v ? '#'.concat(n.name) : '@'.concat(en),
        ec = v ? eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        ed = async (e) => {
            let a;
            if (null != e) {
                if (
                    (Y.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: er.Kd.GUILD_MEMBER_LIST,
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
                        interactionType: er.xP.REACTION_EMOJI_REACT_SENT
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
            let l = a.type === es.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return em({
                reply: e,
                sendToChannel: a,
                interactionType: l,
                onComplete: s
            });
        },
        em = async (e) => {
            let { reply: n, sendToChannel: t, onComplete: a, interactionType: l } = e;
            if ((null == P || P.focus(), (0, R.Io)('ContentPopout Reactor')))
                await (0, X.p)({
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
            $ && (null == P || P.focus());
        }, [P, v, $]),
        (0, a.jsxs)('div', {
            style: { pointerEvents: A ? 'none' : 'all' },
            children: [
                (0, a.jsx)(ei.Z, {
                    sent: L,
                    shown: A,
                    className: eu.toastContainer
                }),
                null != eE
                    ? eE
                    : (0, a.jsx)(et.Z, {
                          children: (0, a.jsxs)('div', {
                              className: eu.emojiHotrailShareToChannel,
                              children: [
                                  (0, a.jsx)(eT, {
                                      channel: n,
                                      onClickSuggestion: ed
                                  }),
                                  (0, a.jsx)(I.dE, { onSelectEmoji: ed })
                              ]
                          })
                      }),
                (0, a.jsxs)('div', {
                    className: $ ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
                    children: [
                        (0, a.jsx)(I.A7, {
                            placeholder: eo.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: el }),
                            onEnter: e_,
                            setEditorRef: (e) => M(e),
                            channel: v ? n : void 0,
                            showEmojiButton: null != eE,
                            renderAttachButton: Z
                                ? () =>
                                      (0, a.jsx)(_.Tooltip, {
                                          text: ec,
                                          children: (e) =>
                                              (0, a.jsx)(_.Clickable, {
                                                  ...e,
                                                  className: eu.shareToChannelButton,
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
                                onClick: () => ee(!1),
                                className: eu.primaryActionPopoutMessageCloseIcon,
                                children: (0, a.jsx)(_.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === $ &&
                    (0, a.jsxs)('div', {
                        className: eu.primaryActionPopoutActionButtons,
                        children: [
                            (0, a.jsxs)(
                                _.Button,
                                {
                                    className: eu.secondaryButton,
                                    color: _.Button.Colors.CUSTOM,
                                    onClick: () => ee(!0),
                                    innerClassName: eu.iconButton,
                                    size: J ? _.Button.Sizes.MIN : _.Button.Sizes.LARGE,
                                    children: [
                                        (0, a.jsx)(_.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: eu.secondaryText
                                        }),
                                        !J &&
                                            (0, a.jsx)(_.Text, {
                                                variant: 'text-md/semibold',
                                                className: eu.secondaryText,
                                                children: eo.Z.Messages.USER_POPOUT_MESSAGE
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
let eT = (e) => {
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
                              text: eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              position: 'top',
                              'aria-label': eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              color: _.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, a.jsx)(L.u, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t(n),
                                  className: eu.emoji
                              })
                          })
                      },
                      n.name
                  )
                : null;
        })
    });
};
function eh(e) {
    let { channel: n, userDescription: t, entry: l, disableGameProfileLinks: i, onUserPopoutClosed: s } = e,
        o = null == n ? void 0 : n.guild_id,
        { displayParticipants: c, participant1: d, participant2: m, numOtherParticipants: E } = (0, $.Z)(l, 3),
        T = (0, u.e7)([G.default], () => G.default.getUser(l.author_id)),
        { streamPreviewUrl: h } = (0, Q.Z)(l),
        x = [d, m];
    return (0, a.jsxs)('div', {
        className: eu.popoutContentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: eu.popoutUserContainer,
                children: [
                    (0, a.jsx)(f.Z, {
                        maxUsers: 3,
                        users: c,
                        size: _.AvatarSizes.SIZE_24,
                        avatarClassName: eu.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: s
                    }),
                    (0, a.jsx)(_.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, a.jsx)(_.Heading, {
                        variant: 'heading-sm/normal',
                        className: eu.popoutTextSecondary,
                        children: t.format({
                            user0: W.ZP.getName(o, null == n ? void 0 : n.id, x[0]),
                            user1: W.ZP.getName(o, null == n ? void 0 : n.id, x[1]),
                            countOthers: E,
                            countOthersHook: (e, n) =>
                                (0, a.jsx)(
                                    _.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        children: e
                                    },
                                    n
                                ),
                            name0Hook: (e, t) =>
                                (0, a.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: x[0],
                                        channel: n,
                                        onPopoutClosed: s
                                    },
                                    t
                                ),
                            name1Hook: (e, t) =>
                                (0, a.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: x[1],
                                        channel: n,
                                        onPopoutClosed: s
                                    },
                                    t
                                )
                        })
                    })
                ]
            }),
            null != h && (0, a.jsx)(C.ZP, { size: C.ZP.Sizes.SMALL }),
            null != T &&
                (0, a.jsx)(el.Z, {
                    user: T,
                    channel: n,
                    guildId: o,
                    entry: l,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function ex(e) {
    let { children: n, onClick: t } = e;
    return null == t
        ? (0, a.jsx)(a.Fragment, { children: n })
        : (0, a.jsx)(_.Clickable, {
              className: eu.maybeClickable,
              onClick: t,
              children: n
          });
}
function eI(e) {
    var n;
    let { title: t, subtitle: l, badges: i, children: s, onClickThumbnail: o, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: m = !1, onUserPopoutClosed: E, ...T } = e,
        { entry: h } = T,
        x = (0, q.dX)(h),
        I = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: x && !m ? (null === (n = h.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: M.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: h.author_id
        }),
        { largeImage: N, smallImage: p } = (0, z.rv)({ entry: h }),
        C = x ? I : void 0;
    return (0, a.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, a.jsx)(eh, {
                disableGameProfileLinks: m,
                ...T,
                onUserPopoutClosed: E
            }),
            (0, a.jsxs)(ed, {
                backgroundImgSrc: null == N ? void 0 : N.src,
                children: [
                    (0, a.jsxs)('div', {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, a.jsx)('div', {
                                className: eu.popoutThumbnailContainer,
                                children: (0, a.jsx)(J.E, {
                                    image: N,
                                    smallImage: p,
                                    onClick: null != o ? o : C,
                                    size: J.J.SIZE_72
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, a.jsx)(ex, {
                                        onClick: null != u ? u : C,
                                        children: (0, a.jsx)(_.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: t
                                        })
                                    }),
                                    null != l
                                        ? (0, a.jsx)(ex, {
                                              onClick: null != c ? c : C,
                                              children: (0, a.jsx)(_.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eu.popoutHeroTextSecondary,
                                                  children: l
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(_.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, a.jsx)('div', {
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
function eN(e) {
    var n;
    let { title: t, subtitle: i, badges: r, stream: s, onClickThumbnail: o, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: m, ...E } = e,
        x = (0, u.e7)([B.Z], () => B.Z.getChannel(null == s ? void 0 : s.channelId)),
        [I] = l.useMemo(() => (0, A.p9)(x, H.Z, U.Z, b.Z, P.Z), [x]),
        { entry: N } = E,
        p = (0, q.dX)(N),
        C = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: p ? (null === (n = N.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: M.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: N.author_id
        }),
        g = p ? C : void 0,
        { activity: v, activityApplication: f, fallbackApplication: O } = (0, ee.qy)(N),
        { largeImage: j, smallImage: R } = (0, z.YC)(v, null != f ? f : O);
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: eu.popoutContentWrapper,
              children: [
                  (0, a.jsx)(eh, {
                      ...E,
                      onUserPopoutClosed: m
                  }),
                  (0, a.jsxs)('div', {
                      className: eu.streamingPopoutHero,
                      children: [
                          (0, a.jsx)(ex, {
                              onClick: I
                                  ? () => {
                                        T.default.selectVoiceChannel(s.channelId), (0, h.iV)(s);
                                    }
                                  : void 0,
                              children: (0, a.jsxs)('div', {
                                  style: { position: 'relative' },
                                  children: [
                                      (0, a.jsx)(S.Z, {
                                          className: eu.streamingPopoutImg,
                                          stream: s
                                      }),
                                      I &&
                                          (0, a.jsx)('div', {
                                              className: eu.streamCTA,
                                              children: (0, a.jsx)(_.Text, {
                                                  variant: 'text-md/normal',
                                                  children: eo.Z.Messages.WATCH_STREAM
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, a.jsxs)('div', {
                              className: eu.streamingPopoutHeader,
                              children: [
                                  null != j &&
                                      (0, a.jsx)('div', {
                                          className: eu.popoutThumbnailContainer,
                                          children: (0, a.jsx)(J.E, {
                                              image: j,
                                              smallImage: R,
                                              onClick: null != o ? o : g,
                                              size: J.J.SIZE_72
                                          })
                                      }),
                                  (0, a.jsxs)('div', {
                                      className: eu.streamingPopoutHeaderText,
                                      children: [
                                          (0, a.jsx)(ex, {
                                              onClick: null != c ? c : g,
                                              children: (0, a.jsx)(_.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: eu.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: t
                                              })
                                          }),
                                          null != i
                                              ? (0, a.jsx)(ex, {
                                                    onClick: null != d ? d : g,
                                                    children: (0, a.jsx)(_.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: eu.popoutTextSecondary,
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
function ep(e) {
    let { IconComponent: n, children: t, className: l, ...i } = e;
    return (0, a.jsxs)(_.Button, {
        ...i,
        className: r()(l, eu.primaryButton),
        innerClassName: null != n ? eu.iconButton : void 0,
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
