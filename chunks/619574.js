r.d(n, {
    e: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-04_genshin_admin_signup',
    label: 'Genshin Admin Signup',
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
