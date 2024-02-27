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
  h = n("49111"),
  p = n("491595"),
  E = function(e) {
    let {
      style: t,
      src: n,
      backgroundSrc: E,
      userId: C,
      pulseSpeakingIndicator: m = !1,
      speaking: S = !1,
      ...g
    } = e, _ = null != E ? E : n, T = (0, l.default)(_, s.default.unsafe_rawColors.PRIMARY_800.css), v = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, I = (0, c.default)(null != C ? C : h.EMPTY_STRING_USER_ID), A = null == I ? void 0 : I.getBannerURL({
      size: 1024,
      canAnimate: f.GifAutoPlay.getSetting()
    });
    if (r.useEffect(() => {
        null != C && v && (0, d.default)(C, void 0, {
          dispatchWait: !0
        })
      }, [v, C]), null == n) return null;
    let M = (0, a.jsx)(i.Avatar, {
        className: p.avatarWrapper,
        src: n,
        ...g
      }),
      x = {
        ...t,
        backgroundColor: T
      };
    return null != A && S && v && (x.backgroundImage = "url(".concat(A, ")"), x.backgroundSize = "cover"), (0, a.jsx)("div", {
      style: x,
      className: p.background,
      children: m ? (0, a.jsx)(o.default, {
        shouldAnimate: S,
        children: M
      }) : M
    })
  }