t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    r = t(481060),
    l = t(240872),
    u = t(456269),
    s = t(346479),
    o = t(665906),
    d = t(592125),
    c = t(176505),
    Z = t(689938);
function f(e) {
    let n = (0, a.e7)([d.Z], () => d.Z.getChannel(e.parent_id)),
        t = (0, o.Xb)(e),
        f = (0, u.kF)(e);
    return (null == n ? void 0 : n.isForumLikeChannel()) && t
        ? e.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'unpin-thread',
                  label: Z.Z.Messages.UNPIN_POST,
                  action: () => s.Z.unpin(e)
              })
            : (0, i.jsx)(r.MenuItem, {
                  id: 'pin-thread',
                  label: Z.Z.Messages.PIN_POST,
                  action: function () {
                      null != f
                          ? l.Z.show({
                                title: Z.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                                body: Z.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                                onConfirm: async () => {
                                    await s.Z.unpin(f), s.Z.pin(e);
                                }
                            })
                          : s.Z.pin(e);
                  }
              })
        : null;
}
