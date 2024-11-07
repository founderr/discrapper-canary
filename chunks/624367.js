n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120),
    n(789020);
var i = n(200651);
n(192379);
var r = n(568611),
    l = n(442837),
    a = n(477690),
    o = n(481060),
    s = n(668781),
    c = n(2052),
    u = n(100527),
    d = n(906732),
    m = n(895924),
    h = n(835473),
    f = n(522474),
    p = n(523746),
    _ = n(592125),
    g = n(594174),
    E = n(630388),
    C = n(823379),
    I = n(624138),
    x = n(317381),
    N = n(638880),
    v = n(122613),
    T = n(147865),
    S = n(778569),
    A = n(884338),
    b = n(403404),
    j = n(701488),
    Z = n(981631),
    R = n(388032),
    L = n(896219);
let P = (0, I.Mg)(a.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function y(e) {
    var t, n, a, I;
    let { applicationId: y, message: O } = e,
        { analyticsLocations: M } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK),
        k = (0, c.O)(),
        D = O.channel_id,
        B = (0, l.e7)([_.Z], () => _.Z.getChannel(D), [D]),
        U = null == B ? void 0 : B.guild_id,
        w = null != B && (B.isGuildVoice() || B.isPrivate()),
        F = (0, l.e7)([x.ZP], () => x.ZP.getSelfEmbeddedActivityForChannel(D)),
        G = (null == F ? void 0 : F.applicationId) === y,
        [V] = (0, h.Z)([y, null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : '']),
        H = (0, T.ZP)(null !== (a = null == V ? void 0 : V.maxParticipants) && void 0 !== a ? a : 0),
        [z] = (0, l.Wu)([x.ZP], () => (w ? x.ZP.getEmbeddedActivitiesForChannel(D).filter((e) => e.applicationId === y) : []), [y, D, w]),
        W = Array.from(null !== (I = null == z ? void 0 : z.userIds) && void 0 !== I ? I : []),
        K = (0, l.Wu)([g.default], () => W.map((e) => g.default.getUser(e)).filter(C.lm), [W]),
        Y = (0, S.Z)({
            applicationId: y,
            size: P,
            names: ['embedded_cover']
        }),
        X = f.Z.getWindowOpen(Z.KJ3.CHANNEL_CALL_POPOUT),
        Q = K.length > 0 ? R.intl.string(R.t.VJlc0d) : R.intl.string(R.t.I0v0Qk),
        q = async () => {
            if (w) {
                if (null != z && K.length > 0)
                    await (0, N.Z)({
                        applicationId: z.applicationId,
                        activityChannelId: D,
                        locationObject: k.location,
                        analyticsLocations: M
                    });
                else {
                    let e = B.isPrivate() && !p.Z.isCallActive(D),
                        t = async () =>
                            await (0, v.Z)({
                                targetApplicationId: y,
                                channelId: D,
                                analyticsLocations: M,
                                commandOrigin: m.bB.ACTIVITY_BOOKMARK_EMBED
                            });
                    e
                        ? s.Z.show({
                              title: R.intl.string(R.t['8ZRTsr']),
                              cancelText: R.intl.string(R.t['ETE/oK']),
                              confirmText: R.intl.string(R.t['cY+Ooa']),
                              onConfirm: () => t(),
                              body: R.intl.string(R.t.jheQxs)
                          })
                        : t();
                }
            } else
                (0, b.Z)({
                    guildId: U,
                    locationObject: k.location,
                    openInPopout: X,
                    initialSelectedApplicationId: y,
                    initialSlide: j.ag.SELECT_CHANNEL,
                    analyticsLocations: M
                });
        };
    return null != V && (0, E.yE)(V.flags, Z.udG.EMBEDDED)
        ? (0, i.jsx)(d.Gt, {
              value: M,
              children: (0, i.jsxs)('div', {
                  className: L.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: L.imgContainer,
                          children: (0, i.jsx)('img', {
                              className: L.img,
                              alt: V.name,
                              src: Y.url
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: L.content,
                          children: [
                              (0, i.jsx)(o.Heading, {
                                  className: L.heading,
                                  variant: 'heading-xl/semibold',
                                  children: V.name
                              }),
                              (0, i.jsx)(o.Heading, {
                                  className: L.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
                              }),
                              (0, i.jsx)(o.Heading, {
                                  className: L.learnMore,
                                  variant: 'heading-sm/medium',
                                  children: (0, i.jsx)(r.rU, {
                                      to: Z.Z5c.ACTIVITY_DETAILS(y),
                                      children: R.intl.string(R.t.hvVgAQ)
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: L.cta,
                                  children: [
                                      K.length > 0
                                          ? (0, i.jsx)('div', {
                                                className: L.avatars,
                                                children: (0, i.jsx)(A.Z, {
                                                    guildId: U,
                                                    users: K,
                                                    max: 4
                                                })
                                            })
                                          : (0, i.jsxs)('div', {
                                                className: L.maxParticipants,
                                                children: [
                                                    (0, i.jsx)(o.GroupIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: L.peopleIcon
                                                    }),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: H
                                                    })
                                                ]
                                            }),
                                      (0, i.jsx)('div', {
                                          className: L.buttonWrapper,
                                          children: (0, i.jsx)(o.Button, {
                                              onClick: q,
                                              className: L.button,
                                              color: o.ButtonColors.GREEN,
                                              disabled: G,
                                              children: Q
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
