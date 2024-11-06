n.r(t),
    n.d(t, {
        default: function () {
            return c;
        },
        useHasGuildRoleItems: function () {
            return s;
        }
    });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(239091),
    a = n(241635),
    o = n(388032);
function s(e, t) {
    return (0, a.Z)(e, t).length > 0;
}
function c(e) {
    let { role: t, guild: n, onSelect: s } = e,
        c = (0, a.Z)(n, t);
    return 0 === c.length
        ? null
        : (0, i.jsx)(l.Menu, {
              navId: 'guild-settings-role-context',
              'aria-label': o.intl.string(o.t['337Ja2']),
              onClose: r.Zy,
              onSelect: s,
              children: c
          });
}
