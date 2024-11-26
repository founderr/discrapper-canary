t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(373793),
    a = t(442837),
    o = t(481060),
    s = t(232567),
    u = t(700582),
    d = t(592180),
    c = t(565138),
    g = t(430824),
    f = t(594174),
    m = t(388032),
    h = t(500054);
function E(e) {
    var n, t, E;
    let I = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[r.Y.USER_INSTALL],
        v = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[r.Y.GUILD_INSTALL],
        p = null === (E = e.interactionMetadata) || void 0 === E ? void 0 : E.user.id,
        M = (0, a.e7)([f.default], () => f.default.getUser(I)),
        Z = (0, a.e7)([g.Z], () => g.Z.getGuild(v)),
        x = (0, a.e7)([f.default], () => f.default.getUser(p));
    if (
        (l.useEffect(() => {
            null == M && null != I && (0, s.PR)(I), null == x && null != p && (0, s.PR)(p);
        }, [M, I, x, p]),
        !(0, d.a)(e))
    )
        return null;
    let S = null;
    return (
        null != Z
            ? (S = (0, i.jsx)(o.MenuItem, {
                  className: h.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(c.Z, {
                          guild: Z,
                          size: c.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: Z.name,
                  subtext: m.intl.formatToPlainString(m.t.ShLXXF, { application: e.author.username })
              }))
            : null != M &&
              (S = (0, i.jsx)(o.MenuItem, {
                  className: h.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(u.Z, {
                          user: M,
                          size: o.AvatarSizes.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: M.username,
                  subtext: m.intl.formatToPlainString(m.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(o.MenuItem, {
            id: 'view-interaction-info',
            label: m.intl.string(m.t.Rjezb2),
            children: [
                S,
                null != x
                    ? (0, i.jsx)(o.MenuItem, {
                          className: h.interactionInfoMenuItem,
                          disabled: !0,
                          iconLeft: () =>
                              (0, i.jsx)(u.Z, {
                                  user: x,
                                  size: o.AvatarSizes.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: x.username,
                          subtext: m.intl.string(m.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
