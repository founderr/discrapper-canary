n.d(t, {
    GN: function () {
        return N;
    },
    M2: function () {
        return C;
    },
    Nq: function () {
        return A;
    },
    SZ: function () {
        return D;
    },
    aC: function () {
        return O;
    },
    pI: function () {
        return S;
    },
    sR: function () {
        return R;
    },
    tt: function () {
        return x;
    }
}),
    n(653041);
var r = n(399606),
    i = n(704215),
    a = n(736045),
    s = n(695346),
    o = n(675478),
    l = n(581883),
    u = n(401062),
    c = n(131704),
    d = n(496675),
    f = n(594174),
    _ = n(626135),
    p = n(74538),
    h = n(51144),
    m = n(208049),
    g = n(763296),
    E = n(697426),
    v = n(641015),
    I = n(893663),
    b = n(710111),
    T = n(981631);
function S() {
    var e;
    let t = s.kU.getSetting();
    return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100;
}
function y(e, t) {
    return (null == t ? void 0 : t.guild_id) == null || d.Z.can(T.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === b.X8 || e.guildId === (null == t ? void 0 : t.guild_id);
}
function A(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (p.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === b.X8) && y(t, n) && (!r || t.available);
}
function N(e, t, n) {
    (0, m.XE)(t, e, E.YQ.SOUNDBOARD), (0, u.kq)(t, e, __OVERLAY__, n);
}
async function C(e) {
    let t = f.default.getCurrentUser(),
        n = (0, a.Z)(),
        r = (0, I.k9)(e);
    if (null == n || c.Lr.has(n.type) || null == r || !p.ZP.canUseCustomCallSounds(t) || !(0, v.D)()) return;
    await (0, m.w)();
    let i = r.guildId === b.hY ? b.X8 : r.guildId,
        s = g.Z.getSound(i, r.soundId);
    if (null != s) {
        var o, l;
        if (!y(s, n) || !A(t, s, n, !0)) return null;
        (o = s), (l = n.id), (0, m.XE)(l, o, E.YQ.JOINED_VOICE_CHANNEL), (0, u.vy)(l, o, __OVERLAY__);
    }
}
function R(e) {
    var t, n;
    let { isSoundboardButtonDisabled: a = !1 } = e,
        s = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        o = [i.z.SOUNDBOARD_EDUCATION];
    if (!a && !Object.values(null !== (n = null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {}).some((e) => null != e.joinSound)) {
        o.push(i.z.CUSTOM_CALL_SOUNDS_SPARKLES);
        let e = (0, h.Fc)(s);
        (p.ZP.canUseCustomCallSounds(s) || e) && o.push(i.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return o;
}
function O(e, t) {
    (0, o.PS)(
        e,
        (n) => {
            (n.joinSound = void 0),
                L({
                    guildId: e,
                    changeType: E.MW.REMOVED,
                    soundType: E.jy.ENTRY,
                    location: t
                });
        },
        o.fy.INFREQUENT_USER_ACTION
    );
}
function D(e, t, n) {
    (0, o.PS)(
        e,
        (r) => {
            let i = t.guildId === b.X8,
                a = i ? E.H$.DEFAULT : E.H$.CUSTOM,
                s = null != r.joinSound ? E.MW.UPDATED : E.MW.ADDED;
            (r.joinSound = {
                soundId: t.soundId,
                guildId: i ? b.hY : t.guildId
            }),
                L({
                    guildId: e,
                    changeType: s,
                    soundSource: a,
                    soundType: E.jy.ENTRY,
                    location: n
                });
        },
        o.fy.INFREQUENT_USER_ACTION
    );
}
function L(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: a } = e;
    _.default.track(T.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: '' === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i
    });
}
function x(e) {
    let { location: t } = e;
    _.default.track(T.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
