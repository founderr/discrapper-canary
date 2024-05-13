"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
}), l("47120");
var a = l("735250");
l("470079");
var n = l("442837"),
  u = l("481060"),
  d = l("699516"),
  s = l("689938");

function r(e) {
  let {
    user: t,
    onAction: r
  } = e, i = t.id, [o, f] = (0, n.useStateFromStoresArray)([d.default], () => {
    var e;
    return [d.default.isFriend(i), null !== (e = d.default.getNickname(i)) && void 0 !== e ? e : null]
  }, [i]);
  if (!o) return null;
  let c = null == f ? s.default.Messages.ADD_FRIEND_NICKNAME : s.default.Messages.CHANGE_FRIEND_NICKNAME;
  return (0, a.jsx)(u.MenuItem, {
    id: null == f ? "add-friend-nickname" : "edit-friend-nickname",
    label: c,
    action: () => {
      null == r || r(), (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("25070")]).then(l.bind(l, "670794"));
        return l => (0, a.jsx)(e, {
          user: t,
          nickname: f,
          ...l
        })
      })
    }
  })
}