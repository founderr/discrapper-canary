n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(600164),
    l = n(761673);
function r(e) {
    let { icon: t, onClick: n, label: r } = e;
    return (0, i.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        size: s.Button.Sizes.MIN,
        className: l.button,
        onClick: n,
        children: (0, i.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            children: [
                (0, i.jsx)('div', {
                    className: l.buttonIcon,
                    children: t
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'none',
                    children: r
                })
            ]
        })
    });
}
