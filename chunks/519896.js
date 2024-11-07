t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return v;
        }
    });
var o = t(200651),
    l = t(192379),
    i = t(269210),
    r = t(752843),
    s = t(481060),
    a = t(757746),
    c = t(930155),
    d = t(889989),
    u = t(696906),
    m = t(73346),
    x = t(591759),
    h = t(886253),
    f = t(680005),
    p = t(938337);
function v(e) {
    var n, t;
    let { appId: v, subscriptionType: _, onClose: j, skuId: I, guildId: N, transitionState: k, onHeaderTitleClick: g } = e,
        { data: C } = (0, c.H)(I),
        S = C[0],
        { data: T } = (0, a.Z)(I),
        R = l.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null && null !== (e = x.Z.toURLSafe((0, m._W)(v, T.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [v, null == T ? void 0 : T.thumbnail]),
        b = l.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.n)(v, e.icon)
                }));
        }, [v, null == T ? void 0 : T.benefits]),
        { openModal: E, cannotOpenReason: Z } = (0, u.ZP)({
            skuId: I,
            subscribeForGuild: null != N ? N : void 0
        });
    return null == T
        ? null
        : (0, o.jsx)(h.A, {
              appId: v,
              skuId: I,
              transitionState: k,
              onHeaderTitleClick: null != g ? g : j,
              onClose: j,
              footer: (0, o.jsx)(f.p, {
                  onClick: E,
                  appId: v,
                  subscriptionType: _,
                  skuId: I,
                  subscriptionPlan: S,
                  cannotOpenReason: Z
              }),
              children: (0, o.jsx)(p.i, {
                  appId: v,
                  skuId: I,
                  benefits:
                      null != b
                          ? b.map((e) =>
                                (0, o.jsx)(
                                    i.G,
                                    {
                                        name: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (n = T.description) && void 0 !== n ? n : void 0,
                  imgSrc: R,
                  title: null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : T.summary,
                  tag: (0, o.jsx)(r.Z, { type: _ }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}
