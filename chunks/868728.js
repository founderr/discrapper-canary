n.d(t, {
    Z: function () {
        return o;
    }
});
var l = n(200651),
    i = n(192379),
    r = n(780384),
    s = n(481060),
    a = n(388032);
function o(e) {
    let { onConfirm: t, onDismiss: n, theme: o } = e;
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsx)(s.Button, {
                onClick: t,
                children: a.intl.string(a.t.pz1lRE)
            }),
            (0, l.jsx)(s.Button, {
                look: s.Button.Looks.LINK,
                color: (0, r.ap)(o) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE,
                onClick: n,
                children: a.intl.string(a.t['ETE/oK'])
            })
        ]
    });
}
