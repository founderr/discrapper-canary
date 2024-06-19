n.r(s), n.d(s, {
  default: function() {
    return _
  }
}), n(47120);
var a = n(735250);
n(470079);
var l = n(512722),
  t = n.n(l),
  o = n(481060),
  i = n(935369),
  r = n(53365),
  d = n(153124),
  c = n(981631),
  u = n(689938),
  E = n(857674);

function _(e) {
  let {
    transitionState: s,
    guild: n,
    onClose: l
  } = e, _ = (0, d.Dt)(), [T, {
    loading: N,
    error: O
  }] = (0, i.Z)(r.oL), h = async () => {
    t()(null != n, "no guild"), null != await T(n.id) && l()
  };
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: s,
    "aria-labelledby": _,
    children: [(0, a.jsxs)(o.ModalHeader, {
      children: [(0, a.jsx)(o.Heading, {
        id: _,
        variant: "heading-md/semibold",
        children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_HEADER
      }), (0, a.jsx)(o.ModalCloseButton, {
        className: E.closeButton,
        onClick: l
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: E.content,
      children: [null != O ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.FormErrorBlock, {
          children: O.message
        }), (0, a.jsx)(o.Spacer, {
          size: 24
        })]
      }) : null, (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.ERROR,
        children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_DESCRIPTION.format({
          guildName: n.toString(),
          url: c.EYA.DEVELOPER_PORTAL_TEAMS
        })
      }), (0, a.jsx)(o.Spacer, {
        size: 16
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      className: E.__invalid_footer,
      children: (0, a.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        className: E.__invalid_goBackButton,
        submitting: N,
        onClick: h,
        children: u.Z.Messages.SAVE
      })
    })]
  })
}