"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("36082"),
  r = s("614149"),
  o = s("467319"),
  d = s("456677"),
  u = s("55889"),
  c = s("300453"),
  E = s("620436"),
  _ = s("273504"),
  I = s("689938"),
  T = s("477620");

function S(e) {
  var t, s;
  let {
    rule: S,
    onChangeRule: f
  } = e, [m, N] = l.useState(null === (t = S.triggerMetadata) || void 0 === t ? void 0 : t.mentionTotalLimit), g = (0, o.useIsMentionRaidExperimentEnabled)(S.guildId, !1);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: T.cardContentsContainer,
      children: [(0, a.jsxs)(c.default, {
        step: 1,
        header: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
        children: [(0, a.jsxs)("div", {
          className: T.mentionLimitContainer,
          children: [(0, a.jsx)("div", {
            className: T.mentionLimitIconContainer,
            children: (0, a.jsx)(i.default, {
              width: 24,
              height: 24,
              className: T.mentionLimitIcon
            })
          }), (0, a.jsxs)("div", {
            className: T.mentionLimitTextContainer,
            children: [(0, a.jsx)(n.Heading, {
              variant: "heading-sm/semibold",
              children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
            }), (0, a.jsx)(n.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: T.descriptionHint,
              children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
            })]
          }), (0, a.jsx)("div", {
            className: T.stepperContainer,
            children: (0, a.jsx)(n.NumberInputStepper, {
              value: m,
              onChange: e => {
                N(e), f({
                  ...S,
                  triggerMetadata: {
                    ...S.triggerMetadata,
                    mentionTotalLimit: e
                  }
                })
              },
              minValue: _.MIN_MENTION_SPAM_LIMIT,
              maxValue: _.MAX_MENTION_SPAM_LIMIT,
              className: T.stepper
            })
          })]
        }), g ? (0, a.jsxs)("div", {
          className: T.mentionLimitContainer,
          children: [(0, a.jsx)("div", {
            className: T.mentionLimitIconContainer,
            children: (0, a.jsx)(r.default, {
              width: 24,
              height: 24,
              className: T.mentionLimitIcon
            })
          }), (0, a.jsxs)("div", {
            className: T.mentionLimitTextContainer,
            children: [(0, a.jsx)(n.Heading, {
              variant: "heading-sm/semibold",
              children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
            }), (0, a.jsx)(n.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: T.descriptionHint,
              children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
            })]
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(n.Checkbox, {
              type: n.Checkbox.Types.INVERTED,
              value: null === (s = S.triggerMetadata) || void 0 === s ? void 0 : s.mentionRaidProtectionEnabled,
              onChange: (e, t) => {
                f({
                  ...S,
                  triggerMetadata: {
                    ...S.triggerMetadata,
                    mentionRaidProtectionEnabled: t
                  }
                })
              },
              className: T.__invalid_actionCheckbox
            })
          })]
        }) : null]
      }), (0, a.jsx)(E.default, {
        type: E.default.Type.ARROW_DOWN
      }), (0, a.jsx)(c.default, {
        step: 2,
        header: I.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(d.default, {
          rule: S,
          onChangeRule: f
        })
      }), (0, a.jsx)(E.default, {
        type: E.default.Type.CROSS
      }), (0, a.jsx)(c.default, {
        step: 3,
        header: I.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, a.jsx)(u.default, {
          rule: S,
          onChangeRule: f
        })
      })]
    })
  })
}