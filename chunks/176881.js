n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(626135),
  s = n(188471),
  l = n(360347),
  a = n(981631);

function r(e) {
  var t, n, r;
  let {
    tab_opened: o,
    source: c
  } = e, u = (0, l.Z)();
  i.default.track(a.rMx.FRIENDS_LIST_VIEWED, {
    tab_opened: o,
    source: c,
    ...u
  }), (0, s.a)(a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
    tab_opened: null != o ? o : "tabless",
    num_friends: null !== (t = u.num_friends) && void 0 !== t ? t : 0,
    now_playing_visible: null !== (n = u.now_playing_visible) && void 0 !== n && n,
    now_playing_num_cards: null !== (r = u.now_playing_num_cards) && void 0 !== r ? r : 0
  })
}