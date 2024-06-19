n.d(t, {
  H: function() {
    return C
  }
});
var s = n(735250);
n(470079);
var i = n(399606),
  l = n(166081),
  a = n(54797),
  r = n(674180),
  o = n(430824),
  c = n(572004),
  u = n(267101),
  d = n(863663),
  E = n(676651),
  _ = n(623488),
  I = n(942833),
  T = n(391181),
  N = n(964793),
  m = n(226060),
  h = n(981631);

function C(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: C,
    shouldShowFullDescriptionButton: S = !0,
    hideRoleTag: A = !1,
    lineClamp: p = 1,
    cardWidth: g,
    cardHeight: f,
    thumbnailHeight: O,
    descriptionTextVariant: R = "text-sm/normal",
    showOpaqueBackground: M = !1
  } = e, x = (0, i.e7)([o.Z], () => o.Z.getGuild(n), [n]), v = (0, i.e7)([o.Z], () => {
    var e;
    return o.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : h.lds)
  }), L = (0, l.U)(t, 600), Z = (0, I.C)(t), P = (0, u.SO)(x), {
    shouldHideGuildPurchaseEntryPoints: D
  } = (0, r.uP)(n), j = (0, I.k)(t);
  if (null == x || D) return null;
  let U = () => (0, N.e)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: C
    }),
    b = (0, s.jsx)(T.m, {
      product: t,
      guildId: n,
      showEditProduct: P,
      showUnpublishProduct: !1,
      showCopyLink: !0,
      showTestDownload: !1,
      showDeleteProduct: !1,
      showReportProduct: !0,
      onEditProduct: P ? () => {
        E.h(x.id, t.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, a.x)({
          listing: t
        })
      },
      onCopyProductLink: () => {
        (0, c.JG)((0, d.ar)(n, t.id))
      },
      onTestDownload: () => {}
    });
  return (0, s.jsx)(_.Z, {
    imageUrl: L,
    name: t.name,
    description: t.description,
    formattedPrice: j,
    role: v,
    ctaComponent: (0, s.jsx)(m.Z, {
      guildId: n,
      guildProductListingId: t.id,
      sourceAnalyticsLocations: C
    }),
    productType: Z,
    shouldShowFullDescriptionButton: S,
    onShowFullDescription: U,
    onTapCard: U,
    actionMenu: b,
    showOpaqueBackground: M,
    hideRoleTag: A,
    lineClamp: p,
    cardWidth: g,
    cardHeight: f,
    thumbnailHeight: O,
    descriptionTextVariant: R,
    isDraft: !t.published
  }, t.id)
}