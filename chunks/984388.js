"use strict";
s.r(t), s("47120");
var n = s("735250"),
  i = s("470079"),
  r = s("593473"),
  a = s("478677"),
  l = s("457330"),
  o = s("417663"),
  c = s("981631");

function d(e) {
  let {
    platformType: t
  } = e, [s, a] = i.useState("verifying");
  return i.useEffect(() => {
    let {
      code: e,
      state: s
    } = r.parse(window.location.search);
    if (null == e || null == s) {
      a("error");
      return
    }
    l.default.linkDispatchAuthCallback(t, {
      code: e,
      state: s
    }).then(e => {
      let {
        status: t
      } = e;
      a(204 === t ? "verified" : "error")
    }, () => {
      a("error")
    })
  }, [t]), (0, n.jsx)(o.AccountConnectionResult, {
    platformType: t,
    verifying: "verifying" === s,
    verified: "verified" === s
  })
}
t.default = function(e) {
  let {
    match: t
  } = e, s = t.params.type, {
    two_way_link_type: i
  } = r.parse(window.location.search);
  return [c.PlatformTypes.XBOX, c.PlatformTypes.PLAYSTATION_STAGING, c.PlatformTypes.PLAYSTATION, c.PlatformTypes.CRUNCHYROLL].includes(s) && i === a.TwoWayLinkType.DESKTOP ? (0, n.jsx)(d, {
    platformType: s
  }) : null
}