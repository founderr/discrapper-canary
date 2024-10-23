n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(395361),
    l = n(829820),
    r = n(26118);
function o(e) {
    let { activity: t, user: n, source: o, className: c, size: u, look: d, color: h, fullWidth: m, onAction: p } = e,
        { label: _, tooltip: f, loading: E, disabled: g, onClick: C } = (0, l.Ih)(t, n, o),
        I = () => {
            null == p || p(), C();
        };
    return (0, i.jsx)(s.Tooltip, {
        text: f,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsxs)(s.Button, {
                className: c,
                innerClassName: r.playButtonInner,
                size: u,
                look: d,
                color: h,
                fullWidth: m,
                onClick: I,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: g,
                submitting: E,
                children: [
                    (0, i.jsx)(a.Z, {
                        width: 16,
                        height: 16
                    }),
                    _
                ]
            });
        }
    });
}
