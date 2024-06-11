"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120"), s("536091");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("692547"),
  r = s("481060"),
  o = s("999382"),
  d = s("279542"),
  u = s("725808"),
  c = s("823379"),
  E = s("63063"),
  _ = s("426563"),
  I = s("727072"),
  T = s("85960"),
  S = s("577330"),
  f = s("65912"),
  m = s("51248"),
  N = s("546513"),
  g = s("572456"),
  h = s("273504"),
  C = s("981631"),
  R = s("689938"),
  x = s("812364");

function L(e) {
  var t, s;
  let {
    guildId: L,
    setPreventNavigation: O = () => {}
  } = e, {
    editingRule: p,
    setEditingRule: A
  } = (0, f.useAutomodEditingRuleState)(), {
    guild: M,
    subsection: D
  } = (0, n.useStateFromStoresObject)([o.default], () => o.default.getProps()), v = null !== (s = null !== (t = null == M ? void 0 : M.id) && void 0 !== t ? t : L) && void 0 !== s ? s : C.EMPTY_STRING_SNOWFLAKE_ID, j = null != p, [G] = (0, I.useSyncAutomodRulesEffect)(v), {
    rulesByTriggerType: U
  } = (0, I.useAutomodRulesList)(v), P = {
    [T.AutomodTriggerCategory.MEMBERS]: R.default.Messages.GUILD_SETTINGS_AUTOMOD_MEMBER_CATEGORY_TITLE,
    [T.AutomodTriggerCategory.CONTENT]: R.default.Messages.GUILD_SETTINGS_AUTOMOD_CONTENT_CATEGORY_TITLE
  }, b = l.useMemo(() => Object.values(null != U ? U : {}).flat().filter(c.isNotNullish), [U]);
  l.useEffect(() => {
    j && A(null)
  }, [v]);
  let y = l.useCallback((e, t) => {
      if (null != e) {
        var s, a;
        return null !== (a = null === (s = b.find(t => {
          let {
            id: s
          } = t;
          return s === e
        })) || void 0 === s ? void 0 : s.name) && void 0 !== a ? a : null
      }
      return null != t ? (0, T.triggerConfigs)[t].getDefaultRuleName() : null
    }, [b]),
    B = l.useMemo(() => {
      var e, t;
      return y(null !== (e = null == p ? void 0 : p.id) && void 0 !== e ? e : null, null !== (t = null == p ? void 0 : p.triggerType) && void 0 !== t ? t : null)
    }, [y, p]);
  l.useEffect(() => {
    O(j, (0, g.createOnPreventNavigation)(B))
  }, [O, j, B]);
  let F = (0, T.useAvailableTriggerTypes)(v),
    H = e => (0, a.jsx)(a.Fragment, {
      children: e.map(e => {
        var t;
        return (0, a.jsx)(N.default, {
          guildId: v,
          triggerType: e,
          rules: null !== (t = U[e]) && void 0 !== t ? t : [],
          initWithEdit: D === C.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM && e === h.AutomodTriggerType.MENTION_SPAM
        }, e)
      })
    });
  return (0, a.jsxs)(r.FormSection, {
    title: R.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    tag: "h1",
    children: [(0, a.jsxs)("div", {
      className: x.descriptionContainer,
      children: [(0, a.jsxs)(r.FormSection, {
        tag: "h3",
        className: x.description,
        titleClassName: x.descriptionHeader,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: R.default.Messages.GUILD_SETTINGS_AUTOMOD_MESSAGE_FILTER_DESCRIPTION
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          className: x.helpUrl,
          children: R.default.Messages.GUILD_AUTOMOD_LEARN_MORE_LINK.format({
            helpUrl: E.default.getArticleURL(C.HelpdeskArticles.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      }), (0, a.jsxs)("div", {
        className: x.descriptionAvatarContainer,
        children: [(0, a.jsx)(r.Avatar, {
          src: (0, _.getAutomodAvatarURL)(),
          size: r.AvatarSizes.SIZE_80,
          "aria-label": R.default.Messages.GUILD_AUTOMOD_USERNAME
        }), (0, a.jsx)(r.TextBadge, {
          text: (0, a.jsxs)("div", {
            className: x.automodBadgeText,
            children: [(0, a.jsx)(u.default, {
              width: 12,
              height: 12,
              className: x.checkmarkIcon
            }), (0, a.jsx)(r.Text, {
              variant: "text-xs/bold",
              className: x.automodText,
              children: R.default.Messages.GUILD_AUTOMOD_USERNAME
            })]
          }),
          color: i.default.unsafe_rawColors.BRAND_500.css,
          className: x.textBadge
        })]
      })]
    }), G ? (0, a.jsx)(S.default, {}) : Object.entries(F).map(e => {
      let [t, s] = e;
      if (0 === s.length) return (0, a.jsx)(l.Fragment, {}, t);
      let n = null != P[t] ? (0, a.jsx)(r.FormSection, {
        tag: "h3",
        className: x.categoryHeader,
        children: (0, a.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: P[t]
        })
      }) : null;
      return (0, a.jsxs)("div", {
        className: x.categoryContainer,
        children: [n, H(s)]
      }, t)
    }), null != M && (0, a.jsx)(d.GuildExplicitContentFilter, {
      guild: M,
      withDivider: !1,
      className: x.explicitContentFilterSection
    }), (0, a.jsx)(m.default, {
      guildId: v,
      existingRules: b
    }), j && (0, a.jsx)("div", {
      className: x.endSpacer
    })]
  })
}