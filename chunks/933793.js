t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    r = t(481060),
    o = t(240872),
    s = t(456269),
    u = t(346479),
    l = t(665906),
    d = t(592125),
    c = t(176505),
    f = t(689938);
function Z(e) {
    let n = (0, a.e7)([d.Z], () => d.Z.getChannel(e.parent_id)),
        t = (0, l.Xb)(e),
        Z = (0, s.kF)(e);
    return (null == n ? void 0 : n.isForumLikeChannel()) && t
        ? e.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'unpin-thread',
                  label: f.Z.Messages.UNPIN_POST,
                  action: () => u.Z.unpin(e)
              })
            : (0, i.jsx)(r.MenuItem, {
                  id: 'pin-thread',
                  label: f.Z.Messages.PIN_POST,
                  action: function () {
                      null != Z
                          ? o.Z.show({
                                title: f.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                                body: f.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                                onConfirm: async () => {
                                    await u.Z.unpin(Z), u.Z.pin(e);
                                }
                            })
                          : u.Z.pin(e);
                  }
              })
        : null;
}
