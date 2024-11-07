l.d(n, {
    Z: function () {
        return P;
    }
}),
    l(653041);
var a = l(200651),
    i = l(192379),
    t = l(442837),
    r = l(481060),
    s = l(239091),
    d = l(561472),
    o = l(36311),
    c = l(367907),
    u = l(188471),
    h = l(541716),
    m = l(526120),
    g = l(563534),
    x = l(736052),
    f = l(665149),
    C = l(442336),
    v = l(910611),
    I = l(41776),
    p = l(703656),
    Z = l(6025),
    j = l(592125),
    N = l(703558),
    _ = l(731290),
    b = l(430824),
    A = l(375954),
    E = l(594174),
    S = l(933557),
    M = l(287746),
    k = l(981631),
    y = l(388032),
    w = l(232514);
function P(e) {
    let { channelId: n, baseChannelId: P, channelViewSource: B = 'Split View', isResourceChannelView: T } = e,
        R = (0, t.e7)([j.Z], () => j.Z.getChannel(n)),
        H = (0, t.e7)([b.Z], () => b.Z.getGuild(null == R ? void 0 : R.getGuildId())),
        L = (0, t.e7)([E.default], () => E.default.getCurrentUser()),
        D = (0, t.e7)([_.Z], () => _.Z.didAgree(null == R ? void 0 : R.guild_id)),
        W = (null == L ? void 0 : L.nsfwAllowed) === !0,
        U = (0, S.ZP)(R),
        G = (0, t.e7)([I.Z], () => (null == H ? void 0 : H.id) != null && I.Z.isLurking(H.id), [H]),
        O = (0, x.Z)(n),
        z = (0, t.e7)([g.Z], () => {
            var e;
            return null === (e = g.Z.getResourceForChannel(null == H ? void 0 : H.id, n)) || void 0 === e ? void 0 : e.title;
        }),
        F = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null != R &&
                !F.current &&
                ((F.current = !0),
                (0, c.yw)(k.rMx.CHANNEL_OPENED, {
                    ...(0, c.$H)(R.id),
                    channel_view: B
                }),
                (0, u.a)(k.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: R.id }));
        }, [R, B]),
        null == R || null == H)
    )
        return null;
    let Y = [];
    return (!G && Y.push((0, a.jsx)(C.Z, { channel: R }, 'notifications')),
    Y.push(
        (0, a.jsx)(
            f.ZP.Icon,
            {
                icon: r.XSmallIcon,
                tooltip: y.intl.string(y.t.cpT0Cg),
                onClick: () => Z.Z.closeChannelSidebar(P)
            },
            'close'
        )
    ),
    !R.isNSFW() || (W && D))
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(d.Z, {
                      channel: R,
                      draftType: N.d.ChannelMessage
                  }),
                  (0, a.jsx)(f.ZP, {
                      toolbar: Y,
                      'aria-label': y.intl.string(y.t.BIYAqa),
                      children: (0, v.ud)({
                          channel: R,
                          channelName: O ? z : U,
                          guild: H,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, s.jW)(e, async () => {
                                  let { default: e } = await l.e('24783').then(l.bind(l, 439635));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          channel: R,
                                          guild: H
                                      });
                              });
                          },
                          handleClick: () => {
                              let e = A.Z.getMessages(R.id);
                              if (T) {
                                  (0, p.uL)(k.Z5c.CHANNEL(R.guild_id, R.id)), (0, m.C3)(R.guild_id, null);
                                  return;
                              }
                              (0, p.XU)(R.guild_id, R.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, a.jsx)('div', {
                      className: w.chat,
                      children: (0, a.jsx)(
                          M.Z,
                          {
                              channel: R,
                              guild: H,
                              chatInputType: h.I.SIDEBAR
                          },
                          n
                      )
                  })
              ]
          })
        : (0, a.jsx)(o.Z, { guild: H });
}
