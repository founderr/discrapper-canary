"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("446674"),
  a = n("913144"),
  r = n("267567"),
  i = n("166257"),
  o = n("766274"),
  s = n("42203"),
  u = n("697218");
let c = {};
class d {
  static ensure(e, t, n) {
    var l, a;
    let r = "".concat(e, ":").concat(t.name, ":").concat(null !== (l = t.id) && void 0 !== l ? l : "", ":").concat(n);
    return c[r] = null !== (a = c[r]) && void 0 !== a ? a : new d
  }
  constructor() {
    this.fetched = !1, this.users = {}
  }
}

function f(e) {
  let {
    type: t,
    messageId: n,
    userId: l,
    emoji: a,
    reactionType: r
  } = e, i = d.ensure(n, a, r);
  if ("MESSAGE_REACTION_ADD" === t) {
    let e = u.default.getUser(l);
    null != e && (i.users[l] = e)
  } else delete i.users[l]
}
class h extends l.default.Store {
  getReactions(e, t, n, l, a) {
    let o = d.ensure(t, n, a);
    if (!o.fetched) {
      let u = s.default.getChannel(e),
        c = null != u ? u.getGuildId() : null;
      if (null != c && r.default.isLurking(c)) return;
      i.getReactors({
        channelId: e,
        messageId: t,
        emoji: n,
        limit: l,
        type: a
      }), o.fetched = !0
    }
    return o.users
  }
}
h.displayName = "MessageReactionsStore";
var m = new h(a.default, {
  CONNECTION_OPEN: function() {
    c = {}
  },
  MESSAGE_REACTION_ADD: f,
  MESSAGE_REACTION_REMOVE: f,
  MESSAGE_REACTION_ADD_USERS: function(e) {
    let {
      messageId: t,
      users: n,
      emoji: l,
      reactionType: a
    } = e, r = d.ensure(t, l, a);
    n.forEach(e => r.users[e.id] = new o.default(e))
  }
})