"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(374470),
  a = n(481060),
  l = n(40851),
  u = n(261922),
  _ = n(926836),
  d = n(956664),
  c = n(506071),
  E = n(689938),
  I = n(381237);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = "Zoomed Lazy Image Modal";
class S extends(i = s.PureComponent) {
  render() {
    let {
      appContext: e,
      isWindowFocused: t,
      ...n
    } = this.props;
    return (0, r.jsx)(u.Z, {
      ...n,
      onZoom: this.onZoom,
      onMouseEnter: this.onMouseEnter,
      shouldAnimate: t
    })
  }
  constructor(...e) {
    super(...e), T(this, "onMouseEnter", (e, t) => {
      let {
        preloadImage: n
      } = t, {
        width: i,
        height: r
      } = this.props;
      n((0, d.zp)(i, r))
    }), T(this, "modalContext", (0, a.modalContextFromAppContext)(this.props.appContext)), T(this, "onCloseImage", () => {
      (0, a.closeModal)(h, this.modalContext)
    }), T(this, "onZoom", (e, t) => {
      let {
        zoomThumbnailPlaceholder: n,
        trigger: i
      } = t;
      e.preventDefault();
      let {
        alt: s,
        src: l,
        original: u,
        width: d,
        height: c,
        animated: T,
        children: S,
        renderLinkComponent: f,
        isWindowFocused: N,
        shouldHideMediaOptions: A = !1
      } = this.props, m = {
        alt: s,
        src: l,
        original: null != u ? u : l,
        width: d,
        height: c,
        animated: T,
        children: S,
        zoomThumbnailPlaceholder: n,
        renderLinkComponent: f,
        onContextMenu: A ? e => {
          e.stopPropagation(), e.preventDefault()
        } : void 0,
        trigger: i
      };
      (0, o.k)(e.currentTarget) && e.currentTarget.blur(), (0, a.openModal)(e => (0, r.jsx)(a.ModalRoot, {
        className: I.modal,
        ...e,
        size: a.ModalSize.DYNAMIC,
        "aria-label": E.Z.Messages.IMAGE,
        children: (0, r.jsx)(_.y, {
          ...m,
          className: I.image,
          shouldAnimate: N,
          onClose: this.onCloseImage,
          shouldHideMediaOptions: A
        })
      }), {
        modalKey: h
      }, this.modalContext)
    })
  }
}

function f(e) {
  let t = (0, l.bp)(),
    n = (0, c.n)();
  return (0, r.jsx)(S, {
    ...e,
    isWindowFocused: n,
    appContext: t
  })
}
T(S, "defaultProps", {
  shouldLink: !0,
  autoPlay: !1,
  animated: !1
})