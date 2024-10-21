t.d(n, {
    Z: function () {
        return d;
    }
});
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(63063),
    s = t(921869),
    c = t(514161),
    l = t(981631),
    a = t(689938),
    C = t(233820);
function u() {
    return (0, o.jsx)(c.yC, {
        children: (0, o.jsx)(c.Ux, {
            text: a.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
            children: (0, o.jsx)(i.TvIcon, {
                size: 'md',
                color: 'currentColor'
            })
        })
    });
}
function d(e) {
    let { onContinue: n, onClose: t } = e,
        i = r.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION);
    return (0, o.jsx)(s.m, {
        platformType: l.ABu.CRUNCHYROLL,
        headerConnect: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
        body: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
        learnMoreLink: i,
        onClose: t,
        onContinue: n,
        img: (0, o.jsx)('img', {
            src: C,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: (0, o.jsx)(u, {})
    });
}
