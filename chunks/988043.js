n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(430824),
    a = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(695346),
    u = n(639814),
    m = n(838436),
    g = n(51331),
    h = n(922628),
    p = n(726985),
    x = n(736530),
    T = n(981631),
    S = n(388032);
function _() {
    let e = (0, u.is)(),
        t = (0, u.c_)(),
        n = d.h2.useSetting().includes(e),
        _ = d.iG.useSetting(),
        E = s.useCallback(
            (t) => {
                let n = (0, c.YK)();
                t ? n.delete(e) : n.add(e), d.h2.updateSetting(Array.from(n));
            },
            [e]
        );
    function C(e, t) {
        a.default.track(T.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let f = (e) => {
        (0, h.V)({
            header: S.intl.string(S.t['uUr+GR']),
            body: S.intl.string(S.t.hjGJBg),
            confirmText: S.intl.string(S.t.gm1Ven),
            cancelText: S.intl.string(S.t.p89ACg),
            confirmButtonColor: r.Button.Colors.BRAND,
            onConfirm: () => {
                d.iG.updateSetting(e), C(e, !1);
            },
            onCancel: () => {
                d.iG.updateSetting(e), d.h2.updateSetting(e ? o.default.keys(l.Z.getGuilds()) : []), C(e, !0);
            }
        });
    };
    return (0, i.jsx)(m.U, {
        setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            e === x.T
                ? (0, i.jsx)(g.Z, {
                      title: S.intl.string(S.t.RAQUSE),
                      note: S.intl.string(S.t.wbYDfX),
                      value: !_,
                      onChange: (e) => {
                          f(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: S.intl.string(S.t.RAQUSE),
                      note: t ? S.intl.string(S.t.V0ka0d) : S.intl.string(S.t.G7c3Xl),
                      value: !n,
                      onChange: E
                  })
    });
}
