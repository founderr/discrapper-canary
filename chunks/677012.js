"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("735250"),
  a = n("470079"),
  i = n("477690"),
  u = n("481060"),
  r = n("208156"),
  o = n("962250"),
  s = n("368874"),
  d = n("467679"),
  c = n("465670"),
  f = n("624138"),
  I = n("293979"),
  T = n("674563"),
  m = n("689938"),
  E = n("995657");
let p = (0, f.cssValueToNumber)(i.default.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  _ = (0, f.cssValueToNumber)(i.default.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  N = (0, f.cssValueToNumber)(i.default.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  S = (0, f.cssValueToNumber)(i.default.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function h(e) {
  var t;
  let {
    title: n,
    onClose: i
  } = e, {
    applicationIconURL: f,
    applicationName: h,
    queryParams: A,
    iframeUrl: M
  } = (0, I.useIframeModalState)(e), {
    width: C,
    height: O
  } = (0, o.useScreenDimensions)(), v = a.useMemo(() => {
    let e = Math.min((O - S - 2 * N) * 16 / 9, _);
    return Math.max(p, Math.min(C - 2 * N, e))
  }, [C, O]);
  return (0, l.jsx)(u.ModalRoot, {
    ...e,
    size: u.ModalSize.DYNAMIC,
    className: E.root,
    children: (0, l.jsxs)("div", {
      style: {
        width: v
      },
      children: [(0, l.jsxs)(u.ModalHeader, {
        separator: !1,
        className: E.modalHeader,
        children: [(0, l.jsx)(u.Avatar, {
          src: f,
          size: u.AvatarSizes.SIZE_32,
          "aria-label": h,
          className: E.applicationIcon
        }), (0, l.jsxs)("div", {
          className: E.flexRow,
          children: [(0, l.jsxs)("div", {
            children: [(0, l.jsx)(u.Heading, {
              variant: "heading-sm/bold",
              children: h
            }), (0, l.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "interactive-normal",
              children: n
            })]
          }), (0, l.jsx)(d.default, {
            type: T.BotTagTypes.BOT,
            className: E.botTag,
            verified: null === (t = e.application.bot) || void 0 === t ? void 0 : t.verified
          })]
        }), (0, l.jsx)(u.Button, {
          onClick: i,
          innerClassName: E.closeButton,
          className: E.closeButtonContainer,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          "aria-label": m.default.Messages.DISMISS,
          children: (0, l.jsx)(c.default, {
            className: E.closeIcon
          })
        })]
      }), (0, l.jsx)(s.default, {
        aspectRatio: 16 / 9,
        children: (0, l.jsx)(r.EmbedIFrameWithLoadingBackground, {
          url: M,
          shouldRefocus: !0,
          className: E.iframe,
          queryParams: A
        })
      })]
    })
  })
}