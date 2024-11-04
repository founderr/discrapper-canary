n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(5192),
    o = n(829820),
    c = n(26118);
function u(e) {
    let { activity: t, user: n, channelId: l, guildId: u, source: d, size: h, look: m, color: p, className: f, onAction: g } = e,
        { tooltip: C, loading: x, disabled: v, onClick: _ } = (0, o.Fe)(t, n, d, a.ZP.getNickname(u, l, n)),
        I = () => {
            null == g || g(), _();
        };
    return (0, i.jsx)(s.Tooltip, {
        text: C,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: l } = e;
            return (0, i.jsx)(s.Button, {
                size: h,
                className: r()(c.syncButton, f),
                innerClassName: c.syncButtonInner,
                look: m,
                color: p,
                onClick: I,
                onMouseEnter: n,
                onMouseLeave: l,
                disabled: v,
                submitting: x,
                'aria-label': null != C ? C : t.name,
                children: (0, i.jsx)(s.UserPlayIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
