s.r(a), s.d(a, {
  TeamSetup: function() {
    return T
  },
  default: function() {
    return A
  }
}), s(47120);
var t = s(735250),
  n = s(470079),
  l = s(481060),
  r = s(782568),
  o = s(53365),
  _ = s(377176),
  d = s(577275),
  E = s(153124),
  O = s(981631),
  c = s(829857),
  i = s(689938),
  N = s(941882);

function T(e) {
  let {
    selectedTeamId: a,
    onSetSelectedTeamId: s,
    teamOptions: n
  } = e;
  return (0, t.jsx)("div", {
    className: N.teamSetup,
    children: 0 === n.length ? (0, t.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: i.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_NO_TEAM_BODY.format()
    }) : (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(l.Text, {
        variant: "text-md/normal",
        className: N.teamBodyText,
        color: "header-secondary",
        children: i.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_CHOOSE_TEAM_BODY
      }), (0, t.jsx)(l.SingleSelect, {
        options: n,
        placeholder: i.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
        value: a,
        onChange: s,
        "aria-label": i.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
      })]
    })
  })
}

function A(e) {
  let {
    guildId: a,
    requireTeamSetup: s,
    onClose: A,
    transitionState: M
  } = e, h = (0, E.Dt)(), [u, I] = n.useState(), [R, x] = n.useState(!1), {
    teams: C
  } = (0, d.Z)(), m = C.filter(e => e.payout_account_status === c.C.ACTIVE), D = n.useMemo(() => m.map(e => ({
    label: e.name,
    value: e.id
  })), [m]), L = n.useCallback(() => {
    (0, r.Z)(O.EYA.DEVELOPER_PORTAL_TEAMS)
  }, []);
  return (0, t.jsxs)(l.ModalRoot, {
    "aria-labelledby": h,
    size: l.ModalSize.DYNAMIC,
    transitionState: M,
    children: [(0, t.jsx)(l.ModalHeader, {
      separator: !1,
      className: N.header,
      children: (0, t.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: s ? i.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE : i.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE_ACCEPT_TERM_ONLY
      })
    }), (0, t.jsxs)(l.ModalContent, {
      className: N.content,
      children: [s && (0, t.jsx)(T, {
        selectedTeamId: u,
        onSetSelectedTeamId: I,
        teamOptions: D
      }), (0, t.jsx)(l.Checkbox, {
        onChange: () => {
          x(e => !e)
        },
        size: 20,
        type: l.Checkbox.Types.INVERTED,
        value: R,
        children: (0, t.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: (0, _.f)()
        })
      })]
    }), (0, t.jsx)(l.ModalFooter, {
      className: N.footer,
      children: (0, t.jsx)("div", {
        className: N.buttons,
        children: s && 0 === D.length ? (0, t.jsx)(l.Button, {
          onClick: L,
          children: i.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_SETUP_TEAM_CTA
        }) : (0, t.jsx)(l.Button, {
          disabled: !R || s && null == u,
          onClick: () => {
            A(), (0, o.df)(a, u)
          },
          children: i.Z.Messages.SUBMIT
        })
      })
    })]
  })
}