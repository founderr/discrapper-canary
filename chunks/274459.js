n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(212433),
    o = n(442837),
    c = n(481060),
    u = n(596454),
    d = n(607070),
    h = n(70956),
    p = n(456631),
    m = n(205498);
let _ = 6 * h.Z.Millis.SECOND,
    f = 2 * h.Z.Millis.SECOND,
    E = 2 * h.Z.Millis.SECOND,
    g = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function C(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: a } = e,
        { emoji: h, sentAt: C } = n,
        I = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [T, x] = s.useState(!0),
        S = !I,
        v = (0, c.useTransition)(T, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: r.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && a();
            }
        });
    return (s.useEffect(() => {
        let e;
        return (
            Date.now() - C >= E
                ? (0, p.H)(t)
                : (e = setTimeout(
                      () => {
                          x(!1), S && (0, p.H)(t);
                      },
                      S ? f : _
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [C, t, S]),
    S)
        ? null
        : v((e, t) => {
              var n;
              let { rotate: s } = e;
              return (
                  t &&
                  (0, i.jsx)(r.animated.div, {
                      className: m.voiceChannelEffectEmojiContainer,
                      style: { transform: s.to(g) },
                      children: (0, i.jsx)(u.Z, {
                          className: l()(m.voiceChannelEffectEmoji),
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: null !== (n = h.animated) && void 0 !== n && n
                      })
                  })
              );
          });
}
