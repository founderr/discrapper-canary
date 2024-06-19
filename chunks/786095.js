t.d(n, {
  Z: function() {
    return v
  }
}), t(47120), t(724458);
var i = t(735250),
  a = t(470079),
  l = t(481060),
  r = t(239091),
  o = t(236413),
  u = t(727072),
  s = t(85960),
  c = t(676317),
  d = t(65912),
  E = t(556012),
  f = t(572456),
  M = t(434404),
  g = t(981631),
  m = t(273504),
  I = t(689938),
  Z = t(780781);
let _ = m.fX.KEYWORD;

function v(e, n) {
  let {
    perGuildMaxCount: t
  } = s.I6[_], {
    isLoading: v,
    saveRule: S,
    errorMessage: A
  } = (0, d.w)(), {
    createNewEditingRule: h
  } = (0, d.V)(), [p, T] = a.useState(!1), [O, R] = (0, u.I2)(n), {
    rulesByTriggerType: N,
    updateRule: x
  } = (0, u.pH)(n), C = a.useMemo(() => {
    var e;
    return null !== (e = N[_]) && void 0 !== e ? e : []
  }, [N]), P = 0 === C.length, j = t > C.length && !P;
  if (!a.useMemo(() => (0, c.ze)(n), [n]) || null == e || 0 === e.length || null == n) return null;
  let y = e.split(" "),
    b = y.length;
  try {
    (0, o.km)(y, m.RH)
  } catch (e) {
    return null
  }
  let D = () => {
      if (null != n)(0, r.Zy)(), M.Z.open(n, g.pNK.GUILD_AUTOMOD), setTimeout(() => {
        h(n, _, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, 400)
    },
    L = async n => {
      var t, i;
      if ((0, r.Zy)(), !await (0, f.XN)(n.name, e)) return;
      let a = {
        ...n,
        triggerMetadata: {
          ...n.triggerMetadata,
          keywordFilter: [...null !== (i = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== i ? i : [], e]
        }
      };
      await S(a, C), x(a), null != A ? (0, l.showToast)((0, l.createToast)(I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, l.ToastType.SUCCESS))
    }, G = (0, i.jsx)(i.Fragment, {
      children: (0, i.jsx)(l.MenuItem, {
        id: "automod-rules-loading",
        label: I.Z.Messages.LOADING
      })
    });
  return !O && (G = (0, i.jsxs)(i.Fragment, {
    children: [P && (0, i.jsx)(l.MenuItem, {
      id: "add-first-rule",
      label: I.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
      action: D,
      disabled: v
    }), C.map(e => {
      let n = (0, s.V9)(_).reduce((n, t) => {
        let i = e.actions.find(e => {
          let {
            type: n
          } = e;
          return t === n
        });
        if (null == i) return n;
        let a = (0, E.c)(t, i);
        return n += ", ".concat(null == a ? void 0 : a.headerText)
      }, "");
      return (0, i.jsx)(l.MenuRadioItem, {
        id: e.id,
        label: e.name,
        subtext: (0, i.jsx)(l.Text, {
          color: "text-muted",
          className: Z.actionTextHeader,
          variant: "text-xs/normal",
          children: n.slice(2)
        }),
        group: "automod-rule-selection",
        checked: !1,
        disabled: v,
        action: () => L(e)
      }, e.id)
    }), j && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.MenuSeparator, {}), (0, i.jsx)(l.MenuItem, {
        id: "add-another-rule",
        label: I.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: D,
        disabled: v
      })]
    })]
  })), (0, i.jsx)(l.MenuItem, {
    id: "guild-automod-add-selection",
    label: I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
      keywordCount: b
    }),
    onFocus: () => {
      if (!p) T(!0), R()
    },
    children: G
  })
}