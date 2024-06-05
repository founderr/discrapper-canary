"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("47120"), l("653041");
var n = l("735250"),
  a = l("470079"),
  s = l("442837"),
  i = l("481060"),
  r = l("668781"),
  o = l("434404"),
  d = l("590157"),
  u = l("270144"),
  c = l("288594"),
  f = l("588822"),
  I = l("496675"),
  m = l("285952"),
  T = l("497309"),
  E = l("964309"),
  N = l("912527"),
  _ = l("191741"),
  S = l("202597"),
  h = l("768581"),
  g = l("709054"),
  p = l("51144"),
  O = l("486199"),
  A = l("366598"),
  C = l("125657"),
  x = l("725875"),
  R = l("981631"),
  M = l("689938"),
  L = l("272279");

function v(e) {
  let {
    application: t,
    guild: l,
    integration: a,
    ...s
  } = e;
  return (0, n.jsx)(i.ConfirmModal, {
    ...s,
    header: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
      applicationName: t.name
    }),
    confirmText: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE,
    cancelText: M.default.Messages.CANCEL,
    onConfirm: () => {
      o.default.disableIntegration(l.id, a.id).catch(() => {
        r.default.show({
          title: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
          body: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
        })
      })
    },
    children: (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
        applicationName: t.name
      })
    })
  })
}

function j(e) {
  var t;
  let {
    guild: l,
    applicationIntegration: r,
    selectableWebhookChannels: o,
    editedWebhook: j,
    errors: P,
    canNavigate: b
  } = e, {
    application: D,
    integration: y,
    webhooks: G
  } = r, [B, k] = (0, s.useStateFromStoresArray)([I.default], () => [I.default.can(R.Permissions.MANAGE_ROLES, l), null == D.bot || I.default.canManageUser(R.Permissions.MANAGE_GUILD, D.bot.id, l)], [D.bot, l]), U = (0, s.useStateFromStores)([I.default], () => I.default.can(R.Permissions.MANAGE_WEBHOOKS, l), [l]), H = a.useCallback(() => {
    b() && (0, i.openModal)(e => (0, n.jsx)(v, {
      guild: l,
      application: D,
      integration: y,
      ...e
    }))
  }, [D, b, l, y]), F = a.useMemo(() => {
    let e = [{
      icon: T.default,
      text: M.default.Messages.INTEGRATION_ADDED_DATE.format({
        timestamp: g.default.extractTimestamp(y.id)
      })
    }];
    return null != y.user && e.push({
      icon: E.default,
      text: M.default.Messages.INTEGRATION_ADDED_USER.format({
        user: p.default.getUserTag(y.user)
      })
    }), e
  }, [y.id, y.user]), w = a.useMemo(() => null != D.bot ? (0, n.jsx)(C.default, {
    guild: l,
    applicationIntegration: r
  }) : (0, n.jsx)(i.Card, {
    className: L.emptyCard,
    editable: !0,
    children: (0, n.jsx)(i.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: M.default.Messages.INTEGRATIONS_APPLICATION_NO_BOT
    })
  }), [D.bot, r, l]), {
    applicationSubscriptionListingsShown: W
  } = (0, u.default)({
    applicationId: D.id,
    groupListingId: D.primarySkuId,
    guildId: l.id
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(O.default, {
      name: D.name,
      imageSrc: null !== (t = D.getIconURL(32)) && void 0 !== t ? t : h.DEFAULT_AVATARS["0"],
      details: F,
      isHeader: !0
    }), (null == D ? void 0 : D.description) != null ? (0, n.jsx)(f.default, {
      userBio: D.description,
      className: L.headerDescription
    }) : null, B ? (0, n.jsx)(d.default, {
      application: D,
      canNavigate: b,
      guildId: l.id
    }) : null, (0, n.jsx)(i.FormDivider, {
      className: L.headerDivider
    }), null != D.bot ? (0, n.jsxs)("div", {
      className: L.section,
      children: [(0, n.jsx)(A.default, {
        icon: (0, n.jsx)(N.default, {}),
        title: M.default.Messages.INTEGRATIONS_APPLICATION_BOT
      }), w]
    }) : null, W && null != D.primarySkuId && (0, n.jsxs)("div", {
      className: L.section,
      children: [(0, n.jsx)(A.default, {
        icon: (0, n.jsx)(_.default, {}),
        title: M.default.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
      }), (0, n.jsx)(c.default, {
        applicationId: D.id,
        applicationPrimarySkuId: D.primarySkuId,
        guildId: l.id
      })]
    }), (0, n.jsxs)("div", {
      className: L.section,
      children: [(0, n.jsx)(A.default, {
        icon: (0, n.jsx)(S.default, {}),
        title: M.default.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
      }), G.length > 0 ? (0, n.jsx)(x.default, {
        webhooks: G,
        editedWebhook: j,
        selectableWebhookChannels: o,
        errors: P,
        canNavigate: b
      }) : (0, n.jsx)(i.Card, {
        className: L.emptyCard,
        editable: !0,
        children: (0, n.jsx)(i.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: U ? M.default.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : M.default.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
        })
      })]
    }), (0, n.jsx)(i.FormDivider, {
      className: L.headerDivider
    }), (0, n.jsxs)(m.default, {
      className: L.section,
      justify: m.default.Justify.BETWEEN,
      align: m.default.Align.CENTER,
      children: [(0, n.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: k ? M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
      }), (0, n.jsx)(m.default.Child, {
        grow: 0,
        shrink: 0,
        children: (0, n.jsx)(i.Button, {
          size: i.Button.Sizes.SMALL,
          color: i.Button.Colors.RED,
          look: i.Button.Looks.FILLED,
          disabled: !k,
          onClick: H,
          children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE
        })
      })]
    })]
  })
}