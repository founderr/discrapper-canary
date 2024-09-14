s.r(t),
    s.d(t, {
        default: function () {
            return P;
        }
    });
var n = s(735250),
    l = s(470079),
    i = s(442837),
    a = s(481060),
    r = s(570140),
    o = s(787014),
    c = s(37234),
    d = s(503089),
    u = s(493544),
    h = s(367907),
    m = s(933557),
    g = s(471445),
    E = s(351123),
    T = s(665906),
    p = s(210887),
    N = s(131704),
    _ = s(533947),
    S = s(277053),
    x = s(388610),
    f = s(592125),
    M = s(496675),
    C = s(699516),
    I = s(594174),
    R = s(585483),
    Z = s(787263),
    v = s(975316),
    A = s(428813),
    O = s(2147),
    L = s(856606),
    j = s(981631),
    b = s(689938),
    D = s(8677);
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        s = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(j.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'channel',
        origin_pane: t,
        destination_pane: e,
        location: s
    });
}
class w extends l.PureComponent {
    componentDidMount() {
        y(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        r.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: s } = e,
            { formState: n, section: l, canManageRoles: i, canManageChannels: a, canManageWebhooks: r } = this.props;
        (a || i || r) && (n !== j.QZA.CLOSED || n === t) && (i || l !== j.CoT.PERMISSIONS) && (r || l !== j.CoT.INTEGRATIONS) ? l !== s && y(l, s) : (0, c.xf)();
    }
    render() {
        let { theme: e, sidebarTheme: t, section: s, channel: l, category: i, canManageRoles: r, canManageChannels: h, canDeleteChannels: T, canManageWebhooks: p } = this.props;
        return null == l
            ? null
            : (0, n.jsx)(d.ZP, {
                  theme: e,
                  sidebarTheme: t,
                  section: null != s ? s : j.CoT.OVERVIEW,
                  onSetSection: o.zc,
                  onClose: c.xf,
                  sections: (function (e) {
                      let { channel: t, category: s, canManageRoles: l, canManageChannels: i, canDeleteChannels: r, canManageWebhooks: d } = e,
                          h = (0, g.KS)(t),
                          { GUILD_CATEGORY: T } = j.d4z,
                          p = N.Ec.has(t.type),
                          f = t.type === T ? b.Z.Messages.DELETE_CATEGORY : p ? (t.isForumPost() ? b.Z.Messages.DELETE_FORUM_POST : b.Z.Messages.DELETE_THREAD) : b.Z.Messages.DELETE_CHANNEL;
                      return [
                          {
                              section: u.ID.HEADER,
                              label:
                                  null != t
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                null != h
                                                    ? (0, n.jsx)(h, {
                                                          size: 'xxs',
                                                          color: 'currentColor',
                                                          className: D.channelIcon
                                                      })
                                                    : null,
                                                (0, m.F6)(t, I.default, C.Z),
                                                null != s
                                                    ? (0, n.jsx)(a.Text, {
                                                          tag: 'span',
                                                          variant: 'text-xs/semibold',
                                                          color: 'header-secondary',
                                                          lineClamp: 1,
                                                          className: D.category,
                                                          children: (0, m.F6)(s, I.default, C.Z)
                                                      })
                                                    : null
                                            ]
                                        })
                                      : b.Z.Messages.CHANNEL_SETTINGS
                          },
                          {
                              section: j.CoT.OVERVIEW,
                              label: b.Z.Messages.OVERVIEW,
                              ariaLabel: b.Z.Messages.OVERVIEW,
                              element: O.Z,
                              notice: {
                                  element: O.G,
                                  stores: [x.Z]
                              }
                          },
                          {
                              section: j.CoT.PERMISSIONS,
                              label: b.Z.Messages.PERMISSIONS,
                              element: E.Z,
                              notice: {
                                  element: L.n,
                                  stores: [S.Z]
                              },
                              predicate: () => l && !p
                          },
                          {
                              section: j.CoT.INSTANT_INVITES,
                              label: b.Z.Messages.INVITES,
                              element: A.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== T && i && !p
                          },
                          {
                              section: j.CoT.INTEGRATIONS,
                              label: b.Z.Messages.INTEGRATIONS_OVERVIEW,
                              ariaLabel: b.Z.Messages.INTEGRATIONS_OVERVIEW,
                              element: v.Z,
                              notice: {
                                  stores: [_.Z],
                                  element: v.B
                              },
                              predicate: () => !!d && N.Ti.has(t.type)
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: j.CoT.DELETE,
                              onClick() {
                                  (0, Z.w)(t, function () {
                                      R.S.subscribeOnce(j.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, c.xf)();
                                  });
                              },
                              label: f,
                              ariaLabel: f,
                              icon: (0, n.jsx)(a.TrashIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              predicate: () => r
                          }
                      ];
                  })({
                      channel: l,
                      category: i,
                      canManageRoles: r,
                      canManageChannels: h,
                      canDeleteChannels: T,
                      canManageWebhooks: p
                  })
              });
    }
}
function P() {
    let { channel: e, analyticsLocation: t } = (0, i.cj)([x.Z], () => x.Z.getProps()),
        s = (0, i.e7)([x.Z], () => x.Z.getFormState()),
        l = (0, i.e7)([x.Z], () => x.Z.getSection()),
        a = (0, i.e7)([p.Z], () => p.Z.theme),
        r = (0, i.e7)([p.Z], () => (p.Z.darkSidebar ? j.BRd.DARK : void 0)),
        o = (0, T.C7)(e),
        c = (0, T.Xb)(e),
        {
            canManageChannels: d,
            canManageRoles: u,
            canManageWebhooks: h
        } = (0, i.cj)([M.Z], () => ({
            canManageChannels: M.Z.can(j.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && M.Z.can(j.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && M.Z.can(j.Plq.MANAGE_WEBHOOKS, e)
        })),
        m = (0, i.e7)([f.Z], () => f.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, n.jsx)(w, {
        channel: e,
        category: m,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
        canManageRoles: u,
        canManageWebhooks: h,
        formState: s,
        theme: a,
        sidebarTheme: r,
        section: l,
        analyticsLocation: t
    });
}
