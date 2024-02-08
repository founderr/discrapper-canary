"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007"), n("424973");
var l = n("884691"),
  i = n("299285"),
  a = n("304367"),
  s = n("410348"),
  r = n("373469"),
  o = n("550368"),
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
var p = (e, t) => {
  let l;
  let {
    theme: a
  } = (0, d.getProfileInfo)(t, "black"), p = "dark" === a, m = (0, d.getActivityPlatform)(e), {
    assets: h,
    application_id: E
  } = e;
  l = null != e.application_id ? i.default.getApplication(e.application_id) : i.default.getApplicationByName(e.name);
  let S = r.default.getAnyStreamForUser(t.id),
    g = null != S ? s.default.getPreviewURL(S.guildId, S.channelId, S.ownerId) : null,
    C = null != S ? s.default.getIsPreviewLoading(S.guildId, S.channelId, S.ownerId) : null,
    T = (0, o.getAssetImage)(E, null == h ? void 0 : h.large_image, 64),
    v = null == l ? void 0 : l.getIconURL(64),
    I = [];
  null != m ? I.push({
    name: u.AssetTypes.Platform,
    url: p ? m.icon.darkPNG : m.icon.lightPNG
  }) : e.type === c.ActivityTypes.PLAYING && I.push({
    name: "Platform",
    url: p ? n("944857") : n("248073")
  }), null != T && I.push({
    name: u.AssetTypes.AssetImage,
    url: T
  }), null != v && I.push({
    name: u.AssetTypes.ApplicationImage,
    url: v
  }), null != g && !C && I.push({
    name: u.AssetTypes.StreamPreview,
    url: g
  });
  let {
    loaded: _,
    assetMap: y
  } = f(I);
  return {
    loaded: _,
    assetMap: y,
    stream: S
  }
}