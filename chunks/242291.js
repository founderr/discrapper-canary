r.d(n, {
    GN: function () {
        return R;
    },
    M2: function () {
        return L;
    },
    Nq: function () {
        return C;
    },
    SZ: function () {
        return P;
    },
    aC: function () {
        return w;
    },
    pI: function () {
        return A;
    },
    sR: function () {
        return x;
    },
    tt: function () {
        return k;
    }
});
var i = r(653041);
var a = r(399606),
    s = r(704215),
    o = r(736045),
    l = r(695346),
    u = r(675478),
    c = r(581883),
    d = r(401062),
    f = r(131704),
    _ = r(496675),
    h = r(594174),
    p = r(626135),
    m = r(74538),
    g = r(51144),
    E = r(208049),
    v = r(763296),
    I = r(697426),
    T = r(641015),
    b = r(893663),
    y = r(710111),
    S = r(981631);
function A() {
    var e;
    let n = l.kU.getSetting();
    return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100;
}
function N(e, n) {
    return (null == n ? void 0 : n.guild_id) == null || _.Z.can(S.Plq.USE_EXTERNAL_SOUNDS, n) || e.guildId === y.X8 || e.guildId === (null == n ? void 0 : n.guild_id);
}
function C(e, n, r) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (m.ZP.canUseSoundboardEverywhere(e) || n.guildId === (null == r ? void 0 : r.guild_id) || n.guildId === y.X8) && N(n, r) && (!i || n.available);
}
function R(e, n, r) {
    (0, E.XE)(n, e, I.YQ.SOUNDBOARD), (0, d.kq)(n, e, __OVERLAY__, r);
}
function O(e, n) {
    (0, E.XE)(n, e, I.YQ.JOINED_VOICE_CHANNEL), (0, d.vy)(n, e, __OVERLAY__);
}
function D() {
    var e, n;
    return Object.values(null !== (n = null === (e = c.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {}).some((e) => null != e.joinSound);
}
async function L(e) {
    let n = h.default.getCurrentUser(),
        r = (0, o.Z)(),
        i = (0, b.k9)(e);
    if (null == r || f.Lr.has(r.type) || null == i || !m.ZP.canUseCustomCallSounds(n) || !(0, T.D)()) return;
    await (0, E.w)();
    let a = i.guildId === y.hY ? y.X8 : i.guildId,
        s = v.Z.getSound(a, i.soundId);
    if (null != s) {
        if (!N(s, r) || !C(n, s, r, !0)) return null;
        O(s, r.id);
    }
}
function x(e) {
    let { isSoundboardButtonDisabled: n = !1 } = e,
        r = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        i = [];
    if (!n && !D()) {
        i.push(s.z.CUSTOM_CALL_SOUNDS_SPARKLES);
        let e = (0, g.Fc)(r);
        (m.ZP.canUseCustomCallSounds(r) || e) && i.push(s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return i;
}
function w(e, n) {
    (0, u.PS)(
        e,
        (r) => {
            (r.joinSound = void 0),
                M({
                    guildId: e,
                    changeType: I.MW.REMOVED,
                    soundType: I.jy.ENTRY,
                    location: n
                });
        },
        u.fy.INFREQUENT_USER_ACTION
    );
}
function P(e, n, r) {
    (0, u.PS)(
        e,
        (i) => {
            let a = n.guildId === y.X8,
                s = a ? I.H$.DEFAULT : I.H$.CUSTOM,
                o = null != i.joinSound ? I.MW.UPDATED : I.MW.ADDED;
            (i.joinSound = {
                soundId: n.soundId,
                guildId: a ? y.hY : n.guildId
            }),
                M({
                    guildId: e,
                    changeType: o,
                    soundSource: s,
                    soundType: I.jy.ENTRY,
                    location: r
                });
        },
        u.fy.INFREQUENT_USER_ACTION
    );
}
function M(e) {
    let { guildId: n, changeType: r, soundType: i, soundSource: a, location: s } = e;
    p.default.track(S.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: s,
        guild_id: '' === n ? 0 : Number(n),
        change_type: r,
        sound_type: i,
        sound_source: a
    });
}
function k(e) {
    let { location: n } = e;
    p.default.track(S.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: n });
}
