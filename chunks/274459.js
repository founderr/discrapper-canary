n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(100621),
    o = n(442837),
    c = n(481060),
    u = n(596454),
    d = n(607070),
    h = n(70956),
    m = n(456631),
    p = n(205498);
let f = 6 * h.Z.Millis.SECOND,
    g = 2 * h.Z.Millis.SECOND,
    C = 2 * h.Z.Millis.SECOND,
    x = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function v(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: r } = e,
        { emoji: h, sentAt: v } = n,
        _ = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [I, E] = l.useState(!0),
        b = !_,
        S = (0, c.useTransition)(I, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && r();
            }
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - v >= C
                ? (0, m.H)(t)
                : (e = setTimeout(
                      () => {
                          E(!1), b && (0, m.H)(t);
                      },
                      b ? g : f
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [v, t, b]),
    b)
        ? null
        : S((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                  t &&
                  (0, i.jsx)(s.animated.div, {
                      className: p.voiceChannelEffectEmojiContainer,
                      style: { transform: l.to(x) },
                      children: (0, i.jsx)(u.Z, {
                          className: a()(p.voiceChannelEffectEmoji),
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: null !== (n = h.animated) && void 0 !== n && n
                      })
                  })
              );
          });
}
