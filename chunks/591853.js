n.d(t, {
    Ll: function () {
        return eI;
    },
    St: function () {
        return eh;
    },
    WT: function () {
        return ex;
    },
    jL: function () {
        return ef;
    },
    wG: function () {
        return eg;
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
    o = n(512722),
    s = n.n(o);
n(995295);
var u = n(442837),
    c = n(704215),
    d = n(692547),
    m = n(481060),
    h = n(493683),
    x = n(475179),
    C = n(287734),
    p = n(872810),
    v = n(607070),
    g = n(220779),
    f = n(201133),
    I = n(557135),
    j = n(194082),
    Z = n(605236),
    P = n(543241),
    L = n(318374),
    T = n(258609),
    y = n(810568),
    N = n(168524),
    _ = n(102172),
    A = n(871118),
    E = n(565138),
    S = n(66999),
    R = n(790642),
    M = n(359110),
    k = n(12168),
    w = n(237583),
    O = n(131704),
    b = n(592125),
    H = n(430824),
    V = n(496675),
    B = n(699516),
    D = n(9156),
    U = n(594174),
    z = n(979651),
    G = n(938475),
    Y = n(626135),
    W = n(768581),
    q = n(5192),
    F = n(379357),
    J = n(26033),
    X = n(91907),
    K = n(358696),
    $ = n(656709),
    Q = n(192918),
    ee = n(22211),
    et = n(561308),
    en = n(206295),
    el = n(111386),
    ea = n(896449),
    ei = n(469153),
    er = n(206583),
    eo = n(981631),
    es = n(388032),
    eu = n(738127);
function ec(e) {
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
function ed(e) {
    let { children: t, backgroundImgSrc: n, className: a, style: i = {} } = e,
        { primaryColor: o, secondaryColor: s } = (0, en.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(o, ', ').concat(s, ')')),
        (0, l.jsx)(m.ThemeProvider, {
            theme: eo.BRd.DARK,
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
let em = a.createContext(null);
function eh(e) {
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
                children: (0, l.jsx)(em.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function ex(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: o, entry: C, buttons: p = [], header: v, onVoiceChannelPreview: j } = e,
        [P, L] = a.useState(!1),
        [T, y] = a.useState(null),
        N = (0, u.e7)([V.Z], () => null != t && eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && V.Z.can(eo.Plq.SEND_MESSAGES, t)),
        [_, A] = a.useState(!1),
        [k, W] = a.useState(!1),
        { voiceBar: F, joinVoiceButton: J } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: o } = (0, ee.Z)(n),
                { needSubscriptionToAccess: s } = (0, S.Z)(null == t ? void 0 : t.id),
                c = (0, u.e7)([H.Z], () => (null != o ? H.Z.getGuild(o.guild_id) : void 0)),
                h = (0, u.Wu)([G.ZP], () => (null != o ? G.ZP.getVoiceStatesForChannel(o) : []), [o]),
                C = (0, u.e7)([z.Z], () => z.Z.isInChannel(null == o ? void 0 : o.id)),
                p = a.useMemo(() => {
                    for (let e of h) {
                        let t = b.Z.getDMFromUserId(e.user.id),
                            n = null != t && D.ZP.isChannelMuted(null, t),
                            l = B.Z.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [h]);
            if (null == o || null == c)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let v = null != r,
                g = () => {
                    x.Z.updateChatOpen(o.id, !0), (0, M.Kh)(o.id), null == i || i(o);
                },
                f = () => {
                    I.Z.handleVoiceConnect({
                        channel: o,
                        connected: C,
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
                                      es.intl.string(es.t.d6DpXF)
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        m.Tooltip,
                        {
                            'aria-label': a ? es.intl.string(es.t.d6DpXF) : null != n && n,
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
                                    text: es.intl.string(es.t.WIVYqK),
                                    hasRestrictedOrMutedVCParticipant: p,
                                    children: (e) =>
                                        (0, l.jsxs)(m.Clickable, {
                                            ...e,
                                            'aria-label': es.intl.string(es.t.WIVYqK),
                                            onClick: g,
                                            className: eu.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(E.Z, {
                                                    guild: c,
                                                    size: E.Z.Sizes.SMOL,
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
                                (0, l.jsx)(w.Z, {
                                    guildId: c.id,
                                    users: h,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(m.Avatar, {
                                            src: e.user.getAvatarURL(c.id, 16),
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
                joinVoiceButton: C
                    ? null
                    : (0, l.jsx)(j, {
                          hasRestrictedOrMutedVCParticipant: p,
                          children: (e) =>
                              (0, l.jsx)(eI, {
                                  ...e,
                                  color: m.Button.Colors.GREEN,
                                  onClick: f,
                                  IconComponent: v ? m.ScreenIcon : m.VoiceNormalIcon,
                                  children: v ? es.intl.string(es.t['I6JG4+']) : es.intl.string(es.t.VJlc0d)
                              })
                      })
            };
        })({
            channel: t,
            entry: C,
            onVoiceChannelPreview: j
        }),
        { embeddedActivity: X } = (0, et.qy)(C),
        K = (function (e) {
            let t = (0, u.e7)([H.Z], () => H.Z.getGuild(null == e ? void 0 : e.guildId)),
                n = (0, u.e7)([b.Z], () => b.Z.getChannel(null == e ? void 0 : e.channelId)),
                a = (0, u.Wu)([U.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => U.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && O.sR.has(n.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: eu.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, l.jsxs)(m.Clickable, {
                                      'aria-label': es.intl.string(es.t['W/A4Qk']),
                                      onClick: () => (0, M.Kh)(n.id),
                                      className: eu.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, l.jsx)(E.Z, {
                                              guild: t,
                                              size: E.Z.Sizes.SMOL,
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
                                  (0, l.jsx)(w.Z, {
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
        })(X),
        Q = null != J && 0 === p.length ? [J] : p,
        en = Q.length > 0,
        ea = Q.length >= 2,
        [ec, ed] = a.useState(!en),
        em = q.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        eh = null != t && P ? es.intl.formatToPlainString(es.t['8lzR/f'], { channel: '#'.concat(t.name) }) : es.intl.formatToPlainString(es.t['4c+CAw'], { channel: '@'.concat(em) }),
        ex = P ? es.intl.string(es.t.Z2CUgo) : es.intl.string(es.t.XLGiTE),
        ep = async (e) => {
            let l;
            if (null != e) {
                if (
                    (Y.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: er.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, Z.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    A(!0),
                    W(!1),
                    P)
                )
                    s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await h.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = b.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    s()(null != l, 'Send channel must be defined'),
                    eg({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            W(!0),
                                setTimeout(() => {
                                    A(!1), o(e, t);
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
            if (((0, Z.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), P)) s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await h.Z.openPrivateChannel(n.id, !1, !1),
                    t = b.Z.getChannel(e);
                s()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === eo.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eg({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: o,
                requiresChannelReadiness: !0
            });
        },
        eg = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a, requiresChannelReadiness: o } = e;
            if ((null == T || T.focus(), (0, R.Io)('ContentPopout Reactor')))
                await (0, $.p)({
                    channel: n,
                    content: t,
                    entry: C,
                    whenReady: o
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
                s()(null != e, 'Reaction image must be defined'),
                    await (0, f.B)({
                        file: e,
                        channel: n,
                        altText: r,
                        reply: t
                    });
            }
            null == l || l(a, n);
        },
        ef = null != v ? v : null != F ? F : null != K ? K : void 0;
    return (
        a.useEffect(() => {
            ec && (null == T || T.focus());
        }, [T, P, ec]),
        (0, l.jsxs)('div', {
            style: { pointerEvents: _ ? 'none' : 'all' },
            children: [
                (0, l.jsx)(ei.Z, {
                    sent: k,
                    shown: _,
                    className: eu.toastContainer
                }),
                null != ef
                    ? ef
                    : (0, l.jsx)(el.Z, {
                          children: (0, l.jsxs)('div', {
                              className: eu.emojiHotrailShareToChannel,
                              children: [
                                  (0, l.jsx)(eC, {
                                      channel: t,
                                      onClickSuggestion: ep
                                  }),
                                  (0, l.jsx)(g.dE, { onSelectEmoji: ep })
                              ]
                          })
                      }),
                (0, l.jsxs)('div', {
                    className: ec ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
                    children: [
                        (0, l.jsx)(g.A7, {
                            placeholder: eh,
                            onEnter: ev,
                            setEditorRef: (e) => y(e),
                            channel: P ? t : void 0,
                            showEmojiButton: null != ef,
                            renderAttachButton: N
                                ? () =>
                                      (0, l.jsx)(m.Tooltip, {
                                          text: ex,
                                          children: (e) =>
                                              (0, l.jsx)(m.Clickable, {
                                                  ...e,
                                                  className: eu.shareToChannelButton,
                                                  onClick: () => L((e) => !e),
                                                  children: P
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
                                      })
                                : void 0
                        }),
                        en &&
                            (0, l.jsx)(m.Clickable, {
                                onClick: () => ed(!1),
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
                !1 === ec &&
                    (0, l.jsxs)('div', {
                        className: eu.primaryActionPopoutActionButtons,
                        children: [
                            (0, l.jsxs)(
                                m.Button,
                                {
                                    className: eu.secondaryButton,
                                    color: m.Button.Colors.CUSTOM,
                                    onClick: () => ed(!0),
                                    innerClassName: eu.iconButton,
                                    size: ea ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                                    children: [
                                        (0, l.jsx)(m.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: eu.secondaryText
                                        }),
                                        !ea &&
                                            (0, l.jsx)(m.Text, {
                                                variant: 'text-md/semibold',
                                                className: eu.secondaryText,
                                                children: es.intl.string(es.t.OAJQlJ)
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
let eC = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let o = !!v.Z.keyboardModeEnabled && !i,
        s = (0, P.wC)(null == t ? void 0 : t.guild_id)
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
    return (0, l.jsx)(l.Fragment, {
        children: s.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
                ? (0, l.jsx)(
                      'div',
                      {
                          children: (0, l.jsx)(m.TooltipContainer, {
                              text: es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              color: m.Tooltip.Colors.PRIMARY,
                              shouldShow: !o && void 0,
                              children: (0, l.jsx)(k.u, {
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
function ep(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: o } = e,
        s = null == t ? void 0 : t.guild_id,
        { displayParticipants: c, participant1: d, participant2: h, numOtherParticipants: x } = (0, Q.Z)(a, 3),
        C = (0, u.e7)([U.default], () => U.default.getUser(a.author_id)),
        { streamPreviewUrl: p } = (0, ee.Z)(a),
        v = [d, h];
    return (0, l.jsxs)('div', {
        className: eu.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: eu.popoutUserContainer,
                children: [
                    (0, l.jsx)(L.Z, {
                        maxUsers: 3,
                        users: c,
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
                        children: es.intl.format(n, {
                            user0: q.ZP.getName(s, null == t ? void 0 : t.id, v[0]),
                            user1: q.ZP.getName(s, null == t ? void 0 : t.id, v[1]),
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
                                    X.Z,
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
                                    X.Z,
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
            null != p && (0, l.jsx)(j.ZP, { size: j.ZP.Sizes.SMALL }),
            null != C &&
                (0, l.jsx)(ea.Z, {
                    user: C,
                    channel: t,
                    guildId: s,
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
        : (0, l.jsx)(m.Clickable, {
              className: eu.maybeClickable,
              onClick: n,
              children: t
          });
}
function eg(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: o, onClickThumbnail: s, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: h = !1, showCoverImage: x = !0, onUserPopoutClosed: C, trackRankingItemInteraction: p, ...v } = e,
        { entry: g } = v,
        f = (0, J.dX)(g),
        I = (0, N.Z)(
            {
                location: 'ContentPopout',
                applicationId: f && !h ? (null === (t = g.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: g.author_id
            },
            { onOpened: () => (null == p ? void 0 : p(er.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: j, smallImage: Z } = (0, F.rv)({
            entry: g,
            showCoverImage: x
        }),
        P = f ? I : void 0;
    return (0, l.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, l.jsx)(ep, {
                disableGameProfileLinks: h,
                ...v,
                onUserPopoutClosed: C
            }),
            (0, l.jsxs)(ed, {
                backgroundImgSrc: null == j ? void 0 : j.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: eu.popoutThumbnailContainer,
                                children: (0, l.jsx)(K.E, {
                                    image: j,
                                    smallImage: Z,
                                    onClick: null != s ? s : P,
                                    size: K.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(ev, {
                                        onClick: null != u ? u : P,
                                        children: (0, l.jsx)(m.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(ev, {
                                              onClick: null != c ? c : P,
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
function ef(e) {
    var t;
    let { title: n, subtitle: i, badges: r, stream: o, onClickThumbnail: s, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: h, trackRankingItemInteraction: x, ...v } = e,
        g = (0, u.e7)([b.Z], () => b.Z.getChannel(null == o ? void 0 : o.channelId)),
        [f] = a.useMemo(() => (0, _.p9)(g, z.Z, H.Z, V.Z, T.Z), [g]),
        { entry: I } = v,
        j = (0, J.dX)(I),
        Z = (0, N.Z)(
            {
                location: 'ContentPopout',
                applicationId: j ? (null === (t = I.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id
            },
            { onOpened: () => (null == x ? void 0 : x(er.xP.OPENED_GAME_PROFILE)) }
        ),
        P = j ? Z : void 0,
        { activity: L, activityApplication: E, fallbackApplication: S } = (0, et.qy)(I),
        { largeImage: R, smallImage: M } = (0, F.YC)(L, null != E ? E : S);
    return null == o
        ? null
        : (0, l.jsxs)('div', {
              className: eu.popoutContentWrapper,
              children: [
                  (0, l.jsx)(ep, {
                      ...v,
                      onUserPopoutClosed: h
                  }),
                  (0, l.jsxs)('div', {
                      className: eu.streamingPopoutHero,
                      children: [
                          (0, l.jsx)(ev, {
                              onClick: f
                                  ? () => {
                                        C.default.selectVoiceChannel(o.channelId), (0, p.iV)(o);
                                    }
                                  : void 0,
                              children: (0, l.jsxs)('div', {
                                  className: eu.streamingPopoutPreviewContainer,
                                  children: [
                                      (0, l.jsx)(A.Z, {
                                          className: eu.streamingPopoutImg,
                                          stream: o
                                      }),
                                      f &&
                                          (0, l.jsx)('div', {
                                              className: eu.streamCTA,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-md/normal',
                                                  children: es.intl.string(es.t['7Xq/nZ'])
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
                                          children: (0, l.jsx)(K.E, {
                                              image: R,
                                              smallImage: M,
                                              onClick: null != s ? s : P,
                                              size: K.J.SIZE_72
                                          })
                                      }),
                                  (0, l.jsxs)('div', {
                                      className: eu.streamingPopoutHeaderText,
                                      children: [
                                          (0, l.jsx)(ev, {
                                              onClick: null != c ? c : P,
                                              children: (0, l.jsx)(m.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: eu.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, l.jsx)(ev, {
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
function eI(e) {
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
