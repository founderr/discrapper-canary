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
    h = n(710845),
    p = n(825829),
    m = n(623624),
    I = n(533694),
    T = n(182180),
    g = n(924301),
    S = n(225890),
    A = n(434404),
    v = n(507435),
    N = n(504733),
    O = n(563959),
    R = n(703656),
    C = n(471253),
    y = n(565799),
    L = n(590415),
    b = n(911560),
    D = n(488131),
    M = n(814820),
    P = n(314897),
    U = n(523746),
    w = n(592125),
    x = n(430824),
    G = n(496675),
    k = n(158776),
    B = n(944486),
    F = n(594174),
    Z = n(979651),
    V = n(585483),
    H = n(5192),
    Y = n(960048),
    j = n(709054),
    W = n(937889),
    K = n(15642),
    z = n(930282),
    q = n(818570),
    Q = n(942951),
    X = n(9423),
    $ = n(789267),
    J = n(262),
    ee = n(303135),
    et = n(673052),
    en = n(385063),
    er = n(253118),
    ei = n(54817),
    ea = n(502115),
    eo = n(27103),
    es = n(396252),
    el = n(522860),
    eu = n(600397),
    ec = n(582298),
    ed = n(73352),
    e_ = n(507962),
    eE = n(857640),
    ef = n(614972),
    eh = n(701181),
    ep = n(29338),
    em = n(461135),
    eI = n(296571),
    eT = n(587737),
    eg = n(482239),
    eS = n(328749),
    eA = n(4305),
    ev = n(910548),
    eN = n(981631),
    eO = n(70722),
    eR = n(689938),
    eC = n(437814);
