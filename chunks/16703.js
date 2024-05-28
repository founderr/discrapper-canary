"use strict";
s.r(t);
var a = s("442837"),
  n = s("430824"),
  l = s("914010"),
  i = s("771845");
t.default = () => {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getFlattenedGuildIds()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getGuildId());
  return (0, a.useStateFromStores)([n.default], () => n.default.getGuild(null != t ? t : e[0]))
}