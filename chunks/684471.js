e.d(n, {
    Z: function () {
        return I;
    }
});
var i = e(200651);
e(192379);
var o = e(481060),
    s = e(442837),
    r = e(594174),
    a = e(51144),
    c = e(473092),
    l = e(955708),
    u = e(850165),
    d = e(388032),
    E = e(248296),
    N = e(282668);
function I(t) {
    let { senderId: n, trackAnalyticsEvent: e, onNavigate: I } = t,
        h = (0, s.e7)([r.default], () => {
            let t = r.default.getUser(n);
            return a.ZP.getName(t);
        });
    return (0, i.jsx)(u.Z, {
        header: d.intl.string(d.t.sSMgCw),
        description: d.intl.formatToPlainString(d.t.q2QrTU, { username: h }),
        heroImageSrc: N,
        heroImageAlt: d.intl.string(d.t['3QhxXF']),
        children: (0, i.jsxs)('div', {
            className: E.buttonContainer,
            children: [
                (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        I(l.InappropriateConversationModalSlideKeys.TAKE_ACTION), e(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                    children: d.intl.string(d.t['+o4Q7e'])
                }),
                (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        I(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS), e(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                    children: d.intl.string(d.t.xLkGzM)
                })
            ]
        })
    });
}
