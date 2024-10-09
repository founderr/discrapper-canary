t.d(s, {
    Z: function () {
        return h;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(409700),
    r = t(977059),
    o = t(398826),
    l = t(10298),
    c = t(623196),
    d = t(993315),
    _ = t(883382),
    u = t(940021),
    E = t(402583),
    T = t(230341),
    S = t(893996),
    I = t(266132),
    N = t(726985),
    C = t(689938);
function A() {
    let { enabled: e } = (0, r.S)({ location: 'UserSettingsDataAndPrivacy' });
    return e
        ? (0, n.jsxs)(S.Z, {
              title: C.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
              webSetting: N.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
              children: [(0, n.jsx)(T.Z, {}), (0, n.jsx)(I.Z, {})]
          })
        : null;
}
function m() {
    return (0, n.jsx)(S.Z, {
        title: C.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
        webSetting: N.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, n.jsx)(c.Z, {})
    });
}
function g() {
    return (0, n.jsxs)(S.Z, {
        title: C.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
        webSetting: N.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [(0, n.jsx)(E.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {}), (0, n.jsx)(d.Z, {})]
    });
}
function h() {
    return (
        a.useEffect(() => {
            (0, i.I)(), (0, o.A)();
        }, []),
        (0, n.jsxs)(l.N, {
            header: C.Z.Messages.DATA_AND_PRIVACY,
            children: [(0, n.jsx)(g, {}), (0, n.jsx)(m, {}), (0, n.jsx)(A, {})]
        })
    );
}
