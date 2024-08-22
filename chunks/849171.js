n.d(t, {
    OV: function () {
        return k;
    },
    ZP: function () {
        return w;
    }
}),
    n(47120);
var i,
    a,
    s = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(442837),
    u = n(481060),
    d = n(2052),
    h = n(317381),
    p = n(638880),
    m = n(613611),
    _ = n(527805),
    f = n(716600),
    E = n(778569),
    g = n(563218),
    C = n(318891),
    I = n(884338),
    x = n(719296),
    T = n(958185),
    N = n(100527),
    v = n(906732),
    S = n(890280),
    Z = n(895924),
    A = n(835473),
    M = n(522474),
    b = n(314897),
    R = n(819640),
    L = n(594174),
    j = n(823379),
    P = n(5192),
    O = n(689938),
    y = n(305268);
((a = i || (i = {}))[(a.SMALL = 0)] = 'SMALL'), (a[(a.MEDIUM = 1)] = 'MEDIUM'), (a[(a.LARGE = 2)] = 'LARGE');
let D = ['embedded_background'];
function k(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: a } = e,
        l = null != t ? t : u.AvatarSizes.SIZE_32,
        r = (0, u.getAvatarSize)(l);
    return (0, s.jsx)(I.Z, {
        size: r,
        guildId: n,
        users: a,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = P.ZP.getName(n, i, e);
            return (0, s.jsx)(
                u.TooltipContainer,
                {
                    text: t,
                    color: u.TooltipColors.GREY,
                    children: (0, s.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, r),
                            alt: t,
                            className: y.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function U(e) {
    var t, n, i, a;
    let { participants: r, application: f, channel: E, width: g } = e;
    let C = (i = g) > 400 ? 2 : i > 300 ? 1 : 0;
    let [I] = (a = g) > 400 ? [u.AvatarSizes.SIZE_56, 56] : a > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24],
        x = (0, c.Wu)([L.default, b.default], () =>
            Array.from(r)
                .map((e) => ((0, m.J)(e, b.default) ? null : L.default.getUser(e.userId)))
                .filter(j.lm)
        ),
        T = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(E.id).find((e) => e.applicationId === f.id)),
        { analyticsLocations: N } = (0, v.ZP)(),
        A = (0, d.O)(),
        M = P.ZP.getName(E.getGuildId(), E.id, null == x ? void 0 : x[0]),
        R =
            (0, _.s5)({
                userId: null === (t = L.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: E.id,
                application: f
            }) === _.Fw.CAN_JOIN,
        D = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0,
        U = l.useId(),
        w = E.id,
        B = f.id,
        { submitting: H } = (0, S.Z)({
            applicationId: B,
            channelId: w,
            launchingComponentId: U
        });
    return (0, s.jsxs)('div', {
        className: y.splash,
        children: [
            (0, s.jsx)(k, {
                avatarSize: I,
                guildId: D,
                channelId: E.id,
                users: x
            }),
            (0, s.jsx)(u.Text, {
                className: o()(y.subheader, {
                    [y.small]: 0 === C,
                    [y.medium]: 1 === C
                }),
                variant: 'text-sm/normal',
                children:
                    x.length > 1
                        ? O.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                              username: M,
                              count: x.length - 1
                          })
                        : O.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: M })
            }),
            (0, s.jsx)(u.Text, {
                className: o()(y.header, {
                    [y.small]: 0 === C,
                    [y.medium]: 1 === C
                }),
                variant: 'text-sm/normal',
                children: f.name
            }),
            (0, s.jsx)('div', {
                className: y.buttons,
                children: R
                    ? (0, s.jsx)(u.Button, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null != T))
                                  (0, p.Z)({
                                      applicationId: T.applicationId,
                                      activityChannelId: E.id,
                                      locationObject: A.location,
                                      analyticsLocations: N,
                                      componentId: U,
                                      commandOrigin: Z.bB.VOICE_UI
                                  });
                          },
                          submitting: H,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return u.Button.Sizes.LARGE;
                                  case 1:
                                      return u.Button.Sizes.MEDIUM;
                                  case 0:
                                      return u.Button.Sizes.SMALL;
                              }
                          })(C),
                          className: y.button,
                          color: u.Button.Colors.PRIMARY,
                          children: O.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
                      })
                    : null
            })
        ]
    });
}
function w(e) {
    let { participant: t, width: n, selected: i, interactible: a, channel: r } = e,
        { analyticsLocations: o } = (0, v.ZP)(N.Z.ACTIVITY_TILE),
        { id: u } = t,
        d = (0, f.Z)(),
        h = (null == d ? void 0 : d.channelId) === r.id && d.applicationId === u,
        [p] = (0, A.Z)([u]),
        { url: m } = (0, E.Z)({
            applicationId: u,
            names: D,
            size: 1024
        }),
        _ = !i && h,
        I = !h,
        S = !h && !i,
        Z = (0, c.e7)([R.Z, M.Z], () =>
            (0, T.Z)({
                LayerStore: R.Z,
                PopoutWindowStore: M.Z
            })
        );
    return (
        l.useEffect(() => {
            if (_ && null != d && !Z) {
                let e = (0, x.Z)(d.channelId, d.applicationId);
                (0, C.jy)(e);
            }
        }, [_, d, Z]),
        (0, s.jsx)(v.Gt, {
            value: o,
            children: (0, s.jsx)('div', {
                className: y.container,
                children: (0, s.jsxs)(s.Fragment, {
                    children: [
                        _ &&
                            (0, s.jsx)(g.Z, {
                                className: y.iframe,
                                embedId: (0, x.Z)(r.id, u)
                            }),
                        I && null != p && null != m && '' !== m
                            ? (0, s.jsx)('img', {
                                  className: y.splashImage,
                                  alt: p.name,
                                  src: m
                              })
                            : null,
                        S &&
                            null != p &&
                            (0, s.jsx)(U, {
                                width: n,
                                channel: r,
                                participants: t.participants,
                                application: p
                            }),
                        a || I ? null : (0, s.jsx)('div', { className: y.clickShield })
                    ]
                })
            })
        })
    );
}
