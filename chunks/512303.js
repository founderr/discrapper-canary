t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(373793),
    r = t(481060),
    a = t(700582),
    o = t(592180),
    s = t(565138),
    u = t(430824),
    d = t(594174),
    c = t(388032),
    g = t(394440);
function f(e) {
    var n, t, f;
    if (!(0, o.a)(e)) return null;
    let m = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[l.Y.USER_INSTALL],
        h = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        I = d.default.getUser(m),
        E = u.Z.getGuild(h),
        v = d.default.getUser(null === (f = e.interactionMetadata) || void 0 === f ? void 0 : f.user.id),
        p = null;
    return (
        null != E
            ? (p = (0, i.jsx)(r.MenuItem, {
                  className: g.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(s.Z, {
                          guild: E,
                          size: s.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: E.name,
                  subtext: c.intl.formatToPlainString(c.t.ShLXXF, { application: e.author.username })
              }))
            : null != I &&
              (p = (0, i.jsx)(r.MenuItem, {
                  className: g.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(a.Z, {
                          user: I,
                          size: r.AvatarSizes.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: I.username,
                  subtext: c.intl.formatToPlainString(c.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(r.MenuItem, {
            id: 'view-interaction-info',
            label: c.intl.string(c.t.Rjezb2),
            children: [
                p,
                null != v
                    ? (0, i.jsx)(r.MenuItem, {
                          className: g.interactionInfoMenuItem,
                          disabled: !0,
                          iconLeft: () =>
                              (0, i.jsx)(a.Z, {
                                  user: v,
                                  size: r.AvatarSizes.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: v.username,
                          subtext: c.intl.string(c.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
