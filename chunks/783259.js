"use strict";
var i = n(735250),
  r = n(470079),
  s = n(692547),
  o = n(481060),
  a = n(220082),
  l = n(420596),
  u = n(880563),
  _ = n(484459),
  c = n(318661),
  d = n(695346),
  E = n(981631),
  I = n(948910);
t.Z = function(e) {
  let {
    style: t,
    src: n,
    backgroundSrc: T,
    userId: h,
    pulseSpeakingIndicator: S = !1,
    speaking: f = !1,
    ...N
  } = e, A = null != T ? T : n, m = (0, a.ZP)(A, s.Z.unsafe_rawColors.PRIMARY_800.css), O = (0, l.c)(!0, "VideoBackground-web").enabled, R = (0, c.ZP)(null != h ? h : E.lds), p = null == R ? void 0 : R.getBannerURL({
    size: 1024,
    canAnimate: d.QK.getSetting()
  });
  if (r.useEffect(() => {
      null != h && O && (0, _.Z)(h, void 0, {
        dispatchWait: !0
      })
    }, [O, h]), null == n) return null;
  let g = (0, i.jsx)(o.Avatar, {
      className: I.avatarWrapper,
      src: n,
      ...N
    }),
    C = {
      ...t,
      backgroundColor: m
    };
  return null != p && f && O && (C.backgroundImage = "url(".concat(p, ")"), C.backgroundSize = "cover"), (0, i.jsx)("div", {
    style: C,
    className: I.background,
    children: S ? (0, i.jsx)(u.Z, {
      shouldAnimate: f,
      children: g
    }) : g
  })
}