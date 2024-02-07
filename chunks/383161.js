"use strict";
n.r(e), n.d(e, {
  mentionUser: function() {
    return T
  },
  default: function() {
    return I
  }
}), n("222007");
var i = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  r = n("352674"),
  l = n("42203"),
  o = n("957255"),
  d = n("18494"),
  s = n("659500"),
  E = n("158998"),
  c = n("49111"),
  _ = n("782340");

function T(t, e) {
  let {
    id: n
  } = t, i = "@".concat(E.default.getUserTag(t, {
    decoration: "never"
  }));
  s.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
    plainText: i,
    rawText: "<@".concat(n, ">")
  }), null != e && r.default.startTyping(e)
}

function I(t, e, n) {
  let [r, s] = (0, u.useStateFromStoresArray)([d.default, l.default, o.default], () => {
    let t = d.default.getChannelId(e),
      n = l.default.getChannel(t),
      i = null != n && (n.isMultiUserDM() || o.default.can(c.Permissions.SEND_MESSAGES, n));
    return [t, i]
  }, [e]), E = n === c.AppContext.POPOUT;
  return !s || E ? null : (0, i.jsx)(a.MenuItem, {
    id: "mention",
    label: _.default.Messages.MENTION,
    action: function() {
      T(t, r)
    }
  })
}