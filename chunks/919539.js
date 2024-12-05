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
    o = n(63063),
    c = n(709054),
    d = n(88658),
    u = n(695346),
    m = n(639814),
    g = n(838436),
    h = n(51331),
    p = n(922628),
    x = n(526761),
    T = n(726985),
    S = n(736530),
    _ = n(981631),
    E = n(388032);
function C() {
    let e = (0, m.is)(),
        t = (0, m.c_)(),
        n = u.iG.useSetting(),
        C = u.h2.useSetting().includes(e),
        f = u.mX.useSetting(),
        I = u.zA.useSetting().includes(e),
        N = s.useCallback(
            (t) => {
                let n = (0, d.gl)();
                t ? n.delete(e) : n.add(e), u.zA.updateSetting(Array.from(n));
            },
            [e]
        );
    function A(e, t) {
        a.default.track(_.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    return (0, i.jsx)(g.U, {
        setting: T.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: x.to.MESSAGE_REQUESTS_V2,
        children:
            e === S.T
                ? (0, i.jsx)(h.Z, {
                      title: E.intl.string(E.t['3o2ojo']),
                      value: !n && !f,
                      onChange: () => {
                          var e;
                          return (
                              (e = !f),
                              void (0, p.V)({
                                  header: E.intl.string(E.t.yAfu1t),
                                  body: E.intl.string(E.t['Ry2z7+']),
                                  confirmText: E.intl.string(E.t.gm1Ven),
                                  cancelText: E.intl.string(E.t.p89ACg),
                                  confirmButtonColor: r.Button.Colors.BRAND,
                                  onConfirm: () => {
                                      u.mX.updateSetting(e), A(e, !1);
                                  },
                                  onCancel: () => {
                                      u.mX.updateSetting(e), u.zA.updateSetting(e ? c.default.keys(l.Z.getGuilds()) : []), A(e, !0);
                                  }
                              })
                          );
                      },
                      disabled: n,
                      note: E.intl.format(E.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(_.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(h.Z, {
                      title: E.intl.string(E.t['3o2ojo']),
                      value: !I,
                      onChange: N,
                      disabled: C,
                      note: t ? E.intl.format(E.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(_.BhN.MESSAGE_REQUESTS) }) : E.intl.format(E.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(_.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
