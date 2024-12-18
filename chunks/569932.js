e.d(t, {
    A: function () {
        return u;
    }
});
var o = e(200651),
    i = e(192379),
    c = e(481060),
    r = e(63063),
    s = e(921869),
    l = e(981631),
    a = e(388032),
    d = e(660025);
function u(n) {
    let { platformType: t, onContinue: e, onClose: u } = n,
        p = i.useMemo(
            () => [
                {
                    label: a.intl.string(a.t['+eJP7u']),
                    subLabel: a.intl.string(a.t['+0VIUl']),
                    icon: c.VoiceNormalIcon
                },
                {
                    label: a.intl.string(a.t.ZH4QFR),
                    icon: c.GameControllerIcon
                }
            ],
            []
        ),
        A = r.Z.getArticleURL(l.BhN.PS_CONNECTION),
        T = a.intl.format(a.t.kqZQNT, { helpdeskArticleUrl: A });
    return (0, o.jsx)(s.m, {
        platformType: t,
        headerConnect: a.intl.string(a.t.xAWHOz),
        headerReconnect: a.intl.string(a.t['ZJ/vBg']),
        body: T,
        onClose: u,
        onContinue: e,
        img: (0, o.jsx)('img', {
            src: d.Z,
            width: 230,
            height: 160,
            alt: ''
        }),
        valueProps: p
    });
}
