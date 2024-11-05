n.d(t, {
    H: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(166081),
    a = n(54797),
    o = n(674180),
    s = n(430824),
    c = n(572004),
    d = n(267101),
    u = n(863663),
    m = n(676651),
    h = n(623488),
    f = n(942833),
    p = n(391181),
    g = n(964793),
    _ = n(226060),
    C = n(981631);
function E(e) {
    let { guildProductListing: t, guildId: n, location: E, shouldShowFullDescriptionButton: I = !0, hideRoleTag: x = !1, lineClamp: v = 1, cardWidth: N, cardHeight: T, thumbnailHeight: S, descriptionTextVariant: b = 'text-sm/normal', showOpaqueBackground: A = !1 } = e,
        j = (0, r.e7)([s.Z], () => s.Z.getGuild(n), [n]),
        Z = (0, r.e7)([s.Z], () => {
            var e;
            return s.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : C.lds);
        }),
        R = (0, l.U)(t, 600),
        P = (0, f.C)(t),
        y = (0, d.SO)(j),
        { shouldHideGuildPurchaseEntryPoints: L } = (0, o.uP)(n),
        O = (0, f.k)(t);
    if (null == j || L) return null;
    let M = () =>
            (0, g.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: E
            }),
        k = (0, i.jsx)(p.m, {
            product: t,
            guildId: n,
            showEditProduct: y,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: y
                ? () => {
                      m.h(j.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, a.x)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, c.JG)((0, u.ar)(n, t.id));
            },
            onTestDownload: () => {}
        });
    return (0, i.jsx)(
        h.Z,
        {
            imageUrl: R,
            name: t.name,
            description: t.description,
            formattedPrice: O,
            role: Z,
            ctaComponent: (0, i.jsx)(_.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: E
            }),
            productType: P,
            shouldShowFullDescriptionButton: I,
            onShowFullDescription: M,
            onTapCard: M,
            actionMenu: k,
            showOpaqueBackground: A,
            hideRoleTag: x,
            lineClamp: v,
            cardWidth: N,
            cardHeight: T,
            thumbnailHeight: S,
            descriptionTextVariant: b,
            isDraft: !t.published
        },
        t.id
    );
}
