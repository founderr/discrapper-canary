n.d(t, {
    DT: function () {
        return A;
    },
    Ef: function () {
        return R;
    },
    HO: function () {
        return O;
    },
    NZ: function () {
        return C;
    },
    Pq: function () {
        return N;
    },
    Q1: function () {
        return I;
    },
    RK: function () {
        return g;
    },
    _0: function () {
        return T;
    },
    hz: function () {
        return v;
    },
    yi: function () {
        return S;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(149765),
    o = n(544891),
    s = n(493683);
n(749210);
var l = n(911969),
    u = n(367907),
    c = n(944486),
    d = n(979651),
    _ = n(700785),
    E = n(922482),
    f = n(192079),
    h = n(706058),
    p = n(590415),
    m = n(981631);
function I(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        t && (0, u.yw)(m.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(e) }),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id
            }
        })
    );
}
function T(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(n, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            }
        })
    );
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null == e ? void 0 : e.getGuildId();
    i()(null != r, 'This channel cannot be guildless.');
    let a = d.Z.getVoiceStateForChannel(e.id);
    return (
        (0, p.gf)(a) === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, u.yw)(m.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(r),
            body: {
                suppress: t,
                request_to_speak_timestamp: null,
                channel_id: e.id,
                ...(n ? { silent: n } : {})
            }
        })
    );
}
function S(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(t),
            body: {
                suppress: !0,
                channel_id: e.id,
                self_video: !1,
                self_stream: !1
            }
        })
    );
}
function A(e, t, n) {
    let r = e.getGuildId();
    return (
        i()(null != r, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(r, t),
            body: {
                suppress: n,
                channel_id: e.id
            }
        })
    );
}
function v(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        A(t, e.id, !0),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(n, e.id),
            body: {
                suppress: !0,
                channel_id: t.id,
                self_video: !1,
                self_stream: !1
            }
        })
    );
}
function N(e, t, n) {
    let r = e.getGuildId();
    i()(null != r, 'Channel cannot be guildless');
    let o = e.permissionOverwrites[r],
        u = {
            id: r,
            type: l.BN.ROLE,
            allow: _.Hn,
            deny: _.Hn,
            ...o
        };
    n ? ((u.allow = a.IH(u.allow, t)), (u.deny = a.Od(u.deny, t))) : ((u.allow = a.Od(u.allow, t)), (u.deny = a.IH(u.deny, t))), s.Z.updatePermissionOverwrite(e.id, u);
}
async function O(e, t, n, r) {
    if ('' === t) return;
    c.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
    let i = await (0, h.me)(e.id, t, n, r);
    return g(e, !1, !0), i;
}
async function R(e, t, n) {
    if ('' !== t) return await (0, h.Dk)(e.id, t, n);
}
async function C(e) {
    await (0, h.Ix)(e.id);
}
