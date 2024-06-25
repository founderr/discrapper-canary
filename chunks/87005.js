"use strict";
n.d(t, {
  f: function() {
    return I
  }
}), n(47120);
var i = n(470079),
  r = n(243814),
  s = n(442837),
  o = n(384275),
  a = n(911969),
  l = n(10718),
  u = n(148958),
  _ = n(881998);
n(445392);
var c = n(689079);
let d = {
    commandType: a.yU.CHAT
  },
  E = {
    placeholderCount: 0,
    limit: c.tn,
    includeFrecency: !0
  };

function I(e, t) {
  let {
    sectionDescriptors: n,
    loading: a
  } = l.wi(e, d, E);
  return {
    loading: a,
    frecentApps: function(e, t) {
      i.useEffect(() => {
        e && o.Z.fetch()
      }, [e]);
      let n = (0, s.Wu)([_.Z], () => {
          var t, n;
          return e && null !== (n = null === (t = _.Z.getApps()) || void 0 === t ? void 0 : t.filter(e => e.scopes.includes(r.x.APPLICATIONS_COMMANDS))) && void 0 !== n ? n : []
        }, [e]),
        a = t.filter(e => e.id !== c.bi.FRECENCY && e.id !== c.bi.BUILT_IN);
      return (0, u.h)(a, null != n ? n : [])
    }(t, n)
  }
}