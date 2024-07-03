n(411104);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(239091), o = n(904245), c = n(287734), d = n(872810), u = n(911969), _ = n(376484), E = n(362604), m = n(710845), I = n(825829), T = n(623624), h = n(533694), N = n(182180), p = n(924301), f = n(225890), C = n(434404), g = n(507435), S = n(504733), A = n(563959), x = n(703656), O = n(471253), R = n(565799), M = n(590415), v = n(911560), L = n(488131), Z = n(814820), P = n(314897), b = n(523746), D = n(592125), j = n(430824), U = n(496675), y = n(158776), B = n(944486), k = n(594174), G = n(979651), F = n(585483), w = n(5192), V = n(960048), H = n(709054), Y = n(937889), W = n(930282), z = n(818570), K = n(942951), Q = n(9423), q = n(789267), X = n(262), J = n(303135), $ = n(385063), ee = n(253118), et = n(54817), en = n(502115), ei = n(27103), ea = n(396252), es = n(522860), el = n(582298), er = n(73352), eo = n(507962), ec = n(857640), ed = n(614972), eu = n(701181), e_ = n(29338), eE = n(461135), em = n(296571), eI = n(587737), eT = n(482239), eh = n(328749), eN = n(4305), ep = n(910548), ef = n(981631), eC = n(70722), eg = n(689938), eS = n(118496);
function eA(e) {
    let {
            message: t,
            channel: n,
            compact: l
        } = e, {author: r} = t, {guild_id: o} = n, c = t.getChannelId(), d = (0, s.e7)([j.Z], () => j.Z.getGuild(o), [o]), u = a.useCallback(() => {
            if (null != d)
                (0, T.f)({
                    guildId: d.id,
                    location: {
                        section: ef.jXE.CHANNEL_TEXT_AREA,
                        object: ef.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [d]), _ = (0, K.l)({
            user: r,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(ep.ZP, {
        message: t,
        compact: l,
        guild: d,
        usernameHook: _,
        onClickMessage: u
    });
}
function ex(e) {
    let {
            message: t,
            compact: n,
            channel: a
        } = e, s = (0, K.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(et.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
let eO = Object.freeze({
    [ef.uaV.DEFAULT]: void 0,
    [ef.uaV.REPLY]: void 0,
    [ef.uaV.CHAT_INPUT_COMMAND]: void 0,
    [ef.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [ef.uaV.RECIPIENT_ADD]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, {author: l} = t, r = t.getChannelId(), o = (0, s.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]), c = w.ZP.getName(null, r, o), d = (0, K.l)({
                user: l,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            }), u = (0, K.l)({
                user: o,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread() ? (0, i.jsx)(eI.Z, {
            message: t,
            channel: n,
            compact: a,
            targetUser: o,
            actorUsernameHook: d,
            targetUsernameHook: u
        }) : (0, i.jsx)(er.Z, {
            message: t,
            compact: a,
            otherUsername: c,
            usernameHook: d,
            otherUsernameHook: u
        });
    },
    [ef.uaV.RECIPIENT_REMOVE]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, {author: l} = t, r = t.getChannelId(), o = (0, s.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]), c = (0, K.l)({
                user: l,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            }), d = (0, K.l)({
                user: o,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread() ? (0, i.jsx)(eT.Z, {
            message: t,
            channel: n,
            compact: a,
            targetUser: o,
            actorUsernameHook: c,
            targetUsernameHook: d
        }) : null != o && o.id !== l.id ? (0, i.jsx)(eo.Z, {
            message: t,
            channel: n,
            compact: a,
            usernameHook: c,
            otherUser: o,
            otherUsernameHook: d
        }) : (0, i.jsx)(eo.Z, {
            message: t,
            channel: n,
            usernameHook: c
        });
    },
    [ef.uaV.CALL]: function (e) {
        let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                id: r,
                author: o
            } = t, d = P.default.getId(), u = t.getChannelId(), _ = (0, s.e7)([b.Z], () => b.Z.isCallActive(u, r), [
                u,
                r
            ]), E = (0, s.e7)([G.Z], () => G.Z.getVoiceState(ef.ME, d)), m = !_ && null != t.call && !t.call.participants.includes(d), I = _ && (null == E || E.channelId !== u), T = a.useCallback(() => c.default.selectVoiceChannel(u), [u]), h = (0, K.l)({
                user: o,
                channelId: u,
                guildId: l.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(q.Z, {
            compact: n,
            message: t,
            missed: m,
            joinable: I,
            usernameHook: h,
            onClickJoinCall: T
        });
    },
    [ef.uaV.CHANNEL_NAME_CHANGE]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, K.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)($.Z, {
            compact: n,
            message: t,
            usernameHook: r,
            isForumPost: a.isForumPost()
        });
    },
    [ef.uaV.CHANNEL_ICON_CHANGE]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, K.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(J.Z, {
            compact: n,
            message: t,
            usernameHook: r
        });
    },
    [ef.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
        let {
                message: t,
                compact: n,
                channel: s
            } = e, {author: l} = t, r = t.getChannelId(), o = a.useCallback(() => {
                if (B.Z.getChannelId() !== r) {
                    let e = D.Z.getChannel(r);
                    null != e && (0, x.XU)(e.guild_id, e.id);
                }
                setTimeout(() => F.S.dispatch(ef.CkL.TOGGLE_CHANNEL_PINS), 0);
            }, [r]), c = (0, K.l)({
                user: l,
                channelId: r,
                guildId: s.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ee.Z, {
            message: t,
            compact: n,
            usernameHook: c,
            onClickPins: __OVERLAY__ ? null : o
        });
    },
    [ef.uaV.USER_JOIN]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, K.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eN.Z, {
                    message: t,
                    guildId: a.guild_id,
                    compact: n,
                    usernameHook: r
                }),
                (0, i.jsx)(Z.f, {
                    channel: a,
                    message: t
                })
            ]
        });
    },
    [ef.uaV.GUILD_BOOST]: eA,
    [ef.uaV.GUILD_BOOST_TIER_1]: eA,
    [ef.uaV.GUILD_BOOST_TIER_2]: eA,
    [ef.uaV.GUILD_BOOST_TIER_3]: eA,
    [ef.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, K.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(X.Z, {
            message: t,
            compact: n,
            usernameHook: r
        });
    },
    [ef.uaV.GUILD_STREAM]: function (e) {
        let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                author: r,
                author: {id: o},
                messageReference: c
            } = t, u = t.getChannelId(), _ = (0, s.e7)([y.Z], () => y.Z.findActivity(o, e => e.type === ef.IIU.PLAYING), [o]), E = (0, s.e7)([D.Z], () => null != c ? D.Z.getChannel(c.channel_id) : null, [c]), m = null == c ? void 0 : c.guild_id, I = (0, K.l)({
                user: r,
                channelId: u,
                guildId: l.guild_id,
                messageId: t.id
            }), T = a.useCallback(() => {
                if (null != E && null != m)
                    (0, d.iV)({
                        streamType: eC.lo.GUILD,
                        ownerId: o,
                        channelId: E.id,
                        guildId: m
                    });
            }, [
                o,
                E,
                m
            ]);
        return null != c && null != E && null != c.guild_id ? (0, i.jsx)(es.Z, {
            message: t,
            compact: n,
            channel: E,
            playingActivity: _,
            onJoinStream: T,
            usernameHook: I
        }) : null;
    },
    [ef.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
        let {
                message: t,
                compact: n
            } = e, a = t.getChannelId(), l = (0, s.e7)([D.Z], () => D.Z.getChannel(a), [a]), r = null != l ? l.getGuildId() : null;
        return (0, i.jsx)(en.FJ, {
            message: t,
            compact: n,
            onClick: () => {
                null != r && C.Z.open(r, ef.pNK.DISCOVERY);
            }
        });
    },
    [ef.uaV.GUILD_DISCOVERY_REQUALIFIED]: en.xe,
    [ef.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: en.HL,
    [ef.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: en.Yc,
    [ef.uaV.THREAD_CREATED]: function (e) {
        let {
                message: t,
                channel: s,
                compact: o
            } = e, c = (0, K.l)({
                user: t.author,
                channelId: t.channel_id,
                guildId: s.guild_id,
                messageId: t.id
            }), d = a.useCallback(async e => {
                var n;
                let i = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                if (null != i) {
                    await v.Z.loadThread(i);
                    let t = D.Z.getChannel(i);
                    null != t && (0, L.ok)(t, e.shiftKey);
                }
            }, [t]), u = a.useCallback(() => {
                (0, l.openModalLazy)(async () => {
                    let {default: e} = await Promise.all([
                        n.e('91315'),
                        n.e('23502')
                    ]).then(n.bind(n, 223901));
                    return t => (0, i.jsx)(e, {
                        channel: s,
                        ...t
                    });
                });
            }, [s]), _ = a.useCallback(e => {
                var a;
                let s = D.Z.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
                null != s && (0, r.jW)(e, async () => {
                    let {default: e} = await Promise.all([
                        n.e('39285'),
                        n.e('48800'),
                        n.e('84248')
                    ]).then(n.bind(n, 422200));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        channel: s
                    });
                });
            }, [t]);
        return (0, i.jsx)(em.Z, {
            message: t,
            compact: o,
            usernameHook: c,
            onClickThread: d,
            onClickViewThreads: u,
            onContextMenuThread: _
        });
    },
    [ef.uaV.THREAD_STARTER_MESSAGE]: eh.Z,
    [ef.uaV.GUILD_INVITE_REMINDER]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, l = (0, s.e7)([k.default], () => k.default.getCurrentUser()), r = (0, s.e7)([j.Z], () => {
                var e, t;
                return null !== (t = null === (e = j.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(l)) && void 0 !== t && t;
            });
        return (0, i.jsx)(el.Z, {
            message: t,
            compact: a,
            isOwner: r,
            channel: n
        });
    },
    [ef.uaV.AUTO_MODERATION_ACTION]: function (e) {
        let {
            message: t,
            compact: n,
            channel: a
        } = e;
        return (0, I.nY)(t) ? (0, i.jsx)(Q.Z, {
            message: t,
            compact: n,
            channel: a
        }) : null;
    },
    [ef.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ex,
    [ef.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ex,
    [ef.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, s = (0, K.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ea.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [ef.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, s = (0, K.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ei.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [ef.uaV.ROLE_SUBSCRIPTION_PURCHASE]: N.Z,
    [ef.uaV.PURCHASE_NOTIFICATION]: function (e) {
        var t;
        let {
            message: n,
            channel: a,
            compact: s
        } = e;
        return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === u.Eh.GUILD_PRODUCT ? (0, i.jsx)(h.Z, {
            message: n,
            channel: a,
            compact: s
        }) : null;
    },
    [ef.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [ef.uaV.STAGE_START]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, l = (0, K.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }), r = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(n.id), [n.id]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(e_.Z, {
                    message: t,
                    compact: a,
                    usernameHook: l
                }),
                null != r && r.name === t.content ? (0, i.jsx)(f.Z, { code: ''.concat(n.guild_id, '-').concat(r.id) }) : null
            ]
        });
    },
    [ef.uaV.STAGE_END]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, s = (0, K.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ec.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ef.uaV.STAGE_SPEAKER]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, s = (0, K.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eu.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ef.uaV.STAGE_RAISE_HAND]: function (e) {
        var t, n;
        let {
                message: a,
                channel: r,
                compact: c
            } = e, d = (0, K.l)({
                user: a.author,
                channelId: r.id,
                guildId: r.guild_id,
                messageId: a.id
            }), u = (0, s.e7)([U.Z], () => U.Z.can(ef.Plq.MUTE_MEMBERS, r)), _ = (0, s.e7)([R.Z], () => R.Z.getParticipant(r.id, a.author.id)), E = new Date(H.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == _ ? void 0 : null === (t = _.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), m = u && (null == _ ? void 0 : _.rtsState) === M.xO.REQUESTED_TO_SPEAK && E;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ed.Z, {
                    message: a,
                    compact: c,
                    usernameHook: d
                }),
                m ? (0, i.jsxs)(l.Button, {
                    wrapperClassName: eS.inviteToSpeakButtonWrapper,
                    innerClassName: eS.inviteToSpeakButtonInner,
                    look: l.Button.Looks.FILLED,
                    color: l.Button.Colors.PRIMARY,
                    onClick: () => {
                        (0, O.DT)(r, a.author.id, !1), o.Z.deleteMessage(r.id, a.id, !0);
                    },
                    children: [
                        (0, i.jsx)(l.MicrophoneArrowRightIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            height: 20,
                            width: 20
                        }),
                        eg.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                    ]
                }) : null
            ]
        });
    },
    [ef.uaV.STAGE_TOPIC]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, s = (0, K.l)({
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
    [ef.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
    [ef.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: A.P,
    [ef.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: A.e,
    [ef.uaV.PREMIUM_REFERRAL]: void 0,
    [ef.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
        let {
            message: t,
            channel: n,
            compact: a
        } = e;
        return (0, i.jsx)(E.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [ef.uaV.CUSTOM_GIFT]: void 0,
    [ef.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
        let {
            message: t,
            channel: n,
            compact: a
        } = e;
        return (0, i.jsx)(_.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [ef.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [ef.uaV.POLL_RESULT]: g.Z,
    [ef.uaV.CHANGELOG]: void 0,
    [ef.uaV.NITRO_NOTIFICATION]: function (e) {
        let {
            message: t,
            channel: n
        } = e;
        return (0, i.jsx)(z.Z, {
            message: t,
            channel: n
        });
    }
});
t.Z = a.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: a,
            disableInteraction: s
        } = e, {type: l} = t, r = eO[l];
    if (null == r) {
        var o;
        return o = Error('unknown message type '.concat(t.type)), V.Z.captureException(o), new m.Z('SystemMessage').error('', o), null;
    }
    return (0, i.jsx)(W.ZP, {
        message: t,
        content: (0, Y.ZP)(t).content,
        children: (0, i.jsx)(r, {
            message: t,
            channel: n,
            compact: a,
            disableInteraction: s
        })
    });
});