function ey(e) {
    Y.Z.captureException(e), new h.Z('SystemMessage').error('', e);
}
function eL(e) {
    let { message: t, compact: n, channel: r } = e,
        { id: s, author: l } = t,
        u = P.default.getId(),
        d = t.getChannelId(),
        _ = (0, o.e7)([U.Z], () => U.Z.isCallActive(d, s), [d, s]),
        E = (0, o.e7)([Z.Z], () => Z.Z.getVoiceState(eN.ME, u)),
        f = !_ && null != t.call && !t.call.participants.includes(u),
        h = _ && (null == E || E.channelId !== d),
        p = a.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        m = (0, Q.l)({
            user: l,
            channelId: d,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)($.Z, {
        compact: n,
        message: t,
        missed: f,
        joinable: h,
        usernameHook: m,
        onClickJoinCall: p
    });
}
function eb(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, Q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(en.Z, {
        compact: n,
        message: t,
        usernameHook: s,
        isForumPost: r.isForumPost()
    });
}
function eD(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, Q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ee.Z, {
        compact: n,
        message: t,
        usernameHook: s
    });
}
function eM(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = a.useCallback(() => {
            if (B.Z.getChannelId() !== s) {
                let e = w.Z.getChannel(s);
                null != e && (0, R.XU)(e.guild_id, e.id);
            }
            setTimeout(() => V.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0);
        }, [s]),
        u = (0, Q.l)({
            user: o,
            channelId: s,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(er.Z, {
        message: t,
        compact: n,
        usernameHook: u,
        onClickPins: __OVERLAY__ ? null : l
    });
}
function eP(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: a } = t,
        s = t.getChannelId(),
        l = (0, o.e7)([F.default], () => F.default.getUser(t.mentions[0]), [t]),
        u = H.ZP.getName(null, s, l),
        c = (0, Q.l)({
            user: a,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        d = (0, Q.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        });
    return n.isThread()
        ? (0, i.jsx)(eT.Z, {
              message: t,
              channel: n,
              compact: r,
              targetUser: l,
              actorUsernameHook: c,
              targetUsernameHook: d
          })
        : (0, i.jsx)(ed.Z, {
              message: t,
              compact: r,
              otherUsername: u,
              usernameHook: c,
              otherUsernameHook: d
          });
}
function eU(e) {
    let { message: t, channel: r, compact: o } = e,
        u = (0, Q.l)({
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
                    await b.Z.loadThread(r);
                    let t = w.Z.getChannel(r);
                    null != t && (0, D.ok)(t, e.shiftKey);
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
                let a = w.Z.getChannel(null === (r = t.messageReference) || void 0 === r ? void 0 : r.channel_id);
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
    return (0, i.jsx)(eI.Z, {
        message: t,
        compact: o,
        usernameHook: u,
        onClickThread: c,
        onClickViewThreads: d,
        onContextMenuThread: _
    });
}
function ew(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: a } = t,
        s = t.getChannelId(),
        l = (0, o.e7)([F.default], () => F.default.getUser(t.mentions[0]), [t]),
        u = (0, Q.l)({
            user: a,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        c = (0, Q.l)({
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
              actorUsernameHook: u,
              targetUsernameHook: c
          })
        : null != l && l.id !== a.id
          ? (0, i.jsx)(e_.Z, {
                message: t,
                channel: n,
                compact: r,
                usernameHook: u,
                otherUser: l,
                otherUsernameHook: c
            })
          : (0, i.jsx)(e_.Z, {
                message: t,
                channel: n,
                usernameHook: u
            });
}
function ex(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, Q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eA.Z, {
                message: t,
                guildId: r.guild_id,
                compact: n,
                usernameHook: s
            }),
            (0, i.jsx)(M.f, {
                channel: r,
                message: t
            })
        ]
    });
}
function eG(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s } = t,
        { guild_id: l } = n,
        u = t.getChannelId(),
        c = (0, o.e7)([x.Z], () => x.Z.getGuild(l), [l]),
        d = a.useCallback(() => {
            if (null != c)
                (0, m.f)({
                    guildId: c.id,
                    location: {
                        section: eN.jXE.CHANNEL_TEXT_AREA,
                        object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [c]),
        _ = (0, Q.l)({
            user: s,
            channelId: u,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(ev.ZP, {
        message: t,
        compact: r,
        guild: c,
        usernameHook: _,
        onClickMessage: d
    });
}
function ek(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, Q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(J.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
function eB(e) {
    let { message: t, compact: n, channel: r } = e,
        {
            author: s,
            author: { id: l },
            messageReference: u
        } = t,
        c = t.getChannelId(),
        _ = (0, o.e7)([k.Z], () => k.Z.findActivity(l, (e) => e.type === eN.IIU.PLAYING), [l]),
        E = (0, o.e7)([w.Z], () => (null != u ? w.Z.getChannel(u.channel_id) : null), [u]),
        f = null == u ? void 0 : u.guild_id,
        h = (0, Q.l)({
            user: s,
            channelId: c,
            guildId: r.guild_id,
            messageId: t.id
        }),
        p = a.useCallback(() => {
            if (null != E && null != f)
                (0, d.iV)({
                    streamType: eO.lo.GUILD,
                    ownerId: l,
                    channelId: E.id,
                    guildId: f
                });
        }, [l, E, f]);
    return null != u && null != E && null != u.guild_id
        ? (0, i.jsx)(el.Z, {
              message: t,
              compact: n,
              channel: E,
              playingActivity: _,
              onJoinStream: p,
              usernameHook: h
          })
        : null;
}
function eF(e) {
    let { message: t, compact: n } = e,
        r = t.getChannelId(),
        a = (0, o.e7)([w.Z], () => w.Z.getChannel(r), [r]),
        s = null != a ? a.getGuildId() : null,
        l = () => {
            null != s && A.Z.open(s, eN.pNK.DISCOVERY);
        };
    return (0, i.jsx)(ea.FJ, {
        message: t,
        compact: n,
        onClick: l
    });
}
function eZ(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, o.e7)([F.default], () => F.default.getCurrentUser()),
        s = (0, o.e7)([x.Z], () => {
            var e, t;
            return null !== (t = null === (e = x.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(a)) && void 0 !== t && t;
        });
    return (0, i.jsx)(ec.Z, {
        message: t,
        compact: r,
        isOwner: s,
        channel: n
    });
}
function eV(e) {
    let { message: t, compact: n, channel: r } = e;
    return (0, p.nY)(t)
        ? (0, i.jsx)(X.Z, {
              message: t,
              compact: n,
              channel: r
          })
        : null;
}
function eH(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ei.Z, {
        message: t,
        compact: n,
        usernameHook: a
    });
}
function eY(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, Q.l)({
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
function ej(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(eo.Z, {
        message: t,
        compact: n,
        channel: r,
        usernameHook: a
    });
}
function eW(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        }),
        s = (0, o.e7)([g.ZP], () => g.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ep.Z, {
                message: t,
                compact: r,
                usernameHook: a
            }),
            null != s && s.name === t.content ? (0, i.jsx)(S.Z, { code: ''.concat(n.guild_id, '-').concat(s.id) }) : null
        ]
    });
}
function eK(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(eE.Z, {
        message: t,
        compact: r,
        usernameHook: a
    });
}
function ez(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(em.Z, {
        message: t,
        compact: r,
        usernameHook: a
    });
}
function eq(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, Q.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(eh.Z, {
        message: t,
        compact: r,
        usernameHook: a
    });
}
function eQ(e) {
    var t, n;
    let { message: r, channel: a, compact: l } = e,
        c = (0, Q.l)({
            user: r.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: r.id
        }),
        d = (0, o.e7)([G.Z], () => G.Z.can(eN.Plq.MUTE_MEMBERS, a)),
        _ = () => {
            (0, C.DT)(a, r.author.id, !1), u.Z.deleteMessage(a.id, r.id, !0);
        },
        E = (0, o.e7)([y.Z], () => y.Z.getParticipant(a.id, r.author.id)),
        f = new Date(j.default.extractTimestamp(r.id)).toISOString() === new Date(null !== (n = null == E ? void 0 : null === (t = E.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
        h = d && (null == E ? void 0 : E.rtsState) === L.xO.REQUESTED_TO_SPEAK && f;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ef.Z, {
                message: r,
                compact: l,
                usernameHook: c
            }),
            h
                ? (0, i.jsxs)(s.Button, {
                      wrapperClassName: eC.inviteToSpeakButtonWrapper,
                      innerClassName: eC.inviteToSpeakButtonInner,
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
                          eR.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                      ]
                  })
                : null
        ]
    });
}
function eX(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function e$(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(E.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function eJ(e) {
    var t;
    let { message: n, channel: r, compact: a } = e;
    return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === _.Eh.GUILD_PRODUCT
        ? (0, i.jsx)(I.Z, {
              message: n,
              channel: r,
              compact: a
          })
        : null;
}
function e0(e) {
    let { message: t, channel: n } = e;
    return (0, i.jsx)(q.Z, {
        message: t,
        channel: n
    });
}
function e1(e) {
    let { message: t, channel: n } = e,
        r = t.giftingPrompt,
        a = (0, o.e7)([F.default], () => F.default.getUser(null == r ? void 0 : r.recipientUserId));
    return null == r || null == a
        ? null
        : (0, i.jsx)(K.Z, {
              giftIntentType: r.giftIntentType,
              recipientUser: a,
              channel: n,
              showSecondaryCta: r.showSecondaryCta
          });
}
function e2(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(et.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function e3(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(eu.Z, {
        message: t,
        channel: n,
        author: t.author,
        compact: r
    });
}
let e4 = Object.freeze({
    [eN.uaV.DEFAULT]: void 0,
    [eN.uaV.REPLY]: void 0,
    [eN.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eN.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eN.uaV.RECIPIENT_ADD]: eP,
    [eN.uaV.RECIPIENT_REMOVE]: ew,
    [eN.uaV.CALL]: eL,
    [eN.uaV.CHANNEL_NAME_CHANGE]: eb,
    [eN.uaV.CHANNEL_ICON_CHANGE]: eD,
    [eN.uaV.CHANNEL_PINNED_MESSAGE]: eM,
    [eN.uaV.USER_JOIN]: ex,
    [eN.uaV.GUILD_BOOST]: eG,
    [eN.uaV.GUILD_BOOST_TIER_1]: eG,
    [eN.uaV.GUILD_BOOST_TIER_2]: eG,
    [eN.uaV.GUILD_BOOST_TIER_3]: eG,
    [eN.uaV.CHANNEL_FOLLOW_ADD]: ek,
    [eN.uaV.GUILD_STREAM]: eB,
    [eN.uaV.GUILD_DISCOVERY_DISQUALIFIED]: eF,
    [eN.uaV.GUILD_DISCOVERY_REQUALIFIED]: ea.xe,
    [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ea.HL,
    [eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ea.Yc,
    [eN.uaV.THREAD_CREATED]: eU,
    [eN.uaV.THREAD_STARTER_MESSAGE]: eS.Z,
    [eN.uaV.GUILD_INVITE_REMINDER]: eZ,
    [eN.uaV.AUTO_MODERATION_ACTION]: eV,
    [eN.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eH,
    [eN.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eH,
    [eN.uaV.GUILD_INCIDENT_REPORT_RAID]: eY,
    [eN.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: ej,
    [eN.uaV.ROLE_SUBSCRIPTION_PURCHASE]: T.Z,
    [eN.uaV.PURCHASE_NOTIFICATION]: eJ,
    [eN.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eN.uaV.STAGE_START]: eW,
    [eN.uaV.STAGE_END]: eK,
    [eN.uaV.STAGE_SPEAKER]: eq,
    [eN.uaV.STAGE_RAISE_HAND]: eQ,
    [eN.uaV.STAGE_TOPIC]: ez,
    [eN.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: N.Z,
    [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: O.P,
    [eN.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: O.e,
    [eN.uaV.PREMIUM_REFERRAL]: void 0,
    [eN.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: eX,
    [eN.uaV.CUSTOM_GIFT]: void 0,
    [eN.uaV.GUILD_GAMING_STATS_PROMPT]: e$,
    [eN.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eN.uaV.POLL_RESULT]: v.Z,
    [eN.uaV.CHANGELOG]: void 0,
    [eN.uaV.NITRO_NOTIFICATION]: e0,
    [eN.uaV.CHANNEL_LINKED_TO_LOBBY]: e2,
    [eN.uaV.GIFTING_PROMPT]: e1,
    [eN.uaV.IN_GAME_MESSAGE_NUX]: e3
});
function e5(e) {
    let { message: t, channel: n, compact: r, disableInteraction: a } = e,
        { type: o } = t,
        s = e4[o];
    return null == s
        ? (ey(Error('unknown message type '.concat(t.type))), null)
        : (0, i.jsx)(z.ZP, {
              message: t,
              content: (0, W.ZP)(t).content,
              children: (0, i.jsx)(s, {
                  message: t,
                  channel: n,
                  compact: r,
                  disableInteraction: a
              })
          });
}
t.Z = a.memo(e5);
