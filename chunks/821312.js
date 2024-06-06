"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("831209"),
  o = l("481060"),
  d = l("367907"),
  u = l("177862"),
  c = l("465670"),
  f = l("630641"),
  I = l("981631"),
  m = l("689938"),
  T = l("818823");

function E(e) {
  let {
    guildId: t,
    transitionState: l,
    onClose: s
  } = e, [E, N] = a.useState([]), [_, S] = a.useState(), h = [{
    text: m.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
    value: u.RaidLockdownFeedbackType.DM_SPAM
  }, {
    text: m.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
    value: u.RaidLockdownFeedbackType.MENTION_SPAM
  }, {
    text: m.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
    value: u.RaidLockdownFeedbackType.CHANNEL_SPAM
  }, {
    text: m.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
    value: u.RaidLockdownFeedbackType.SUS_NEW_MEMBERS
  }, {
    text: m.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
    value: u.RaidLockdownFeedbackType.CHANGING_SETTINGS
  }, {
    text: m.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
    value: u.RaidLockdownFeedbackType.OTHER
  }];

  function g(e) {
    E.includes(e) ? N(t => t.filter(t => t !== e)) : N(t => [...t, e])
  }
  return null == t ? (s(), null) : (0, n.jsxs)(o.ModalRoot, {
    transitionState: l,
    size: o.ModalSize.MEDIUM,
    children: [(0, n.jsx)(o.ModalHeader, {
      separator: !0,
      children: (0, n.jsxs)("div", {
        className: T.headerContainer,
        children: [(0, n.jsxs)("div", {
          className: T.headerText,
          children: [(0, n.jsx)(f.default, {
            color: r.default.INTERACTIVE_NORMAL,
            width: 16,
            height: 16
          }), (0, n.jsx)(o.Heading, {
            color: "header-primary",
            variant: "heading-md/semibold",
            children: m.default.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
          })]
        }), (0, n.jsx)(o.Clickable, {
          onClick: s,
          children: (0, n.jsx)(c.default, {
            className: T.closeIcon,
            width: 16,
            height: 16
          })
        })]
      })
    }), (0, n.jsx)(o.ModalContent, {
      children: (0, n.jsx)("div", {
        className: T.options,
        children: h.map(e => {
          let {
            text: t,
            value: l
          } = e;
          return (0, n.jsxs)("div", {
            className: i()(T.optionContainer, {
              [T.optionContainerOther]: l === u.RaidLockdownFeedbackType.OTHER
            }),
            children: [(0, n.jsxs)(o.Clickable, {
              className: T.optionText,
              onClick: () => g(l),
              children: [(0, n.jsx)("div", {
                children: (0, n.jsx)(o.Checkbox, {
                  type: o.Checkbox.Types.INVERTED,
                  size: 20,
                  value: E.includes(l),
                  onChange: () => g(l)
                })
              }), (0, n.jsx)(o.Text, {
                variant: "text-md/medium",
                color: E.includes(l) ? "interactive-active" : "interactive-normal",
                children: t
              })]
            }), l === u.RaidLockdownFeedbackType.OTHER && E.includes(u.RaidLockdownFeedbackType.OTHER) && (0, n.jsx)("div", {
              className: T.textboxContainer,
              children: (0, n.jsx)(o.TextArea, {
                className: T.serverLockdownReasonText,
                placeholder: m.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => S(e),
                value: _,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, l)
        })
      })
    }), (0, n.jsx)(o.ModalFooter, {
      children: (0, n.jsx)(o.Button, {
        onClick: function() {
          (0, d.trackWithMetadata)(I.AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, {
            raid_lockdown_feedback_type: E,
            raid_lockdown_feedback_other_reason: _,
            guild_id: t
          }), s()
        },
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        submitting: !1,
        children: m.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
      })
    })]
  })
}