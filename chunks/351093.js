"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var n = l("735250"),
  r = l("470079"),
  i = l("941797"),
  s = l("810090"),
  a = l("981631"),
  o = l("689938");

function d(e) {
  let {
    poster: t,
    src: l,
    width: i,
    height: o,
    naturalWidth: d,
    naturalHeight: u,
    play: c = !0,
    className: h,
    alt: m,
    responsive: p
  } = e, g = r.useRef(null);
  return (r.useEffect(() => {
    let {
      current: e
    } = g;
    null != e && (c ? e.play() : e.pause())
  }, [c]), d <= a.MAX_VIDEO_WIDTH && u <= a.MAX_VIDEO_HEIGHT || d <= a.MAX_VIDEO_HEIGHT && u <= a.MAX_VIDEO_WIDTH) ? (0, n.jsx)(s.default, {
    ref: g,
    className: h,
    poster: t,
    src: l,
    width: i,
    height: o,
    responsive: p,
    muted: !0,
    loop: !0,
    autoPlay: c,
    preload: "none",
    "aria-label": m
  }) : (0, n.jsx)("img", {
    alt: "",
    src: t,
    width: i,
    height: o
  })
}

function u(e) {
  let {
    src: t,
    poster: l,
    naturalWidth: r,
    naturalHeight: s,
    responsive: a,
    autoPlay: u,
    className: c,
    playable: h = !0,
    renderImageComponent: m,
    alt: p = o.default.Messages.GIF,
    ...g
  } = e;
  return (0, n.jsx)(i.GIFAccessoryContext.Consumer, {
    children: e => m({
      ...g,
      alt: p,
      src: l,
      containerClassName: c,
      autoPlay: u,
      animated: h,
      responsive: a,
      renderAccessory: e,
      tabIndex: h ? 0 : -1,
      children(e) {
        let {
          src: l,
          size: i,
          animating: o,
          alt: u
        } = e;
        return (0, n.jsx)(d, {
          alt: u,
          className: c,
          poster: l,
          src: t,
          width: i.width,
          height: i.height,
          naturalWidth: r,
          naturalHeight: s,
          responsive: a,
          play: h && o
        })
      }
    })
  })
}