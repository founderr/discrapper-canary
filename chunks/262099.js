"use strict";
a.r(l), a.d(l, {
  default: function() {
    return O
  }
}), a("222007");
var t = a("37983"),
  s = a("884691"),
  n = a("414456"),
  u = a.n(n),
  r = a("995008"),
  i = a.n(r),
  o = a("476042"),
  d = a("446674"),
  c = a("819855"),
  E = a("77078"),
  R = a("901582"),
  _ = a("448993"),
  h = a("841098"),
  M = a("850391"),
  f = a("149022"),
  m = a("681060"),
  C = a("449918"),
  x = a("900938"),
  I = a("42203"),
  L = a("923959"),
  N = a("381546"),
  g = a("673220"),
  v = a("351825"),
  A = a("567054"),
  S = a("583789"),
  p = a("394294"),
  T = a("49111"),
  U = a("782340"),
  j = a("840921");
let B = "RULE";

function F(e) {
  let {
    rule: l,
    rulesChannel: a,
    index: n,
    onChange: r,
    onKeyDown: i,
    onClear: d,
    onRuleReorder: c,
    isDropHovered: R,
    focused: _,
    onFocus: h,
    previewEnabled: C
  } = e, x = s.useRef(null), I = s.useRef(null), [{
    textValue: L,
    richValue: v
  }, A] = s.useState((0, f.createState)(l.value)), [, S, T] = (0, o.useDrag)({
    type: B,
    item: {
      rule: l,
      index: n
    },
    end: (e, l) => {
      null != e && !l.didDrop() && c(e.rule, null, !0)
    }
  }), [, F] = (0, o.useDrop)({
    accept: B,
    hover: (e, l) => {
      var a;
      let {
        index: t
      } = e, s = null === (a = x.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), u = l.getClientOffset();
      if (null == s || null == u) return;
      let r = (s.bottom - s.top) / 2,
        i = u.y - s.top;
      (!(t < n) || !(i < r)) && (!(t > n) || !(i > r)) && c(e.rule, n, !1)
    },
    drop: e => {
      c(e.rule, n, !0)
    }
  });
  s.useLayoutEffect(() => (S(I), T(F(x)), () => {
    S(null), F(null)
  }), [S, F, T]);
  if (s.useEffect(() => {
      "" !== l.value && "" === L && A((0, f.createState)(l.value))
    }, [l.value, L]), null == a) return null;
  let b = "" !== l.value ? l.value : l.id;
  return (0, t.jsxs)("div", {
    ref: x,
    className: u(j.draggableInputContainer, {
      [j.dragging]: R
    }),
    "data-dnd-name": b,
    children: [(0, t.jsxs)("div", {
      className: j.inputWrapper,
      children: [(0, t.jsx)(E.Clickable, {
        onMouseDown: () => h(n),
        children: (0, t.jsx)(m.default, {
          innerClassName: j.rulesTextAreaInput,
          type: M.ChatInputTypes.RULES_INPUT,
          textValue: L,
          richValue: v,
          channel: a,
          placeholder: U.default.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,
          focused: _,
          onChange: (e, l, a) => {
            let t = l;
            t.length > p.MAX_RULE_LENGTH && (t = t.slice(0, p.MAX_RULE_LENGTH)), l !== t && (l = t, a = (0, f.toRichValue)(t)), r(l), A({
              textValue: l,
              richValue: a
            })
          },
          onKeyDown: i,
          canMentionChannels: C,
          canMentionRoles: C,
          maxCharacterCount: p.MAX_RULE_LENGTH,
          characterCountClassName: j.characterCount,
          onSubmit: () => Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }), (0, t.jsx)(E.Button, {
        className: j.clearButton,
        onClick: d,
        look: E.Button.Looks.BLANK,
        size: E.Button.Sizes.NONE,
        children: (0, t.jsx)(N.default, {
          className: j.clearIcon
        })
      }), (0, t.jsx)(E.Text, {
        className: j.rulesInputNumber,
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(n + 1, ".")
      })]
    }), (0, t.jsx)("div", {
      ref: I,
      className: j.dragContainer,
      "data-dnd-name": b,
      children: (0, t.jsx)(g.default, {
        className: j.dragIcon
      })
    })]
  })
}

function b(e) {
  let {
    shortRule: l,
    fullRule: a,
    disabled: s,
    onClick: n
  } = e;
  return s ? (0, t.jsx)(E.Tooltip, {
    text: U.default.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({
      number: p.MAX_NUM_RULES
    }),
    children: e => (0, t.jsx)("div", {
      ...e,
      className: u(j.exampleRule, {
        [j.disabled]: s
      }),
      children: (0, t.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: l
      })
    })
  }) : (0, t.jsx)(E.Clickable, {
    className: u(j.exampleRule, {
      [j.disabled]: s
    }),
    onClick: () => n(a),
    children: (0, t.jsx)(E.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: l
    })
  })
}
var O = function(e) {
  let {
    field: l,
    onSave: a,
    onClose: n
  } = e, u = (0, h.default)(), r = (0, d.useStateFromStores)([x.default], () => x.default.getProps().guild), o = null == r ? void 0 : r.rulesChannelId, M = null == r ? void 0 : r.hasFeature(T.GuildFeatures.PREVIEW_ENABLED), f = (0, d.useStateFromStores)([I.default], () => null != o ? I.default.getChannel(o) : null), m = (0, d.useStateFromStores)([L.default], () => (null == r ? void 0 : r.id) != null ? L.default.getDefaultChannel(r.id) : null), [N, g] = s.useState((null == l ? void 0 : l.values) != null ? null == l ? void 0 : l.values.map(e => ({
    id: i(),
    value: e
  })) : [{
    id: i(),
    value: ""
  }]), [B, O] = s.useState(null), [k, V] = s.useState(null), [y, D] = s.useState(0), P = e => {
    if (N.length !== p.MAX_NUM_RULES) {
      if (null != e && "" === N[N.length - 1].value) {
        let l = [...N];
        l[N.length - 1].value = e, g(l), D(l.length - 1)
      } else g([...N, {
        id: i(),
        value: null != e ? e : ""
      }]), D(N.length)
    }
  }, w = (e, l) => {
    let a = [...N];
    a[l].value = e, g(a)
  }, z = e => {
    let l = [...N.slice(0, e), ...N.slice(e + 1)];
    g(0 === l.length ? [{
      id: i(),
      value: ""
    }] : l)
  }, X = s.useCallback((e, l, a) => {
    if (null == N) return;
    let t = N.indexOf(e);
    if (null != l && l !== t) {
      let a = [...N];
      a.splice(t, 1), a.splice(l, 0, e), g(a)
    }
    a ? null !== k && V(null) : l !== k && V(l)
  }, [k, N]), H = async () => {
    null != B && O(null);
    let e = N.map(e => e.value.trim()).filter(e => "" !== e);
    if (0 === e.length) {
      O(U.default.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);
      return
    }
    let l = {
      field_type: A.VerificationFormFieldTypes.TERMS,
      label: U.default.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,
      values: e,
      required: !0
    };
    try {
      await a(l), n()
    } catch (l) {
      let e = new _.APIError(l);
      O(e.getAnyErrorMessage())
    }
  };
  if (null == r) return null;
  let G = N.length === p.MAX_NUM_RULES;
  return (0, t.jsx)(R.default, {
    page: T.AnalyticsPages.GUILD_RULES_CREATE_MODAL,
    children: (0, t.jsxs)(S.default, {
      ...e,
      errorText: B,
      title: U.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,
      onCancel: n,
      onConfirm: H,
      children: [N.map((e, l) => (0, t.jsx)(F, {
        rulesChannel: null != f ? f : m,
        rule: e,
        index: l,
        onChange: e => w(e, l),
        onClear: () => z(l),
        onRuleReorder: X,
        isDropHovered: l === k,
        focused: l === y,
        onFocus: D,
        previewEnabled: null == M || M
      }, e.id)), !G && (0, t.jsxs)("div", {
        className: j.addItemContainer,
        children: [(0, t.jsx)(v.default, {
          height: 17,
          width: 17,
          color: (0, C.getColor)((0, c.isThemeDark)(u) ? T.Color.BLUE_345 : T.Color.BLUE_430)
        }), (0, t.jsx)(E.Clickable, {
          className: j.addItemButton,
          onClick: () => P(),
          children: (0, t.jsx)(E.Text, {
            color: "text-link",
            variant: "text-md/normal",
            children: U.default.Messages.MEMBER_VERIFICATION_ADD_RULE
          })
        })]
      }), (0, t.jsx)("div", {
        className: j.divider
      }), (0, t.jsx)(E.FormTitle, {
        children: U.default.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: j.termsExampleRulesContainer,
        children: [(0, t.jsxs)("div", {
          className: j.termsExampleRulePairContainer,
          children: [(0, t.jsx)(b, {
            shortRule: U.default.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,
            fullRule: U.default.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,
            disabled: G,
            onClick: P
          }), (0, t.jsx)(b, {
            shortRule: U.default.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,
            fullRule: U.default.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,
            disabled: G,
            onClick: P
          })]
        }), (0, t.jsxs)("div", {
          className: j.termsExampleRulePairContainer,
          children: [(0, t.jsx)(b, {
            shortRule: U.default.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,
            fullRule: U.default.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,
            disabled: G,
            onClick: P
          }), (0, t.jsx)(b, {
            shortRule: U.default.Messages.MEMBER_VERIFICATION_RULE_SAFE,
            fullRule: U.default.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,
            disabled: G,
            onClick: P
          })]
        })]
      })]
    })
  })
}