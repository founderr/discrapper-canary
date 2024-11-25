n.d(t, {
    Z: function () {
        return H;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(384275),
    c = n(763762),
    d = n(933557),
    u = n(605436),
    h = n(736052),
    p = n(189156),
    m = n(878857),
    f = n(621853),
    g = n(484459),
    C = n(131704),
    x = n(881998),
    _ = n(984933),
    v = n(496675),
    I = n(594174),
    E = n(51144),
    b = n(7782),
    Z = n(967128),
    N = n(320781),
    S = n(269203),
    T = n(86863),
    j = n(558756),
    A = n(753898),
    y = n(734386),
    P = n(184279),
    M = n(438306),
    R = n(544142),
    L = n(128557),
    k = n(981631),
    O = n(176505),
    D = n(388032),
    w = n(948861),
    B = n(232186);
function U(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, u.Yk)(n),
        a = (0, r.e7)([_.ZP], () => null != n.guild_id && n === _.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(N.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, i.jsx)(R.Z, { channel: n });
    else if (a) return (0, i.jsx)(L.Z, { channel: n });
    else if (l) return (0, i.jsx)(y.Z, { channel: n });
    return (0, i.jsx)(M.Z, { channel: n });
}
function H(e) {
    var t, n;
    let { channel: u, showingBanner: h } = e,
        C = (0, d.ZP)(u),
        { type: _ } = u,
        N = (0, r.e7)([I.default], () => (u.isPrivate() ? I.default.getUser(u.getRecipientId()) : null)),
        y = E.ZP.useUserTag(N),
        { canManageRoles: M, canReadMessageHistory: R } = (0, r.cj)([v.Z], () => ({
            canManageRoles: v.Z.can(k.Plq.MANAGE_ROLES, u),
            canReadMessageHistory: v.Z.can(k.Plq.READ_MESSAGE_HISTORY, u)
        })),
        L = (0, r.e7)([f.Z], () => (_ === k.d4z.DM ? f.Z.getMutualGuilds(u.getRecipientId()) : null), [u, _]),
        { systemDMRedesignEnabled: H } = m.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = u.isSystemDM()) && void 0 !== t && t }),
        G = (0, c.Z)(null !== (n = null == N ? void 0 : N.id) && void 0 !== n ? n : k.lds),
        { authorizedAppToken: F, authorizedAppsFetchState: V } = (0, r.cj)([x.Z], () => {
            var e;
            return {
                authorizedAppToken: null != G ? (null === (e = x.Z.getApps()) || void 0 === e ? void 0 : e.find((e) => e.application.id === G.id)) : void 0,
                authorizedAppsFetchState: x.Z.getFetchState()
            };
        });
    if (
        (l.useEffect(() => {
            _ === k.d4z.DM && null == L && null != N && s.Z.wait(() => (0, g.Z)(u.getRecipientId(), N.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [L, _, u, N]),
        l.useEffect(() => {
            (null == N ? void 0 : N.bot) && V === x.M.NOT_FETCHED && o.Z.fetch();
        }, [null == N ? void 0 : N.bot, V]),
        u.isSystemDM())
    )
        return H
            ? (0, i.jsx)(P.Z, { channel: u })
            : (0, i.jsx)(A.Z, {
                  channel: u,
                  children: D.intl.string(D.t.Rzvnio)
              });
    if (_ === k.d4z.DM) {
        let e;
        return (
            null != N && null != G
                ? null != F &&
                  (e = (0, i.jsxs)('div', {
                      className: w.buttonContainer,
                      children: [
                          (0, i.jsx)(j.W, {
                              className: w.firstButton,
                              channel: u,
                              user: N
                          }),
                          (0, i.jsx)(T.n, {
                              user: N,
                              application: G,
                              channel: u,
                              oauth2Token: F
                          })
                      ]
                  }))
                : (e = (0, i.jsx)(b.Z, {
                      userId: u.getRecipientId(),
                      channel: u,
                      showingBanner: h
                  })),
            (0, i.jsxs)(A.Z, {
                channel: u,
                user: N,
                children: [
                    null != N &&
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-xl/medium',
                            className: B.marginBottom20,
                            children: y
                        }),
                    D.intl.format(D.t['Qvg+6+'], { username: C }),
                    (null == N ? void 0 : N.isProvisional) && (0, i.jsx)(p.Z, { look: 'channel_header' }),
                    e
                ]
            })
        );
    }
    if (u.isMultiUserDM())
        return u.isManaged()
            ? (0, i.jsxs)(Z.ZP, {
                  channelId: u.id,
                  children: [(0, i.jsx)(Z.Ot, { children: D.intl.format(D.t.I3R7Vl, { channelName: C }) }), (0, i.jsx)(Z.jz, { children: D.intl.string(D.t.M8Ao6O) })]
              })
            : u.hasFlag(O.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(S.Z, { channel: u })
              : (0, i.jsx)(A.Z, {
                    channel: u,
                    children: D.intl.format(D.t.MFwcqK, { name: C })
                });
    return R
        ? (0, i.jsx)(U, {
              channel: u,
              canManageRoles: M
          })
        : (0, i.jsx)(Z.ZP, {
              channelId: u.id,
              children: (0, i.jsx)(Z.jz, { children: D.intl.format(D.t.hPVEQE, { channelName: C }) })
          });
}
