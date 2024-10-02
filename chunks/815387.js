var r = n(411104);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(239091),
    u = n(904245),
    c = n(287734),
    d = n(872810),
    _ = n(911969),
    E = n(376484),
    f = n(362604),
    h = n(981772),
    p = n(710845),
    m = n(825829),
    I = n(623624),
    T = n(533694),
    g = n(182180),
    S = n(924301),
    A = n(225890),
    v = n(434404),
    N = n(507435),
    O = n(504733),
    R = n(563959),
    C = n(703656),
    y = n(471253),
    L = n(565799),
    b = n(590415),
    D = n(911560),
    M = n(488131),
    P = n(814820),
    U = n(314897),
    w = n(523746),
    x = n(592125),
    G = n(430824),
    k = n(496675),
    B = n(158776),
    F = n(944486),
    Z = n(594174),
    V = n(979651),
    H = n(585483),
    Y = n(5192),
    j = n(960048),
    W = n(709054),
    K = n(937889),
    z = n(15642),
    q = n(930282),
    Q = n(818570),
    X = n(942951),
    $ = n(9423),
    J = n(789267),
    ee = n(262),
    et = n(303135),
    en = n(673052),
    er = n(385063),
    ei = n(253118),
    ea = n(54817),
    eo = n(502115),
    es = n(27103),
    el = n(396252),
    eu = n(522860),
    ec = n(600397),
    ed = n(582298),
    e_ = n(73352),
    eE = n(507962),
    ef = n(857640),
    eh = n(614972),
    ep = n(701181),
    em = n(29338),
    eI = n(461135),
    eT = n(296571),
    eg = n(587737),
    eS = n(482239),
    eA = n(328749),
    ev = n(4305),
    eN = n(910548),
    eO = n(981631),
    eR = n(70722),
    eC = n(689938),
    ey = n(437814);
