n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(447543),
    r = n(410575),
    o = n(906732),
    c = n(924301),
    d = n(11868),
    u = n(413605),
    _ = n(451603),
    E = n(885714),
    I = n(314897),
    m = n(430824),
    T = n(701190),
    N = n(610699),
    h = n(313876),
    C = n(778333),
    p = n(949981),
    f = n(680668),
    A = n(143708),
    g = n(358595),
    S = n(563917),
    M = n(135845),
    O = n(981631);
function x(e) {
    let { code: t, author: n, getAcceptInviteContext: x } = e,
        { invite: R, inviteError: v } = (0, s.cj)(
            [T.Z],
            () => ({
                invite: T.Z.getInvite(t),
                inviteError: T.Z.getInviteError(t)
            }),
            [t]
        );
    a.useEffect(() => {
        null == R && l.Z.resolveInvite(t);
    }, [t]);
    let L =
            null != R
                ? R
                : {
                      state: O.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: Z } = (0, o.ZP)(),
        P = (0, s.e7)([m.Z], () => ((null == R ? void 0 : R.guild) != null ? m.Z.getGuild(R.guild.id) : null), [R]),
        D = (0, s.e7)([I.default], () => I.default.getId()),
        b = (0, s.e7)(
            [c.ZP],
            () => {
                var e;
                return c.ZP.getGuildScheduledEvent(null === (e = L.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [L]
        ),
        j = () => {
            null != L.channel && l.Z.transitionToInviteSync(L);
        },
        U = () => {
            (0, _.yU)()
                ? (0, E.Z)({
                      analyticsSource: { page: O.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: O.ZY5.INVITE_EMBED,
                          section: O.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: Z
                  })
                : l.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: x('Invite Button Embed')
                  });
        },
        y = (0, i.jsx)(f.Z, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: U,
            currentUserId: D,
            guild: P,
            invite: L,
            author: n
        });
    switch (L.state) {
        case O.r2o.RESOLVING:
            y = (0, i.jsx)(g.Z, {});
            break;
        case O.r2o.EXPIRED:
        case O.r2o.BANNED:
            y = (0, i.jsx)(A.Z, {
                banned: L.state === O.r2o.BANNED,
                author: n
            });
            break;
        case O.r2o.ERROR:
            y = (0, i.jsx)(h.Z, {
                author: n,
                inviteError: v
            });
            break;
        default:
            switch ((0, u.VR)(L)) {
                case u.wx.GROUP_DM:
                    y = (0, i.jsx)(p.Z, {
                        onTransitionToInviteChannel: j,
                        onAcceptInstantInvite: U,
                        currentUserId: D,
                        invite: L,
                        author: n
                    });
                    break;
                case u.wx.FRIEND:
                    y = (0, i.jsx)(C.Z, {
                        invite: L,
                        author: n,
                        getAcceptInviteContext: x
                    });
                    break;
                default:
                    if ((0, u.TY)(L)) {
                        y = (0, i.jsx)(M.Z, {
                            onTransitionToInviteChannel: j,
                            onAcceptInstantInvite: U,
                            currentUserId: D,
                            guild: P,
                            invite: L
                        });
                        break;
                    }
                    if ((0, u.Tx)(L)) {
                        y = (0, i.jsx)(d.ZP, {
                            guildScheduledEvent: b,
                            guild: L.guild,
                            channel: L.channel,
                            isMember: null != P,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: j
                        });
                        break;
                    }
                    if ((0, u.$P)(L)) {
                        y = (0, i.jsx)(S.Z, {
                            stageInstance: L.stage_instance,
                            guild: L.guild,
                            isMember: null != P,
                            onTransitionToInviteChannel: j,
                            onAcceptInstantInvite: U
                        });
                        break;
                    }
                    (0, u.P1)(L) &&
                        (y = (0, i.jsx)(N.Z, {
                            invite: L,
                            getAcceptInviteContext: x
                        }));
            }
    }
    return (0, i.jsx)(r.Z, {
        section: O.jXE.INVITE_LINK,
        children: y
    });
}
