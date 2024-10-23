var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(481060),
    r = n(607070),
    o = n(665906),
    c = n(314897),
    u = n(496675),
    d = n(981631),
    h = n(689938),
    m = n(976320);
let p = () =>
    n
        .e('26176')
        .then(n.t.bind(n, 737848, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
t.Z = s.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        s = (0, a.e7)([r.Z], () => r.Z.useReducedMotion),
        _ = (0, a.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)),
        f = (0, o.Gu)(t),
        E = (0, a.e7)([c.default], () => c.default.getId());
    return n
        ? _ && !f && t.ownerId !== E
            ? (0, i.jsxs)('div', {
                  className: m.box,
                  children: [
                      (0, i.jsx)(l.LottieAnimation, {
                          importData: p,
                          shouldAnimate: !s,
                          className: m.animation
                      }),
                      (0, i.jsxs)('div', {
                          className: m.textContainer,
                          children: [
                              (0, i.jsx)(l.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: h.Z.Messages.FORUM_START_THE_CONVERSATION_HEADER
                              }),
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: h.Z.Messages.FORUM_START_THE_CONVERSATION_DESCRIPTION
                              })
                          ]
                      })
                  ]
              })
            : null
        : (0, i.jsx)('div', { className: m.divider });
});
