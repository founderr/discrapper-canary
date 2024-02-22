"use strict";
n.r(e), n.d(e, {
  mentionUser: function() {
    return T
  },
  default: function() {
    return _
  }
}), n("222007");
var i = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  r = n("352674"),
  d = n("42203"),
  l = n("957255"),
  o = n("18494"),
  s = n("659500"),
  c = n("158998"),
  E = n("49111"),
  I = n("782340");

function T(t, e) {
  let {
    id: n
  } = t, i = "@".concat(c.default.getUserTag(t, {
    decoration: "never"
  }));
  s.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
    plainText: i,
    rawText: "<@".concat(n, ">")
  }), null != e && r.default.startTyping(e)
}

function _(t, e, n) {
  let [r, s] = (0, u.useStateFromStoresArray)([o.default, d.default, l.default], () => {
    let t = o.default.getChannelId(e),
      n = d.default.getChannel(t),
      i = null != n && (n.isMultiUserDM() || l.default.can(E.Permissions.SEND_MESSAGES, n));
    return [t, i]
  }, [e]), c = n === E.AppContext.POPOUT;
  return !s || c ? null : (0, i.jsx)(a.MenuItem, {
    id: "mention",
    label: I.default.Messages.MENTION,
    action: function() {
      T(t, r)
    }
  })
}