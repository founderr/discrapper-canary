"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("47120");
var a = n("735250"),
  i = n("470079"),
  d = n("120356"),
  l = n.n(d),
  s = n("831209"),
  o = n("481060"),
  r = n("367907"),
  u = n("177862"),
  c = n("465670"),
  _ = n("630641"),
  E = n("981631"),
  I = n("689938"),
  A = n("818823");

function D(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: d
  } = e, [D, N] = i.useState([]), [R, T] = i.useState(), f = [{
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

  function h(e) {
    D.includes(e) ? N(t => t.filter(t => t !== e)) : N(t => [...t, e])
  }
  return null == t ? (d(), null) : (0, a.jsxs)(o.ModalRoot, {
    transitionState: n,
    size: o.ModalSize.MEDIUM,
    children: [(0, a.jsx)(o.ModalHeader, {
      separator: !0,
      children: (0, a.jsxs)("div", {
        className: A.headerContainer,
        children: [(0, a.jsxs)("div", {
          className: A.headerText,
          children: [(0, a.jsx)(_.default, {
            color: s.default.INTERACTIVE_NORMAL,
            width: 16,
            height: 16
          }), (0, a.jsx)(o.Heading, {
            color: "header-primary",
            variant: "heading-md/semibold",
            children: I.default.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
          })]
        }), (0, a.jsx)(o.Clickable, {
          onClick: d,
          children: (0, a.jsx)(c.default, {
            className: A.closeIcon,
            width: 16,
            height: 16
          })
        })]
      })
    }), (0, a.jsx)(o.ModalContent, {
      children: (0, a.jsx)("div", {
        className: A.options,
        children: f.map(e => {
          let {
            text: t,
            value: n
          } = e;
          return (0, a.jsxs)("div", {
            className: l()(A.optionContainer, {
              [A.optionContainerOther]: n === u.RaidLockdownFeedbackType.OTHER
            }),
            children: [(0, a.jsxs)(o.Clickable, {
              className: A.optionText,
              onClick: () => h(n),
              children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(o.Checkbox, {
                  type: o.Checkbox.Types.INVERTED,
                  size: 20,
                  value: D.includes(n),
                  onChange: () => h(n)
                })
              }), (0, a.jsx)(o.Text, {
                variant: "text-md/medium",
                color: D.includes(n) ? "interactive-active" : "interactive-normal",
                children: t
              })]
            }), n === u.RaidLockdownFeedbackType.OTHER && D.includes(u.RaidLockdownFeedbackType.OTHER) && (0, a.jsx)("div", {
              className: A.textboxContainer,
              children: (0, a.jsx)(o.TextArea, {
                className: A.serverLockdownReasonText,
                placeholder: I.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => T(e),
                value: R,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, n)
        })
      })
    }), (0, a.jsx)(o.ModalFooter, {
      children: (0, a.jsx)(o.Button, {
        onClick: function() {
          (0, r.trackWithMetadata)(E.AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, {
            raid_lockdown_feedback_type: D,
            raid_lockdown_feedback_other_reason: R,
            guild_id: t
          }), d()
        },
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        submitting: !1,
        children: I.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
      })
    })]
  })
}