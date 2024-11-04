n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(239091),
    d = n(100527),
    f = n(906732),
    _ = n(797610),
    h = n(927723),
    p = n(124072),
    m = n(184301),
    g = n(347475),
    E = n(592125),
    v = n(271383),
    I = n(430824),
    S = n(699516),
    T = n(594174),
    b = n(5192),
    y = n(51144),
    A = n(377668);
function N(e) {
    let { userId: t, className: a, children: s } = e,
        o = i.useCallback(() => {
            (0, h.k)({ kind: 'user' });
        }, []),
        l = i.useCallback(
            (e) => {
                if (null != t)
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('25073').then(n.bind(n, 80742));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                userId: t
                            });
                    });
            },
            [t]
        );
    return (0, r.jsx)(p.Z, {
        className: a,
        onClick: o,
        onContextMenu: l,
        children: s
    });
}
function C(e) {
    let { className: t, userId: i, channelId: a, parsedUserId: h, content: C, inlinePreview: R = !1, viewingChannelId: O } = e,
        { analyticsLocations: D } = (0, f.ZP)(d.Z.USER_MENTION),
        L = (0, l.e7)([T.default], () => T.default.getUser(i)),
        x = (0, l.e7)([E.Z], () => E.Z.getChannel(a)),
        w = null != x ? x.getGuildId() : null,
        M =
            R || null == L || null == w || null == a
                ? void 0
                : (e) => {
                      null != x &&
                          (0, c.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('92453'), n.e('13125'), n.e('45832')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(e, {
                                      ...t,
                                      viewingChannelId: O,
                                      user: L,
                                      channel: x,
                                      guildId: w
                                  });
                          });
                  },
        P = y.ZP.useName(L),
        k = (0, l.e7)([E.Z, v.ZP, S.Z], () => b.ZP.getNickname(w, a, L)),
        U = I.Z.getGuild(w),
        G = (0, _.Ib)(U, x) && i === A.fL ? A.jM : null;
    if (null == L)
        return (0, r.jsx)(N, {
            userId: h,
            className: t,
            children: C
        });
    let B = (e) =>
        (0, r.jsx)(p.Z, {
            className: t,
            onContextMenu: M,
            color: G,
            ...e,
            children: '@'.concat(null != k ? k : P)
        });
    return R
        ? (0, r.jsx)(f.Gt, {
              value: D,
              children: B()
          })
        : (0, r.jsx)(f.Gt, {
              value: D,
              children: (0, r.jsx)(u.Popout, {
                  preload:
                      null == L
                          ? void 0
                          : () =>
                                (0, m.Z)(L.id, L.getAvatarURL(w, 80), {
                                    guildId: null != w ? w : void 0,
                                    channelId: null != a ? a : void 0
                                }),
                  renderPopout: (e) => (
                      s()(null != L, 'Unexpected missing user'),
                      (0, r.jsx)(g.Z, {
                          userId: L.id,
                          guildId: null != w ? w : void 0,
                          channelId: a,
                          ...e
                      })
                  ),
                  position: o.tq ? 'top' : 'right',
                  children: (e) => B(e)
              })
          });
}
