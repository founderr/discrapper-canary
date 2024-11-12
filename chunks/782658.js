n.d(t, {
    Z: function () {
        return L;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(447543),
    o = n(410575),
    s = n(758119),
    c = n(622822),
    u = n(906732),
    d = n(924301),
    m = n(11868),
    h = n(413605),
    f = n(451603),
    p = n(885714),
    _ = n(314897),
    g = n(430824),
    E = n(701190),
    C = n(411198),
    I = n(610699),
    x = n(313876),
    N = n(778333),
    v = n(949981),
    T = n(680668),
    S = n(143708),
    A = n(358595),
    b = n(563917),
    j = n(135845),
    Z = n(981631),
    R = n(723359);
function L(e) {
    let { code: t, author: n, getAcceptInviteContext: L } = e,
        { invite: P, inviteError: y } = (0, l.cj)(
            [E.Z],
            () => ({
                invite: E.Z.getInvite(t),
                inviteError: E.Z.getInviteError(t)
            }),
            [t]
        );
    r.useEffect(() => {
        null == P && a.Z.resolveInvite(t);
    }, [t]);
    let O =
            null != P
                ? P
                : {
                      state: Z.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: M } = (0, u.ZP)(),
        k = (0, l.e7)([g.Z], () => ((null == P ? void 0 : P.guild) != null ? g.Z.getGuild(P.guild.id) : null), [P]),
        D = (0, l.e7)([_.default], () => _.default.getId()),
        B = (0, l.e7)(
            [d.ZP],
            () => {
                var e;
                return d.ZP.getGuildScheduledEvent(null === (e = O.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [O]
        ),
        U = () => {
            null != O.channel && a.Z.transitionToInviteSync(O);
        },
        w = () => {
            if (null == k && (null == P ? void 0 : P.guild) != null) {
                let e = C.Qs(P.guild);
                if ((0, c.b)() && (0, c.Y)(e)) {
                    (0, s.mN)(R.L0.NSFW_SERVER_INVITE_EMBED);
                    return;
                }
            }
            (0, f.yU)()
                ? (0, p.Z)({
                      analyticsSource: { page: Z.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: Z.ZY5.INVITE_EMBED,
                          section: Z.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: M
                  })
                : a.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: L('Invite Button Embed')
                  });
        },
        F = (0, i.jsx)(T.Z, {
            onTransitionToInviteChannel: U,
            onAcceptInstantInvite: w,
            currentUserId: D,
            guild: k,
            invite: O,
            author: n
        });
    switch (O.state) {
        case Z.r2o.RESOLVING:
            F = (0, i.jsx)(A.Z, {});
            break;
        case Z.r2o.EXPIRED:
        case Z.r2o.BANNED:
            F = (0, i.jsx)(S.Z, {
                banned: O.state === Z.r2o.BANNED,
                author: n
            });
            break;
        case Z.r2o.ERROR:
            F = (0, i.jsx)(x.Z, {
                author: n,
                inviteError: y
            });
            break;
        default:
            switch ((0, h.VR)(O)) {
                case h.wx.GROUP_DM:
                    F = (0, i.jsx)(v.Z, {
                        onTransitionToInviteChannel: U,
                        onAcceptInstantInvite: w,
                        currentUserId: D,
                        invite: O,
                        author: n
                    });
                    break;
                case h.wx.FRIEND:
                    F = (0, i.jsx)(N.Z, {
                        invite: O,
                        author: n,
                        getAcceptInviteContext: L
                    });
                    break;
                default:
                    if ((0, h.TY)(O)) {
                        F = (0, i.jsx)(j.Z, {
                            onTransitionToInviteChannel: U,
                            onAcceptInstantInvite: w,
                            currentUserId: D,
                            guild: k,
                            invite: O
                        });
                        break;
                    }
                    if ((0, h.Tx)(O)) {
                        F = (0, i.jsx)(m.ZP, {
                            guildScheduledEvent: B,
                            guild: O.guild,
                            channel: O.channel,
                            isMember: null != k,
                            onAcceptInstantInvite: w,
                            onTransitionToInviteChannel: U
                        });
                        break;
                    }
                    if ((0, h.$P)(O)) {
                        F = (0, i.jsx)(b.Z, {
                            stageInstance: O.stage_instance,
                            guild: O.guild,
                            isMember: null != k,
                            onTransitionToInviteChannel: U,
                            onAcceptInstantInvite: w
                        });
                        break;
                    }
                    (0, h.P1)(O) &&
                        (F = (0, i.jsx)(I.Z, {
                            invite: O,
                            getAcceptInviteContext: L
                        }));
            }
    }
    return (0, i.jsx)(o.Z, {
        section: Z.jXE.INVITE_LINK,
        children: F
    });
}
