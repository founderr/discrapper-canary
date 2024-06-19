s.r(l), s(47120);
var n = s(735250),
  a = s(470079),
  t = s(120356),
  r = s.n(t),
  i = s(97613),
  o = s.n(i),
  u = s(225857),
  c = s(290843),
  d = s(442837),
  E = s(780384),
  R = s(481060),
  h = s(410575),
  x = s(881052),
  C = s(410030),
  m = s(541716),
  M = s(752305),
  _ = s(893718),
  I = s(44315),
  N = s(592125),
  L = s(984933),
  g = s(246364),
  v = s(915509),
  f = s(592286),
  j = s(981631),
  p = s(689938),
  B = s(370350);
let A = "RULE";

function T(e) {
  let {
    rule: l,
    rulesChannel: s,
    index: t,
    onChange: i,
    onKeyDown: o,
    onClear: d,
    onRuleReorder: E,
    isDropHovered: h,
    focused: x,
    onFocus: C,
    previewEnabled: I
  } = e, N = a.useRef(null), L = a.useRef(null), [{
    textValue: g,
    richValue: v
  }, j] = a.useState((0, M.eK)(l.value)), [, T, S] = (0, u.c)({
    type: A,
    item: {
      rule: l,
      index: t
    },
    end: (e, l) => {
      null != e && !l.didDrop() && E(e.rule, null, !0)
    }
  }), [, F] = (0, c.L)({
    accept: A,
    hover: (e, l) => {
      var s;
      let {
        index: n
      } = e, a = null === (s = N.current) || void 0 === s ? void 0 : s.getBoundingClientRect(), r = l.getClientOffset();
      if (null == a || null == r) return;
      let i = (a.bottom - a.top) / 2,
        o = r.y - a.top;
      (!(n < t) || !(o < i)) && (!(n > t) || !(o > i)) && E(e.rule, t, !1)
    },
    drop: e => {
      E(e.rule, t, !0)
    }
  });
  a.useLayoutEffect(() => (T(L), S(F(N)), () => {
    T(null), F(null)
  }), [T, F, S]);
  if (a.useEffect(() => {
      "" !== l.value && "" === g && j((0, M.eK)(l.value))
    }, [l.value, g]), null == s) return null;
  let U = "" !== l.value ? l.value : l.id;
  return (0, n.jsxs)("div", {
    ref: N,
    className: r()(B.draggableInputContainer, {
      [B.dragging]: h
    }),
    "data-dnd-name": U,
    children: [(0, n.jsxs)("div", {
      className: B.inputWrapper,
      children: [(0, n.jsx)(R.Clickable, {
        onMouseDown: () => C(t),
        children: (0, n.jsx)(_.Z, {
          innerClassName: B.rulesTextAreaInput,
          type: m.I.RULES_INPUT,
          textValue: g,
          richValue: v,
          channel: s,
          placeholder: p.Z.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,
          focused: x,
          onChange: (e, l, s) => {
            let n = l;
            n.length > f.fn && (n = n.slice(0, f.fn)), l !== n && (l = n, s = (0, M.JM)(n)), i(l), j({
              textValue: l,
              richValue: s
            })
          },
          onKeyDown: o,
          canMentionChannels: I,
          canMentionRoles: I,
          maxCharacterCount: f.fn,
          characterCountClassName: B.characterCount,
          onSubmit: () => Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }), (0, n.jsx)(R.Button, {
        className: B.clearButton,
        onClick: d,
        look: R.Button.Looks.BLANK,
        size: R.Button.Sizes.NONE,
        children: (0, n.jsx)(R.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: B.clearIcon
        })
      }), (0, n.jsx)(R.Text, {
        className: B.rulesInputNumber,
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      })]
    }), (0, n.jsx)("div", {
      ref: L,
      className: B.dragContainer,
      "data-dnd-name": U,
      children: (0, n.jsx)(R.DragIcon, {
        size: "xs",
        color: "currentColor",
        className: B.dragIcon
      })
    })]
  })
}

function S(e) {
  let {
    shortRule: l,
    fullRule: s,
    disabled: a,
    onClick: t
  } = e;
  return a ? (0, n.jsx)(R.Tooltip, {
    text: p.Z.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({
      number: f.X2
    }),
    children: e => (0, n.jsx)("div", {
      ...e,
      className: r()(B.exampleRule, {
        [B.disabled]: a
      }),
      children: (0, n.jsx)(R.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: l
      })
    })
  }) : (0, n.jsx)(R.Clickable, {
    className: r()(B.exampleRule, {
      [B.disabled]: a
    }),
    onClick: () => t(s),
    children: (0, n.jsx)(R.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: l
    })
  })
}
l.default = function(e) {
  let {
    field: l,
    onSave: s,
    onClose: t,
    guild: r
  } = e, i = (0, C.ZP)(), u = r.rulesChannelId, c = r.hasFeature(j.oNc.PREVIEW_ENABLED), m = (0, d.e7)([N.Z], () => null != u ? N.Z.getChannel(u) : null), M = (0, d.e7)([L.ZP], () => L.ZP.getDefaultChannel(r.id)), [_, A] = a.useState((null == l ? void 0 : l.values) != null ? null == l ? void 0 : l.values.map(e => ({
    id: o()(),
    value: e
  })) : [{
    id: o()(),
    value: ""
  }]), [F, U] = a.useState(null), [b, O] = a.useState(null), [Z, k] = a.useState(0), V = e => {
    if (_.length !== f.X2) {
      if (null != e && "" === _[_.length - 1].value) {
        let l = [..._];
        l[_.length - 1].value = e, A(l), k(l.length - 1)
      } else A([..._, {
        id: o()(),
        value: null != e ? e : ""
      }]), k(_.length)
    }
  }, y = (e, l) => {
    let s = [..._];
    s[l].value = e, A(s)
  }, P = e => {
    let l = [..._.slice(0, e), ..._.slice(e + 1)];
    A(0 === l.length ? [{
      id: o()(),
      value: ""
    }] : l)
  }, D = a.useCallback((e, l, s) => {
    if (null == _) return;
    let n = _.indexOf(e);
    if (null != l && l !== n) {
      let s = [..._];
      s.splice(n, 1), s.splice(l, 0, e), A(s)
    }
    s ? null !== b && O(null) : l !== b && O(l)
  }, [b, _]), w = async () => {
    null != F && U(null);
    let e = _.map(e => e.value.trim()).filter(e => "" !== e);
    if (0 === e.length) {
      U(p.Z.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);
      return
    }
    let l = {
      field_type: g.QJ.TERMS,
      label: p.Z.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,
      values: e,
      required: !0
    };
    try {
      await s(l), t()
    } catch (e) {
      U(new x.Hx(e).getAnyErrorMessage())
    }
  }, z = _.length === f.X2;
  return (0, n.jsx)(h.Z, {
    page: j.ZY5.GUILD_RULES_CREATE_MODAL,
    children: (0, n.jsxs)(v.Z, {
      ...e,
      errorText: F,
      title: p.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,
      onCancel: t,
      onConfirm: w,
      children: [_.map((e, l) => (0, n.jsx)(T, {
        rulesChannel: null != m ? m : M,
        rule: e,
        index: l,
        onChange: e => y(e, l),
        onClear: () => P(l),
        onRuleReorder: D,
        isDropHovered: l === b,
        focused: l === Z,
        onFocus: k,
        previewEnabled: null == c || c
      }, e.id)), !z && (0, n.jsxs)("div", {
        className: B.addItemContainer,
        children: [(0, n.jsx)(R.CirclePlusIcon, {
          size: "custom",
          height: 17,
          width: 17,
          color: (0, I.Lq)((0, E.wj)(i) ? j.Ilk.BLUE_345 : j.Ilk.BLUE_430)
        }), (0, n.jsx)(R.Clickable, {
          className: B.addItemButton,
          onClick: () => V(),
          children: (0, n.jsx)(R.Text, {
            color: "text-link",
            variant: "text-md/normal",
            children: p.Z.Messages.MEMBER_VERIFICATION_ADD_RULE
          })
        })]
      }), (0, n.jsx)("div", {
        className: B.divider
      }), (0, n.jsx)(R.FormTitle, {
        children: p.Z.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE
      }), (0, n.jsxs)("div", {
        className: B.termsExampleRulesContainer,
        children: [(0, n.jsxs)("div", {
          className: B.termsExampleRulePairContainer,
          children: [(0, n.jsx)(S, {
            shortRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,
            fullRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,
            disabled: z,
            onClick: V
          }), (0, n.jsx)(S, {
            shortRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,
            fullRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,
            disabled: z,
            onClick: V
          })]
        }), (0, n.jsxs)("div", {
          className: B.termsExampleRulePairContainer,
          children: [(0, n.jsx)(S, {
            shortRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,
            fullRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,
            disabled: z,
            onClick: V
          }), (0, n.jsx)(S, {
            shortRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE,
            fullRule: p.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,
            disabled: z,
            onClick: V
          })]
        })]
      })]
    })
  })
}