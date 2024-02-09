"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("751433"),
  r = s("116320"),
  o = s("412131"),
  d = s("926809"),
  u = s("185709"),
  c = s("260928"),
  E = s("67310"),
  _ = s("296416"),
  I = s("143460"),
  f = s("782340"),
  T = s("744432");

function S(e) {
  var t, s;
  let {
    rule: S,
    onChangeRule: m
  } = e, [N, g] = l.useState(null === (t = S.triggerMetadata) || void 0 === t ? void 0 : t.mentionTotalLimit), h = (0, d.useIsMentionRaidExperimentEnabled)(S.guildId, !1);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: T.cardContentsContainer,
      children: [(0, a.jsxs)(E.default, {
        step: 1,
        header: f.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
        children: [(0, a.jsxs)("div", {
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
              children: f.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
            }), (0, a.jsx)(n.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: T.descriptionHint,
              children: f.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
            })]
          }), (0, a.jsx)("div", {
            className: T.stepperContainer,
            children: (0, a.jsx)(i.default, {
              value: N,
              onChange: e => {
                g(e), m({
                  ...S,
                  triggerMetadata: {
                    ...S.triggerMetadata,
                    mentionTotalLimit: e
                  }
                })
              },
              minValue: I.MIN_MENTION_SPAM_LIMIT,
              maxValue: I.MAX_MENTION_SPAM_LIMIT,
              className: T.stepper
            })
          })]
        }), h ? (0, a.jsxs)("div", {
          className: T.mentionLimitContainer,
          children: [(0, a.jsx)("div", {
            className: T.mentionLimitIconContainer,
            children: (0, a.jsx)(o.default, {
              width: 24,
              height: 24,
              className: T.mentionLimitIcon
            })
          }), (0, a.jsxs)("div", {
            className: T.mentionLimitTextContainer,
            children: [(0, a.jsx)(n.Heading, {
              variant: "heading-sm/semibold",
              children: f.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
            }), (0, a.jsx)(n.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: T.descriptionHint,
              children: f.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
            })]
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(n.Checkbox, {
              type: n.Checkbox.Types.INVERTED,
              value: null === (s = S.triggerMetadata) || void 0 === s ? void 0 : s.mentionRaidProtectionEnabled,
              onChange: (e, t) => {
                m({
                  ...S,
                  triggerMetadata: {
                    ...S.triggerMetadata,
                    mentionRaidProtectionEnabled: t
                  }
                })
              },
              className: T.actionCheckbox
            })
          })]
        }) : null]
      }), (0, a.jsx)(_.default, {
        type: _.default.Type.ARROW_DOWN
      }), (0, a.jsx)(E.default, {
        step: 2,
        header: f.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(u.default, {
          rule: S,
          onChangeRule: m
        })
      }), (0, a.jsx)(_.default, {
        type: _.default.Type.CROSS
      }), (0, a.jsx)(E.default, {
        step: 3,
        header: f.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, a.jsx)(c.default, {
          rule: S,
          onChangeRule: m
        })
      })]
    })
  })
}