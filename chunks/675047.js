t.d(s, {
    Z: function () {
        return O;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(409700),
    r = t(977059),
    o = t(630759),
    l = t(398826),
    c = t(10298),
    d = t(623196),
    _ = t(993315),
    u = t(883382),
    E = t(940021),
    T = t(402583),
    S = t(230341),
    I = t(893996),
    N = t(266132),
    m = t(726985),
    A = t(689938);
function C() {
    let { enabled: e } = (0, r.S)({ location: 'UserSettingsDataAndPrivacy' });
    return e
        ? (0, n.jsxs)(I.Z, {
              title: A.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
              description: A.Z.Messages.USER_SETTINGS_VOICE_PRIVACY_NOTE_V2.format({ helpArticle: (0, o.uV)() }),
              webSetting: m.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
              children: [(0, n.jsx)(S.Z, {}), (0, n.jsx)(N.Z, {})]
          })
        : null;
}
function g() {
    return (0, n.jsx)(I.Z, {
        title: A.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
        webSetting: m.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, n.jsx)(d.Z, {})
    });
}
function h() {
    return (0, n.jsxs)(I.Z, {
        title: A.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
        webSetting: m.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [(0, n.jsx)(T.Z, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {})]
    });
}
function O() {
    return (
        a.useEffect(() => {
            (0, i.I)(), (0, l.A)();
        }, []),
        (0, n.jsxs)(c.N, {
            header: A.Z.Messages.DATA_AND_PRIVACY,
            children: [(0, n.jsx)(h, {}), (0, n.jsx)(g, {}), (0, n.jsx)(C, {})]
        })
    );
}
