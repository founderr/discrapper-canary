n.d(t, {
    H: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
var a = n(399606),
    s = n(166081),
    r = n(54797),
    l = n(674180),
    o = n(430824),
    c = n(572004),
    u = n(267101),
    d = n(863663),
    _ = n(676651),
    E = n(623488),
    I = n(942833),
    m = n(391181),
    f = n(964793),
    T = n(226060),
    h = n(981631);
function N(e) {
    let { guildProductListing: t, guildId: n, location: N, shouldShowFullDescriptionButton: p = !0, hideRoleTag: C = !1, lineClamp: g = 1, cardWidth: S, cardHeight: A, thumbnailHeight: x, descriptionTextVariant: R = 'text-sm/normal', showOpaqueBackground: v = !1 } = e,
        O = (0, a.e7)([o.Z], () => o.Z.getGuild(n), [n]),
        M = (0, a.e7)([o.Z], () => {
            var e;
            return o.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : h.lds);
        }),
        L = (0, s.U)(t, 600),
        Z = (0, I.C)(t),
        b = (0, u.SO)(O),
        { shouldHideGuildPurchaseEntryPoints: P } = (0, l.uP)(n),
        D = (0, I.k)(t);
    if (null == O || P) return null;
    let j = () =>
            (0, f.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: N
            }),
        U = (0, i.jsx)(m.m, {
            product: t,
            guildId: n,
            showEditProduct: b,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: b
                ? () => {
                      _.h(O.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, r.x)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, c.JG)((0, d.ar)(n, t.id));
            },
            onTestDownload: () => {}
        });
    return (0, i.jsx)(
        E.Z,
        {
            imageUrl: L,
            name: t.name,
            description: t.description,
            formattedPrice: D,
            role: M,
            ctaComponent: (0, i.jsx)(T.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: N
            }),
            productType: Z,
            shouldShowFullDescriptionButton: p,
            onShowFullDescription: j,
            onTapCard: j,
            actionMenu: U,
            showOpaqueBackground: v,
            hideRoleTag: C,
            lineClamp: g,
            cardWidth: S,
            cardHeight: A,
            thumbnailHeight: x,
            descriptionTextVariant: R,
            isDraft: !t.published
        },
        t.id
    );
}
