i.r(n),
    i.d(n, {
        default: function () {
            return o;
        }
    });
var e = i(200651);
i(192379);
var r = i(481060),
    l = i(923298),
    a = i(63063),
    u = i(981631),
    d = i(388032);
function o(t) {
    let { listing: n, transitionState: i, onClose: o, ...s } = t;
    return (0, e.jsx)(l.Z, {
        sku_id: n.id,
        sku_name: n.name,
        guild_id: n.guild_id,
        header: d.intl.format(d.t.avKMZm, { listingName: n.name }),
        transitionState: i,
        onClose: o,
        ...s,
        children: (0, e.jsx)(r.Text, {
            variant: 'text-md/normal',
            children: d.intl.format(d.t.jkvpmp, {
                listingName: n.name,
                monetizationTermsUrl: a.Z.getArticleURL(u.BhN.CREATOR_TERMS),
                communityGuidelinesUrl: u.EYA.GUIDELINES
            })
        })
    });
}
