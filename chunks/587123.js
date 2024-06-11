"use strict";
t.r(A), t.d(A, {
  GuildProductAttachmentManagerContextProvider: function() {
    return i
  },
  useGuildProductAttachmentManagerContext: function() {
    return n
  }
}), t("411104");
var a = t("735250"),
  l = t("470079"),
  s = t("828762");
let r = l.createContext(void 0);

function n() {
  let e = l.useContext(r);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function i(e) {
  let {
    children: A,
    guildId: t,
    ...l
  } = e, n = (0, s.default)(t, l);
  return (0, a.jsx)(r.Provider, {
    value: n,
    children: A
  })
}