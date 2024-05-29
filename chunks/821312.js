"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("47120");
var s = a("735250"),
  d = a("470079"),
  l = a("120356"),
  n = a.n(l),
  i = a("831209"),
  o = a("481060"),
  r = a("367907"),
  u = a("177862"),
  c = a("465670"),
  _ = a("630641"),
  E = a("981631"),
  I = a("689938"),
  D = a("818823");

function A(e) {
  let {
    guildId: t,
    transitionState: a,
    onClose: l
  } = e, [A, N] = d.useState([]), [T, h] = d.useState(), R = [{
    text: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
    value: u.RaidLockdownFeedbackType.DM_SPAM
  }, {
    text: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
    value: u.RaidLockdownFeedbackType.MENTION_SPAM
  }, {
    text: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
    value: u.RaidLockdownFeedbackType.CHANNEL_SPAM
  }, {
    text: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
    value: u.RaidLockdownFeedbackType.SUS_NEW_MEMBERS
  }, {
    text: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
    value: u.RaidLockdownFeedbackType.CHANGING_SETTINGS
  }, {
    text: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
    value: u.RaidLockdownFeedbackType.OTHER
  }];

  function L(e) {
    A.includes(e) ? N(t => t.filter(t => t !== e)) : N(t => [...t, e])
  }
  return null == t ? (l(), null) : (0, s.jsxs)(o.ModalRoot, {
    transitionState: a,
    size: o.ModalSize.MEDIUM,
    children: [(0, s.jsx)(o.ModalHeader, {
      separator: !0,
      children: (0, s.jsxs)("div", {
        className: D.headerContainer,
        children: [(0, s.jsxs)("div", {
          className: D.headerText,
          children: [(0, s.jsx)(_.default, {
            color: i.default.INTERACTIVE_NORMAL,
            width: 16,
            height: 16
          }), (0, s.jsx)(o.Heading, {
            color: "header-primary",
            variant: "heading-md/semibold",
            children: I.default.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
          })]
        }), (0, s.jsx)(o.Clickable, {
          onClick: l,
          children: (0, s.jsx)(c.default, {
            className: D.closeIcon,
            width: 16,
            height: 16
          })
        })]
      })
    }), (0, s.jsx)(o.ModalContent, {
      children: (0, s.jsx)("div", {
        className: D.options,
        children: R.map(e => {
          let {
            text: t,
            value: a
          } = e;
          return (0, s.jsxs)("div", {
            className: n()(D.optionContainer, {
              [D.optionContainerOther]: a === u.RaidLockdownFeedbackType.OTHER
            }),
            children: [(0, s.jsxs)(o.Clickable, {
              className: D.optionText,
              onClick: () => L(a),
              children: [(0, s.jsx)("div", {
                children: (0, s.jsx)(o.Checkbox, {
                  type: o.Checkbox.Types.INVERTED,
                  size: 20,
                  value: A.includes(a),
                  onChange: () => L(a)
                })
              }), (0, s.jsx)(o.Text, {
                variant: "text-md/medium",
                color: A.includes(a) ? "interactive-active" : "interactive-normal",
                children: t
              })]
            }), a === u.RaidLockdownFeedbackType.OTHER && A.includes(u.RaidLockdownFeedbackType.OTHER) && (0, s.jsx)("div", {
              className: D.textboxContainer,
              children: (0, s.jsx)(o.TextArea, {
                className: D.serverLockdownReasonText,
                placeholder: I.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => h(e),
                value: T,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, a)
        })
      })
    }), (0, s.jsx)(o.ModalFooter, {
      children: (0, s.jsx)(o.Button, {
        onClick: function() {
          (0, r.trackWithMetadata)(E.AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, {
            raid_lockdown_feedback_type: A,
            raid_lockdown_feedback_other_reason: T,
            guild_id: t
          }), l()
        },
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        submitting: !1,
        children: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
      })
    })]
  })
}