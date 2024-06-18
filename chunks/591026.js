"use strict";
t.d(s, {
  Z: function() {
    return I
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(467319),
  r = t(456677),
  o = t(55889),
  c = t(300453),
  d = t(620436),
  u = t(273504),
  E = t(689938),
  _ = t(631675);

function I(e) {
  var s, t;
  let {
    rule: I,
    onChangeRule: T
  } = e, [N, m] = i.useState(null === (s = I.triggerMetadata) || void 0 === s ? void 0 : s.mentionTotalLimit), S = (0, a.a)(I.guildId, !1);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: _.cardContentsContainer,
      children: [(0, n.jsxs)(c.Z, {
        step: 1,
        header: E.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
        children: [(0, n.jsxs)("div", {
          className: _.mentionLimitContainer,
          children: [(0, n.jsx)("div", {
            className: _.mentionLimitIconContainer,
            children: (0, n.jsx)(l.AtIcon, {
              size: "md",
              color: "currentColor",
              className: _.mentionLimitIcon
            })
          }), (0, n.jsxs)("div", {
            className: _.mentionLimitTextContainer,
            children: [(0, n.jsx)(l.Heading, {
              variant: "heading-sm/semibold",
              children: E.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
            }), (0, n.jsx)(l.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: _.descriptionHint,
              children: E.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
            })]
          }), (0, n.jsx)("div", {
            className: _.stepperContainer,
            children: (0, n.jsx)(l.NumberInputStepper, {
              value: N,
              onChange: e => {
                m(e), T({
                  ...I,
                  triggerMetadata: {
                    ...I.triggerMetadata,
                    mentionTotalLimit: e
                  }
                })
              },
              minValue: u.Vg,
              maxValue: u.Lg,
              className: _.stepper
            })
          })]
        }), S ? (0, n.jsxs)("div", {
          className: _.mentionLimitContainer,
          children: [(0, n.jsx)("div", {
            className: _.mentionLimitIconContainer,
            children: (0, n.jsx)(l.ShieldAtIcon, {
              size: "md",
              color: "currentColor",
              className: _.mentionLimitIcon
            })
          }), (0, n.jsxs)("div", {
            className: _.mentionLimitTextContainer,
            children: [(0, n.jsx)(l.Heading, {
              variant: "heading-sm/semibold",
              children: E.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
            }), (0, n.jsx)(l.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: _.descriptionHint,
              children: E.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(l.Checkbox, {
              type: l.Checkbox.Types.INVERTED,
              value: null === (t = I.triggerMetadata) || void 0 === t ? void 0 : t.mentionRaidProtectionEnabled,
              onChange: (e, s) => {
                T({
                  ...I,
                  triggerMetadata: {
                    ...I.triggerMetadata,
                    mentionRaidProtectionEnabled: s
                  }
                })
              },
              className: _.__invalid_actionCheckbox
            })
          })]
        }) : null]
      }), (0, n.jsx)(d.Z, {
        type: d.Z.Type.ARROW_DOWN
      }), (0, n.jsx)(c.Z, {
        step: 2,
        header: E.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, n.jsx)(r.Z, {
          rule: I,
          onChangeRule: T
        })
      }), (0, n.jsx)(d.Z, {
        type: d.Z.Type.CROSS
      }), (0, n.jsx)(c.Z, {
        step: 3,
        header: E.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, n.jsx)(o.Z, {
          rule: I,
          onChangeRule: T
        })
      })]
    })
  })
}