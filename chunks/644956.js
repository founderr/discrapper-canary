n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(866442),
    u = n(442837),
    c = n(481060),
    d = n(239091),
    f = n(276264),
    _ = n(607070),
    p = n(100527),
    h = n(906732),
    m = n(600164),
    g = n(82295),
    E = n(818083),
    v = n(480608),
    I = n(124072),
    b = n(184301),
    S = n(347475),
    T = n(592125),
    y = n(271383),
    A = n(430824),
    N = n(594174),
    C = n(388032),
    R = n(554034),
    O = n(63133);
let D = (0, E.B)({
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
function L(e) {
    let { roleColor: t, roleId: i, channelId: s, roleName: E, guildId: L, children: x, inlinePreview: w = !1 } = e,
        { analyticsLocations: M } = (0, h.ZP)(p.Z.ROLE_MENTION),
        P = (0, u.e7)([_.Z], () => _.Z.roleStyle),
        k = null != t && 0 !== t && !w,
        U = k && 'dot' === P,
        G = (e) =>
            (0, r.jsxs)(I.Z, {
                className: a()(R.roleMention),
                color: 'username' === P && k ? t : null,
                ...e,
                children: [
                    U &&
                        (0, r.jsx)(c.RoleDot, {
                            color: (0, l.Rf)(t),
                            className: O.roleDot,
                            background: !1,
                            tooltip: !1
                        }),
                    x
                ]
            }),
        { enabled: B } = D.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !B || w || null == s || null == L || (null == i && '@everyone' !== E)
        ? (0, r.jsx)(h.Gt, {
              value: M,
              children: G()
          })
        : (0, r.jsx)(h.Gt, {
              value: M,
              children: (0, r.jsx)(c.Popout, {
                  preload: async () => {
                      null != i && (await (0, v.H)(L, i));
                  },
                  renderPopout: (e) => {
                      let t = T.Z.getChannel(s),
                          a = A.Z.getGuild(L),
                          l = y.ZP.getMembers(a.id),
                          u = A.Z.getRole(L, null != i ? i : a.getEveryoneRoleId()),
                          _ = o()(l)
                              .filter((e) => !!('@everyone' === E || e.roles.includes(i)) && null != N.default.getUser(e.userId))
                              .sortBy((e) => {
                                  var t;
                                  let n = N.default.getUser(e.userId);
                                  return (null != n ? (null !== (t = e.nick) && void 0 !== t ? t : n.username) : '').toLocaleLowerCase();
                              })
                              .map((e) => {
                                  let i = N.default.getUser(e.userId);
                                  return (0, r.jsx)(
                                      c.Popout,
                                      {
                                          preload: () =>
                                              (0, b.Z)(i.id, i.getAvatarURL(t.guild_id, 80), {
                                                  guildId: t.guild_id,
                                                  channelId: t.id
                                              }),
                                          renderPopout: (n) =>
                                              (0, r.jsx)(S.Z, {
                                                  ...n,
                                                  userId: e.userId,
                                                  guildId: a.id,
                                                  channelId: t.id,
                                                  roleId: u.id
                                              }),
                                          spacing: 14,
                                          children: (s, o) => {
                                              let { isShown: l } = o;
                                              return (0, r.jsx)(
                                                  f.Z,
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
                                                              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('92453'), n.e('13125'), n.e('13441')]).then(n.bind(n, 757387));
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
                                                      ...s
                                                  },
                                                  e.userId
                                              );
                                          }
                                      },
                                      i.id
                                  );
                              })
                              .value();
                      return (0, r.jsx)(m.Z, {
                          className: R.rolePopout,
                          ...e,
                          children: (0, r.jsxs)(c.Scroller, {
                              className: R.roleScroller,
                              children: [
                                  (0, r.jsx)(g.Z, {
                                      className: R.roleHeader,
                                      'aria-label': C.intl.formatToPlainString(C.t.UaqbkZ, {
                                          title: u.name,
                                          count: _.length
                                      }),
                                      children: (0, r.jsxs)('span', {
                                          'aria-hidden': !0,
                                          children: [u.name, ' \u2014 ', _.length]
                                      })
                                  }),
                                  _
                              ]
                          })
                      });
                  },
                  position: 'right',
                  children: G
              })
          });
}
