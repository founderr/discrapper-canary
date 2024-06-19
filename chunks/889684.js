s.r(a);
var t = s(735250),
  o = s(470079),
  i = s(481060),
  n = s(230711),
  l = s(197115),
  r = s(626135),
  M = s(981631),
  c = s(474936),
  E = s(689938),
  d = s(24692);
a.default = e => {
  let {
    transitionState: a,
    onClose: s
  } = e;
  return o.useEffect(() => {
    r.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
      type: c.cd.EMOJI_AUTOCOMPLETE_MODAL
    })
  }, []), (0, t.jsxs)(i.ModalRoot, {
    transitionState: a,
    size: i.ModalSize.SMALL,
    "aria-label": "",
    children: [(0, t.jsxs)(i.ModalContent, {
      className: d.content,
      children: [(0, t.jsx)("div", {
        role: "image",
        className: d.image
      }), (0, t.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        className: d.header,
        children: E.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_HEADER
      }), (0, t.jsx)(i.Text, {
        variant: "text-md/normal",
        children: E.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_BLURB.format({
          onLearnMore: () => {
            s(), n.Z.open(M.oAB.PREMIUM)
          }
        })
      })]
    }), (0, t.jsx)(i.ModalFooter, {
      children: (0, t.jsx)(l.Z, {
        onClick: s,
        buttonText: "Get Nitro",
        subscriptionTier: c.Si.TIER_2,
        premiumModalAnalyticsLocation: {
          page: M.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL
        }
      })
    }), (0, t.jsx)(i.ModalCloseButton, {
      className: d.closeButton,
      onClick: s
    })]
  })
}