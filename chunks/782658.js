n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(447543),
    o = n(410575),
    s = n(906732),
    c = n(924301),
    u = n(11868),
    d = n(413605),
    m = n(451603),
    h = n(885714),
    f = n(314897),
    p = n(430824),
    g = n(701190),
    _ = n(610699),
    E = n(313876),
    C = n(778333),
    I = n(949981),
    x = n(680668),
    N = n(143708),
    v = n(358595),
    T = n(563917),
    S = n(135845),
    A = n(981631);
function b(e) {
    let { code: t, author: n, getAcceptInviteContext: b } = e,
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
                      state: A.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: L } = (0, s.ZP)(),
        P = (0, l.e7)([p.Z], () => ((null == j ? void 0 : j.guild) != null ? p.Z.getGuild(j.guild.id) : null), [j]),
        y = (0, l.e7)([f.default], () => f.default.getId()),
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
                      analyticsSource: { page: A.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: A.ZY5.INVITE_EMBED,
                          section: A.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: L
                  })
                : a.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: b('Invite Button Embed')
                  });
        },
        D = (0, i.jsx)(x.Z, {
            onTransitionToInviteChannel: M,
            onAcceptInstantInvite: k,
            currentUserId: y,
            guild: P,
            invite: R,
            author: n
        });
    switch (R.state) {
        case A.r2o.RESOLVING:
            D = (0, i.jsx)(v.Z, {});
            break;
        case A.r2o.EXPIRED:
        case A.r2o.BANNED:
            D = (0, i.jsx)(N.Z, {
                banned: R.state === A.r2o.BANNED,
                author: n
            });
            break;
        case A.r2o.ERROR:
            D = (0, i.jsx)(E.Z, {
                author: n,
                inviteError: Z
            });
            break;
        default:
            switch ((0, d.VR)(R)) {
                case d.wx.GROUP_DM:
                    D = (0, i.jsx)(I.Z, {
                        onTransitionToInviteChannel: M,
                        onAcceptInstantInvite: k,
                        currentUserId: y,
                        invite: R,
                        author: n
                    });
                    break;
                case d.wx.FRIEND:
                    D = (0, i.jsx)(C.Z, {
                        invite: R,
                        author: n,
                        getAcceptInviteContext: b
                    });
                    break;
                default:
                    if ((0, d.TY)(R)) {
                        D = (0, i.jsx)(S.Z, {
                            onTransitionToInviteChannel: M,
                            onAcceptInstantInvite: k,
                            currentUserId: y,
                            guild: P,
                            invite: R
                        });
                        break;
                    }
                    if ((0, d.Tx)(R)) {
                        D = (0, i.jsx)(u.ZP, {
                            guildScheduledEvent: O,
                            guild: R.guild,
                            channel: R.channel,
                            isMember: null != P,
                            onAcceptInstantInvite: k,
                            onTransitionToInviteChannel: M
                        });
                        break;
                    }
                    if ((0, d.$P)(R)) {
                        D = (0, i.jsx)(T.Z, {
                            stageInstance: R.stage_instance,
                            guild: R.guild,
                            isMember: null != P,
                            onTransitionToInviteChannel: M,
                            onAcceptInstantInvite: k
                        });
                        break;
                    }
                    (0, d.P1)(R) &&
                        (D = (0, i.jsx)(_.Z, {
                            invite: R,
                            getAcceptInviteContext: b
                        }));
            }
    }
    return (0, i.jsx)(o.Z, {
        section: A.jXE.INVITE_LINK,
        children: D
    });
}
