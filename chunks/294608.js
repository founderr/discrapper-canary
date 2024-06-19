n.d(t, {
  $B: function() {
    return o
  },
  GF: function() {
    return a
  },
  XL: function() {
    return r
  },
  pE: function() {
    return c
  }
}), n(411104);
var s = n(735250),
  i = n(470079);
let l = i.createContext(void 0);

function a() {
  let e = i.useContext(l);
  if (null == e) throw Error("No PollContextProvider found");
  return e
}

function r(e) {
  let {
    children: t,
    message: n,
    poll: a
  } = e, r = i.useMemo(() => ({
    message: n,
    poll: a
  }), [n, a]);
  return (0, s.jsx)(l.Provider, {
    value: r,
    children: t
  })
}

function o(e) {
  return function() {
    let {
      poll: e
    } = a();
    return e.resources
  }().styles[e]
}

function c() {
  let {
    message: e
  } = a(), t = e.getChannelId();
  return i.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}