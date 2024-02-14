"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
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
  E = n("491595"),
  S = function(e) {
    let {
      style: t,
      src: n,
      backgroundSrc: S,
      userId: h,
      pulseSpeakingIndicator: C = !1,
      speaking: _ = !1,
      ...p
    } = e, m = null != S ? S : n, g = (0, l.default)(m, s.default.unsafe_rawColors.PRIMARY_800.css), T = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, v = (0, c.default)(null != h ? h : ""), A = null == v ? void 0 : v.getBannerURL({
      size: 1024,
      canAnimate: f.GifAutoPlay.getSetting()
    });
    if (r.useEffect(() => {
        null != h && T && (0, d.default)(h, void 0, {
          dispatchWait: !0
        })
      }, [T, h]), null == n) return null;
    let I = (0, a.jsx)(i.Avatar, {
        className: E.avatarWrapper,
        src: n,
        ...p
      }),
      R = {
        ...t,
        backgroundColor: g
      };
    return null != A && _ && T && (R.backgroundImage = "url(".concat(A, ")"), R.backgroundSize = "cover"), (0, a.jsx)("div", {
      style: R,
      className: E.background,
      children: C ? (0, a.jsx)(o.default, {
        shouldAnimate: _,
        children: I
      }) : I
    })
  }