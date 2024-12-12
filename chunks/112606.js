var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(626135),
    l = r(524484),
    u = r(981631);
let c = 5000;
function d(e) {
    switch (e) {
        case l.oZ.CHAT_INPUT:
            return 'chat_input';
        case l.oZ.MENTION:
            return 'mention';
        case l.oZ.VOICE_USER:
            return 'voice_user';
    }
}
function f(e) {
    switch (e) {
        case l.Hn.CHAT_INPUT:
            return 'chat_input';
        case l.Hn.MEMBER_USER:
            return 'member_user';
        case l.Hn.REACTION:
            return 'reaction';
        case l.Hn.CALL_TILE:
            return 'call_tile';
    }
}
function _(e, n) {
    return Object.entries(e)
        .filter((e) => {
            let [n, r] = e;
            return r;
        })
        .map((e) => {
            let [r] = e;
            return n(Number.parseInt(r));
        });
}
let h = s().throttle((e) => {
    let { enabled: n, combosEnabled: r, combosRequiredCount: i, screenshakeEnabled: a, shakeIntensity: s, screenshakeEnabledLocations: l, confettiEnabled: c, confettiSize: h, confettiCount: p, confettiEnabledLocations: m } = e;
    o.default.track(u.rMx.POGGERMODE_SETTINGS_UPDATED, {
        enabled: n,
        combos_enabled: r,
        combos_required_count: i,
        screenshake_enabled: a,
        shake_intensity: s,
        screenshake_enabled_locations: _(l, d),
        confetti_enabled: c,
        confetti_size: h,
        confetti_count: p,
        confetti_enabled_locations: _(m, f)
    });
}, c);
n.Z = h;
