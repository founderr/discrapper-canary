l.d(n, {
    Z: function () {
        return k;
    }
}),
    l(653041);
var a = l(735250),
    i = l(470079),
    r = l(442837),
    t = l(481060),
    s = l(239091),
    d = l(561472),
    c = l(36311),
    o = l(367907),
    u = l(188471),
    h = l(541716),
    m = l(526120),
    g = l(563534),
    C = l(736052),
    x = l(665149),
    f = l(442336),
    I = l(910611),
    v = l(41776),
    _ = l(703656),
    Z = l(6025),
    N = l(592125),
    j = l(703558),
    p = l(731290),
    b = l(430824),
    E = l(375954),
    M = l(594174),
    A = l(933557),
    S = l(287746),
    T = l(981631),
    R = l(689938),
    P = l(868912);
function k(e) {
    let { channelId: n, baseChannelId: k, channelViewSource: y = 'Split View', isResourceChannelView: B } = e,
        H = (0, r.e7)([N.Z], () => N.Z.getChannel(n)),
        L = (0, r.e7)([b.Z], () => b.Z.getGuild(null == H ? void 0 : H.getGuildId())),
        w = (0, r.e7)([M.default], () => M.default.getCurrentUser()),
        D = (0, r.e7)([p.Z], () => p.Z.didAgree(null == H ? void 0 : H.guild_id)),
        O = (null == w ? void 0 : w.nsfwAllowed) === !0,
        U = (0, A.ZP)(H),
        G = (0, r.e7)([v.Z], () => (null == L ? void 0 : L.id) != null && v.Z.isLurking(L.id), [L]),
        W = (0, C.Z)(n),
        z = (0, r.e7)([g.Z], () => {
            var e;
            return null === (e = g.Z.getResourceForChannel(null == L ? void 0 : L.id, n)) || void 0 === e ? void 0 : e.title;
        }),
        F = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null != H &&
                !F.current &&
                ((F.current = !0),
                (0, o.yw)(T.rMx.CHANNEL_OPENED, {
                    ...(0, o.$H)(H.id),
                    channel_view: y
                }),
                (0, u.a)(T.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: H.id }));
        }, [H, y]),
        null == H || null == L)
    )
        return null;
    let V = [];
    return (!G && V.push((0, a.jsx)(f.Z, { channel: H }, 'notifications')),
    V.push(
        (0, a.jsx)(
            x.ZP.Icon,
            {
                icon: t.XSmallIcon,
                tooltip: R.Z.Messages.CLOSE,
                onClick: () => Z.Z.closeChannelSidebar(k)
            },
            'close'
        )
    ),
    !H.isNSFW() || (O && D))
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(d.Z, {
                      channel: H,
                      draftType: j.d.ChannelMessage
                  }),
                  (0, a.jsx)(x.ZP, {
                      toolbar: V,
                      'aria-label': R.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                      children: (0, I.ud)({
                          channel: H,
                          channelName: W ? z : U,
                          guild: L,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, s.jW)(e, async () => {
                                  let { default: e } = await l.e('24783').then(l.bind(l, 439635));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          channel: H,
                                          guild: L
                                      });
                              });
                          },
                          handleClick: () => {
                              let e = E.Z.getMessages(H.id);
                              if (B) {
                                  (0, _.uL)(T.Z5c.CHANNEL(H.guild_id, H.id)), (0, m.C3)(H.guild_id, null);
                                  return;
                              }
                              (0, _.XU)(H.guild_id, H.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, a.jsx)('div', {
                      className: P.chat,
                      children: (0, a.jsx)(
                          S.Z,
                          {
                              channel: H,
                              guild: L,
                              chatInputType: h.I.SIDEBAR
                          },
                          n
                      )
                  })
              ]
          })
        : (0, a.jsx)(c.Z, { guild: L });
}
