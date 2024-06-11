"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("471613"),
  r = s("29605"),
  o = s("540086"),
  d = s("723047"),
  u = s("796814"),
  c = s("689938");

function E(e) {
  let {
    guild: t
  } = e, E = (0, l.useStateFromStores)([i.default], () => i.default.isUploadingEmoji()), _ = (0, u.default)(t.id), I = t.getMaxRoleSubscriptionEmojiSlots() - _.length, T = (0, d.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(n.FormSection, {
      title: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_TITLE,
      disabled: T,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        disabled: T,
        children: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_DESCRIPTION.format({
          maxSlots: t.getMaxRoleSubscriptionEmojiSlots()
        })
      }), (0, a.jsx)(n.Spacer, {
        size: 16
      }), (0, a.jsx)(o.default, {
        onChange: (e, l) => {
          null != e && null != l && (0, n.openModalLazy)(async () => {
            let {
              CreateEmojiWithRolesModal: n
            } = await Promise.all([s.e("99387"), s.e("9007")]).then(s.bind(s, "142774"));
            return s => (0, a.jsx)(n, {
              ...s,
              data: e,
              file: l,
              guildId: t.id
            })
          })
        },
        buttonCTA: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_CTA,
        submitting: E,
        disabled: T || E || 0 === I
      }), (0, a.jsx)(n.Spacer, {
        size: 24
      }), (0, a.jsx)(r.EmojiTableTitle, {
        title: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_EMOJI_SECTION_TITLE,
        maxSlots: t.getMaxRoleSubscriptionEmojiSlots(),
        emojiCount: _.length
      }), (0, a.jsx)(r.EmojiTable, {
        guild: t,
        emojis: _,
        onEdit: (e, t) => {
          (0, n.openModalLazy)(async () => {
            let {
              UpdateEmojiRolesModal: l
            } = await Promise.all([s.e("99387"), s.e("9007")]).then(s.bind(s, "142774"));
            return s => (0, a.jsx)(l, {
              ...s,
              emoji: e,
              guildId: t
            })
          })
        },
        editingDisabled: T
      })]
    })
  })
}