n.d(t, {
  Z: function() {
return C;
  }
}), n(47120), n(724458);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(239091),
  l = n(236413),
  o = n(727072),
  c = n(85960),
  u = n(676317),
  d = n(65912),
  _ = n(556012),
  E = n(572456),
  I = n(434404),
  m = n(981631),
  T = n(273504),
  h = n(689938),
  N = n(509142);
let f = T.fX.KEYWORD;

function C(e, t) {
  let {
perGuildMaxCount: n
  } = c.I6[f], {
isLoading: C,
saveRule: p,
errorMessage: g
  } = (0, d.w)(), {
createNewEditingRule: S
  } = (0, d.V)(), [A, M] = a.useState(!1), [R, O] = (0, o.I2)(t), {
rulesByTriggerType: x,
updateRule: v
  } = (0, o.pH)(t), Z = a.useMemo(() => {
var e;
return null !== (e = x[f]) && void 0 !== e ? e : [];
  }, [x]), L = 0 === Z.length, P = n > Z.length && !L;
  if (!a.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t)
return null;
  let D = e.split(' '),
b = D.length;
  try {
(0, l.km)(D, T.RH);
  } catch (e) {
return null;
  }
  let j = () => {
  if (null != t)
    (0, r.Zy)(), I.Z.open(t, m.pNK.GUILD_AUTOMOD), setTimeout(() => {
      S(t, f, {
        triggerMetadata: {
          keywordFilter: [e],
          regexPatterns: [],
          allowList: []
        }
      });
    }, 400);
},
U = async t => {
  var n, i;
  if ((0, r.Zy)(), !await (0, E.XN)(t.name, e))
    return;
  let a = {
    ...t,
    triggerMetadata: {
      ...t.triggerMetadata,
      keywordFilter: [
        ...null !== (i = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== i ? i : [],
        e
      ]
    }
  };
  await p(a, Z), v(a), null != g ? (0, s.showToast)((0, s.createToast)(h.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, s.ToastType.FAILURE)) : (0, s.showToast)((0, s.createToast)(h.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, s.ToastType.SUCCESS));
}, y = (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(s.MenuItem, {
    id: 'automod-rules-loading',
    label: h.Z.Messages.LOADING
  })
});
  return !R && (y = (0, i.jsxs)(i.Fragment, {
children: [
  L && (0, i.jsx)(s.MenuItem, {
    id: 'add-first-rule',
    label: h.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
    action: j,
    disabled: C
  }),
  Z.map(e => {
    let t = (0, c.V9)(f).reduce((t, n) => {
      let i = e.actions.find(e => {
        let {
          type: t
        } = e;
        return n === t;
      });
      if (null == i)
        return t;
      let a = (0, _.c)(n, i);
      return t += ', '.concat(null == a ? void 0 : a.headerText);
    }, '');
    return (0, i.jsx)(s.MenuRadioItem, {
      id: e.id,
      label: e.name,
      subtext: (0, i.jsx)(s.Text, {
        color: 'text-muted',
        className: N.actionTextHeader,
        variant: 'text-xs/normal',
        children: t.slice(2)
      }),
      group: 'automod-rule-selection',
      checked: !1,
      disabled: C,
      action: () => U(e)
    }, e.id);
  }),
  P && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(s.MenuSeparator, {}),
      (0, i.jsx)(s.MenuItem, {
        id: 'add-another-rule',
        label: h.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: j,
        disabled: C
      })
    ]
  })
]
  })), (0, i.jsx)(s.MenuItem, {
id: 'guild-automod-add-selection',
label: h.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
  keywordCount: b
}),
onFocus: () => {
  if (!A)
    M(!0), O();
},
children: y
  });
}