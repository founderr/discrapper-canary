n.d(t, {
    a: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(152718);
let o = (e) => {
    let { text: t, icon: n, onClick: o } = e,
        s = n;
    return (0, r.jsxs)(i.Button, {
        className: a.button,
        innerClassName: a.buttonInner,
        onClick: o,
        children: [
            (0, r.jsx)(s, { color: 'currentColor' }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: t
            })
        ]
    });
};
