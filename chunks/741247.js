t.r(n),
    t.d(n, {
        default: function () {
            return d;
        },
        useHasGuildRoleItems: function () {
            return r;
        }
    });
var i = t(200651);
t(192379);
var a = t(481060),
    l = t(239091),
    s = t(241635),
    o = t(689938);
function r(e, n) {
    return (0, s.Z)(e, n).length > 0;
}
function d(e) {
    let { role: n, guild: t, onSelect: r } = e,
        d = (0, s.Z)(t, n);
    return 0 === d.length
        ? null
        : (0, i.jsx)(a.Menu, {
              navId: 'guild-settings-role-context',
              'aria-label': o.Z.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
              onClose: l.Zy,
              onSelect: r,
              children: d
          });
}
