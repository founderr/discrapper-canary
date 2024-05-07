"use strict";
t.r(A), t.d(A, {
  GuildProductAttachmentManagerContextProvider: function() {
    return o
  },
  useGuildProductAttachmentManagerContext: function() {
    return r
  }
}), t("411104");
var a = t("735250"),
  l = t("470079"),
  s = t("828762");
let n = l.createContext(void 0);

function r() {
  let e = l.useContext(n);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function o(e) {
  let {
    children: A,
    guildId: t,
    ...l
  } = e, r = (0, s.default)(t, l);
  return (0, a.jsx)(n.Provider, {
    value: r,
    children: A
  })
}