t.d(A, {
  P: function() {
    return l
  },
  W: function() {
    return o
  }
}), t(411104);
var n = t(735250),
  a = t(470079),
  s = t(828762);
let r = a.createContext(void 0);

function l() {
  let e = a.useContext(r);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function o(e) {
  let {
    children: A,
    guildId: t,
    ...a
  } = e, l = (0, s.Z)(t, a);
  return (0, n.jsx)(r.Provider, {
    value: l,
    children: A
  })
}