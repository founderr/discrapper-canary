"use strict";
t.r(A), t.d(A, {
  useGuildProductAttachmentManagerContext: function() {
    return r
  },
  GuildProductAttachmentManagerContextProvider: function() {
    return i
  }
}), t("70102");
var a = t("37983"),
  l = t("884691"),
  n = t("168804");
let s = l.createContext(void 0);

function r() {
  let e = l.useContext(s);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function i(e) {
  let {
    children: A,
    guildId: t,
    ...l
  } = e, r = (0, n.default)(t, l);
  return (0, a.jsx)(s.Provider, {
    value: r,
    children: A
  })
}