var i = n(200651);
n(192379);
var o = n(120356),
    l = n.n(o),
    r = n(481060),
    s = n(932209);
let a = (e) => {
    let { className: t, onDismiss: n, 'aria-label': o } = e;
    return (0, i.jsx)(r.Button, {
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: n,
        className: l()(s.dismissButton, t),
        'aria-label': o,
        children: (0, i.jsx)(r.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
(a.displayName = 'DismissButton'), (t.Z = a);
