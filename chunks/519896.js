n.r(t),
    n.d(t, {
        SubscriptionDetailsModal: function () {
            return g;
        }
    });
var i = n(200651),
    a = n(192379),
    r = n(269210),
    l = n(752843),
    o = n(481060),
    s = n(757746),
    c = n(930155),
    d = n(889989),
    u = n(696906),
    p = n(73346),
    m = n(591759),
    _ = n(886253),
    h = n(680005),
    f = n(938337);
function g(e) {
    var t, n;
    let { appId: g, subscriptionType: v, onClose: x, skuId: I, guildId: C, transitionState: N, onHeaderTitleClick: b } = e,
        { data: S } = (0, c.H)(I),
        j = S[0],
        { data: T } = (0, s.Z)(I),
        y = a.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null && null !== (e = m.Z.toURLSafe((0, p._W)(g, T.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [g, null == T ? void 0 : T.thumbnail]),
        E = a.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.n)(g, e.icon)
                }));
        }, [g, null == T ? void 0 : T.benefits]),
        { openModal: A, cannotOpenReason: P } = (0, u.ZP)({
            skuId: I,
            subscribeForGuild: null != C ? C : void 0
        });
    return null == T
        ? null
        : (0, i.jsx)(_.A, {
              appId: g,
              skuId: I,
              transitionState: N,
              onHeaderTitleClick: null != b ? b : x,
              onClose: x,
              footer: (0, i.jsx)(h.p, {
                  onClick: A,
                  appId: g,
                  subscriptionType: v,
                  skuId: I,
                  subscriptionPlan: j,
                  cannotOpenReason: P
              }),
              children: (0, i.jsx)(f.i, {
                  appId: g,
                  skuId: I,
                  benefits:
                      null != E
                          ? E.map((e) =>
                                (0, i.jsx)(
                                    r.G,
                                    {
                                        name: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (t = T.description) && void 0 !== t ? t : void 0,
                  imgSrc: y,
                  title: null !== (n = null == j ? void 0 : j.name) && void 0 !== n ? n : T.summary,
                  tag: (0, i.jsx)(l.Z, { type: v }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}
