var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(626135),
    s = n(524484),
    l = n(981631);
let u = 5000;
function c(e) {
    switch (e) {
        case s.oZ.CHAT_INPUT:
            return 'chat_input';
        case s.oZ.MENTION:
            return 'mention';
        case s.oZ.VOICE_USER:
            return 'voice_user';
    }
}
function d(e) {
    switch (e) {
        case s.Hn.CHAT_INPUT:
            return 'chat_input';
        case s.Hn.MEMBER_USER:
            return 'member_user';
        case s.Hn.REACTION:
            return 'reaction';
        case s.Hn.CALL_TILE:
            return 'call_tile';
    }
}
function _(e, t) {
    return Object.entries(e)
        .filter((e) => {
            let [t, n] = e;
            return n;
        })
        .map((e) => {
            let [n] = e;
            return t(Number.parseInt(n));
        });
}
let E = a().throttle((e) => {
    let { enabled: t, combosEnabled: n, combosRequiredCount: r, screenshakeEnabled: i, shakeIntensity: a, screenshakeEnabledLocations: s, confettiEnabled: u, confettiSize: E, confettiCount: f, confettiEnabledLocations: h } = e;
    o.default.track(l.rMx.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: r,
        screenshake_enabled: i,
        shake_intensity: a,
        screenshake_enabled_locations: _(s, c),
        confetti_enabled: u,
        confetti_size: E,
        confetti_count: f,
        confetti_enabled_locations: _(h, d)
    });
}, u);
t.Z = E;
