n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(789020);
var i = n(200651);
n(192379);
var r = n(568611),
    l = n(477690),
    a = n(481060),
    o = n(493683),
    s = n(100527),
    c = n(906732),
    d = n(835473),
    u = n(630388),
    m = n(624138),
    h = n(122613),
    f = n(147865),
    p = n(778569),
    _ = n(981631),
    g = n(388032),
    E = n(258858);
let C = (0, m.Mg)(l.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function I(e) {
    var t, n, l;
    let { applicationId: m } = e,
        { analyticsLocations: I } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [x] = (0, d.Z)([m]),
        N = null == x ? void 0 : null === (t = x.bot) || void 0 === t ? void 0 : t.id,
        v = (0, f.ZP)(null !== (l = null == x ? void 0 : x.maxParticipants) && void 0 !== l ? l : 0),
        T = (0, p.Z)({
            applicationId: m,
            size: C,
            names: ['embedded_cover']
        }),
        S = async () => {
            if (null != N)
                try {
                    let e = await o.Z.openPrivateChannel(N);
                    await (0, h.Z)({
                        targetApplicationId: null == x ? void 0 : x.id,
                        channelId: e,
                        analyticsLocations: I
                    });
                } catch (e) {}
        };
    return null != x && (0, u.yE)(x.flags, _.udG.EMBEDDED)
        ? (0, i.jsx)(c.Gt, {
              value: I,
              children: (0, i.jsxs)('div', {
                  className: E.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: E.imgContainer,
                          children: (0, i.jsx)('img', {
                              className: E.img,
                              alt: x.name,
                              src: T.url
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: E.content,
                          children: [
                              (0, i.jsx)(a.Heading, {
                                  className: E.heading,
                                  variant: 'heading-xl/semibold',
                                  children: x.name
                              }),
                              (0, i.jsx)(a.Heading, {
                                  className: E.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (n = x.description) || void 0 === n ? void 0 : n.trim()
                              }),
                              (0, i.jsx)(a.Heading, {
                                  className: E.learnMore,
                                  variant: 'heading-sm/medium',
                                  children: (0, i.jsx)(r.rU, {
                                      to: _.Z5c.ACTIVITY_DETAILS(m),
                                      children: g.intl.string(g.t.hvVgAQ)
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: E.cta,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: E.maxParticipants,
                                          children: [
                                              (0, i.jsx)(a.GroupIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: E.peopleIcon
                                              }),
                                              (0, i.jsx)(a.Text, {
                                                  variant: 'text-xs/semibold',
                                                  children: v
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)('div', {
                                          className: E.buttonWrapper,
                                          children: (0, i.jsx)(a.Button, {
                                              onClick: S,
                                              className: E.button,
                                              color: a.ButtonColors.GREEN,
                                              children: g.intl.string(g.t.RscU7O)
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
