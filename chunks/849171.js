n.d(t, {
    OV: function () {
        return O;
    },
    ZP: function () {
        return D;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(2052),
    h = n(317381),
    m = n(638880),
    p = n(613611),
    f = n(527805),
    g = n(716600),
    C = n(778569),
    x = n(563218),
    v = n(318891),
    _ = n(884338),
    I = n(719296),
    E = n(958185),
    b = n(100527),
    S = n(906732),
    Z = n(890280),
    T = n(835473),
    N = n(522474),
    j = n(314897),
    A = n(819640),
    y = n(594174),
    P = n(823379),
    M = n(5192),
    R = n(388032),
    L = n(456608);
((l = i || (i = {}))[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE');
let k = ['embedded_background'];
function O(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        s = null != t ? t : u.AvatarSizes.SIZE_32,
        a = (0, u.getAvatarSize)(s);
    return (0, r.jsx)(_.Z, {
        size: a,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = M.ZP.getName(n, i, e);
            return (0, r.jsx)(
                u.TooltipContainer,
                {
                    text: t,
                    color: u.TooltipColors.GREY,
                    children: (0, r.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, a),
                            alt: t,
                            className: L.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function w(e) {
    var t, n, i, l;
    let { participants: a, application: g, channel: C, width: x } = e;
    let v = (i = x) > 400 ? 2 : i > 300 ? 1 : 0;
    let [_] = (l = x) > 400 ? [u.AvatarSizes.SIZE_56, 56] : l > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24],
        I = (0, c.Wu)([y.default, j.default], () =>
            Array.from(a)
                .map((e) => ((0, p.J)(e, j.default) ? null : y.default.getUser(e.userId)))
                .filter(P.lm)
        ),
        E = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(C.id).find((e) => e.applicationId === g.id)),
        { analyticsLocations: b } = (0, S.ZP)(),
        T = (0, d.O)(),
        N = M.ZP.getName(C.getGuildId(), C.id, null == I ? void 0 : I[0]),
        A =
            (0, f.s5)({
                userId: null === (t = y.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: C.id,
                application: g
            }) === f.Fw.CAN_JOIN,
        k = null !== (n = C.getGuildId()) && void 0 !== n ? n : void 0,
        w = s.useId(),
        D = C.id,
        U = g.id,
        { submitting: B } = (0, Z.Z)({
            applicationId: U,
            channelId: D,
            launchingComponentId: w
        });
    return (0, r.jsxs)('div', {
        className: L.splash,
        children: [
            (0, r.jsx)(O, {
                avatarSize: _,
                guildId: k,
                channelId: C.id,
                users: I
            }),
            (0, r.jsx)(u.Text, {
                className: o()(L.subheader, {
                    [L.small]: 0 === v,
                    [L.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children:
                    I.length > 1
                        ? R.intl.formatToPlainString(R.t.cpe6CA, {
                              username: N,
                              count: I.length - 1
                          })
                        : R.intl.formatToPlainString(R.t['7Uuia2'], { username: N })
            }),
            (0, r.jsx)(u.Text, {
                className: o()(L.header, {
                    [L.small]: 0 === v,
                    [L.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children: g.name
            }),
            (0, r.jsx)('div', {
                className: L.buttons,
                children: A
                    ? (0, r.jsx)(u.Button, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null != E))
                                  (0, m.Z)({
                                      applicationId: E.applicationId,
                                      activityChannelId: C.id,
                                      locationObject: T.location,
                                      analyticsLocations: b,
                                      componentId: w
                                  });
                          },
                          submitting: B,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return u.Button.Sizes.LARGE;
                                  case 1:
                                      return u.Button.Sizes.MEDIUM;
                                  case 0:
                                      return u.Button.Sizes.SMALL;
                              }
                          })(v),
                          className: L.button,
                          color: u.Button.Colors.PRIMARY,
                          children: R.intl.string(R.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function D(e) {
    let { participant: t, width: n, selected: i, interactible: l, channel: a } = e,
        { analyticsLocations: o } = (0, S.ZP)(b.Z.ACTIVITY_TILE),
        { id: u } = t,
        d = (0, g.Z)(),
        h = (null == d ? void 0 : d.channelId) === a.id && d.applicationId === u,
        [m] = (0, T.Z)([u]),
        { url: p } = (0, C.Z)({
            applicationId: u,
            names: k,
            size: 1024
        }),
        f = !i && h,
        _ = !h,
        Z = !h && !i,
        j = (0, c.e7)([A.Z, N.Z], () =>
            (0, E.Z)({
                LayerStore: A.Z,
                PopoutWindowStore: N.Z
            })
        );
    return (
        s.useEffect(() => {
            if (f && null != d && !j) {
                let e = (0, I.Z)(d.channelId, d.applicationId);
                (0, v.jy)(e);
            }
        }, [f, d, j]),
        (0, r.jsx)(S.Gt, {
            value: o,
            children: (0, r.jsx)('div', {
                className: L.container,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        f &&
                            (0, r.jsx)(x.Z, {
                                className: L.iframe,
                                embedId: (0, I.Z)(a.id, u)
                            }),
                        _ && null != m && null != p && '' !== p
                            ? (0, r.jsx)('img', {
                                  className: L.splashImage,
                                  alt: m.name,
                                  src: p
                              })
                            : null,
                        Z &&
                            null != m &&
                            (0, r.jsx)(w, {
                                width: n,
                                channel: a,
                                participants: t.participants,
                                application: m
                            }),
                        l || _ ? null : (0, r.jsx)('div', { className: L.clickShield })
                    ]
                })
            })
        })
    );
}
