e.d(t, {
    Z: function () {
        return h;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    a = e(481060),
    l = e(240872),
    o = e(456269),
    u = e(346479),
    d = e(665906),
    s = e(592125),
    c = e(176505),
    f = e(388032);
function h(n) {
    let t = (0, r.e7)([s.Z], () => s.Z.getChannel(n.parent_id)),
        e = (0, d.Xb)(n),
        h = (0, o.kF)(n);
    return (null == t ? void 0 : t.isForumLikeChannel()) && e
        ? n.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'unpin-thread',
                  label: f.intl.string(f.t.trD8am),
                  action: () => u.Z.unpin(n)
              })
            : (0, i.jsx)(a.MenuItem, {
                  id: 'pin-thread',
                  label: f.intl.string(f.t.EnaWho),
                  action: function () {
                      null != h
                          ? l.Z.show({
                                title: f.intl.string(f.t.IMbjxs),
                                body: f.intl.string(f.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await u.Z.unpin(h), u.Z.pin(n);
                                }
                            })
                          : u.Z.pin(n);
                  }
              })
        : null;
}
