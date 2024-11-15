n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(793030),
    s = n(993365),
    o = n(481060),
    l = n(489863),
    u = n(388032),
    c = n(111686);
function d(e) {
    var t;
    let { selectedGuildId: n, selectedChannelId: d, onChannelChange: f, error: _ } = e,
        [p, h] = i.useState(null),
        m = i.useRef(!1);
    if (
        (i.useEffect(() => {
            async function e(e) {
                let t = await (0, l.UR)(e);
                n === e &&
                    (t.sort((e, t) => e.name.localeCompare(t.name)),
                    h({
                        guildId: e,
                        channels: t
                    }),
                    (m.current = !0));
            }
            h(null), null == n ? f(null) : e(n);
        }, [f, n]),
        i.useEffect(() => {
            if (!!m.current) null == p ? null != d && f(null) : !p.channels.some((e) => e.id === d) && f(null);
        }, [p, f, d, n]),
        null == n)
    )
        return null;
    let g =
        null == p || p.guildId !== n
            ? []
            : (null !== (t = null == p ? void 0 : p.channels) && void 0 !== t ? t : []).map((e) => ({
                  value: e.id,
                  label: e.name
              }));
    return (0, r.jsxs)('div', {
        className: c.selectorGroup,
        children: [
            (0, r.jsx)(a.X6, {
                variant: 'heading-deprecated-12/semibold',
                className: c.sectionLabel,
                children: u.intl.string(u.t['8qKd+P'])
            }),
            null != _ && '' !== _
                ? (0, r.jsx)(s.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: _
                  })
                : null,
            (0, r.jsx)(o.SearchableSelect, {
                wrapperClassName: c.select,
                maxVisibleItems: 5,
                onChange: f,
                placeholder: u.intl.string(u.t['Re/64e']),
                options: g,
                value: d,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(s.x, {
                        variant: 'text-md/normal',
                        children: e.label
                    }),
                renderOptionValue: (e) =>
                    (0, r.jsx)(s.x, {
                        variant: 'text-md/normal',
                        children: e[0].label
                    })
            }),
            (0, r.jsx)(s.x, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: c.label,
                children: u.intl.string(u.t.kQXMfH)
            })
        ]
    });
}
