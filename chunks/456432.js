n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(829820);
function o(e) {
    let { activity: t, user: n, source: o, ...s } = e,
        { label: l, tooltip: u, loading: c, disabled: d, onClick: _ } = (0, a.Lz)(t, n, o);
    return (0, r.jsx)(i.Tooltip, {
        text: u,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsx)(i.Button, {
                ...s,
                color: d ? i.Button.Colors.PRIMARY : i.Button.Colors.GREEN,
                onClick: _,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: !c && d,
                submitting: c,
                children: l
            });
        }
    });
}
