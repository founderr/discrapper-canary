t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return p;
        }
    });
var l = t(200651),
    o = t(192379),
    i = t(269210),
    a = t(752843),
    r = t(481060),
    s = t(757746),
    c = t(930155),
    d = t(889989),
    u = t(263519),
    m = t(73346),
    x = t(591759),
    h = t(886253),
    v = t(680005),
    f = t(938337);
function p(e) {
    var n, t;
    let { appId: p, subscriptionType: _, onClose: j, skuId: N, guildId: I, transitionState: S, onHeaderTitleClick: C } = e,
        { data: b } = (0, c.H)(N),
        B = b[0],
        { data: T } = (0, s.Z)(N),
        g = o.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null && null !== (e = x.Z.toURLSafe((0, m._W)(p, T.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [p, null == T ? void 0 : T.thumbnail]),
        k = o.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.n)(p, e.icon)
                }));
        }, [p, null == T ? void 0 : T.benefits]),
        { openModal: R, subscriptionPurchaseButtonState: E } = (0, u.Z)({
            skuId: N,
            initialSubscribeForGuild: null != I ? I : void 0
        });
    return null == T
        ? null
        : (0, l.jsx)(h.A, {
              appId: p,
              skuId: N,
              transitionState: S,
              onHeaderTitleClick: null != C ? C : j,
              onClose: j,
              footer: (0, l.jsx)(v.pV, {
                  onClick: R,
                  appId: p,
                  subscriptionType: _,
                  skuId: N,
                  subscriptionPlan: B,
                  state: E
              }),
              children: (0, l.jsx)(f.i, {
                  appId: p,
                  skuId: N,
                  benefits:
                      null != k
                          ? k.map((e) =>
                                (0, l.jsx)(
                                    i.Gm,
                                    {
                                        header: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (n = T.description) && void 0 !== n ? n : void 0,
                  imgSrc: g,
                  title: null !== (t = null == B ? void 0 : B.name) && void 0 !== t ? t : T.summary,
                  tag: (0, l.jsx)(a.Z, { type: _ }),
                  FallbackIcon: r.BadgeIcon
              })
          });
}
