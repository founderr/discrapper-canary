r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(149765),
    a = r(430824),
    s = r(981631);
let o = [s.d4z.GUILD_TEXT, s.d4z.GUILD_VOICE, s.d4z.GUILD_ANNOUNCEMENT, s.d4z.GUILD_FORUM, s.d4z.PUBLIC_THREAD, s.d4z.PRIVATE_THREAD],
    l = i.$e(s.Plq.VIEW_CHANNEL, s.Plq.SEND_MESSAGES);
function u(e) {
    if (null == e || !o.includes(e.type)) return [];
    let n = a.Z.getGuild(e.guild_id);
    return null == n
        ? []
        : Object.values(e.permissionOverwrites)
              .filter((e) => {
                  var r, s;
                  return 0 === e.type && (null === (s = a.Z.getRoles(n.id)[e.id]) || void 0 === s ? void 0 : null === (r = s.tags) || void 0 === r ? void 0 : r.guild_connections) === null && !i.Db(e.deny, l);
              })
              .map((e) => a.Z.getRoles(n.id)[e.id])
              .filter((e) => null != e);
}
