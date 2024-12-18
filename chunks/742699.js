e.d(t, {
    Z: function () {
        return d;
    }
});
var o = e(200651),
    i = e(192379),
    r = e(481060),
    c = e(63063),
    s = e(921869),
    l = e(981631),
    a = e(388032),
    u = e(233820);
function d(n) {
    let { onContinue: t, onClose: e } = n,
        d = c.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION),
        C = i.useMemo(
            () => [
                {
                    label: a.intl.string(a.t['2TXHQU']),
                    icon: r.TvIcon
                }
            ],
            []
        );
    return (0, o.jsx)(s.m, {
        platformType: l.ABu.CRUNCHYROLL,
        headerConnect: a.intl.string(a.t['Da+3ND']),
        body: a.intl.string(a.t.MaPpPD),
        learnMoreLink: d,
        onClose: e,
        onContinue: t,
        img: (0, o.jsx)('img', {
            src: u,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: C
    });
}
