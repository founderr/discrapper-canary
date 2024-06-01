"use strict";
n.r(t), n.d(t, {
  GuildProductListingPublicCard: function() {
    return p
  }
});
var s = n("735250");
n("470079");
var a = n("399606"),
  l = n("166081"),
  i = n("54797"),
  r = n("674180"),
  o = n("430824"),
  u = n("572004"),
  d = n("267101"),
  c = n("863663"),
  E = n("676651"),
  f = n("623488"),
  _ = n("942833"),
  T = n("391181"),
  m = n("964793"),
  I = n("226060"),
  N = n("981631");

function p(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: p,
    shouldShowFullDescriptionButton: S = !0,
    hideRoleTag: C = !1,
    lineClamp: A = 1,
    cardWidth: h,
    cardHeight: g,
    thumbnailHeight: M,
    descriptionTextVariant: O = "text-sm/normal",
    showOpaqueBackground: R = !1
  } = e, v = (0, a.useStateFromStores)([o.default], () => o.default.getGuild(n), [n]), L = (0, a.useStateFromStores)([o.default], () => {
    var e;
    return o.default.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : N.EMPTY_STRING_SNOWFLAKE_ID)
  }), x = (0, l.useListingThumbnailUrl)(t, 600), P = (0, _.useProductType)(t), D = (0, d.useCanManageGuildProduct)(v), {
    shouldHideGuildPurchaseEntryPoints: y
  } = (0, r.useShouldHideGuildPurchaseEntryPoints)(n), U = (0, _.usePrice)(t);
  if (null == v || y) return null;
  let j = () => (0, m.openGuildProductInfoModal)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: p
    }),
    b = (0, s.jsx)(T.GuildProductListingPopout, {
      product: t,
      guildId: n,
      showEditProduct: D,
      showUnpublishProduct: !1,
      showCopyLink: !0,
      showTestDownload: !1,
      showDeleteProduct: !1,
      showReportProduct: !0,
      onEditProduct: D ? () => {
        E.openModal(v.id, t.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, i.openGuildShopReportModal)({
          listing: t
        })
      },
      onCopyProductLink: () => {
        (0, u.copy)((0, c.getGuildProductListingUrl)(n, t.id))
      },
      onTestDownload: () => {}
    });
  return (0, s.jsx)(f.default, {
    imageUrl: x,
    name: t.name,
    description: t.description,
    formattedPrice: U,
    role: L,
    ctaComponent: (0, s.jsx)(I.default, {
      guildId: n,
      guildProductListingId: t.id,
      sourceAnalyticsLocations: p
    }),
    productType: P,
    shouldShowFullDescriptionButton: S,
    onShowFullDescription: j,
    onTapCard: j,
    actionMenu: b,
    showOpaqueBackground: R,
    hideRoleTag: C,
    lineClamp: A,
    cardWidth: h,
    cardHeight: g,
    thumbnailHeight: M,
    descriptionTextVariant: O,
    isDraft: !t.published
  }, t.id)
}