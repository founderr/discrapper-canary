"use strict";
s.r(t);
var n = s("442837"),
  a = s("430824"),
  l = s("914010"),
  i = s("771845");
t.default = () => {
  let e = (0, n.useStateFromStores)([i.default], () => i.default.getFlattenedGuildIds()),
    t = (0, n.useStateFromStores)([l.default], () => l.default.getGuildId());
  return (0, n.useStateFromStores)([a.default], () => a.default.getGuild(null != t ? t : e[0]))
}