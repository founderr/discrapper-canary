t.d(n, {
    Z: function () {
        return u;
    }
});
var o = t(200651),
    i = t(192379),
    r = t(481060),
    c = t(63063),
    s = t(921869),
    a = t(981631),
    l = t(388032),
    d = t(493358);
function u(e) {
    let { onContinue: n, onClose: t } = e,
        u = c.Z.getArticleURL(a.BhN.XBOX_CONNECTION),
        f = l.intl.format(l.t.CIc3IC, { helpdeskArticleUrl: u }),
        p = i.useMemo(
            () => [
                {
                    label: l.intl.string(l.t.ihQXsb),
                    icon: r.VoiceNormalIcon
                },
                {
                    label: l.intl.string(l.t.Xt1n4O),
                    icon: r.ScreenStreamIcon
                },
                {
                    label: l.intl.string(l.t.xqVY3t),
                    icon: r.GroupIcon
                },
                {
                    label: l.intl.string(l.t.iQsKVV),
                    icon: r.GameControllerIcon
                }
            ],
            []
        );
    return (0, o.jsx)(s.m, {
        platformType: a.ABu.XBOX,
        headerConnect: l.intl.string(l.t.m8aaho),
        headerReconnect: l.intl.string(l.t.z3rAho),
        body: f,
        onClose: t,
        onContinue: n,
        img: (0, o.jsx)('img', {
            src: d.Z,
            width: 230,
            height: 160,
            alt: ''
        }),
        valueProps: p
    });
}
