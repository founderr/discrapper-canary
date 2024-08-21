t.d(n, {
    Ll: function () {
        return eC;
    },
    St: function () {
        return e_;
    },
    WT: function () {
        return eE;
    },
    jL: function () {
        return eI;
    },
    wG: function () {
        return eN;
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
var c = t(442837),
    u = t(704215),
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
    f = t(543241),
    v = t(318374),
    M = t(258609),
    P = t(810568),
    Z = t(168524),
    S = t(382182),
    A = t(871118),
    O = t(565138),
    j = t(66999),
    R = t(790642),
    y = t(359110),
    L = t(171368),
    w = t(12168),
    b = t(237583),
    k = t(592125),
    B = t(430824),
    U = t(496675),
    G = t(699516),
    D = t(9156),
    H = t(594174),
    Y = t(979651),
    V = t(938475),
    F = t(626135),
    W = t(768581),
    z = t(5192),
    q = t(792125),
    K = t(26033),
    J = t(656709),
    X = t(192918),
    $ = t(22211),
    Q = t(571243),
    ee = t(206295),
    en = t(111386),
    et = t(797342),
    ea = t(43205),
    el = t(896449),
    ei = t(469153),
    er = t(206583),
    es = t(981631),
    eo = t(689938),
    ec = t(164384);
function eu(e) {
    let { children: n } = e,
        t = l.useRef(null);
    return (
        (0, m.useFocusLock)(t),
        (0, a.jsx)('div', {
            className: ec.popout,
            ref: t,
            children: n
        })
    );
}
function ed(e) {
    let { children: n, backgroundImgSrc: t, className: l, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, ee.Z)(t);
    return (
        null != t && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, a.jsx)('div', {
            'data-disable-adaptive-theme': !0,
            className: r()(ec.hero, (0, q.Q)(es.BRd.DARK), l),
            style: i,
            children: n
        })
    );
}
let em = l.createContext(null);
function e_(e) {
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
function eE(e) {
    let { channel: n, user: t, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: T, buttons: h = [], header: x, onVoiceChannelPreview: p } = e,
        [f, v] = l.useState(!1),
        [M, P] = l.useState(null),
        Z = (0, c.e7)([U.Z], () => null != n && U.Z.can(es.Plq.SEND_MESSAGES, n)),
        S = (0, Q.a)({ location: 'PopoutReactor' }),
        [A, L] = l.useState(!1),
        [w, H] = l.useState(!1),
        { voiceBar: W, joinVoiceButton: q } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, $.Z)(t),
                { isRich: o, appName: u } = (0, et.n)(t),
                { needSubscriptionToAccess: _ } = (0, j.Z)(null == n ? void 0 : n.id),
                T = (0, c.e7)([B.Z], () => (null != s ? B.Z.getGuild(s.guild_id) : void 0)),
                h = (0, c.Wu)([V.ZP], () => (null != s ? V.ZP.getVoiceStatesForChannel(s) : []), [s]),
                x = (0, c.e7)([Y.Z], () => Y.Z.isInChannel(null == s ? void 0 : s.id)),
                N = l.useMemo(() => {
                    for (let e of h) {
                        let n = k.Z.getDMFromUserId(e.user.id),
                            t = null != n && D.ZP.isChannelMuted(null, n),
                            a = G.Z.isBlocked(e.user.id);
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
                    null == i || i(s, o ? u : void 0);
                },
                g = () => {
                    C.Z.handleVoiceConnect({
                        channel: s,
                        connected: x,
                        needSubscriptionToAccess: _,
                        routeDirectlyToChannel: !0
                    });
                },
                f = (e) => {
                    let { children: n, text: t, hasBlockedOrMutedVCParticipant: l } = e,
                        i = l
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      l &&
                                          (0, a.jsx)(m.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: ec.popoutBlockedWarningIcon
                                          }),
                                      eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : t;
                    return (0, a.jsx)(
                        m.Tooltip,
                        {
                            'aria-label': l ? eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != t && t,
                            text: i,
                            shouldShow: !0,
                            children: n
                        },
                        'voice-preview'
                    );
                },
                v = (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: ec.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, a.jsx)(f, {
                                    text: eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: N,
                                    children: (e) =>
                                        (0, a.jsxs)(m.Clickable, {
                                            ...e,
                                            'aria-label': eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: p,
                                            className: ec.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, a.jsx)(O.Z, {
                                                    guild: T,
                                                    size: O.Z.Sizes.SMOL,
                                                    className: ec.voiceChannelGuildIcon,
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
                                                    className: ec.voiceChannelName,
                                                    children: s.name
                                                })
                                            ]
                                        })
                                }),
                                (0, a.jsx)(b.Z, {
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
                                            className: ec.voiceChannelAdditionalParticipants,
                                            children: (0, a.jsx)(m.Text, {
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
                voiceBar: v,
                joinVoiceButton: x
                    ? null
                    : (0, a.jsx)(f, {
                          hasBlockedOrMutedVCParticipant: N,
                          children: (e) =>
                              (0, a.jsx)(eC, {
                                  ...e,
                                  color: m.Button.Colors.GREEN,
                                  onClick: g,
                                  IconComponent: I ? m.ScreenIcon : m.VoiceNormalIcon,
                                  children: I ? eo.Z.Messages.WATCH : eo.Z.Messages.JOIN
                              })
                      })
            };
        })({
            channel: n,
            entry: T,
            onVoiceChannelPreview: p
        }),
        K = null != q && 0 === h.length ? [q] : h,
        X = K.length > 0,
        ee = K.length >= 2,
        [ea, el] = l.useState(!X),
        eu = z.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
        ed = null != n && f ? '#'.concat(n.name) : '@'.concat(eu),
        em = f ? eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        e_ = async (e) => {
            if (null != e) {
                if (
                    (F.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: er.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == n ? void 0 : n.id,
                        guild_id: null == n ? void 0 : n.guild_id
                    }),
                    S)
                ) {
                    let l;
                    if (((0, g.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L(!0), H(!1), f)) o()(null != n, 'shareToChannelMode should only be true if a valid channel is passed'), (l = n);
                    else {
                        var a;
                        let e = await _.Z.getOrEnsurePrivateChannel(t.id);
                        l = null !== (a = k.Z.getChannel(e)) && void 0 !== a ? a : null;
                    }
                    return (
                        o()(null != l, 'Send channel must be defined'),
                        eh({
                            reply: ':'.concat(e.name, ':'),
                            sendToChannel: l,
                            onComplete: (e, n) => {
                                H(!0),
                                    setTimeout(() => {
                                        L(!1), s(e, n);
                                    }, 600);
                            },
                            interactionType: er.xP.REACTION_EMOJI_REACT_SENT
                        })
                    );
                }
                el(!0), null != M && (M.insertEmoji(e, !1, !1), M.focus());
            }
        },
        eE = async (e) => {
            let a;
            if ((S && (0, g.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), f)) o()(null != n, 'shareToChannelMode should only be true if a valid channel is passed'), (a = n);
            else {
                let e = await _.Z.openPrivateChannel(t.id, !1, !1),
                    n = k.Z.getChannel(e);
                o()(null != n, 'DM channel must be defined'), (a = n);
            }
            let l = a.type === es.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eh({
                reply: e,
                sendToChannel: a,
                interactionType: l,
                onComplete: s
            });
        },
        eh = async (e) => {
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
        ex = null != x ? x : null != W ? W : void 0;
    return (0, a.jsxs)('div', {
        style: { pointerEvents: A ? 'none' : 'all' },
        children: [
            (0, a.jsx)(ei.Z, {
                sent: w,
                shown: A,
                className: ec.toastContainer
            }),
            null != ex
                ? ex
                : S
                  ? (0, a.jsx)(en.Z, {
                        children: (0, a.jsxs)('div', {
                            className: ec.emojiHotrailShareToChannel,
                            children: [
                                (0, a.jsx)(eT, {
                                    channel: n,
                                    onClickSuggestion: e_
                                }),
                                (0, a.jsx)(N.dE, { onSelectEmoji: e_ })
                            ]
                        })
                    })
                  : (0, a.jsx)('div', {
                        className: ec.emojiHotrailShareToChannel,
                        children: (0, a.jsx)(eT, {
                            channel: n,
                            onClickSuggestion: e_
                        })
                    }),
            (0, a.jsxs)('div', {
                className: ea ? ec.inputContainerShareToChannel : ec.hiddenButRenderedInputField,
                children: [
                    (0, a.jsx)(N.A7, {
                        placeholder: eo.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: ed }),
                        onEnter: eE,
                        setEditorRef: (e) => P(e),
                        channel: f ? n : void 0,
                        showEmojiButton: null != ex,
                        renderAttachButton: Z
                            ? () =>
                                  (0, a.jsx)(m.Tooltip, {
                                      text: em,
                                      children: (e) =>
                                          (0, a.jsx)(m.Clickable, {
                                              ...e,
                                              className: ec.shareToChannelButton,
                                              onClick: () => v((e) => !e),
                                              children: f
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
                    X &&
                        (0, a.jsx)(m.Clickable, {
                            onClick: () => el(!1),
                            className: ec.primaryActionPopoutMessageCloseIcon,
                            children: (0, a.jsx)(m.XSmallIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY
                            })
                        })
                ]
            }),
            !1 === ea &&
                (0, a.jsxs)('div', {
                    className: ec.primaryActionPopoutActionButtons,
                    children: [
                        (0, a.jsxs)(
                            m.Button,
                            {
                                className: ec.secondaryButton,
                                color: m.Button.Colors.CUSTOM,
                                onClick: () => el(!0),
                                innerClassName: ec.iconButton,
                                size: ee ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                                children: [
                                    (0, a.jsx)(m.ChatIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        colorClass: ec.secondaryText
                                    }),
                                    !ee &&
                                        (0, a.jsx)(m.Text, {
                                            variant: 'text-md/semibold',
                                            className: ec.secondaryText,
                                            children: eo.Z.Messages.USER_POPOUT_MESSAGE
                                        })
                                ]
                            },
                            'toggleMessageMode'
                        ),
                        K
                    ]
                })
        ]
    });
}
let eT = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = l.useState(!1);
    l.useEffect(() => {
        r(!0);
    }, []);
    let s = !!x.Z.keyboardModeEnabled && !i,
        o = (0, f.wC)(null == n ? void 0 : n.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, W.gT)({
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
                              text: eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              position: 'top',
                              'aria-label': eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: n.name }),
                              color: m.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, a.jsx)(w.u, {
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
function eh(e) {
    let { channel: n, userDescription: t, entry: l, disableGameProfileLinks: i } = e,
        s = null == n ? void 0 : n.guild_id,
        { displayParticipants: o, participant1: u, participant2: d, numOtherParticipants: _ } = (0, X.Z)(l, 3),
        E = (0, c.e7)([H.default], () => H.default.getUser(l.author_id)),
        { streamPreviewUrl: T } = (0, $.Z)(l),
        h = [u, d];
    return (0, a.jsxs)('div', {
        className: ec.popoutContentHeader,
        children: [
            (0, a.jsxs)('div', {
                className: ec.popoutUserContainer,
                children: [
                    (0, a.jsx)(v.Z, {
                        maxUsers: 3,
                        users: o,
                        size: m.AvatarSizes.SIZE_24,
                        avatarClassName: ec.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0
                    }),
                    (0, a.jsx)(m.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, a.jsx)(m.Heading, {
                        variant: 'heading-sm/normal',
                        className: ec.popoutTextSecondary,
                        children: t.format({
                            user1: z.ZP.getName(s, null == n ? void 0 : n.id, h[0]),
                            user2: z.ZP.getName(s, null == n ? void 0 : n.id, h[1]),
                            countOthers: _,
                            nameHook: (e, n) =>
                                (0, a.jsx)(m.Clickable, {
                                    tag: 'span',
                                    onClick: () => (0, L.openUserProfileModal)({ userId: h[parseInt(n)].id }),
                                    className: ec.maybeClickable,
                                    children: (0, a.jsx)(
                                        m.Text,
                                        {
                                            variant: 'text-sm/medium',
                                            className: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                            children: e
                                        },
                                        n
                                    )
                                })
                        })
                    })
                ]
            }),
            null != T && (0, a.jsx)(p.ZP, { size: p.ZP.Sizes.SMALL }),
            null != E &&
                (0, a.jsx)(el.Z, {
                    user: E,
                    channel: n,
                    guildId: s,
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
        : (0, a.jsx)(m.Clickable, {
              className: ec.maybeClickable,
              onClick: t,
              children: n
          });
}
function eN(e) {
    var n;
    let { thumbnailSrc: t, thumbnailFallbackSrc: l, thumbnailTitle: i, title: s, subtitle: o, badges: c, children: u, onClickThumbnail: d, onClickTitle: _, onClickSubtitle: E, headerIcons: T, disableGameProfileLinks: h = !1, ...x } = e,
        { entry: N } = x,
        I = (0, K.dX)(N),
        C = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: I && !h ? (null === (n = N.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: N.author_id
        }),
        p = I ? C : void 0;
    return (0, a.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, a.jsx)(eh, {
                disableGameProfileLinks: h,
                ...x
            }),
            (0, a.jsxs)(ed, {
                backgroundImgSrc: t,
                children: [
                    (0, a.jsxs)('div', {
                        className: ec.popoutHeroInner,
                        children: [
                            (0, a.jsx)('div', {
                                className: ec.popoutThumbnailContainer,
                                children: (0, a.jsx)(ex, {
                                    onClick: null != d ? d : p,
                                    children: (0, a.jsx)(ea.f, {
                                        size: 72,
                                        constrain: 'width',
                                        alt: i,
                                        src: t,
                                        fallbackSrc: l,
                                        className: ec.contentImage,
                                        showTooltip: null != i
                                    })
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: ec.popoutHeroBody,
                                children: [
                                    (0, a.jsx)(ex, {
                                        onClick: null != _ ? _ : p,
                                        children: (0, a.jsx)(m.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(ec.popoutHeroTextPrimary, { [ec.popoutHeroTextPrimaryShort]: null != T }),
                                            lineClamp: 3,
                                            children: s
                                        })
                                    }),
                                    null != o
                                        ? (0, a.jsx)(ex, {
                                              onClick: null != E ? E : p,
                                              children: (0, a.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutHeroTextSecondary,
                                                  children: o
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(m.Spacer, { size: 8 }),
                                    c
                                ]
                            }),
                            (0, a.jsx)('div', {
                                className: ec.popoutHeaderIcons,
                                children: T
                            })
                        ]
                    }),
                    u
                ]
            })
        ]
    });
}
function eI(e) {
    var n;
    let { title: t, subtitle: i, badges: r, stream: s, thumbnailSrc: o, thumbnailFallbackSrc: u, thumbnailTitle: d, onClickThumbnail: _, onClickTitle: E, onClickSubtitle: x, ...N } = e,
        I = (0, c.e7)([k.Z], () => k.Z.getChannel(null == s ? void 0 : s.channelId)),
        [C] = l.useMemo(() => (0, S.p9)(I, Y.Z, B.Z, U.Z, M.Z), [I]),
        { entry: p } = N,
        g = (0, K.dX)(p),
        f = (0, Z.Z)({
            location: 'ContentPopout',
            applicationId: g ? (null === (n = p.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id
        }),
        v = g ? f : void 0;
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: ec.popoutContentWrapper,
              children: [
                  (0, a.jsx)(eh, { ...N }),
                  (0, a.jsxs)('div', {
                      className: ec.streamingPopoutHero,
                      children: [
                          (0, a.jsx)(ex, {
                              onClick: C
                                  ? () => {
                                        T.default.selectVoiceChannel(s.channelId), (0, h.iV)(s);
                                    }
                                  : void 0,
                              children: (0, a.jsxs)('div', {
                                  style: { position: 'relative' },
                                  children: [
                                      (0, a.jsx)(A.Z, {
                                          className: ec.streamingPopoutImg,
                                          stream: s
                                      }),
                                      C &&
                                          (0, a.jsx)('div', {
                                              className: ec.streamCTA,
                                              children: (0, a.jsx)(m.Text, {
                                                  variant: 'text-md/normal',
                                                  children: eo.Z.Messages.WATCH_STREAM
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, a.jsxs)('div', {
                              className: ec.streamingPopoutHeader,
                              children: [
                                  null != o &&
                                      (0, a.jsx)('div', {
                                          className: ec.popoutThumbnailContainer,
                                          children: (0, a.jsx)(ex, {
                                              onClick: null != _ ? _ : v,
                                              children: (0, a.jsx)(ea.f, {
                                                  size: 72,
                                                  constrain: 'width',
                                                  alt: d,
                                                  src: o,
                                                  fallbackSrc: u,
                                                  className: ec.contentImage
                                              })
                                          })
                                      }),
                                  (0, a.jsxs)('div', {
                                      className: ec.streamingPopoutHeaderText,
                                      children: [
                                          (0, a.jsx)(ex, {
                                              onClick: null != E ? E : v,
                                              children: (0, a.jsx)(m.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: ec.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: t
                                              })
                                          }),
                                          null != i
                                              ? (0, a.jsx)(ex, {
                                                    onClick: null != x ? x : v,
                                                    children: (0, a.jsx)(m.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: ec.popoutTextSecondary,
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
function eC(e) {
    let { IconComponent: n, children: t, className: l, ...i } = e;
    return (0, a.jsxs)(m.Button, {
        ...i,
        className: r()(l, ec.primaryButton),
        innerClassName: null != n ? ec.iconButton : void 0,
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
