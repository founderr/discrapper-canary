n.d(t, {
    H: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var i = n(399606),
    a = n(166081),
    o = n(54797),
    s = n(674180),
    l = n(430824),
    u = n(572004),
    c = n(267101),
    d = n(863663),
    _ = n(676651),
    E = n(623488),
    f = n(942833),
    h = n(391181),
    p = n(964793),
    m = n(226060),
    I = n(981631);
let T = 600;
function g(e) {
    let { guildProductListing: t, guildId: n, location: g, shouldShowFullDescriptionButton: S = !0, hideRoleTag: A = !1, lineClamp: v = 1, cardWidth: N, cardHeight: O, thumbnailHeight: R, descriptionTextVariant: C = 'text-sm/normal', showOpaqueBackground: y = !1 } = e,
        L = (0, i.e7)([l.Z], () => l.Z.getGuild(n), [n]),
        b = (0, i.e7)([l.Z], () => {
            var e;
            return l.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : I.lds);
        }),
        D = (0, a.U)(t, T),
        M = (0, f.C)(t),
        P = (0, c.SO)(L),
        { shouldHideGuildPurchaseEntryPoints: U } = (0, s.uP)(n),
        w = (0, f.k)(t);
    if (null == L || U) return null;
    let x = () =>
            (0, p.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: g
            }),
        G = () => {
            _.h(L.id, t.id);
        },
        k = () => {
            (0, o.x)({ listing: t });
        },
        B = () => {
            (0, u.JG)((0, d.ar)(n, t.id));
        },
        F = (0, r.jsx)(h.m, {
            product: t,
            guildId: n,
            showEditProduct: P,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: P ? G : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: k,
            onCopyProductLink: B,
            onTestDownload: () => {}
        });
    return (0, r.jsx)(
        E.Z,
        {
            imageUrl: D,
            name: t.name,
            description: t.description,
            formattedPrice: w,
            role: b,
            ctaComponent: (0, r.jsx)(m.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: g
            }),
            productType: M,
            shouldShowFullDescriptionButton: S,
            onShowFullDescription: x,
            onTapCard: x,
            actionMenu: F,
            showOpaqueBackground: y,
            hideRoleTag: A,
            lineClamp: v,
            cardWidth: N,
            cardHeight: O,
            thumbnailHeight: R,
            descriptionTextVariant: C,
            isDraft: !t.published
        },
        t.id
    );
}
