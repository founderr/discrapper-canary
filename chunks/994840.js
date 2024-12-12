r.d(n, {
    jZ: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-03_valorant_user_signup',
    label: 'Valorant User Signup',
    defaultConfig: { showUserSignup: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show user signup',
            config: { showUserSignup: !0 }
        }
    ]
});
function a(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { showUserSignup: r } = i.getCurrentConfig({ location: e }, { autoTrackExposure: n });
    return r;
}
