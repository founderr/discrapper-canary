n.d(t, {
    Z: function () {
        return Z;
    },
    d: function () {
        return D;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    r = n(468194),
    o = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(100527),
    g = n(906732),
    m = n(703656),
    v = n(430824),
    p = n(594174),
    x = n(115130),
    I = n(566620),
    f = n(520599),
    _ = n(127255),
    C = n(880308),
    h = n(451576),
    T = n(439934),
    E = n(701488),
    S = n(981631),
    N = n(689938),
    b = n(876792),
    j = n(932463);
let A = (0, r.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    M = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    y = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function Z(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: r, onActivityItemVisible: c, scrollerRef: Z } = e,
        [D, L] = i.useState(0),
        O = (0, _.Z)({
            guildId: n,
            enableFilter: !0
        }),
        B = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        V = (0, o.e7)([v.Z], () => v.Z.getGuild(n), [n]),
        { analyticsLocations: R } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY),
        k = (0, h.Z)(null == t ? void 0 : t.id),
        { enableAmazonMusicShelfPoster: P } = f.p.useExperiment({ location: 'ActivitiesShelf' }, { autoTrackExposure: !0 }),
        { isDeveloperActivityShelfEnabled: H, filter: F } = (0, o.cj)([x.Z], () => ({
            filter: x.Z.getFilter(),
            isDeveloperActivityShelfEnabled: x.Z.getIsEnabled()
        }));
    if (
        (i.useEffect(() => {
            let e = Z.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        if (null != e) e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                L(null !== (t = null === (e = Z.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [Z]),
        i.useEffect(() => {
            (k || null != n) &&
                (0, I.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, k]),
        (0, C.g)(),
        (null == V && !k) || null == B)
    )
        return null;
    let w = O.length > 0;
    function U(e) {
        r();
    }
    return (0, a.jsx)(g.Gt, {
        value: R,
        children: (0, a.jsxs)('div', {
            className: b.scrollContainer,
            children: [
                w
                    ? (0, a.jsx)('div', {
                          className: b.scrollBackgroundContainer,
                          style: { top: -D },
                          children: (0, a.jsx)('div', {
                              className: s()(b.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return A + Math.ceil(e.length / 2) * (t ? y : M);
                                  })(O)
                              }
                          })
                      })
                    : null,
                (0, a.jsxs)(d.Scroller, {
                    ref: Z,
                    className: b.scroller,
                    children: [
                        (function () {
                            if (P) {
                                let e = N.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT;
                                return (0, a.jsxs)(d.Clickable, {
                                    className: b.posterClickable,
                                    'aria-label': e,
                                    onClick: () => {
                                        var e;
                                        (e = E.Fu), r(), (0, m.uL)(S.Z5c.ACTIVITY_DETAILS(E.Fu), { sourceLocationStack: R });
                                    },
                                    children: [
                                        (0, a.jsx)('div', {
                                            className: b.poster,
                                            children: (0, a.jsx)('img', {
                                                className: b.posterBackground,
                                                src: j,
                                                alt: e
                                            })
                                        }),
                                        (0, a.jsx)('div', { className: b.posterDivider })
                                    ]
                                });
                            }
                            return null;
                        })(),
                        w
                            ? (0, a.jsx)('div', {
                                  className: b.scrollSection,
                                  children: (0, a.jsx)('div', {
                                      className: s()(b.shelf),
                                      children: O.map((e) =>
                                          (0, a.jsx)(
                                              T.Z,
                                              {
                                                  large: 1 === O.length,
                                                  activityItem: e,
                                                  channel: t,
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: c,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      (t = e.application.id), r();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : H && F.length > 0
                              ? (0, a.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: b.filterError,
                                    children: N.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({ filter: F })
                                })
                              : (0, a.jsx)('div', {
                                    className: b.spinnerContainer,
                                    children: (0, a.jsx)(d.Spinner, {})
                                })
                    ]
                })
            ]
        })
    });
}
function D() {
    return (0, a.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: N.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({ surveyURL: E.Es })
    });
}
