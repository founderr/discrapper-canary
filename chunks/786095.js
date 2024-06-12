"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120"), n("724458");
var a = n("735250"),
  i = n("470079"),
  l = n("481060"),
  s = n("239091"),
  r = n("236413"),
  u = n("727072"),
  o = n("85960"),
  d = n("676317"),
  c = n("65912"),
  f = n("556012"),
  M = n("572456"),
  E = n("434404"),
  m = n("981631"),
  g = n("273504"),
  v = n("689938"),
  I = n("485670");
let h = g.AutomodTriggerType.KEYWORD;

function p(e, t) {
  let {
    perGuildMaxCount: n
  } = o.triggerConfigs[h], {
    isLoading: p,
    saveRule: S,
    errorMessage: A
  } = (0, c.useAutomodEditingRuleActions)(), {
    createNewEditingRule: C
  } = (0, c.useAutomodEditingRuleState)(), [_, T] = i.useState(!1), [R, O] = (0, u.useSyncAutomodRules)(t), {
    rulesByTriggerType: x,
    updateRule: y
  } = (0, u.useAutomodRulesList)(t), N = i.useMemo(() => {
    var e;
    return null !== (e = x[h]) && void 0 !== e ? e : []
  }, [x]), j = 0 === N.length, b = n > N.length && !j;
  if (!i.useMemo(() => (0, d.canCurrentUserManageMessageFilters)(t), [t]) || null == e || 0 === e.length || null == t) return null;
  let D = e.split(" "),
    L = D.length;
  try {
    (0, r.validateKeywordsOrThrow)(D, g.MAX_KEYWORDS_PER_KEYWORD_FILTER)
  } catch (e) {
    return null
  }
  let P = () => {
      null != t && ((0, s.closeContextMenu)(), E.default.open(t, m.GuildSettingsSections.GUILD_AUTOMOD), setTimeout(() => {
        C(t, h, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, 400))
    },
    G = async t => {
      var n, a;
      if ((0, s.closeContextMenu)(), !await (0, M.confirmAddKeyword)(t.name, e)) return;
      let i = {
        ...t,
        triggerMetadata: {
          ...t.triggerMetadata,
          keywordFilter: [...null !== (a = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== a ? a : [], e]
        }
      };
      await S(i, N), y(i), null != A ? (0, l.showToast)((0, l.createToast)(v.default.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(v.default.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, l.ToastType.SUCCESS))
    }, U = (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.MenuItem, {
        id: "automod-rules-loading",
        label: v.default.Messages.LOADING
      })
    });
  return !R && (U = (0, a.jsxs)(a.Fragment, {
    children: [j && (0, a.jsx)(l.MenuItem, {
      id: "add-first-rule",
      label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
      action: P,
      disabled: p
    }), N.map(e => {
      let t = (0, o.getAvailableActionTypes)(h).reduce((t, n) => {
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
        disabled: p,
        action: () => G(e)
      }, e.id)
    }), b && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
        id: "add-another-rule",
        label: v.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: P,
        disabled: p
      })]
    })]
  })), (0, a.jsx)(l.MenuItem, {
    id: "guild-automod-add-selection",
    label: v.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
      keywordCount: L
    }),
    onFocus: () => {
      !_ && (T(!0), O())
    },
    children: U
  })
}