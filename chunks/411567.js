e.d(t, {
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(211739),
    u = e(680089),
    d = e(592125),
    s = e(981631),
    o = e(388032);
function c(n) {
    return (0, r.e7)([u.Z, d.Z], () => {
        let t = Object.values(d.Z.getMutableBasicGuildChannelsForGuild(n.guild_id)).filter((n) => n.type === s.d4z.GUILD_CATEGORY);
        return 0 === t.length || t.every((n) => u.Z.isCollapsed(n.id));
    })
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'collapse-all-categories',
              label: o.intl.string(o.t['9dqzUl']),
              action: () => (0, a.N5)(n.guild_id)
          });
}
