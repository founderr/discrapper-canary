"use strict";
n.r(t), n.d(t, {
  useKeywordFilterSettings: function() {
    return s
  }
});
var i = n("399606"),
  r = n("581883");
let s = () => {
  var e, t, n;
  let s = (0, i.useStateFromStoresObject)([r.default], () => {
    var e, t;
    return null !== (t = null === (e = r.default.settings.textAndImages) || void 0 === e ? void 0 : e.keywordFilterSettings) && void 0 !== t ? t : {}
  });
  return {
    profanity: null === (e = s.profanity) || void 0 === e ? void 0 : e.value,
    sexualContent: null === (t = s.sexualContent) || void 0 === t ? void 0 : t.value,
    slurs: null === (n = s.slurs) || void 0 === n ? void 0 : n.value
  }
}