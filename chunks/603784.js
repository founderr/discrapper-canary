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
    N = n(598077),
    S = n(699516),
    g = n(594174),
    h = n(259580),
    C = n(51144),
    x = n(426563),
    p = n(909746),
    R = n(501801),
    L = n(981631),
    f = n(689938),
    O = n(451316);
class A extends a.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, s.jsxs)('span', {
            onContextMenu: t,
            className: O.userHook,
            children: [
                (0, s.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: C.ZP.getUserTag(e, { mode: 'username' })
                }),
                '0' !== e.discriminator &&
                    (0, s.jsxs)(d.Text, {
                        variant: 'text-xs/normal',
                        className: O.discrim,
                        children: ['#', e.discriminator]
                    })
            ]
        });
    }
}
class M extends a.PureComponent {
    hasChangesToRender() {
        let { log: e } = this.props,
            { changes: t } = e;
        return (e.actionType !== L.vB8.DELETE || e.action === L.rsA.MEMBER_BAN_ADD || e.action === L.rsA.MEMBER_KICK || e.action === L.rsA.MEMBER_PRUNE) && null != t && t.some((t) => !(0, R.xO)(e, t));
    }
    renderTitle() {
        let { log: e, onUserContextMenu: t, onTargetContextMenu: n, onChannelContextMenu: a } = this.props,
            { user: i, target: r, options: l } = e,
            o = p.N5(e);
        return null != o
            ? (0, s.jsx)('div', {
                  className: O.overflowEllipsis,
                  children: o.format({
                      user: i,
                      target: r,
                      userHook: (n, a) => {
                          if (null != e.user)
                              return (0, s.jsx)(
                                  A,
                                  {
                                      user: e.user,
                                      onContextMenu: t
                                  },
                                  a
                              );
                          if (null != e.options.integration_type) {
                              var i;
                              let t = u.Z.get(e.options.integration_type);
                              return null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : f.Z.Messages.UNKNOWN_INTEGRATION;
                          }
                          return f.Z.Messages.UNKNOWN_USER;
                      },
                      targetHook: (t, a) =>
                          e.targetType === L.KFR.USER && e.target instanceof N.Z
                              ? (0, s.jsx)(
                                    A,
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
                      channel: null == l.channel || 'string' == typeof l.channel ? l.channel : (0, I.F6)(l.channel, g.default, S.Z, !0),
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
            ? (0, s.jsx)(R.tP, {
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
                        className: O.avatar,
                        src: ((a = e), (i = t), a.action === L.rsA.AUTO_MODERATION_BLOCK_MESSAGE || a.action === L.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || a.action === L.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || a.action === L.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, x.j)() : null === (r = a.user) || void 0 === r ? void 0 : r.getAvatarURL(i, 40)),
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
                    className: O.avatar,
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
            c = O.headerDefault;
        a ? (c = O.headerExpanded) : o && (c = O.headerClickable);
        let u = t.timestampStart.calendar(),
            _ = t.timestampEnd.calendar();
        e =
            u === _
                ? (0, s.jsx)(d.Text, {
                      className: O.timestamp,
                      variant: 'text-sm/normal',
                      children: u
                  })
                : (0, s.jsxs)(d.Text, {
                      className: O.timestamp,
                      variant: 'text-sm/normal',
                      children: [u, '\u2014', _]
                  });
        let I = o ? i : L.dG4;
        return (0, s.jsx)(l.mh, {
            id: t.id,
            children: (i) =>
                (0, s.jsxs)('div', {
                    className: r()(O.auditLog, n),
                    children: [
                        (0, s.jsxs)(d.Clickable, {
                            className: c,
                            'aria-expanded': a,
                            onClick: I,
                            ...i,
                            children: [
                                (0, s.jsx)(R.mp, {
                                    action: t.action,
                                    actionType: t.actionType,
                                    targetType: t.targetType
                                }),
                                this.renderEntryAvatar(),
                                (0, s.jsxs)('div', {
                                    className: O.timeWrap,
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: O.title,
                                            children: this.renderTitle()
                                        }),
                                        e
                                    ]
                                }),
                                o
                                    ? (0, s.jsx)(h.Z, {
                                          className: O.expand,
                                          foreground: O.expandForeground,
                                          expanded: a,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        a ? (0, s.jsx)('div', { className: O.divider }) : null,
                        this.renderChangeSummary()
                    ]
                })
        });
    }
}
t.Z = o.ZP.connectStores([m.Z], () => ({ theme: m.Z.theme }))(M);
