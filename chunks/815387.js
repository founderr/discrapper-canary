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
    b = n(590415),
    L = n(911560),
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
    K = n(930282),
    z = n(818570),
    q = n(942951),
    Q = n(9423),
    X = n(789267),
    $ = n(262),
    J = n(303135),
    ee = n(673052),
    et = n(385063),
    en = n(253118),
    er = n(54817),
    ei = n(502115),
    ea = n(27103),
    eo = n(396252),
    es = n(522860),
    el = n(582298),
    eu = n(73352),
    ec = n(507962),
    ed = n(857640),
    e_ = n(614972),
    eE = n(701181),
    ef = n(29338),
    eh = n(461135),
    ep = n(296571),
    em = n(587737),
    eI = n(482239),
    eT = n(328749),
    eg = n(4305),
    eS = n(910548),
    eA = n(981631),
    ev = n(70722),
    eN = n(689938),
    eO = n(437814);
function eR(e) {
    Y.Z.captureException(e), new h.Z('SystemMessage').error('', e);
}
function eC(e) {
    let { message: t, compact: n, channel: r } = e,
        { id: s, author: l } = t,
        u = P.default.getId(),
        d = t.getChannelId(),
        _ = (0, o.e7)([U.Z], () => U.Z.isCallActive(d, s), [d, s]),
        E = (0, o.e7)([Z.Z], () => Z.Z.getVoiceState(eA.ME, u)),
        f = !_ && null != t.call && !t.call.participants.includes(u),
        h = _ && (null == E || E.channelId !== d),
        p = a.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        m = (0, q.l)({
            user: l,
            channelId: d,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(X.Z, {
        compact: n,
        message: t,
        missed: f,
        joinable: h,
        usernameHook: m,
        onClickJoinCall: p
    });
}
function ey(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(et.Z, {
        compact: n,
        message: t,
        usernameHook: s,
        isForumPost: r.isForumPost()
    });
}
function eb(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(J.Z, {
        compact: n,
        message: t,
        usernameHook: s
    });
}
function eL(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: o } = t,
        s = t.getChannelId(),
        l = a.useCallback(() => {
            if (B.Z.getChannelId() !== s) {
                let e = w.Z.getChannel(s);
                null != e && (0, R.XU)(e.guild_id, e.id);
            }
            setTimeout(() => V.S.dispatch(eA.CkL.TOGGLE_CHANNEL_PINS), 0);
        }, [s]),
        u = (0, q.l)({
            user: o,
            channelId: s,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(en.Z, {
        message: t,
        compact: n,
        usernameHook: u,
        onClickPins: __OVERLAY__ ? null : l
    });
}
function eD(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: a } = t,
        s = t.getChannelId(),
        l = (0, o.e7)([F.default], () => F.default.getUser(t.mentions[0]), [t]),
        u = H.ZP.getName(null, s, l),
        c = (0, q.l)({
            user: a,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        d = (0, q.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        });
    return n.isThread()
        ? (0, i.jsx)(em.Z, {
              message: t,
              channel: n,
              compact: r,
              targetUser: l,
              actorUsernameHook: c,
              targetUsernameHook: d
          })
        : (0, i.jsx)(eu.Z, {
              message: t,
              compact: r,
              otherUsername: u,
              usernameHook: c,
              otherUsernameHook: d
          });
}
function eM(e) {
    let { message: t, channel: r, compact: o } = e,
        u = (0, q.l)({
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
                    await L.Z.loadThread(r);
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
    return (0, i.jsx)(ep.Z, {
        message: t,
        compact: o,
        usernameHook: u,
        onClickThread: c,
        onClickViewThreads: d,
        onContextMenuThread: _
    });
}
function eP(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: a } = t,
        s = t.getChannelId(),
        l = (0, o.e7)([F.default], () => F.default.getUser(t.mentions[0]), [t]),
        u = (0, q.l)({
            user: a,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        }),
        c = (0, q.l)({
            user: l,
            channelId: s,
            guildId: n.guild_id,
            messageId: t.id
        });
    return n.isThread()
        ? (0, i.jsx)(eI.Z, {
              message: t,
              channel: n,
              compact: r,
              targetUser: l,
              actorUsernameHook: u,
              targetUsernameHook: c
          })
        : null != l && l.id !== a.id
          ? (0, i.jsx)(ec.Z, {
                message: t,
                channel: n,
                compact: r,
                usernameHook: u,
                otherUser: l,
                otherUsernameHook: c
            })
          : (0, i.jsx)(ec.Z, {
                message: t,
                channel: n,
                usernameHook: u
            });
}
function eU(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eg.Z, {
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
function ew(e) {
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
                        section: eA.jXE.CHANNEL_TEXT_AREA,
                        object: eA.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [c]),
        _ = (0, q.l)({
            user: s,
            channelId: u,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(eS.ZP, {
        message: t,
        compact: r,
        guild: c,
        usernameHook: _,
        onClickMessage: d
    });
}
function ex(e) {
    let { message: t, compact: n, channel: r } = e,
        { author: a } = t,
        o = t.getChannelId(),
        s = (0, q.l)({
            user: a,
            channelId: o,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)($.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
function eG(e) {
    let { message: t, compact: n, channel: r } = e,
        {
            author: s,
            author: { id: l },
            messageReference: u
        } = t,
        c = t.getChannelId(),
        _ = (0, o.e7)([k.Z], () => k.Z.findActivity(l, (e) => e.type === eA.IIU.PLAYING), [l]),
        E = (0, o.e7)([w.Z], () => (null != u ? w.Z.getChannel(u.channel_id) : null), [u]),
        f = null == u ? void 0 : u.guild_id,
        h = (0, q.l)({
            user: s,
            channelId: c,
            guildId: r.guild_id,
            messageId: t.id
        }),
        p = a.useCallback(() => {
            if (null != E && null != f)
                (0, d.iV)({
                    streamType: ev.lo.GUILD,
                    ownerId: l,
                    channelId: E.id,
                    guildId: f
                });
        }, [l, E, f]);
    return null != u && null != E && null != u.guild_id
        ? (0, i.jsx)(es.Z, {
              message: t,
              compact: n,
              channel: E,
              playingActivity: _,
              onJoinStream: p,
              usernameHook: h
          })
        : null;
}
function ek(e) {
    let { message: t, compact: n } = e,
        r = t.getChannelId(),
        a = (0, o.e7)([w.Z], () => w.Z.getChannel(r), [r]),
        s = null != a ? a.getGuildId() : null,
        l = () => {
            null != s && A.Z.open(s, eA.pNK.DISCOVERY);
        };
    return (0, i.jsx)(ei.FJ, {
        message: t,
        compact: n,
        onClick: l
    });
}
function eB(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, o.e7)([F.default], () => F.default.getCurrentUser()),
        s = (0, o.e7)([x.Z], () => {
            var e, t;
            return null !== (t = null === (e = x.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(a)) && void 0 !== t && t;
        });
    return (0, i.jsx)(el.Z, {
        message: t,
        compact: r,
        isOwner: s,
        channel: n
    });
}
function eF(e) {
    let { message: t, compact: n, channel: r } = e;
    return (0, p.nY)(t)
        ? (0, i.jsx)(Q.Z, {
              message: t,
              compact: n,
              channel: r
          })
        : null;
}
function eZ(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, q.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(er.Z, {
        message: t,
        compact: n,
        usernameHook: a
    });
}
function eV(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, q.l)({
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
function eH(e) {
    let { message: t, compact: n, channel: r } = e,
        a = (0, q.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ea.Z, {
        message: t,
        compact: n,
        channel: r,
        usernameHook: a
    });
}
function eY(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, q.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        }),
        s = (0, o.e7)([g.ZP], () => g.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ef.Z, {
                message: t,
                compact: r,
                usernameHook: a
            }),
            null != s && s.name === t.content ? (0, i.jsx)(S.Z, { code: ''.concat(n.guild_id, '-').concat(s.id) }) : null
        ]
    });
}
function ej(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, q.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ed.Z, {
        message: t,
        compact: r,
        usernameHook: a
    });
}
function eW(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, q.l)({
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
function eK(e) {
    let { message: t, channel: n, compact: r } = e,
        a = (0, q.l)({
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
    var t, n;
    let { message: r, channel: a, compact: l } = e,
        c = (0, q.l)({
            user: r.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: r.id
        }),
        d = (0, o.e7)([G.Z], () => G.Z.can(eA.Plq.MUTE_MEMBERS, a)),
        _ = () => {
            (0, C.DT)(a, r.author.id, !1), u.Z.deleteMessage(a.id, r.id, !0);
        },
        E = (0, o.e7)([y.Z], () => y.Z.getParticipant(a.id, r.author.id)),
        f = new Date(j.default.extractTimestamp(r.id)).toISOString() === new Date(null !== (n = null == E ? void 0 : null === (t = E.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
        h = d && (null == E ? void 0 : E.rtsState) === b.xO.REQUESTED_TO_SPEAK && f;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e_.Z, {
                message: r,
                compact: l,
                usernameHook: c
            }),
            h
                ? (0, i.jsxs)(s.Button, {
                      wrapperClassName: eO.inviteToSpeakButtonWrapper,
                      innerClassName: eO.inviteToSpeakButtonInner,
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
                          eN.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                      ]
                  })
                : null
        ]
    });
}
function eq(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function eQ(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(E.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
function eX(e) {
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
function e$(e) {
    let { message: t, channel: n } = e;
    return (0, i.jsx)(z.Z, {
        message: t,
        channel: n
    });
}
function eJ(e) {
    let { message: t, channel: n, compact: r } = e;
    return (0, i.jsx)(ee.Z, {
        message: t,
        channel: n,
        compact: r
    });
}
let e0 = Object.freeze({
    [eA.uaV.DEFAULT]: void 0,
    [eA.uaV.REPLY]: void 0,
    [eA.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eA.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eA.uaV.RECIPIENT_ADD]: eD,
    [eA.uaV.RECIPIENT_REMOVE]: eP,
    [eA.uaV.CALL]: eC,
    [eA.uaV.CHANNEL_NAME_CHANGE]: ey,
    [eA.uaV.CHANNEL_ICON_CHANGE]: eb,
    [eA.uaV.CHANNEL_PINNED_MESSAGE]: eL,
    [eA.uaV.USER_JOIN]: eU,
    [eA.uaV.GUILD_BOOST]: ew,
    [eA.uaV.GUILD_BOOST_TIER_1]: ew,
    [eA.uaV.GUILD_BOOST_TIER_2]: ew,
    [eA.uaV.GUILD_BOOST_TIER_3]: ew,
    [eA.uaV.CHANNEL_FOLLOW_ADD]: ex,
    [eA.uaV.GUILD_STREAM]: eG,
    [eA.uaV.GUILD_DISCOVERY_DISQUALIFIED]: ek,
    [eA.uaV.GUILD_DISCOVERY_REQUALIFIED]: ei.xe,
    [eA.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ei.HL,
    [eA.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ei.Yc,
    [eA.uaV.THREAD_CREATED]: eM,
    [eA.uaV.THREAD_STARTER_MESSAGE]: eT.Z,
    [eA.uaV.GUILD_INVITE_REMINDER]: eB,
    [eA.uaV.AUTO_MODERATION_ACTION]: eF,
    [eA.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eZ,
    [eA.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eZ,
    [eA.uaV.GUILD_INCIDENT_REPORT_RAID]: eV,
    [eA.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eH,
    [eA.uaV.ROLE_SUBSCRIPTION_PURCHASE]: T.Z,
    [eA.uaV.PURCHASE_NOTIFICATION]: eX,
    [eA.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eA.uaV.STAGE_START]: eY,
    [eA.uaV.STAGE_END]: ej,
    [eA.uaV.STAGE_SPEAKER]: eK,
    [eA.uaV.STAGE_RAISE_HAND]: ez,
    [eA.uaV.STAGE_TOPIC]: eW,
    [eA.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: N.Z,
    [eA.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: O.P,
    [eA.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: O.e,
    [eA.uaV.PREMIUM_REFERRAL]: void 0,
    [eA.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: eq,
    [eA.uaV.CUSTOM_GIFT]: void 0,
    [eA.uaV.GUILD_GAMING_STATS_PROMPT]: eQ,
    [eA.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eA.uaV.POLL_RESULT]: v.Z,
    [eA.uaV.CHANGELOG]: void 0,
    [eA.uaV.NITRO_NOTIFICATION]: e$,
    [eA.uaV.CHANNEL_LINKED_TO_LOBBY]: eJ,
    [eA.uaV.GIFTING_PROMPT]: void 0
});
function e1(e) {
    let { message: t, channel: n, compact: r, disableInteraction: a } = e,
        { type: o } = t,
        s = e0[o];
    return null == s
        ? (eR(Error('unknown message type '.concat(t.type))), null)
        : (0, i.jsx)(K.ZP, {
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
t.Z = a.memo(e1);
