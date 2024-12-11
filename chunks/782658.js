n.d(t, {
    Z: function () {
        return P;
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
    m = n(997321),
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
    R = n(981631),
    Z = n(723359);
function P(e) {
    let { code: t, author: n, getAcceptInviteContext: P } = e,
        { invite: L, inviteError: y } = (0, l.cj)(
            [E.Z],
            () => ({
                invite: E.Z.getInvite(t),
                inviteError: E.Z.getInviteError(t)
            }),
            [t]
        );
    r.useEffect(() => {
        null == L && a.Z.resolveInvite(t);
    }, [t]);
    let O =
            null != L
                ? L
                : {
                      state: R.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: M } = (0, u.ZP)(),
        k = (0, l.e7)([g.Z], () => ((null == L ? void 0 : L.guild) != null ? g.Z.getGuild(L.guild.id) : null), [L]),
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
            if (null == k && (null == L ? void 0 : L.guild) != null) {
                let e = C.Qs(L.guild);
                if ((0, c.b)() && (0, c.Y)(e)) {
                    (0, s.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED);
                    return;
                }
            }
            (0, f.yU)()
                ? (0, p.Z)({
                      analyticsSource: { page: R.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: R.ZY5.INVITE_EMBED,
                          section: R.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: M
                  })
                : a.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: P('Invite Button Embed')
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
        case R.r2o.RESOLVING:
            F = (0, i.jsx)(A.Z, {});
            break;
        case R.r2o.EXPIRED:
        case R.r2o.BANNED:
            F = (0, i.jsx)(S.Z, {
                banned: O.state === R.r2o.BANNED,
                author: n
            });
            break;
        case R.r2o.ERROR:
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
                        getAcceptInviteContext: P
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
                            getAcceptInviteContext: P
                        }));
            }
    }
    return (0, i.jsx)(o.Z, {
        section: R.jXE.INVITE_LINK,
        children: F
    });
}
