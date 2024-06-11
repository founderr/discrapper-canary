"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("153124"),
  r = s("723047"),
  o = s("727843"),
  d = s("290348"),
  u = s("164000"),
  c = s("783454"),
  E = s("862319"),
  _ = s("140285"),
  I = s("390583"),
  T = s("641249"),
  S = s("574085"),
  f = s("293810"),
  m = s("689938"),
  N = s("169769");

function g(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: s,
    guildId: g
  } = (0, o.useEditStateContext)(), [h, C] = d.useChannelBenefits(s), [R, x] = d.useIntangibleBenefits(s), L = l.useMemo(() => t.filter(e => e.id !== s), [t, s]), {
    isFullServerGating: O
  } = (0, u.default)(g), p = (0, i.useUID)(), A = (0, r.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(c.default, {
    title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_TITLE,
    description: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_SUBTITLE,
    children: [(0, a.jsxs)(n.FormSection, {
      title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_TITLE,
      disabled: A,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        className: N.formDescription,
        disabled: A,
        children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_SUBTITLE
      }), (0, a.jsx)(E.default, {
        channelBenefits: h,
        intangibleBenefits: R,
        subscriptionListings: L,
        onImport: function(e, t) {
          C(t => t.concat(e)), x(e => e.concat(t))
        }
      }), (0, a.jsx)(n.Spacer, {
        size: 8
      }), (0, a.jsx)(E.ImportRoleCard, {
        guildId: g,
        onImport: function(e) {
          C(t => {
            let s = new Set(t.map(e => {
              let {
                ref_id: t
              } = e;
              return t
            }));
            return [...t, ...e.filter(e => !s.has(e)).map(e => ({
              ref_id: e,
              ref_type: f.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }))]
          })
        },
        disabled: A
      })]
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsxs)(n.FormSection, {
      title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
      titleId: p,
      disabled: A,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        className: N.formDescription,
        disabled: A,
        children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_DESCRIPTION
      }), O && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.default, {
          "aria-labelledby": p,
          disabled: A
        }), (0, a.jsx)(n.Spacer, {
          size: 8
        })]
      }), (0, a.jsx)(I.default, {})]
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsxs)(n.FormSection, {
      title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
      disabled: A,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        className: N.formDescription,
        disabled: A,
        children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_DESCRIPTION
      }), (0, a.jsx)(S.default, {})]
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsx)(T.default, {})]
  })
}