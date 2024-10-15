n.d(t, {
    Z: function () {
        return O;
    },
    a: function () {
        return i;
    }
});
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(873546),
    c = n(442837),
    d = n(481060),
    _ = n(607070),
    E = n(100527),
    f = n(906732),
    h = n(385499),
    p = n(979264),
    I = n(372900),
    m = n(477734),
    T = n(184301),
    S = n(768581),
    g = n(463396),
    A = n(981631),
    N = n(825193);
function R(e) {
    let { compact: t } = e;
    return (0, a.jsx)(h.Z, {
        className: t ? N.botTagCompact : N.botTagCozy,
        type: h.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function O(e) {
    var t;
    let n,
        { author: r, message: i, channel: o, userOverride: h, compact: O = !1, withMentionPrefix: v = !1, showPopout: C = !1, className: L, onClick: y, onContextMenu: D, onPopoutRequestClose: b, renderPopout: M, renderRemixTag: P = !1, decorations: U } = e,
        w = s.useContext(I.Z),
        x = null !== (t = null == o ? void 0 : o.guild_id) && void 0 !== t ? t : w,
        { analyticsLocations: G } = (0, f.ZP)(E.Z.USERNAME),
        { nick: k, colorString: B, colorRoleName: F } = r,
        V = null != i.messageReference && null != i.webhookId && i.hasFlag(A.iLy.IS_CROSSPOST),
        H = (0, c.e7)([_.Z], () => _.Z.roleStyle),
        Z = (0, m.X$)(),
        Y = s.useMemo(
            () => ({
                source: A.jXE.CHANNEL,
                messageId: i.id,
                tagUserId: i.author.id
            }),
            [i.id, i.author.id]
        ),
        j = {
            className: N.username,
            style: 'username' === H && null != B ? { color: B } : void 0,
            onClick: y,
            onContextMenu: D,
            children: (0, a.jsx)(a.Fragment, { children: (v ? '@' : '') + k })
        },
        W = s.useMemo(
            () =>
                O
                    ? (0, a.jsx)(p.ZP, {
                          clan: r.clan,
                          userId: i.author.id,
                          contextGuildId: x,
                          className: N.clanTagChiplet,
                          profileViewedAnalytics: Y
                      })
                    : null,
            [O, Y, r.clan, x, i.author.id]
        );
    n =
        null != M && null != C
            ? (0, a.jsx)(d.Popout, {
                  preload: V
                      ? void 0
                      : function () {
                            let e = null != h ? h : i.author;
                            return (0, T.Z)(
                                e.id,
                                null != r.guildMemberAvatar && null != x
                                    ? (0, S.JM)({
                                          guildId: x,
                                          userId: e.id,
                                          avatar: r.guildMemberAvatar,
                                          size: 80
                                      })
                                    : e.getAvatarURL(x, 80),
                                {
                                    guildId: x,
                                    channelId: i.channel_id
                                }
                            );
                        },
                  renderPopout: M,
                  shouldShow: C,
                  position: u.tq ? 'window_center' : 'right',
                  onRequestClose: b,
                  children: (e) => {
                      let { onClick: t, ...n } = e;
                      return (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(d.Clickable, {
                                  tag: 'span',
                                  ...n,
                                  ...j,
                                  className: l()(j.className, N.clickable, L)
                              }),
                              W
                          ]
                      });
                  }
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(d.Clickable, {
                          ...j,
                          className: l()(j.className, L)
                      }),
                      W
                  ]
              });
    let K = null != U ? U[0] : null,
        z = null != U ? U[1] : null;
    return (0, a.jsxs)(f.Gt, {
        value: G,
        children: [
            null != K && O
                ? (0, a.jsxs)(a.Fragment, {
                      children: [' ', K, ' ']
                  })
                : null,
            'dot' === H
                ? (0, a.jsx)(d.RoleDot, {
                      color: B,
                      name: F,
                      className: N.roleDot
                  })
                : null,
            n,
            !O &&
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(p.ZP, {
                        clan: r.clan,
                        userId: i.author.id,
                        contextGuildId: x,
                        className: N.clanTagChiplet,
                        profileViewedAnalytics: Y
                    })
                }),
            null != z ? (0, a.jsx)(a.Fragment, { children: z }) : null,
            null == K || O ? null : K,
            null != i && (0, g.f)(i) && Z && P ? (0, a.jsx)(R, {}) : null
        ]
    });
}
((r = i || (i = {}))[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES');
