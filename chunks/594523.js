"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  },
  AddOptionCard: function() {
    return h
  }
}), s("222007");
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("917351"),
  r = s.n(i),
  o = s("77078"),
  d = s("404118"),
  u = s("69678"),
  c = s("837648"),
  E = s("569912"),
  _ = s("205454"),
  I = s("673220"),
  T = s("351825"),
  f = s("330724"),
  S = s("653138"),
  m = s("782340"),
  N = s("105439");

function g(e) {
  var t, l, i, d;
  let {
    guild: c,
    prompt: T,
    singleColumn: g,
    promptIndex: h,
    option: C,
    hasError: R,
    onDragStart: x,
    onDragComplete: L,
    onDragReset: O
  } = e, p = null, A = r.findIndex(T.options, e => e.id === C.id), {
    drag: M,
    dragSourcePosition: D,
    drop: v,
    setIsDraggable: j
  } = (0, u.default)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(T.id),
    index: A,
    optionId: C.id,
    onDragStart: x,
    onDragComplete: L,
    onDragReset: O
  }), {
    customEmoji: G,
    unicodeEmoji: U
  } = (0, E.default)(null === (t = C.emoji) || void 0 === t ? void 0 : t.id, null === (l = C.emoji) || void 0 === l ? void 0 : l.name), P = (0, S.isEmojiEmpty)(C.emoji) || null != G || null != U;
  return !P && (p = m.default.Messages.GUILD_SETTINGS_ONBOARDING_PROMPT_INVALID_EMOJI), (0, a.jsxs)(o.Clickable, {
    className: n(N.optionCard, {
      [N.hasError]: R || null != p,
      [N.dropIndicatorBefore]: null != D && A < D,
      [N.dropIndicatorAfter]: null != D && A > D,
      [N.singleColumn]: g
    }),
    onClick: () => (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("679844").then(s.bind(s, "679844"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: c,
        prompt: T,
        option: C,
        index: h,
        onSave: e => {
          (0, f.editGuildOnboardingPrompt)(c, T.id, {
            options: T.options.map(t => t.id === C.id ? e : t)
          })
        },
        onDelete: () => {
          (0, f.editGuildOnboardingPrompt)(c, T.id, {
            options: T.options.filter(e => e.id !== C.id)
          })
        }
      })
    }),
    onMouseEnter: () => j(!0),
    onMouseLeave: () => j(!1),
    innerRef: e => M(v(e)),
    children: [(0, a.jsx)("div", {
      className: N.dragContainer,
      children: (0, a.jsx)(I.default, {
        className: N.dragIcon
      })
    }), (0, a.jsxs)("div", {
      className: N.optionCardRow,
      children: [(0, a.jsx)("div", {
        className: N.emoji,
        children: (0, a.jsx)(_.default, {
          emojiId: null === (i = C.emoji) || void 0 === i ? void 0 : i.id,
          emojiName: null === (d = C.emoji) || void 0 === d ? void 0 : d.name,
          defaultComponent: null
        })
      }), (0, a.jsxs)("div", {
        className: N.text,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: C.title
        }), "" !== C.description && (0, a.jsx)(o.Text, {
          className: N.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: C.description
        })]
      })]
    }), null != p && (0, a.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: p
    })]
  })
}

function h(e) {
  let {
    guild: t,
    prompt: l,
    promptIndex: i,
    singleColumn: r
  } = e, {
    dropdownsAllowed: u
  } = (0, c.useOnboardingDropdownExperiment)(t.id), E = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("679844").then(s.bind(s, "679844"));
      return s => (0, a.jsx)(e, {
        ...s,
        guild: t,
        prompt: l,
        onSave: e => (0, f.editGuildOnboardingPrompt)(t, l.id, {
          options: [...l.options, e]
        }),
        onDelete: () => {},
        index: i
      })
    })
  };
  return (0, a.jsx)(o.Clickable, {
    className: n(N.optionCard, N.addOptionCard, {
      [N.addFirstOptionCard]: 0 === l.options.length,
      [N.singleColumn]: r
    }),
    onClick: () => {
      u && l.options.length + 1 === S.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD ? d.default.show({
        title: m.default.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_TITLE,
        body: m.default.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_DESCRIPTION.format({
          thresholdCount: S.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD
        }),
        confirmText: m.default.Messages.OKAY,
        cancelText: m.default.Messages.CANCEL,
        onConfirm: E
      }) : E()
    },
    children: (0, a.jsxs)("div", {
      className: N.optionCardRow,
      children: [(0, a.jsx)(T.default, {
        className: N.plusIcon,
        width: 24,
        height: 24
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: m.default.Messages.ONBOARDING_PROMPT_ADD_OPTION
      })]
    })
  })
}