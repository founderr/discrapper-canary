"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("430824"),
  r = s("723047"),
  o = s("727843"),
  d = s("290348"),
  u = s("971792"),
  c = s("155758"),
  E = s("331146"),
  _ = s("798680"),
  I = s("689938"),
  T = s("169769");

function S() {
  let {
    editStateId: e,
    guildId: t
  } = (0, o.useEditStateContext)(), [S, f] = d.useTierEmojiIds(e, t), m = (0, u.default)(t, e), {
    setCurrentTab: N
  } = (0, _.useTabBarState)(), g = () => N(_.TabBarSection.EMOJIS), h = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t)), C = null == h ? void 0 : h.getMaxRoleSubscriptionEmojiSlots();

  function R(e) {
    null == S ? f(new Set(e)) : f(new Set([...S, ...e]))
  }

  function x(e) {
    let t = new Set(S);
    t.delete(e), f(t)
  }
  let L = (0, r.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(n.FormSection, {
    title: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_TITLE,
    disabled: L,
    children: [(0, a.jsxs)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      className: T.formDescription,
      disabled: L,
      children: [I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_DESCRIPTION.format({
        premiumEmojiMaximum: C
      }), (0, a.jsx)("br", {}), I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_MANAGE_LINK.format({
        handleTransitionToManageEmoji: g
      })]
    }), (0, a.jsx)(E.EmojiList, {
      tierEmojiIds: S,
      guildId: t,
      onRemoveEmoji: function(e) {
        e.roles.filter(e => e !== (null == m ? void 0 : m.id)).length > 0 ? x(e.id) : (0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await s.e("59128").then(s.bind(s, "28564"));
          return s => (0, a.jsx)(t, {
            ...s,
            onConfirmDelete: () => {
              x(e.id), s.onClose()
            }
          })
        })
      }
    }), null != S && S.size > 0 ? (0, a.jsx)(n.Spacer, {
      size: 8
    }) : null, (0, a.jsx)(c.AddBenefitCard, {
      onClick: function() {
        (0, n.openModalLazy)(async () => {
          let {
            EmojiAddModal: e
          } = await Promise.all([s.e("99387"), s.e("21112")]).then(s.bind(s, "301160"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildId: t,
            initialTierEmojiIds: S,
            onSubmit: R,
            transitionToManageEmoji: () => {
              g(), s.onClose()
            }
          })
        })
      },
      disabled: L,
      children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_ADD_BUTTON_TEXT
    })]
  })
}