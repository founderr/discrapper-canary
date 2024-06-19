o.r(i), o(47120);
var t = o(735250),
  s = o(470079),
  l = o(481060),
  a = o(787014),
  n = o(907040),
  d = o(946458),
  r = o(185923),
  c = o(689938),
  m = o(730861);
i.default = e => {
  var i, o, u;
  let {
    channel: j,
    onClose: N,
    transitionState: x
  } = e, [h, v] = s.useState(null !== (u = j.defaultReactionEmoji) && void 0 !== u ? u : null), [E, _] = s.useState(!1), [M, I] = s.useState(!1), R = (null === (i = j.defaultReactionEmoji) || void 0 === i ? void 0 : i.emojiId) !== (null == h ? void 0 : h.emojiId) || (null === (o = j.defaultReactionEmoji) || void 0 === o ? void 0 : o.emojiName) !== (null == h ? void 0 : h.emojiName), A = e => {
    v(null == e ? null : (null == e ? void 0 : e.id) != null ? {
      emojiId: e.id,
      emojiName: void 0
    } : {
      emojiId: void 0,
      emojiName: e.optionallyDiverseSequence
    })
  }, C = async () => {
    if (!!R) {
      _(!0), I(!1);
      try {
        await (0, a.wk)(j.id, {
          defaultReactionEmoji: h
        }), N()
      } catch (e) {
        I(!0)
      } finally {
        _(!1)
      }
    }
  };
  return (0, t.jsxs)(l.ModalRoot, {
    transitionState: x,
    "aria-label": c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
    children: [(0, t.jsx)(l.ModalHeader, {
      separator: !1,
      className: m.modalHeader,
      children: (0, t.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE
      })
    }), (0, t.jsxs)(l.ModalContent, {
      children: [(0, t.jsx)(l.Text, {
        variant: "text-sm/medium",
        className: m.subtitle,
        children: c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_DESCRIPTION
      }), (0, t.jsx)(d.Z, {
        reactionEmoji: h
      }), (0, t.jsxs)("div", {
        className: m.buttonRow,
        children: [(0, t.jsx)(l.Popout, {
          renderPopout: e => {
            let {
              closePopout: i
            } = e;
            return (0, t.jsx)(n.Z, {
              guildId: null == j ? void 0 : j.guild_id,
              closePopout: i,
              onSelectEmoji: (e, o) => {
                A(e), o && i()
              },
              pickerIntention: r.Hz.COMMUNITY_CONTENT,
              channel: j
            })
          },
          position: "right",
          animation: l.Popout.Animation.NONE,
          align: "center",
          children: e => (0, t.jsx)(l.Button, {
            ...e,
            size: l.Button.Sizes.SMALL,
            onClick: i => {
              var o;
              null === (o = e.onClick) || void 0 === o || o.call(e, i)
            },
            children: c.Z.Messages.SELECT_EMOJI
          })
        }), null != j.defaultReactionEmoji ? (0, t.jsx)(l.Button, {
          className: m.removeButton,
          onClick: () => A(null),
          size: l.Button.Sizes.MIN,
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.RED,
          children: c.Z.Messages.REMOVE
        }) : null]
      }), M ? (0, t.jsx)("div", {
        className: m.__invalid_row,
        children: (0, t.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-danger",
          children: c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_ERROR
        })
      }) : null]
    }), (0, t.jsxs)(l.ModalFooter, {
      className: m.__invalid_footer,
      children: [(0, t.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.SMALL,
        className: m.button,
        onClick: C,
        disabled: !R,
        submitting: E,
        autoFocus: !0,
        children: c.Z.Messages.SAVE
      }), (0, t.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        className: m.button,
        onClick: N,
        children: c.Z.Messages.CANCEL
      })]
    })]
  })
}