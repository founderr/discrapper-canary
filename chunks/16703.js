"use strict";
a.r(t);
var n = a("442837"),
  s = a("430824"),
  l = a("914010"),
  i = a("771845");
t.default = () => {
  let e = (0, n.useStateFromStores)([i.default], () => i.default.getFlattenedGuildIds()),
    t = (0, n.useStateFromStores)([l.default], () => l.default.getGuildId());
  return (0, n.useStateFromStores)([s.default], () => s.default.getGuild(null != t ? t : e[0]))
}