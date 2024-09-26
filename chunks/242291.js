n.d(t, {
    GN: function () {
        return C;
    },
    M2: function () {
        return b;
    },
    Nq: function () {
        return R;
    },
    SZ: function () {
        return P;
    },
    aC: function () {
        return M;
    },
    pI: function () {
        return N;
    },
    sR: function () {
        return D;
    },
    tt: function () {
        return w;
    }
});
var r = n(653041);
var i = n(399606),
    a = n(704215),
    o = n(736045),
    s = n(695346),
    l = n(675478),
    u = n(581883),
    c = n(401062),
    d = n(131704),
    _ = n(496675),
    E = n(594174),
    f = n(626135),
    h = n(74538),
    p = n(51144),
    m = n(208049),
    I = n(763296),
    T = n(697426),
    g = n(641015),
    S = n(893663),
    A = n(710111),
    v = n(981631);
function N() {
    var e;
    let t = s.kU.getSetting();
    return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100;
}
function O(e, t) {
    return (null == t ? void 0 : t.guild_id) == null || _.Z.can(v.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === A.X8 || e.guildId === (null == t ? void 0 : t.guild_id);
}
function R(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (h.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === A.X8) && O(t, n) && (!r || t.available);
}
function C(e, t, n) {
    (0, m.XE)(t, e, T.YQ.SOUNDBOARD), (0, c.kq)(t, e, __OVERLAY__, n);
}
function y(e, t) {
    (0, m.XE)(t, e, T.YQ.JOINED_VOICE_CHANNEL), (0, c.vy)(t, e, __OVERLAY__);
}
function L() {
    var e, t;
    return Object.values(null !== (t = null === (e = u.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {}).some((e) => null != e.joinSound);
}
async function b(e) {
    let t = E.default.getCurrentUser(),
        n = (0, o.Z)(),
        r = (0, S.k9)(e);
    if (null == n || d.Lr.has(n.type) || null == r || !h.ZP.canUseCustomCallSounds(t) || !(0, g.D)()) return;
    await (0, m.w)();
    let i = r.guildId === A.hY ? A.X8 : r.guildId,
        a = I.Z.getSound(i, r.soundId);
    if (null != a) {
        if (!O(a, n) || !R(t, a, n, !0)) return null;
        y(a, n.id);
    }
}
function D(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
        r = [a.z.SOUNDBOARD_EDUCATION];
    if (!t && !L()) {
        r.push(a.z.CUSTOM_CALL_SOUNDS_SPARKLES);
        let e = (0, p.Fc)(n);
        (h.ZP.canUseCustomCallSounds(n) || e) && r.push(a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return r;
}
function M(e, t) {
    (0, l.PS)(
        e,
        (n) => {
            (n.joinSound = void 0),
                U({
                    guildId: e,
                    changeType: T.MW.REMOVED,
                    soundType: T.jy.ENTRY,
                    location: t
                });
        },
        l.fy.INFREQUENT_USER_ACTION
    );
}
function P(e, t, n) {
    (0, l.PS)(
        e,
        (r) => {
            let i = t.guildId === A.X8,
                a = i ? T.H$.DEFAULT : T.H$.CUSTOM,
                o = null != r.joinSound ? T.MW.UPDATED : T.MW.ADDED;
            (r.joinSound = {
                soundId: t.soundId,
                guildId: i ? A.hY : t.guildId
            }),
                U({
                    guildId: e,
                    changeType: o,
                    soundSource: a,
                    soundType: T.jy.ENTRY,
                    location: n
                });
        },
        l.fy.INFREQUENT_USER_ACTION
    );
}
function U(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: a } = e;
    f.default.track(v.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: '' === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i
    });
}
function w(e) {
    let { location: t } = e;
    f.default.track(v.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
