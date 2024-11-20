n.d(t, {
    Z: function () {
        return T;
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
    _ = n(120619),
    v = n(578976),
    I = n(981631),
    E = n(37113),
    b = n(388032),
    Z = n(277865),
    N = n(454120);
let S = (e) => 1 - Math.pow(1 - e, 3);
function T(e) {
    let { channel: t, buyer: r, onClose: s, render: T, dismissibleContent: j } = e,
        A = (0, d.Wu)([f.Z], () => f.Z.getAllActiveStreams()),
        y = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        P = null != A.find((e) => e.ownerId === (null == y ? void 0 : y.id)),
        M = (0, d.e7)([_.Z], () => _.Z.getPreviousGoLiveSettings()),
        L = P && null != M && M.resolution !== E.LY.RESOLUTION_1440 && M.frameRate !== E.ws.FPS_60,
        [R, k] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        k(!0);
    }, []);
    let O = (0, l.useContext)(m.h9),
        D = (0, u.useSpring)({
            from: R
                ? {
                      opacity: 0,
                      transform: 'translateX(-50%) translateY(30px) scale(0.9)'
                  }
                : {},
            to: {
                opacity: 1,
                transform: O ? 'translateX(-50%) translateY(0px) scale(1)' : 'translateX(-50%) translateY(-66px) scale(1)'
            },
            config: {
                duration: 250,
                easing: S,
                immediate: !R
            }
        }),
        { avatarSrc: w, eventHandlers: B } = (0, p.Z)({
            user: r,
            size: u.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        U = P && !L,
        H = t.hdStreamingUntil;
    if (null == H || null == r || null == y) return null;
    let G = o()(H).diff(o()(), 'hours');
    if (!T) return null;
    let F = (() => {
            if (j) {
                var e;
                return b.intl.format(b.t['6LrV9f'], {
                    username: null !== (e = r.globalName) && void 0 !== e ? e : r.username,
                    num: G,
                    helpCenterLink: x.Z.getArticleURL(I.BhN.HD_STREAMING_POTION)
                });
            }
            return r.id === y.id
                ? b.intl.string(b.t.IjKvNT)
                : !0 === P
                  ? b.intl.format(b.t.JkWoqK, {
                        username: r.username,
                        helpCenterLink: x.Z.getArticleURL(I.BhN.HD_STREAMING_POTION)
                    })
                  : b.intl.formatToPlainString(b.t.vNbVXF, { username: r.username });
        })(),
        V = L ? b.intl.string(b.t.o7NIjY) : U ? b.intl.string(b.t.r6xhBw) : b.intl.string(b.t.yKw8Dg);
    return null == r || null == y
        ? null
        : (0, i.jsxs)(c.animated.div, {
              style: D,
              className: Z.banner,
              children: [
                  (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(u.Avatar, {
                              src: w,
                              'aria-label': r.username,
                              size: u.AvatarSizes.SIZE_48,
                              ...B
                          }),
                          (0, i.jsx)('img', {
                              className: Z.potion,
                              src: N,
                              alt: ''
                          })
                      ]
                  }),
                  (0, i.jsx)(u.Heading, {
                      variant: 'heading-sm/medium',
                      children: F
                  }),
                  (0, i.jsxs)('div', {
                      className: Z.subsection,
                      children: [
                          (0, i.jsx)(u.Button, {
                              onClick: () => {
                                  if (L) {
                                      let e = _.Z.getPreviousGoLiveSettings(),
                                          t = g.Z.getGoLiveSource();
                                      if (null == e) {
                                          s();
                                          return;
                                      }
                                      let n = (0, v.s)(e.resolution, e.frameRate, t);
                                      h.Z.setGoLiveSource(n), s();
                                      return;
                                  }
                                  if (U) {
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
                              className: a()({ [Z.actionButton]: !0 !== P }),
                              children: V
                          }),
                          !U &&
                              (0, i.jsx)(u.Clickable, {
                                  className: Z.x,
                                  onClick: s,
                                  children: (0, i.jsx)(u.XSmallIcon, { name: 'close' })
                              })
                      ]
                  })
              ]
          });
}
