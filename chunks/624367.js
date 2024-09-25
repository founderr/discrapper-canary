n.d(t, {
    Z: function () {
        return w;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(735250);
n(470079);
var o = n(613828),
    s = n(442837),
    l = n(477690),
    u = n(481060),
    c = n(668781),
    d = n(2052),
    _ = n(100527),
    E = n(906732),
    f = n(895924),
    h = n(835473),
    p = n(522474),
    m = n(523746),
    I = n(592125),
    T = n(594174),
    g = n(630388),
    S = n(823379),
    A = n(624138),
    v = n(317381),
    N = n(638880),
    O = n(122613),
    R = n(147865),
    C = n(778569),
    y = n(884338),
    b = n(403404),
    L = n(701488),
    D = n(981631),
    M = n(689938),
    P = n(896219);
let U = (0, A.Mg)(l.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function w(e) {
    var t, n, r, i;
    let { applicationId: l, message: A } = e,
        { analyticsLocations: w } = (0, E.ZP)(_.Z.ACTIVITY_BOOKMARK),
        x = (0, d.O)(),
        G = A.channel_id,
        k = (0, s.e7)([I.Z], () => I.Z.getChannel(G), [G]),
        B = null == k ? void 0 : k.guild_id,
        F = null != k && (k.isGuildVoice() || k.isPrivate()),
        Z = (0, s.e7)([v.ZP], () => v.ZP.getSelfEmbeddedActivityForChannel(G)),
        V = (null == Z ? void 0 : Z.applicationId) === l,
        [H] = (0, h.Z)([l, null !== (n = null == Z ? void 0 : Z.applicationId) && void 0 !== n ? n : '']),
        Y = (0, R.ZP)(null !== (r = null == H ? void 0 : H.maxParticipants) && void 0 !== r ? r : 0),
        [j] = (0, s.Wu)([v.ZP], () => (F ? v.ZP.getEmbeddedActivitiesForChannel(G).filter((e) => e.applicationId === l) : []), [l, G, F]),
        W = Array.from(null !== (i = null == j ? void 0 : j.userIds) && void 0 !== i ? i : []),
        K = (0, s.Wu)([T.default], () => W.map((e) => T.default.getUser(e)).filter(S.lm), [W]),
        z = (0, C.Z)({
            applicationId: l,
            size: U,
            names: ['embedded_cover']
        }),
        q = p.Z.getWindowOpen(D.KJ3.CHANNEL_CALL_POPOUT),
        Q = K.length > 0 ? M.Z.Messages.JOIN : M.Z.Messages.START,
        X = async () => {
            if (F) {
                if (null != j && K.length > 0)
                    await (0, N.Z)({
                        applicationId: j.applicationId,
                        activityChannelId: G,
                        locationObject: x.location,
                        analyticsLocations: w,
                        commandOrigin: f.bB.ACTIVITY_BOOKMARK_EMBED
                    });
                else {
                    let e = k.isPrivate() && !m.Z.isCallActive(G),
                        t = async () =>
                            await (0, O.Z)({
                                targetApplicationId: l,
                                channelId: G,
                                analyticsLocations: w,
                                commandOrigin: f.bB.ACTIVITY_BOOKMARK_EMBED
                            });
                    e
                        ? c.Z.show({
                              title: M.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                              cancelText: M.Z.Messages.CANCEL,
                              confirmText: M.Z.Messages.CONFIRM,
                              onConfirm: () => t(),
                              body: M.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
                          })
                        : t();
                }
            } else
                (0, b.Z)({
                    guildId: B,
                    locationObject: x.location,
                    openInPopout: q,
                    initialSelectedApplicationId: l,
                    initialSlide: L.ag.SELECT_CHANNEL,
                    analyticsLocations: w
                });
        };
    return null != H && (0, g.yE)(H.flags, D.udG.EMBEDDED)
        ? (0, a.jsx)(E.Gt, {
              value: w,
              children: (0, a.jsxs)('div', {
                  className: P.container,
                  children: [
                      (0, a.jsx)('div', {
                          className: P.imgContainer,
                          children: (0, a.jsx)('img', {
                              className: P.img,
                              alt: H.name,
                              src: z.url
                          })
                      }),
                      (0, a.jsxs)('div', {
                          className: P.content,
                          children: [
                              (0, a.jsx)(u.Heading, {
                                  className: P.heading,
                                  variant: 'heading-xl/semibold',
                                  children: H.name
                              }),
                              (0, a.jsx)(u.Heading, {
                                  className: P.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (t = H.description) || void 0 === t ? void 0 : t.trim()
                              }),
                              (0, a.jsx)(u.Heading, {
                                  className: P.learnMore,
                                  variant: 'heading-sm/medium',
                                  children: (0, a.jsx)(o.rU, {
                                      to: D.Z5c.ACTIVITY_DETAILS(l),
                                      children: M.Z.Messages.LEARN_MORE
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: P.cta,
                                  children: [
                                      K.length > 0
                                          ? (0, a.jsx)('div', {
                                                className: P.avatars,
                                                children: (0, a.jsx)(y.Z, {
                                                    guildId: B,
                                                    users: K,
                                                    max: 4
                                                })
                                            })
                                          : (0, a.jsxs)('div', {
                                                className: P.maxParticipants,
                                                children: [
                                                    (0, a.jsx)(u.GroupIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: P.peopleIcon
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: Y
                                                    })
                                                ]
                                            }),
                                      (0, a.jsx)('div', {
                                          className: P.buttonWrapper,
                                          children: (0, a.jsx)(u.Button, {
                                              onClick: X,
                                              className: P.button,
                                              color: u.ButtonColors.GREEN,
                                              disabled: V,
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
