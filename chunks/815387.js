n(411104);
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(239091),
    o = n(904245),
    c = n(287734),
    u = n(872810),
    d = n(911969),
    _ = n(376484),
    E = n(362604),
    I = n(981772),
    m = n(710845),
    T = n(825829),
    f = n(623624),
    h = n(533694),
    N = n(182180),
    p = n(924301),
    C = n(225890),
    g = n(434404),
    S = n(507435),
    A = n(504733),
    x = n(563959),
    R = n(703656),
    v = n(471253),
    O = n(565799),
    M = n(590415),
    L = n(911560),
    Z = n(488131),
    b = n(814820),
    P = n(314897),
    D = n(523746),
    j = n(592125),
    U = n(430824),
    y = n(496675),
    B = n(158776),
    k = n(944486),
    G = n(594174),
    F = n(979651),
    w = n(585483),
    V = n(5192),
    H = n(960048),
    Y = n(709054),
    W = n(937889),
    z = n(15642),
    K = n(260736),
    X = n(930282),
    Q = n(990099),
    q = n(942951),
    J = n(9423),
    $ = n(789267),
    ee = n(262),
    et = n(303135),
    en = n(673052),
    ei = n(385063),
    ea = n(253118),
    es = n(54817),
    er = n(502115),
    el = n(27103),
    eo = n(396252),
    ec = n(522860),
    eu = n(600397),
    ed = n(582298),
    e_ = n(73352),
    eE = n(507962),
    eI = n(857640),
    em = n(614972),
    eT = n(701181),
    ef = n(29338),
    eh = n(461135),
    eN = n(296571),
    ep = n(587737),
    eC = n(482239),
    eg = n(328749),
    eS = n(4305),
    eA = n(910548),
    ex = n(981631),
    eR = n(70722),
    ev = n(689938),
    eO = n(437814);
