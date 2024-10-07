n.d(t, {
    H: function () {
        return C;
    }
});
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(166081),
    l = n(54797),
    r = n(674180),
    o = n(430824),
    c = n(572004),
    d = n(267101),
    u = n(863663),
    _ = n(676651),
    E = n(623488),
    I = n(942833),
    m = n(391181),
    T = n(964793),
    N = n(226060),
    h = n(981631);
function C(e) {
    let { guildProductListing: t, guildId: n, location: C, shouldShowFullDescriptionButton: p = !0, hideRoleTag: f = !1, lineClamp: A = 1, cardWidth: g, cardHeight: S, thumbnailHeight: M, descriptionTextVariant: O = 'text-sm/normal', showOpaqueBackground: x = !1 } = e,
        R = (0, a.e7)([o.Z], () => o.Z.getGuild(n), [n]),
        v = (0, a.e7)([o.Z], () => {
            var e;
            return o.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : h.lds);
        }),
        L = (0, s.U)(t, 600),
        Z = (0, I.C)(t),
        P = (0, d.SO)(R),
        { shouldHideGuildPurchaseEntryPoints: D } = (0, r.uP)(n),
        b = (0, I.k)(t);
    if (null == R || D) return null;
    let j = () =>
            (0, T.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: C
            }),
        U = (0, i.jsx)(m.m, {
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
                      _.h(R.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, l.x)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, c.JG)((0, u.ar)(n, t.id));
            },
            onTestDownload: () => {}
        });
    return (0, i.jsx)(
        E.Z,
        {
            imageUrl: L,
            name: t.name,
            description: t.description,
            formattedPrice: b,
            role: v,
            ctaComponent: (0, i.jsx)(N.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: C
            }),
            productType: Z,
            shouldShowFullDescriptionButton: p,
            onShowFullDescription: j,
            onTapCard: j,
            actionMenu: U,
            showOpaqueBackground: x,
            hideRoleTag: f,
            lineClamp: A,
            cardWidth: g,
            cardHeight: S,
            thumbnailHeight: M,
            descriptionTextVariant: O,
            isDraft: !t.published
        },
        t.id
    );
}
