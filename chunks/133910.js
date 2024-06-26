"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(640108),
  o = n(403182),
  a = n(261922),
  l = n(981631),
  u = n(689938);
class _ extends r.Component {
  render() {
    let {
      src: e,
      fileSize: t,
      className: n,
      mediaPlayerClassName: r,
      poster: _,
      fileName: c,
      naturalWidth: d,
      naturalHeight: E,
      playable: I,
      downloadable: T = !0,
      volume: h,
      autoPlay: f,
      autoMute: S,
      responsive: N,
      mediaLayoutType: A,
      mimeType: m,
      renderOverlayContent: O,
      renderLinkComponent: p,
      onClick: R,
      onPlay: g,
      onPause: C,
      onEnded: v,
      onControlsShow: L,
      onControlsHide: D,
      onVolumeChange: M,
      onMute: P,
      alt: y = u.Z.Messages.VIDEO,
      ...U
    } = this.props;
    return (0, i.jsx)(a.Z, {
      alt: y,
      className: n,
      src: _,
      ...U,
      minWidth: s.ZP.minWidth,
      minHeight: s.ZP.minHeight,
      shouldLink: !1,
      shouldAnimate: !1,
      mediaLayoutType: A,
      responsive: N,
      children: n => {
        let {
          src: a,
          size: {
            width: u,
            height: _
          }
        } = n, y = !(d <= l.N_j && E <= l.XKF || d <= l.XKF && E <= l.N_j);
        return (0, i.jsx)(s.ZP, {
          className: r,
          forceExternal: y,
          src: e,
          poster: a,
          width: u,
          height: _,
          responsive: N,
          volume: h,
          autoPlay: null != f && f,
          autoMute: null != S && S,
          type: s.ZP.Types.VIDEO,
          mediaLayoutType: A,
          fileName: c,
          fileSize: null == t ? void 0 : (0, o.Ng)(t),
          fileSizeBytes: null == t ? void 0 : t,
          playable: I,
          renderLinkComponent: p,
          renderOverlayContent: O,
          onClick: R,
          onPlay: g,
          onPause: C,
          onEnded: v,
          onVolumeChange: M,
          onMute: P,
          onControlsShow: L,
          onControlsHide: D,
          mimeType: m,
          downloadable: T
        })
      }
    })
  }
}