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
      pulseSpeakingIndicator: _ = !1,
      speaking: C = !1,
      ...p
    } = e, m = null != S ? S : n, T = (0, l.default)(m, s.default.unsafe_rawColors.PRIMARY_800.css), g = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, A = (0, c.default)(null != h ? h : ""), v = null == A ? void 0 : A.getBannerURL({
      size: 1024,
      canAnimate: f.GifAutoPlay.getSetting()
    });
    if (r.useEffect(() => {
        null != h && g && (0, d.default)(h, void 0, {
          dispatchWait: !0
        })
      }, [g, h]), null == n) return null;
    let I = (0, a.jsx)(i.Avatar, {
        className: E.avatarWrapper,
        src: n,
        ...p
      }),
      R = {
        ...t,
        backgroundColor: T
      };
    return null != v && C && g && (R.backgroundImage = "url(".concat(v, ")"), R.backgroundSize = "cover"), (0, a.jsx)("div", {
      style: R,
      className: E.background,
      children: _ ? (0, a.jsx)(o.default, {
        shouldAnimate: C,
        children: I
      }) : I
    })
  }