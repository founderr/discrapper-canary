"use strict";
t.r(A), t.d(A, {
  useGuildProductAttachmentManagerContext: function() {
    return s
  },
  GuildProductAttachmentManagerContextProvider: function() {
    return o
  }
}), t("70102");
var a = t("37983"),
  n = t("884691"),
  l = t("168804");
let r = n.createContext(void 0);

function s() {
  let e = n.useContext(r);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function o(e) {
  let {
    children: A,
    guildId: t,
    ...n
  } = e, s = (0, l.default)(t, n);
  return (0, a.jsx)(r.Provider, {
    value: s,
    children: A
  })
}