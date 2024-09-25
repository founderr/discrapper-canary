n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(866442),
    u = n(442837),
    c = n(481060),
    d = n(239091),
    _ = n(276264),
    E = n(607070),
    f = n(100527),
    h = n(906732),
    p = n(600164),
    m = n(82295),
    I = n(818083),
    T = n(480608),
    g = n(124072),
    S = n(184301),
    A = n(347475),
    v = n(592125),
    N = n(271383),
    O = n(430824),
    R = n(594174),
    C = n(689938),
    y = n(554034),
    b = n(63133);
let L = (0, I.B)({
    kind: 'user',
    id: '2021-07_role_popout',
    label: 'Role Popout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Popout',
            config: { enabled: !0 }
        }
    ]
});
function D(e) {
    let { roleColor: t, roleId: i, channelId: o, roleName: I, guildId: D, children: M, inlinePreview: P = !1 } = e,
        { analyticsLocations: U } = (0, h.ZP)(f.Z.ROLE_MENTION),
        w = (0, u.e7)([E.Z], () => E.Z.roleStyle),
        x = null != t && 0 !== t && !P,
        G = x && 'dot' === w,
        k = (e) =>
            (0, r.jsxs)(g.Z, {
                className: a()(y.roleMention),
                color: 'username' === w && x ? t : null,
                ...e,
                children: [
                    G &&
                        (0, r.jsx)(c.RoleDot, {
                            color: (0, l.Rf)(t),
                            className: b.roleDot,
                            background: !1,
                            tooltip: !1
                        }),
                    M
                ]
            }),
        { enabled: B } = L.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !B || P || null == o || null == D || (null == i && '@everyone' !== I)
        ? (0, r.jsx)(h.Gt, {
              value: U,
              children: k()
          })
        : (0, r.jsx)(h.Gt, {
              value: U,
              children: (0, r.jsx)(c.Popout, {
                  preload: async () => {
                      null != i && (await (0, T.H)(D, i));
                  },
                  renderPopout: (e) => {
                      let t = v.Z.getChannel(o),
                          a = O.Z.getGuild(D),
                          l = N.ZP.getMembers(a.id),
                          u = O.Z.getRole(D, null != i ? i : a.getEveryoneRoleId()),
                          E = s()(l)
                              .filter((e) => !!('@everyone' === I || e.roles.includes(i)) && null != R.default.getUser(e.userId))
                              .sortBy((e) => {
                                  var t;
                                  let n = R.default.getUser(e.userId);
                                  return (null != n ? (null !== (t = e.nick) && void 0 !== t ? t : n.username) : '').toLocaleLowerCase();
                              })
                              .map((e) => {
                                  let i = R.default.getUser(e.userId);
                                  return (0, r.jsx)(
                                      c.Popout,
                                      {
                                          preload: () =>
                                              (0, S.Z)(i.id, i.getAvatarURL(t.guild_id, 80), {
                                                  guildId: t.guild_id,
                                                  channelId: t.id
                                              }),
                                          renderPopout: (n) =>
                                              (0, r.jsx)(A.Z, {
                                                  ...n,
                                                  userId: e.userId,
                                                  guildId: a.id,
                                                  channelId: t.id,
                                                  roleId: u.id
                                              }),
                                          spacing: 14,
                                          children: (o, s) => {
                                              let { isShown: l } = s;
                                              return (0, r.jsx)(
                                                  _.Z,
                                                  {
                                                      selected: l,
                                                      colorString: e.colorString,
                                                      colorRoleName: u.name,
                                                      user: i,
                                                      isOwner: e.userId === a.ownerId,
                                                      nick: e.nick,
                                                      premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                                      channel: t,
                                                      guildId: a.id,
                                                      onContextMenu: (e) => {
                                                          (0, d.jW)(e, async () => {
                                                              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('92453'), n.e('13125'), n.e('34879')]).then(n.bind(n, 757387));
                                                              return (n) =>
                                                                  (0, r.jsx)(e, {
                                                                      ...n,
                                                                      user: i,
                                                                      guildId: a.id,
                                                                      channel: t,
                                                                      showMediaItems: !0
                                                                  });
                                                          });
                                                      },
                                                      ...o
                                                  },
                                                  e.userId
                                              );
                                          }
                                      },
                                      i.id
                                  );
                              })
                              .value();
                      return (0, r.jsx)(p.Z, {
                          className: y.rolePopout,
                          ...e,
                          children: (0, r.jsxs)(c.Scroller, {
                              className: y.roleScroller,
                              children: [
                                  (0, r.jsx)(m.Z, {
                                      className: y.roleHeader,
                                      'aria-label': C.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                          title: u.name,
                                          count: E.length
                                      }),
                                      children: (0, r.jsxs)('span', {
                                          'aria-hidden': !0,
                                          children: [u.name, ' \u2014 ', E.length]
                                      })
                                  }),
                                  E
                              ]
                          })
                      });
                  },
                  position: 'right',
                  children: k
              })
          });
}
