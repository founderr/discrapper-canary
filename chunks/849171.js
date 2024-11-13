n.d(t, {
    OV: function () {
        return L;
    },
    ZP: function () {
        return D;
    }
}),
    n(47120);
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(2052),
    m = n(317381),
    f = n(638880),
    p = n(413458),
    h = n(527805),
    g = n(716600),
    v = n(778569),
    S = n(563218),
    I = n(318891),
    _ = n(884338),
    x = n(719296),
    E = n(958185),
    Z = n(100527),
    C = n(906732),
    y = n(890280),
    T = n(835473),
    b = n(522474),
    A = n(314897),
    N = n(819640),
    w = n(594174),
    j = n(823379),
    P = n(5192),
    R = n(388032),
    M = n(456608);
((l = i || (i = {}))[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE');
let O = ['embedded_background'];
function L(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        r = null != t ? t : u.AvatarSizes.SIZE_32,
        s = (0, u.getAvatarSize)(r);
    return (0, a.jsx)(_.Z, {
        size: s,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = P.ZP.getName(n, i, e);
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: t,
                    color: u.TooltipColors.GREY,
                    children: (0, a.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, s),
                            alt: t,
                            className: M.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function k(e) {
    var t, n, i, l;
    let { participants: s, application: g, channel: v, width: S } = e;
    let I = (i = S) > 400 ? 2 : i > 300 ? 1 : 0;
    let [_] = (l = S) > 400 ? [u.AvatarSizes.SIZE_56, 56] : l > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24],
        x = (0, c.Wu)([w.default, A.default], () =>
            Array.from(s)
                .map((e) => ((0, p.J)(e, A.default) ? null : w.default.getUser(e.userId)))
                .filter(j.lm)
        ),
        E = (0, c.e7)([m.ZP], () => m.ZP.getEmbeddedActivitiesForChannel(v.id).find((e) => e.applicationId === g.id)),
        { analyticsLocations: Z } = (0, C.ZP)(),
        T = (0, d.O)(),
        b = P.ZP.getName(v.getGuildId(), v.id, null == x ? void 0 : x[0]),
        N =
            (0, h.s5)({
                userId: null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: v.id,
                application: g
            }) === h.Fw.CAN_JOIN,
        O = null !== (n = v.getGuildId()) && void 0 !== n ? n : void 0,
        k = r.useId(),
        D = v.id,
        U = g.id,
        { submitting: V } = (0, y.Z)({
            applicationId: U,
            channelId: D,
            launchingComponentId: k
        });
    return (0, a.jsxs)('div', {
        className: M.splash,
        children: [
            (0, a.jsx)(L, {
                avatarSize: _,
                guildId: O,
                channelId: v.id,
                users: x
            }),
            (0, a.jsx)(u.Text, {
                className: o()(M.subheader, {
                    [M.small]: 0 === I,
                    [M.medium]: 1 === I
                }),
                variant: 'text-sm/normal',
                children:
                    x.length > 1
                        ? R.intl.formatToPlainString(R.t.cpe6CA, {
                              username: b,
                              count: x.length - 1
                          })
                        : R.intl.formatToPlainString(R.t['7Uuia2'], { username: b })
            }),
            (0, a.jsx)(u.Text, {
                className: o()(M.header, {
                    [M.small]: 0 === I,
                    [M.medium]: 1 === I
                }),
                variant: 'text-sm/normal',
                children: g.name
            }),
            (0, a.jsx)('div', {
                className: M.buttons,
                children: N
                    ? (0, a.jsx)(u.Button, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null != E))
                                  (0, f.Z)({
                                      applicationId: E.applicationId,
                                      activityChannelId: v.id,
                                      locationObject: T.location,
                                      analyticsLocations: Z,
                                      componentId: k
                                  });
                          },
                          submitting: V,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return u.Button.Sizes.LARGE;
                                  case 1:
                                      return u.Button.Sizes.MEDIUM;
                                  case 0:
                                      return u.Button.Sizes.SMALL;
                              }
                          })(I),
                          className: M.button,
                          color: u.Button.Colors.PRIMARY,
                          children: R.intl.string(R.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function D(e) {
    let { participant: t, width: n, selected: i, interactible: l, channel: s } = e,
        { analyticsLocations: o } = (0, C.ZP)(Z.Z.ACTIVITY_TILE),
        { id: u } = t,
        d = (0, g.Z)(),
        m = (null == d ? void 0 : d.channelId) === s.id && d.applicationId === u,
        [f] = (0, T.Z)([u]),
        { url: p } = (0, v.Z)({
            applicationId: u,
            names: O,
            size: 1024
        }),
        h = !i && m,
        _ = !m,
        y = !m && !i,
        A = (0, c.e7)([N.Z, b.Z], () =>
            (0, E.Z)({
                LayerStore: N.Z,
                PopoutWindowStore: b.Z
            })
        );
    return (
        r.useEffect(() => {
            if (h && null != d && !A) {
                let e = (0, x.Z)(d.channelId, d.applicationId);
                (0, I.jy)(e);
            }
        }, [h, d, A]),
        (0, a.jsx)(C.Gt, {
            value: o,
            children: (0, a.jsx)('div', {
                className: M.container,
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        h &&
                            (0, a.jsx)(S.Z, {
                                className: M.iframe,
                                embedId: (0, x.Z)(s.id, u)
                            }),
                        _ && null != f && null != p && '' !== p
                            ? (0, a.jsx)('img', {
                                  className: M.splashImage,
                                  alt: f.name,
                                  src: p
                              })
                            : null,
                        y &&
                            null != f &&
                            (0, a.jsx)(k, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        l || _ ? null : (0, a.jsx)('div', { className: M.clickShield })
                    ]
                })
            })
        })
    );
}
