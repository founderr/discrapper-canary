r.d(n, {
    t: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-03_valorant_admin_signup',
    label: 'Valorant Admin Signup',
    defaultConfig: { showAdminSignup: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show admin signup',
            config: { showAdminSignup: !0 }
        }
    ]
});
function a(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { showAdminSignup: r } = i.getCurrentConfig({ location: e }, { autoTrackExposure: n });
    return r;
}
