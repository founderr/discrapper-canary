"use strict";
n.d(t, {
  g: function() {
    return o
  },
  p: function() {
    return a
  }
});
var i = n(399606),
  r = n(581883),
  s = n(592204);
let o = () => {
    var e, t, n;
    let s = (0, i.cj)([r.Z], () => {
      var e, t;
      return null !== (t = null === (e = r.Z.settings.textAndImages) || void 0 === e ? void 0 : e.keywordFilterSettings) && void 0 !== t ? t : {}
    });
    return {
      profanity: null === (e = s.profanity) || void 0 === e ? void 0 : e.value,
      sexualContent: null === (t = s.sexualContent) || void 0 === t ? void 0 : t.value,
      slurs: null === (n = s.slurs) || void 0 === n ? void 0 : n.value
    }
  },
  a = () => {
    var e;
    let {
      profanity: t,
      sexualContent: n,
      slurs: i
    } = o();
    return !!(0, s.Xo)({
      location: "use-should-filter-keywords"
    }) && null !== (e = t || n || i) && void 0 !== e && e
  }