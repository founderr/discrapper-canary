"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("47120");
var o = s("735250"),
  n = s("470079"),
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
  } = e, [m, x] = n.useState(!1), [f, p] = n.useState(null), h = n.useRef(null), [C] = n.useState(new a.Timeout), g = n.useMemo(() => (0, r.getLootboxes)(), []), M = null != f ? g[f.openedItem] : null, N = n.useCallback(async () => {
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
  return n.useEffect(() => () => C.stop(), [C]), n.useEffect(() => () => {
    null != h.current && (0, u.reportFinishedOpeningLootbox)(h.current.userLootboxData, h.current.openedItem)
  }, []), (0, o.jsxs)(l.ModalRoot, {
    transitionState: d,
    className: i.root,
    children: [(0, o.jsxs)(l.ModalContent, {
      className: i.content,
      children: [null == M || m ? (0, o.jsx)("img", {
        alt: "",
        src: s("243869"),
        className: i.imageBox
      }) : (0, o.jsx)("img", {
        alt: "",
        src: M.image,
        className: i.imageItem
      }), null != M ? (0, o.jsx)(l.Text, {
        className: i.text,
        variant: "text-md/medium",
        children: M.receivedCopy.format({
          item: M.name
        })
      }) : null, (0, o.jsx)(l.Text, {
        className: i.text,
        variant: "text-sm/normal",
        color: "text-muted",
        children: c.default.Messages.PACKAGES_REDUCED_MOTION_NOTE
      })]
    }), (0, o.jsxs)(l.ModalFooter, {
      children: [(0, o.jsx)(l.Button, {
        onClick: m ? void 0 : null != M ? t : N,
        submitting: m,
        children: null != M ? c.default.Messages.CONFIRM : c.default.Messages.PACKAGES_OPEN_PACKAGE
      }), (0, o.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: t,
        children: c.default.Messages.CLOSE
      })]
    })]
  })
}