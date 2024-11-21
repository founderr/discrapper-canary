e.d(n, {
    Z: function () {
        return h;
    }
});
var o = e(200651);
e(192379);
var r = e(481060),
    i = e(442837),
    s = e(594174),
    a = e(51144),
    c = e(473092),
    l = e(955708),
    u = e(850165),
    d = e(388032),
    E = e(248296),
    N = e(282668);
function h(t) {
    let { senderId: n, trackAnalyticsEvent: e, onNavigate: h } = t,
        I = (0, i.e7)([s.default], () => {
            let t = s.default.getUser(n);
            return a.ZP.getName(t);
        });
    return (0, o.jsx)(u.Z, {
        header: d.intl.string(d.t.sSMgCw),
        description: d.intl.formatToPlainString(d.t.q2QrTU, { username: I }),
        heroImageSrc: N,
        heroImageAlt: d.intl.string(d.t['3QhxXF']),
        children: (0, o.jsxs)('div', {
            className: E.buttonContainer,
            children: [
                (0, o.jsx)(r.Button, {
                    color: r.Button.Colors.BRAND,
                    size: r.Button.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        h(l.InappropriateConversationModalSlideKeys.TAKE_ACTION), e(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                    children: d.intl.string(d.t['+o4Q7e'])
                }),
                (0, o.jsx)(r.Button, {
                    color: r.Button.Colors.PRIMARY,
                    size: r.Button.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        h(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS), e(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                    children: d.intl.string(d.t.xLkGzM)
                })
            ]
        })
    });
}
