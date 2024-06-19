n.d(t, {
  Z: function() {
    return I
  },
  v: function() {
    return E
  }
});
var s = n(735250),
  i = n(470079),
  l = n(512722),
  a = n.n(l),
  r = n(399606),
  o = n(904245),
  c = n(375954),
  u = n(918088);
let d = i.createContext(void 0);

function E(e) {
  var t;
  let n = null !== (t = i.useContext(d)) && void 0 !== t ? t : e;
  return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function _(e) {
  let {
    message: t,
    children: n
  } = e, l = (0, r.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != l;
  return i.useEffect(() => {
    !a && o.Z.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [a, t.channel_id, t.id]), (0, s.jsx)(d.Provider, {
    value: null != l ? l : t,
    children: n
  })
}

function I(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, u.r8)(t) ? (0, s.jsx)(s.Fragment, {
    children: n
  }) : (0, s.jsx)(_, {
    message: t,
    children: n
  })
}