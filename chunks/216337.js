var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    a = n(607070),
    o = n(665906),
    c = n(314897),
    u = n(496675),
    d = n(981631),
    h = n(388032),
    m = n(976320);
let p = () =>
    n
        .e('26176')
        .then(n.t.bind(n, 737848, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
t.Z = l.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        l = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        f = (0, r.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)),
        g = (0, o.Gu)(t),
        C = (0, r.e7)([c.default], () => c.default.getId());
    return n
        ? f && !g && t.ownerId !== C
            ? (0, i.jsxs)('div', {
                  className: m.box,
                  children: [
                      (0, i.jsx)(s.LottieAnimation, {
                          importData: p,
                          shouldAnimate: !l,
                          className: m.animation
                      }),
                      (0, i.jsxs)('div', {
                          className: m.textContainer,
                          children: [
                              (0, i.jsx)(s.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: h.intl.string(h.t.OmBThI)
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: h.intl.string(h.t.zcs5kp)
                              })
                          ]
                      })
                  ]
              })
            : null
        : (0, i.jsx)('div', { className: m.divider });
});
