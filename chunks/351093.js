t.d(l, {
  Z: function() {
    return u
  }
});
var n = t(735250),
  r = t(470079),
  i = t(941797),
  s = t(810090),
  a = t(981631),
  o = t(689938);

function d(e) {
  let {
    poster: l,
    src: t,
    width: i,
    height: o,
    naturalWidth: d,
    naturalHeight: u,
    play: h = !0,
    className: c,
    alt: m,
    responsive: p
  } = e, g = r.useRef(null);
  return (r.useEffect(() => {
    let {
      current: e
    } = g;
    if (null != e) h ? e.play() : e.pause()
  }, [h]), d <= a.N_j && u <= a.XKF || d <= a.XKF && u <= a.N_j) ? (0, n.jsx)(s.Z, {
    ref: g,
    className: c,
    poster: l,
    src: t,
    width: i,
    height: o,
    responsive: p,
    muted: !0,
    loop: !0,
    autoPlay: h,
    preload: "none",
    "aria-label": m
  }) : (0, n.jsx)("img", {
    alt: "",
    src: l,
    width: i,
    height: o
  })
}

function u(e) {
  let {
    src: l,
    poster: t,
    naturalWidth: r,
    naturalHeight: s,
    responsive: a,
    autoPlay: u,
    className: h,
    playable: c = !0,
    renderImageComponent: m,
    renderForwardComponent: p,
    alt: g = o.Z.Messages.GIF,
    ...f
  } = e;
  return (0, n.jsx)(i.h.Consumer, {
    children: e => m({
      ...f,
      alt: g,
      src: t,
      containerClassName: h,
      autoPlay: u,
      animated: c,
      responsive: a,
      renderAccessory: e,
      renderForwardComponent: p,
      tabIndex: c ? 0 : -1,
      children(e) {
        let {
          src: t,
          size: i,
          animating: o,
          alt: u
        } = e;
        return (0, n.jsx)(d, {
          alt: u,
          className: h,
          poster: t,
          src: l,
          width: i.width,
          height: i.height,
          naturalWidth: r,
          naturalHeight: s,
          responsive: a,
          play: c && o
        })
      }
    })
  })
}