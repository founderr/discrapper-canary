n.d(t, {
    Z: function () {
        return E;
    },
    d: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(468194),
    o = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(100527),
    v = n(906732),
    m = n(430824),
    h = n(594174),
    x = n(115130),
    g = n(566620),
    C = n(127255),
    p = n(880308),
    f = n(451576),
    _ = n(439934),
    I = n(701488),
    T = n(388032),
    N = n(175818);
let b = (0, s.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    j = (0, s.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    S = (0, s.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function E(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: s, onActivityItemVisible: c, scrollerRef: I } = e,
        [E, y] = a.useState(0),
        A = (0, C.Z)({
            guildId: n,
            enableFilter: !0
        }),
        Z = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        L = (0, o.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        { analyticsLocations: O } = (0, v.ZP)(u.Z.ACTIVITY_DIRECTORY),
        k = (0, f.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: M, filter: B } = (0, o.cj)([x.Z], () => ({
            filter: x.Z.getFilter(),
            isDeveloperActivityShelfEnabled: x.Z.getIsEnabled()
        }));
    if (
        (a.useEffect(() => {
            let e = I.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        if (null != e) e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                y(null !== (t = null === (e = I.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [I]),
        a.useEffect(() => {
            (k || null != n) &&
                (0, g.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, k]),
        (0, p.g)(),
        (null == L && !k) || null == Z)
    )
        return null;
    let R = A.length > 0;
    return (0, i.jsx)(v.Gt, {
        value: O,
        children: (0, i.jsxs)('div', {
            className: N.scrollContainer,
            children: [
                R
                    ? (0, i.jsx)('div', {
                          className: N.scrollBackgroundContainer,
                          style: { top: -E },
                          children: (0, i.jsx)('div', {
                              className: r()(N.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return b + Math.ceil(e.length / 2) * (t ? S : j);
                                  })(A)
                              }
                          })
                      })
                    : null,
                (0, i.jsxs)(d.Scroller, {
                    ref: I,
                    className: N.scroller,
                    children: [
                        null,
                        R
                            ? (0, i.jsx)('div', {
                                  className: N.scrollSection,
                                  children: (0, i.jsx)('div', {
                                      className: r()(N.shelf),
                                      children: A.map((e) =>
                                          (0, i.jsx)(
                                              _.Z,
                                              {
                                                  large: 1 === A.length,
                                                  activityItem: e,
                                                  channel: t,
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: c,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      (t = e.application.id), s();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : M && B.length > 0
                              ? (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: N.filterError,
                                    children: T.intl.format(T.t.p0PRFB, { filter: B })
                                })
                              : (0, i.jsx)('div', {
                                    className: N.spinnerContainer,
                                    children: (0, i.jsx)(d.Spinner, {})
                                })
                    ]
                })
            ]
        })
    });
}
function y() {
    return (0, i.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: T.intl.format(T.t.fijcEB, { surveyURL: I.Es })
    });
}
