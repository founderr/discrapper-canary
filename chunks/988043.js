n.d(t, {
    Z: function () {
        return C;
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
    h = n(51331),
    g = n(922628),
    p = n(726985),
    x = n(736530),
    S = n(981631),
    T = n(388032);
function C() {
    let e = (0, u.is)(),
        t = (0, u.c_)(),
        n = d.h2.useSetting().includes(e),
        C = d.iG.useSetting(),
        E = s.useCallback(
            (t) => {
                let n = new Set((0, c.YK)());
                t ? n.delete(e) : n.add(e), d.h2.updateSetting(Array.from(n));
            },
            [e]
        );
    function _(e, t) {
        a.default.track(S.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let I = (e) => {
        (0, g.V)({
            header: T.intl.string(T.t['uUr+GR']),
            body: T.intl.string(T.t.hjGJBg),
            confirmText: T.intl.string(T.t.gm1Ven),
            cancelText: T.intl.string(T.t.p89ACg),
            confirmButtonColor: r.Button.Colors.BRAND,
            onConfirm: () => {
                d.iG.updateSetting(e), _(e, !1);
            },
            onCancel: () => {
                d.iG.updateSetting(e), d.h2.updateSetting(e ? o.default.keys(l.Z.getGuilds()) : []), _(e, !0);
            }
        });
    };
    return (0, i.jsx)(m.U, {
        setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            e === x.T
                ? (0, i.jsx)(h.Z, {
                      title: T.intl.string(T.t.RAQUSE),
                      note: T.intl.string(T.t.wbYDfX),
                      value: !C,
                      onChange: (e) => {
                          I(!e);
                      }
                  })
                : (0, i.jsx)(h.Z, {
                      title: T.intl.string(T.t.RAQUSE),
                      note: t ? T.intl.string(T.t.V0ka0d) : T.intl.string(T.t.G7c3Xl),
                      value: !n,
                      onChange: E
                  })
    });
}
