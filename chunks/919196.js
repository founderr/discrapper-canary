t.d(n, {
  Z: function() {
    return R
  }
}), t(47120), t(653041);
var i = t(735250),
  s = t(470079),
  l = t(442837),
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
  O = t(366598),
  g = t(125657),
  A = t(725875),
  C = t(981631),
  S = t(689938),
  x = t(20943);

function p(e) {
  let {
    application: n,
    guild: t,
    integration: s,
    ...l
  } = e;
  return (0, i.jsx)(a.ConfirmModal, {
    ...l,
    header: S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
      applicationName: n.name
    }),
    confirmText: S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
    cancelText: S.Z.Messages.CANCEL,
    onConfirm: () => {
      o.Z.disableIntegration(t.id, s.id).catch(() => {
        r.Z.show({
          title: S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
          body: S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
        })
      })
    },
    children: (0, i.jsx)(a.Text, {
      variant: "text-md/normal",
      children: S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
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
  } = r, [j, b] = (0, l.Wu)([N.Z], () => [N.Z.can(C.Plq.MANAGE_ROLES, t), null == M.bot || N.Z.canManageUser(C.Plq.MANAGE_GUILD, M.bot.id, t)], [M.bot, t]), D = (0, l.e7)([N.Z], () => N.Z.can(C.Plq.MANAGE_WEBHOOKS, t), [t]), P = s.useCallback(() => {
    f() && (0, a.openModal)(e => (0, i.jsx)(p, {
      guild: t,
      application: M,
      integration: L,
      ...e
    }))
  }, [M, f, t, L]), B = s.useMemo(() => {
    let e = [{
      icon: a.ClockIcon,
      text: S.Z.Messages.INTEGRATION_ADDED_DATE.format({
        timestamp: m.default.extractTimestamp(L.id)
      })
    }];
    return null != L.user && e.push({
      icon: a.UserIcon,
      text: S.Z.Messages.INTEGRATION_ADDED_USER.format({
        user: _.ZP.getUserTag(L.user)
      })
    }), e
  }, [L.id, L.user]), G = s.useMemo(() => null != M.bot ? (0, i.jsx)(g.Z, {
    guild: t,
    applicationIntegration: r
  }) : (0, i.jsx)(a.Card, {
    className: x.emptyCard,
    editable: !0,
    children: (0, i.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: S.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT
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
      className: x.headerDescription
    }) : null, j ? (0, i.jsx)(c.Z, {
      application: M,
      canNavigate: f,
      guildId: t.id
    }) : null, (0, i.jsx)(a.FormDivider, {
      className: x.headerDivider
    }), null != M.bot ? (0, i.jsxs)("div", {
      className: x.section,
      children: [(0, i.jsx)(O.Z, {
        icon: (0, i.jsx)(a.RobotIcon, {
          size: "xs",
          color: "currentColor"
        }),
        title: S.Z.Messages.INTEGRATIONS_APPLICATION_BOT
      }), G]
    }) : null, y && null != M.primarySkuId && (0, i.jsxs)("div", {
      className: x.section,
      children: [(0, i.jsx)(O.Z, {
        icon: (0, i.jsx)(a.TicketIcon, {
          size: "md",
          color: "currentColor"
        }),
        title: S.Z.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
      }), (0, i.jsx)(u.Z, {
        applicationId: M.id,
        applicationPrimarySkuId: M.primarySkuId,
        guildId: t.id
      })]
    }), (0, i.jsxs)("div", {
      className: x.section,
      children: [(0, i.jsx)(O.Z, {
        icon: (0, i.jsx)(a.WebhookIcon, {
          size: "md",
          color: "currentColor"
        }),
        title: S.Z.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
      }), v.length > 0 ? (0, i.jsx)(A.Z, {
        webhooks: v,
        editedWebhook: R,
        selectableWebhookChannels: o,
        errors: Z,
        canNavigate: f
      }) : (0, i.jsx)(a.Card, {
        className: x.emptyCard,
        editable: !0,
        children: (0, i.jsx)(a.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: D ? S.Z.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : S.Z.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
        })
      })]
    }), (0, i.jsx)(a.FormDivider, {
      className: x.headerDivider
    }), (0, i.jsxs)(E.Z, {
      className: x.section,
      justify: E.Z.Justify.BETWEEN,
      align: E.Z.Align.CENTER,
      children: [(0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: b ? S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
      }), (0, i.jsx)(E.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(a.Button, {
          size: a.Button.Sizes.SMALL,
          color: a.Button.Colors.RED,
          look: a.Button.Looks.FILLED,
          disabled: !b,
          onClick: P,
          children: S.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE
        })
      })]
    })]
  })
}