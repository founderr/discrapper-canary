"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("446674"),
  l = n("913144"),
  r = n("267567"),
  i = n("166257"),
  o = n("766274"),
  s = n("42203"),
  u = n("697218");
let c = {};
class d {
  static ensure(e, t, n) {
    var a, l;
    let r = "".concat(e, ":").concat(t.name, ":").concat(null !== (a = t.id) && void 0 !== a ? a : "", ":").concat(n);
    return c[r] = null !== (l = c[r]) && void 0 !== l ? l : new d
  }
  constructor() {
    this.fetched = !1, this.users = {}
  }
}

function f(e) {
  let {
    type: t,
    messageId: n,
    userId: a,
    emoji: l,
    reactionType: r
  } = e, i = d.ensure(n, l, r);
  if ("MESSAGE_REACTION_ADD" === t) {
    let e = u.default.getUser(a);
    null != e && (i.users[a] = e)
  } else delete i.users[a]
}
class R extends a.default.Store {
  getReactions(e, t, n, a, l) {
    let o = d.ensure(t, n, l);
    if (!o.fetched) {
      let u = s.default.getChannel(e),
        c = null != u ? u.getGuildId() : null;
      if (null != c && r.default.isLurking(c)) return;
      i.getReactors({
        channelId: e,
        messageId: t,
        emoji: n,
        limit: a,
        type: l
      }), o.fetched = !0
    }
    return o.users
  }
}
R.displayName = "MessageReactionsStore";
var m = new R(l.default, {
  CONNECTION_OPEN: function() {
    c = {}
  },
  MESSAGE_REACTION_ADD: f,
  MESSAGE_REACTION_REMOVE: f,
  MESSAGE_REACTION_ADD_USERS: function(e) {
    let {
      messageId: t,
      users: n,
      emoji: a,
      reactionType: l
    } = e, r = d.ensure(t, a, l);
    n.forEach(e => r.users[e.id] = new o.default(e))
  }
})