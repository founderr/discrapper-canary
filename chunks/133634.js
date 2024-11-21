n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(100621),
    d = n(442837),
    u = n(481060),
    h = n(846027),
    p = n(518950),
    m = n(937995),
    f = n(199902),
    g = n(131951),
    C = n(594174),
    x = n(63063),
    _ = n(5192),
    v = n(120619),
    I = n(578976),
    E = n(981631),
    b = n(37113),
    Z = n(388032),
    N = n(277865),
    S = n(454120);
let T = (e) => 1 - Math.pow(1 - e, 3);
function j(e) {
    let { channel: t, buyer: r, onClose: s, render: j, dismissibleContent: A } = e,
        y = (0, d.Wu)([f.Z], () => f.Z.getAllActiveStreams()),
        P = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        M = null != y.find((e) => e.ownerId === (null == P ? void 0 : P.id)),
        L = (0, d.e7)([v.Z], () => v.Z.getPreviousGoLiveSettings()),
        R = M && null != L && L.resolution !== b.LY.RESOLUTION_1440 && L.frameRate !== b.ws.FPS_60,
        [k, O] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        O(!0);
    }, []);
    let D = (0, l.useContext)(m.h9),
        w = (0, u.useSpring)({
            from: k
                ? {
                      opacity: 0,
                      transform: 'translateX(-50%) translateY(30px) scale(0.9)'
                  }
                : {},
            to: {
                opacity: 1,
                transform: D ? 'translateX(-50%) translateY(0px) scale(1)' : 'translateX(-50%) translateY(-66px) scale(1)'
            },
            config: {
                duration: 250,
                easing: T,
                immediate: !k
            }
        }),
        { avatarSrc: B, eventHandlers: U } = (0, p.Z)({
            user: r,
            size: u.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        H = _.ZP.getName(t.guild_id, t.id, r),
        G = M && !R,
        F = t.hdStreamingUntil;
    if (null == F || null == r || null == P) return null;
    let V = o()(F).diff(o()(), 'hours');
    if (!j) return null;
    let z = A
            ? Z.intl.format(Z.t['6LrV9f'], {
                  username: H,
                  num: V,
                  helpCenterLink: x.Z.getArticleURL(E.BhN.HD_STREAMING_POTION)
              })
            : r.id === P.id
              ? Z.intl.string(Z.t.IjKvNT)
              : !0 === M
                ? Z.intl.format(Z.t.JkWoqK, {
                      username: H,
                      helpCenterLink: x.Z.getArticleURL(E.BhN.HD_STREAMING_POTION)
                  })
                : Z.intl.formatToPlainString(Z.t.vNbVXF, { username: H }),
        W = R ? Z.intl.string(Z.t.o7NIjY) : G ? Z.intl.string(Z.t.r6xhBw) : Z.intl.string(Z.t.yKw8Dg);
    return null == r || null == P
        ? null
        : (0, i.jsxs)(c.animated.div, {
              style: w,
              className: N.banner,
              children: [
                  (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(u.Avatar, {
                              src: B,
                              'aria-label': r.username,
                              size: u.AvatarSizes.SIZE_48,
                              ...U
                          }),
                          (0, i.jsx)('img', {
                              className: N.potion,
                              src: S,
                              alt: ''
                          })
                      ]
                  }),
                  (0, i.jsx)(u.Heading, {
                      variant: 'heading-sm/medium',
                      children: z
                  }),
                  (0, i.jsxs)('div', {
                      className: N.subsection,
                      children: [
                          (0, i.jsx)(u.Button, {
                              onClick: () => {
                                  if (R) {
                                      let e = v.Z.getPreviousGoLiveSettings(),
                                          t = g.Z.getGoLiveSource();
                                      if (null == e) {
                                          s();
                                          return;
                                      }
                                      let n = (0, I.s)(e.resolution, e.frameRate, t);
                                      h.Z.setGoLiveSource(n), s();
                                      return;
                                  }
                                  if (G) {
                                      s();
                                      return;
                                  }
                                  (0, u.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
                                      return (t) =>
                                          (0, i.jsx)(e, {
                                              analyticsLocation: 'HDStreamingPotionBanner',
                                              ...t
                                          });
                                  }),
                                      s();
                              },
                              className: a()({ [N.actionButton]: !0 !== M }),
                              children: W
                          }),
                          !G &&
                              (0, i.jsx)(u.Clickable, {
                                  className: N.x,
                                  onClick: s,
                                  children: (0, i.jsx)(u.XSmallIcon, { name: 'close' })
                              })
                      ]
                  })
              ]
          });
}
