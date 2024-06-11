"use strict";
s.r(t), s.d(t, {
  EditChannelBenefitModal: function() {
    return L
  },
  EditIntangibleBenefitModal: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("596454"),
  u = s("907040"),
  c = s("339085"),
  E = s("633302"),
  _ = s("984933"),
  I = s("401227"),
  T = s("285952"),
  S = s("474333"),
  f = s("153124"),
  m = s("740727"),
  N = s("691886"),
  g = s("185923"),
  h = s("689938"),
  C = s("643738");

function R(e) {
  let {
    guildId: t,
    emojiData: s,
    "aria-labelledby": n,
    onSelectEmoji: i
  } = e, T = (0, r.useStateFromStores)([c.default], () => null != s.id ? c.default.getCustomEmojiById(s.id) : void 0), S = (0, r.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t)), f = l.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, a.jsx)(u.default, {
      pickerIntention: g.EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
      channel: S,
      closePopout: t,
      onNavigateAway: t,
      onSelectEmoji: (e, s) => {
        null != e && i(null != e.id ? {
          id: e.id,
          name: void 0
        } : {
          id: void 0,
          name: e.optionallyDiverseSequence
        }), s && t()
      }
    })
  }, [i, S]), m = l.useMemo(() => null == T && null == s.name ? null : function() {
    return (0, a.jsx)(d.default, {
      className: C.emoji,
      emojiId: s.id,
      emojiName: s.name,
      animated: null == T ? void 0 : T.animated
    })
  }, [s, T]), N = "";
  return null != T ? N = ":".concat(T.name, ":") : null != s.name && (N = E.default.convertSurrogateToName(s.name)), (0, a.jsx)(o.Popout, {
    animation: o.Popout.Animation.NONE,
    position: "top",
    renderPopout: f,
    children: (e, t) => {
      let {
        isShown: s
      } = t;
      return (0, a.jsxs)("div", {
        className: C.emojiInputContainer,
        ...e,
        children: [(0, a.jsx)(I.default, {
          className: C.emojiButton,
          active: s,
          tabIndex: 0,
          renderButtonContents: m
        }), (0, a.jsx)(o.TextInput, {
          inputClassName: C.emojiText,
          placeholder: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
          value: N,
          "aria-labelledby": n,
          readOnly: !0
        })]
      })
    }
  })
}

function x(e) {
  var t;
  let {
    guildId: s,
    initialData: n,
    benefitTypeInput: i,
    descriptionPlaceholder: r,
    canSubmit: d,
    onSave: u,
    onDelete: c,
    transitionState: E,
    onClose: _
  } = e, I = (0, f.useUID)(), S = (0, f.useUID)(), N = (0, f.useUID)(), [g, x] = l.useState(null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : ""), [L, O] = l.useState(() => ({
    id: null == n ? void 0 : n.emoji_id,
    name: null == n ? void 0 : n.emoji_name
  })), p = d && "" !== g && (null != L.id || null != L.name);
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), p && (u({
        description: g,
        emojiId: L.id,
        emojiName: L.name
      }), _())
    },
    children: (0, a.jsxs)(o.ModalRoot, {
      transitionState: E,
      "aria-labelledby": I,
      children: [(0, a.jsxs)(o.ModalHeader, {
        children: [(0, a.jsx)(o.Heading, {
          id: I,
          variant: "heading-md/semibold",
          children: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
        }), (0, a.jsx)(o.ModalCloseButton, {
          className: C.closeButton,
          onClick: _
        })]
      }), (0, a.jsxs)(o.ModalContent, {
        className: C.modalContent,
        children: [i, (0, a.jsx)(o.Spacer, {
          size: 24
        }), (0, a.jsx)(o.FormSection, {
          title: h.default.Messages.DESCRIPTION,
          titleId: S,
          children: (0, a.jsx)(o.TextArea, {
            placeholder: r,
            value: g,
            rows: 1,
            autosize: !0,
            onChange: x,
            "aria-labelledby": S
          })
        }), (0, a.jsx)(o.Spacer, {
          size: 24
        }), (0, a.jsx)(o.FormSection, {
          title: h.default.Messages.EMOJI,
          titleId: N,
          children: (0, a.jsx)(R, {
            guildId: s,
            emojiData: L,
            onSelectEmoji: O,
            "aria-labelledby": N
          })
        })]
      }), (0, a.jsxs)(o.ModalFooter, {
        justify: T.default.Justify.BETWEEN,
        children: [(0, a.jsxs)("div", {
          className: C.primaryButtons,
          children: [(0, a.jsx)(o.Button, {
            type: "submit",
            disabled: !p,
            children: null == n ? h.default.Messages.ADD : h.default.Messages.SAVE
          }), null != c && (0, a.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.ICON,
            className: C.deleteButton,
            onClick: () => {
              c(), _()
            },
            children: (0, a.jsx)(m.default, {
              "aria-label": h.default.Messages.DELETE
            })
          })]
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: C.cancelButton,
          onClick: _,
          children: h.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function L(e) {
  let {
    guildId: t,
    omitChannelIds: s,
    initialData: n,
    onSave: r,
    onDelete: d,
    transitionState: u,
    onClose: c
  } = e, [E, _] = l.useState(null == n ? void 0 : n.ref_id), I = (0, f.useUID)(), T = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S.default, {
      messageType: S.HelpMessageTypes.WARNING,
      children: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
    }), (0, a.jsx)(o.Spacer, {
      size: 24
    }), (0, a.jsx)(o.FormSection, {
      title: h.default.Messages.CHANNEL,
      titleId: I,
      children: (0, a.jsx)(N.default, {
        guildId: t,
        value: E,
        initialChannelId: null == n ? void 0 : n.ref_id,
        omitChannelIds: s,
        onChange: function(e) {
          _(e)
        },
        "aria-labelledby": I
      })
    })]
  });
  return (0, a.jsx)(x, {
    guildId: t,
    initialData: n,
    benefitTypeInput: T,
    descriptionPlaceholder: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
    canSubmit: null != E,
    onSave: function(e) {
      i()(null != E, "Cannot submit null channel"), r({
        ...e,
        channelId: E
      })
    },
    transitionState: u,
    onClose: c,
    onDelete: d
  })
}

function O(e) {
  var t;
  let {
    initialData: s,
    onSave: n,
    transitionState: r,
    onClose: d,
    onDelete: u,
    guildId: c
  } = e, [E, _] = l.useState(null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : ""), I = (0, f.useUID)(), T = (0, a.jsx)(o.FormSection, {
    title: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
    titleId: I,
    children: (0, a.jsx)(o.TextArea, {
      placeholder: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
      value: E,
      rows: 1,
      onChange: function(e) {
        _(e)
      },
      "aria-labelledby": I
    })
  });
  return (0, a.jsx)(x, {
    guildId: c,
    initialData: s,
    benefitTypeInput: T,
    descriptionPlaceholder: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
    canSubmit: "" !== E,
    onSave: function(e) {
      i()("" !== E, "Cannot submit empty name"), n({
        ...e,
        name: E
      })
    },
    transitionState: r,
    onClose: d,
    onDelete: u
  })
}