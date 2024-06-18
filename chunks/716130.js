"use strict";
t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(399606),
  o = t(481060),
  c = t(668781),
  d = t(603211),
  u = t(710344),
  E = t(430824),
  _ = t(570961),
  I = t(208665),
  T = t(959508),
  N = t(290511),
  m = t(689938),
  S = t(621524);

function h(e) {
  let {
    guild: s,
    prejoinOnly: t,
    postjoinOnly: l
  } = e, c = (0, r.e7)([I.Z], () => I.Z.editedOnboardingPrompts), u = c.filter(e => e.inOnboarding), E = u.length, {
    drag: T,
    drop: h,
    dragSourcePosition: g,
    setIsDraggable: C
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: E,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), x = i.useRef(null);
  return i.useEffect(() => {
    C(!1)
  }, [C]), i.useEffect(() => {
    T(h(x))
  }, [T, h, x]), (0, n.jsxs)("div", {
    ref: x,
    className: a()(S.separatorSection, {
      [S.dropIndicatorBefore]: null != g && E < g,
      [S.dropIndicatorAfter]: null != g && E > g
    }),
    children: [!l && u.length < N.b3 ? (0, n.jsxs)(o.Clickable, {
      className: S.addPrompt,
      onClick: () => (0, _.tS)(s, [...c, (0, N.yZ)(!0)], !1),
      children: [(0, n.jsx)(o.CirclePlusIcon, {
        size: "custom",
        color: "currentColor",
        className: S.plusIcon,
        width: 20,
        height: 20
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: m.Z.Messages.ONBOARDING_PROMPT_ADD_PROMPT
      })]
    }) : null, t ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: S.divider
      }), (0, n.jsx)(o.Heading, {
        variant: "heading-md/bold",
        children: m.Z.Messages.ONBOARDING_QUESTIONS_POST_JOIN_HEADER
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: S.subtitle,
        children: m.Z.Messages.ONBOARDING_QUESTIONS_POST_JOIN_SUBHEADER
      })]
    })]
  })
}

function g(e) {
  let {
    guildId: s,
    prejoinOnly: t,
    postjoinOnly: i,
    includeCount: l,
    singleColumn: a
  } = e, d = (0, r.e7)([E.Z], () => E.Z.getGuild(s)), g = (0, r.e7)([I.Z], () => I.Z.editedOnboardingPrompts), C = g.filter(e => e.inOnboarding), x = g.filter(e => !0 !== e.inOnboarding), R = [...C.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, N.ae)()
  }, ...x.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: L,
    handleDragReset: O,
    handleDragComplete: A
  } = (0, u.Z)(R, e => {
    let s = e.findIndex(e => "separator" === e.id),
      t = e.slice(0, s).map(e => ({
        ...e.data,
        inOnboarding: !0
      })),
      n = e.slice(s + 1).map(e => ({
        ...e.data,
        inOnboarding: !1,
        required: !1
      }));
    if (t.length > N.b3) {
      c.Z.show({
        title: m.Z.Messages.ONBOARDING_QUESTIONS_CANNOT_MOVE,
        body: m.Z.Messages.ONBOARDING_QUESTIONS_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
          numQuestions: N.b3
        })
      });
      return
    }(0, _.tS)(d, [...t, ...n])
  });
  return null == d ? null : (0, n.jsxs)(n.Fragment, {
    children: [i ? null : (0, n.jsxs)(n.Fragment, {
      children: [t ? null : (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-md/bold",
          children: m.Z.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_HEADER
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: S.subtitle,
          children: m.Z.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_SUBHEADER
        })]
      }), C.map((e, s) => (0, n.jsx)(T.Z, {
        guild: d,
        prompt: e,
        disableAutofocus: t,
        includeCount: l,
        singleColumn: a,
        promptIndex: s,
        dragIndex: s,
        onPromptDragStart: L,
        onPromptDragReset: O,
        onPromptDragComplete: A
      }, e.id))]
    }), (0, n.jsx)(h, {
      guild: d,
      prejoinOnly: t,
      postjoinOnly: i
    }), t ? null : (0, n.jsxs)(n.Fragment, {
      children: [x.map((e, s) => (0, n.jsx)(T.Z, {
        guild: d,
        prompt: e,
        promptIndex: s + C.length,
        dragIndex: s + C.length + 1,
        onPromptDragStart: L,
        onPromptDragReset: O,
        onPromptDragComplete: A
      }, e.id)), g.length < N.YW ? (0, n.jsxs)(o.Clickable, {
        className: S.addPrompt,
        onClick: () => (0, _.tS)(d, [...g, (0, N.yZ)(!1)], !1),
        children: [(0, n.jsx)(o.CirclePlusIcon, {
          size: "custom",
          color: "currentColor",
          className: S.plusIcon,
          width: 20,
          height: 20
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: m.Z.Messages.ONBOARDING_PROMPT_ADD_PROMPT
        })]
      }) : null]
    })]
  })
}