"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120"), n("724458");
var a = n("735250"),
  i = n("470079"),
  l = n("481060"),
  s = n("239091"),
  u = n("236413"),
  r = n("727072"),
  o = n("85960"),
  d = n("676317"),
  c = n("65912"),
  f = n("556012"),
  E = n("572456"),
  M = n("434404"),
  m = n("981631"),
  g = n("273504"),
  S = n("689938"),
  I = n("485670");
let p = g.AutomodTriggerType.KEYWORD;

function v(e, t) {
  let {
    perGuildMaxCount: n
  } = o.triggerConfigs[p], {
    isLoading: v,
    saveRule: h,
    errorMessage: A
  } = (0, c.useAutomodEditingRuleActions)(), {
    createNewEditingRule: _
  } = (0, c.useAutomodEditingRuleState)(), [T, C] = i.useState(!1), [R, O] = (0, r.useSyncAutomodRules)(t), {
    rulesByTriggerType: y,
    updateRule: x
  } = (0, r.useAutomodRulesList)(t), N = i.useMemo(() => {
    var e;
    return null !== (e = y[p]) && void 0 !== e ? e : []
  }, [y]), j = 0 === N.length, b = n > N.length && !j;
  if (!i.useMemo(() => (0, d.canCurrentUserManageMessageFilters)(t), [t]) || null == e || 0 === e.length || null == t) return null;
  let D = e.split(" "),
    G = D.length;
  try {
    (0, u.validateKeywordsOrThrow)(D, g.MAX_KEYWORDS_PER_KEYWORD_FILTER)
  } catch (e) {
    return null
  }
  let L = () => {
      null != t && ((0, s.closeContextMenu)(), M.default.open(t, m.GuildSettingsSections.GUILD_AUTOMOD), setTimeout(() => {
        _(t, p, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, 400))
    },
    P = async t => {
      var n, a;
      if ((0, s.closeContextMenu)(), !await (0, E.confirmAddKeyword)(t.name, e)) return;
      let i = {
        ...t,
        triggerMetadata: {
          ...t.triggerMetadata,
          keywordFilter: [...null !== (a = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== a ? a : [], e]
        }
      };
      await h(i, N), x(i), null != A ? (0, l.showToast)((0, l.createToast)(S.default.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(S.default.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, l.ToastType.SUCCESS))
    }, F = (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.MenuItem, {
        id: "automod-rules-loading",
        label: S.default.Messages.LOADING
      })
    });
  return !R && (F = (0, a.jsxs)(a.Fragment, {
    children: [j && (0, a.jsx)(l.MenuItem, {
      id: "add-first-rule",
      label: S.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
      action: L,
      disabled: v
    }), N.map(e => {
      let t = (0, o.getAvailableActionTypes)(p).reduce((t, n) => {
        let a = e.actions.find(e => {
          let {
            type: t
          } = e;
          return n === t
        });
        if (null == a) return t;
        let i = (0, f.getActionInfo)(n, a);
        return t += ", ".concat(null == i ? void 0 : i.headerText)
      }, "");
      return (0, a.jsx)(l.MenuRadioItem, {
        id: e.id,
        label: e.name,
        subtext: (0, a.jsx)(l.Text, {
          color: "text-muted",
          className: I.actionTextHeader,
          variant: "text-xs/normal",
          children: t.slice(2)
        }),
        group: "automod-rule-selection",
        checked: !1,
        disabled: v,
        action: () => P(e)
      }, e.id)
    }), b && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
        id: "add-another-rule",
        label: S.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: L,
        disabled: v
      })]
    })]
  })), (0, a.jsx)(l.MenuItem, {
    id: "guild-automod-add-selection",
    label: S.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
      keywordCount: G
    }),
    onFocus: () => {
      !T && (C(!0), O())
    },
    children: F
  })
}