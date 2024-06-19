t.r(s), t.d(s, {
  default: function() {
    return F
  }
});
var l = t(735250),
  n = t(470079),
  i = t(442837),
  a = t(481060),
  r = t(570140),
  o = t(787014),
  d = t(37234),
  c = t(503089),
  u = t(493544),
  h = t(367907),
  m = t(933557),
  g = t(471445),
  E = t(351123),
  N = t(665906),
  T = t(210887),
  p = t(131704),
  S = t(533947),
  x = t(277053),
  M = t(388610),
  C = t(592125),
  I = t(496675),
  R = t(699516),
  _ = t(594174),
  Z = t(585483),
  f = t(787263),
  v = t(975316),
  j = t(428813),
  O = t(2147),
  A = t(856606),
  L = t(981631),
  b = t(689938),
  D = t(242841);

function y(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    t = arguments.length > 2 ? arguments[2] : void 0;
  h.ZP.trackWithMetadata(L.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    origin_pane: s,
    destination_pane: e,
    location: t
  })
}
class P extends n.PureComponent {
  componentDidMount() {
    y(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    r.Z.wait(() => (0, o.xv)())
  }
  componentDidUpdate(e) {
    let {
      formState: s,
      section: t
    } = e, {
      formState: l,
      section: n,
      canManageRoles: i,
      canManageChannels: a,
      canManageWebhooks: r
    } = this.props;
    (a || i || r) && (l !== L.QZA.CLOSED || l === s) && (i || n !== L.CoT.PERMISSIONS) && (r || n !== L.CoT.INTEGRATIONS) ? n !== t && y(n, t): (0, d.xf)()
  }
  render() {
    let {
      theme: e,
      sidebarTheme: s,
      section: t,
      channel: n,
      category: i,
      canManageRoles: r,
      canManageChannels: h,
      canDeleteChannels: N,
      canManageWebhooks: T
    } = this.props;
    return null == n ? null : (0, l.jsx)(c.ZP, {
      theme: e,
      sidebarTheme: s,
      section: null != t ? t : L.CoT.OVERVIEW,
      onSetSection: o.zc,
      onClose: d.xf,
      sections: function(e) {
        let {
          channel: s,
          category: t,
          canManageRoles: n,
          canManageChannels: i,
          canDeleteChannels: r,
          canManageWebhooks: c
        } = e, h = (0, g.KS)(s), {
          GUILD_CATEGORY: N
        } = L.d4z, T = p.Ec.has(s.type), C = s.type === N ? b.Z.Messages.DELETE_CATEGORY : T ? s.isForumPost() ? b.Z.Messages.DELETE_FORUM_POST : b.Z.Messages.DELETE_THREAD : b.Z.Messages.DELETE_CHANNEL;
        return [{
          section: u.ID.HEADER,
          label: null != s ? (0, l.jsxs)(l.Fragment, {
            children: [null != h ? (0, l.jsx)(h, {
              size: "xxs",
              color: "currentColor",
              className: D.channelIcon
            }) : null, (0, m.F6)(s, _.default, R.Z), null != t ? (0, l.jsx)(a.Text, {
              tag: "span",
              variant: "text-xs/semibold",
              color: "header-secondary",
              lineClamp: 1,
              className: D.category,
              children: (0, m.F6)(t, _.default, R.Z)
            }) : null]
          }) : b.Z.Messages.CHANNEL_SETTINGS
        }, {
          section: L.CoT.OVERVIEW,
          label: b.Z.Messages.OVERVIEW,
          ariaLabel: b.Z.Messages.OVERVIEW,
          element: O.Z,
          notice: {
            element: O.G,
            stores: [M.Z]
          }
        }, {
          section: L.CoT.PERMISSIONS,
          label: b.Z.Messages.PERMISSIONS,
          element: E.Z,
          notice: {
            element: A.n,
            stores: [x.Z]
          },
          predicate: () => n && !T
        }, {
          section: L.CoT.INSTANT_INVITES,
          label: b.Z.Messages.INVITES,
          element: j.Z,
          type: u.bT.CUSTOM,
          predicate: () => s.type !== N && i && !T
        }, {
          section: L.CoT.INTEGRATIONS,
          label: b.Z.Messages.INTEGRATIONS_OVERVIEW,
          ariaLabel: b.Z.Messages.INTEGRATIONS_OVERVIEW,
          element: v.Z,
          notice: {
            stores: [S.Z],
            element: v.B
          },
          predicate: () => !!c && p.Ti.has(s.type)
        }, {
          section: u.ID.DIVIDER
        }, {
          section: L.CoT.DELETE,
          onClick() {
            (0, f.w)(s, function() {
              Z.S.subscribeOnce(L.CkL.LAYER_POP_COMPLETE, () => {
                (0, o.zz)(s.id)
              }), (0, d.xf)()
            })
          },
          label: C,
          ariaLabel: C,
          icon: (0, l.jsx)(a.TrashIcon, {
            size: "xs",
            color: "currentColor"
          }),
          predicate: () => r
        }]
      }({
        channel: n,
        category: i,
        canManageRoles: r,
        canManageChannels: h,
        canDeleteChannels: N,
        canManageWebhooks: T
      })
    })
  }
}

function F() {
  let {
    channel: e,
    analyticsLocation: s
  } = (0, i.cj)([M.Z], () => M.Z.getProps()), t = (0, i.e7)([M.Z], () => M.Z.getFormState()), n = (0, i.e7)([M.Z], () => M.Z.getSection()), a = (0, i.e7)([T.Z], () => T.Z.theme), r = (0, i.e7)([T.Z], () => T.Z.darkSidebar ? L.BRd.DARK : void 0), o = (0, N.C7)(e), d = (0, N.Xb)(e), {
    canManageChannels: c,
    canManageRoles: u,
    canManageWebhooks: h
  } = (0, i.cj)([I.Z], () => ({
    canManageChannels: I.Z.can(L.Plq.MANAGE_CHANNELS, e),
    canManageRoles: null != e && I.Z.can(L.Plq.MANAGE_ROLES, e),
    canManageWebhooks: null != e && I.Z.can(L.Plq.MANAGE_WEBHOOKS, e)
  })), m = (0, i.e7)([C.Z], () => C.Z.getChannel(null == e ? void 0 : e.parent_id));
  return (0, l.jsx)(P, {
    channel: e,
    category: m,
    canManageChannels: (null == e ? void 0 : e.isThread()) ? o : c,
    canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : c,
    canManageRoles: u,
    canManageWebhooks: h,
    formState: t,
    theme: a,
    sidebarTheme: r,
    section: n,
    analyticsLocation: s
  })
}