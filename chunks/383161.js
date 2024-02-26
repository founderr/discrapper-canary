"use strict";
n.r(t), n.d(t, {
  mentionUser: function() {
    return f
  },
  default: function() {
    return T
  }
}), n("222007");
var i = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  a = n("352674"),
  r = n("42203"),
  d = n("957255"),
  o = n("18494"),
  s = n("659500"),
  c = n("158998"),
  E = n("49111"),
  _ = n("782340");

function f(e, t) {
  let {
    id: n
  } = e, i = "@".concat(c.default.getUserTag(e, {
    decoration: "never"
  }));
  s.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
    plainText: i,
    rawText: "<@".concat(n, ">")
  }), null != t && a.default.startTyping(t)
}

function T(e, t, n) {
  let [a, s] = (0, l.useStateFromStoresArray)([o.default, r.default, d.default], () => {
    let e = o.default.getChannelId(t),
      n = r.default.getChannel(e),
      i = null != n && (n.isMultiUserDM() || d.default.can(E.Permissions.SEND_MESSAGES, n));
    return [e, i]
  }, [t]), c = n === E.AppContext.POPOUT;
  return !s || c ? null : (0, i.jsx)(u.MenuItem, {
    id: "mention",
    label: _.default.Messages.MENTION,
    action: function() {
      f(e, a)
    }
  })
}