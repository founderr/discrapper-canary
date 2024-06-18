"use strict";
t.d(s, {
  Z: function() {
    return M
  }
}), t(724458), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(392711),
  a = t(481060),
  r = t(239091),
  o = t(132580),
  c = t(688465),
  d = t(236413),
  u = t(727072),
  E = t(85960),
  _ = t(65912),
  I = t(457414),
  T = t(154502),
  N = t(295708),
  m = t(273504),
  S = t(689938),
  h = t(91512);

function g(e) {
  let {
    rule: s,
    triggerType: t
  } = e, l = i.useMemo(() => null == s ? (0, E.V9)(t).map(e => (0, n.jsx)(T.Z, {
    actionType: e,
    triggerType: t
  }, e)) : (0, E.V9)(t).reduce((e, i) => {
    var l;
    let a = s.actions.find(e => {
      let {
        type: s
      } = e;
      return i === s
    });
    return null == a ? e : (e.push((0, n.jsx)(T.Z, {
      actionType: i,
      action: a,
      triggerType: null !== (l = null == s ? void 0 : s.triggerType) && void 0 !== l ? l : t
    }, i)), e)
  }, []), [s, t]);
  return 0 === l.length ? null : (0, n.jsx)("div", {
    className: h.actionRuleListContainer,
    children: l
  })
}
let C = (e, s) => () => s({
    ...e,
    enabled: !e.enabled
  }),
  x = e => {
    e.stopPropagation(), e.preventDefault()
  },
  R = e => {
    let {
      className: s,
      children: t,
      ...i
    } = e;
    return (0, n.jsx)(a.Clickable, {
      className: s,
      onClick: x,
      onMouseDown: x,
      onMouseUp: x,
      ...i,
      children: t
    })
  };

function L(e) {
  var s;
  let {
    rule: t,
    onChangeRule: i,
    onContextMenu: l
  } = e, r = C(t, i), o = e => {
    x(e), l(e)
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: h.ruleTextContainer,
      children: (0, n.jsx)(N.Z, {
        rule: t,
        onChangeRule: i
      })
    }), (0, n.jsxs)(R, {
      className: h.actionContainer,
      children: [(0, n.jsx)(a.Switch, {
        className: h.toggle,
        onChange: r,
        checked: null !== (s = null == t ? void 0 : t.enabled) && void 0 !== s && s
      }), (0, n.jsx)(a.Tooltip, {
        text: S.Z.Messages.MORE,
        position: "top",
        "aria-label": S.Z.Messages.MORE_OPTIONS,
        children: e => (0, n.jsx)(a.Clickable, {
          ...e,
          onClick: o,
          className: h.menuIconButton,
          children: (0, n.jsx)(a.MoreVerticalIcon, {
            size: "md",
            color: "currentColor",
            className: h.menuIcon
          })
        })
      })]
    })]
  })
}

function O(e) {
  return (0, E.r5)(e, E.vT.ALPHA) ? (0, n.jsx)(o.Z, {
    className: h.alphaBetaTag
  }) : (0, E.r5)(e, E.vT.BETA) ? (0, n.jsx)(c.Z, {
    className: h.alphaBetaTag
  }) : null
}

