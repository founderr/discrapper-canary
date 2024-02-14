"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007"), n("424973");
var l = n("884691"),
  i = n("299285"),
  a = n("304367"),
  s = n("373469"),
  r = n("550368"),
  o = n("407462"),
  u = n("78512"),
  d = n("49111");
let c = e => {
  let t = l.useMemo(() => new a.AssetMap, []),
    [n, i] = l.useState(!1),
    s = l.useRef(e.length);
  return l.useEffect(() => {
    e.forEach(async e => {
      await t.loadRemoteImage(e), s.current -= 1, s.current < 1 && i(!0)
    }), s.current < 1 && i(!0)
  }, []), {
    loaded: n,
    assetMap: t
  }
};
var f = (e, t) => {
  let l;
  let {
    theme: a
  } = (0, u.getProfileInfo)(t, "black"), f = "dark" === a, m = (0, u.getActivityPlatform)(e), {
    assets: p,
    application_id: h
  } = e;
  l = null != e.application_id ? i.default.getApplication(e.application_id) : i.default.getApplicationByName(e.name);
  let E = s.default.getAnyStreamForUser(t.id),
    g = (0, r.getAssetImage)(h, null == p ? void 0 : p.large_image, 64),
    S = null == l ? void 0 : l.getIconURL(64),
    C = [];
  null != m ? C.push({
    name: o.AssetTypes.Platform,
    url: f ? m.icon.darkPNG : m.icon.lightPNG
  }) : e.type === d.ActivityTypes.PLAYING && C.push({
    name: "Platform",
    url: f ? n("944857") : n("248073")
  }), null != g && C.push({
    name: o.AssetTypes.AssetImage,
    url: g
  }), null != S && C.push({
    name: o.AssetTypes.ApplicationImage,
    url: S
  });
  let {
    loaded: T,
    assetMap: v
  } = c(C);
  return {
    loaded: T,
    assetMap: v,
    stream: E
  }
}