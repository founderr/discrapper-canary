"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
}), l("424973"), l("222007");
var i = l("884691"),
  n = l("798609"),
  a = l("605393"),
  d = l("872173"),
  u = l("773336"),
  o = l("334368");

function r(e) {
  return d.FrecencyUserSettingsActionCreators.loadIfNecessary(), i.useMemo(() => {
    let t = [];
    e.forEach(e => t.push(e.application.id));
    let l = [...t];
    l.sort((e, l) => {
      let i = a.default.getScoreWithoutLoadingLatest(e),
        n = a.default.getScoreWithoutLoadingLatest(l);
      return i !== n ? n - i : t.findIndex(t => t === e) < t.findIndex(e => e === l) ? -1 : 1
    });
    let i = c(e, l);
    return i
  }, [e])
}
let c = (e, t) => {
  let l = [...e],
    i = 0;
  return t.forEach(e => {
    let t = l.findIndex(t => t.application.id === e);
    if (-1 !== t) {
      let e = l[t];
      l.splice(t, 1), l = [...l.slice(0, i), e, ...l.slice(i)], ++i
    }
  }), l.map((e, t) => [e, t]).filter(e => {
    var t, l;
    let [i] = e, a = null === (l = i.application.embeddedActivityConfig) || void 0 === l ? void 0 : null === (t = l.client_platform_config[(0, o.default)((0, u.getOS)())]) || void 0 === t ? void 0 : t.label_type;
    return !!a && (a === n.EmbeddedActivityLabelTypes.NEW || a === n.EmbeddedActivityLabelTypes.UPDATED)
  }).forEach(e => {
    let [t, i] = e, n = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : i;
    if (n < i) {
      let e = l[i];
      l.splice(i, 1), l = [...l.slice(0, n), e, ...l.slice(n)]
    }
  }), l
}