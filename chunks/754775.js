"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("669491"),
  i = n("77078"),
  l = n("462274"),
  u = n("181832"),
  o = n("981184"),
  d = n("506885"),
  c = n("217513"),
  f = n("845579"),
  h = n("491595"),
  E = function(e) {
    let {
      style: t,
      src: n,
      backgroundSrc: E,
      userId: C,
      pulseSpeakingIndicator: p = !1,
      speaking: m = !1,
      ...S
    } = e, g = null != E ? E : n, _ = (0, l.default)(g, s.default.unsafe_rawColors.PRIMARY_800.css), T = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, v = (0, c.default)(null != C ? C : ""), I = null == v ? void 0 : v.getBannerURL({
      size: 1024,
      canAnimate: f.GifAutoPlay.getSetting()
    });
    if (r.useEffect(() => {
        null != C && T && (0, d.default)(C, void 0, {
          dispatchWait: !0
        })
      }, [T, C]), null == n) return null;
    let A = (0, a.jsx)(i.Avatar, {
        className: h.avatarWrapper,
        src: n,
        ...S
      }),
      M = {
        ...t,
        backgroundColor: _
      };
    return null != I && m && T && (M.backgroundImage = "url(".concat(I, ")"), M.backgroundSize = "cover"), (0, a.jsx)("div", {
      style: M,
      className: h.background,
      children: p ? (0, a.jsx)(o.default, {
        shouldAnimate: m,
        children: A
      }) : A
    })
  }