function eM(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: l } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        u = (0, s.e7)([U.Z], () => U.Z.getGuild(o), [o]),
        d = a.useCallback(() => {
            if (null != u)
                (0, f.f)({
                    guildId: u.id,
                    location: {
                        section: ex.jXE.CHANNEL_TEXT_AREA,
                        object: ex.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        _ = (0, q.l)({
            user: l,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(eA.ZP, {
        message: t,
        compact: r,
        guild: u,
        usernameHook: _,
        onClickMessage: d
    });
}
function eL(e) {
    let { message: t, compact: n, channel: a } = e,
        s = (0, q.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(es.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
let eZ = Object.freeze({
    [ex.uaV.DEFAULT]: void 0,
    [ex.uaV.REPLY]: void 0,
    [ex.uaV.CHAT_INPUT_COMMAND]: void 0,
    [ex.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [ex.uaV.RECIPIENT_ADD]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            { author: r } = t,
            l = t.getChannelId(),
            o = (0, s.e7)([G.default], () => G.default.getUser(t.mentions[0]), [t]),
            c = V.ZP.getName(null, l, o),
            u = (0, q.l)({
                user: r,
                channelId: l,
                guildId: n.guild_id,
                messageId: t.id
            }),
            d = (0, q.l)({
                user: o,
                channelId: l,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread()
            ? (0, i.jsx)(ep.Z, {
                  message: t,
                  channel: n,
                  compact: a,
                  targetUser: o,
                  actorUsernameHook: u,
                  targetUsernameHook: d
              })
            : (0, i.jsx)(e_.Z, {
                  message: t,
                  compact: a,
                  otherUsername: c,
                  usernameHook: u,
                  otherUsernameHook: d
              });
    },
    [ex.uaV.RECIPIENT_REMOVE]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            { author: r } = t,
            l = t.getChannelId(),
            o = (0, s.e7)([G.default], () => G.default.getUser(t.mentions[0]), [t]),
            c = (0, q.l)({
                user: r,
                channelId: l,
                guildId: n.guild_id,
                messageId: t.id
            }),
            u = (0, q.l)({
                user: o,
                channelId: l,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread()
            ? (0, i.jsx)(eC.Z, {
                  message: t,
                  channel: n,
                  compact: a,
                  targetUser: o,
                  actorUsernameHook: c,
                  targetUsernameHook: u
              })
            : null != o && o.id !== r.id
              ? (0, i.jsx)(eE.Z, {
                    message: t,
                    channel: n,
                    compact: a,
                    usernameHook: c,
                    otherUser: o,
                    otherUsernameHook: u
                })
              : (0, i.jsx)(eE.Z, {
                    message: t,
                    channel: n,
                    usernameHook: c
                });
    },
    [ex.uaV.CALL]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            { id: l, author: o } = t,
            u = P.default.getId(),
            d = t.getChannelId(),
            _ = (0, s.e7)([D.Z], () => D.Z.isCallActive(d, l), [d, l]),
            E = (0, s.e7)([F.Z], () => F.Z.getVoiceState(ex.ME, u)),
            I = !_ && null != t.call && !t.call.participants.includes(u),
            m = _ && (null == E || E.channelId !== d),
            T = a.useCallback(() => c.default.selectVoiceChannel(d), [d]),
            f = (0, q.l)({
                user: o,
                channelId: d,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)($.Z, {
            compact: n,
            message: t,
            missed: I,
            joinable: m,
            usernameHook: f,
            onClickJoinCall: T
        });
    },
    [ex.uaV.CHANNEL_NAME_CHANGE]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ei.Z, {
            compact: n,
            message: t,
            usernameHook: l,
            isForumPost: a.isForumPost()
        });
    },
    [ex.uaV.CHANNEL_ICON_CHANGE]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(et.Z, {
            compact: n,
            message: t,
            usernameHook: l
        });
    },
    [ex.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
        let { message: t, compact: n, channel: s } = e,
            { author: r } = t,
            l = t.getChannelId(),
            o = a.useCallback(() => {
                if (k.Z.getChannelId() !== l) {
                    let e = j.Z.getChannel(l);
                    null != e && (0, R.XU)(e.guild_id, e.id);
                }
                setTimeout(() => w.S.dispatch(ex.CkL.TOGGLE_CHANNEL_PINS), 0);
            }, [l]),
            c = (0, q.l)({
                user: r,
                channelId: l,
                guildId: s.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ea.Z, {
            message: t,
            compact: n,
            usernameHook: c,
            onClickPins: __OVERLAY__ ? null : o
        });
    },
    [ex.uaV.USER_JOIN]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eS.Z, {
                    message: t,
                    guildId: a.guild_id,
                    compact: n,
                    usernameHook: l
                }),
                (0, i.jsx)(b.f, {
                    channel: a,
                    message: t
                })
            ]
        });
    },
    [ex.uaV.GUILD_BOOST]: eM,
    [ex.uaV.GUILD_BOOST_TIER_1]: eM,
    [ex.uaV.GUILD_BOOST_TIER_2]: eM,
    [ex.uaV.GUILD_BOOST_TIER_3]: eM,
    [ex.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ee.Z, {
            message: t,
            compact: n,
            usernameHook: l
        });
    },
    [ex.uaV.GUILD_STREAM]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            {
                author: l,
                author: { id: o },
                messageReference: c
            } = t,
            d = t.getChannelId(),
            _ = (0, s.e7)([B.Z], () => B.Z.findActivity(o, (e) => e.type === ex.IIU.PLAYING), [o]),
            E = (0, s.e7)([j.Z], () => (null != c ? j.Z.getChannel(c.channel_id) : null), [c]),
            I = null == c ? void 0 : c.guild_id,
            m = (0, q.l)({
                user: l,
                channelId: d,
                guildId: r.guild_id,
                messageId: t.id
            }),
            T = a.useCallback(() => {
                if (null != E && null != I)
                    (0, u.iV)({
                        streamType: eR.lo.GUILD,
                        ownerId: o,
                        channelId: E.id,
                        guildId: I
                    });
            }, [o, E, I]);
        return null != c && null != E && null != c.guild_id
            ? (0, i.jsx)(ec.Z, {
                  message: t,
                  compact: n,
                  channel: E,
                  playingActivity: _,
                  onJoinStream: T,
                  usernameHook: m
              })
            : null;
    },
    [ex.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
        let { message: t, compact: n } = e,
            a = t.getChannelId(),
            r = (0, s.e7)([j.Z], () => j.Z.getChannel(a), [a]),
            l = null != r ? r.getGuildId() : null;
        return (0, i.jsx)(er.FJ, {
            message: t,
            compact: n,
            onClick: () => {
                null != l && g.Z.open(l, ex.pNK.DISCOVERY);
            }
        });
    },
    [ex.uaV.GUILD_DISCOVERY_REQUALIFIED]: er.xe,
    [ex.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: er.HL,
    [ex.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: er.Yc,
    [ex.uaV.THREAD_CREATED]: function (e) {
        let { message: t, channel: s, compact: o } = e,
            c = (0, q.l)({
                user: t.author,
                channelId: t.channel_id,
                guildId: s.guild_id,
                messageId: t.id
            }),
            u = a.useCallback(
                async (e) => {
                    var n;
                    let i = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                    if (null != i) {
                        await L.Z.loadThread(i);
                        let t = j.Z.getChannel(i);
                        null != t && (0, Z.ok)(t, e.shiftKey);
                    }
                },
                [t]
            ),
            d = a.useCallback(() => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('91315'), n.e('67471')]).then(n.bind(n, 223901));
                    return (t) =>
                        (0, i.jsx)(e, {
                            channel: s,
                            ...t
                        });
                });
            }, [s]),
            _ = a.useCallback(
                (e) => {
                    var a;
                    let s = j.Z.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
                    null != s &&
                        (0, l.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('13154')]).then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: s
                                });
                        });
                },
                [t]
            );
        return (0, i.jsx)(eN.Z, {
            message: t,
            compact: o,
            usernameHook: c,
            onClickThread: u,
            onClickViewThreads: d,
            onContextMenuThread: _
        });
    },
    [ex.uaV.THREAD_STARTER_MESSAGE]: eg.Z,
    [ex.uaV.GUILD_INVITE_REMINDER]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            r = (0, s.e7)([G.default], () => G.default.getCurrentUser()),
            l = (0, s.e7)([U.Z], () => {
                var e, t;
                return null !== (t = null === (e = U.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(r)) && void 0 !== t && t;
            });
        return (0, i.jsx)(ed.Z, {
            message: t,
            compact: a,
            isOwner: l,
            channel: n
        });
    },
    [ex.uaV.AUTO_MODERATION_ACTION]: function (e) {
        let { message: t, compact: n, channel: a } = e;
        return (0, T.nY)(t)
            ? (0, i.jsx)(J.Z, {
                  message: t,
                  compact: n,
                  channel: a
              })
            : null;
    },
    [ex.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eL,
    [ex.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eL,
    [ex.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            s = (0, q.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eo.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [ex.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            s = (0, q.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(el.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [ex.uaV.ROLE_SUBSCRIPTION_PURCHASE]: N.Z,
    [ex.uaV.PURCHASE_NOTIFICATION]: function (e) {
        var t;
        let { message: n, channel: a, compact: s } = e;
        return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
            ? (0, i.jsx)(h.Z, {
                  message: n,
                  channel: a,
                  compact: s
              })
            : null;
    },
    [ex.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [ex.uaV.STAGE_START]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            r = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }),
            l = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(n.id), [n.id]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ef.Z, {
                    message: t,
                    compact: a,
                    usernameHook: r
                }),
                null != l && l.name === t.content ? (0, i.jsx)(C.Z, { code: ''.concat(n.guild_id, '-').concat(l.id) }) : null
            ]
        });
    },
    [ex.uaV.STAGE_END]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eI.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ex.uaV.STAGE_SPEAKER]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eT.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ex.uaV.STAGE_RAISE_HAND]: function (e) {
        var t, n;
        let { message: a, channel: l, compact: c } = e,
            u = (0, q.l)({
                user: a.author,
                channelId: l.id,
                guildId: l.guild_id,
                messageId: a.id
            }),
            d = (0, s.e7)([y.Z], () => y.Z.can(ex.Plq.MUTE_MEMBERS, l)),
            _ = (0, s.e7)([O.Z], () => O.Z.getParticipant(l.id, a.author.id)),
            E = new Date(Y.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == _ ? void 0 : null === (t = _.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
            I = d && (null == _ ? void 0 : _.rtsState) === M.xO.REQUESTED_TO_SPEAK && E;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(em.Z, {
                    message: a,
                    compact: c,
                    usernameHook: u
                }),
                I
                    ? (0, i.jsxs)(r.Button, {
                          wrapperClassName: eO.inviteToSpeakButtonWrapper,
                          innerClassName: eO.inviteToSpeakButtonInner,
                          look: r.Button.Looks.FILLED,
                          color: r.Button.Colors.PRIMARY,
                          onClick: () => {
                              (0, v.DT)(l, a.author.id, !1), o.Z.deleteMessage(l.id, a.id, !0);
                          },
                          children: [
                              (0, i.jsx)(r.MicrophoneArrowRightIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  height: 20,
                                  width: 20
                              }),
                              ev.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                          ]
                      })
                    : null
            ]
        });
    },
    [ex.uaV.STAGE_TOPIC]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eh.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ex.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: A.Z,
    [ex.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: x.P,
    [ex.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: x.e,
    [ex.uaV.PREMIUM_REFERRAL]: void 0,
    [ex.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(E.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [ex.uaV.CUSTOM_GIFT]: void 0,
    [ex.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(_.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [ex.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [ex.uaV.POLL_RESULT]: S.Z,
    [ex.uaV.CHANGELOG]: void 0,
    [ex.uaV.NITRO_NOTIFICATION]: function (e) {
        let { message: t, channel: n } = e;
        return (0, i.jsx)(Q.Z, {
            message: t,
            channel: n
        });
    },
    [ex.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(en.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [ex.uaV.GIFTING_PROMPT]: function (e) {
        let { message: t, channel: n } = e,
            a = t.giftingPrompt,
            r = (0, s.e7)([G.default], () => G.default.getUser(null == a ? void 0 : a.recipientUserId));
        return null == a || null == r
            ? null
            : (0, i.jsx)(z.Z, {
                  giftIntentType: a.giftIntentType,
                  recipientUser: r,
                  channel: n,
                  giftIntentSecondaryAction: a.giftIntentSecondaryAction
              });
    },
    [ex.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(eu.Z, {
            message: t,
            channel: n,
            author: t.author,
            compact: a
        });
    },
    [ex.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: I.Cn,
    [ex.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: I.Ue,
    [ex.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: I.R6,
    [ex.uaV.HD_STREAMING_UPGRADED]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(K.Z, {
            message: t,
            channel: n,
            compact: a
        });
    }
});
t.Z = a.memo(function (e) {
    let { message: t, channel: n, compact: a, disableInteraction: s } = e,
        { type: r } = t,
        l = eZ[r];
    if (null == l) {
        var o;
        return (o = Error('unknown message type '.concat(t.type))), H.Z.captureException(o), new m.Z('SystemMessage').error('', o), null;
    }
    return (0, i.jsx)(X.ZP, {
        message: t,
        content: (0, W.ZP)(t).content,
        children: (0, i.jsx)(l, {
            message: t,
            channel: n,
            compact: a,
            disableInteraction: s
        })
    });
});
