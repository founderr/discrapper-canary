t.d(n, {
    Z: function () {
        return T;
    }
});
var i = t(735250);
t(470079);
var l = t(442837),
    r = t(481060),
    a = t(787014),
    u = t(904245),
    o = t(787263),
    s = t(660189),
    d = t(144140),
    c = t(314897),
    E = t(496675),
    f = t(709054),
    N = t(981631),
    _ = t(689938);
function T(e) {
    let n = e.isForumPost(),
        t = (0, l.e7)([c.default], () => e.isOwner(c.default.getId()), [e]),
        { canManageChannel: T, canAccessChannel: S } = (0, l.cj)(
            [E.Z],
            () => ({
                canAccessChannel: E.Z.can(e.accessPermissions, e),
                canManageChannel: E.Z.can(e.isThread() ? N.Plq.MANAGE_THREADS : N.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        C = (0, l.e7)(
            [d.Z],
            () => {
                var n;
                return null !== (n = d.Z.getCount(e.id)) && void 0 !== n ? n : 0;
            },
            [e.id]
        ),
        { firstMessage: h } = (0, l.e7)([s.Z], () => s.Z.getMessage(e.id), [e.id]),
        I = n && (T || (t && C < 1)),
        A = n && t && !T && C > 0 && null != h;
    return S && (T || I || A)
        ? (0, i.jsx)(r.MenuItem, {
              id: 'delete-channel',
              label: (() => {
                  if (e.type === N.d4z.GUILD_CATEGORY) return _.Z.Messages.DELETE_CATEGORY;
                  if (e.isForumPost()) return I ? _.Z.Messages.DELETE_FORUM_POST : _.Z.Messages.DELETE_MESSAGE;
                  if (e.isThread()) return _.Z.Messages.DELETE_THREAD;
                  return _.Z.Messages.DELETE_CHANNEL;
              })(),
              color: 'danger',
              action: () => {
                  (0, o.w)(e, function () {
                      A ? u.Z.deleteMessage(e.id, f.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
