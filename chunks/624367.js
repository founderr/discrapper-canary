n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120),
    n(789020);
var i = n(200651);
n(192379);
var a = n(568611),
    s = n(442837),
    r = n(477690),
    l = n(481060),
    o = n(668781),
    c = n(2052),
    u = n(100527),
    d = n(906732),
    _ = n(895924),
    E = n(835473),
    I = n(522474),
    m = n(523746),
    T = n(592125),
    f = n(594174),
    h = n(630388),
    N = n(823379),
    p = n(624138),
    C = n(317381),
    g = n(638880),
    S = n(122613),
    A = n(147865),
    x = n(778569),
    R = n(884338),
    v = n(403404),
    O = n(701488),
    M = n(981631),
    L = n(689938),
    Z = n(896219);
let b = (0, p.Mg)(r.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function P(e) {
    var t, n, r, p;
    let { applicationId: P, message: D } = e,
        { analyticsLocations: j } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK),
        U = (0, c.O)(),
        y = D.channel_id,
        B = (0, s.e7)([T.Z], () => T.Z.getChannel(y), [y]),
        k = null == B ? void 0 : B.guild_id,
        G = null != B && (B.isGuildVoice() || B.isPrivate()),
        F = (0, s.e7)([C.ZP], () => C.ZP.getSelfEmbeddedActivityForChannel(y)),
        w = (null == F ? void 0 : F.applicationId) === P,
        [V] = (0, E.Z)([P, null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : '']),
        H = (0, A.ZP)(null !== (r = null == V ? void 0 : V.maxParticipants) && void 0 !== r ? r : 0),
        [Y] = (0, s.Wu)([C.ZP], () => (G ? C.ZP.getEmbeddedActivitiesForChannel(y).filter((e) => e.applicationId === P) : []), [P, y, G]),
        W = Array.from(null !== (p = null == Y ? void 0 : Y.userIds) && void 0 !== p ? p : []),
        K = (0, s.Wu)([f.default], () => W.map((e) => f.default.getUser(e)).filter(N.lm), [W]),
        z = (0, x.Z)({
            applicationId: P,
            size: b,
            names: ['embedded_cover']
        }),
        X = I.Z.getWindowOpen(M.KJ3.CHANNEL_CALL_POPOUT),
        Q = K.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START,
        q = async () => {
            if (G) {
                if (null != Y && K.length > 0)
                    await (0, g.Z)({
                        applicationId: Y.applicationId,
                        activityChannelId: y,
                        locationObject: U.location,
                        analyticsLocations: j
                    });
                else {
                    let e = B.isPrivate() && !m.Z.isCallActive(y),
                        t = async () =>
                            await (0, S.Z)({
                                targetApplicationId: P,
                                channelId: y,
                                analyticsLocations: j,
                                commandOrigin: _.bB.ACTIVITY_BOOKMARK_EMBED
                            });
                    e
                        ? o.Z.show({
                              title: L.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                              cancelText: L.Z.Messages.CANCEL,
                              confirmText: L.Z.Messages.CONFIRM,
                              onConfirm: () => t(),
                              body: L.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
                          })
                        : t();
                }
            } else
                (0, v.Z)({
                    guildId: k,
                    locationObject: U.location,
                    openInPopout: X,
                    initialSelectedApplicationId: P,
                    initialSlide: O.ag.SELECT_CHANNEL,
                    analyticsLocations: j
                });
        };
    return null != V && (0, h.yE)(V.flags, M.udG.EMBEDDED)
        ? (0, i.jsx)(d.Gt, {
              value: j,
              children: (0, i.jsxs)('div', {
                  className: Z.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: Z.imgContainer,
                          children: (0, i.jsx)('img', {
                              className: Z.img,
                              alt: V.name,
                              src: z.url
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: Z.content,
                          children: [
                              (0, i.jsx)(l.Heading, {
                                  className: Z.heading,
                                  variant: 'heading-xl/semibold',
                                  children: V.name
                              }),
                              (0, i.jsx)(l.Heading, {
                                  className: Z.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
                              }),
                              (0, i.jsx)(l.Heading, {
                                  className: Z.learnMore,
                                  variant: 'heading-sm/medium',
                                  children: (0, i.jsx)(a.rU, {
                                      to: M.Z5c.ACTIVITY_DETAILS(P),
                                      children: L.Z.Messages.LEARN_MORE
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.cta,
                                  children: [
                                      K.length > 0
                                          ? (0, i.jsx)('div', {
                                                className: Z.avatars,
                                                children: (0, i.jsx)(R.Z, {
                                                    guildId: k,
                                                    users: K,
                                                    max: 4
                                                })
                                            })
                                          : (0, i.jsxs)('div', {
                                                className: Z.maxParticipants,
                                                children: [
                                                    (0, i.jsx)(l.GroupIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: Z.peopleIcon
                                                    }),
                                                    (0, i.jsx)(l.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: H
                                                    })
                                                ]
                                            }),
                                      (0, i.jsx)('div', {
                                          className: Z.buttonWrapper,
                                          children: (0, i.jsx)(l.Button, {
                                              onClick: q,
                                              className: Z.button,
                                              color: l.ButtonColors.GREEN,
                                              disabled: w,
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
