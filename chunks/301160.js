a.r(s), a.d(s, {
  EmojiAddModal: function() {
    return h
  }
}), a(47120);
var t = a(735250),
  i = a(470079),
  o = a(481060),
  n = a(153124),
  l = a(768581),
  d = a(570533),
  r = a(689938),
  c = a(710989);

function m(e) {
  let {
    emoji: s,
    onChange: a,
    value: i
  } = e, n = l.ZP.getEmojiURL({
    id: s.id,
    animated: s.animated,
    size: 24
  });
  return (0, t.jsx)(o.Checkbox, {
    size: 20,
    className: c.emojiRow,
    onChange: a,
    type: o.Checkbox.Types.INVERTED,
    value: i,
    reverse: !0,
    children: (0, t.jsxs)("div", {
      className: c.emojiLabel,
      children: [(0, t.jsx)("img", {
        className: c.emojiImage,
        src: n,
        width: 24,
        height: 24,
        alt: ""
      }), (0, t.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/medium",
        className: c.emojiAlias,
        children: s.name
      })]
    })
  })
}

function h(e) {
  let {
    guildId: s,
    initialTierEmojiIds: a,
    onSubmit: l,
    transitionToManageEmoji: h,
    transitionState: u,
    onClose: j
  } = e, x = (0, d.Z)(s), [_, C] = i.useState(new Set), I = _.size > 0, D = (0, n.Dt)();
  return (0, t.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), l(_), j()
    },
    children: (0, t.jsxs)(o.ModalRoot, {
      transitionState: u,
      "aria-labelledby": D,
      children: [(0, t.jsxs)(o.ModalHeader, {
        children: [(0, t.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          id: D,
          children: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_HEADER
        }), (0, t.jsx)(o.ModalCloseButton, {
          className: c.closeButton,
          onClick: j
        })]
      }), (0, t.jsxs)(o.ModalContent, {
        className: c.modalContent,
        children: [(0, t.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_DESCRIPTION.format({
            transitionToManageEmoji: h
          })
        }), (0, t.jsx)(o.Spacer, {
          size: 16
        }), null != x && x.length > 0 && (0, t.jsx)("div", {
          className: c.emojiContainer,
          children: x.map(e => null != a && a.has(e.id) ? null : (0, t.jsx)(m, {
            emoji: e,
            onChange: () => {
              var s;
              return s = e.id, void C(e => {
                let a = new Set(e);
                return _.has(s) ? a.delete(s) : a.add(s), a
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
          children: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_SAVE_BUTTON.format({
            totalEmoji: _.size
          })
        }), (0, t.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: c.cancelButton,
          onClick: j,
          children: r.Z.Messages.CANCEL
        })]
      })]
    })
  })
}