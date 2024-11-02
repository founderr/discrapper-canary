t.d(e, {
    Z: function () {
        return s;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    r = t(787014),
    u = t(496675),
    c = t(981631),
    o = t(388032);
function s(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: s,
        canAccessChannel: d
    } = (0, i.cj)(
        [u.Z],
        () => ({
            canManageChannels: u.Z.can(c.Plq.MANAGE_CHANNELS, n),
            canManageRoles: u.Z.can(c.Plq.MANAGE_ROLES, n),
            canManageWebhooks: u.Z.can(c.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: u.Z.can(n.accessPermissions, n)
        }),
        [n]
    );
    return !__OVERLAY__ && d && (e || t || s)
        ? (0, l.jsx)(a.MenuItem, {
              id: 'edit-channel',
              label: n.type === c.d4z.GUILD_CATEGORY ? o.intl.string(o.t.zdPFs7) : o.intl.string(o.t['3gUsJS']),
              action: () => r.ZP.open(n.id)
          })
        : null;
}
