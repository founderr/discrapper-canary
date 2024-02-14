"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var r = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  s = n("133457"),
  u = n("784736"),
  o = n("145131"),
  c = n("9074"),
  d = n("782340"),
  _ = n("733676");

function f(e) {
  var t;
  let {
    eulaId: n,
    transitionState: f,
    onClose: h
  } = e, E = (0, l.useStateFromStores)([u.default], () => u.default.getEULA(n));
  a.useEffect(() => {
    (0, s.fetchEULA)(n)
  }, [n]);
  let g = null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : d.default.Messages.LOADING,
    m = null != E ? (0, r.jsx)(c.default, {
      children: E.content,
      className: _.markdown
    }) : (0, r.jsx)(i.Spinner, {
      className: _.spinner
    });
  return (0, r.jsxs)(i.ModalRoot, {
    transitionState: f,
    size: i.ModalSize.SMALL,
    "aria-label": g,
    children: [(0, r.jsxs)(i.ModalHeader, {
      justify: o.default.Justify.BETWEEN,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: g
      }), (0, r.jsx)(i.ModalCloseButton, {
        onClick: h
      })]
    }), (0, r.jsx)(i.ModalContent, {
      children: m
    })]
  })
}