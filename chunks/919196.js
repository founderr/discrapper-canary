t.d(n, {
  Z: function() {
    return R
  }
}), t(47120), t(653041);
var i = t(735250),
  l = t(470079),
  s = t(442837),
  a = t(481060),
  r = t(668781),
  o = t(434404),
  c = t(590157),
  d = t(270144),
  u = t(288594),
  I = t(588822),
  N = t(496675),
  E = t(285952),
  T = t(768581),
  m = t(709054),
  _ = t(51144),
  h = t(486199),
  g = t(366598),
  O = t(125657),
  A = t(725875),
  x = t(981631),
  C = t(689938),
  S = t(20943);

function p(e) {
  let {
    application: n,
    guild: t,
    integration: l,
    ...s
  } = e;
  return (0, i.jsx)(a.ConfirmModal, {
    ...s,
    header: C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
      applicationName: n.name
    }),
    confirmText: C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
    cancelText: C.Z.Messages.CANCEL,
    onConfirm: () => {
      o.Z.disableIntegration(t.id, l.id).catch(() => {
        r.Z.show({
          title: C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
          body: C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
        })
      })
    },
    children: (0, i.jsx)(a.Text, {
      variant: "text-md/normal",
      children: C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
        applicationName: n.name
      })
    })
  })
}

function R(e) {
  var n;
  let {
    guild: t,
    applicationIntegration: r,
    selectableWebhookChannels: o,
    editedWebhook: R,
    errors: Z,
    canNavigate: f
  } = e, {
    application: M,
    integration: L,
    webhooks: v
  } = r, [j, b] = (0, s.Wu)([N.Z], () => [N.Z.can(x.Plq.MANAGE_ROLES, t), null == M.bot || N.Z.canManageUser(x.Plq.MANAGE_GUILD, M.bot.id, t)], [M.bot, t]), P = (0, s.e7)([N.Z], () => N.Z.can(x.Plq.MANAGE_WEBHOOKS, t), [t]), D = l.useCallback(() => {
    f() && (0, a.openModal)(e => (0, i.jsx)(p, {
      guild: t,
      application: M,
      integration: L,
      ...e
    }))
  }, [M, f, t, L]), B = l.useMemo(() => {
    let e = [{
      icon: a.ClockIcon,
      text: C.Z.Messages.INTEGRATION_ADDED_DATE.format({
        timestamp: m.default.extractTimestamp(L.id)
      })
    }];
    return null != L.user && e.push({
      icon: a.UserIcon,
      text: C.Z.Messages.INTEGRATION_ADDED_USER.format({
        user: _.ZP.getUserTag(L.user)
      })
    }), e
  }, [L.id, L.user]), G = l.useMemo(() => null != M.bot ? (0, i.jsx)(O.Z, {
    guild: t,
    applicationIntegration: r
  }) : (0, i.jsx)(a.Card, {
    className: S.emptyCard,
    editable: !0,
    children: (0, i.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: C.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT
    })
  }), [M.bot, r, t]), {
    applicationSubscriptionListingsShown: y
  } = (0, d.ZP)({
    applicationId: M.id,
    groupListingId: M.primarySkuId,
    guildId: t.id
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.Z, {
      name: M.name,
      imageSrc: null !== (n = M.getIconURL(32)) && void 0 !== n ? n : T.pK["0"],
      details: B,
      isHeader: !0
    }), (null == M ? void 0 : M.description) != null ? (0, i.jsx)(I.Z, {
      userBio: M.description,
      className: S.headerDescription
    }) : null, j ? (0, i.jsx)(c.Z, {
      application: M,
      canNavigate: f,
      guildId: t.id
    }) : null, (0, i.jsx)(a.FormDivider, {
      className: S.headerDivider
    }), null != M.bot ? (0, i.jsxs)("div", {
      className: S.section,
      children: [(0, i.jsx)(g.Z, {
        icon: (0, i.jsx)(a.RobotIcon, {
          size: "xs",
          color: "currentColor"
        }),
        title: C.Z.Messages.INTEGRATIONS_APPLICATION_BOT
      }), G]
    }) : null, y && null != M.primarySkuId && (0, i.jsxs)("div", {
      className: S.section,
      children: [(0, i.jsx)(g.Z, {
        icon: (0, i.jsx)(a.TicketIcon, {
          size: "md",
          color: "currentColor"
        }),
        title: C.Z.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
      }), (0, i.jsx)(u.Z, {
        applicationId: M.id,
        applicationPrimarySkuId: M.primarySkuId,
        guildId: t.id
      })]
    }), (0, i.jsxs)("div", {
      className: S.section,
      children: [(0, i.jsx)(g.Z, {
        icon: (0, i.jsx)(a.WebhookIcon, {
          size: "md",
          color: "currentColor"
        }),
        title: C.Z.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
      }), v.length > 0 ? (0, i.jsx)(A.Z, {
        webhooks: v,
        editedWebhook: R,
        selectableWebhookChannels: o,
        errors: Z,
        canNavigate: f
      }) : (0, i.jsx)(a.Card, {
        className: S.emptyCard,
        editable: !0,
        children: (0, i.jsx)(a.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: P ? C.Z.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : C.Z.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
        })
      })]
    }), (0, i.jsx)(a.FormDivider, {
      className: S.headerDivider
    }), (0, i.jsxs)(E.Z, {
      className: S.section,
      justify: E.Z.Justify.BETWEEN,
      align: E.Z.Align.CENTER,
      children: [(0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: b ? C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
      }), (0, i.jsx)(E.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(a.Button, {
          size: a.Button.Sizes.SMALL,
          color: a.Button.Colors.RED,
          look: a.Button.Looks.FILLED,
          disabled: !b,
          onClick: D,
          children: C.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE
        })
      })]
    })]
  })
}