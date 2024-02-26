"use strict";
n.r(t), n.d(t, {
  GuildProductListingPublicCard: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var l = n("65597"),
  a = n("801765"),
  i = n("228035"),
  r = n("465869"),
  o = n("305961"),
  u = n("306160"),
  d = n("442379"),
  c = n("757515"),
  E = n("727411"),
  f = n("492724"),
  _ = n("928576"),
  T = n("739726"),
  I = n("358404"),
  m = n("875746"),
  N = n("49111");

function p(e) {
  var t;
  let {
    guildProductListing: n,
    guildId: p,
    location: S,
    shouldShowFullDescriptionButton: A = !0,
    hideRoleTag: C = !1,
    lineClamp: h = 1,
    cardWidth: g,
    cardHeight: M,
    thumbnailHeight: O,
    descriptionTextVariant: R = "text-sm/normal",
    showOpaqueBackground: L = !1
  } = e, v = (0, l.default)([o.default], () => o.default.getGuild(p), [p]), P = null == v ? void 0 : v.roles[null !== (t = null == n ? void 0 : n.role_id) && void 0 !== t ? t : N.EMPTY_STRING_GUILD_ROLE_ID], D = (0, a.useListingThumbnailUrl)(n, 600), x = (0, _.useProductType)(n), y = (0, d.useCanManageGuildProduct)(v), {
    shouldHideGuildPurchaseEntryPoints: U
  } = (0, r.useShouldHideGuildPurchaseEntryPoints)(p), j = (0, _.usePrice)(n);
  if (null == v || U) return null;
  let b = () => (0, I.openGuildProductInfoModal)({
      guildId: p,
      guildProductListingId: n.id,
      analyticsLocation: S
    }),
    G = (0, s.jsx)(T.GuildProductListingPopout, {
      product: n,
      guildId: p,
      showEditProduct: y,
      showUnpublishProduct: !1,
      showCopyLink: !0,
      showTestDownload: !1,
      showDeleteProduct: !1,
      showReportProduct: !0,
      onEditProduct: y ? () => {
        E.openModal(v.id, n.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, i.openGuildShopReportModal)({
          listing: n
        })
      },
      onCopyProductLink: () => {
        (0, u.copy)((0, c.getGuildProductListingUrl)(p, n.id))
      },
      onTestDownload: () => {}
    });
  return (0, s.jsx)(f.default, {
    imageUrl: D,
    name: n.name,
    description: n.description,
    formattedPrice: j,
    role: P,
    ctaComponent: (0, s.jsx)(m.default, {
      guildId: p,
      guildProductListingId: n.id,
      sourceAnalyticsLocations: S
    }),
    productType: x,
    shouldShowFullDescriptionButton: A,
    onShowFullDescription: b,
    onTapCard: b,
    actionMenu: G,
    showOpaqueBackground: L,
    hideRoleTag: C,
    lineClamp: h,
    cardWidth: g,
    cardHeight: M,
    thumbnailHeight: O,
    descriptionTextVariant: R,
    isDraft: !n.published
  }, n.id)
}