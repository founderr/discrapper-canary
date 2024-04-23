"use strict";
n.r(t), n.d(t, {
  PollContextProvider: function() {
    return r
  },
  useMessageIds: function() {
    return u
  },
  usePollContext: function() {
    return i
  },
  useStyleClass: function() {
    return o
  }
}), n("411104");
var s = n("735250"),
  l = n("470079");
let a = l.createContext(void 0);

function i() {
  let e = l.useContext(a);
  if (null == e) throw Error("No PollContextProvider found");
  return e
}

function r(e) {
  let {
    children: t,
    message: n,
    poll: i
  } = e, r = l.useMemo(() => ({
    message: n,
    poll: i
  }), [n, i]);
  return (0, s.jsx)(a.Provider, {
    value: r,
    children: t
  })
}

function o(e) {
  return function() {
    let {
      poll: e
    } = i();
    return e.resources
  }().styles[e]
}

function u() {
  let {
    message: e
  } = i(), t = e.getChannelId();
  return l.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}