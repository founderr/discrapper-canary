n.d(l, {
  Z: function() {
    return d
  }
});
var t = n(735250),
  r = n(470079),
  i = n(941797),
  s = n(810090),
  a = n(981631),
  o = n(689938);

function u(e) {
  let {
    poster: l,
    src: n,
    width: i,
    height: o,
    naturalWidth: u,
    naturalHeight: d,
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
  }, [h]), u <= a.N_j && d <= a.XKF || u <= a.XKF && d <= a.N_j) ? (0, t.jsx)(s.Z, {
    ref: g,
    className: c,
    poster: l,
    src: n,
    width: i,
    height: o,
    responsive: p,
    muted: !0,
    loop: !0,
    autoPlay: h,
    preload: "none",
    "aria-label": m
  }) : (0, t.jsx)("img", {
    alt: "",
    src: l,
    width: i,
    height: o
  })
}

function d(e) {
  let {
    src: l,
    poster: n,
    naturalWidth: r,
    naturalHeight: s,
    responsive: a,
    autoPlay: d,
    className: h,
    playable: c = !0,
    renderImageComponent: m,
    renderForwardComponent: p,
    alt: g = o.Z.Messages.GIF,
    ...f
  } = e;
  return (0, t.jsx)(i.h.Consumer, {
    children: e => m({
      ...f,
      alt: g,
      src: n,
      containerClassName: h,
      autoPlay: d,
      animated: c,
      responsive: a,
      renderAccessory: e,
      renderForwardComponent: p,
      tabIndex: c ? 0 : -1,
      children(e) {
        let {
          src: n,
          size: i,
          animating: o,
          alt: d
        } = e;
        return (0, t.jsx)(u, {
          alt: d,
          className: h,
          poster: n,
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