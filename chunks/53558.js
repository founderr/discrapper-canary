n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(970321),
    o = n(283836),
    l = n(621853),
    u = n(475413),
    c = n(388032);
function d(e) {
    let { user: t, onClick: n, ...i } = e;
    return (
        (0, o.q)(t.id),
        (0, r.jsx)(u.tG, {
            action: 'PRESS_APP_STOREFRONT',
            icon: a.ShopIcon,
            text: c.intl.string(c.t.V7j5aW),
            color: a.ButtonColors.BRAND,
            themeColor: 'none',
            onClick: n,
            ...i
        })
    );
}
function f(e) {
    var t;
    let { user: o, guildId: u, ...c } = e,
        f = (0, i.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getUserProfile(o.id)) || void 0 === e ? void 0 : e.application;
        }),
        _ = (0, s.R)(null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : '');
    return null != f && _
        ? (0, r.jsx)(d, {
              user: o,
              guildId: u,
              onClick: () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('29549'), n.e('31605'), n.e('41309'), n.e('77803'), n.e('30840')]).then(n.bind(n, 7225));
                      return (t) =>
                          (0, r.jsx)(e, {
                              appId: f.id,
                              guildId: u,
                              ...t
                          });
                  });
              },
              ...c
          })
        : null;
}
