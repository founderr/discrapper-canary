"use strict";
n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(374470),
  a = n(481060),
  l = n(40851),
  u = n(751586),
  _ = n(261922),
  c = n(626135),
  d = n(956664),
  E = n(506071),
  I = n(981631),
  T = n(503349),
  h = n(689938),
  f = n(422322);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class A extends(i = s.PureComponent) {
  render() {
    let {
      appContext: e,
      isWindowFocused: t,
      ...n
    } = this.props;
    return (0, r.jsx)(_.Z, {
      ...n,
      onZoom: this.onZoom,
      onMouseEnter: this.onMouseEnter,
      shouldAnimate: t
    })
  }
  constructor(...e) {
    super(...e), S(this, "onMouseEnter", (e, t) => {
      let {
        preloadImage: n
      } = t, {
        width: i,
        height: r
      } = this.props;
      n((0, d.zp)(i, r))
    }), S(this, "modalContext", (0, a.modalContextFromAppContext)(this.props.appContext)), S(this, "onCloseImage", () => {
      (0, a.closeModal)(T.c, this.modalContext)
    }), S(this, "onZoom", (e, t) => {
      let {
        zoomThumbnailPlaceholder: n,
        trigger: i
      } = t;
      e.preventDefault();
      let {
        alt: s,
        src: l,
        original: _,
        width: d,
        height: E,
        animated: S,
        children: A,
        renderLinkComponent: N,
        renderForwardComponent: m,
        isWindowFocused: O,
        shouldHideMediaOptions: R = !1
      } = this.props, p = {
        alt: s,
        src: l,
        original: null != _ ? _ : l,
        width: d,
        height: E,
        animated: S,
        children: A,
        zoomThumbnailPlaceholder: n,
        renderLinkComponent: N,
        renderForwardComponent: m,
        onContextMenu: R ? e => {
          e.stopPropagation(), e.preventDefault()
        } : void 0,
        trigger: i
      };
      (0, o.k)(e.currentTarget) && e.currentTarget.blur(), c.default.track(I.rMx.OPEN_MODAL, {
        type: "Media Modal"
      }), (0, a.openModal)(e => (0, r.jsx)(a.ModalRoot, {
        className: f.modal,
        ...e,
        size: a.ModalSize.DYNAMIC,
        "aria-label": h.Z.Messages.IMAGE,
        children: (0, r.jsx)(u.y, {
          ...p,
          className: f.image,
          shouldAnimate: O,
          onClose: this.onCloseImage,
          shouldHideMediaOptions: R
        })
      }), {
        modalKey: T.c
      }, this.modalContext)
    })
  }
}

function N(e) {
  let t = (0, l.bp)(),
    n = (0, E.n)();
  return (0, r.jsx)(A, {
    ...e,
    isWindowFocused: n,
    appContext: t
  })
}
S(A, "defaultProps", {
  shouldLink: !0,
  autoPlay: !1,
  animated: !1
})