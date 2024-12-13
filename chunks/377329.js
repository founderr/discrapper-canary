t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    s = t(471445),
    o = t(41776),
    d = t(592125),
    c = t(430824),
    u = t(594174),
    m = t(236373),
    x = t(230900),
    h = t(405613),
    g = t(460838),
    v = t(388032),
    j = t(959320);
function p(e) {
    var n, t, p;
    let { guildId: f, guildEvent: I, guildEventId: N, error: C } = e,
        E = i.useMemo(() => (0, m.Gb)(I, f), [I, f]),
        { channel_id: S, name: T, image: y, description: b } = E,
        Z = (0, r.e7)([d.Z], () => d.Z.getChannel(S), [S]),
        _ = (0, r.e7)([c.Z], () => c.Z.getGuild(f), [f]),
        R = (0, x.cS)(E),
        k = (0, r.e7)([u.default], () => (null != I.creatorId ? u.default.getUser(I.creatorId) : u.default.getCurrentUser()), [I.creatorId]),
        A = (0, r.e7)([o.Z], () => o.Z.isLurking(f), [f]),
        D = (0, s.KS)(Z, _);
    return (0, l.jsxs)('div', {
        className: j.content,
        children: [
            (0, l.jsx)(g.Z, {
                className: j.previewCard,
                guild: _,
                channel: Z,
                location: null != R ? R : void 0,
                creator: k,
                name: T,
                description: b,
                imageSource: ((t = (0, m.Gb)(I, f, N)), null == (p = y) && null == t.image ? null : null != p && /^data:/.test(p) ? p : (0, h.Z)(t)),
                isActive: !1,
                isUserLurking: A,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: E,
                eventPreview: E
            }),
            (0, l.jsxs)('div', {
                className: j.textContainer,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: 'heading-xl/semibold',
                        children: v.intl.string(v.t.yBsFEx)
                    }),
                    (0, l.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: j.subheader,
                        children:
                            null != location
                                ? v.intl.string(v.t.KDPFi4)
                                : v.intl.format(v.t.f55NX1, {
                                      channelName: null !== (n = null == Z ? void 0 : Z.name) && void 0 !== n ? n : '',
                                      channelHook: () => {
                                          var e;
                                          return (0, l.jsxs)('div', {
                                              className: j.channelName,
                                              children: [
                                                  null != D
                                                      ? (0, l.jsx)(D, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            width: 20,
                                                            height: 20,
                                                            className: j.icon
                                                        })
                                                      : (0, l.jsx)(a.LocationIcon, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            height: 18,
                                                            width: 18,
                                                            className: j.locationIcon
                                                        }),
                                                  null !== (e = null == Z ? void 0 : Z.name) && void 0 !== e ? e : R
                                              ]
                                          });
                                      }
                                  })
                    }),
                    null != C &&
                        (0, l.jsx)(a.Text, {
                            color: 'text-danger',
                            variant: 'text-xs/normal',
                            className: j.subheader,
                            children: C.getAnyErrorMessage()
                        })
                ]
            })
        ]
    });
}
