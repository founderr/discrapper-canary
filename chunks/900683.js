s.d(n, {
    Z: function () {
        return I;
    },
    e: function () {
        return u;
    }
});
var i = s(735250);
s(470079);
var t = s(120356),
    a = s.n(t),
    l = s(481060),
    r = s(689938),
    c = s(378145),
    o = s(531599);
function u() {
    return (0, i.jsxs)('div', {
        className: a()(c.upsellFooter, c.reverseTrialUpsellContainer),
        children: [
            (0, i.jsx)('img', {
                src: o.Z,
                alt: 'reverse trial unlock',
                className: c.unlockIcon
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: c.upsellText,
                children: r.Z.Messages.PREMIUM_REVERSE_TRIAL_SERVER_BOOST.format()
            })
        ]
    });
}
function I(e) {
    let { text: n, color: s } = e;
    return (0, i.jsxs)('div', {
        className: c.upsellFooter,
        children: [
            (0, i.jsx)(l.NitroWheelIcon, {
                size: 'md',
                className: c.upsellFooterIcon,
                color: s
            }),
            (0, i.jsx)('div', { children: n })
        ]
    });
}
