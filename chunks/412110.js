n.d(t, {
    V: function () {
        return s;
    }
});
var A = n(200651);
n(192379);
var r = n(952265),
    a = n(776045),
    l = n(871388),
    i = n(981631),
    o = n(388032);
function s(e, t, s) {
    var d, c, u;
    switch (e.code) {
        case i.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, l.B)(o.intl.string(o.t['04e8bG']), o.t.uVN1Y2, a.IconVariant.DANGER);
            break;
        case i.evJ.TWO_FA_NOT_ENABLED:
            (0, l.B)(o.intl.string(o.t['/yBjZ2']), o.t.kZ6Tgo, a.IconVariant.WARNING);
            break;
        case i.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, l.B)(o.intl.string(o.t.MeXDxs), o.t['5q146O'], a.IconVariant.WARNING);
            break;
        case i.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (d = t),
                (0, r.ZD)(async () => {
                    let { default: e } = await n.e('31835').then(n.bind(n, 393809));
                    return (t) =>
                        (0, A.jsx)(e, {
                            guildId: d,
                            ...t
                        });
                });
            break;
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, l.B)(o.intl.string(o.t['4hWo0N']), o.t.Zkhwe3, a.IconVariant.WARNING);
            break;
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let g, h;
            null != s ? ((g = o.t.j2VMk5), (h = { url: i.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (g = o.t.ZVV1go), (0, l.B)(o.intl.string(o.t['+CT/gY']), g, a.IconVariant.WARNING, h);
            break;
        default:
            let p = null !== (u = e.getFirstFieldErrorMessage(['published'])) && void 0 !== u ? u : (null === (c = e.hasFieldErrors) || void 0 === c ? void 0 : c.call(e)) ? void 0 : e.message;
            if (null != p) (0, l.B)(o.intl.string(o.t.bvWf8f), p, a.IconVariant.WARNING);
    }
}
