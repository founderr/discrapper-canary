n.d(t, {
  Z: function() {
    return L
  },
  d: function() {
    return O
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(468194),
  o = n(442837),
  c = n(477690),
  d = n(481060),
  u = n(100527),
  g = n(906732),
  p = n(430824),
  v = n(594174),
  m = n(792125),
  x = n(867176),
  I = n(115130),
  f = n(566620),
  h = n(520599),
  _ = n(127255),
  T = n(880308),
  C = n(451576),
  E = n(439934),
  S = n(701488),
  j = n(981631),
  N = n(689938),
  M = n(644620),
  A = n(497263),
  b = n(932463);
let Z = (0, r.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  y = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  D = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function L(e) {
  let {
    channel: t,
    guildId: n,
    locationObject: l,
    onClose: r,
    onActivityItemVisible: c,
    scrollerRef: S
  } = e, [L, O] = a.useState(0), B = (0, _.Z)({
    guildId: n,
    enableFilter: !0,
    channel: t
  }), V = (0, o.e7)([v.default], () => v.default.getCurrentUser()), R = (0, o.e7)([p.Z], () => p.Z.getGuild(n), [n]), {
    analyticsLocations: k
  } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY), H = (0, C.Z)(null == t ? void 0 : t.id), P = (0, x.vp)(null == t ? void 0 : t.id, "ActivityShelfSlideActivityDirectory"), {
    enableAmazonMusicShelfPoster: F
  } = h.p.useExperiment({
    location: "ActivitiesShelf"
  }, {
    autoTrackExposure: !0
  }), {
    isDeveloperActivityShelfEnabled: U,
    filter: Y
  } = (0, o.cj)([I.Z], () => ({
    filter: I.Z.getFilter(),
    isDeveloperActivityShelfEnabled: I.Z.getIsEnabled()
  }));
  if (a.useEffect(() => {
      let e = S.current;
      if (null != e) return e.addEventListener("scroll", t, !1), () => {
        if (null != e) e.removeEventListener("scroll", t, !1)
      };

      function t() {
        var e, t;
        O(null !== (t = null === (e = S.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
      }
    }, [S]), a.useEffect(() => {
      (H || null != n) && (0, f.w1)({
        guildId: n,
        force: !0
      })
    }, [n, H]), (0, T.g)(), null == R && !H || null == V) return null;
  let w = B.length > 0;
  return (0, i.jsx)(g.Gt, {
    value: k,
    children: (0, i.jsxs)("div", {
      className: M.scrollContainer,
      children: [w ? (0, i.jsx)("div", {
        className: M.scrollBackgroundContainer,
        style: {
          top: -L
        },
        children: (0, i.jsx)("div", {
          className: s()(M.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length;
              return Z + Math.ceil(e.length / 2) * (t ? D : y)
            })(B)
          }
        })
      }) : null, (0, i.jsxs)(d.Scroller, {
        ref: S,
        className: M.scroller,
        children: [function() {
          if (F) {
            let e = N.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                className: M.poster,
                children: (0, i.jsx)("img", {
                  className: M.posterBackground,
                  src: b,
                  alt: e
                })
              }), (0, i.jsx)("div", {
                className: M.posterDivider
              })]
            })
          }
          if (P) {
            let e = N.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT,
              t = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)("div", {
                className: M.poster,
                children: [(0, i.jsx)("img", {
                  className: M.posterBackground,
                  src: A,
                  alt: e
                }), (0, i.jsx)("div", {
                  className: M.posterTextParent,
                  children: (0, i.jsx)(d.Text, {
                    className: s()((0, m.Q)(j.BRd.DARK), M.posterText),
                    variant: "display-sm",
                    style: {
                      fontSize: t
                    },
                    children: e
                  })
                })]
              }), (0, i.jsx)("div", {
                className: M.posterDivider
              })]
            })
          }
          return null
        }(), w ? (0, i.jsx)("div", {
          className: M.scrollSection,
          children: (0, i.jsx)("div", {
            className: s()(M.shelf),
            children: B.map(e => (0, i.jsx)(E.Z, {
              large: 1 === B.length,
              activityItem: e,
              channel: t,
              guildId: n,
              locationObject: l,
              onActivityItemVisible: c,
              onActivityItemSelected: () => {
                var t;
                t = e.application.id, r()
              }
            }, "activity-shelf-item-".concat(e.application.id)))
          })
        }) : U && Y.length > 0 ? (0, i.jsx)(d.Text, {
          variant: "text-md/normal",
          className: M.filterError,
          children: N.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: Y
          })
        }) : (0, i.jsx)("div", {
          className: M.spinnerContainer,
          children: (0, i.jsx)(d.Spinner, {})
        })]
      })]
    })
  })
}

function O() {
  return (0, i.jsx)(d.Text, {
    variant: "text-sm/normal",
    children: N.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: S.Es
    })
  })
}