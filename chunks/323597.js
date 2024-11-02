e.d(t, {
    Z: function () {
        return C;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    a = e(481060),
    l = e(787014),
    o = e(904245),
    u = e(787263),
    d = e(660189),
    s = e(144140),
    c = e(314897),
    f = e(496675),
    h = e(709054),
    v = e(981631),
    Z = e(388032);
function C(n) {
    let t = n.isForumPost(),
        e = (0, r.e7)([c.default], () => n.isOwner(c.default.getId()), [n]),
        { canManageChannel: C, canAccessChannel: m } = (0, r.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(n.accessPermissions, n),
                canManageChannel: f.Z.can(n.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, n)
            }),
            [n]
        ),
        g = (0, r.e7)(
            [s.Z],
            () => {
                var t;
                return null !== (t = s.Z.getCount(n.id)) && void 0 !== t ? t : 0;
            },
            [n.id]
        ),
        { firstMessage: p } = (0, r.e7)([d.Z], () => d.Z.getMessage(n.id), [n.id]),
        E = t && (C || (e && g < 1)),
        I = t && e && !C && g > 0 && null != p;
    return m && (C || E || I)
        ? (0, i.jsx)(a.MenuItem, {
              id: 'delete-channel',
              label: (() => {
                  if (n.type === v.d4z.GUILD_CATEGORY) return Z.intl.string(Z.t.ifbXnJ);
                  if (n.isForumPost()) return E ? Z.intl.string(Z.t.nEOg1N) : Z.intl.string(Z.t.xwMqDw);
                  if (n.isThread()) return Z.intl.string(Z.t.H7vTe3);
                  return Z.intl.string(Z.t['8D8Rsb']);
              })(),
              color: 'danger',
              action: () => {
                  (0, u.w)(n, function () {
                      I ? o.Z.deleteMessage(n.id, h.default.castChannelIdAsMessageId(n.id)) : l.ZP.deleteChannel(n.id);
                  });
              }
          })
        : null;
}
