n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(447543),
    l = n(410575),
    o = n(906732),
    c = n(924301),
    u = n(11868),
    d = n(413605),
    _ = n(451603),
    E = n(885714),
    I = n(314897),
    m = n(430824),
    f = n(701190),
    T = n(610699),
    h = n(313876),
    N = n(778333),
    p = n(949981),
    C = n(680668),
    g = n(143708),
    S = n(358595),
    A = n(563917),
    x = n(135845),
    R = n(981631);
function v(e) {
    let { code: t, author: n, getAcceptInviteContext: v } = e,
        { invite: O, inviteError: M } = (0, s.cj)(
            [f.Z],
            () => ({
                invite: f.Z.getInvite(t),
                inviteError: f.Z.getInviteError(t)
            }),
            [t]
        );
    a.useEffect(() => {
        null == O && r.Z.resolveInvite(t);
    }, [t]);
    let L =
            null != O
                ? O
                : {
                      state: R.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: Z } = (0, o.ZP)(),
        b = (0, s.e7)([m.Z], () => ((null == O ? void 0 : O.guild) != null ? m.Z.getGuild(O.guild.id) : null), [O]),
        P = (0, s.e7)([I.default], () => I.default.getId()),
        D = (0, s.e7)(
            [c.ZP],
            () => {
                var e;
                return c.ZP.getGuildScheduledEvent(null === (e = L.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [L]
        ),
        j = () => {
            null != L.channel && r.Z.transitionToInviteSync(L);
        },
        U = () => {
            (0, _.yU)()
                ? (0, E.Z)({
                      analyticsSource: { page: R.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: R.ZY5.INVITE_EMBED,
                          section: R.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: Z
                  })
                : r.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: v('Invite Button Embed')
                  });
        },
        y = (0, i.jsx)(C.Z, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: U,
            currentUserId: P,
            guild: b,
            invite: L,
            author: n
        });
    switch (L.state) {
        case R.r2o.RESOLVING:
            y = (0, i.jsx)(S.Z, {});
            break;
        case R.r2o.EXPIRED:
        case R.r2o.BANNED:
            y = (0, i.jsx)(g.Z, {
                banned: L.state === R.r2o.BANNED,
                author: n
            });
            break;
        case R.r2o.ERROR:
            y = (0, i.jsx)(h.Z, {
                author: n,
                inviteError: M
            });
            break;
        default:
            switch ((0, d.VR)(L)) {
                case d.wx.GROUP_DM:
                    y = (0, i.jsx)(p.Z, {
                        onTransitionToInviteChannel: j,
                        onAcceptInstantInvite: U,
                        currentUserId: P,
                        invite: L,
                        author: n
                    });
                    break;
                case d.wx.FRIEND:
                    y = (0, i.jsx)(N.Z, {
                        invite: L,
                        author: n,
                        getAcceptInviteContext: v
                    });
                    break;
                default:
                    if ((0, d.TY)(L)) {
                        y = (0, i.jsx)(x.Z, {
                            onTransitionToInviteChannel: j,
                            onAcceptInstantInvite: U,
                            currentUserId: P,
                            guild: b,
                            invite: L
                        });
                        break;
                    }
                    if ((0, d.Tx)(L)) {
                        y = (0, i.jsx)(u.ZP, {
                            guildScheduledEvent: D,
                            guild: L.guild,
                            channel: L.channel,
                            isMember: null != b,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: j
                        });
                        break;
                    }
                    if ((0, d.$P)(L)) {
                        y = (0, i.jsx)(A.Z, {
                            stageInstance: L.stage_instance,
                            guild: L.guild,
                            isMember: null != b,
                            onTransitionToInviteChannel: j,
                            onAcceptInstantInvite: U
                        });
                        break;
                    }
                    (0, d.P1)(L) &&
                        (y = (0, i.jsx)(T.Z, {
                            invite: L,
                            getAcceptInviteContext: v
                        }));
            }
    }
    return (0, i.jsx)(l.Z, {
        section: R.jXE.INVITE_LINK,
        children: y
    });
}