function A(e) {
  let {
    rule: s,
    isDefaultRule: t,
    onContextMenu: r
  } = e, o = (0, I.w)(s.triggerType, s), {
    isLoading: c,
    saveRule: E
  } = (0, _.w)(), {
    updateRule: T
  } = (0, u.pH)(s.guildId), [N, m] = i.useState(s.enabled), C = (0, l.throttle)(async (e, t) => {
    if (t.preventDefault(), t.stopPropagation(), !c) {
      let e = {
        ...s,
        enabled: !N
      };
      m(!N);
      let t = await E(e, []);
      if (null != t) T(t), m(t.enabled)
    }
  }, 300), L = e => {
    x(e), r(e)
  };
  if (null == o) return null;
  let {
    headerText: A,
    headerSubtext: p,
    descriptionText: M,
    icon: f
  } = o, D = !(0, d.Vb)(s);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: h.ruleIconContainer,
      children: (0, n.jsx)(f, {
        size: "md",
        color: "currentColor",
        className: h.ruleIcon
      })
    }), (0, n.jsxs)("div", {
      className: h.ruleTextContainer,
      children: [(0, n.jsxs)(a.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: h.ruleTextHeaderContainer,
        children: [(0, n.jsxs)("div", {
          className: h.ruleTextHeader,
          children: [A, O(s.triggerType)]
        }), (0, n.jsx)(a.Text, {
          className: h.ruleSubtextHeader,
          variant: "text-sm/normal",
          children: p
        })]
      }), D && (0, n.jsx)(a.Text, {
        className: h.ruleTextDescription,
        variant: "text-sm/normal",
        children: M
      }), (0, n.jsx)(g, {
        rule: s,
        triggerType: s.triggerType
      })]
    }), (0, n.jsxs)(R, {
      className: h.actionContainer,
      children: [(0, n.jsx)(a.Switch, {
        className: h.toggle,
        onChange: C,
        checked: null != N && N
      }), !t && (0, n.jsx)(a.Tooltip, {
        text: S.Z.Messages.MORE,
        position: "top",
        "aria-label": S.Z.Messages.MORE_OPTIONS,
        children: e => (0, n.jsx)(a.Clickable, {
          ...e,
          onClick: L,
          className: h.menuIconButton,
          children: (0, n.jsx)(a.MoreVerticalIcon, {
            size: "md",
            color: "currentColor",
            className: h.menuIcon
          })
        })
      })]
    })]
  })
}

function p(e) {
  let {
    triggerType: s,
    onSetupRule: t
  } = e, l = i.useMemo(() => (0, I.w)(s), [s]);
  if (null == l) return null;
  let {
    headerText: r,
    descriptionText: o,
    icon: c
  } = l;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: h.ruleIconContainer,
      children: (0, n.jsx)(c, {
        color: "currentColor",
        size: "md",
        className: h.ruleIcon
      })
    }), (0, n.jsxs)("div", {
      className: h.ruleTextContainer,
      children: [(0, n.jsx)(a.Heading, {
        className: h.ruleTextHeader,
        variant: "text-md/semibold",
        color: "header-primary",
        children: (0, n.jsxs)("div", {
          className: h.ruleTextHeader,
          children: [r, O(s)]
        })
      }), (0, n.jsx)(a.Text, {
        className: h.ruleTextDescription,
        variant: "text-sm/normal",
        children: o
      }), (0, n.jsx)(g, {
        triggerType: s
      })]
    }), (0, n.jsx)(R, {
      className: h.actionContainer,
      children: (0, n.jsx)(a.Button, {
        size: a.Button.Sizes.SMALL,
        onClick: t,
        children: s === m.fX.KEYWORD ? S.Z.Messages.CREATE : S.Z.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function M(e) {
  let {
    rule: s,
    triggerType: i,
    isEditMode: l,
    isDefaultRule: o,
    forceSetup: c,
    onSetupRule: d,
    onChangeRule: u
  } = e, E = e => {
    if (null != s) e.preventDefault(), e.stopPropagation(), (0, r.jW)(e, async () => {
      let {
        default: e
      } = await t.e("25443").then(t.bind(t, 46577));
      return t => (0, n.jsx)(e, {
        rule: s,
        ...t
      })
    })
  }, _ = (0, n.jsx)(p, {
    triggerType: i,
    onSetupRule: d
  });
  return null != s && !c && (_ = l ? (0, n.jsx)(L, {
    rule: s,
    onChangeRule: u,
    onContextMenu: E
  }) : (0, n.jsx)(A, {
    rule: s,
    isDefaultRule: o,
    onContextMenu: E
  })), (0, n.jsx)(a.Clickable, {
    className: h.mainContainer,
    onContextMenu: E,
    children: _
  })
}