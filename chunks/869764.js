l.d(n, {
    Z: function () {
        return w;
    },
    k: function () {
        return k;
    }
}),
    l(789020);
var a = l(200651),
    i = l(192379),
    t = l(442837),
    r = l(481060),
    s = l(933557),
    d = l(471445),
    c = l(905362),
    o = l(353093),
    u = l(979264),
    h = l(937111),
    m = l(592125),
    g = l(271383),
    x = l(430824),
    C = l(496675),
    f = l(186523),
    v = l(768581),
    I = l(630388),
    Z = l(526120),
    p = l(563534),
    j = l(846121),
    N = l(305762),
    _ = l(981631),
    b = l(308083),
    E = l(372897),
    A = l(388032),
    S = l(571413);
function k(e) {
    let { title: n, emojiId: l, emojiName: i, icon: t, completed: s, Icon: d, ...c } = e,
        o = 'channel' === c.variant ? c.channelId : null,
        u = 'static' === c.variant ? c.subtitle : c.channelName,
        h =
            null != o
                ? v.ZP.getNewMemberActionIconURL({
                      channelId: o,
                      icon: t
                  })
                : null;
    return (0, a.jsxs)('div', {
        className: S.action,
        children: [
            null != h
                ? (0, a.jsx)('img', {
                      src: h,
                      className: S.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, a.jsx)(N.Z, {
                      emojiId: l,
                      emojiName: i,
                      size: N.R.LARGE,
                      defaultComponent: (0, a.jsx)('div', {
                          className: S.channelIconContainer,
                          children: (0, a.jsx)(d, {
                              className: S.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, a.jsxs)('div', {
                className: S.actionInfo,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != u
                        ? (0, a.jsx)(r.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: u
                          })
                        : null
                ]
            }),
            s
                ? (0, a.jsx)(r.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: '#fff',
                      className: S.checkCircleCompleted
                  })
                : (0, a.jsx)(f.Z, {
                      className: S.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function y(e) {
    var n;
    let { action: l, completed: c } = e,
        { channelId: o, title: u, emoji: h, icon: g } = l,
        { id: x, name: f } = null != h ? h : {},
        v = (0, t.e7)([m.Z], () => m.Z.getChannel(o)),
        I = (0, s.ZP)(v, !0),
        p = (0, t.e7)([C.Z], () => C.Z.can(_.Plq.VIEW_CHANNEL, v)),
        j = i.useCallback(() => {
            if (null == v) return null;
            (0, Z.gp)(v.guild_id, v.id);
        }, [v]);
    if (null == v || !p) return null;
    let N = null !== (n = (0, d.KS)(v)) && void 0 !== n ? n : r.TextIcon;
    return (0, a.jsx)(r.Clickable, {
        className: S.clickableAction,
        onClick: j,
        children: (0, a.jsx)(k, {
            variant: 'channel',
            channelId: o,
            title: u,
            channelName: I,
            emojiId: x,
            emojiName: f,
            icon: g,
            completed: c,
            Icon: N
        })
    });
}
function w(e) {
    var n;
    let { guildId: l } = e,
        s = (0, t.e7)([p.Z], () => p.Z.getNewMemberActions(l), [l]),
        d = (0, t.e7)([j.Z], () => j.Z.getCompletedActions(l)),
        m = (0, t.e7)([g.ZP], () => g.ZP.getSelfMember(l)),
        C = (0, t.e7)([x.Z], () => x.Z.getGuild(l)),
        f = null != C ? (0, o.ky)(C.id, null === (n = C.clan) || void 0 === n ? void 0 : n.badge, b.NC.SIZE_16) : null,
        v = (0, t.e7)([h.Z], () => h.Z.getRequest(l));
    i.useEffect(() => {
        var e;
        null == d && (null == m ? void 0 : m.flags) != null && (0, I.yE)(null !== (e = m.flags) && void 0 !== e ? e : 0, E.q.STARTED_HOME_ACTIONS) && (0, Z.Fg)(l);
    }, [d, l, null == m ? void 0 : m.flags]);
    let N = i.useCallback(() => {
        null != C && null != C.rulesChannelId && (0, Z.gp)(C.id, C.rulesChannelId);
    }, [C]);
    return null == m || null == s || 0 === s.length
        ? null
        : (0, a.jsxs)('div', {
              className: S.container,
              children: [
                  (0, a.jsx)(r.Heading, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: A.intl.string(A.t.LhlgY2)
                  }),
                  (null == C ? void 0 : C.hasFeature(_.oNc.CLAN)) &&
                      null != f &&
                      (0, a.jsx)(r.Clickable, {
                          className: S.clickableAction,
                          onClick: () => (0, c.CK)(l, null == v ? void 0 : v.joinRequestId),
                          children: (0, a.jsxs)('div', {
                              className: S.action,
                              children: [
                                  (0, a.jsx)('div', {
                                      className: S.tagIconContainer,
                                      children: (0, a.jsx)(u.KQ, {
                                          src: f,
                                          size: b.NC.SIZE_16
                                      })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: S.actionInfo,
                                      children: (0, a.jsx)(r.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: A.intl.string(A.t.MNhFER)
                                      })
                                  })
                              ]
                          })
                      }),
                  s.map((e) =>
                      (0, a.jsx)(
                          y,
                          {
                              action: e,
                              completed: (null == d ? void 0 : d[e.channelId]) === !0,
                              guildId: l
                          },
                          e.channelId
                      )
                  ),
                  (null == C ? void 0 : C.rulesChannelId) != null &&
                      (0, a.jsxs)(r.Clickable, {
                          className: S.action,
                          onClick: N,
                          children: [
                              (0, a.jsx)('div', {
                                  className: S.rulesIconContainer,
                                  children: (0, a.jsx)(r.BookCheckIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: S.rulesIcon
                                  })
                              }),
                              (0, a.jsx)('div', {
                                  className: S.actionInfo,
                                  children: (0, a.jsx)(r.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: A.intl.string(A.t['K/i3iY'])
                                  })
                              })
                          ]
                      })
              ]
          });
}
