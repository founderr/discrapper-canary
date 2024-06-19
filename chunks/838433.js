u.r(e), u.d(e, {
  openGuildProductLink: function() {
    return c
  }
});
var n = u(735250);
u(470079);
var i = u(481060),
  l = u(336197),
  d = u(430824),
  r = u(240864),
  o = u(981631);

function c(t, e) {
  var c;
  let a = d.Z.getGuild(t);
  r.Z.getGuildProductFetchState(e) === r.M.FETCHED && (null === (c = r.Z.getGuildProduct(e)) || void 0 === c ? void 0 : c.published) !== !0 && null != a ? (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([u.e("99387"), u.e("29396")]).then(u.bind(u, 513239));
    return e => (0, n.jsx)(t, {
      ...e
    })
  }) : (null == a ? void 0 : a.hasFeature(o.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? (0, l.Z)(o.Z5c.GUILD_PRODUCT(t, e)) : (0, l.Z)(o.Z5c.CHANNEL(t))
}