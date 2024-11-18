t.d(n, {
    DT: function () {
        return j;
    },
    Ef: function () {
        return S;
    },
    HO: function () {
        return I;
    },
    NZ: function () {
        return b;
    },
    Pq: function () {
        return v;
    },
    Q1: function () {
        return x;
    },
    RK: function () {
        return p;
    },
    _0: function () {
        return T;
    },
    hz: function () {
        return P;
    },
    yi: function () {
        return N;
    }
});
var l = t(512722),
    i = t.n(l),
    a = t(149765),
    s = t(544891),
    r = t(493683);
t(749210);
var c = t(911969),
    o = t(367907),
    u = t(944486),
    d = t(979651),
    h = t(700785),
    m = t(922482),
    g = t(192079),
    f = t(706058),
    _ = t(590415),
    E = t(981631);
function x(e, n) {
    let t = e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        n && (0, o.yw)(E.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, g.s$)(e) }),
        s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t),
            body: {
                request_to_speak_timestamp: n ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function T(e, n) {
    let t = e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function p(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = null == e ? void 0 : e.getGuildId();
    i()(null != l, 'This channel cannot be guildless.');
    let a = d.Z.getVoiceStateForChannel(e.id);
    return (
        (0, _.gf)(a) === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !n && (0, o.yw)(E.rMx.PROMOTED_TO_SPEAKER, { ...(0, g.s$)(e) }),
        s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(l),
            body: {
                suppress: n,
                request_to_speak_timestamp: null,
                channel_id: e.id,
                ...(t ? { silent: t } : {})
            },
            rejectWithError: !1
        })
    );
}
function N(e) {
    let n = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(n),
            body: {
                suppress: !0,
                channel_id: e.id,
                self_video: !1,
                self_stream: !1
            },
            rejectWithError: !1
        })
    );
}
function j(e, n, t) {
    let l = e.getGuildId();
    return (
        i()(null != l, 'This channel cannot be guildless.'),
        s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(l, n),
            body: {
                suppress: t,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function P(e, n) {
    if (null == n || null == e) return;
    let t = n.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        j(n, e.id, !0),
        s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
                suppress: !0,
                channel_id: n.id,
                self_video: !1,
                self_stream: !1
            },
            rejectWithError: !1
        })
    );
}
function v(e, n, t) {
    let l = e.getGuildId();
    i()(null != l, 'Channel cannot be guildless');
    let s = e.permissionOverwrites[l],
        o = {
            id: l,
            type: c.BN.ROLE,
            allow: h.Hn,
            deny: h.Hn,
            ...s
        };
    t ? ((o.allow = a.IH(o.allow, n)), (o.deny = a.Od(o.deny, n))) : ((o.allow = a.Od(o.allow, n)), (o.deny = a.IH(o.deny, n))), r.Z.updatePermissionOverwrite(e.id, o);
}
async function I(e, n, t, l) {
    if ('' === n) return;
    u.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
    let i = await (0, f.me)(e.id, n, t, l);
    return p(e, !1, !0), i;
}
async function S(e, n, t) {
    if ('' !== n) return await (0, f.Dk)(e.id, n, t);
}
async function b(e) {
    await (0, f.Ix)(e.id);
}
