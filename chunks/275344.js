"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  useInteractivePollMessage: function() {
    return f
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("512722"),
  i = n.n(a),
  r = n("399606"),
  o = n("904245"),
  u = n("375954"),
  d = n("918088");
let c = l.createContext(void 0);

function f(e) {
  var t;
  let n = null !== (t = l.useContext(c)) && void 0 !== t ? t : e;
  return i()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function E(e) {
  let {
    message: t,
    children: n
  } = e, a = (0, r.useStateFromStores)([u.default], () => u.default.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), i = null != a;
  return l.useEffect(() => {
    !i && o.default.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [i, t.channel_id, t.id]), (0, s.jsx)(c.Provider, {
    value: null != a ? a : t,
    children: n
  })
}

function _(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, d.isPollMessageDirectlyInteractive)(t) ? (0, s.jsx)(s.Fragment, {
    children: n
  }) : (0, s.jsx)(E, {
    message: t,
    children: n
  })
}