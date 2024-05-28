"use strict";
i.r(s);
var t = i("442837"),
  n = i("339085");
s.default = function(e, s) {
  return (0, t.useStateFromStores)([n.default], () => {
    var i;
    if (null == s) return null;
    let t = n.default.getDisambiguatedEmojiContext(e);
    return null !== (i = t.getById(s)) && void 0 !== i ? i : t.getByName(s)
  }, [e, s])
}