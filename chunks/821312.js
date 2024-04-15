"use strict";
t.r(a), t.d(a, {
  default: function() {
    return A
  }
}), t("47120");
var d = t("735250"),
  s = t("470079"),
  o = t("120356"),
  n = t.n(o),
  i = t("831209"),
  l = t("481060"),
  c = t("367907"),
  _ = t("177862"),
  r = t("465670"),
  E = t("630641"),
  u = t("981631"),
  D = t("689938"),
  N = t("399101");

function A(e) {
  let {
    guildId: a,
    transitionState: t,
    onClose: o
  } = e, [A, C] = s.useState([]), [I, T] = s.useState(), R = [{
    text: D.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
    value: _.RaidLockdownFeedbackType.DM_SPAM
  }, {
    text: D.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
    value: _.RaidLockdownFeedbackType.MENTION_SPAM
  }, {
    text: D.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
    value: _.RaidLockdownFeedbackType.CHANNEL_SPAM
  }, {
    text: D.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
    value: _.RaidLockdownFeedbackType.SUS_NEW_MEMBERS
  }, {
    text: D.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
    value: _.RaidLockdownFeedbackType.CHANGING_SETTINGS
  }, {
    text: D.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
    value: _.RaidLockdownFeedbackType.OTHER
  }];

  function h(e) {
    A.includes(e) ? C(a => a.filter(a => a !== e)) : C(a => [...a, e])
  }
  return null == a ? (o(), null) : (0, d.jsxs)(l.ModalRoot, {
    transitionState: t,
    size: l.ModalSize.MEDIUM,
    children: [(0, d.jsx)(l.ModalHeader, {
      separator: !0,
      children: (0, d.jsxs)("div", {
        className: N.headerContainer,
        children: [(0, d.jsxs)("div", {
          className: N.headerText,
          children: [(0, d.jsx)(E.default, {
            color: i.default.INTERACTIVE_NORMAL,
            width: 16,
            height: 16
          }), (0, d.jsx)(l.Heading, {
            color: "header-primary",
            variant: "heading-md/semibold",
            children: D.default.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
          })]
        }), (0, d.jsx)(l.Clickable, {
          onClick: o,
          children: (0, d.jsx)(r.default, {
            className: N.closeIcon,
            width: 16,
            height: 16
          })
        })]
      })
    }), (0, d.jsx)(l.ModalContent, {
      children: (0, d.jsx)("div", {
        className: N.options,
        children: R.map(e => {
          let {
            text: a,
            value: t
          } = e;
          return (0, d.jsxs)("div", {
            className: n()(N.optionContainer, {
              [N.optionContainerOther]: t === _.RaidLockdownFeedbackType.OTHER
            }),
            children: [(0, d.jsxs)(l.Clickable, {
              className: N.optionText,
              onClick: () => h(t),
              children: [(0, d.jsx)("div", {
                children: (0, d.jsx)(l.Checkbox, {
                  type: l.Checkbox.Types.INVERTED,
                  size: 20,
                  value: A.includes(t),
                  onChange: () => h(t)
                })
              }), (0, d.jsx)(l.Text, {
                variant: "text-md/medium",
                color: A.includes(t) ? "interactive-active" : "interactive-normal",
                children: a
              })]
            }), t === _.RaidLockdownFeedbackType.OTHER && A.includes(_.RaidLockdownFeedbackType.OTHER) && (0, d.jsx)("div", {
              className: N.textboxContainer,
              children: (0, d.jsx)(l.TextArea, {
                className: N.serverLockdownReasonText,
                placeholder: D.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => T(e),
                value: I,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, t)
        })
      })
    }), (0, d.jsx)(l.ModalFooter, {
      children: (0, d.jsx)(l.Button, {
        onClick: function() {
          (0, c.trackWithMetadata)(u.AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, {
            raid_lockdown_feedback_type: A,
            raid_lockdown_feedback_other_reason: I,
            guild_id: a
          }), o()
        },
        color: l.Button.Colors.BRAND_NEW,
        look: l.Button.Looks.FILLED,
        submitting: !1,
        children: D.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
      })
    })]
  })
}