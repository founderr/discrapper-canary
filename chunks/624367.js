n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(789020);
var i = n(735250);
n(470079);
var s = n(613828),
    a = n(442837),
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
    h = n(594174),
    N = n(630388),
    f = n(823379),
    C = n(624138),
    p = n(317381),
    g = n(638880),
    A = n(122613),
    S = n(147865),
    x = n(778569),
    R = n(884338),
    O = n(403404),
    M = n(701488),
    v = n(981631),
    L = n(689938),
    Z = n(896219);
let P = (0, C.Mg)(r.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function b(e) {
    var t, n, r, C;
    let { applicationId: b, message: D } = e,
        { analyticsLocations: j } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK),
        U = (0, c.O)(),
        y = D.channel_id,
        B = (0, a.e7)([T.Z], () => T.Z.getChannel(y), [y]),
        k = null == B ? void 0 : B.guild_id,
        F = null != B && (B.isGuildVoice() || B.isPrivate()),
        G = (0, a.e7)([p.ZP], () => p.ZP.getSelfEmbeddedActivityForChannel(y)),
        w = (null == G ? void 0 : G.applicationId) === b,
        [V] = (0, E.Z)([b, null !== (n = null == G ? void 0 : G.applicationId) && void 0 !== n ? n : '']),
        H = (0, S.ZP)(null !== (r = null == V ? void 0 : V.maxParticipants) && void 0 !== r ? r : 0),
        [Y] = (0, a.Wu)([p.ZP], () => (F ? p.ZP.getEmbeddedActivitiesForChannel(y).filter((e) => e.applicationId === b) : []), [b, y, F]),
        W = Array.from(null !== (C = null == Y ? void 0 : Y.userIds) && void 0 !== C ? C : []),
        K = (0, a.Wu)([h.default], () => W.map((e) => h.default.getUser(e)).filter(f.lm), [W]),
        z = (0, x.Z)({
            applicationId: b,
            size: P,
            names: ['embedded_cover']
        }),
        Q = I.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT),
        q = K.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START,
        X = async () => {
            if (F) {
                if (null != Y && K.length > 0)
                    await (0, g.Z)({
                        applicationId: Y.applicationId,
                        activityChannelId: y,
                        locationObject: U.location,
                        analyticsLocations: j,
                        commandOrigin: _.bB.ACTIVITY_BOOKMARK_EMBED
                    });
                else {
                    let e = B.isPrivate() && !m.Z.isCallActive(y),
                        t = async () =>
                            await (0, A.Z)({
                                targetApplicationId: b,
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
                (0, O.Z)({
                    guildId: k,
                    locationObject: U.location,
                    openInPopout: Q,
                    initialSelectedApplicationId: b,
                    initialSlide: M.ag.SELECT_CHANNEL,
                    analyticsLocations: j
                });
        };
    return null != V && (0, N.yE)(V.flags, v.udG.EMBEDDED)
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
                                  children: (0, i.jsx)(s.rU, {
                                      to: v.Z5c.ACTIVITY_DETAILS(b),
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
                                              onClick: X,
                                              className: Z.button,
                                              color: l.ButtonColors.GREEN,
                                              disabled: w,
                                              children: q
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
