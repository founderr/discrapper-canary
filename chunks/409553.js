n.d(t, {
    Z: function () {
        return x;
    }
});
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(63063),
    c = n(921869),
    s = n(514161),
    l = n(981631),
    a = n(388032),
    d = n(932508);
function u() {
    return (0, o.jsxs)(s.yC, {
        children: [
            (0, o.jsx)(s.Ux, {
                text: a.intl.string(a.t['VU+McX']),
                children: (0, o.jsx)(r.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, o.jsx)(s.Ux, {
                text: a.intl.string(a.t.zMpLER),
                children: (0, o.jsx)(r.GameControllerIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function x(e) {
    let { onContinue: t, onClose: n } = e,
        r = i.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
    return (0, o.jsx)(c.m, {
        platformType: l.ABu.XBOX,
        headerConnect: a.intl.string(a.t['7FGNVF']),
        headerReconnect: a.intl.string(a.t.z3rAho),
        body: a.intl.string(a.t.oJquQU),
        learnMoreLink: r,
        onClose: n,
        onContinue: t,
        img: (0, o.jsx)('img', {
            src: d,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: (0, o.jsx)(u, {})
    });
}
