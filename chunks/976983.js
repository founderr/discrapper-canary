"use strict";
t.d(s, {
  B: function() {
    return h
  },
  Z: function() {
    return S
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(392711),
  r = t.n(a),
  o = t(481060),
  c = t(668781),
  d = t(603211),
  u = t(107862),
  E = t(307707),
  _ = t(305762),
  I = t(570961),
  T = t(290511),
  N = t(689938),
  m = t(189168);

function S(e) {
  var s, i, a, c;
  let {
    guild: u,
    prompt: S,
    singleColumn: h,
    promptIndex: g,
    option: C,
    hasError: x,
    onDragStart: R,
    onDragComplete: L,
    onDragReset: O
  } = e, A = null, p = r().findIndex(S.options, e => e.id === C.id), {
    drag: M,
    dragSourcePosition: f,
    drop: D,
    setIsDraggable: v
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(S.id),
    index: p,
    optionId: C.id,
    onDragStart: R,
    onDragComplete: L,
    onDragReset: O
  }), {
    customEmoji: j,
    unicodeEmoji: Z
  } = (0, E.Z)(null === (s = C.emoji) || void 0 === s ? void 0 : s.id, null === (i = C.emoji) || void 0 === i ? void 0 : i.name);
  return !((0, T.Oq)(C.emoji) || null != j || null != Z) && (A = N.Z.Messages.GUILD_SETTINGS_ONBOARDING_PROMPT_INVALID_EMOJI), (0, n.jsxs)(o.Clickable, {
    className: l()(m.optionCard, {
      [m.hasError]: x || null != A,
      [m.dropIndicatorBefore]: null != f && p < f,
      [m.dropIndicatorAfter]: null != f && p > f,
      [m.singleColumn]: h
    }),
    onClick: () => (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("1862")]).then(t.bind(t, 801001));
      return s => (0, n.jsx)(e, {
        ...s,
        guild: u,
        prompt: S,
        option: C,
        index: g,
        onSave: e => {
          (0, I.Kk)(u, S.id, {
            options: S.options.map(s => s.id === C.id ? e : s)
          })
        },
        onDelete: () => {
          (0, I.Kk)(u, S.id, {
            options: S.options.filter(e => e.id !== C.id)
          })
        }
      })
    }),
    onMouseEnter: () => v(!0),
    onMouseLeave: () => v(!1),
    innerRef: e => M(D(e)),
    children: [(0, n.jsx)("div", {
      className: m.dragContainer,
      children: (0, n.jsx)(o.DragIcon, {
        size: "xs",
        color: "currentColor",
        className: m.__invalid_dragIcon
      })
    }), (0, n.jsxs)("div", {
      className: m.optionCardRow,
      children: [(0, n.jsx)("div", {
        className: m.emoji,
        children: (0, n.jsx)(_.Z, {
          emojiId: null === (a = C.emoji) || void 0 === a ? void 0 : a.id,
          emojiName: null === (c = C.emoji) || void 0 === c ? void 0 : c.name,
          defaultComponent: null
        })
      }), (0, n.jsxs)("div", {
        className: m.text,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: C.title
        }), "" !== C.description && (0, n.jsx)(o.Text, {
          className: m.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: C.description
        })]
      })]
    }), null != A && (0, n.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: A
    })]
  })
}

function h(e) {
  let {
    guild: s,
    prompt: i,
    promptIndex: a,
    singleColumn: r
  } = e, {
    dropdownsAllowed: d
  } = (0, u.Ug)(s.id), E = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("1862")]).then(t.bind(t, 801001));
      return t => (0, n.jsx)(e, {
        ...t,
        guild: s,
        prompt: i,
        onSave: e => (0, I.Kk)(s, i.id, {
          options: [...i.options, e]
        }),
        onDelete: () => {},
        index: a
      })
    })
  };
  return (0, n.jsx)(o.Clickable, {
    className: l()(m.optionCard, m.addOptionCard, {
      [m.addFirstOptionCard]: 0 === i.options.length,
      [m.singleColumn]: r
    }),
    onClick: () => {
      d && i.options.length + 1 === T.fY ? c.Z.show({
        title: N.Z.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_TITLE,
        body: N.Z.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_DESCRIPTION.format({
          thresholdCount: T.fY
        }),
        confirmText: N.Z.Messages.OKAY,
        cancelText: N.Z.Messages.CANCEL,
        onConfirm: E
      }) : E()
    },
    children: (0, n.jsxs)("div", {
      className: m.optionCardRow,
      children: [(0, n.jsx)(o.CirclePlusIcon, {
        size: "md",
        color: "currentColor",
        className: m.plusIcon
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: N.Z.Messages.ONBOARDING_PROMPT_ADD_OPTION
      })]
    })
  })
}