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
    h = n(838436),
    g = n(51331),
    p = n(922628),
    x = n(526761),
    S = n(726985),
    T = n(736530),
    E = n(981631),
    _ = n(388032);
function C() {
    let e = (0, m.is)(),
        t = (0, m.c_)(),
        n = u.iG.useSetting(),
        C = u.h2.useSetting().includes(e),
        I = u.mX.useSetting(),
        f = u.zA.useSetting().includes(e),
        N = s.useCallback(
            (t) => {
                let n = new Set((0, d.gl)());
                t ? n.delete(e) : n.add(e), u.zA.updateSetting(Array.from(n));
            },
            [e]
        );
    function A(e, t) {
        a.default.track(E.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    return (0, i.jsx)(h.U, {
        setting: S.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: x.to.MESSAGE_REQUESTS_V2,
        children:
            e === T.T
                ? (0, i.jsx)(g.Z, {
                      title: _.intl.string(_.t['3o2ojo']),
                      value: !n && !I,
                      onChange: () => {
                          var e;
                          return (
                              (e = !I),
                              void (0, p.V)({
                                  header: _.intl.string(_.t.yAfu1t),
                                  body: _.intl.string(_.t['Ry2z7+']),
                                  confirmText: _.intl.string(_.t.gm1Ven),
                                  cancelText: _.intl.string(_.t.p89ACg),
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
                      note: _.intl.format(_.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(g.Z, {
                      title: _.intl.string(_.t['3o2ojo']),
                      value: !f,
                      onChange: N,
                      disabled: C,
                      note: t ? _.intl.format(_.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) }) : _.intl.format(_.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
