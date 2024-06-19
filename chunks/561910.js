o.r(e), o(47120);
var t = o(735250),
  a = o(470079),
  n = o(481060),
  i = o(809206),
  l = o(100527),
  r = o(906732),
  c = o(197115),
  A = o(155433),
  d = o(626135),
  M = o(981631),
  E = o(474936),
  u = o(689938),
  L = o(150794);
e.default = s => {
  let {
    imgURI: e,
    transitionState: o,
    onClose: _,
    onChangeAvatar: T
  } = s, [S, m] = a.useState(!1), [R, x] = a.useState(!1), {
    analyticsLocations: I,
    sourceAnalyticsLocations: h
  } = (0, r.ZP)(l.Z.PREMIUM_UPSELL), N = async () => {
    m(!0);
    let s = await (0, i.Mn)({
      avatar: e
    });
    if (null == s ? void 0 : s.ok)(0, i.I5)(void 0);
    else {
      var o;
      (null == s ? void 0 : null === (o = s.body) || void 0 === o ? void 0 : o.username) != null && (0, A.P)()
    }
    m(!1), _()
  };
  return a.useEffect(() => {
    d.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
      type: E.cd.ANIMATED_USER_AVATAR_MODAL,
      location_stack: h
    })
  }, [h]), (0, t.jsx)(r.Gt, {
    value: I,
    children: (0, t.jsxs)(n.ModalRoot, {
      transitionState: o,
      size: n.ModalSize.SMALL,
      "aria-label": u.Z.Messages.IMAGE,
      children: [(0, t.jsxs)(n.ModalContent, {
        className: L.modalContent,
        paddingFix: !1,
        orientation: "horizontal",
        children: [(0, t.jsx)(n.ModalHeader, {
          separator: !1,
          className: L.header,
          children: (0, t.jsx)(n.FormTitle, {
            tag: n.FormTitleTags.H1,
            children: u.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR
          })
        }), (0, t.jsx)(n.Text, {
          color: "text-normal",
          variant: "text-md/normal",
          children: u.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_SUBTITLE
        }), (0, t.jsxs)("div", {
          className: L.promo,
          children: [(0, t.jsx)(n.Text, {
            color: "text-normal",
            variant: "text-sm/semibold",
            className: L.promoText,
            children: u.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_TEXT
          }), (0, t.jsx)(c.Z, {
            submitting: R,
            premiumModalAnalyticsLocation: {
              section: M.jXE.AVATAR_UPSELL_MODAL,
              object: M.qAy.BUTTON_CTA
            },
            size: n.Button.Sizes.SMALL,
            color: n.Button.Colors.GREEN,
            onClick: () => {
              x(!0)
            },
            onSubscribeModalClose: s => {
              x(!1), s && (N(), _())
            },
            buttonText: u.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
          })]
        })]
      }), (0, t.jsxs)(n.ModalFooter, {
        className: L.modalFooter,
        children: [(0, t.jsx)(n.Button, {
          look: n.Button.Looks.LINK,
          color: n.Button.Colors.PRIMARY,
          size: n.ButtonSizes.SMALL,
          onClick: T,
          children: u.Z.Messages.CHANGE_AVATAR_A11Y_LABEL
        }), (0, t.jsxs)("div", {
          className: L.modalFooterActions,
          children: [(0, t.jsx)(n.Button, {
            className: L.cancelButton,
            look: n.Button.Looks.LINK,
            color: n.Button.Colors.PRIMARY,
            size: n.ButtonSizes.SMALL,
            onClick: _,
            children: u.Z.Messages.AVATAR_UPLOAD_CANCEL
          }), (0, t.jsx)(n.Button, {
            size: n.ButtonSizes.SMALL,
            onClick: N,
            submitting: S,
            children: u.Z.Messages.SAVE_CHANGES
          })]
        })]
      }), (0, t.jsx)(n.Avatar, {
        src: e,
        "aria-hidden": !0,
        className: L.avatar,
        size: n.AvatarSizes.SIZE_120
      })]
    })
  })
}