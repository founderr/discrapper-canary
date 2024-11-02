n.d(t, {
    Ll: function () {
        return eI;
    },
    St: function () {
        return em;
    },
    WT: function () {
        return ex;
    },
    jL: function () {
        return eC;
    },
    wG: function () {
        return eg;
    },
    yR: function () {
        return ec;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(512722),
    s = n.n(o);
n(995295);
var u = n(442837),
    c = n(704215),
    d = n(692547),
    h = n(481060),
    m = n(493683),
    x = n(475179),
    v = n(287734),
    f = n(872810),
    p = n(607070),
    g = n(220779),
    C = n(201133),
    I = n(557135),
    P = n(194082),
    Z = n(605236),
    y = n(543241),
    j = n(318374),
    w = n(258609),
    T = n(810568),
    L = n(168524),
    S = n(382182),
    N = n(871118),
    E = n(565138),
    _ = n(66999),
    A = n(790642),
    R = n(359110),
    b = n(12168),
    M = n(237583),
    O = n(131704),
    k = n(592125),
    H = n(430824),
    U = n(496675),
    D = n(699516),
    B = n(9156),
    V = n(594174),
    F = n(979651),
    G = n(938475),
    z = n(626135),
    W = n(768581),
    q = n(5192),
    Y = n(379357),
    J = n(26033),
    X = n(91907),
    K = n(358696),
    Q = n(656709),
    $ = n(192918),
    ee = n(22211),
    et = n(561308),
    en = n(206295),
    ei = n(111386),
    el = n(896449),
    ea = n(469153),
    er = n(206583),
    eo = n(981631),
    es = n(388032),
    eu = n(738127);
function ec(e) {
    let { children: t } = e,
        n = l.useRef(null);
    return (
        (0, h.useFocusLock)(n),
        (0, i.jsx)('div', {
            className: eu.popout,
            ref: n,
            children: t
        })
    );
}
function ed(e) {
    let { children: t, backgroundImgSrc: n, className: l, style: a = {} } = e,
        { primaryColor: o, secondaryColor: s } = (0, en.Z)(n);
    return (
        null != n && (a.background = 'linear-gradient(45deg, '.concat(o, ', ').concat(s, ')')),
        (0, i.jsx)(h.ThemeProvider, {
            theme: eo.BRd.DARK,
            children: (e) =>
                (0, i.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(eu.hero, e, l),
                    style: a,
                    children: t
                })
        })
    );
}
let eh = l.createContext(null);
function em(e) {
    let { children: t } = e,
        n = l.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: eu.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, i.jsx)('div', {
                className: eu.interactionsContainer,
                children: (0, i.jsx)(eh.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function ex(e) {
    let { channel: t, user: n, generateReactionImage: a, reactionImageAltText: r, onReaction: o, entry: v, buttons: f = [], header: p, onVoiceChannelPreview: P } = e,
        [y, j] = l.useState(!1),
        [w, T] = l.useState(null),
        L = (0, u.e7)([U.Z], () => null != t && eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && U.Z.can(eo.Plq.SEND_MESSAGES, t)),
        [S, N] = l.useState(!1),
        [b, W] = l.useState(!1),
        { voiceBar: Y, joinVoiceButton: J } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
                { streamPreviewUrl: r, channel: o } = (0, ee.Z)(n),
                { needSubscriptionToAccess: s } = (0, _.Z)(null == t ? void 0 : t.id),
                c = (0, u.e7)([H.Z], () => (null != o ? H.Z.getGuild(o.guild_id) : void 0)),
                m = (0, u.Wu)([G.ZP], () => (null != o ? G.ZP.getVoiceStatesForChannel(o) : []), [o]),
                v = (0, u.e7)([F.Z], () => F.Z.isInChannel(null == o ? void 0 : o.id)),
                f = l.useMemo(() => {
                    for (let e of m) {
                        let t = k.Z.getDMFromUserId(e.user.id),
                            n = null != t && B.ZP.isChannelMuted(null, t),
                            i = D.Z.isBlocked(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [m]);
            if (null == o || null == c)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let p = null != r,
                g = () => {
                    x.Z.updateChatOpen(o.id, !0), (0, R.Kh)(o.id), null == a || a(o);
                },
                C = () => {
                    I.Z.handleVoiceConnect({
                        channel: o,
                        connected: v,
                        needSubscriptionToAccess: s,
                        routeDirectlyToChannel: !0
                    });
                },
                P = (e) => {
                    let { children: t, text: n, hasBlockedOrMutedVCParticipant: l } = e,
                        a = l
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      l &&
                                          (0, i.jsx)(h.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: eu.popoutBlockedWarningIcon
                                          }),
                                      es.intl.string(es.t.d6DpXF)
                                  ]
                              })
                            : n;
                    return (0, i.jsx)(
                        h.Tooltip,
                        {
                            'aria-label': l ? es.intl.string(es.t.d6DpXF) : null != n && n,
                            text: a,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                Z = (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: eu.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, i.jsx)(P, {
                                    text: es.intl.string(es.t.WIVYqK),
                                    hasBlockedOrMutedVCParticipant: f,
                                    children: (e) =>
                                        (0, i.jsxs)(h.Clickable, {
                                            ...e,
                                            'aria-label': es.intl.string(es.t.WIVYqK),
                                            onClick: g,
                                            className: eu.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, i.jsx)(E.Z, {
                                                    guild: c,
                                                    size: E.Z.Sizes.SMOL,
                                                    className: eu.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, i.jsx)(h.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, i.jsx)(h.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, i.jsx)(h.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: eu.voiceChannelName,
                                                    children: o.name
                                                })
                                            ]
                                        })
                                }),
                                (0, i.jsx)(M.Z, {
                                    guildId: c.id,
                                    users: m,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, i.jsx)(h.Avatar, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: h.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, i.jsx)('div', {
                                            className: eu.voiceChannelAdditionalParticipants,
                                            children: (0, i.jsx)(h.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: eu.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: Z,
                joinVoiceButton: v
                    ? null
                    : (0, i.jsx)(P, {
                          hasBlockedOrMutedVCParticipant: f,
                          children: (e) =>
                              (0, i.jsx)(eI, {
                                  ...e,
                                  color: h.Button.Colors.GREEN,
                                  onClick: C,
                                  IconComponent: p ? h.ScreenIcon : h.VoiceNormalIcon,
                                  children: p ? es.intl.string(es.t['I6JG4+']) : es.intl.string(es.t.VJlc0d)
                              })
                      })
            };
        })({
            channel: t,
            entry: v,
            onVoiceChannelPreview: P
        }),
        { embeddedActivity: X } = (0, et.qy)(v),
        K = (function (e) {
            let t = (0, u.e7)([H.Z], () => H.Z.getGuild(null == e ? void 0 : e.guildId)),
                n = (0, u.e7)([k.Z], () => k.Z.getChannel(null == e ? void 0 : e.channelId)),
                l = (0, u.Wu)([V.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => V.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && O.sR.has(n.type)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: eu.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, i.jsxs)(h.Clickable, {
                                      'aria-label': es.intl.string(es.t['W/A4Qk']),
                                      onClick: () => (0, R.Kh)(n.id),
                                      className: eu.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, i.jsx)(E.Z, {
                                              guild: t,
                                              size: E.Z.Sizes.SMOL,
                                              className: eu.voiceChannelGuildIcon,
                                              active: !0
                                          }),
                                          (0, i.jsx)(h.ChevronSmallRightIcon, {
                                              size: 'xxs',
                                              color: d.Z.colors.INTERACTIVE_NORMAL
                                          }),
                                          (0, i.jsx)(h.TextIcon, {
                                              size: 'xs',
                                              color: d.Z.colors.TEXT_NORMAL
                                          }),
                                          (0, i.jsx)(h.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              className: eu.voiceChannelName,
                                              children: null == n ? void 0 : n.name
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(M.Z, {
                                      guildId: t.id,
                                      users: l,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, i.jsx)(h.Avatar, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: h.AvatarSizes.SIZE_16,
                                              'aria-label': 'avatar',
                                              className: n
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, i.jsx)('div', {
                                              className: eu.voiceChannelAdditionalParticipants,
                                              children: (0, i.jsx)(h.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-normal',
                                                  children: e
                                              })
                                          })
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', { className: eu.primaryActionPopoutDivider })
                      ]
                  })
                : null;
        })(X),
        $ = null != J && 0 === f.length ? [J] : f,
        en = $.length > 0,
        el = $.length >= 2,
        [ec, ed] = l.useState(!en),
        eh = q.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        em = null != t && y ? '#'.concat(t.name) : '@'.concat(eh),
        ex = y ? es.intl.string(es.t.Z2CUgo) : es.intl.string(es.t.XLGiTE),
        ef = async (e) => {
            let i;
            if (null != e) {
                if (
                    (z.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: er.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, Z.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    N(!0),
                    W(!1),
                    y)
                )
                    s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (i = t);
                else {
                    var l;
                    let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                    i = null !== (l = k.Z.getChannel(e)) && void 0 !== l ? l : null;
                }
                return (
                    s()(null != i, 'Send channel must be defined'),
                    eg({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: i,
                        onComplete: (e, t) => {
                            W(!0),
                                setTimeout(() => {
                                    N(!1), o(e, t);
                                }, 600);
                        },
                        interactionType: er.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        ep = async (e) => {
            let i;
            if (((0, Z.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), y)) s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (i = t);
            else {
                let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                    t = k.Z.getChannel(e);
                s()(null != t, 'DM channel must be defined'), (i = t);
            }
            let l = i.type === eo.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eg({
                reply: e,
                sendToChannel: i,
                interactionType: l,
                onComplete: o,
                requiresChannelReadiness: !0
            });
        },
        eg = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: i, interactionType: l, requiresChannelReadiness: o } = e;
            if ((null == w || w.focus(), (0, A.Io)('ContentPopout Reactor')))
                await (0, Q.p)({
                    channel: n,
                    content: t,
                    entry: v,
                    whenReady: o
                });
            else {
                var u;
                let e = await ((u = a),
                async function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    try {
                        return await u(...t);
                    } catch (e) {
                        throw e;
                    }
                })(n.id);
                s()(null != e, 'Reaction image must be defined'),
                    await (0, C.B)({
                        file: e,
                        channel: n,
                        altText: r,
                        reply: t
                    });
            }
            null == i || i(l, n);
        },
        eC = null != p ? p : null != Y ? Y : null != K ? K : void 0;
    return (
        l.useEffect(() => {
            ec && (null == w || w.focus());
        }, [w, y, ec]),
        (0, i.jsxs)('div', {
            style: { pointerEvents: S ? 'none' : 'all' },
            children: [
                (0, i.jsx)(ea.Z, {
                    sent: b,
                    shown: S,
                    className: eu.toastContainer
                }),
                null != eC
                    ? eC
                    : (0, i.jsx)(ei.Z, {
                          children: (0, i.jsxs)('div', {
                              className: eu.emojiHotrailShareToChannel,
                              children: [
                                  (0, i.jsx)(ev, {
                                      channel: t,
                                      onClickSuggestion: ef
                                  }),
                                  (0, i.jsx)(g.dE, { onSelectEmoji: ef })
                              ]
                          })
                      }),
                (0, i.jsxs)('div', {
                    className: ec ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
                    children: [
                        (0, i.jsx)(g.A7, {
                            placeholder: es.intl.formatToPlainString(es.t['8lzR/f'], { channel: em }),
                            onEnter: ep,
                            setEditorRef: (e) => T(e),
                            channel: y ? t : void 0,
                            showEmojiButton: null != eC,
                            renderAttachButton: L
                                ? () =>
                                      (0, i.jsx)(h.Tooltip, {
                                          text: ex,
                                          children: (e) =>
                                              (0, i.jsx)(h.Clickable, {
                                                  ...e,
                                                  className: eu.shareToChannelButton,
                                                  onClick: () => j((e) => !e),
                                                  children: y
                                                      ? (0, i.jsx)(h.TextIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, i.jsx)(h.AtIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        en &&
                            (0, i.jsx)(h.Clickable, {
                                onClick: () => ed(!1),
                                className: eu.primaryActionPopoutMessageCloseIcon,
                                children: (0, i.jsx)(h.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === ec &&
                    (0, i.jsxs)('div', {
                        className: eu.primaryActionPopoutActionButtons,
                        children: [
                            (0, i.jsxs)(
                                h.Button,
                                {
                                    className: eu.secondaryButton,
                                    color: h.Button.Colors.CUSTOM,
                                    onClick: () => ed(!0),
                                    innerClassName: eu.iconButton,
                                    size: el ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                                    children: [
                                        (0, i.jsx)(h.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: eu.secondaryText
                                        }),
                                        !el &&
                                            (0, i.jsx)(h.Text, {
                                                variant: 'text-md/semibold',
                                                className: eu.secondaryText,
                                                children: es.intl.string(es.t.OAJQlJ)
                                            })
                                    ]
                                },
                                'toggleMessageMode'
                            ),
                            $
                        ]
                    })
            ]
        })
    );
}
let ev = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, r] = l.useState(!1);
    l.useEffect(() => {
        r(!0);
    }, []);
    let o = !!p.Z.keyboardModeEnabled && !a,
        s = (0, y.wC)(null == t ? void 0 : t.guild_id)
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
    return (0, i.jsx)(i.Fragment, {
        children: s.map((e) => {
            let { emoji: t, url: l } = e;
            return null != l
                ? (0, i.jsx)(
                      'div',
                      {
                          children: (0, i.jsx)(h.TooltipContainer, {
                              text: es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              color: h.Tooltip.Colors.PRIMARY,
                              shouldShow: !o && void 0,
                              children: (0, i.jsx)(b.u, {
                                  emoji: t,
                                  isDisabled: !a,
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
function ef(e) {
    let { channel: t, userDescription: n, entry: l, disableGameProfileLinks: a, onUserPopoutClosed: o } = e,
        s = null == t ? void 0 : t.guild_id,
        { displayParticipants: c, participant1: d, participant2: m, numOtherParticipants: x } = (0, $.Z)(l, 3),
        v = (0, u.e7)([V.default], () => V.default.getUser(l.author_id)),
        { streamPreviewUrl: f } = (0, ee.Z)(l),
        p = [d, m];
    return (0, i.jsxs)('div', {
        className: eu.popoutContentHeader,
        children: [
            (0, i.jsxs)('div', {
                className: eu.popoutUserContainer,
                children: [
                    (0, i.jsx)(j.Z, {
                        maxUsers: 3,
                        users: c,
                        size: h.AvatarSizes.SIZE_24,
                        avatarClassName: eu.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: o
                    }),
                    (0, i.jsx)(h.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, i.jsx)(h.Heading, {
                        variant: 'heading-sm/normal',
                        className: eu.popoutTextSecondary,
                        children: es.intl.format(n, {
                            user0: q.ZP.getName(s, null == t ? void 0 : t.id, p[0]),
                            user1: q.ZP.getName(s, null == t ? void 0 : t.id, p[1]),
                            countOthers: x,
                            countOthersHook: (e, t) =>
                                (0, i.jsx)(
                                    h.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, i.jsx)(
                                    X.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: p[0],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, i.jsx)(
                                    X.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: p[1],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            null != f && (0, i.jsx)(P.ZP, { size: P.ZP.Sizes.SMALL }),
            null != v &&
                (0, i.jsx)(el.Z, {
                    user: v,
                    channel: t,
                    guildId: s,
                    entry: l,
                    disableGameProfileLinks: a
                })
        ]
    });
}
function ep(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsx)(h.Clickable, {
              className: eu.maybeClickable,
              onClick: n,
              children: t
          });
}
function eg(e) {
    var t;
    let { title: n, subtitle: l, badges: a, children: o, onClickThumbnail: s, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: m = !1, onUserPopoutClosed: x, trackRankingItemInteraction: v, ...f } = e,
        { entry: p } = f,
        g = (0, J.dX)(p),
        C = (0, L.Z)(
            {
                location: 'ContentPopout',
                applicationId: g && !m ? (null === (t = p.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: T.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: p.author_id
            },
            { onOpened: () => (null == v ? void 0 : v(er.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: I, smallImage: P } = (0, Y.rv)({ entry: p }),
        Z = g ? C : void 0;
    return (0, i.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, i.jsx)(ef, {
                disableGameProfileLinks: m,
                ...f,
                onUserPopoutClosed: x
            }),
            (0, i.jsxs)(ed, {
                backgroundImgSrc: null == I ? void 0 : I.src,
                children: [
                    (0, i.jsxs)('div', {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, i.jsx)('div', {
                                className: eu.popoutThumbnailContainer,
                                children: (0, i.jsx)(K.E, {
                                    image: I,
                                    smallImage: P,
                                    onClick: null != s ? s : Z,
                                    size: K.J.SIZE_72
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, i.jsx)(ep, {
                                        onClick: null != u ? u : Z,
                                        children: (0, i.jsx)(h.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != l
                                        ? (0, i.jsx)(ep, {
                                              onClick: null != c ? c : Z,
                                              children: (0, i.jsx)(h.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eu.popoutHeroTextSecondary,
                                                  children: l
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)(h.Spacer, { size: 8 }),
                                    a
                                ]
                            }),
                            (0, i.jsx)('div', {
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
function eC(e) {
    var t;
    let { title: n, subtitle: a, badges: r, stream: o, onClickThumbnail: s, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: m, trackRankingItemInteraction: x, ...p } = e,
        g = (0, u.e7)([k.Z], () => k.Z.getChannel(null == o ? void 0 : o.channelId)),
        [C] = l.useMemo(() => (0, S.p9)(g, F.Z, H.Z, U.Z, w.Z), [g]),
        { entry: I } = p,
        P = (0, J.dX)(I),
        Z = (0, L.Z)(
            {
                location: 'ContentPopout',
                applicationId: P ? (null === (t = I.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: T.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id
            },
            { onOpened: () => (null == x ? void 0 : x(er.xP.OPENED_GAME_PROFILE)) }
        ),
        y = P ? Z : void 0,
        { activity: j, activityApplication: E, fallbackApplication: _ } = (0, et.qy)(I),
        { largeImage: A, smallImage: R } = (0, Y.YC)(j, null != E ? E : _);
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: eu.popoutContentWrapper,
              children: [
                  (0, i.jsx)(ef, {
                      ...p,
                      onUserPopoutClosed: m
                  }),
                  (0, i.jsxs)('div', {
                      className: eu.streamingPopoutHero,
                      children: [
                          (0, i.jsx)(ep, {
                              onClick: C
                                  ? () => {
                                        v.default.selectVoiceChannel(o.channelId), (0, f.iV)(o);
                                    }
                                  : void 0,
                              children: (0, i.jsxs)('div', {
                                  className: eu.streamingPopoutPreviewContainer,
                                  children: [
                                      (0, i.jsx)(N.Z, {
                                          className: eu.streamingPopoutImg,
                                          stream: o
                                      }),
                                      C &&
                                          (0, i.jsx)('div', {
                                              className: eu.streamCTA,
                                              children: (0, i.jsx)(h.Text, {
                                                  variant: 'text-md/normal',
                                                  children: es.intl.string(es.t['7Xq/nZ'])
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, i.jsxs)('div', {
                              className: eu.streamingPopoutHeader,
                              children: [
                                  null != A &&
                                      (0, i.jsx)('div', {
                                          className: eu.popoutThumbnailContainer,
                                          children: (0, i.jsx)(K.E, {
                                              image: A,
                                              smallImage: R,
                                              onClick: null != s ? s : y,
                                              size: K.J.SIZE_72
                                          })
                                      }),
                                  (0, i.jsxs)('div', {
                                      className: eu.streamingPopoutHeaderText,
                                      children: [
                                          (0, i.jsx)(ep, {
                                              onClick: null != c ? c : y,
                                              children: (0, i.jsx)(h.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: eu.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != a
                                              ? (0, i.jsx)(ep, {
                                                    onClick: null != d ? d : y,
                                                    children: (0, i.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: eu.popoutTextSecondary,
                                                        children: a
                                                    })
                                                })
                                              : null,
                                          (0, i.jsx)(h.Spacer, { size: 8 }),
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
    let { IconComponent: t, children: n, className: l, ...a } = e;
    return (0, i.jsxs)(h.Button, {
        ...a,
        className: r()(l, eu.primaryButton),
        innerClassName: null != t ? eu.iconButton : void 0,
        size: h.Button.Sizes.LARGE,
        children: [
            null != t
                ? (0, i.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, i.jsx)(h.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}
