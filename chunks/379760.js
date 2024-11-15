n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(200651);
n(192379);
var r = n(481060),
    i = n(600164),
    o = n(7557),
    l = n(388905),
    a = n(388032),
    c = n(415570),
    u = n(971436);
function d(e) {
    let { title: t, subtitle: n, error: d, onSubmit: h, onCancel: p } = e;
    return (0, s.jsxs)(i.Z, {
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, s.jsx)(l.Dx, {
                className: u.marginBottom8,
                children: t
            }),
            (0, s.jsx)(l.DK, {
                className: c.subTitle,
                children: n
            }),
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(o.Z, {
                        inputClassName: c.codeInput,
                        onSubmit: h
                    }),
                    null != d
                        ? (0, s.jsx)(r.Text, {
                              className: c.error,
                              variant: 'text-sm/normal',
                              children: d
                          })
                        : null
                ]
            }),
            null != p &&
                (0, s.jsx)(r.Button, {
                    className: c.button,
                    onClick: p,
                    color: r.Button.Colors.PRIMARY,
                    children: a.intl.string(a.t['ETE/oK'])
                })
        ]
    });
}
