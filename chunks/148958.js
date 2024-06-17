"use strict";
n.d(t, {
  h: function() {
    return a
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(675478),
  o = n(822245);

function a(e) {
  i.useEffect(() => {
    s.DZ.loadIfNecessary()
  }, []);
  let t = (0, r.e7)([o.Z], () => o.Z.getApplicationFrecencyWithoutLoadingLatest());
  return i.useMemo(() => {
    let n = [...e];
    return n.sort((e, n) => {
      var i, r;
      let s = (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) - (null !== (r = t.getScore(e.id)) && void 0 !== r ? r : 0);
      return 0 !== s ? s : e.name.localeCompare(n.name)
    }), n
  }, [e, t])
}