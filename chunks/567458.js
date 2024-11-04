n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(921944),
    l = n(388032),
    s = n(114922);
function o(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsx)('div', { className: s.pointer }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                className: s.content,
                children: l.intl.string(l.t.rdzeVF)
            }),
            (0, i.jsx)(r.Button, {
                color: r.Button.Colors.BRAND_INVERTED,
                fullWidth: !0,
                onClick: () => {
                    t(a.L.AUTO);
                },
                children: l.intl.string(l.t['NX+WJC'])
            })
        ]
    });
}
