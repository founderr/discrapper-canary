"use strict";
n.r(t), n.d(t, {
  mentionUser: function() {
    return E
  },
  default: function() {
    return T
  }
}), n("222007");
var u = n("37983");
n("884691");
var r = n("446674"),
  a = n("77078"),
  i = n("352674"),
  l = n("42203"),
  s = n("957255"),
  d = n("18494"),
  o = n("659500"),
  c = n("158998"),
  f = n("49111"),
  _ = n("782340");

function E(e, t) {
  let {
    id: n
  } = e, u = "@".concat(c.default.getUserTag(e, {
    decoration: "never"
  }));
  o.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.INSERT_TEXT, {
    plainText: u,
    rawText: "<@".concat(n, ">")
  }), null != t && i.default.startTyping(t)
}

function T(e, t, n) {
  let [i, o] = (0, r.useStateFromStoresArray)([d.default, l.default, s.default], () => {
    let e = d.default.getChannelId(t),
      n = l.default.getChannel(e),
      u = null != n && (n.isMultiUserDM() || s.default.can(f.Permissions.SEND_MESSAGES, n));
    return [e, u]
  }, [t]), c = n === f.AppContext.POPOUT;
  return !o || c ? null : (0, u.jsx)(a.MenuItem, {
    id: "mention",
    label: _.default.Messages.MENTION,
    action: function() {
      E(e, i)
    }
  })
}