n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(240872),
    r = n(456269),
    o = n(346479),
    c = n(665906),
    u = n(592125),
    d = n(176505),
    h = n(689938);
function m(e) {
    let t = (0, s.e7)([u.Z], () => u.Z.getChannel(e.parent_id)),
        n = (0, c.Xb)(e),
        m = (0, r.kF)(e);
    return (null == t ? void 0 : t.isForumLikeChannel()) && n
        ? e.hasFlag(d.zZ.PINNED)
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'unpin-thread',
                  label: h.Z.Messages.UNPIN_POST,
                  action: () => o.Z.unpin(e)
              })
            : (0, i.jsx)(a.MenuItem, {
                  id: 'pin-thread',
                  label: h.Z.Messages.PIN_POST,
                  action: function () {
                      null != m
                          ? l.Z.show({
                                title: h.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                                body: h.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                                onConfirm: async () => {
                                    await o.Z.unpin(m), o.Z.pin(e);
                                }
                            })
                          : o.Z.pin(e);
                  }
              })
        : null;
}
