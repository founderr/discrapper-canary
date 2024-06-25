t.d(n, {
  Z: function() {
    return v
  }
}), t(47120), t(724458);
var i = t(735250),
  a = t(470079),
  r = t(481060),
  l = t(239091),
  o = t(236413),
  u = t(727072),
  s = t(85960),
  c = t(676317),
  d = t(65912),
  E = t(556012),
  f = t(572456),
  I = t(434404),
  M = t(981631),
  g = t(273504),
  m = t(689938),
  Z = t(780781);
let _ = g.fX.KEYWORD;

function v(e, n) {
  let {
    perGuildMaxCount: t
  } = s.I6[_], {
    isLoading: v,
    saveRule: S,
    errorMessage: A
  } = (0, d.w)(), {
    createNewEditingRule: T
  } = (0, d.V)(), [h, p] = a.useState(!1), [O, R] = (0, u.I2)(n), {
    rulesByTriggerType: N,
    updateRule: x
  } = (0, u.pH)(n), C = a.useMemo(() => {
    var e;
    return null !== (e = N[_]) && void 0 !== e ? e : []
  }, [N]), j = 0 === C.length, P = t > C.length && !j;
  if (!a.useMemo(() => (0, c.ze)(n), [n]) || null == e || 0 === e.length || null == n) return null;
  let b = e.split(" "),
    L = b.length;
  try {
    (0, o.km)(b, g.RH)
  } catch (e) {
    return null
  }
  let y = () => {
      if (null != n)(0, l.Zy)(), I.Z.open(n, M.pNK.GUILD_AUTOMOD), setTimeout(() => {
        T(n, _, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, 400)
    },
    D = async n => {
      var t, i;
      if ((0, l.Zy)(), !await (0, f.XN)(n.name, e)) return;
      let a = {
        ...n,
        triggerMetadata: {
          ...n.triggerMetadata,
          keywordFilter: [...null !== (i = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== i ? i : [], e]
        }
      };
      await S(a, C), x(a), null != A ? (0, r.showToast)((0, r.createToast)(m.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, r.ToastType.FAILURE)) : (0, r.showToast)((0, r.createToast)(m.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, r.ToastType.SUCCESS))
    }, G = (0, i.jsx)(i.Fragment, {
      children: (0, i.jsx)(r.MenuItem, {
        id: "automod-rules-loading",
        label: m.Z.Messages.LOADING
      })
    });
  return !O && (G = (0, i.jsxs)(i.Fragment, {
    children: [j && (0, i.jsx)(r.MenuItem, {
      id: "add-first-rule",
      label: m.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
      action: y,
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
      return (0, i.jsx)(r.MenuRadioItem, {
        id: e.id,
        label: e.name,
        subtext: (0, i.jsx)(r.Text, {
          color: "text-muted",
          className: Z.actionTextHeader,
          variant: "text-xs/normal",
          children: n.slice(2)
        }),
        group: "automod-rule-selection",
        checked: !1,
        disabled: v,
        action: () => D(e)
      }, e.id)
    }), P && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.MenuSeparator, {}), (0, i.jsx)(r.MenuItem, {
        id: "add-another-rule",
        label: m.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: y,
        disabled: v
      })]
    })]
  })), (0, i.jsx)(r.MenuItem, {
    id: "guild-automod-add-selection",
    label: m.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
      keywordCount: L
    }),
    onFocus: () => {
      if (!h) p(!0), R()
    },
    children: G
  })
}