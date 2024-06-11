"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120"), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("481060");
s("674180");
var i = s("723047"),
  r = s("727843"),
  o = s("290348"),
  d = s("764163"),
  u = s("155758"),
  c = s("293810"),
  E = s("689938");

function _() {
  let {
    editStateId: e,
    guildId: t
  } = (0, r.useEditStateContext)(), [s, _] = o.useChannelBenefits(e), I = l.useMemo(() => new Set(s.map(e => e.ref_id)), [s]);

  function T(e, t) {
    let {
      channelId: a,
      description: l,
      emojiId: n,
      emojiName: i
    } = e, r = [...s], o = {
      name: "",
      description: l,
      emoji_id: n,
      emoji_name: i,
      ref_type: c.GuildRoleSubscriptionBenefitTypes.CHANNEL,
      ref_id: a
    };
    null != t ? r[t] = o : r.push(o), _(r)
  }
  let S = (0, i.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.EditableBenefitsList, {
      benefits: s,
      onEdit: function(e) {
        (0, n.openModal)(l => (0, a.jsx)(d.EditChannelBenefitModal, {
          ...l,
          guildId: t,
          omitChannelIds: I,
          initialData: s[e],
          onSave: t => T(t, e),
          onDelete: () => (function(e) {
            let t = [...s];
            t.splice(e, 1), _(t)
          })(e)
        }))
      },
      onMove: function(e, t) {
        let a = [...s],
          [l] = a.splice(e, 1);
        a.splice(t, 0, l), _(a)
      },
      guildId: t
    }), s.length > 0 && (0, a.jsx)(n.Spacer, {
      size: 8
    }), (0, a.jsx)(u.AddBenefitCard, {
      onClick: function() {
        (0, n.openModal)(e => (0, a.jsx)(d.EditChannelBenefitModal, {
          ...e,
          guildId: t,
          omitChannelIds: I,
          onSave: e => T(e)
        }))
      },
      disabled: S,
      children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_ADD_BUTTON_TEXT
    })]
  })
}