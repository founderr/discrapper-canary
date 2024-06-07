"use strict";
i.r(s);
var n = i("442837"),
  t = i("339085");
s.default = function(e, s) {
  return (0, n.useStateFromStores)([t.default], () => {
    var i;
    if (null == s) return null;
    let n = t.default.getDisambiguatedEmojiContext(e);
    return null !== (i = n.getById(s)) && void 0 !== i ? i : n.getByName(s)
  }, [e, s])
}