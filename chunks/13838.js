n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(243814),
    l = n(902704),
    s = n(812206),
    o = n(594190),
    c = n(199902),
    d = n(592125),
    u = n(271383),
    h = n(430824),
    m = n(131951),
    p = n(19780),
    g = n(594174),
    f = n(979651),
    _ = n(996106),
    E = n(914946),
    I = n(238679),
    C = n(452426),
    v = n(295424),
    S = n(222263),
    N = n(863141),
    T = n(186901),
    x = n(981631);
let b = (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() });
function A(e) {
    var t;
    let {
            args: { channel_id: n },
            socket: i
        } = e,
        r = d.Z.getChannel(n);
    if (null == r || !(0, E.zM)(r, i.application.id, i.authorization.scopes)) throw new _.Z({ errorCode: x.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if (r.isNSFW() && (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new _.Z({ errorCode: x.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(r.id));
}
let Z = (e) => (0, C.Z)(e).keys({ channel_id: e.string().allow(null) });
function y(e) {
    let {
        args: { channel_id: t }
    } = e;
    if (null != t && null == d.Z.getChannel(t)) throw new _.Z({ errorCode: x.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let L = {
    [x.zMe.GUILD_STATUS]: {
        scope: a.x.RPC,
        validation: (e) => (0, C.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            if (null == h.Z.getGuild(t)) throw new _.Z({ errorCode: x.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return (e) => {
                var n;
                let { prevState: i, dispatch: a } = e,
                    l = h.Z.getGuild(t);
                if (null == l) return;
                let s = {
                    guild: {
                        id: l.id,
                        name: l.name,
                        icon_url: null !== (n = l.getIconURL(128)) && void 0 !== n ? n : null
                    },
                    online: 0
                };
                return !r().isEqual(i, s) && a(s), s;
            };
        }
    },
    [x.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, a.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: x.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    a = d.Z.getChannel(t);
                if (null == a) return;
                let l = a.getGuildId(),
                    s = Object.values(f.Z.getVoiceStatesForChannel(a.id));
                return (
                    n &&
                        r()
                            .differenceBy(s, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, E.aE)(l, a.id, e))),
                    s
                );
            };
        }
    },
    [x.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, a.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: x.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    a = d.Z.getChannel(t);
                if (null == a) return;
                let l = a.getGuildId(),
                    s = Object.values(f.Z.getVoiceStatesForChannel(a.id));
                return (
                    r()
                        .differenceBy(n, s, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, E.aE)(l, a.id, e))),
                    s
                );
            };
        }
    },
    [x.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, a.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: x.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    a = d.Z.getChannel(t);
                if (null == a) return;
                let l = a.getGuildId(),
                    s = Object.values(f.Z.getVoiceStatesForChannel(a.id)).map((e) => (0, E.aE)(l, a.id, e));
                return (
                    r()
                        .differenceWith(s, n, r().isEqual)
                        .forEach((e) => i(e)),
                    s
                );
            };
        }
    },
    [x.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, a.x.RPC_VOICE_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = {
                    state: (0, E.zy)(p.Z.getState()),
                    hostname: p.Z.getHostname(),
                    pings: p.Z.getPings(),
                    average_ping: p.Z.getAveragePing(),
                    last_ping: p.Z.getLastPing()
                };
            return !r().isEqual(i, t) && n(i), i;
        }
    },
    [x.zMe.MESSAGE_CREATE]: {
        scope: a.x.RPC,
        validation: b,
        handler: A
    },
    [x.zMe.MESSAGE_UPDATE]: {
        scope: a.x.RPC,
        validation: b,
        handler: A
    },
    [x.zMe.MESSAGE_DELETE]: {
        scope: a.x.RPC,
        validation: b,
        handler: A
    },
    [x.zMe.SPEAKING_START]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, a.x.RPC_VOICE_READ, T.lH]
        },
        validation: Z,
        handler: y
    },
    [x.zMe.SPEAKING_STOP]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, a.x.RPC_VOICE_READ, T.lH]
        },
        validation: Z,
        handler: y
    },
    [x.zMe.GUILD_CREATE]: {
        scope: a.x.RPC,
        handler() {}
    },
    [x.zMe.CHANNEL_CREATE]: {
        scope: a.x.RPC,
        handler() {}
    },
    [x.zMe.GAME_JOIN]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.lH]
        },
        handler() {}
    },
    [x.zMe.GAME_SPECTATE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.lH]
        },
        handler() {}
    },
    [x.zMe.ACTIVITY_JOIN]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [x.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.lH]
        },
        handler() {}
    },
    [x.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [x.zMe.ACTIVITY_INVITE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.lH]
        },
        handler() {}
    },
    [x.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [x.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [a.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [x.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: I.gQ,
    [x.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [T.Gp.ANY]: [T.wE] },
        handler() {}
    },
    [x.zMe.ORIENTATION_UPDATE]: {
        scope: { [T.Gp.ANY]: [T.wE] },
        handler() {}
    },
    [x.zMe.VOICE_CHANNEL_SELECT]: {
        scope: a.x.RPC,
        handler() {}
    },
    [x.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [T.Gp.ALL]: [a.x.RPC, a.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [x.zMe.RELATIONSHIP_UPDATE]: {
        scope: a.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [x.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, a.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: g.default.getCurrentUser() };
            return null != i.currentUser && (null == t || !(0, l.Z)(i, t)) && n((0, N.Z)(i.currentUser)), i;
        }
    },
    [x.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [a.x.IDENTIFY, a.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = { currentGuildMember: u.ZP.getSelfMember(t) };
                return null != r.currentGuildMember && (null == n || !(0, l.Z)(r, n)) && i((0, S.Z)(r.currentGuildMember)), r;
            };
        }
    },
    [x.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, T.wE]
        },
        handler() {}
    },
    [x.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, T.wE]
        },
        handler() {}
    },
    [x.zMe.USER_ACHIEVEMENT_UPDATE]: {
        scope: T.lH,
        handler() {}
    },
    [x.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [T.lH, a.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t, n;
            let { prevState: i, dispatch: a } = e,
                l = c.Z.getStreamerActiveStreamMetadata(),
                d = (null == l ? void 0 : l.pid) != null ? o.ZP.getGameForPID(l.pid) : null,
                u = (null == d ? void 0 : d.id) != null ? s.Z.getApplication(d.id) : null,
                h = null != u ? (0, v.Z)(u) : null,
                m = null == l ? void 0 : l.sourceName,
                p = {
                    active: null != l,
                    pid: null !== (t = null == l ? void 0 : l.pid) && void 0 !== t ? t : null,
                    application: ((n = null != h), n) ? { name: m } : null
                };
            return !r().isEqual(p, i) && a(p), p;
        }
    },
    [x.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [T.lH, a.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: m.Z.isVideoEnabled() };
            return !r().isEqual(i, t) && n(i), i;
        }
    }
};
t.Z = L;
