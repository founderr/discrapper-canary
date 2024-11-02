n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(129861),
    u = n(700582),
    d = n(600164),
    h = n(158776),
    m = n(51144),
    p = n(611782);
function f(e) {
    let { user: t, row: n, hideDiscriminator: l, comparator: f, selected: g, checked: C, onClick: x, onMouseEnter: v, 'aria-setsize': _, 'aria-posinset': I } = e,
        E = (0, s.e7)([h.Z], () => h.Z.getStatus(t.id)),
        b = (0, a.JA)(String(t.id));
    return (0, i.jsx)(o.Clickable, {
        id: 'user-row-'.concat(n),
        className: p.friendWrapper,
        onClick: () => {
            null != x && x(t.id);
        },
        onMouseEnter: () => {
            null != v && v(n);
        },
        ...b,
        role: 'option',
        'aria-selected': C,
        'aria-setsize': _,
        'aria-posinset': I,
        children: (0, i.jsxs)(d.Z, {
            align: d.Z.Align.CENTER,
            className: r()(p.friend, { [p.friendSelected]: g }),
            children: [
                (0, i.jsx)(u.Z, {
                    user: t,
                    status: E,
                    className: p.avatar
                }),
                (0, i.jsxs)(d.Z, {
                    className: p.match,
                    align: d.Z.Align.BASELINE,
                    children: [
                        (0, i.jsx)(o.Text, {
                            tag: 'strong',
                            className: p.nickname,
                            'aria-hidden': !0,
                            variant: 'text-md/medium',
                            children: null != f && f === t.tag ? m.ZP.getName(t) : null != f && '' !== f ? f : m.ZP.getName(t)
                        }),
                        (0, i.jsx)(c.Z, {
                            user: t,
                            hideDiscriminator: l,
                            className: p.discordTag,
                            usernameClass: p.__invalid_weightMedium,
                            discriminatorClass: p.__invalid_weightMedium,
                            forceUsername: !0
                        })
                    ]
                }),
                (0, i.jsx)(o.Checkbox, {
                    displayOnly: !0,
                    size: 22,
                    value: C,
                    className: p.checkbox
                })
            ]
        })
    });
}
