n(411104);
var i = n(735250),
    a = n(470079),
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
    O = n(471253),
    v = n(565799),
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
    K = n(930282),
    X = n(818570),
    Q = n(942951),
    J = n(9423),
    q = n(789267),
    $ = n(262),
    ee = n(303135),
    et = n(673052),
    en = n(385063),
    ei = n(253118),
    ea = n(54817),
    es = n(502115),
    er = n(27103),
    el = n(396252),
    eo = n(522860),
    ec = n(600397),
    eu = n(582298),
    ed = n(73352),
    e_ = n(507962),
    eE = n(857640),
    eI = n(614972),
    em = n(701181),
    eT = n(29338),
    ef = n(461135),
    eh = n(296571),
    eN = n(587737),
    ep = n(482239),
    eC = n(328749),
    eg = n(4305),
    eS = n(910548),
    eA = n(981631),
    ex = n(70722),
    eR = n(689938),
    eO = n(437814);
function ev(e) {
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
                        section: eA.jXE.CHANNEL_TEXT_AREA,
                        object: eA.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [u]),
        _ = (0, Q.l)({
            user: l,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(eS.ZP, {
        message: t,
        compact: r,
        guild: u,
        usernameHook: _,
        onClickMessage: d
    });
}
function eM(e) {
    let { message: t, compact: n, channel: a } = e,
        s = (0, Q.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ea.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
let eL = Object.freeze({
    [eA.uaV.DEFAULT]: void 0,
    [eA.uaV.REPLY]: void 0,
    [eA.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eA.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eA.uaV.RECIPIENT_ADD]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            { author: r } = t,
            l = t.getChannelId(),
            o = (0, s.e7)([G.default], () => G.default.getUser(t.mentions[0]), [t]),
            c = V.ZP.getName(null, l, o),
            u = (0, Q.l)({
                user: r,
                channelId: l,
                guildId: n.guild_id,
                messageId: t.id
            }),
            d = (0, Q.l)({
                user: o,
                channelId: l,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread()
            ? (0, i.jsx)(eN.Z, {
                  message: t,
                  channel: n,
                  compact: a,
                  targetUser: o,
                  actorUsernameHook: u,
                  targetUsernameHook: d
              })
            : (0, i.jsx)(ed.Z, {
                  message: t,
                  compact: a,
                  otherUsername: c,
                  usernameHook: u,
                  otherUsernameHook: d
              });
    },
    [eA.uaV.RECIPIENT_REMOVE]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            { author: r } = t,
            l = t.getChannelId(),
            o = (0, s.e7)([G.default], () => G.default.getUser(t.mentions[0]), [t]),
            c = (0, Q.l)({
                user: r,
                channelId: l,
                guildId: n.guild_id,
                messageId: t.id
            }),
            u = (0, Q.l)({
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
                  actorUsernameHook: c,
                  targetUsernameHook: u
              })
            : null != o && o.id !== r.id
              ? (0, i.jsx)(e_.Z, {
                    message: t,
                    channel: n,
                    compact: a,
                    usernameHook: c,
                    otherUser: o,
                    otherUsernameHook: u
                })
              : (0, i.jsx)(e_.Z, {
                    message: t,
                    channel: n,
                    usernameHook: c
                });
    },
    [eA.uaV.CALL]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            { id: l, author: o } = t,
            u = P.default.getId(),
            d = t.getChannelId(),
            _ = (0, s.e7)([D.Z], () => D.Z.isCallActive(d, l), [d, l]),
            E = (0, s.e7)([F.Z], () => F.Z.getVoiceState(eA.ME, u)),
            I = !_ && null != t.call && !t.call.participants.includes(u),
            m = _ && (null == E || E.channelId !== d),
            T = a.useCallback(() => c.default.selectVoiceChannel(d), [d]),
            f = (0, Q.l)({
                user: o,
                channelId: d,
                guildId: r.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(q.Z, {
            compact: n,
            message: t,
            missed: I,
            joinable: m,
            usernameHook: f,
            onClickJoinCall: T
        });
    },
    [eA.uaV.CHANNEL_NAME_CHANGE]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, Q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(en.Z, {
            compact: n,
            message: t,
            usernameHook: l,
            isForumPost: a.isForumPost()
        });
    },
    [eA.uaV.CHANNEL_ICON_CHANGE]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, Q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ee.Z, {
            compact: n,
            message: t,
            usernameHook: l
        });
    },
    [eA.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
        let { message: t, compact: n, channel: s } = e,
            { author: r } = t,
            l = t.getChannelId(),
            o = a.useCallback(() => {
                if (k.Z.getChannelId() !== l) {
                    let e = j.Z.getChannel(l);
                    null != e && (0, R.XU)(e.guild_id, e.id);
                }
                setTimeout(() => w.S.dispatch(eA.CkL.TOGGLE_CHANNEL_PINS), 0);
            }, [l]),
            c = (0, Q.l)({
                user: r,
                channelId: l,
                guildId: s.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ei.Z, {
            message: t,
            compact: n,
            usernameHook: c,
            onClickPins: __OVERLAY__ ? null : o
        });
    },
    [eA.uaV.USER_JOIN]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, Q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eg.Z, {
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
    [eA.uaV.GUILD_BOOST]: ev,
    [eA.uaV.GUILD_BOOST_TIER_1]: ev,
    [eA.uaV.GUILD_BOOST_TIER_2]: ev,
    [eA.uaV.GUILD_BOOST_TIER_3]: ev,
    [eA.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            r = t.getChannelId(),
            l = (0, Q.l)({
                user: s,
                channelId: r,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)($.Z, {
            message: t,
            compact: n,
            usernameHook: l
        });
    },
    [eA.uaV.GUILD_STREAM]: function (e) {
        let { message: t, compact: n, channel: r } = e,
            {
                author: l,
                author: { id: o },
                messageReference: c
            } = t,
            d = t.getChannelId(),
            _ = (0, s.e7)([B.Z], () => B.Z.findActivity(o, (e) => e.type === eA.IIU.PLAYING), [o]),
            E = (0, s.e7)([j.Z], () => (null != c ? j.Z.getChannel(c.channel_id) : null), [c]),
            I = null == c ? void 0 : c.guild_id,
            m = (0, Q.l)({
                user: l,
                channelId: d,
                guildId: r.guild_id,
                messageId: t.id
            }),
            T = a.useCallback(() => {
                if (null != E && null != I)
                    (0, u.iV)({
                        streamType: ex.lo.GUILD,
                        ownerId: o,
                        channelId: E.id,
                        guildId: I
                    });
            }, [o, E, I]);
        return null != c && null != E && null != c.guild_id
            ? (0, i.jsx)(eo.Z, {
                  message: t,
                  compact: n,
                  channel: E,
                  playingActivity: _,
                  onJoinStream: T,
                  usernameHook: m
              })
            : null;
    },
    [eA.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
        let { message: t, compact: n } = e,
            a = t.getChannelId(),
            r = (0, s.e7)([j.Z], () => j.Z.getChannel(a), [a]),
            l = null != r ? r.getGuildId() : null;
        return (0, i.jsx)(es.FJ, {
            message: t,
            compact: n,
            onClick: () => {
                null != l && g.Z.open(l, eA.pNK.DISCOVERY);
            }
        });
    },
    [eA.uaV.GUILD_DISCOVERY_REQUALIFIED]: es.xe,
    [eA.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: es.HL,
    [eA.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: es.Yc,
    [eA.uaV.THREAD_CREATED]: function (e) {
        let { message: t, channel: s, compact: o } = e,
            c = (0, Q.l)({
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
        return (0, i.jsx)(eh.Z, {
            message: t,
            compact: o,
            usernameHook: c,
            onClickThread: u,
            onClickViewThreads: d,
            onContextMenuThread: _
        });
    },
    [eA.uaV.THREAD_STARTER_MESSAGE]: eC.Z,
    [eA.uaV.GUILD_INVITE_REMINDER]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            r = (0, s.e7)([G.default], () => G.default.getCurrentUser()),
            l = (0, s.e7)([U.Z], () => {
                var e, t;
                return null !== (t = null === (e = U.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(r)) && void 0 !== t && t;
            });
        return (0, i.jsx)(eu.Z, {
            message: t,
            compact: a,
            isOwner: l,
            channel: n
        });
    },
    [eA.uaV.AUTO_MODERATION_ACTION]: function (e) {
        let { message: t, compact: n, channel: a } = e;
        return (0, T.nY)(t)
            ? (0, i.jsx)(J.Z, {
                  message: t,
                  compact: n,
                  channel: a
              })
            : null;
    },
    [eA.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eM,
    [eA.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eM,
    [eA.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            s = (0, Q.l)({
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
    [eA.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(er.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [eA.uaV.ROLE_SUBSCRIPTION_PURCHASE]: N.Z,
    [eA.uaV.PURCHASE_NOTIFICATION]: function (e) {
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
    [eA.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eA.uaV.STAGE_START]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            r = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }),
            l = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(n.id), [n.id]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eT.Z, {
                    message: t,
                    compact: a,
                    usernameHook: r
                }),
                null != l && l.name === t.content ? (0, i.jsx)(C.Z, { code: ''.concat(n.guild_id, '-').concat(l.id) }) : null
            ]
        });
    },
    [eA.uaV.STAGE_END]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eE.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [eA.uaV.STAGE_SPEAKER]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(em.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [eA.uaV.STAGE_RAISE_HAND]: function (e) {
        var t, n;
        let { message: a, channel: l, compact: c } = e,
            u = (0, Q.l)({
                user: a.author,
                channelId: l.id,
                guildId: l.guild_id,
                messageId: a.id
            }),
            d = (0, s.e7)([y.Z], () => y.Z.can(eA.Plq.MUTE_MEMBERS, l)),
            _ = (0, s.e7)([v.Z], () => v.Z.getParticipant(l.id, a.author.id)),
            E = new Date(Y.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == _ ? void 0 : null === (t = _.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
            I = d && (null == _ ? void 0 : _.rtsState) === M.xO.REQUESTED_TO_SPEAK && E;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eI.Z, {
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
                              (0, O.DT)(l, a.author.id, !1), o.Z.deleteMessage(l.id, a.id, !0);
                          },
                          children: [
                              (0, i.jsx)(r.MicrophoneArrowRightIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  height: 20,
                                  width: 20
                              }),
                              eR.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                          ]
                      })
                    : null
            ]
        });
    },
    [eA.uaV.STAGE_TOPIC]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ef.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [eA.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: A.Z,
    [eA.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: x.P,
    [eA.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: x.e,
    [eA.uaV.PREMIUM_REFERRAL]: void 0,
    [eA.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(E.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [eA.uaV.CUSTOM_GIFT]: void 0,
    [eA.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(_.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [eA.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eA.uaV.POLL_RESULT]: S.Z,
    [eA.uaV.CHANGELOG]: void 0,
    [eA.uaV.NITRO_NOTIFICATION]: function (e) {
        let { message: t, channel: n } = e;
        return (0, i.jsx)(X.Z, {
            message: t,
            channel: n
        });
    },
    [eA.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(et.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [eA.uaV.GIFTING_PROMPT]: function (e) {
        let { message: t, channel: n } = e,
            a = t.giftingPrompt,
            r = (0, s.e7)([G.default], () => G.default.getUser(null == a ? void 0 : a.recipientUserId));
        return null == a || null == r
            ? null
            : (0, i.jsx)(z.Z, {
                  giftIntentType: a.giftIntentType,
                  recipientUser: r,
                  channel: n,
                  showSecondaryCta: a.showSecondaryCta
              });
    },
    [eA.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(ec.Z, {
            message: t,
            channel: n,
            author: t.author,
            compact: a
        });
    },
    [eA.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: I.Cn,
    [eA.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: I.Ue,
    [eA.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: I.R6
});
t.Z = a.memo(function (e) {
    let { message: t, channel: n, compact: a, disableInteraction: s } = e,
        { type: r } = t,
        l = eL[r];
    if (null == l) {
        var o;
        return (o = Error('unknown message type '.concat(t.type))), H.Z.captureException(o), new m.Z('SystemMessage').error('', o), null;
    }
    return (0, i.jsx)(K.ZP, {
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
