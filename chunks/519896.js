n.r(t),
    n.d(t, {
        SubscriptionDetailsModal: function () {
            return p;
        }
    });
var r = n(735250),
    i = n(470079),
    a = n(269210),
    o = n(752843),
    s = n(481060),
    l = n(757746),
    u = n(930155),
    c = n(889989),
    d = n(73346),
    _ = n(591759),
    E = n(886253),
    f = n(680005),
    h = n(938337);
function p(e) {
    var t;
    let { appId: n, groupListingId: p, subscriptionType: m, guildId: I, onClose: T, skuId: g, transitionState: S, onHeaderTitleClick: A } = e,
        { data: v } = (0, u.H)(g),
        { data: N } = (0, l.Z)(g),
        O = i.useMemo(() => {
            var e;
            return (null == N ? void 0 : N.thumbnail) != null && null !== (e = _.Z.toURLSafe((0, d._W)(n, N.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [n, null == N ? void 0 : N.thumbnail]),
        R = i.useMemo(() => {
            let e = null == N ? void 0 : N.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.n)(n, e.icon)
                }));
        }, [n, null == N ? void 0 : N.benefits]);
    return null == N || null == v || 0 === v.length
        ? null
        : (0, r.jsx)(E.A, {
              appId: n,
              skuId: g,
              transitionState: S,
              onHeaderTitleClick: null != A ? A : T,
              onClose: T,
              footer: (0, r.jsx)(f.p, {
                  appId: n,
                  groupListingId: p,
                  subscriptionType: m,
                  guildId: I,
                  skuId: g,
                  subscriptionPlan: v[0]
              }),
              children: (0, r.jsx)(h.i, {
                  appId: n,
                  skuId: g,
                  benefits:
                      null != R
                          ? R.map((e) =>
                                (0, r.jsx)(
                                    a.G,
                                    {
                                        name: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (t = N.description) && void 0 !== t ? t : void 0,
                  imgSrc: O,
                  title: v[0].name,
                  tag: (0, r.jsx)(o.Z, { type: m }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}
