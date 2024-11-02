e.d(t, {
    Z: function () {
        return C;
    }
});
var o = e(200651);
e(192379);
var i = e(481060),
    r = e(63063),
    c = e(921869),
    l = e(514161),
    s = e(981631),
    a = e(388032),
    u = e(233820);
function d() {
    return (0, o.jsx)(l.yC, {
        children: (0, o.jsx)(l.Ux, {
            text: a.intl.string(a.t['2TXHQU']),
            children: (0, o.jsx)(i.TvIcon, {
                size: 'md',
                color: 'currentColor'
            })
        })
    });
}
function C(n) {
    let { onContinue: t, onClose: e } = n,
        i = r.Z.getArticleURL(s.BhN.CRUNCHYROLL_CONNECTION);
    return (0, o.jsx)(c.m, {
        platformType: s.ABu.CRUNCHYROLL,
        headerConnect: a.intl.string(a.t['Da+3ND']),
        body: a.intl.string(a.t.MaPpPD),
        learnMoreLink: i,
        onClose: e,
        onContinue: t,
        img: (0, o.jsx)('img', {
            src: u,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: (0, o.jsx)(d, {})
    });
}
