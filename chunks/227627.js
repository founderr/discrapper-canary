"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("47120");
var n = s("735250"),
  o = s("470079"),
  a = s("846519"),
  l = s("481060"),
  u = s("776980"),
  r = s("232700"),
  c = s("689938"),
  i = s("430139");

function d(e) {
  let {
    onClose: t,
    transitionState: d
  } = e, [m, x] = o.useState(!1), [f, p] = o.useState(null), h = o.useRef(null), [C] = o.useState(new a.Timeout), g = o.useMemo(() => (0, r.getLootboxes)(), []), M = null != f ? g[f.openedItem] : null, N = o.useCallback(async () => {
    x(!0);
    try {
      let e = await (0, u.openLootbox)();
      h.current = e, C.start(2500, () => {
        p(e), x(!1)
      })
    } catch (e) {
      x(!1)
    }
  }, [C]);
  return o.useEffect(() => () => C.stop(), [C]), o.useEffect(() => () => {
    null != h.current && (0, u.reportFinishedOpeningLootbox)(h.current.userLootboxData, h.current.openedItem)
  }, []), (0, n.jsxs)(l.ModalRoot, {
    transitionState: d,
    className: i.__invalid_root,
    children: [(0, n.jsxs)(l.ModalContent, {
      className: i.content,
      children: [null == M || m ? (0, n.jsx)("img", {
        alt: "",
        src: s("243869"),
        className: i.imageBox
      }) : (0, n.jsx)("img", {
        alt: "",
        src: M.image,
        className: i.imageItem
      }), null != M ? (0, n.jsx)(l.Text, {
        className: i.text,
        variant: "text-md/medium",
        children: M.receivedCopy.format({
          item: M.name
        })
      }) : null, (0, n.jsx)(l.Text, {
        className: i.text,
        variant: "text-sm/normal",
        color: "text-muted",
        children: c.default.Messages.PACKAGES_REDUCED_MOTION_NOTE
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      children: [(0, n.jsx)(l.Button, {
        onClick: m ? void 0 : null != M ? t : N,
        submitting: m,
        children: null != M ? c.default.Messages.CONFIRM : c.default.Messages.PACKAGES_OPEN_PACKAGE
      }), (0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: t,
        children: c.default.Messages.CLOSE
      })]
    })]
  })
}