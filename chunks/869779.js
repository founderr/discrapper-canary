"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
});
var s = l("735250"),
  a = l("470079"),
  n = l("442837"),
  i = l("481060"),
  r = l("570140"),
  o = l("787014"),
  d = l("37234"),
  u = l("503089"),
  c = l("493544"),
  h = l("367907"),
  m = l("933557"),
  f = l("471445"),
  E = l("351123"),
  g = l("665906"),
  S = l("210887"),
  T = l("131704"),
  N = l("533947"),
  p = l("277053"),
  C = l("388610"),
  _ = l("592125"),
  x = l("496675"),
  M = l("699516"),
  I = l("594174"),
  R = l("740727"),
  A = l("585483"),
  O = l("787263"),
  L = l("975316"),
  v = l("428813"),
  j = l("2147"),
  y = l("856606"),
  b = l("981631"),
  D = l("689938"),
  F = l("881948");

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    l = arguments.length > 2 ? arguments[2] : void 0;
  h.default.trackWithMetadata(b.AnalyticEvents.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    origin_pane: t,
    destination_pane: e,
    location: l
  })
}
class w extends a.PureComponent {
  componentDidMount() {
    P(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    r.default.wait(() => (0, o.close)())
  }
  componentDidUpdate(e) {
    let {
      formState: t,
      section: l
    } = e, {
      formState: s,
      section: a,
      canManageRoles: n,
      canManageChannels: i,
      canManageWebhooks: r
    } = this.props;
    (i || n || r) && (s !== b.FormStates.CLOSED || s === t) && (n || a !== b.ChannelSettingsSections.PERMISSIONS) && (r || a !== b.ChannelSettingsSections.INTEGRATIONS) ? a !== l && P(a, l): (0, d.popLayer)()
  }
  render() {
    let {
      theme: e,
      sidebarTheme: t,
      section: l,
      channel: a,
      category: n,
      canManageRoles: r,
      canManageChannels: h,
      canDeleteChannels: g,
      canManageWebhooks: S
    } = this.props;
    return null == a ? null : (0, s.jsx)(u.default, {
      theme: e,
      sidebarTheme: t,
      section: null != l ? l : b.ChannelSettingsSections.OVERVIEW,
      onSetSection: o.setSection,
      onClose: d.popLayer,
      sections: function(e) {
        let {
          channel: t,
          category: l,
          canManageRoles: a,
          canManageChannels: n,
          canDeleteChannels: r,
          canManageWebhooks: u
        } = e, h = (0, f.getChannelIconComponent)(t), {
          GUILD_CATEGORY: g
        } = b.ChannelTypes, S = T.THREAD_CHANNEL_TYPES.has(t.type), _ = t.type === g ? D.default.Messages.DELETE_CATEGORY : S ? t.isForumPost() ? D.default.Messages.DELETE_FORUM_POST : D.default.Messages.DELETE_THREAD : D.default.Messages.DELETE_CHANNEL;
        return [{
          section: c.SectionTypes.HEADER,
          label: null != t ? (0, s.jsxs)(s.Fragment, {
            children: [null != h ? (0, s.jsx)(h, {
              width: 12,
              height: 12,
              className: F.channelIcon
            }) : null, (0, m.computeChannelName)(t, I.default, M.default), null != l ? (0, s.jsx)(i.Text, {
              tag: "span",
              variant: "text-xs/semibold",
              color: "header-secondary",
              lineClamp: 1,
              className: F.category,
              children: (0, m.computeChannelName)(l, I.default, M.default)
            }) : null]
          }) : D.default.Messages.CHANNEL_SETTINGS
        }, {
          section: b.ChannelSettingsSections.OVERVIEW,
          label: D.default.Messages.OVERVIEW,
          ariaLabel: D.default.Messages.OVERVIEW,
          element: j.default,
          notice: {
            element: j.ChannelSettingsOverviewNotice,
            stores: [C.default]
          }
        }, {
          section: b.ChannelSettingsSections.PERMISSIONS,
          label: D.default.Messages.PERMISSIONS,
          element: E.default,
          notice: {
            element: y.ChannelSettingsPermissionsNotice,
            stores: [p.default]
          },
          predicate: () => a && !S
        }, {
          section: b.ChannelSettingsSections.INSTANT_INVITES,
          label: D.default.Messages.INVITES,
          element: v.default,
          type: c.ContentTypes.CUSTOM,
          predicate: () => t.type !== g && n && !S
        }, {
          section: b.ChannelSettingsSections.INTEGRATIONS,
          label: D.default.Messages.INTEGRATIONS_OVERVIEW,
          ariaLabel: D.default.Messages.INTEGRATIONS_OVERVIEW,
          element: L.default,
          notice: {
            stores: [N.default],
            element: L.ChannelSettingsIntegrationsNotice
          },
          predicate: () => !!u && T.GUILD_WEBHOOK_CHANNEL_TYPES.has(t.type)
        }, {
          section: c.SectionTypes.DIVIDER
        }, {
          section: b.ChannelSettingsSections.DELETE,
          onClick() {
            (0, O.openDeleteChannelModal)(t, function() {
              A.ComponentDispatch.subscribeOnce(b.ComponentActions.LAYER_POP_COMPLETE, () => {
                (0, o.deleteChannel)(t.id)
              }), (0, d.popLayer)()
            })
          },
          label: _,
          ariaLabel: _,
          icon: (0, s.jsx)(R.default, {
            width: 16,
            height: 16
          }),
          predicate: () => r
        }]
      }({
        channel: a,
        category: n,
        canManageRoles: r,
        canManageChannels: h,
        canDeleteChannels: g,
        canManageWebhooks: S
      })
    })
  }
}

function U() {
  let {
    channel: e,
    analyticsLocation: t
  } = (0, n.useStateFromStoresObject)([C.default], () => C.default.getProps()), l = (0, n.useStateFromStores)([C.default], () => C.default.getFormState()), a = (0, n.useStateFromStores)([C.default], () => C.default.getSection()), i = (0, n.useStateFromStores)([S.default], () => S.default.theme), r = (0, n.useStateFromStores)([S.default], () => S.default.darkSidebar ? b.ThemeTypes.DARK : void 0), o = (0, g.useCanManageThread)(e), d = (0, g.useIsThreadModerator)(e), {
    canManageChannels: u,
    canManageRoles: c,
    canManageWebhooks: h
  } = (0, n.useStateFromStoresObject)([x.default], () => ({
    canManageChannels: x.default.can(b.Permissions.MANAGE_CHANNELS, e),
    canManageRoles: null != e && x.default.can(b.Permissions.MANAGE_ROLES, e),
    canManageWebhooks: null != e && x.default.can(b.Permissions.MANAGE_WEBHOOKS, e)
  })), m = (0, n.useStateFromStores)([_.default], () => _.default.getChannel(null == e ? void 0 : e.parent_id));
  return (0, s.jsx)(w, {
    channel: e,
    category: m,
    canManageChannels: (null == e ? void 0 : e.isThread()) ? o : u,
    canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : u,
    canManageRoles: c,
    canManageWebhooks: h,
    formState: l,
    theme: i,
    sidebarTheme: r,
    section: a,
    analyticsLocation: t
  })
}