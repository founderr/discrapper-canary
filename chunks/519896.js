t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return h;
        }
    });
var l = t(735250),
    i = t(470079),
    r = t(269210),
    o = t(752843),
    a = t(481060),
    s = t(757746),
    u = t(930155),
    c = t(889989),
    d = t(696906),
    p = t(73346),
    m = t(591759),
    v = t(886253),
    f = t(680005),
    I = t(938337);
function h(e) {
    var n;
    let { appId: t, subscriptionType: h, onClose: S, skuId: x, guildId: g, transitionState: T, onHeaderTitleClick: E } = e,
        { data: N } = (0, u.H)(x),
        { data: R } = (0, s.Z)(x),
        O = i.useMemo(() => {
            var e;
            return (null == R ? void 0 : R.thumbnail) != null && null !== (e = m.Z.toURLSafe((0, p._W)(t, R.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [t, null == R ? void 0 : R.thumbnail]),
        _ = i.useMemo(() => {
            let e = null == R ? void 0 : R.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.n)(t, e.icon)
                }));
        }, [t, null == R ? void 0 : R.benefits]),
        { openModal: Z, cannotOpenReason: C } = (0, d.ZP)({
            skuId: x,
            subscribeForGuild: null != g ? g : void 0
        });
    return null == R || null == N || 0 === N.length
        ? null
        : (0, l.jsx)(v.A, {
              appId: t,
              skuId: x,
              transitionState: T,
              onHeaderTitleClick: null != E ? E : S,
              onClose: S,
              footer: (0, l.jsx)(f.p, {
                  onClick: Z,
                  appId: t,
                  subscriptionType: h,
                  skuId: x,
                  subscriptionPlan: N[0],
                  cannotOpenReason: C
              }),
              children: (0, l.jsx)(I.i, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != _
                          ? _.map((e) =>
                                (0, l.jsx)(
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
                  description: null !== (n = R.description) && void 0 !== n ? n : void 0,
                  imgSrc: O,
                  title: N[0].name,
                  tag: (0, l.jsx)(o.Z, { type: h }),
                  FallbackIcon: a.BadgeIcon
              })
          });
}
