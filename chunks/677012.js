n.r(i), n.d(i, {
  default: function() {
    return x
  }
});
var t = n(735250),
  a = n(470079),
  s = n(477690),
  r = n(481060),
  o = n(208156),
  l = n(962250),
  d = n(368874),
  c = n(467679),
  u = n(624138),
  h = n(293979),
  M = n(674563),
  m = n(689938),
  v = n(32300);
let N = (0, u.Mg)(s.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  I = (0, u.Mg)(s.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  A = (0, u.Mg)(s.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  _ = (0, u.Mg)(s.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function x(e) {
  var i;
  let {
    title: n,
    onClose: s
  } = e, {
    applicationIconURL: u,
    applicationName: x,
    queryParams: w,
    iframeUrl: f
  } = (0, h.b8)(e), {
    width: p,
    height: E
  } = (0, l.b)(), j = a.useMemo(() => {
    let e = Math.min((E - _ - 2 * A) * 16 / 9, I);
    return Math.max(N, Math.min(p - 2 * A, e))
  }, [p, E]);
  return (0, t.jsx)(r.ModalRoot, {
    ...e,
    size: r.ModalSize.DYNAMIC,
    className: v.root,
    children: (0, t.jsxs)("div", {
      style: {
        width: j
      },
      children: [(0, t.jsxs)(r.ModalHeader, {
        separator: !1,
        className: v.modalHeader,
        children: [(0, t.jsx)(r.Avatar, {
          src: u,
          size: r.AvatarSizes.SIZE_32,
          "aria-label": x,
          className: v.applicationIcon
        }), (0, t.jsxs)("div", {
          className: v.flexRow,
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(r.Heading, {
              variant: "heading-sm/bold",
              children: x
            }), (0, t.jsx)(r.Text, {
              variant: "text-xs/medium",
              color: "interactive-normal",
              children: n
            })]
          }), (0, t.jsx)(c.Z, {
            type: M.Hb.BOT,
            className: v.botTag,
            verified: null === (i = e.application.bot) || void 0 === i ? void 0 : i.verified
          })]
        }), (0, t.jsx)(r.Button, {
          onClick: s,
          innerClassName: v.closeButton,
          className: v.closeButtonContainer,
          look: r.Button.Looks.BLANK,
          size: r.Button.Sizes.NONE,
          "aria-label": m.Z.Messages.DISMISS,
          children: (0, t.jsx)(r.CloseSmallIcon, {
            size: "md",
            color: "currentColor",
            className: v.closeIcon
          })
        })]
      }), (0, t.jsx)(d.Z, {
        aspectRatio: 16 / 9,
        children: (0, t.jsx)(o.J, {
          url: f,
          shouldRefocus: !0,
          className: v.iframe,
          queryParams: w
        })
      })]
    })
  })
}