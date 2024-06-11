"use strict";
s.r(a), s.d(a, {
  EmojiAddModal: function() {
    return u
  }
}), s("47120");
var t = s("735250"),
  i = s("470079"),
  o = s("481060"),
  l = s("153124"),
  n = s("768581"),
  d = s("570533"),
  r = s("689938"),
  c = s("347195");

function m(e) {
  let {
    emoji: a,
    onChange: s,
    value: i
  } = e, l = n.default.getEmojiURL({
    id: a.id,
    animated: a.animated,
    size: 24
  });
  return (0, t.jsx)(o.Checkbox, {
    size: 20,
    className: c.emojiRow,
    onChange: s,
    type: o.Checkbox.Types.INVERTED,
    value: i,
    reverse: !0,
    children: (0, t.jsxs)("div", {
      className: c.emojiLabel,
      children: [(0, t.jsx)("img", {
        className: c.emojiImage,
        src: l,
        width: 24,
        height: 24,
        alt: ""
      }), (0, t.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/medium",
        className: c.emojiAlias,
        children: a.name
      })]
    })
  })
}

function u(e) {
  let {
    guildId: a,
    initialTierEmojiIds: s,
    onSubmit: n,
    transitionToManageEmoji: u,
    transitionState: h,
    onClose: j
  } = e, x = (0, d.default)(a), [_, C] = i.useState(new Set), I = _.size > 0, D = (0, l.useUID)();
  return (0, t.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), n(_), j()
    },
    children: (0, t.jsxs)(o.ModalRoot, {
      transitionState: h,
      "aria-labelledby": D,
      children: [(0, t.jsxs)(o.ModalHeader, {
        children: [(0, t.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          id: D,
          children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_HEADER
        }), (0, t.jsx)(o.ModalCloseButton, {
          className: c.closeButton,
          onClick: j
        })]
      }), (0, t.jsxs)(o.ModalContent, {
        className: c.modalContent,
        children: [(0, t.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_DESCRIPTION.format({
            transitionToManageEmoji: u
          })
        }), (0, t.jsx)(o.Spacer, {
          size: 16
        }), null != x && x.length > 0 && (0, t.jsx)("div", {
          className: c.emojiContainer,
          children: x.map(e => null != s && s.has(e.id) ? null : (0, t.jsx)(m, {
            emoji: e,
            onChange: () => {
              var a;
              return a = e.id, void C(e => {
                let s = new Set(e);
                return _.has(a) ? s.delete(a) : s.add(a), s
              })
            },
            value: _.has(e.id)
          }, e.id))
        }), (0, t.jsx)(o.Spacer, {
          size: 8
        })]
      }), (0, t.jsxs)(o.ModalFooter, {
        className: c.modalFooter,
        children: [(0, t.jsx)(o.Button, {
          type: "submit",
          disabled: !I,
          children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_SAVE_BUTTON.format({
            totalEmoji: _.size
          })
        }), (0, t.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: c.cancelButton,
          onClick: j,
          children: r.default.Messages.CANCEL
        })]
      })]
    })
  })
}