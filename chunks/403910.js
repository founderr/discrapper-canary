"use strict";
s.r(t);
var a = s("442837"),
  n = s("339085");
t.default = function(e, t) {
  return (0, a.useStateFromStores)([n.default], () => {
    var s;
    if (null == t) return null;
    let a = n.default.getDisambiguatedEmojiContext(e);
    return null !== (s = a.getById(t)) && void 0 !== s ? s : a.getByName(t)
  }, [e, t])
}