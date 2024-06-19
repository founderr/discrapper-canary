t.r(a), t(47120);
var s = t(735250),
  n = t(470079),
  i = t(442837),
  r = t(481060),
  d = t(367907),
  l = t(434404),
  o = t(650774),
  c = t(153124),
  E = t(816817),
  C = t(981631),
  _ = t(689938),
  S = t(574845);
a.default = e => {
  let {
    transitionState: a,
    onClose: t,
    guild: u
  } = e, h = (0, c.Dt)();
  n.useEffect(() => {
    d.ZP.trackWithMetadata(C.rMx.OPEN_MODAL, {
      type: C.jXE.DISCOVERY_SETUP_SUCCESS_MODAL
    })
  }, []);
  let [m, M] = (0, i.Wu)([o.Z], () => [o.Z.getOnlineCount(u.id), o.Z.getMemberCount(u.id)], [u.id]);
  return (0, s.jsxs)(r.ModalRoot, {
    transitionState: a,
    "aria-labelledby": h,
    className: S.root,
    children: [(0, s.jsx)(r.ModalHeader, {
      className: S.modalHeader,
      separator: !1,
      children: (0, s.jsx)(r.ModalCloseButton, {
        onClick: t,
        className: S.modalCloseButton
      })
    }), (0, s.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      id: h,
      className: S.header,
      children: _.Z.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER
    }), (0, s.jsxs)(r.ModalContent, {
      className: S.modalContent,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        className: S.subheader,
        children: _.Z.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format({
          onServerSettingsClick: () => {
            t(), l.Z.setSection(C.pNK.DISCOVERY), d.ZP.trackWithMetadata(C.rMx.SETTINGS_PANE_VIEWED, {
              settings_type: "guild",
              origin_pane: "DISCOVERY",
              destination_pane: "DISCOVERY"
            })
          }
        })
      }), (0, s.jsx)(E.Z, {
        className: S.previewCard,
        guild: u,
        presenceCount: m,
        memberCount: M
      })]
    }), (0, s.jsx)(r.ModalFooter, {
      children: (0, s.jsx)(r.Button, {
        onClick: t,
        children: _.Z.Messages.GOT_IT
      })
    })]
  })
}