_.r(s), _.d(s, {
  default: function() {
    return c
  }
}), _(47120);
var a = _(735250),
  l = _(470079),
  E = _(512722),
  n = _.n(E),
  i = _(481060),
  T = _(935369),
  t = _(728345),
  o = _(577275),
  r = _(153124),
  I = _(829857),
  S = _(689938),
  d = _(857674);

function c(e) {
  var s, _;
  let {
    transitionState: E,
    application: c,
    onClose: N
  } = e, M = (0, r.Dt)(), [A, L] = l.useState(null == c ? void 0 : null === (s = c.team) || void 0 === s ? void 0 : s.id), {
    teams: C
  } = (0, o.Z)(), O = l.useMemo(() => C.filter(e => e.payout_account_status === I.C.ACTIVE).map(e => ({
    label: e.name,
    value: e.id
  })), [C]), u = (null == c ? void 0 : null === (_ = c.team) || void 0 === _ ? void 0 : _.id) !== A, [m, {
    loading: R,
    error: x
  }] = (0, T.Z)(t.Z.transferApplication), g = async () => {
    n()(null != c, "no application"), n()(null != A, "no team selected"), null != await m({
      applicationId: c.id,
      teamId: A
    }) && N()
  }, D = (null == c ? void 0 : c.team) != null;
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: E,
    "aria-labelledby": M,
    children: [(0, a.jsxs)(i.ModalHeader, {
      children: [(0, a.jsx)(i.Heading, {
        id: M,
        variant: "heading-md/semibold",
        children: D ? S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_TITLE : S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TITLE
      }), (0, a.jsx)(i.ModalCloseButton, {
        className: d.closeButton,
        onClick: N
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: d.content,
      children: [D ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.FormText, {
          children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_DESCRIPTION
        }), (0, a.jsx)(i.Spacer, {
          size: 8
        }), (0, a.jsxs)(i.Heading, {
          className: d.warningHeading,
          variant: "text-sm/semibold",
          color: "text-danger",
          children: [(0, a.jsx)(i.CircleExclamationPointIcon, {
            size: "xs",
            color: "currentColor",
            className: d.warningIcon
          }), S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING_HEADING]
        }), (0, a.jsx)(i.Spacer, {
          size: 4
        }), (0, a.jsx)(i.FormText, {
          type: i.FormText.Types.ERROR,
          children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING
        })]
      }) : (0, a.jsx)(i.FormText, {
        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_DESCRIPTION
      }), null != x ? (0, a.jsx)(i.FormErrorBlock, {
        children: x.message
      }) : null, (0, a.jsx)(i.Spacer, {
        size: 16
      }), (0, a.jsx)(i.FormItem, {
        title: D ? S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TO_TRANSFER_LABEL : S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_LABEL,
        required: !0,
        children: (0, a.jsx)(i.SingleSelect, {
          className: d.__invalid_teamSelect,
          options: O,
          placeholder: S.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
          value: A,
          isDisabled: 0 === O.length,
          onChange: e => L(e),
          "aria-label": S.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
        })
      })]
    }), (0, a.jsx)(i.ModalFooter, {
      className: d.__invalid_footer,
      children: (0, a.jsx)(i.Button, {
        color: i.Button.Colors.RED,
        className: d.__invalid_goBackButton,
        submitting: R,
        disabled: !u,
        onClick: g,
        children: S.Z.Messages.SAVE
      })
    })]
  })
}