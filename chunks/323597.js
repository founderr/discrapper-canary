e.d(t, {
    Z: function () {
        return v;
    }
});
var i = e(200651);
e(192379);
var a = e(442837),
    r = e(481060),
    l = e(787014),
    u = e(904245),
    o = e(787263),
    c = e(660189),
    d = e(144140),
    s = e(314897),
    f = e(496675),
    E = e(709054),
    g = e(981631),
    _ = e(388032);
function v(n) {
    let t = n.isForumPost(),
        e = (0, a.e7)([s.default], () => n.isOwner(s.default.getId()), [n]),
        { canManageChannel: v, canAccessChannel: C } = (0, a.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(n.accessPermissions, n),
                canManageChannel: f.Z.can(n.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS, n)
            }),
            [n]
        ),
        p = (0, a.e7)(
            [d.Z],
            () => {
                var t;
                return null !== (t = d.Z.getCount(n.id)) && void 0 !== t ? t : 0;
            },
            [n.id]
        ),
        { firstMessage: h } = (0, a.e7)([c.Z], () => c.Z.getMessage(n.id), [n.id]),
        A = t && (v || (e && p < 1)),
        O = t && e && !v && p > 0 && null != h;
    return C && (v || A || O)
        ? (0, i.jsx)(r.MenuItem, {
              id: 'delete-channel',
              label: (() => {
                  if (n.type === g.d4z.GUILD_CATEGORY) return _.intl.string(_.t.ifbXnJ);
                  if (n.isForumPost()) return A ? _.intl.string(_.t.nEOg1N) : _.intl.string(_.t.xwMqDw);
                  if (n.isThread()) return _.intl.string(_.t.H7vTe3);
                  return _.intl.string(_.t['8D8Rsb']);
              })(),
              color: 'danger',
              action: () => {
                  (0, o.w)(n, function () {
                      O ? u.Z.deleteMessage(n.id, E.default.castChannelIdAsMessageId(n.id)) : l.ZP.deleteChannel(n.id);
                  });
              }
          })
        : null;
}
