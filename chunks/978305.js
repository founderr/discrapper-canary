"use strict";
t.r(s), t("47120");
var r = t("735250"),
  a = t("470079"),
  o = t("120356"),
  l = t.n(o),
  n = t("512722"),
  i = t.n(n),
  c = t("481060"),
  d = t("277390"),
  u = t("507893"),
  C = t("626135"),
  _ = t("985002"),
  f = t("880257"),
  E = t("631885"),
  m = t("292352"),
  R = t("981631"),
  h = t("689938"),
  N = t("25908"),
  O = t("611273");
s.default = e => {
  let {
    transitionState: s,
    onClose: t
  } = e, o = (0, f.default)(), [n, x] = a.useState(!1), {
    getLinkCode: g,
    isGetLinkCodeLoading: p
  } = (0, _.useFamilyCenterActions)({}), M = (0, E.useUserQRLinkUrl)(), I = (0, E.usePendingRequestCount)(), A = a.useRef(I);
  i()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let v = () => {
    x(e => (C.default.track(R.AnalyticEvents.FAMILY_CENTER_ACTION, {
      action: n ? m.FamilyCenterAction.HideQRCode : m.FamilyCenterAction.RevealQRCode
    }), !e)), !n && setTimeout(() => {
      t()
    }, m.QR_CODE_AUTO_HIDE_TIMEOUT)
  };
  a.useEffect(() => {
    g()
  }, []), a.useEffect(() => {
    I > A.current && t()
  }, [A, I, t]);
  let T = n && !p && null != M;
  return (0, r.jsxs)(c.ModalRoot, {
    className: N.modalRoot,
    transitionState: s,
    children: [(0, r.jsxs)(c.Notice, {
      className: N.notice,
      color: c.NoticeColors.WARNING,
      children: [(0, r.jsx)(u.default, {
        className: N.infoIcon,
        width: 18,
        height: 18
      }), h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE]
    }), (0, r.jsxs)(c.ModalContent, {
      className: N.content,
      children: [(0, r.jsx)(c.Text, {
        className: O.marginBottom8,
        variant: "text-lg/bold",
        color: "header-primary",
        children: h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER
      }), (0, r.jsx)(c.Text, {
        className: O.marginBottom20,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), (0, r.jsx)("div", {
        className: N.qrCode,
        children: (0, r.jsx)(c.Clickable, {
          className: l()(N.qrCodeObscure, {
            [N.visible]: T
          }),
          onClick: v,
          children: (0, r.jsx)(d.QRCodeWithOverlay, {
            size: 272,
            text: T ? M : m.PLACEHOLDER_QR_CODE_URL,
            overlaySize: d.QRCodeOverlaySizes.SIZE_60
          })
        })
      }), (0, r.jsx)(c.Text, {
        className: N.reminder,
        variant: "text-xs/semibold",
        color: "header-secondary",
        children: h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER
      }), (0, r.jsxs)("div", {
        className: l()(N.buttonContainer, O.marginTop20),
        children: [(0, r.jsx)(c.Button, {
          className: O.marginBottom8,
          grow: !0,
          size: c.Button.Sizes.LARGE,
          onClick: v,
          submitting: n && p,
          children: n ? h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE : h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW
        }), (0, r.jsx)(c.Button, {
          grow: !0,
          color: c.Button.Colors.PRIMARY,
          onClick: t,
          children: h.default.Messages.CLOSE
        })]
      })]
    })]
  })
}