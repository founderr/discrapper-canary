n.d(t, {
    Z: function () {
        return j;
    },
    d: function () {
        return D;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(468194),
    r = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(100527),
    v = n(906732),
    I = n(430824),
    _ = n(594174),
    T = n(115130),
    m = n(566620),
    C = n(127255),
    E = n(880308),
    x = n(451576),
    h = n(439934),
    g = n(701488),
    p = n(689938),
    f = n(175818);
let N = (0, o.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    S = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    A = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function j(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: o, onActivityItemVisible: c, scrollerRef: g } = e,
        [j, D] = a.useState(0),
        b = (0, C.Z)({
            guildId: n,
            enableFilter: !0
        }),
        Z = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        M = (0, r.e7)([I.Z], () => I.Z.getGuild(n), [n]),
        { analyticsLocations: y } = (0, v.ZP)(u.Z.ACTIVITY_DIRECTORY),
        L = (0, x.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: O, filter: B } = (0, r.cj)([T.Z], () => ({
            filter: T.Z.getFilter(),
            isDeveloperActivityShelfEnabled: T.Z.getIsEnabled()
        }));
    if (
        (a.useEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        if (null != e) e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                D(null !== (t = null === (e = g.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [g]),
        a.useEffect(() => {
            (L || null != n) &&
                (0, m.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, L]),
        (0, E.g)(),
        (null == M && !L) || null == Z)
    )
        return null;
    let R = b.length > 0;
    return (0, i.jsx)(v.Gt, {
        value: y,
        children: (0, i.jsxs)('div', {
            className: f.scrollContainer,
            children: [
                R
                    ? (0, i.jsx)('div', {
                          className: f.scrollBackgroundContainer,
                          style: { top: -j },
                          children: (0, i.jsx)('div', {
                              className: s()(f.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return N + Math.ceil(e.length / 2) * (t ? A : S);
                                  })(b)
                              }
                          })
                      })
                    : null,
                (0, i.jsxs)(d.Scroller, {
                    ref: g,
                    className: f.scroller,
                    children: [
                        null,
                        R
                            ? (0, i.jsx)('div', {
                                  className: f.scrollSection,
                                  children: (0, i.jsx)('div', {
                                      className: s()(f.shelf),
                                      children: b.map((e) =>
                                          (0, i.jsx)(
                                              h.Z,
                                              {
                                                  large: 1 === b.length,
                                                  activityItem: e,
                                                  channel: t,
                                                  guildId: n,
                                                  locationObject: l,
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
                            : O && B.length > 0
                              ? (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: f.filterError,
                                    children: p.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({ filter: B })
                                })
                              : (0, i.jsx)('div', {
                                    className: f.spinnerContainer,
                                    children: (0, i.jsx)(d.Spinner, {})
                                })
                    ]
                })
            ]
        })
    });
}
function D() {
    return (0, i.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: p.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({ surveyURL: g.Es })
    });
}
