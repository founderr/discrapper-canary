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
  l = t("884691"),
  n = t("168804");
let r = l.createContext(void 0);

function s() {
  let e = l.useContext(r);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function o(e) {
  let {
    children: A,
    guildId: t,
    ...l
  } = e, s = (0, n.default)(t, l);
  return (0, a.jsx)(r.Provider, {
    value: s,
    children: A
  })
}