n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(447543),
    o = n(410575),
    s = n(906732),
    c = n(924301),
    d = n(11868),
    u = n(413605),
    m = n(451603),
    h = n(885714),
    f = n(314897),
    p = n(430824),
    g = n(701190),
    _ = n(610699),
    C = n(313876),
    E = n(778333),
    I = n(949981),
    x = n(680668),
    v = n(143708),
    N = n(358595),
    T = n(563917),
    S = n(135845),
    b = n(981631);
function A(e) {
    let { code: t, author: n, getAcceptInviteContext: A } = e,
        { invite: j, inviteError: Z } = (0, l.cj)(
            [g.Z],
            () => ({
                invite: g.Z.getInvite(t),
                inviteError: g.Z.getInviteError(t)
            }),
            [t]
        );
    r.useEffect(() => {
        null == j && a.Z.resolveInvite(t);
    }, [t]);
    let R =
            null != j
                ? j
                : {
                      state: b.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: P } = (0, s.ZP)(),
        y = (0, l.e7)([p.Z], () => ((null == j ? void 0 : j.guild) != null ? p.Z.getGuild(j.guild.id) : null), [j]),
        L = (0, l.e7)([f.default], () => f.default.getId()),
        O = (0, l.e7)(
            [c.ZP],
            () => {
                var e;
                return c.ZP.getGuildScheduledEvent(null === (e = R.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [R]
        ),
        M = () => {
            null != R.channel && a.Z.transitionToInviteSync(R);
        },
        k = () => {
            (0, m.yU)()
                ? (0, h.Z)({
                      analyticsSource: { page: b.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: b.ZY5.INVITE_EMBED,
                          section: b.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: P
                  })
                : a.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: A('Invite Button Embed')
                  });
        },
        D = (0, i.jsx)(x.Z, {
            onTransitionToInviteChannel: M,
            onAcceptInstantInvite: k,
            currentUserId: L,
            guild: y,
            invite: R,
            author: n
        });
    switch (R.state) {
        case b.r2o.RESOLVING:
            D = (0, i.jsx)(N.Z, {});
            break;
        case b.r2o.EXPIRED:
        case b.r2o.BANNED:
            D = (0, i.jsx)(v.Z, {
                banned: R.state === b.r2o.BANNED,
                author: n
            });
            break;
        case b.r2o.ERROR:
            D = (0, i.jsx)(C.Z, {
                author: n,
                inviteError: Z
            });
            break;
        default:
            switch ((0, u.VR)(R)) {
                case u.wx.GROUP_DM:
                    D = (0, i.jsx)(I.Z, {
                        onTransitionToInviteChannel: M,
                        onAcceptInstantInvite: k,
                        currentUserId: L,
                        invite: R,
                        author: n
                    });
                    break;
                case u.wx.FRIEND:
                    D = (0, i.jsx)(E.Z, {
                        invite: R,
                        author: n,
                        getAcceptInviteContext: A
                    });
                    break;
                default:
                    if ((0, u.TY)(R)) {
                        D = (0, i.jsx)(S.Z, {
                            onTransitionToInviteChannel: M,
                            onAcceptInstantInvite: k,
                            currentUserId: L,
                            guild: y,
                            invite: R
                        });
                        break;
                    }
                    if ((0, u.Tx)(R)) {
                        D = (0, i.jsx)(d.ZP, {
                            guildScheduledEvent: O,
                            guild: R.guild,
                            channel: R.channel,
                            isMember: null != y,
                            onAcceptInstantInvite: k,
                            onTransitionToInviteChannel: M
                        });
                        break;
                    }
                    if ((0, u.$P)(R)) {
                        D = (0, i.jsx)(T.Z, {
                            stageInstance: R.stage_instance,
                            guild: R.guild,
                            isMember: null != y,
                            onTransitionToInviteChannel: M,
                            onAcceptInstantInvite: k
                        });
                        break;
                    }
                    (0, u.P1)(R) &&
                        (D = (0, i.jsx)(_.Z, {
                            invite: R,
                            getAcceptInviteContext: A
                        }));
            }
    }
    return (0, i.jsx)(o.Z, {
        section: b.jXE.INVITE_LINK,
        children: D
    });
}
