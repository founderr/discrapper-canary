n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n(772848),
    c = n(442837),
    u = n(570140),
    d = n(596454),
    h = n(607070),
    p = n(368665);
let m = [p.emoji1, p.emoji2, p.emoji3, p.emoji4],
    _ = s.memo(function (e) {
        var t;
        let { emoji: n, onAnimationEnd: a } = e,
            o = (0, r.sample)(m),
            c = s.useCallback(() => {
                a(n.key);
            }, [n.key, a]);
        return (0, i.jsx)('div', {
            className: l()(p.emoji, o),
            onAnimationEnd: c,
            children: (0, i.jsx)(d.Z, {
                emojiId: n.id,
                emojiName: n.name,
                animated: null !== (t = n.animated) && void 0 !== t && t
            })
        });
    });
function f(e) {
    let { channelId: t, callHeight: n } = e,
        a = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [l, r] = s.useState([]);
    s.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: i } = e;
            if (n === t && !a && null != i)
                r((e) => [
                    ...e,
                    {
                        key: (0, o.Z)(),
                        ...i
                    }
                ]);
        }
        return (
            u.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                u.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, a]);
    let d = s.useCallback((e) => {
        r((t) => t.filter((t) => t.key !== e));
    }, []);
    return a
        ? null
        : (0, i.jsx)('div', {
              className: p.container,
              style: { top: n - 16 },
              'aria-hidden': !0,
              children: l.map((e) =>
                  (0, i.jsx)(
                      _,
                      {
                          emoji: e,
                          onAnimationEnd: d
                      },
                      e.key
                  )
              )
          });
}
