n.d(t, {
    Z: function () {
        return L;
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
    d = n(100527),
    u = n(906732),
    m = n(895924),
    h = n(835473),
    f = n(522474),
    p = n(523746),
    g = n(592125),
    _ = n(594174),
    C = n(630388),
    E = n(823379),
    I = n(624138),
    x = n(317381),
    v = n(638880),
    N = n(122613),
    T = n(147865),
    S = n(778569),
    b = n(884338),
    A = n(403404),
    j = n(701488),
    Z = n(981631),
    R = n(388032),
    P = n(896219);
let y = (0, I.Mg)(a.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function L(e) {
    var t, n, a, I;
    let { applicationId: L, message: O } = e,
        { analyticsLocations: M } = (0, u.ZP)(d.Z.ACTIVITY_BOOKMARK),
        k = (0, c.O)(),
        D = O.channel_id,
        B = (0, l.e7)([g.Z], () => g.Z.getChannel(D), [D]),
        w = null == B ? void 0 : B.guild_id,
        U = null != B && (B.isGuildVoice() || B.isPrivate()),
        F = (0, l.e7)([x.ZP], () => x.ZP.getSelfEmbeddedActivityForChannel(D)),
        G = (null == F ? void 0 : F.applicationId) === L,
        [V] = (0, h.Z)([L, null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : '']),
        H = (0, T.ZP)(null !== (a = null == V ? void 0 : V.maxParticipants) && void 0 !== a ? a : 0),
        [z] = (0, l.Wu)([x.ZP], () => (U ? x.ZP.getEmbeddedActivitiesForChannel(D).filter((e) => e.applicationId === L) : []), [L, D, U]),
        W = Array.from(null !== (I = null == z ? void 0 : z.userIds) && void 0 !== I ? I : []),
        K = (0, l.Wu)([_.default], () => W.map((e) => _.default.getUser(e)).filter(E.lm), [W]),
        Y = (0, S.Z)({
            applicationId: L,
            size: y,
            names: ['embedded_cover']
        }),
        X = f.Z.getWindowOpen(Z.KJ3.CHANNEL_CALL_POPOUT),
        Q = K.length > 0 ? R.intl.string(R.t.VJlc0d) : R.intl.string(R.t.I0v0Qk),
        q = async () => {
            if (U) {
                if (null != z && K.length > 0)
                    await (0, v.Z)({
                        applicationId: z.applicationId,
                        activityChannelId: D,
                        locationObject: k.location,
                        analyticsLocations: M
                    });
                else {
                    let e = B.isPrivate() && !p.Z.isCallActive(D),
                        t = async () =>
                            await (0, N.Z)({
                                targetApplicationId: L,
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
                (0, A.Z)({
                    guildId: w,
                    locationObject: k.location,
                    openInPopout: X,
                    initialSelectedApplicationId: L,
                    initialSlide: j.ag.SELECT_CHANNEL,
                    analyticsLocations: M
                });
        };
    return null != V && (0, C.yE)(V.flags, Z.udG.EMBEDDED)
        ? (0, i.jsx)(u.Gt, {
              value: M,
              children: (0, i.jsxs)('div', {
                  className: P.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: P.imgContainer,
                          children: (0, i.jsx)('img', {
                              className: P.img,
                              alt: V.name,
                              src: Y.url
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: P.content,
                          children: [
                              (0, i.jsx)(o.Heading, {
                                  className: P.heading,
                                  variant: 'heading-xl/semibold',
                                  children: V.name
                              }),
                              (0, i.jsx)(o.Heading, {
                                  className: P.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
                              }),
                              (0, i.jsx)(o.Heading, {
                                  className: P.learnMore,
                                  variant: 'heading-sm/medium',
                                  children: (0, i.jsx)(r.rU, {
                                      to: Z.Z5c.ACTIVITY_DETAILS(L),
                                      children: R.intl.string(R.t.hvVgAQ)
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: P.cta,
                                  children: [
                                      K.length > 0
                                          ? (0, i.jsx)('div', {
                                                className: P.avatars,
                                                children: (0, i.jsx)(b.Z, {
                                                    guildId: w,
                                                    users: K,
                                                    max: 4
                                                })
                                            })
                                          : (0, i.jsxs)('div', {
                                                className: P.maxParticipants,
                                                children: [
                                                    (0, i.jsx)(o.GroupIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: P.peopleIcon
                                                    }),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: H
                                                    })
                                                ]
                                            }),
                                      (0, i.jsx)('div', {
                                          className: P.buttonWrapper,
                                          children: (0, i.jsx)(o.Button, {
                                              onClick: q,
                                              className: P.button,
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
