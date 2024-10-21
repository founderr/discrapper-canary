t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var a = t(442837),
    r = t(481060),
    o = t(787014),
    s = t(904245),
    u = t(787263),
    l = t(660189),
    d = t(144140),
    c = t(314897),
    f = t(496675),
    Z = t(709054),
    v = t(981631),
    h = t(689938);
function E(e) {
    let n = e.isForumPost(),
        t = (0, a.e7)([c.default], () => e.isOwner(c.default.getId()), [e]),
        { canManageChannel: E, canAccessChannel: _ } = (0, a.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(e.accessPermissions, e),
                canManageChannel: f.Z.can(e.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        C = (0, a.e7)(
            [d.Z],
            () => {
                var n;
                return null !== (n = d.Z.getCount(e.id)) && void 0 !== n ? n : 0;
            },
            [e.id]
        ),
        { firstMessage: I } = (0, a.e7)([l.Z], () => l.Z.getMessage(e.id), [e.id]),
        T = n && (E || (t && C < 1)),
        A = n && t && !E && C > 0 && null != I;
    return _ && (E || T || A)
        ? (0, i.jsx)(r.MenuItem, {
              id: 'delete-channel',
              label: (() => {
                  if (e.type === v.d4z.GUILD_CATEGORY) return h.Z.Messages.DELETE_CATEGORY;
                  if (e.isForumPost()) return T ? h.Z.Messages.DELETE_FORUM_POST : h.Z.Messages.DELETE_MESSAGE;
                  if (e.isThread()) return h.Z.Messages.DELETE_THREAD;
                  return h.Z.Messages.DELETE_CHANNEL;
              })(),
              color: 'danger',
              action: () => {
                  (0, u.w)(e, function () {
                      A ? s.Z.deleteMessage(e.id, Z.default.castChannelIdAsMessageId(e.id)) : o.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
