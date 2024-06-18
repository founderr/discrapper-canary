"use strict";
t.d(s, {
  DI: function() {
    return O
  },
  x3: function() {
    return L
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(596454),
  d = t(907040),
  u = t(339085),
  E = t(633302),
  _ = t(984933),
  I = t(401227),
  T = t(285952),
  N = t(474333),
  m = t(153124),
  S = t(691886),
  h = t(185923),
  g = t(689938),
  C = t(643738);

function x(e) {
  let {
    guildId: s,
    emojiData: t,
    "aria-labelledby": l,
    onSelectEmoji: a
  } = e, T = (0, r.e7)([u.Z], () => null != t.id ? u.Z.getCustomEmojiById(t.id) : void 0), N = (0, r.e7)([_.ZP], () => _.ZP.getDefaultChannel(s)), m = i.useCallback(e => {
    let {
      closePopout: s
    } = e;
    return (0, n.jsx)(d.Z, {
      pickerIntention: h.Hz.GUILD_ROLE_BENEFIT_EMOJI,
      channel: N,
      closePopout: s,
      onNavigateAway: s,
      onSelectEmoji: (e, t) => {
        null != e && a(null != e.id ? {
          id: e.id,
          name: void 0
        } : {
          id: void 0,
          name: e.optionallyDiverseSequence
        }), t && s()
      }
    })
  }, [a, N]), S = i.useMemo(() => null == T && null == t.name ? null : function() {
    return (0, n.jsx)(c.Z, {
      className: C.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: null == T ? void 0 : T.animated
    })
  }, [t, T]), x = "";
  return null != T ? x = ":".concat(T.name, ":") : null != t.name && (x = E.ZP.convertSurrogateToName(t.name)), (0, n.jsx)(o.Popout, {
    animation: o.Popout.Animation.NONE,
    position: "top",
    renderPopout: m,
    children: (e, s) => {
      let {
        isShown: t
      } = s;
      return (0, n.jsxs)("div", {
        className: C.emojiInputContainer,
        ...e,
        children: [(0, n.jsx)(I.Z, {
          className: C.emojiButton,
          active: t,
          tabIndex: 0,
          renderButtonContents: S
        }), (0, n.jsx)(o.TextInput, {
          inputClassName: C.emojiText,
          placeholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
          value: x,
          "aria-labelledby": l,
          readOnly: !0
        })]
      })
    }
  })
}

function R(e) {
  var s;
  let {
    guildId: t,
    initialData: l,
    benefitTypeInput: a,
    descriptionPlaceholder: r,
    canSubmit: c,
    onSave: d,
    onDelete: u,
    transitionState: E,
    onClose: _
  } = e, I = (0, m.Dt)(), N = (0, m.Dt)(), S = (0, m.Dt)(), [h, R] = i.useState(null !== (s = null == l ? void 0 : l.description) && void 0 !== s ? s : ""), [L, O] = i.useState(() => ({
    id: null == l ? void 0 : l.emoji_id,
    name: null == l ? void 0 : l.emoji_name
  })), A = c && "" !== h && (null != L.id || null != L.name);
  return (0, n.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), A && (d({
        description: h,
        emojiId: L.id,
        emojiName: L.name
      }), _())
    },
    children: (0, n.jsxs)(o.ModalRoot, {
      transitionState: E,
      "aria-labelledby": I,
      children: [(0, n.jsxs)(o.ModalHeader, {
        children: [(0, n.jsx)(o.Heading, {
          id: I,
          variant: "heading-md/semibold",
          children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
        }), (0, n.jsx)(o.ModalCloseButton, {
          className: C.closeButton,
          onClick: _
        })]
      }), (0, n.jsxs)(o.ModalContent, {
        className: C.modalContent,
        children: [a, (0, n.jsx)(o.Spacer, {
          size: 24
        }), (0, n.jsx)(o.FormSection, {
          title: g.Z.Messages.DESCRIPTION,
          titleId: N,
          children: (0, n.jsx)(o.TextArea, {
            placeholder: r,
            value: h,
            rows: 1,
            autosize: !0,
            onChange: R,
            "aria-labelledby": N
          })
        }), (0, n.jsx)(o.Spacer, {
          size: 24
        }), (0, n.jsx)(o.FormSection, {
          title: g.Z.Messages.EMOJI,
          titleId: S,
          children: (0, n.jsx)(x, {
            guildId: t,
            emojiData: L,
            onSelectEmoji: O,
            "aria-labelledby": S
          })
        })]
      }), (0, n.jsxs)(o.ModalFooter, {
        justify: T.Z.Justify.BETWEEN,
        children: [(0, n.jsxs)("div", {
          className: C.primaryButtons,
          children: [(0, n.jsx)(o.Button, {
            type: "submit",
            disabled: !A,
            children: null == l ? g.Z.Messages.ADD : g.Z.Messages.SAVE
          }), null != u && (0, n.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.ICON,
            className: C.deleteButton,
            onClick: () => {
              u(), _()
            },
            children: (0, n.jsx)(o.TrashIcon, {
              size: "md",
              color: "currentColor",
              "aria-label": g.Z.Messages.DELETE
            })
          })]
        }), (0, n.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: C.cancelButton,
          onClick: _,
          children: g.Z.Messages.CANCEL
        })]
      })]
    })
  })
}

function L(e) {
  let {
    guildId: s,
    omitChannelIds: t,
    initialData: l,
    onSave: r,
    onDelete: c,
    transitionState: d,
    onClose: u
  } = e, [E, _] = i.useState(null == l ? void 0 : l.ref_id), I = (0, m.Dt)(), T = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(N.Z, {
      messageType: N.Q.WARNING,
      children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
    }), (0, n.jsx)(o.Spacer, {
      size: 24
    }), (0, n.jsx)(o.FormSection, {
      title: g.Z.Messages.CHANNEL,
      titleId: I,
      children: (0, n.jsx)(S.Z, {
        guildId: s,
        value: E,
        initialChannelId: null == l ? void 0 : l.ref_id,
        omitChannelIds: t,
        onChange: function(e) {
          _(e)
        },
        "aria-labelledby": I
      })
    })]
  });
  return (0, n.jsx)(R, {
    guildId: s,
    initialData: l,
    benefitTypeInput: T,
    descriptionPlaceholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
    canSubmit: null != E,
    onSave: function(e) {
      a()(null != E, "Cannot submit null channel"), r({
        ...e,
        channelId: E
      })
    },
    transitionState: d,
    onClose: u,
    onDelete: c
  })
}

function O(e) {
  var s;
  let {
    initialData: t,
    onSave: l,
    transitionState: r,
    onClose: c,
    onDelete: d,
    guildId: u
  } = e, [E, _] = i.useState(null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : ""), I = (0, m.Dt)(), T = (0, n.jsx)(o.FormSection, {
    title: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
    titleId: I,
    children: (0, n.jsx)(o.TextArea, {
      placeholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
      value: E,
      rows: 1,
      onChange: function(e) {
        _(e)
      },
      "aria-labelledby": I
    })
  });
  return (0, n.jsx)(R, {
    guildId: u,
    initialData: t,
    benefitTypeInput: T,
    descriptionPlaceholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
    canSubmit: "" !== E,
    onSave: function(e) {
      a()("" !== E, "Cannot submit empty name"), l({
        ...e,
        name: E
      })
    },
    transitionState: r,
    onClose: c,
    onDelete: d
  })
}