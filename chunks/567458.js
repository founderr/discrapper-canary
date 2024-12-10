n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(921944),
    a = n(388032),
    o = n(806305);
function s(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)('div', { className: o.pointer }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                className: o.content,
                children: a.intl.string(a.t.rdzeVF)
            }),
            (0, i.jsx)(r.Button, {
                color: r.Button.Colors.BRAND_INVERTED,
                fullWidth: !0,
                onClick: () => {
                    t(l.L.AUTO);
                },
                children: a.intl.string(a.t['NX+WJC'])
            })
        ]
    });
}
