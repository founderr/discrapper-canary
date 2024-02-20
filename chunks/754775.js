"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("669491"),
  i = n("77078"),
  l = n("462274"),
  o = n("181832"),
  u = n("981184"),
  d = n("506885"),
  c = n("217513"),
  f = n("845579"),
  h = n("491595"),
  p = function(e) {
    let {
      style: t,
      src: n,
      backgroundSrc: p,
      userId: m,
      pulseSpeakingIndicator: C = !1,
      speaking: E = !1,
      ...g
    } = e, S = null != p ? p : n, v = (0, l.default)(S, s.default.unsafe_rawColors.PRIMARY_800.css), _ = (0, o.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, T = (0, c.default)(null != m ? m : ""), A = null == T ? void 0 : T.getBannerURL({
      size: 1024,
      canAnimate: f.GifAutoPlay.getSetting()
    });
    if (r.useEffect(() => {
        null != m && _ && (0, d.default)(m, void 0, {
          dispatchWait: !0
        })
      }, [_, m]), null == n) return null;
    let I = (0, a.jsx)(i.Avatar, {
        className: h.avatarWrapper,
        src: n,
        ...g
      }),
      M = {
        ...t,
        backgroundColor: v
      };
    return null != A && E && _ && (M.backgroundImage = "url(".concat(A, ")"), M.backgroundSize = "cover"), (0, a.jsx)("div", {
      style: M,
      className: h.background,
      children: C ? (0, a.jsx)(u.default, {
        shouldAnimate: E,
        children: I
      }) : I
    })
  }