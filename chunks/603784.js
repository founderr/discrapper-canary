var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(726542),
    _ = n(100527),
    I = n(933557),
    E = n(184301),
    T = n(347475),
    m = n(210887),
    N = n(699516),
    S = n(594174),
    g = n(259580),
    h = n(51144),
    C = n(426563),
    x = n(909746),
    p = n(501801),
    R = n(981631),
    L = n(689938),
    f = n(451316);
class O extends a.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, s.jsxs)('span', {
            onContextMenu: t,
            className: f.userHook,
            children: [
                (0, s.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: h.ZP.getUserTag(e, { mode: 'username' })
                }),
                '0' !== e.discriminator &&
                    (0, s.jsxs)(d.Text, {
                        variant: 'text-xs/normal',
                        className: f.discrim,
                        children: ['#', e.discriminator]
                    })
            ]
        });
    }
}
class A extends a.PureComponent {
    hasChangesToRender() {
        let { log: e } = this.props,
            { changes: t } = e;
        return (e.actionType !== R.vB8.DELETE || e.action === R.rsA.MEMBER_BAN_ADD || e.action === R.rsA.MEMBER_KICK || e.action === R.rsA.MEMBER_PRUNE) && null != t && t.some((t) => !(0, p.xO)(e, t));
    }
    renderTitle() {
        let { log: e, onUserContextMenu: t, onTargetContextMenu: n, onChannelContextMenu: a } = this.props,
            { user: i, target: r, options: l } = e,
            o = x.N5(e);
        return null != o
            ? (0, s.jsx)('div', {
                  className: f.overflowEllipsis,
                  children: o.format({
                      user: i,
                      target: r,
                      userHook: (n, a) => {
                          if (null != e.user)
                              return (0, s.jsx)(
                                  O,
                                  {
                                      user: e.user,
                                      onContextMenu: t
                                  },
                                  a
                              );
                          if (null != e.options.integration_type) {
                              var i;
                              let t = u.Z.get(e.options.integration_type);
                              return null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : L.Z.Messages.UNKNOWN_INTEGRATION;
                          }
                          return L.Z.Messages.UNKNOWN_USER;
                      },
                      targetHook: (t, a) =>
                          e.targetType === R.KFR.USER
                              ? (0, s.jsx)(
                                    O,
                                    {
                                        user: e.target,
                                        onContextMenu: n
                                    },
                                    a
                                )
                              : (0, s.jsx)(
                                    'span',
                                    {
                                        onContextMenu: n,
                                        children: t
                                    },
                                    a
                                ),
                      count: l.count,
                      channel: null == l.channel || 'string' == typeof l.channel ? l.channel : (0, I.F6)(l.channel, S.default, N.Z, !0),
                      channelHook: (e, t) =>
                          (0, s.jsx)(
                              'span',
                              {
                                  onContextMenu: a,
                                  children: e
                              },
                              t
                          ),
                      subtarget: l.subtarget
                  })
              })
            : null;
    }
    renderChangeSummary() {
        let { expanded: e, log: t, guild: n, onContentClick: a } = this.props;
        return e && null != n
            ? (0, s.jsx)(p.tP, {
                  log: t,
                  guild: n,
                  onContentClick: a
              })
            : null;
    }
    renderEntryAvatar() {
        let {
                props: { log: e, guildId: t, theme: n }
            } = this,
            {
                user: a,
                userId: i,
                options: { integration_type: r }
            } = e;
        if (null != a && null != i)
            return (0, s.jsx)(d.Popout, {
                preload: () => (0, E.Z)(i, a.getAvatarURL(t, 80), { guildId: t }),
                renderPopout: (e) =>
                    (0, s.jsx)(T.Z, {
                        ...e,
                        userId: i,
                        guildId: t,
                        newAnalyticsLocations: [_.Z.AVATAR]
                    }),
                children: (n) => {
                    var a, i, r;
                    return (0, s.jsx)(d.Avatar, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), n.onClick(e);
                        },
                        className: f.avatar,
                        src: ((a = e), (i = t), a.action === R.rsA.AUTO_MODERATION_BLOCK_MESSAGE || a.action === R.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || a.action === R.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || a.action === R.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, C.j)() : null === (r = a.user) || void 0 === r ? void 0 : r.getAvatarURL(i, 40)),
                        'aria-hidden': !0,
                        size: d.AvatarSizes.SIZE_40
                    });
                }
            });
        if (null != r) {
            let e = u.Z.get(r);
            if (null != e) {
                let t = (0, c.wj)(n) ? e.icon.darkSVG : e.icon.lightSVG;
                return (0, s.jsx)(d.Avatar, {
                    className: f.avatar,
                    src: t,
                    'aria-hidden': !0,
                    size: d.AvatarSizes.SIZE_40
                });
            }
        }
        return null;
    }
    render() {
        let e;
        let { log: t, className: n, expanded: a, onHeaderClick: i } = this.props,
            o = this.hasChangesToRender(),
            c = f.headerDefault;
        a ? (c = f.headerExpanded) : o && (c = f.headerClickable);
        let u = t.timestampStart.calendar(),
            _ = t.timestampEnd.calendar();
        e =
            u === _
                ? (0, s.jsx)(d.Text, {
                      className: f.timestamp,
                      variant: 'text-sm/normal',
                      children: u
                  })
                : (0, s.jsxs)(d.Text, {
                      className: f.timestamp,
                      variant: 'text-sm/normal',
                      children: [u, '\u2014', _]
                  });
        let I = o ? i : R.dG4;
        return (0, s.jsx)(l.mh, {
            id: t.id,
            children: (i) =>
                (0, s.jsxs)('div', {
                    className: r()(f.auditLog, n),
                    children: [
                        (0, s.jsxs)(d.Clickable, {
                            className: c,
                            'aria-expanded': a,
                            onClick: I,
                            ...i,
                            children: [
                                (0, s.jsx)(p.mp, {
                                    action: t.action,
                                    actionType: t.actionType,
                                    targetType: t.targetType
                                }),
                                this.renderEntryAvatar(),
                                (0, s.jsxs)('div', {
                                    className: f.timeWrap,
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: f.title,
                                            children: this.renderTitle()
                                        }),
                                        e
                                    ]
                                }),
                                o
                                    ? (0, s.jsx)(g.Z, {
                                          className: f.expand,
                                          foreground: f.expandForeground,
                                          expanded: a,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        a ? (0, s.jsx)('div', { className: f.divider }) : null,
                        this.renderChangeSummary()
                    ]
                })
        });
    }
}
t.Z = o.ZP.connectStores([m.Z], () => ({ theme: m.Z.theme }))(A);
