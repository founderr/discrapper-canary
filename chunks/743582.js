"use strict";
s.r(a), s.d(a, {
  default: function() {
    return u
  }
}), s("47120");
var l = s("735250"),
  _ = s("470079"),
  t = s("512722"),
  E = s.n(t),
  n = s("481060"),
  T = s("935369"),
  i = s("728345"),
  d = s("577275"),
  o = s("153124"),
  I = s("759231"),
  S = s("829857"),
  r = s("689938"),
  N = s("616765");

function u(e) {
  var a, s;
  let {
    transitionState: t,
    application: u,
    onClose: c
  } = e, M = (0, o.useUID)(), [A, L] = _.useState(null == u ? void 0 : null === (a = u.team) || void 0 === a ? void 0 : a.id), {
    teams: O
  } = (0, d.default)(), C = _.useMemo(() => O.filter(e => e.payout_account_status === S.PayoutAccountStatuses.ACTIVE).map(e => ({
    label: e.name,
    value: e.id
  })), [O]), m = (null == u ? void 0 : null === (s = u.team) || void 0 === s ? void 0 : s.id) !== A, [R, {
    loading: g,
    error: h
  }] = (0, T.default)(i.default.transferApplication), x = async () => {
    E()(null != u, "no application"), E()(null != A, "no team selected"), null != await R({
      applicationId: u.id,
      teamId: A
    }) && c()
  }, D = (null == u ? void 0 : u.team) != null;
  return (0, l.jsxs)(n.ModalRoot, {
    transitionState: t,
    "aria-labelledby": M,
    children: [(0, l.jsxs)(n.ModalHeader, {
      children: [(0, l.jsx)(n.Heading, {
        id: M,
        variant: "heading-md/semibold",
        children: D ? r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_TITLE : r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TITLE
      }), (0, l.jsx)(n.ModalCloseButton, {
        className: N.closeButton,
        onClick: c
      })]
    }), (0, l.jsxs)(n.ModalContent, {
      className: N.content,
      children: [D ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(n.FormText, {
          children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_DESCRIPTION
        }), (0, l.jsx)(n.Spacer, {
          size: 8
        }), (0, l.jsxs)(n.Heading, {
          className: N.warningHeading,
          variant: "text-sm/semibold",
          color: "text-danger",
          children: [(0, l.jsx)(I.default, {
            width: 16,
            height: 16,
            className: N.warningIcon
          }), r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING_HEADING]
        }), (0, l.jsx)(n.Spacer, {
          size: 4
        }), (0, l.jsx)(n.FormText, {
          type: n.FormText.Types.ERROR,
          children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING
        })]
      }) : (0, l.jsx)(n.FormText, {
        children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_DESCRIPTION
      }), null != h ? (0, l.jsx)(n.FormErrorBlock, {
        children: h.message
      }) : null, (0, l.jsx)(n.Spacer, {
        size: 16
      }), (0, l.jsx)(n.FormItem, {
        title: D ? r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TO_TRANSFER_LABEL : r.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_LABEL,
        required: !0,
        children: (0, l.jsx)(n.SingleSelect, {
          className: N.__invalid_teamSelect,
          options: C,
          placeholder: r.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
          value: A,
          isDisabled: 0 === C.length,
          onChange: e => L(e),
          "aria-label": r.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
        })
      })]
    }), (0, l.jsx)(n.ModalFooter, {
      className: N.__invalid_footer,
      children: (0, l.jsx)(n.Button, {
        color: n.Button.Colors.RED,
        className: N.__invalid_goBackButton,
        submitting: g,
        disabled: !m,
        onClick: x,
        children: r.default.Messages.SAVE
      })
    })]
  })
}