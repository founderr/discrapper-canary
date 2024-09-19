t.d(n, {
    Z: function () {
        return M;
    }
});
var i = t(735250);
t(470079);
var a = t(373793),
    s = t(481060),
    l = t(700582),
    r = t(592180),
    o = t(565138),
    u = t(430824),
    d = t(594174),
    c = t(689938),
    E = t(461404);
function M(e) {
    var n, t, M;
    if (!(0, r.a)(e)) return null;
    let g = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[a.Y.USER_INSTALL],
        m = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[a.Y.GUILD_INSTALL],
        f = d.default.getUser(g),
        I = u.Z.getGuild(m),
        _ = d.default.getUser(null === (M = e.interactionMetadata) || void 0 === M ? void 0 : M.user.id),
        Z = null;
    return (
        null != I
            ? (Z = (0, i.jsx)(s.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(o.Z, {
                          guild: I,
                          size: o.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: I.name,
                  subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({ application: e.author.username })
              }))
            : null != f &&
              (Z = (0, i.jsx)(s.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(l.Z, {
                          user: f,
                          size: s.AvatarSizes.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: f.username,
                  subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({ application: e.author.username })
              })),
        (0, i.jsxs)(s.MenuItem, {
            id: 'view-interaction-info',
            label: c.Z.Messages.VIEW_INTERACTION_INFO,
            children: [
                Z,
                null != _
                    ? (0, i.jsx)(s.MenuItem, {
                          className: E.interactionInfoMenuItem,
                          disabled: !0,
                          iconLeft: () =>
                              (0, i.jsx)(l.Z, {
                                  user: _,
                                  size: s.AvatarSizes.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: _.username,
                          subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_TRIGGERED_BY
                      })
                    : null
            ]
        })
    );
}
