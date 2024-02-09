"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, a = n("37983"),
  s = n("884691"),
  i = n("254490"),
  r = n("952368"),
  o = n("170113"),
  u = n("49111"),
  d = n("782340");
l = class extends s.Component {
  render() {
    let {
      src: e,
      fileSize: t,
      className: n,
      mediaPlayerClassName: l,
      poster: s,
      fileName: c,
      naturalWidth: m,
      naturalHeight: f,
      playable: h,
      downloadable: p = !0,
      volume: g,
      autoPlay: E,
      autoMute: C,
      responsive: v,
      mediaLayoutType: I,
      mimeType: S,
      renderOverlayContent: x,
      renderLinkComponent: _,
      onClick: N,
      onPlay: T,
      onEnded: M,
      onVolumeChange: A,
      onMute: O,
      alt: j = d.default.Messages.VIDEO,
      ...y
    } = this.props;
    return (0, a.jsx)(r.default, {
      alt: j,
      className: n,
      src: s,
      ...y,
      minWidth: o.default.minWidth,
      minHeight: o.default.minHeight,
      shouldLink: !1,
      shouldAnimate: !1,
      mediaLayoutType: I,
      responsive: v,
      children: n => {
        let {
          src: s,
          size: {
            width: r,
            height: d
          }
        } = n, j = !(m <= u.MAX_VIDEO_WIDTH && f <= u.MAX_VIDEO_HEIGHT || m <= u.MAX_VIDEO_HEIGHT && f <= u.MAX_VIDEO_WIDTH);
        return (0, a.jsx)(o.default, {
          className: l,
          forceExternal: j,
          src: e,
          poster: s,
          width: r,
          height: d,
          responsive: v,
          volume: g,
          autoPlay: null != E && E,
          autoMute: null != C && C,
          type: o.default.Types.VIDEO,
          mediaLayoutType: I,
          fileName: c,
          fileSize: null == t ? void 0 : (0, i.sizeString)(t),
          playable: h,
          renderLinkComponent: _,
          renderOverlayContent: x,
          onClick: N,
          onPlay: T,
          onEnded: M,
          onVolumeChange: A,
          onMute: O,
          mimeType: S,
          downloadable: p
        })
      }
    })
  }
}