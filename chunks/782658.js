n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(447543),
    s = n(410575),
    l = n(906732),
    u = n(924301),
    c = n(11868),
    d = n(413605),
    _ = n(451603),
    E = n(885714),
    f = n(314897),
    h = n(430824),
    p = n(701190),
    m = n(610699),
    I = n(313876),
    T = n(778333),
    g = n(949981),
    S = n(680668),
    A = n(143708),
    v = n(358595),
    N = n(563917),
    O = n(135845),
    R = n(981631);
function C(e) {
    let { code: t, author: n, getAcceptInviteContext: C } = e,
        { invite: y, inviteError: L } = (0, a.cj)(
            [p.Z],
            () => ({
                invite: p.Z.getInvite(t),
                inviteError: p.Z.getInviteError(t)
            }),
            [t]
        );
    i.useEffect(() => {
        null == y && o.Z.resolveInvite(t);
    }, [t]);
    let b =
            null != y
                ? y
                : {
                      state: R.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: D } = (0, l.ZP)(),
        M = (0, a.e7)([h.Z], () => ((null == y ? void 0 : y.guild) != null ? h.Z.getGuild(y.guild.id) : null), [y]),
        P = (0, a.e7)([f.default], () => f.default.getId()),
        U = (0, a.e7)(
            [u.ZP],
            () => {
                var e;
                return u.ZP.getGuildScheduledEvent(null === (e = b.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [b]
        ),
        w = () => {
            null != b.channel && o.Z.transitionToInviteSync(b);
        },
        x = () => {
            (0, _.yU)()
                ? (0, E.Z)({
                      analyticsSource: { page: R.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: R.ZY5.INVITE_EMBED,
                          section: R.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: D
                  })
                : o.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: C('Invite Button Embed')
                  });
        },
        G = (0, r.jsx)(S.Z, {
            onTransitionToInviteChannel: w,
            onAcceptInstantInvite: x,
            currentUserId: P,
            guild: M,
            invite: b,
            author: n
        });
    switch (b.state) {
        case R.r2o.RESOLVING:
            G = (0, r.jsx)(v.Z, {});
            break;
        case R.r2o.EXPIRED:
        case R.r2o.BANNED:
            G = (0, r.jsx)(A.Z, {
                banned: b.state === R.r2o.BANNED,
                author: n
            });
            break;
        case R.r2o.ERROR:
            G = (0, r.jsx)(I.Z, {
                author: n,
                inviteError: L
            });
            break;
        default:
            switch ((0, d.VR)(b)) {
                case d.wx.GROUP_DM:
                    G = (0, r.jsx)(g.Z, {
                        onTransitionToInviteChannel: w,
                        onAcceptInstantInvite: x,
                        currentUserId: P,
                        invite: b,
                        author: n
                    });
                    break;
                case d.wx.FRIEND:
                    G = (0, r.jsx)(T.Z, {
                        invite: b,
                        author: n,
                        getAcceptInviteContext: C
                    });
                    break;
                default:
                    if ((0, d.TY)(b)) {
                        G = (0, r.jsx)(O.Z, {
                            onTransitionToInviteChannel: w,
                            onAcceptInstantInvite: x,
                            currentUserId: P,
                            guild: M,
                            invite: b
                        });
                        break;
                    }
                    if ((0, d.Tx)(b)) {
                        G = (0, r.jsx)(c.ZP, {
                            guildScheduledEvent: U,
                            guild: b.guild,
                            channel: b.channel,
                            isMember: null != M,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: w
                        });
                        break;
                    }
                    if ((0, d.$P)(b)) {
                        G = (0, r.jsx)(N.Z, {
                            stageInstance: b.stage_instance,
                            guild: b.guild,
                            isMember: null != M,
                            onTransitionToInviteChannel: w,
                            onAcceptInstantInvite: x
                        });
                        break;
                    }
                    (0, d.P1)(b) &&
                        (G = (0, r.jsx)(m.Z, {
                            invite: b,
                            getAcceptInviteContext: C
                        }));
            }
    }
    return (0, r.jsx)(s.Z, {
        section: R.jXE.INVITE_LINK,
        children: G
    });
}
