"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007"), n("424973");
var l = n("884691"),
  i = n("299285"),
  a = n("304367"),
  s = n("373469"),
  r = n("550368"),
  o = n("402671"),
  u = n("407462"),
  d = n("78512"),
  c = n("49111");
let f = e => {
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
var m = (e, t) => {
  var l;
  let a;
  let {
    theme: m
  } = (0, d.getProfileInfo)(t, "black"), p = "dark" === m, h = (0, d.getActivityPlatform)(e), {
    assets: E,
    application_id: g
  } = e;
  a = null != e.application_id ? i.default.getApplication(e.application_id) : i.default.getApplicationByName(e.name);
  let S = s.default.getAnyStreamForUser(t.id),
    C = (0, r.getAssetImage)(g, null == E ? void 0 : E.large_image, 64),
    T = null == a ? void 0 : a.getIconURL(64),
    v = [];
  if (null != h ? v.push({
      name: u.AssetTypes.Platform,
      url: p ? h.icon.darkPNG : h.icon.lightPNG
    }) : e.type === c.ActivityTypes.PLAYING && v.push({
      name: "Platform",
      url: p ? n("944857") : n("248073")
    }), null != C && (C.includes("http") ? v.push({
      name: u.AssetTypes.AssetImage,
      url: C
    }) : v.push({
      name: u.AssetTypes.AssetImage,
      url: n(C)
    })), e.type === c.ActivityTypes.HANG_STATUS && (null === (l = e.emoji) || void 0 === l ? void 0 : l.id) != null) {
    let t = (0, o.getEmojiUrl)({
      id: e.emoji.id,
      name: e.emoji.name,
      animated: !1
    });
    v.push({
      name: u.AssetTypes.HangStatus,
      url: t
    })
  }
  null != T && v.push({
    name: u.AssetTypes.ApplicationImage,
    url: T
  });
  let {
    loaded: I,
    assetMap: _
  } = f(v);
  return {
    loaded: I,
    assetMap: _,
    stream: S
  }
}