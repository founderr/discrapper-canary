"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120"), s("653041");
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("723047"),
  i = s("727843"),
  r = s("290348"),
  o = s("764163"),
  d = s("155758"),
  u = s("293810"),
  c = s("689938");

function E() {
  let {
    editStateId: e,
    guildId: t
  } = (0, i.useEditStateContext)(), [s, E] = r.useIntangibleBenefits(e);

  function _(e, t) {
    let {
      name: a,
      description: l,
      emojiId: n,
      emojiName: i
    } = e, r = [...s], o = {
      name: a,
      description: l,
      emoji_id: n,
      emoji_name: i,
      ref_type: u.GuildRoleSubscriptionBenefitTypes.INTANGIBLE,
      ref_id: void 0
    };
    null != t ? r[t] = o : r.push(o), E(r)
  }
  let I = (0, n.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.EditableBenefitsList, {
      benefits: s,
      onEdit: function(e) {
        (0, l.openModal)(l => (0, a.jsx)(o.EditIntangibleBenefitModal, {
          ...l,
          guildId: t,
          initialData: s[e],
          onSave: t => _(t, e),
          onDelete: () => (function(e) {
            let t = [...s];
            t.splice(e, 1), E(t)
          })(e)
        }))
      },
      onMove: function(e, t) {
        let a = [...s],
          [l] = a.splice(e, 1);
        a.splice(t, 0, l), E(a)
      },
      guildId: t
    }), s.length > 0 ? (0, a.jsx)(l.Spacer, {
      size: 8
    }) : null, (0, a.jsx)(d.AddBenefitCard, {
      onClick: function() {
        (0, l.openModal)(e => (0, a.jsx)(o.EditIntangibleBenefitModal, {
          ...e,
          guildId: t,
          onSave: e => _(e)
        }))
      },
      disabled: I,
      children: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_ADD_BUTTON_TEXT
    })]
  })
}