"use strict";
l.r(t), l.d(t, {
  useBundledProducts: function() {
    return i
  }
});
var s = l("470079"),
  a = l("328456");
let i = e => {
  let {
    firstProfileEffect: t,
    firstAvatarDecoration: l
  } = s.useMemo(() => {
    var t;
    return new a.ItemsSortingHat(null !== (t = e.bundledProducts) && void 0 !== t ? t : [])
  }, [e]);
  return {
    firstProfileEffect: t,
    firstAvatarDecoration: l
  }
}