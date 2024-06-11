"use strict";
l.r(t), l("47120"), l("653041");
var n = l("735250"),
  a = l("470079"),
  s = l("392711"),
  i = l.n(s),
  r = l("442837"),
  o = l("481060"),
  d = l("139387"),
  u = l("503089"),
  c = l("231757"),
  f = l("106976"),
  I = l("488915"),
  m = l("984933"),
  T = l("496675"),
  E = l("285952"),
  N = l("585483"),
  _ = l("63063"),
  S = l("919196"),
  h = l("731072"),
  g = l("494118"),
  p = l("351644"),
  O = l("720764"),
  A = l("981631"),
  C = l("689938"),
  x = l("762581");

function R(e, t) {
  switch (e) {
    case A.IntegrationSettingsSections.APPLICATION:
      var l;
      return null !== (l = null == t ? void 0 : t.application.name) && void 0 !== l ? l : "";
    case A.IntegrationSettingsSections.OVERVIEW:
      return C.default.Messages.INTEGRATIONS_OVERVIEW;
    case A.IntegrationSettingsSections.CHANNEL_FOLLOWING:
      return C.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
    case A.IntegrationSettingsSections.TWITCH:
      return C.default.Messages.INTEGRATIONS_TWITCH;
    case A.IntegrationSettingsSections.WEBHOOKS:
      return C.default.Messages.INTEGRATIONS_WEBHOOKS;
    case A.IntegrationSettingsSections.YOUTUBE:
      return C.default.Messages.INTEGRATIONS_YOUTUBE;
    default:
      return ""
  }
}
t.default = a.memo(function(e) {
  let {
    section: t,
    sectionId: l,
    guild: s,
    channel: M,
    integrations: L,
    editedIntegration: v,
    webhooks: j,
    editedWebhook: P,
    isFetching: b,
    refToScroller: D,
    errors: y,
    hasChanges: G
  } = e, B = (0, r.useStateFromStores)([m.default], () => null != s ? m.default.getDefaultChannel(s.id) : null), k = (0, r.useStateFromStoresObject)([m.default], () => m.default.getChannels(null == s ? void 0 : s.id)), U = (0, r.useStateFromStoresObject)([T.default], () => i().keyBy(k.SELECTABLE.map(e => e.channel).filter(e => T.default.can(A.Permissions.MANAGE_WEBHOOKS, e)), "id")), H = (0, r.useStateFromStoresObject)([T.default], () => i().keyBy(k.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && T.default.can(A.Permissions.MANAGE_WEBHOOKS, e)), "id")), F = null != M ? M : B, w = t === A.IntegrationSettingsSections.APPLICATION ? l : null, [W, V] = a.useState(u.SHAKE_INTENSITY_DEFAULT), K = a.useCallback(() => G() ? (N.ComponentDispatch.dispatch(A.ComponentActions.SHAKE_APP, {
    duration: 300,
    intensity: W
  }), V(Math.min(W + u.SHAKE_INTENSITY_INCREMENT, u.SHAKE_INTENSITY_MAX)), N.ComponentDispatch.dispatch(A.ComponentActions.EMPHASIZE_NOTICE), !1) : (V(u.SHAKE_INTENSITY_DEFAULT), !0), [G, W]), Y = a.useCallback(e => !!K() && (d.default.setSection(e), !0), [K]), {
    applicationIntegrations: z,
    applicationBotIds: Z,
    builtInIntegrations: q,
    customWebhooks: X,
    followedChannelWebhooks: J
  } = a.useMemo(() => {
    let e = {},
      t = {},
      l = {},
      n = [],
      a = [];
    if (null != L)
      for (let n of L)
        if ("discord" === n.type) {
          if (null != n.application) {
            var s;
            e[n.application.id] = {
              application: n.application,
              integration: n,
              webhooks: []
            }, (null === (s = n.application.bot) || void 0 === s ? void 0 : s.id) !== void 0 && (t[n.application.bot.id] = n.application.id)
          }
        } else !(n.type in l) && (l[n.type] = []), l[n.type].push(n);
    for (let t of j)(t.channel_id in U || t.channel_id in H) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === A.WebhookTypes.CHANNEL_FOLLOWER ? a.push(t) : n.push(t));
    return {
      applicationIntegrations: e,
      applicationBotIds: t,
      builtInIntegrations: l,
      customWebhooks: n,
      followedChannelWebhooks: a
    }
  }, [L, U, H, j]);
  a.useEffect(() => {
    if (!b) switch (t) {
      case A.IntegrationSettingsSections.TWITCH:
        null == q[A.PlatformTypes.TWITCH] && d.default.setSection(A.IntegrationSettingsSections.OVERVIEW);
        break;
      case A.IntegrationSettingsSections.YOUTUBE:
        null == q[A.PlatformTypes.YOUTUBE] && d.default.setSection(A.IntegrationSettingsSections.OVERVIEW);
        break;
      case A.IntegrationSettingsSections.APPLICATION:
        (null == w || !(w in Z || w in z)) && d.default.setSection(A.IntegrationSettingsSections.OVERVIEW)
    }
  }, [z, Z, q, w, t, b]), a.useEffect(() => {
    if ((null == s ? void 0 : s.id) != null) I.default.getEntitlementsForGuildFetchState(s.id) === I.FetchState.NOT_FETCHED && f.fetchEntitlementsForGuild(s.id)
  }, [null == s ? void 0 : s.id]);
  let Q = null;
  switch (t) {
    case A.IntegrationSettingsSections.TWITCH:
      null != q[A.PlatformTypes.TWITCH] && (Q = (0, n.jsx)(h.default, {
        guild: s,
        integrations: q[A.PlatformTypes.TWITCH],
        editedIntegration: v,
        labelText: C.default.Messages.INTEGRATIONS_TWITCH,
        platformType: A.PlatformTypes.TWITCH,
        descriptionText: C.default.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
        helpText: C.default.Messages.INTEGRATIONS_TWITCH_HELP.format({
          connectAction: () => (0, c.default)({
            platformType: A.PlatformTypes.TWITCH,
            location: "Integration Settings"
          }),
          helpdeskArticle: _.default.getArticleURL(A.HelpdeskArticles.TWITCH_INTEGRATION)
        }),
        canNavigate: K
      }));
      break;
    case A.IntegrationSettingsSections.YOUTUBE:
      null != q[A.PlatformTypes.YOUTUBE] && (Q = (0, n.jsx)(h.default, {
        guild: s,
        integrations: q[A.PlatformTypes.YOUTUBE],
        editedIntegration: v,
        labelText: C.default.Messages.INTEGRATIONS_YOUTUBE,
        platformType: A.PlatformTypes.YOUTUBE,
        descriptionText: C.default.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
        helpText: C.default.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
          connectAction: () => (0, c.default)({
            platformType: A.PlatformTypes.YOUTUBE
          }),
          helpdeskArticle: _.default.getArticleURL(A.HelpdeskArticles.YOUTUBE_INTEGRATION)
        }),
        canNavigate: K
      }));
      break;
    case A.IntegrationSettingsSections.APPLICATION:
      var $;
      let ee = null != w ? null !== ($ = z[Z[w]]) && void 0 !== $ ? $ : z[w] : null;
      null != ee && (Q = (0, n.jsx)(S.default, {
        guild: s,
        applicationIntegration: ee,
        editedWebhook: P,
        selectableWebhookChannels: U,
        errors: y,
        canNavigate: K
      }));
      break;
    case A.IntegrationSettingsSections.CHANNEL_FOLLOWING:
      Q = (0, n.jsx)(g.default, {
        followedChannelWebhooks: J,
        editedWebhook: P,
        selectableWebhookChannels: U,
        canNavigate: K,
        errors: y
      });
      break;
    case A.IntegrationSettingsSections.WEBHOOKS:
      Q = (0, n.jsx)(O.default, {
        guild: s,
        channel: M,
        customWebhooks: X,
        editedWebhook: P,
        selectableWebhookChannels: {
          ...U,
          ...H
        },
        canNavigate: K,
        refToScroller: D,
        errors: y
      });
      break;
    default:
      Q = (0, n.jsx)(p.default, {
        guild: s,
        channel: M,
        applicationIntegrations: z,
        builtInIntegrations: q,
        customWebhooks: X,
        followedChannelWebhooks: J,
        isLoading: b || null == s,
        canCreateWebhook: null != F,
        onManageCustomWebhooks: () => {
          d.default.setSection(A.IntegrationSettingsSections.WEBHOOKS)
        },
        onManageFollowedChannels: () => {
          d.default.setSection(A.IntegrationSettingsSections.CHANNEL_FOLLOWING)
        },
        onManageApplication: e => {
          d.default.setSection(A.IntegrationSettingsSections.APPLICATION, e)
        },
        onManageBuiltIn: e => {
          switch (e) {
            case A.PlatformTypes.TWITCH:
              d.default.setSection(A.IntegrationSettingsSections.TWITCH);
              break;
            case A.PlatformTypes.YOUTUBE:
              d.default.setSection(A.IntegrationSettingsSections.YOUTUBE)
          }
        }
      })
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(E.default, {
      align: E.default.Align.CENTER,
      className: x.breadcrumbs,
      children: t === A.IntegrationSettingsSections.OVERVIEW ? (0, n.jsx)(o.FormTitle, {
        tag: "h1",
        children: R(A.IntegrationSettingsSections.OVERVIEW)
      }) : (0, n.jsx)(o.Breadcrumbs, {
        activeId: t.toString(),
        breadcrumbs: [A.IntegrationSettingsSections.OVERVIEW, t].map(e => ({
          id: e.toString(),
          label: R(e, z[w])
        })),
        onBreadcrumbClick: e => {
          t !== parseInt(e.id) && Y(parseInt(e.id))
        },
        renderCustomBreadcrumb: (e, t) => (0, n.jsx)(o.FormTitle, {
          tag: "h1",
          className: t ? x.breadcrumbActive : x.breadcrumbInactive,
          children: e.label
        })
      })
    }), Q]
  })
})