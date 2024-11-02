e.d(t, {
    A: function () {
        return f;
    }
});
var i = e(200651);
e(192379);
var o = e(362470),
    r = e(961842),
    l = e(63063),
    c = e(921869),
    s = e(514161),
    a = e(981631),
    d = e(388032),
    u = e(913045);
function C() {
    let n = [d.intl.string(d.t.xBZGTE), d.intl.string(d.t.z8Ude3)],
        t = [d.intl.string(d.t.z8Ude3)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.yC, {
                children: (0, i.jsx)(s.pT, {
                    icon: (0, i.jsx)(r.Z, {}),
                    title: d.intl.string(d.t.oElqNz),
                    bulletPoints: n
                })
            }),
            (0, i.jsx)(s.yC, {
                children: (0, i.jsx)(s.pT, {
                    icon: (0, i.jsx)(o.Z, {}),
                    title: d.intl.string(d.t.fJyyQk),
                    bulletPoints: t
                })
            })
        ]
    });
}
function f(n) {
    let { platformType: t, onContinue: e, onClose: o } = n;
    return (0, i.jsx)(c.m, {
        platformType: t,
        headerConnect: d.intl.string(d.t.n2I5mJ),
        headerReconnect: d.intl.string(d.t['ZJ/vBg']),
        body: d.intl.string(d.t.EVyQLS),
        onClose: o,
        onContinue: e,
        img: (0, i.jsx)('img', {
            src: u,
            width: 230,
            height: 138,
            alt: ''
        }),
        valueProps: (0, i.jsx)(C, {}),
        learnMoreLink: l.Z.getArticleURL(a.BhN.PS_CONNECTION)
    });
}
