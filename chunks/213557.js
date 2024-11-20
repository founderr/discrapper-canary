t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(653041);
var l = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(481060),
    o = t(239091),
    s = t(561472),
    c = t(36311),
    d = t(367907),
    u = t(188471),
    h = t(541716),
    m = t(526120),
    f = t(563534),
    p = t(736052),
    x = t(665149),
    C = t(442336),
    g = t(910611),
    _ = t(41776),
    b = t(703656),
    I = t(6025),
    N = t(592125),
    v = t(703558),
    Z = t(731290),
    j = t(430824),
    E = t(375954),
    B = t(594174),
    S = t(933557),
    T = t(287746),
    w = t(981631),
    A = t(388032),
    y = t(868912);
function L(e) {
    let { channelId: n, baseChannelId: L, channelViewSource: k = 'Split View', isResourceChannelView: O } = e,
        P = (0, i.e7)([N.Z], () => N.Z.getChannel(n)),
        R = (0, i.e7)([j.Z], () => j.Z.getGuild(null == P ? void 0 : P.getGuildId())),
        M = (0, i.e7)([B.default], () => B.default.getCurrentUser()),
        D = (0, i.e7)([Z.Z], () => Z.Z.didAgree(null == P ? void 0 : P.guild_id)),
        H = (null == M ? void 0 : M.nsfwAllowed) === !0,
        U = (0, S.ZP)(P),
        G = (0, i.e7)([_.Z], () => (null == R ? void 0 : R.id) != null && _.Z.isLurking(R.id), [R]),
        W = (0, p.Z)(n),
        z = (0, i.e7)([f.Z], () => {
            var e;
            return null === (e = f.Z.getResourceForChannel(null == R ? void 0 : R.id, n)) || void 0 === e ? void 0 : e.title;
        }),
        F = a.useRef(!1);
    if (
        (a.useEffect(() => {
            null != P &&
                !F.current &&
                ((F.current = !0),
                (0, d.yw)(w.rMx.CHANNEL_OPENED, {
                    ...(0, d.$H)(P.id),
                    channel_view: k
                }),
                (0, u.a)(w.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: P.id }));
        }, [P, k]),
        null == P || null == R)
    )
        return null;
    let q = [];
    return (!G && q.push((0, l.jsx)(C.Z, { channel: P }, 'notifications')),
    q.push(
        (0, l.jsx)(
            x.ZP.Icon,
            {
                icon: r.XSmallIcon,
                tooltip: A.intl.string(A.t.cpT0Cg),
                onClick: () => I.Z.closeChannelSidebar(L)
            },
            'close'
        )
    ),
    !P.isNSFW() || (H && D))
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(s.Z, {
                      channel: P,
                      draftType: v.d.ChannelMessage
                  }),
                  (0, l.jsx)(x.ZP, {
                      toolbar: q,
                      'aria-label': A.intl.string(A.t.BIYAqa),
                      children: (0, g.ud)({
                          channel: P,
                          channelName: W ? z : U,
                          guild: R,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await t.e('24783').then(t.bind(t, 439635));
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          channel: P,
                                          guild: R
                                      });
                              });
                          },
                          handleClick: () => {
                              let e = E.Z.getMessages(P.id);
                              if (O) {
                                  (0, b.uL)(w.Z5c.CHANNEL(P.guild_id, P.id)), (0, m.C3)(P.guild_id, null);
                                  return;
                              }
                              (0, b.XU)(P.guild_id, P.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, l.jsx)('div', {
                      className: y.chat,
                      children: (0, l.jsx)(
                          T.Z,
                          {
                              channel: P,
                              guild: R,
                              chatInputType: h.I.SIDEBAR
                          },
                          n
                      )
                  })
              ]
          })
        : (0, l.jsx)(c.Z, { guild: R });
}
