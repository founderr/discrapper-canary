"use strict";
n.r(t), n.d(t, {
  sortEffectLayers: function() {
    return l
  }
});
let l = e => e.sort((e, t) => {
  var n, l;
  return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (l = t.zIndex) && void 0 !== l ? l : 0)
})