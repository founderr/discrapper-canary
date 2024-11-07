n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(318374),
    s = n(522289),
    o = n(565138),
    l = n(697927),
    u = n(200634),
    c = n(708108),
    d = n(146078),
    f = n(228168),
    _ = n(182294),
    h = n(736720);
function p(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: p } = (0, l.Z)(t.id),
        { mutualGuilds: m } = (0, u.Z)(t.id),
        g = null != p && p.length > 0,
        E = null != m && m.length > 0,
        v = g && E ? 'text-xs/normal' : 'text-sm/normal';
    return g || E
        ? (0, r.jsxs)('div', {
              className: h.mutuals,
              children: [
                  g
                      ? (0, r.jsxs)(i.Clickable, {
                            className: h.section,
                            onClick: () => (null == n ? void 0 : n(f.oh.MUTUAL_FRIENDS)),
                            children: [
                                (0, r.jsx)(a.Z, {
                                    maxUsers: 3,
                                    users: p.map((e) => {
                                        let { user: t } = e;
                                        return t;
                                    }),
                                    size: _.EF.SIZE_16,
                                    hideOverflowCount: !0,
                                    disableUsernameTooltip: !0
                                }),
                                (0, r.jsx)(i.Text, {
                                    className: h.text,
                                    variant: v,
                                    color: 'interactive-normal',
                                    children: (0, c.Z)(p.length)
                                })
                            ]
                        })
                      : null,
                  g && E
                      ? (0, r.jsx)('div', {
                            'aria-hidden': 'true',
                            className: h.spacer
                        })
                      : null,
                  E
                      ? (0, r.jsxs)(i.Clickable, {
                            className: h.section,
                            onClick: () => (null == n ? void 0 : n(f.oh.MUTUAL_GUILDS)),
                            children: [
                                !g &&
                                    (0, r.jsx)(s.Z, {
                                        maxGuilds: 3,
                                        guilds: m.map((e) => {
                                            let { guild: t } = e;
                                            return t;
                                        }),
                                        size: o.Z.Sizes.SMOL,
                                        hideOverflowCount: !0,
                                        disableGuildNameTooltip: !0
                                    }),
                                (0, r.jsx)(i.Text, {
                                    className: h.text,
                                    variant: v,
                                    color: 'interactive-normal',
                                    children: (0, d.Z)(m.length)
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
