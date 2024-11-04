n.d(t, {
    Z: function () {
        return H;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(384275),
    c = n(763762),
    u = n(933557),
    d = n(605436),
    h = n(736052),
    m = n(189156),
    p = n(878857),
    f = n(621853),
    g = n(484459),
    C = n(131704),
    x = n(881998),
    v = n(984933),
    _ = n(496675),
    I = n(594174),
    E = n(51144),
    b = n(7782),
    S = n(967128),
    Z = n(320781),
    T = n(269203),
    N = n(86863),
    j = n(558756),
    A = n(753898),
    y = n(734386),
    P = n(184279),
    M = n(438306),
    R = n(544142),
    L = n(128557),
    k = n(981631),
    O = n(176505),
    w = n(388032),
    D = n(272312),
    U = n(113207);
function B(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, d.Yk)(n),
        s = (0, r.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(Z.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, i.jsx)(R.Z, { channel: n });
    else if (s) return (0, i.jsx)(L.Z, { channel: n });
    else if (l) return (0, i.jsx)(y.Z, { channel: n });
    return (0, i.jsx)(M.Z, { channel: n });
}
function H(e) {
    var t, n;
    let { channel: d, showingBanner: h } = e,
        C = (0, u.ZP)(d),
        { type: v } = d,
        Z = (0, r.e7)([I.default], () => (d.isPrivate() ? I.default.getUser(d.getRecipientId()) : null)),
        y = E.ZP.useUserTag(Z),
        { canManageRoles: M, canReadMessageHistory: R } = (0, r.cj)([_.Z], () => ({
            canManageRoles: _.Z.can(k.Plq.MANAGE_ROLES, d),
            canReadMessageHistory: _.Z.can(k.Plq.READ_MESSAGE_HISTORY, d)
        })),
        L = (0, r.e7)([f.Z], () => (v === k.d4z.DM ? f.Z.getMutualGuilds(d.getRecipientId()) : null), [d, v]),
        { systemDMRedesignEnabled: H } = p.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = d.isSystemDM()) && void 0 !== t && t }),
        F = (0, c.Z)(null !== (n = null == Z ? void 0 : Z.id) && void 0 !== n ? n : k.lds),
        { authorizedAppToken: G, authorizedAppsFetchState: V } = (0, r.cj)([x.Z], () => {
            var e;
            return {
                authorizedAppToken: null != F ? (null === (e = x.Z.getApps()) || void 0 === e ? void 0 : e.find((e) => e.application.id === F.id)) : void 0,
                authorizedAppsFetchState: x.Z.getFetchState()
            };
        });
    if (
        (l.useEffect(() => {
            v === k.d4z.DM && null == L && null != Z && a.Z.wait(() => (0, g.Z)(d.getRecipientId(), Z.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [L, v, d, Z]),
        l.useEffect(() => {
            (null == Z ? void 0 : Z.bot) && V === x.M.NOT_FETCHED && o.Z.fetch();
        }, [null == Z ? void 0 : Z.bot, V]),
        d.isSystemDM())
    )
        return H
            ? (0, i.jsx)(P.Z, { channel: d })
            : (0, i.jsx)(A.Z, {
                  channel: d,
                  children: w.intl.string(w.t.Rzvnio)
              });
    if (v === k.d4z.DM) {
        let e;
        return (
            null != Z && null != F
                ? null != G &&
                  (e = (0, i.jsxs)('div', {
                      className: D.buttonContainer,
                      children: [
                          (0, i.jsx)(j.W, {
                              className: D.firstButton,
                              channel: d,
                              user: Z
                          }),
                          (0, i.jsx)(N.n, {
                              user: Z,
                              application: F,
                              channel: d,
                              oauth2Token: G
                          })
                      ]
                  }))
                : (e = (0, i.jsx)(b.Z, {
                      userId: d.getRecipientId(),
                      channel: d,
                      showingBanner: h
                  })),
            (0, i.jsxs)(A.Z, {
                channel: d,
                user: Z,
                children: [
                    null != Z &&
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-xl/medium',
                            className: U.marginBottom20,
                            children: y
                        }),
                    w.intl.format(w.t['Qvg+6+'], { username: C }),
                    (null == Z ? void 0 : Z.isProvisional) && (0, i.jsx)(m.Z, { look: 'channel_header' }),
                    e
                ]
            })
        );
    }
    if (d.isMultiUserDM())
        return d.isManaged()
            ? (0, i.jsxs)(S.ZP, {
                  channelId: d.id,
                  children: [(0, i.jsx)(S.Ot, { children: w.intl.format(w.t.I3R7Vl, { channelName: C }) }), (0, i.jsx)(S.jz, { children: w.intl.string(w.t.M8Ao6O) })]
              })
            : d.hasFlag(O.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(T.Z, { channel: d })
              : (0, i.jsx)(A.Z, {
                    channel: d,
                    children: w.intl.format(w.t.MFwcqK, { name: C })
                });
    return R
        ? (0, i.jsx)(B, {
              channel: d,
              canManageRoles: M
          })
        : (0, i.jsx)(S.ZP, {
              channelId: d.id,
              children: (0, i.jsx)(S.jz, { children: w.intl.format(w.t.hPVEQE, { channelName: C }) })
          });
}
