n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(260034),
    s = n(993365),
    l = n(481060),
    u = n(489863),
    c = n(689938),
    d = n(507119);
let _ = 5;
function E(e) {
    var t;
    let { selectedGuildId: n, selectedChannelId: r, onChannelChange: E, error: f } = e,
        [h, p] = a.useState(null),
        m = a.useRef(!1);
    if (
        (a.useEffect(() => {
            async function e(e) {
                let t = await (0, u.UR)(e);
                n === e &&
                    (t.sort((e, t) => e.name.localeCompare(t.name)),
                    p({
                        guildId: e,
                        channels: t
                    }),
                    (m.current = !0));
            }
            p(null), null == n ? E(null) : e(n);
        }, [E, n]),
        a.useEffect(() => {
            if (!!m.current) null == h ? null != r && E(null) : !h.channels.some((e) => e.id === r) && E(null);
        }, [h, E, r, n]),
        null == n)
    )
        return null;
    let I =
        null == h || h.guildId !== n
            ? []
            : (null !== (t = null == h ? void 0 : h.channels) && void 0 !== t ? t : []).map((e) => ({
                  value: e.id,
                  label: e.name
              }));
    return (0, i.jsxs)('div', {
        className: d.selectorGroup,
        children: [
            (0, i.jsx)(o.X, {
                variant: 'heading-deprecated-12/semibold',
                className: d.sectionLabel,
                children: c.Z.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
            }),
            null != f && '' !== f
                ? (0, i.jsx)(s.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: f
                  })
                : null,
            (0, i.jsx)(l.SearchableSelect, {
                wrapperClassName: d.select,
                maxVisibleItems: _,
                onChange: E,
                placeholder: c.Z.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                options: I,
                value: r,
                renderOptionLabel: (e) =>
                    (0, i.jsx)(s.x, {
                        variant: 'text-md/normal',
                        children: e.label
                    }),
                renderOptionValue: (e) =>
                    (0, i.jsx)(s.x, {
                        variant: 'text-md/normal',
                        children: e[0].label
                    })
            }),
            (0, i.jsx)(s.x, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: d.label,
                children: c.Z.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
            })
        ]
    });
}
