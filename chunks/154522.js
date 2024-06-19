t.d(s, {
  Q: function() {
    return L
  }
});
var n = t(735250),
  r = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(392711),
  a = t.n(o),
  c = t(481060),
  d = t(100527),
  C = t(267101),
  u = t(675297),
  _ = t(891561),
  x = t(333866),
  I = t(689938),
  h = t(169021);

function L(e) {
  let {
    guildId: s,
    productId: t
  } = e, {
    listingsLoaded: i
  } = (0, C.eD)(s), o = (0, C.ue)(s), L = r.useRef(null), {
    sortOption: E
  } = (0, _.s)(), m = r.useMemo(() => (function(e, s) {
    let t, n;
    switch (s) {
      case x.zJ.NAME:
        t = e => e.name.toLowerCase(), n = "asc";
        break;
      case x.zJ.PRICE_ASC:
        t = "price_tier", n = "asc";
        break;
      case x.zJ.PRICE_DESC:
        t = "price_tier", n = "desc";
        break;
      case x.zJ.NEWEST_ARRIVALS:
        t = "published_at", n = "desc";
        break;
      default:
        return e
    }
    return a().orderBy(e, [t], [n])
  })(o, E), [o, E]);
  return i ? (0, n.jsx)("ul", {
    className: h.cardContainer,
    "aria-label": I.Z.Messages.GUILD_SHOP_PRODUCTS_A11Y_LABEL,
    children: m.map(e => (0, n.jsx)("li", {
      className: h.card,
      children: (0, n.jsx)("div", {
        className: l()(h.cardContent, {
          [h.selectedCard]: e.id === t
        }),
        ref: e.id === t ? L : void 0,
        onLoad: () => {
          let s = L.current;
          null != s && e.id === t && (s.scrollIntoView({
            behavior: "smooth",
            block: "center"
          }), setTimeout(() => {
            s.classList.remove(h.selectedCard)
          }, 2e3))
        },
        children: (0, n.jsx)(u.H, {
          guildProductListing: e,
          guildId: s,
          location: d.Z.GUILD_SHOP_PAGE,
          shouldShowFullDescriptionButton: !1,
          hideRoleTag: !0,
          lineClamp: 2,
          cardWidth: 332,
          cardHeight: 347,
          thumbnailHeight: 187,
          descriptionTextVariant: "text-xs/normal",
          showOpaqueBackground: !0
        }, e.id)
      }, e.id)
    }, e.id))
  }) : (0, n.jsx)(c.Spinner, {})
}