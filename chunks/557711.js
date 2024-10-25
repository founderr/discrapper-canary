n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(5192),
    o = n(829820),
    c = n(26118);
function u(e) {
    let { activity: t, user: n, channelId: s, guildId: u, source: d, size: h, look: m, color: p, className: _, onAction: f } = e,
        { tooltip: E, loading: g, disabled: C, onClick: I } = (0, o.Fe)(t, n, d, r.ZP.getNickname(u, s, n)),
        T = () => {
            null == f || f(), I();
        };
    return (0, i.jsx)(l.Tooltip, {
        text: E,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: s } = e;
            return (0, i.jsx)(l.Button, {
                size: h,
                className: a()(c.syncButton, _),
                innerClassName: c.syncButtonInner,
                look: m,
                color: p,
                onClick: T,
                onMouseEnter: n,
                onMouseLeave: s,
                disabled: C,
                submitting: g,
                'aria-label': null != E ? E : t.name,
                children: (0, i.jsx)(l.UserPlayIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
