t.d(n, {
    Ll: function () {
        return eI;
    },
    St: function () {
        return em;
    },
    WT: function () {
        return e_;
    },
    jL: function () {
        return eN;
    },
    wG: function () {
        return ex;
    },
    yR: function () {
        return eu;
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
    m = t(481060),
    _ = t(493683),
    E = t(475179),
    T = t(287734),
    h = t(872810),
    x = t(607070),
    N = t(220779),
    I = t(201133),
    C = t(557135),
    p = t(194082),
    g = t(605236),
    v = t(543241),
    f = t(318374),
    M = t(258609),
    P = t(810568),
    Z = t(168524),
    S = t(382182),
    A = t(871118),
    O = t(565138),
    j = t(66999),
    R = t(790642),
    y = t(359110),
    L = t(12168),
    w = t(237583),
    b = t(592125),
    B = t(430824),
    k = t(496675),
    U = t(699516),
    G = t(9156),
    D = t(594174),
    H = t(979651),
    V = t(938475),
    Y = t(626135),
    F = t(768581),
    W = t(5192),
    z = t(792125),
    q = t(26033),
    K = t(91907),
    J = t(656709),
    X = t(192918),
    $ = t(22211),
    Q = t(206295),
    ee = t(111386),
    en = t(797342),
    et = t(43205),
    ea = t(896449),
    el = t(469153),
    ei = t(206583),
    er = t(981631),
    es = t(689938),
    eo = t(164384);
function eu(e) {
    let { children: n } = e,
        t = l.useRef(null);
    return (
        (0, m.useFocusLock)(t),
        (0, a.jsx)('div', {
            className: eo.popout,
            ref: t,
            children: n
        })
    );
}
function ec(e) {
    let { children: n, backgroundImgSrc: t, className: l, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, Q.Z)(t);
    return (
        null != t && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, a.jsx)('div', {
            'data-disable-adaptive-theme': !0,
            className: r()(eo.hero, (0, z.Q)(er.BRd.DARK), l),
            style: i,
            children: n
        })
    );
}
let ed = l.createContext(null);
function em(e) {
    let { children: n } = e,
        t = l.useRef(null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: eo.interactionsContainerHeader,
                ref: (e) => (t.current = e)
            }),
            (0, a.jsx)('div', {
                className: eo.interactionsContainer,
                children: (0, a.jsx)(ed.Provider, {
                    value: t.current,
                    children: n
                })
            })
        ]
    });
}
function e_(e) {
    let { channel: n, user: t, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: T, buttons: h = [], header: x, onVoiceChannelPreview: p } = e,
        [v, f] = l.useState(!1),
        [M, P] = l.useState(null),
        Z = (0, u.e7)([k.Z], () => null != n && k.Z.can(er.Plq.SEND_MESSAGES, n)),
        [S, A] = l.useState(!1),
        [L, D] = l.useState(!1),
        { voiceBar: F, joinVoiceButton: z } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, $.Z)(t),
                { isRich: o, appName: c } = (0, en.n)(t),
                { needSubscriptionToAccess: _ } = (0, j.Z)(null == n ? void 0 : n.id),
                T = (0, u.e7)([B.Z], () => (null != s ? B.Z.getGuild(s.guild_id) : void 0)),
                h = (0, u.Wu)([V.ZP], () => (null != s ? V.ZP.getVoiceStatesForChannel(s) : []), [s]),
                x = (0, u.e7)([H.Z], () => H.Z.isInChannel(null == s ? void 0 : s.id)),
                N = l.useMemo(() => {
                    for (let e of h) {
                        let n = b.Z.getDMFromUserId(e.user.id),
                            t = null != n && G.ZP.isChannelMuted(null, n),
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
            let I = null != r,
                p = () => {
                    E.Z.updateChatOpen(s.id, !0), (0, y.Kh)(s.id);
                    null == i || i(s, o ? c : void 0);
                },
                g = () => {
                    C.Z.handleVoiceConnect({
                        channel: s,
                        connected: x,
                        needSubscriptionToAccess: _,
                        routeDirectlyToChannel: !0
                    });
                },
                v = (e) => {
                    let { children: n, text: t, hasBlockedOrMutedVCParticipant: l } = e,
                        i = l
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      l &&
                                          (0, a.jsx)(m.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: eo.popoutBlockedWarningIcon
                                          }),
                                      es.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : t;
                    return (0, a.jsx)(
                        m.Tooltip,
                        {
                            'aria-label': l ? es.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != t && t,
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
                            className: eo.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, a.jsx)(v, {
                                    text: es.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: N,
                                    children: (e) =>
                                        (0, a.jsxs)(m.Clickable, {
                                            ...e,
                                            'aria-label': es.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: p,
                                            className: eo.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, a.jsx)(O.Z, {
                                                    guild: T,
                                                    size: O.Z.Sizes.SMOL,
                                                    className: eo.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, a.jsx)(m.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, a.jsx)(m.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, a.jsx)(m.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: eo.voiceChannelName,
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
                                        (0, a.jsx)(m.Avatar, {
                                            src: e.user.getAvatarURL(T.id, 16),
                                            size: m.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: n
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, a.jsx)('div', {
                                            className: eo.voiceChannelAdditionalParticipants,
                                            children: (0, a.jsx)(m.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', { className: eo.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: f,
                joinVoiceButton: x
                    ? null
                    : (0, a.jsx)(v, {
                          hasBlockedOrMutedVCParticipant: N,
                          children: (e) =>
                              (0, a.jsx)(eI, {
                                  ...e,
                                  color: m.Button.Colors.GREEN,
                                  onClick: g,
                                  IconComponent: I ? m.ScreenIcon : m.VoiceNormalIcon,
                                  children: I ? es.Z.Messages.WATCH : es.Z.Messages.JOIN
                              })
                      })
            };
        })({
            channel: n,
            entry: T,
            onVoiceChannelPreview: p
        }),
        q = null != z && 0 === h.length ? [z] : h,
        K = q.length > 0,
        X = q.length >= 2,
        [Q, et] = l.useState(!K),
        ea = W.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
        eu = null != n && v ? '#'.concat(n.name) : '@'.concat(ea),
        ec = v ? es.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : es.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        ed = async (e) => {
            let a;
            if (null != e) {
                if (
                    (Y.default.track(er.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ei.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == n ? void 0 : n.id,
                        guild_id: null == n ? void 0 : n.guild_id
                    }),
                    (0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    A(!0),
                    D(!1),
                    v)
                )
                    o()(null != n, 'shareToChannelMode should only be true if a valid channel is passed'), (a = n);
                else {
                    var l;
                    let e = await _.Z.getOrEnsurePrivateChannel(t.id);
                    a = null !== (l = b.Z.getChannel(e)) && void 0 !== l ? l : null;
                }
                return (
                    o()(null != a, 'Send channel must be defined'),
                    e_({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: a,
                        onComplete: (e, n) => {
                            D(!0),
                                setTimeout(() => {
                                    A(!1), s(e, n);
                                }, 600);
                        },
                        interactionType: ei.xP.REACTION_EMOJI_REACT_SENT
                    })
                );
            }
        },
        em = async (e) => {
            let a;
            if (((0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), v)) o()(null != n, 'shareToChannelMode should only be true if a valid channel is passed'), (a = n);
            else {
                let e = await _.Z.openPrivateChannel(t.id, !1, !1),
                    n = b.Z.getChannel(e);
                o()(null != n, 'DM channel must be defined'), (a = n);
            }
            let l = a.type === er.d4z.DM ? ei.xP.DM_REACTION_MESSAGE_SENT : ei.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return e_({
                reply: e,
                sendToChannel: a,
                interactionType: l,
                onComplete: s
            });
        },
        e_ = async (e) => {
            let { reply: n, sendToChannel: t, onComplete: a, interactionType: l } = e;
            if ((0, R.Io)('ContentPopout Reactor'))
                await (0, J.p)({
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
                    await (0, I.B)({
                        file: e,
                        channel: t,
                        altText: r,
                        reply: n
                    });
            }
            null == a || a(l, t);
        },
        eT = null != x ? x : null != F ? F : void 0;
    return (0, a.jsxs)('div', {
        style: { pointerEvents: S ? 'none' : 'all' },
        children: [
            (0, a.jsx)(el.Z, {
                sent: L,
                shown: S,
                className: eo.toastContainer
            }),
            null != eT
                ? eT
                : (0, a.jsx)(ee.Z, {
                      children: (0, a.jsxs)('div', {
                          className: eo.emojiHotrailShareToChannel,
                          children: [
                              (0, a.jsx)(eE, {
                                  channel: n,
                                  onClickSuggestion: ed
                              }),
                              (0, a.jsx)(N.dE, { onSelectEmoji: ed })
                          ]
                      })
                  }),
            (0, a.jsxs)('div', {
                className: Q ? eo.inputContainerShareToChannel : eo.hiddenButRenderedInputField,
                children: [
                    (0, a.jsx)(N.A7, {
                        placeholder: es.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: eu }),
                        onEnter: em,
                        setEditorRef: (e) => P(e),
                        channel: v ? n : void 0,
                        showEmojiButton: null != eT,
                        renderAttachButton: Z
                            ? () =>
                                  (0, a.jsx)(m.Tooltip, {
                                      text: ec,
                                      children: (e) =>
                                          (0, a.jsx)(m.Clickable, {
                                              ...e,
                                              className: eo.shareToChannelButton,
                                              onClick: () => f((e) => !e),
                                              children: v
                                                  ? (0, a.jsx)(m.TextIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20
                                                    })
                                                  : (0, a.jsx)(m.AtIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20
                                                    })
                                          })
                                  })
                            : void 0
                    }),
                    K &&
                        (0, a.jsx)(m.Clickable, {
                            onClick: () => et(!1),
                            className: eo.primaryActionPopoutMessageCloseIcon,
                            children: (0, a.jsx)(m.XSmallIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY
                            })
                        })
                ]
            }),
            !1 === Q &&
                (0, a.jsxs)('div', {
                    className: eo.primaryActionPopoutActionButtons,
                    children: [
                        (0, a.jsxs)(
                            m.Button,
                            {
                                className: eo.secondaryButton,
                                color: m.Button.Colors.CUSTOM,
                                onClick: () => et(!0),
                                innerClassName: eo.iconButton,
                                size: X ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                                children: [
                                    (0, a.jsx)(m.ChatIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        colorClass: eo.secondaryText
                                    }),
                                    !X &&
                                        (0, a.jsx)(m.Text, {
                                            variant: 'text-md/semibold',
                                            className: eo.secondaryText,
                                            children: es.Z.Messages.USER_POPOUT_MESSAGE
                                        })
                                ]
                            },
                            'toggleMessageMode'
                        ),
                        q
                    ]
                })
        ]
    });
}
let eE = (e) => {
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
                          children: (0, a.jsx)(m.TooltipContainer, {
                              text: es.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              position: 'top',
                              'aria-label': es.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              color: m.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, a.jsx)(L.u, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t(n),
                                  className: eo.emoji
                              })
                          })
                      },
                      n.name
                  )
                : null;
        })
    });
};
function eT(e) {
    let { channel: n, userDescription: t, entry: l, disableGameProfileLinks: i } = e,
        s = null == n ? void 0 : n.guild_id,
        { displayParticipants: o, participant1: c, participant2: d, numOtherParticipants: _ } = (0, X.Z)(l, 3),
        E = (0, u.e7)([D.default], () => D.default.getUser(l.author_id)),
        { streamPreviewUrl: T } = (0, $.Z)(l),
        h = [c, d];
    return (0, a.jsxs)('div', {
        className: eo.popoutContentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: eo.popoutUserContainer,
                children: [
                    (0, a.jsx)(f.Z, {
                        maxUsers: 3,
                        users: o,
                        size: m.AvatarSizes.SIZE_24,
                        avatarClassName: eo.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0
                    }),
                    (0, a.jsx)(m.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, a.jsx)(m.Heading, {
                        variant: 'heading-sm/normal',
                        className: eo.popoutTextSecondary,
                        children: t.format({
                            user0: W.ZP.getName(s, null == n ? void 0 : n.id, h[0]),
                            user1: W.ZP.getName(s, null == n ? void 0 : n.id, h[1]),
                            countOthers: _,
                            countOthersHook: (e, n) =>
                                (0, a.jsx)(
                                    m.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(eo.popoutUsername, eo.popoutTextPrimary),
                                        children: e
                                    },
                                    n
                                ),
                            name0Hook: (e, t) =>
                                (0, a.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(eo.popoutUsername, eo.popoutTextPrimary),
                                        text: e,
                                        user: h[0],
                                        channel: n
                                    },
                                    t
                                ),
                            name1Hook: (e, t) =>
                                (0, a.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(eo.popoutUsername, eo.popoutTextPrimary),
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
            null != T && (0, a.jsx)(p.ZP, { size: p.ZP.Sizes.SMALL }),
            null != E &&
                (0, a.jsx)(ea.Z, {
                    user: E,
                    channel: n,
                    guildId: s,
                    entry: l,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function eh(e) {
    let { children: n, onClick: t } = e;
    return null == t
        ? (0, a.jsx)(a.Fragment, { children: n })
        : (0, a.jsx)(m.Clickable, {
              className: eo.maybeClickable,
              onClick: t,
              children: n
          });
}
function ex(e) {
    var n;
    let { thumbnailSrc: t, thumbnailFallbackSrc: l, thumbnailTitle: i, title: s, subtitle: o, badges: u, children: c, onClickThumbnail: d, onClickTitle: _, onClickSubtitle: E, headerIcons: T, disableGameProfileLinks: h = !1, ...x } = e,
        { entry: N } = x,
        I = (0, q.dX)(N),
        C = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: I && !h ? (null === (n = N.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: N.author_id
        }),
        p = I ? C : void 0;
    return (0, a.jsxs)('div', {
        className: eo.popoutContentWrapper,
        children: [
            (0, a.jsx)(eT, {
                disableGameProfileLinks: h,
                ...x
            }),
            (0, a.jsxs)(ec, {
                backgroundImgSrc: t,
                children: [
                    (0, a.jsxs)('div', {
                        className: eo.popoutHeroInner,
                        children: [
                            (0, a.jsx)('div', {
                                className: eo.popoutThumbnailContainer,
                                children: (0, a.jsx)(eh, {
                                    onClick: null != d ? d : p,
                                    children: (0, a.jsx)(et.f, {
                                        size: 72,
                                        constrain: 'width',
                                        alt: i,
                                        src: t,
                                        fallbackSrc: l,
                                        className: eo.contentImage,
                                        showTooltip: null != i
                                    })
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: eo.popoutHeroBody,
                                children: [
                                    (0, a.jsx)(eh, {
                                        onClick: null != _ ? _ : p,
                                        children: (0, a.jsx)(m.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(eo.popoutHeroTextPrimary, { [eo.popoutHeroTextPrimaryShort]: null != T }),
                                            lineClamp: 3,
                                            children: s
                                        })
                                    }),
                                    null != o
                                        ? (0, a.jsx)(eh, {
                                              onClick: null != E ? E : p,
                                              children: (0, a.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eo.popoutHeroTextSecondary,
                                                  children: o
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(m.Spacer, { size: 8 }),
                                    u
                                ]
                            }),
                            (0, a.jsx)('div', {
                                className: eo.popoutHeaderIcons,
                                children: T
                            })
                        ]
                    }),
                    c
                ]
            })
        ]
    });
}
function eN(e) {
    var n;
    let { title: t, subtitle: i, badges: r, stream: s, thumbnailSrc: o, thumbnailFallbackSrc: c, thumbnailTitle: d, onClickThumbnail: _, onClickTitle: E, onClickSubtitle: x, ...N } = e,
        I = (0, u.e7)([b.Z], () => b.Z.getChannel(null == s ? void 0 : s.channelId)),
        [C] = l.useMemo(() => (0, S.p9)(I, H.Z, B.Z, k.Z, M.Z), [I]),
        { entry: p } = N,
        g = (0, q.dX)(p),
        v = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: g ? (null === (n = p.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id
        }),
        f = g ? v : void 0;
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: eo.popoutContentWrapper,
              children: [
                  (0, a.jsx)(eT, { ...N }),
                  (0, a.jsxs)('div', {
                      className: eo.streamingPopoutHero,
                      children: [
                          (0, a.jsx)(eh, {
                              onClick: C
                                  ? () => {
                                        T.default.selectVoiceChannel(s.channelId), (0, h.iV)(s);
                                    }
                                  : void 0,
                              children: (0, a.jsxs)('div', {
                                  style: { position: 'relative' },
                                  children: [
                                      (0, a.jsx)(A.Z, {
                                          className: eo.streamingPopoutImg,
                                          stream: s
                                      }),
                                      C &&
                                          (0, a.jsx)('div', {
                                              className: eo.streamCTA,
                                              children: (0, a.jsx)(m.Text, {
                                                  variant: 'text-md/normal',
                                                  children: es.Z.Messages.WATCH_STREAM
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, a.jsxs)('div', {
                              className: eo.streamingPopoutHeader,
                              children: [
                                  null != o &&
                                      (0, a.jsx)('div', {
                                          className: eo.popoutThumbnailContainer,
                                          children: (0, a.jsx)(eh, {
                                              onClick: null != _ ? _ : f,
                                              children: (0, a.jsx)(et.f, {
                                                  size: 72,
                                                  constrain: 'width',
                                                  alt: d,
                                                  src: o,
                                                  fallbackSrc: c,
                                                  className: eo.contentImage
                                              })
                                          })
                                      }),
                                  (0, a.jsxs)('div', {
                                      className: eo.streamingPopoutHeaderText,
                                      children: [
                                          (0, a.jsx)(eh, {
                                              onClick: null != E ? E : f,
                                              children: (0, a.jsx)(m.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: eo.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: t
                                              })
                                          }),
                                          null != i
                                              ? (0, a.jsx)(eh, {
                                                    onClick: null != x ? x : f,
                                                    children: (0, a.jsx)(m.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: eo.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, a.jsx)(m.Spacer, { size: 8 }),
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
function eI(e) {
    let { IconComponent: n, children: t, className: l, ...i } = e;
    return (0, a.jsxs)(m.Button, {
        ...i,
        className: r()(l, eo.primaryButton),
        innerClassName: null != n ? eo.iconButton : void 0,
        size: m.Button.Sizes.LARGE,
        children: [
            null != n
                ? (0, a.jsx)(n, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, a.jsx)(m.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: t
            })
        ]
    });
}
