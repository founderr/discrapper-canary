"use strict";
s.r(t), s.d(t, {
  useBundledProducts: function() {
    return i
  }
});
var l = s("470079"),
  a = s("328456");
let i = e => {
  let {
    firstProfileEffect: t,
    firstAvatarDecoration: s
  } = l.useMemo(() => {
    var t;
    return new a.ItemsSortingHat(null !== (t = e.bundledProducts) && void 0 !== t ? t : [])
  }, [e]);
  return {
    firstProfileEffect: t,
    firstAvatarDecoration: s
  }
}