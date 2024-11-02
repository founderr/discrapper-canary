e.d(t, {
    DT: function () {
        return N;
    },
    Ef: function () {
        return O;
    },
    HO: function () {
        return y;
    },
    NZ: function () {
        return k;
    },
    Pq: function () {
        return b;
    },
    Q1: function () {
        return g;
    },
    RK: function () {
        return I;
    },
    _0: function () {
        return A;
    },
    hz: function () {
        return S;
    },
    yi: function () {
        return m;
    }
});
var i = e(512722),
    l = e.n(i),
    r = e(149765),
    c = e(544891),
    o = e(493683);
e(749210);
var a = e(911969),
    s = e(367907),
    u = e(944486),
    d = e(979651),
    _ = e(700785),
    f = e(922482),
    h = e(192079),
    T = e(706058),
    p = e(590415),
    E = e(981631);
function g(n, t) {
    let e = n.getGuildId();
    return (
        l()(null != e, 'This channel cannot be guildless.'),
        t && (0, s.yw)(E.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, h.s$)(n) }),
        c.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(e),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: n.id
            }
        })
    );
}
function A(n, t) {
    let e = n.getGuildId();
    return (
        l()(null != e, 'This channel cannot be guildless.'),
        c.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: n.id
            }
        })
    );
}
function I(n, t) {
    let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == n ? void 0 : n.getGuildId();
    l()(null != i, 'This channel cannot be guildless.');
    let r = d.Z.getVoiceStateForChannel(n.id);
    return (
        (0, p.gf)(r) === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, s.yw)(E.rMx.PROMOTED_TO_SPEAKER, { ...(0, h.s$)(n) }),
        c.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i),
            body: {
                suppress: t,
                request_to_speak_timestamp: null,
                channel_id: n.id,
                ...(e ? { silent: e } : {})
            }
        })
    );
}
function m(n) {
    let t = null == n ? void 0 : n.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        c.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t),
            body: {
                suppress: !0,
                channel_id: n.id,
                self_video: !1,
                self_stream: !1
            }
        })
    );
}
function N(n, t, e) {
    let i = n.getGuildId();
    return (
        l()(null != i, 'This channel cannot be guildless.'),
        c.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i, t),
            body: {
                suppress: e,
                channel_id: n.id
            }
        })
    );
}
function S(n, t) {
    if (null == t || null == n) return;
    let e = t.getGuildId();
    return (
        l()(null != e, 'This channel cannot be guildless.'),
        N(t, n.id, !0),
        c.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
                suppress: !0,
                channel_id: t.id,
                self_video: !1,
                self_stream: !1
            }
        })
    );
}
function b(n, t, e) {
    let i = n.getGuildId();
    l()(null != i, 'Channel cannot be guildless');
    let c = n.permissionOverwrites[i],
        s = {
            id: i,
            type: a.BN.ROLE,
            allow: _.Hn,
            deny: _.Hn,
            ...c
        };
    e ? ((s.allow = r.IH(s.allow, t)), (s.deny = r.Od(s.deny, t))) : ((s.allow = r.Od(s.allow, t)), (s.deny = r.IH(s.deny, t))), o.Z.updatePermissionOverwrite(n.id, s);
}
async function y(n, t, e, i) {
    if ('' === t) return;
    u.Z.getVoiceChannelId() !== n.id && (0, f.TM)(n);
    let l = await (0, T.me)(n.id, t, e, i);
    return I(n, !1, !0), l;
}
async function O(n, t, e) {
    if ('' !== t) return await (0, T.Dk)(n.id, t, e);
}
async function k(n) {
    await (0, T.Ix)(n.id);
}
