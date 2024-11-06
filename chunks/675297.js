n.d(t, {
    H: function () {
        return C;
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
    u = n(267101),
    d = n(863663),
    m = n(676651),
    h = n(623488),
    f = n(942833),
    p = n(391181),
    g = n(964793),
    _ = n(226060),
    E = n(981631);
function C(e) {
    let { guildProductListing: t, guildId: n, location: C, shouldShowFullDescriptionButton: I = !0, hideRoleTag: x = !1, lineClamp: N = 1, cardWidth: v, cardHeight: T, thumbnailHeight: S, descriptionTextVariant: A = 'text-sm/normal', showOpaqueBackground: b = !1 } = e,
        j = (0, r.e7)([s.Z], () => s.Z.getGuild(n), [n]),
        Z = (0, r.e7)([s.Z], () => {
            var e;
            return s.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : E.lds);
        }),
        R = (0, l.U)(t, 600),
        L = (0, f.C)(t),
        P = (0, u.SO)(j),
        { shouldHideGuildPurchaseEntryPoints: y } = (0, o.uP)(n),
        O = (0, f.k)(t);
    if (null == j || y) return null;
    let M = () =>
            (0, g.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: C
            }),
        k = (0, i.jsx)(p.m, {
            product: t,
            guildId: n,
            showEditProduct: P,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: P
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
                (0, c.JG)((0, d.ar)(n, t.id));
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
                sourceAnalyticsLocations: C
            }),
            productType: L,
            shouldShowFullDescriptionButton: I,
            onShowFullDescription: M,
            onTapCard: M,
            actionMenu: k,
            showOpaqueBackground: b,
            hideRoleTag: x,
            lineClamp: N,
            cardWidth: v,
            cardHeight: T,
            thumbnailHeight: S,
            descriptionTextVariant: A,
            isDraft: !t.published
        },
        t.id
    );
}
