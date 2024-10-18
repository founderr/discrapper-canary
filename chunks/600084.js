n.d(t, {
    Z: function () {
        return H;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(481060),
    r = n(570140),
    o = n(384275),
    c = n(763762),
    u = n(933557),
    d = n(605436),
    h = n(736052),
    p = n(189156),
    m = n(878857),
    _ = n(621853),
    f = n(484459),
    E = n(131704),
    g = n(881998),
    C = n(984933),
    I = n(496675),
    T = n(594174),
    x = n(51144),
    v = n(7782),
    S = n(967128),
    N = n(320781),
    A = n(269203),
    Z = n(86863),
    M = n(558756),
    b = n(753898),
    R = n(734386),
    L = n(184279),
    j = n(438306),
    P = n(544142),
    O = n(128557),
    y = n(981631),
    D = n(176505),
    U = n(689938),
    k = n(272312),
    w = n(113207);
function B(e) {
    let { canManageRoles: t, channel: n } = e,
        s = t && (0, d.Yk)(n),
        l = (0, a.e7)([C.ZP], () => null != n.guild_id && n === C.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(N.Z, { channel: n });
    if (E.Ec.has(n.type)) return (0, i.jsx)(P.Z, { channel: n });
    else if (l) return (0, i.jsx)(O.Z, { channel: n });
    else if (s) return (0, i.jsx)(R.Z, { channel: n });
    return (0, i.jsx)(j.Z, { channel: n });
}
function H(e) {
    var t, n;
    let { channel: d, showingBanner: h } = e,
        E = (0, u.ZP)(d),
        { type: C } = d,
        N = (0, a.e7)([T.default], () => (d.isPrivate() ? T.default.getUser(d.getRecipientId()) : null)),
        R = x.ZP.useUserTag(N),
        { canManageRoles: j, canReadMessageHistory: P } = (0, a.cj)([I.Z], () => ({
            canManageRoles: I.Z.can(y.Plq.MANAGE_ROLES, d),
            canReadMessageHistory: I.Z.can(y.Plq.READ_MESSAGE_HISTORY, d)
        })),
        O = (0, a.e7)([_.Z], () => (C === y.d4z.DM ? _.Z.getMutualGuilds(d.getRecipientId()) : null), [d, C]),
        { systemDMRedesignEnabled: H } = m.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = d.isSystemDM()) && void 0 !== t && t }),
        G = (0, c.Z)(null !== (n = null == N ? void 0 : N.id) && void 0 !== n ? n : y.lds),
        { authorizedAppToken: V, authorizedAppsFetchState: F } = (0, a.cj)([g.Z], () => {
            var e;
            return {
                authorizedAppToken: null != G ? (null === (e = g.Z.getApps()) || void 0 === e ? void 0 : e.find((e) => e.application.id === G.id)) : void 0,
                authorizedAppsFetchState: g.Z.getFetchState()
            };
        });
    if (
        (s.useEffect(() => {
            C === y.d4z.DM && null == O && null != N && r.Z.wait(() => (0, f.Z)(d.getRecipientId(), N.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [O, C, d, N]),
        s.useEffect(() => {
            (null == N ? void 0 : N.bot) && F === g.M.NOT_FETCHED && o.Z.fetch();
        }, [null == N ? void 0 : N.bot, F]),
        d.isSystemDM())
    )
        return H
            ? (0, i.jsx)(L.Z, { channel: d })
            : (0, i.jsx)(b.Z, {
                  channel: d,
                  children: U.Z.Messages.SYSTEM_DM_EMPTY_MESSAGE
              });
    if (C === y.d4z.DM) {
        let e;
        return (
            null != N && null != G
                ? null != V &&
                  (e = (0, i.jsxs)('div', {
                      className: k.buttonContainer,
                      children: [
                          (0, i.jsx)(M.W, {
                              className: k.firstButton,
                              channel: d,
                              user: N
                          }),
                          (0, i.jsx)(Z.n, {
                              user: N,
                              application: G,
                              channel: d,
                              oauth2Token: V
                          })
                      ]
                  }))
                : (e = (0, i.jsx)(v.Z, {
                      userId: d.getRecipientId(),
                      channel: d,
                      showingBanner: h
                  })),
            (0, i.jsxs)(b.Z, {
                channel: d,
                user: N,
                children: [
                    null != N &&
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-xl/medium',
                            className: w.marginBottom20,
                            children: R
                        }),
                    U.Z.Messages.BEGINNING_DM.format({ username: E }),
                    (null == N ? void 0 : N.isProvisional) && (0, i.jsx)(p.Z, { look: 'channel_header' }),
                    e
                ]
            })
        );
    }
    if (d.isMultiUserDM())
        return d.isManaged()
            ? (0, i.jsxs)(S.ZP, {
                  channelId: d.id,
                  children: [(0, i.jsx)(S.Ot, { children: U.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({ channelName: E }) }), (0, i.jsx)(S.jz, { children: U.Z.Messages.BEGINNING_GROUP_DM_MANAGED })]
              })
            : d.hasFlag(D.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(A.Z, { channel: d })
              : (0, i.jsx)(b.Z, {
                    channel: d,
                    children: U.Z.Messages.BEGINNING_GROUP_DM.format({ name: E })
                });
    return P
        ? (0, i.jsx)(B, {
              channel: d,
              canManageRoles: j
          })
        : (0, i.jsx)(S.ZP, {
              channelId: d.id,
              children: (0, i.jsx)(S.jz, { children: U.Z.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({ channelName: E }) })
          });
}
