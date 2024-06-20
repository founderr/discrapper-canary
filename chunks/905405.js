"use strict";
n.d(t, {
  p: function() {
    return s
  }
});
var i = n(592204),
  r = n(712950);
let s = () => {
  var e;
  let {
    profanity: t,
    sexualContent: n,
    slurs: s
  } = (0, r.g)();
  return !!(0, i.Xo)({
    location: "use-should-filter-keywords"
  }) && null !== (e = t || n || s) && void 0 !== e && e
}