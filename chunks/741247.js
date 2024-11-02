t.r(n),
    t.d(n, {
        default: function () {
            return d;
        },
        useHasGuildRoleItems: function () {
            return s;
        }
    });
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(239091),
    a = t(241635),
    o = t(388032);
function s(e, n) {
    return (0, a.Z)(e, n).length > 0;
}
function d(e) {
    let { role: n, guild: t, onSelect: s } = e,
        d = (0, a.Z)(t, n);
    return 0 === d.length
        ? null
        : (0, i.jsx)(l.Menu, {
              navId: 'guild-settings-role-context',
              'aria-label': o.intl.string(o.t['337Ja2']),
              onClose: r.Zy,
              onSelect: s,
              children: d
          });
}
