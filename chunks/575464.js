n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(91192),
    r = n(442837),
    o = n(481060),
    c = n(129861),
    u = n(700582),
    d = n(600164),
    h = n(158776),
    p = n(51144),
    m = n(611782);
function _(e) {
    let { user: t, row: n, hideDiscriminator: s, comparator: _, selected: f, checked: E, onClick: g, onMouseEnter: C, 'aria-setsize': I, 'aria-posinset': T } = e,
        x = (0, r.e7)([h.Z], () => h.Z.getStatus(t.id)),
        S = (0, l.JA)(String(t.id));
    return (0, i.jsx)(o.Clickable, {
        id: 'user-row-'.concat(n),
        className: m.friendWrapper,
        onClick: () => {
            null != g && g(t.id);
        },
        onMouseEnter: () => {
            null != C && C(n);
        },
        ...S,
        role: 'option',
        'aria-selected': E,
        'aria-setsize': I,
        'aria-posinset': T,
        children: (0, i.jsxs)(d.Z, {
            align: d.Z.Align.CENTER,
            className: a()(m.friend, { [m.friendSelected]: f }),
            children: [
                (0, i.jsx)(u.Z, {
                    user: t,
                    status: x,
                    className: m.avatar
                }),
                (0, i.jsxs)(d.Z, {
                    className: m.match,
                    align: d.Z.Align.BASELINE,
                    children: [
                        (0, i.jsx)(o.Text, {
                            tag: 'strong',
                            className: m.nickname,
                            'aria-hidden': !0,
                            variant: 'text-md/medium',
                            children: null != _ && _ === t.tag ? p.ZP.getName(t) : null != _ && '' !== _ ? _ : p.ZP.getName(t)
                        }),
                        (0, i.jsx)(c.Z, {
                            user: t,
                            hideDiscriminator: s,
                            className: m.discordTag,
                            usernameClass: m.__invalid_weightMedium,
                            discriminatorClass: m.__invalid_weightMedium,
                            forceUsername: !0
                        })
                    ]
                }),
                (0, i.jsx)(o.Checkbox, {
                    displayOnly: !0,
                    size: 22,
                    value: E,
                    className: m.checkbox
                })
            ]
        })
    });
}
