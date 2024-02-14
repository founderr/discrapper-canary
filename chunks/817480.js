"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("118810"),
  s = n("77078"),
  r = n("244201"),
  o = n("952368"),
  u = n("924444"),
  d = n("103603"),
  c = n("866190"),
  f = n("782340"),
  m = n("542624");
let p = "Zoomed Lazy Image Modal";
class h extends i.PureComponent {
  render() {
    let {
      appContext: e,
      isWindowFocused: t,
      ...n
    } = this.props;
    return (0, l.jsx)(o.default, {
      ...n,
      onZoom: this.onZoom,
      onMouseEnter: this.onMouseEnter,
      shouldAnimate: t
    })
  }
  constructor(...e) {
    super(...e), this.onMouseEnter = (e, t) => {
      let {
        preloadImage: n
      } = t, {
        width: l,
        height: i
      } = this.props;
      n((0, d.zoomFit)(l, i))
    }, this.modalContext = (0, s.modalContextFromAppContext)(this.props.appContext), this.onCloseImage = () => {
      (0, s.closeModal)(p, this.modalContext)
    }, this.onZoom = (e, t) => {
      let {
        zoomThumbnailPlaceholder: n
      } = t;
      e.preventDefault();
      let {
        alt: i,
        src: r,
        original: o,
        width: d,
        height: c,
        animated: h,
        children: E,
        renderLinkComponent: g,
        isWindowFocused: S,
        shouldHideMediaOptions: C = !1
      } = this.props, T = {
        alt: i,
        src: r,
        original: null != o ? o : r,
        width: d,
        height: c,
        animated: h,
        children: E,
        zoomThumbnailPlaceholder: n,
        renderLinkComponent: g,
        onContextMenu: C ? e => {
          e.stopPropagation(), e.preventDefault()
        } : void 0
      };
      (0, a.isElement)(e.currentTarget) && e.currentTarget.blur(), (0, s.openModal)(e => (0, l.jsx)(s.ModalRoot, {
        className: m.modal,
        ...e,
        size: s.ModalSize.DYNAMIC,
        "aria-label": f.default.Messages.IMAGE,
        children: (0, l.jsx)(u.ImageModal, {
          ...T,
          className: m.image,
          shouldAnimate: S,
          onClose: this.onCloseImage,
          shouldHideMediaOptions: C
        })
      }), {
        modalKey: p
      }, this.modalContext)
    }
  }
}

function E(e) {
  let t = (0, r.useAppContext)(),
    n = (0, c.useIsWindowFocused)();
  return (0, l.jsx)(h, {
    ...e,
    isWindowFocused: n,
    appContext: t
  })
}
h.defaultProps = {
  shouldLink: !0,
  autoPlay: !1,
  animated: !1
}