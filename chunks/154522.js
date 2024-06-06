"use strict";
s.r(t), s.d(t, {
  GuildProductCardGrid: function() {
    return x
  }
});
var i = s("735250"),
  l = s("470079"),
  r = s("120356"),
  a = s.n(r),
  n = s("392711"),
  d = s.n(n),
  o = s("481060"),
  u = s("100527"),
  c = s("267101"),
  C = s("675297"),
  _ = s("891561"),
  f = s("333866"),
  h = s("689938"),
  S = s("204982");

function x(e) {
  let {
    guildId: t,
    productId: s
  } = e, {
    listingsLoaded: r
  } = (0, c.useFetchGuildProductListingsForGuild)(t), n = (0, c.useGuildProductsForGuild)(t), x = l.useRef(null), {
    sortOption: I
  } = (0, _.useGuildProductsSortOptionContext)(), L = l.useMemo(() => (function(e, t) {
    let s, i;
    switch (t) {
      case f.GuildProductSortOptions.NAME:
        s = e => e.name.toLowerCase(), i = "asc";
        break;
      case f.GuildProductSortOptions.PRICE_ASC:
        s = "price_tier", i = "asc";
        break;
      case f.GuildProductSortOptions.PRICE_DESC:
        s = "price_tier", i = "desc";
        break;
      case f.GuildProductSortOptions.NEWEST_ARRIVALS:
        s = "published_at", i = "desc";
        break;
      default:
        return e
    }
    return d().orderBy(e, [s], [i])
  })(n, I), [n, I]);
  return r ? (0, i.jsx)("ul", {
    className: S.cardContainer,
    "aria-label": h.default.Messages.GUILD_SHOP_PRODUCTS_A11Y_LABEL,
    children: L.map(e => (0, i.jsx)("li", {
      className: S.card,
      children: (0, i.jsx)("div", {
        className: a()(S.cardContent, {
          [S.selectedCard]: e.id === s
        }),
        ref: e.id === s ? x : void 0,
        onLoad: () => {
          let t = x.current;
          null != t && e.id === s && (t.scrollIntoView({
            behavior: "smooth",
            block: "center"
          }), setTimeout(() => {
            t.classList.remove(S.selectedCard)
          }, 2e3))
        },
        children: (0, i.jsx)(C.GuildProductListingPublicCard, {
          guildProductListing: e,
          guildId: t,
          location: u.default.GUILD_SHOP_PAGE,
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
  }) : (0, i.jsx)(o.Spinner, {})
}