function eL(e) {
    j.Z.captureException(e), new p.Z('SystemMessage').error('', e);
}
function eb(e) {
    let { message: t, compact: n, channel: r } = e,
        { id: s, author: l } = t,
        u = U.default.getId(),
        d = t.getChannelId(),
        _ = (0, o.e7)([w.Z], () => w.Z.isCallActive(d, s), [d, s]),
        E = (0, o.e7)([V.Z], () => V.Z.getVoiceState(eO.ME, u)),
        f = !_ && null != t.call && !t.call.participants.includes(u),
        h = _ && (null == E || E.channelId !== d),
        p = a.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        m = (0, X.l)({
            user: l,
            channelId: d,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(J.Z, {
        compact: n,
        message: t,
        missed: f,
        joinable: h,
        usernameHook: m,
        onClickJoinCall: p
    });
}
function eD(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, X.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(er.Z, {
        compact: n,
        message: t,
        usernameHook: s,
        isForumPost: r.isForumPost()
    });
}
function eM(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, X.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(et.Z, {
        compact: n,
        message: t,
        usernameHook: s
    });
}
function eP(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = a.useCallback(() => {
            if (F.Z.getChannelId() !== s) {
                let e = x.Z.getChannel(s);
                null != e && (0, C.XU)(e.guild_id, e.id);
            }
            setTimeout(() => H.S.dispatch(eO.CkL.TOGGLE_CHANNEL_PINS), 0);
        }, [s]),
        u = (0, X.l)({
            user: o,
            channelId: s,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ei.Z, {
        message: t,
        compact: n,
        usernameHook: u,
        onClickPins: __OVERLAY__ ? null : l
    });
}
function eU(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: a } = t,
        s = t.getChannelId(),
        l = (0, o.e7)([Z.default], () => Z.default.getUser(t.mentions[0]), [t]),
        u = Y.ZP.getName(null, s, l),
        c = (0, X.l)({
            user: a,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        d = (0, X.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        });
    return n.isThread()
        ? (0, i.jsx)(eg.Z, {
              message: t,
              channel: n,
              compact: r,
              targetUser: l,
              actorUsernameHook: c,
              targetUsernameHook: d
          })
        : (0, i.jsx)(e_.Z, {
              message: t,
              compact: r,
              otherUsername: u,
              usernameHook: c,
              otherUsernameHook: d
          });
}
function ew(e) {
    let { message: t, channel: r, compact: o } = e,
        u = (0, X.l)({
            user: t.author,
            channelId: t.channel_id,
            guildId: r.guild_id,
            messageId: t.id
        }),
        c = a.useCallback(
            async (e) => {
                var n;
                let r = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                if (null != r) {
                    await D.Z.loadThread(r);
                    let t = x.Z.getChannel(r);
                    null != t && (0, M.ok)(t, e.shiftKey);
                }
            },
            [t]
        ),
        d = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('91315'), n.e('67471')]).then(n.bind(n, 223901));
                return (t) =>
                    (0, i.jsx)(e, {
                        channel: r,
                        ...t
                    });
            });
        }, [r]),
        _ = a.useCallback(
            (e) => {
                var r;
                let a = x.Z.getChannel(null === (r = t.messageReference) || void 0 === r ? void 0 : r.channel_id);
                null != a &&
                    (0, l.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('39285'), n.e('40157')]).then(n.bind(n, 422200));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: a
                            });
                    });
            },
            [t]
        );
    return (0, i.jsx)(eT.Z, {
        message: t,
        compact: o,
        usernameHook: u,
        onClickThread: c,
        onClickViewThreads: d,
        onContextMenuThread: _
    });
}
function ex(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: a } = t,
        s = t.getChannelId(),
        l = (0, o.e7)([Z.default], () => Z.default.getUser(t.mentions[0]), [t]),
        u = (0, X.l)({
            user: a,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        c = (0, X.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        });
    return n.isThread()
        ? (0, i.jsx)(eS.Z, {
              message: t,
              channel: n,
              compact: r,
              targetUser: l,
              actorUsernameHook: u,
              targetUsernameHook: c
          })
        : null != l && l.id !== a.id
          ? (0, i.jsx)(eE.Z, {
                message: t,
                channel: n,
                compact: r,
                usernameHook: u,
                otherUser: l,
                otherUsernameHook: c
            })
          : (0, i.jsx)(eE.Z, {
                message: t,
                channel: n,
                usernameHook: u
            });
}
function eG(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, X.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ev.Z, {
                message: t,
                guildId: r.guild_id,
                compact: n,
                usernameHook: s
            }),
            (0, i.jsx)(P.f, {
                channel: r,
                message: t
            })
        ]
    });
}
function ek(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s } = t,
        { guild_id: l } = n,
        u = t.getChannelId(),
        c = (0, o.e7)([G.Z], () => G.Z.getGuild(l), [l]),
        d = a.useCallback(() => {
            if (null != c)
                (0, I.f)({
                    guildId: c.id,
                    location: {
                        section: eO.jXE.CHANNEL_TEXT_AREA,
                        object: eO.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [c]),
        _ = (0, X.l)({
            user: s,
            channelId: u,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(eN.ZP, {
        message: t,
        compact: r,
        guild: c,
        usernameHook: _,
        onClickMessage: d
    });
}
function eB(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, X.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ee.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
function eF(e) {
    let { message: t, compact: n, channel: r } = e,
        {
            author: s,
            author: { id: l },
            messageReference: u
        } = t,
        c = t.getChannelId(),
        _ = (0, o.e7)([B.Z], () => B.Z.findActivity(l, (e) => e.type === eO.IIU.PLAYING), [l]),
        E = (0, o.e7)([x.Z], () => (null != u ? x.Z.getChannel(u.channel_id) : null), [u]),
        f = null == u ? void 0 : u.guild_id,
        h = (0, X.l)({
            user: s,
            channelId: c,
            guildId: r.guild_id,
            messageId: t.id
        }),
        p = a.useCallback(() => {
            if (null != E && null != f)
                (0, d.iV)({
                    streamType: eR.lo.GUILD,
                    ownerId: l,
                    channelId: E.id,
                    guildId: f
                });
        }, [l, E, f]);
    return null != u && null != E && null != u.guild_id
        ? (0, i.jsx)(eu.Z, {
              message: t,
              compact: n,
              channel: E,
              playingActivity: _,
              onJoinStream: p,
              usernameHook: h
          })
        : null;
}
function eZ(e) {
    let { message: t, compact: n } = e,
        r = t.getChannelId(),
        a = (0, o.e7)([x.Z], () => x.Z.getChannel(r), [r]),
        s = null != a ? a.getGuildId() : null,
        l = () => {
            null != s && v.Z.open(s, eO.pNK.DISCOVERY);
        };
    return (0, i.jsx)(eo.FJ, {
        message: t,
        compact: n,
        onClick: l
    });
}
function eV(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, o.e7)([Z.default], () => Z.default.getCurrentUser()),
        s = (0, o.e7)([G.Z], () => {
            var e, t;
            return null !== (t = null === (e = G.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(a)) && void 0 !== t && t;
        });
    return (0, i.jsx)(ed.Z, {
        message: t,
        compact: r,
        isOwner: s,
        channel: n
    });
}
function eH(e) {
    let { message: t, compact: n, channel: r } = e;
    return (0, m.nY)(t)
        ? (0, i.jsx)($.Z, {
              message: t,
              compact: n,
              channel: r
          })
        : null;
}
function eY(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, X.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ea.Z, {
        message: t,
        compact: n,
        usernameHook: a
    });
}
function ej(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, X.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(el.Z, {
        message: t,
        compact: n,
        channel: r,
        usernameHook: a
    });
}
function eW(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, X.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(es.Z, {
        message: t,
        compact: n,
        channel: r,
        usernameHook: a
    });
}
function eK(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, X.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        }),
        s = (0, o.e7)([S.ZP], () => S.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(em.Z, {
                message: t,
                compact: r,
                usernameHook: a
            }),
            null != s && s.name === t.content ? (0, i.jsx)(A.Z, { code: ''.concat(n.guild_id, '-').concat(s.id) }) : null
        ]
    });
}
function ez(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, X.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ef.Z, {
        message: t,
        compact: r,
        usernameHook: a
    });
}
function eq(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, X.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(eI.Z, {
        message: t,
        compact: r,
        usernameHook: a
    });
}
function eQ(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, X.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ep.Z, {
        message: t,
        compact: r,
        usernameHook: a
    });
}
function eX(e) {
    var t, n;
    let { message: r, channel: a, compact: l } = e,
        c = (0, X.l)({
            user: r.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: r.id
        }),
        d = (0, o.e7)([k.Z], () => k.Z.can(eO.Plq.MUTE_MEMBERS, a)),
        _ = () => {
            (0, y.DT)(a, r.author.id, !1), u.Z.deleteMessage(a.id, r.id, !0);
        },
        E = (0, o.e7)([L.Z], () => L.Z.getParticipant(a.id, r.author.id)),
        f = new Date(W.default.extractTimestamp(r.id)).toISOString() === new Date(null !== (n = null == E ? void 0 : null === (t = E.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
        h = d && (null == E ? void 0 : E.rtsState) === b.xO.REQUESTED_TO_SPEAK && f;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eh.Z, {
                message: r,
                compact: l,
                usernameHook: c
            }),
            h
                ? (0, i.jsxs)(s.Button, {
                      wrapperClassName: ey.inviteToSpeakButtonWrapper,
                      innerClassName: ey.inviteToSpeakButtonInner,
                      look: s.Button.Looks.FILLED,
                      color: s.Button.Colors.PRIMARY,
                      onClick: _,
                      children: [
                          (0, i.jsx)(s.MicrophoneArrowRightIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 20,
                              width: 20
                          }),
                          eC.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                      ]
                  })
                : null
        ]
    });
}
function e$(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function eJ(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(E.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function e0(e) {
    var t;
    let { message: n, channel: r, compact: a } = e;
    return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === _.Eh.GUILD_PRODUCT
        ? (0, i.jsx)(T.Z, {
              message: n,
              channel: r,
              compact: a
          })
        : null;
}
function e1(e) {
    let { message: t, channel: n } = e;
    return (0, i.jsx)(Q.Z, {
        message: t,
        channel: n
    });
}
function e2(e) {
    let { message: t, channel: n } = e,
        r = t.giftingPrompt,
        a = (0, o.e7)([Z.default], () => Z.default.getUser(null == r ? void 0 : r.recipientUserId));
    return null == r || null == a
        ? null
        : (0, i.jsx)(z.Z, {
              giftIntentType: r.giftIntentType,
              recipientUser: a,
              channel: n,
              showSecondaryCta: r.showSecondaryCta
          });
}
function e3(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(en.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function e4(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(ec.Z, {
        message: t,
        channel: n,
        author: t.author,
        compact: r
    });
}
let e5 = Object.freeze({
    [eO.uaV.DEFAULT]: void 0,
    [eO.uaV.REPLY]: void 0,
    [eO.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eO.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eO.uaV.RECIPIENT_ADD]: eU,
    [eO.uaV.RECIPIENT_REMOVE]: ex,
    [eO.uaV.CALL]: eb,
    [eO.uaV.CHANNEL_NAME_CHANGE]: eD,
    [eO.uaV.CHANNEL_ICON_CHANGE]: eM,
    [eO.uaV.CHANNEL_PINNED_MESSAGE]: eP,
    [eO.uaV.USER_JOIN]: eG,
    [eO.uaV.GUILD_BOOST]: ek,
    [eO.uaV.GUILD_BOOST_TIER_1]: ek,
    [eO.uaV.GUILD_BOOST_TIER_2]: ek,
    [eO.uaV.GUILD_BOOST_TIER_3]: ek,
    [eO.uaV.CHANNEL_FOLLOW_ADD]: eB,
    [eO.uaV.GUILD_STREAM]: eF,
    [eO.uaV.GUILD_DISCOVERY_DISQUALIFIED]: eZ,
    [eO.uaV.GUILD_DISCOVERY_REQUALIFIED]: eo.xe,
    [eO.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eo.HL,
    [eO.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eo.Yc,
    [eO.uaV.THREAD_CREATED]: ew,
    [eO.uaV.THREAD_STARTER_MESSAGE]: eA.Z,
    [eO.uaV.GUILD_INVITE_REMINDER]: eV,
    [eO.uaV.AUTO_MODERATION_ACTION]: eH,
    [eO.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eY,
    [eO.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eY,
    [eO.uaV.GUILD_INCIDENT_REPORT_RAID]: ej,
    [eO.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eW,
    [eO.uaV.ROLE_SUBSCRIPTION_PURCHASE]: g.Z,
    [eO.uaV.PURCHASE_NOTIFICATION]: e0,
    [eO.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eO.uaV.STAGE_START]: eK,
    [eO.uaV.STAGE_END]: ez,
    [eO.uaV.STAGE_SPEAKER]: eQ,
    [eO.uaV.STAGE_RAISE_HAND]: eX,
    [eO.uaV.STAGE_TOPIC]: eq,
    [eO.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: O.Z,
    [eO.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: R.P,
    [eO.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: R.e,
    [eO.uaV.PREMIUM_REFERRAL]: void 0,
    [eO.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: e$,
    [eO.uaV.CUSTOM_GIFT]: void 0,
    [eO.uaV.GUILD_GAMING_STATS_PROMPT]: eJ,
    [eO.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eO.uaV.POLL_RESULT]: N.Z,
    [eO.uaV.CHANGELOG]: void 0,
    [eO.uaV.NITRO_NOTIFICATION]: e1,
    [eO.uaV.CHANNEL_LINKED_TO_LOBBY]: e3,
    [eO.uaV.GIFTING_PROMPT]: e2,
    [eO.uaV.IN_GAME_MESSAGE_NUX]: e4,
    [eO.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: h.Cn,
    [eO.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: h.Ue,
    [eO.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: h.R6
});
function e6(e) {
    let { message: t, channel: n, compact: r, disableInteraction: a } = e,
        { type: o } = t,
        s = e5[o];
    return null == s
        ? (eL(Error('unknown message type '.concat(t.type))), null)
        : (0, i.jsx)(q.ZP, {
              message: t,
              content: (0, K.ZP)(t).content,
              children: (0, i.jsx)(s, {
                  message: t,
                  channel: n,
                  compact: r,
                  disableInteraction: a
              })
          });
}
t.Z = a.memo(e6);
