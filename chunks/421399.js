n.d(t, {
    Z: function () {
        return O;
    },
    a: function () {
        return r;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(873546),
    u = n(442837),
    c = n(481060),
    d = n(607070),
    _ = n(100527),
    E = n(906732),
    f = n(385499),
    h = n(979264),
    p = n(372900),
    m = n(477734),
    I = n(184301),
    T = n(768581),
    g = n(463396),
    S = n(944192),
    A = n(981631),
    v = n(825193);
function N(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? v.botTagCompact : v.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function O(e) {
    var t;
    let n,
        { author: r, message: o, channel: f, userOverride: O, compact: R = !1, withMentionPrefix: C = !1, showPopout: y = !1, className: b, onClick: L, onContextMenu: D, onPopoutRequestClose: M, renderPopout: P, renderRemixTag: U = !1, decorations: w } = e,
        x = a.useContext(p.Z),
        G = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : x,
        { analyticsLocations: k } = (0, E.ZP)(_.Z.USERNAME),
        B = C ? '@' : '',
        { nick: F, colorString: Z, colorRoleName: V } = r,
        H = null != o.messageReference && null != o.webhookId && o.hasFlag(A.iLy.IS_CROSSPOST),
        Y = (0, u.e7)([d.Z], () => d.Z.roleStyle),
        j = 'username' === Y,
        W = 'dot' === Y,
        K = (0, m.X$)(),
        z = a.useMemo(
            () => ({
                source: A.jXE.CHANNEL,
                messageId: o.id,
                tagUserId: o.author.id
            }),
            [o.id, o.author.id]
        ),
        q = {
            className: v.username,
            style: j && null != Z ? { color: Z } : void 0,
            onClick: L,
            onContextMenu: D,
            children: (0, i.jsx)(i.Fragment, { children: B + F })
        };
    function Q() {
        let e = null != O ? O : o.author;
        return (0, I.Z)(
            e.id,
            null != r.guildMemberAvatar && null != G
                ? (0, T.JM)({
                      guildId: G,
                      userId: e.id,
                      avatar: r.guildMemberAvatar,
                      size: 80
                  })
                : e.getAvatarURL(G, 80),
            {
                guildId: G,
                channelId: o.channel_id
            }
        );
    }
    let X = a.useMemo(
        () =>
            R
                ? (0, i.jsx)(h.ZP, {
                      clan: r.clan,
                      userId: o.author.id,
                      contextGuildId: G,
                      className: v.clanTagChiplet,
                      profileViewedAnalytics: z
                  })
                : null,
        [R, z, r.clan, G, o.author.id]
    );
    n =
        null != P && null != y
            ? (0, i.jsx)(c.Popout, {
                  preload: H ? void 0 : Q,
                  renderPopout: P,
                  shouldShow: y,
                  position: l.tq ? 'window_center' : 'right',
                  onRequestClose: M,
                  children: (e) => {
                      let { onClick: t, ...n } = e;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(c.Clickable, {
                                  tag: 'span',
                                  ...n,
                                  ...q,
                                  className: s()(q.className, v.clickable, b)
                              }),
                              X
                          ]
                      });
                  }
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.Clickable, {
                          ...q,
                          className: s()(q.className, b)
                      }),
                      X
                  ]
              });
    let $ = null != w ? w[0] : null,
        J = null != w ? w[1] : null;
    return (0, i.jsxs)(E.Gt, {
        value: k,
        children: [
            null != $ && R
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', $, ' ']
                  })
                : null,
            W
                ? (0, i.jsx)(c.RoleDot, {
                      color: Z,
                      name: V,
                      className: v.roleDot
                  })
                : null,
            n,
            !R &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(h.ZP, {
                        clan: r.clan,
                        userId: o.author.id,
                        contextGuildId: G,
                        className: v.clanTagChiplet,
                        profileViewedAnalytics: z
                    })
                }),
            null != J ? (0, i.jsx)(i.Fragment, { children: J }) : null,
            (0, i.jsx)(S.Z, { message: o }),
            null == $ || R ? null : $,
            null != o && (0, g.f)(o) && K && U ? (0, i.jsx)(N, {}) : null
        ]
    });
}
!(function (e) {
    (e[(e.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (e[(e.BADGES = 1)] = 'BADGES');
})(r || (r = {}));
