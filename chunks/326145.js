n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(745752),
    s = n(17181),
    o = n(388032),
    c = n(894710);
function d(e) {
    let { guildId: t, channelId: n } = e,
        d = r.useCallback(() => {
            if (null != t && null != n)
                (0, l.I1)(t),
                    (0, s.default)({
                        guildId: t,
                        returnChannelId: n
                    });
        }, [t, n]);
    return (0, i.jsx)('div', {
        className: c.container,
        children: (0, i.jsxs)('div', {
            className: c.explainerContainer,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: o.intl.string(o.t.FWtdQk)
                }),
                (0, i.jsx)(a.Button, {
                    onClick: d,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        children: o.intl.string(o.t.VVFjAA)
                    })
                })
            ]
        })
    });
}
