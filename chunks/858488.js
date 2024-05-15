"use strict";
i.r(t), i.d(t, {
  default: function() {
    return s
  }
}), i("47120");
var a = i("735250");
i("470079");
var n = i("442837"),
  l = i("481060"),
  d = i("699516"),
  u = i("689938");

function s(e) {
  let {
    user: t,
    onAction: s
  } = e, o = t.id, [r, c] = (0, n.useStateFromStoresArray)([d.default], () => {
    var e;
    return [d.default.isFriend(o), null !== (e = d.default.getNickname(o)) && void 0 !== e ? e : null]
  }, [o]);
  if (!r) return null;
  let f = null == c ? u.default.Messages.ADD_FRIEND_NICKNAME : u.default.Messages.CHANGE_FRIEND_NICKNAME;
  return (0, a.jsx)(l.MenuItem, {
    id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
    label: f,
    action: () => {
      null == s || s(), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("25070")]).then(i.bind(i, "670794"));
        return i => (0, a.jsx)(e, {
          user: t,
          nickname: c,
          ...i
        })
      })
    }
  })
}