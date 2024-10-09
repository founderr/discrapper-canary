n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n.n(r),
    c = n(149765),
    u = n(866442),
    d = n(442837),
    h = n(481060),
    p = n(787014),
    m = n(911969),
    _ = n(933557),
    f = n(605436),
    E = n(185413),
    g = n(42311),
    C = n(626786),
    I = n(434404),
    T = n(454585),
    x = n(430824),
    v = n(496675),
    S = n(594174),
    N = n(700785),
    A = n(51144),
    Z = n(396769),
    M = n(967128),
    b = n(318374),
    R = n(981631),
    L = n(689938),
    P = n(293081);
function j(e) {
    let { channel: t } = e,
        [n, a] = s.useState(!1),
        r = (0, _.ZP)(t, !0),
        j = t.guild_id,
        O = (0, d.e7)([x.Z], () => (null != j ? x.Z.getRoles(j) : void 0)),
        y = (0, d.e7)([S.default, x.Z], () => {
            var e;
            return S.default.getUser(null === (e = x.Z.getGuild(j)) || void 0 === e ? void 0 : e.ownerId);
        }),
        D = s.useMemo(
            () =>
                null != j
                    ? o()(O)
                          .sortBy((e) => -e.position)
                          .filter((e) => !(0, f.pM)(j, e.id))
                          .value()
                    : [],
            [j, O]
        ),
        U = s.useMemo(
            () =>
                o()(D)
                    .filter((e) => {
                        if (null == j) return !1;
                        let n = N.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.e$(n, R.Plq.ADMINISTRATOR) || c.e$(n, R.Plq.VIEW_CHANNEL);
                    })
                    .value(),
            [t, j, D]
        ),
        k = (0, d.Wu)(
            [S.default],
            () => {
                let e = {};
                for (let n of (null != y && (e[y.id] = y), Object.values(t.permissionOverwrites))) {
                    if (n.type !== m.BN.MEMBER || null != e[n.id]) continue;
                    let t = S.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return o()(e)
                    .filter((e) => {
                        var n;
                        let i = N.BT({
                                permission: R.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            s = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : N.Hn,
                            a = c.e$(s.allow, R.Plq.VIEW_CHANNEL);
                        return i || a;
                    })
                    .value();
            },
            [t, y]
        ),
        w = v.Z.can(R.Plq.MANAGE_CHANNELS, t) || v.Z.can(R.Plq.MANAGE_ROLES, t);
    function B() {
        p.ZP.open(t.id);
    }
    let H = s.useCallback(() => a(!1), []);
    return (0, i.jsxs)(M.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(M.Kq, {
                locked: !0,
                channelType: t.type
            }),
            (0, i.jsx)(M.Ot, { children: L.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({ channelName: r }) }),
            (0, i.jsx)(M.jz, {
                children: L.Z.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
                    channelName: r,
                    topicHook: () => T.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            w
                ? (0, i.jsxs)('div', {
                      className: P.channelSettingButtons,
                      children: [
                          (0, i.jsx)(Z.Z, {
                              label: L.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                              onClick: () => a(!0),
                              icon: (0, i.jsx)(h.GroupIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                          (0, i.jsx)(Z.Z, {
                              label: L.Z.Messages.EDIT_CHANNEL,
                              onClick: B,
                              icon: (0, i.jsx)(h.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: P.members,
                children: [
                    (function () {
                        if (1 !== k.length || U.length > 0)
                            return (0, i.jsx)(b.Z, {
                                guildId: t.guild_id,
                                className: P.avatars,
                                maxUsers: 5,
                                users: k
                            });
                        let e = k[0],
                            n = A.ZP.getName(e);
                        return (0, i.jsxs)('div', {
                            className: P.avatars,
                            children: [
                                (0, i.jsx)(h.Avatar, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    'aria-label': n,
                                    size: h.AvatarSizes.SIZE_24
                                }),
                                (0, i.jsx)(h.Text, {
                                    tag: 'span',
                                    className: P.singleUserName,
                                    variant: 'text-md/normal',
                                    children: n
                                }),
                                '\xA0',
                                (0, i.jsx)(h.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: L.Z.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
                                })
                            ]
                        });
                    })(),
                    U.map((e, n) => {
                        var s, a;
                        let r = null !== (a = e.colorString) && void 0 !== a ? a : (0, u.Rf)(R.p6O),
                            o = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== void 0;
                        return w
                            ? (0, i.jsx)(
                                  g.Z,
                                  {
                                      className: l()(P.role, { [P.last]: n === U.length - 1 }),
                                      roleName: e.name,
                                      roleColor: r,
                                      disabled: !w,
                                      verified: o,
                                      onClick: () => {
                                          I.Z.open(t.guild_id, R.pNK.MEMBERS), I.Z.selectRole(e.id);
                                      }
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  C.Z,
                                  {
                                      className: l()(P.role, { [P.last]: n === U.length - 1 }),
                                      roleName: e.name,
                                      roleColor: r,
                                      verified: o
                                  },
                                  e.id
                              );
                    })
                ]
            }),
            n
                ? (0, i.jsx)(h.Modal, {
                      renderModal: (e) =>
                          (0, i.jsx)(E.default, {
                              ...e,
                              onClose: () => (H(), e.onClose()),
                              channelId: t.id
                          }),
                      onCloseRequest: () => a(!1)
                  })
                : null
        ]
    });
}
