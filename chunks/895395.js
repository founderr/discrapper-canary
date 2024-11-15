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
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(468194),
    s = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(100527),
    v = n(906732),
    m = n(430824),
    x = n(594174),
    h = n(115130),
    g = n(566620),
    C = n(127255),
    p = n(880308),
    T = n(451576),
    _ = n(439934),
    I = n(701488),
    f = n(388032),
    N = n(745981);
let j = (0, o.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    b = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    S = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function E(e) {
    let { channel: t, guildId: n, locationObject: a, onClose: o, onActivityItemVisible: c, scrollerRef: I } = e,
        [E, y] = l.useState(0),
        A = (0, C.Z)({
            guildId: n,
            enableFilter: !0
        }),
        Z = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        O = (0, s.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        { analyticsLocations: L } = (0, v.ZP)(u.Z.ACTIVITY_DIRECTORY),
        k = (0, T.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: B, filter: M } = (0, s.cj)([h.Z], () => ({
            filter: h.Z.getFilter(),
            isDeveloperActivityShelfEnabled: h.Z.getIsEnabled()
        }));
    if (
        (l.useEffect(() => {
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
        l.useEffect(() => {
            (k || null != n) &&
                (0, g.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, k]),
        (0, p.g)(),
        (null == O && !k) || null == Z)
    )
        return null;
    let D = A.length > 0;
    return (0, i.jsx)(v.Gt, {
        value: L,
        children: (0, i.jsxs)('div', {
            className: N.scrollContainer,
            children: [
                D
                    ? (0, i.jsx)('div', {
                          className: N.scrollBackgroundContainer,
                          style: { top: -E },
                          children: (0, i.jsx)('div', {
                              className: r()(N.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return j + Math.ceil(e.length / 2) * (t ? S : b);
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
                        D
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
                                                  locationObject: a,
                                                  onActivityItemVisible: c,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      (t = e.application.id), o();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : B && M.length > 0
                              ? (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: N.filterError,
                                    children: f.intl.format(f.t.p0PRFB, { filter: M })
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
        children: f.intl.format(f.t.fijcEB, { surveyURL: I.Es })
    });
}
