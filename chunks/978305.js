r.r(s), r(47120);
var o = r(735250),
  t = r(470079),
  a = r(120356),
  n = r.n(a),
  l = r(512722),
  i = r.n(l),
  c = r(481060),
  d = r(277390),
  C = r(626135),
  u = r(985002),
  _ = r(880257),
  f = r(631885),
  m = r(292352),
  E = r(981631),
  N = r(689938),
  h = r(425597),
  x = r(331651);
s.default = e => {
  let {
    transitionState: s,
    onClose: r
  } = e, a = (0, _.Z)(), [l, R] = t.useState(!1), {
    getLinkCode: g,
    isGetLinkCodeLoading: p
  } = (0, u.G)({}), M = (0, f.rW)(), I = (0, f.gU)(), b = t.useRef(I);
  i()(!a, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let O = () => {
    R(e => (C.default.track(E.rMx.FAMILY_CENTER_ACTION, {
      action: l ? m.YC.HideQRCode : m.YC.RevealQRCode
    }), !e)), !l && setTimeout(() => {
      r()
    }, m.f2)
  };
  t.useEffect(() => {
    g()
  }, []), t.useEffect(() => {
    I > b.current && r()
  }, [b, I, r]);
  let j = l && !p && null != M;
  return (0, o.jsxs)(c.ModalRoot, {
    className: h.modalRoot,
    transitionState: s,
    children: [(0, o.jsxs)(c.Notice, {
      className: h.notice,
      color: c.NoticeColors.WARNING,
      children: [(0, o.jsx)(c.CircleInformationIcon, {
        size: "sm",
        color: "currentColor",
        className: h.infoIcon
      }), N.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE]
    }), (0, o.jsxs)(c.ModalContent, {
      className: h.content,
      children: [(0, o.jsx)(c.Text, {
        className: x.marginBottom8,
        variant: "text-lg/bold",
        color: "header-primary",
        children: N.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER
      }), (0, o.jsx)(c.Text, {
        className: x.marginBottom20,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: N.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), (0, o.jsx)("div", {
        className: h.qrCode,
        children: (0, o.jsx)(c.Clickable, {
          className: n()(h.qrCodeObscure, {
            [h.visible]: j
          }),
          onClick: O,
          children: (0, o.jsx)(d.c2, {
            size: 272,
            text: j ? M : m.vH,
            overlaySize: d.cK.SIZE_60
          })
        })
      }), (0, o.jsx)(c.Text, {
        className: h.reminder,
        variant: "text-xs/semibold",
        color: "header-secondary",
        children: N.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER
      }), (0, o.jsxs)("div", {
        className: n()(h.buttonContainer, x.marginTop20),
        children: [(0, o.jsx)(c.Button, {
          className: x.marginBottom8,
          grow: !0,
          size: c.Button.Sizes.LARGE,
          onClick: O,
          submitting: l && p,
          children: l ? N.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE : N.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW
        }), (0, o.jsx)(c.Button, {
          grow: !0,
          color: c.Button.Colors.PRIMARY,
          onClick: r,
          children: N.Z.Messages.CLOSE
        })]
      })]
    })]
  })
}