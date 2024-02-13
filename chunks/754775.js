"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  r = n("884691"),
  i = n("669491"),
  s = n("77078"),
  l = n("462274"),
  u = n("181832"),
  o = n("981184"),
  d = n("506885"),
  c = n("217513"),
  f = n("845579"),
  h = n("249941"),
  p = function(e) {
    let {
      style: t,
      src: n,
      backgroundSrc: p,
      userId: E,
      pulseSpeakingIndicator: C = !1,
      speaking: m = !1,
      ...S
    } = e, g = null != p ? p : n, _ = (0, l.default)(g, i.default.unsafe_rawColors.PRIMARY_800.css), v = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, T = (0, c.default)(null != E ? E : ""), I = null == T ? void 0 : T.getBannerURL({
      size: 1024,
      canAnimate: f.GifAutoPlay.getSetting()
    });
    if (r.useEffect(() => {
        null != E && v && (0, d.default)(E, void 0, {
          dispatchWait: !0
        })
      }, [v, E]), null == n) return null;
    let A = (0, a.jsx)(s.Avatar, {
        className: h.avatarWrapper,
        src: n,
        ...S
      }),
      M = {
        ...t,
        backgroundColor: _
      };
    return null != I && m && v && (M.backgroundImage = "url(".concat(I, ")"), M.backgroundSize = "cover"), (0, a.jsx)("div", {
      style: M,
      className: h.background,
      children: C ? (0, a.jsx)(o.default, {
        shouldAnimate: m,
        children: A
      }) : A
    })
  }