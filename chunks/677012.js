"use strict";
t.r(a), t.d(a, {
  default: function() {
    return T
  }
});
var i = t("735250"),
  s = t("470079"),
  n = t("477690"),
  r = t("481060"),
  o = t("208156"),
  l = t("962250"),
  d = t("368874"),
  u = t("467679"),
  c = t("465670"),
  h = t("624138"),
  m = t("293979"),
  N = t("674563"),
  f = t("689938"),
  M = t("995657");
let v = (0, h.cssValueToNumber)(n.default.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  I = (0, h.cssValueToNumber)(n.default.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  A = (0, h.cssValueToNumber)(n.default.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  _ = (0, h.cssValueToNumber)(n.default.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function T(e) {
  var a;
  let {
    title: t,
    onClose: n
  } = e, {
    applicationIconURL: h,
    applicationName: T,
    queryParams: x,
    iframeUrl: w
  } = (0, m.useIframeModalState)(e), {
    width: p,
    height: E
  } = (0, l.useScreenDimensions)(), j = s.useMemo(() => {
    let e = Math.min((E - _ - 2 * A) * 16 / 9, I);
    return Math.max(v, Math.min(p - 2 * A, e))
  }, [p, E]);
  return (0, i.jsx)(r.ModalRoot, {
    ...e,
    size: r.ModalSize.DYNAMIC,
    className: M.root,
    children: (0, i.jsxs)("div", {
      style: {
        width: j
      },
      children: [(0, i.jsxs)(r.ModalHeader, {
        separator: !1,
        className: M.modalHeader,
        children: [(0, i.jsx)(r.Avatar, {
          src: h,
          size: r.AvatarSizes.SIZE_32,
          "aria-label": T,
          className: M.applicationIcon
        }), (0, i.jsxs)("div", {
          className: M.flexRow,
          children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.Heading, {
              variant: "heading-sm/bold",
              children: T
            }), (0, i.jsx)(r.Text, {
              variant: "text-xs/medium",
              color: "interactive-normal",
              children: t
            })]
          }), (0, i.jsx)(u.default, {
            type: N.BotTagTypes.BOT,
            className: M.botTag,
            verified: null === (a = e.application.bot) || void 0 === a ? void 0 : a.verified
          })]
        }), (0, i.jsx)(r.Button, {
          onClick: n,
          innerClassName: M.closeButton,
          className: M.closeButtonContainer,
          look: r.Button.Looks.BLANK,
          size: r.Button.Sizes.NONE,
          "aria-label": f.default.Messages.DISMISS,
          children: (0, i.jsx)(c.default, {
            className: M.closeIcon
          })
        })]
      }), (0, i.jsx)(d.default, {
        aspectRatio: 16 / 9,
        children: (0, i.jsx)(o.EmbedIFrameWithLoadingBackground, {
          url: w,
          shouldRefocus: !0,
          className: M.iframe,
          queryParams: x
        })
      })]
    })
  })
}