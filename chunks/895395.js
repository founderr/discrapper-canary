n.d(t, {
  Z: function() {
    return y
  },
  d: function() {
    return D
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
  h = n(566620),
  _ = n(127255),
  f = n(880308),
  T = n(451576),
  C = n(439934),
  E = n(701488),
  S = n(981631),
  j = n(689938),
  N = n(644620),
  M = n(497263);
let A = (0, r.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  Z = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  b = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function y(e) {
  let {
    channel: t,
    guildId: n,
    locationObject: l,
    onClose: r,
    onActivityItemVisible: c,
    scrollerRef: E
  } = e, [y, D] = a.useState(0), L = (0, _.Z)({
    guildId: n,
    enableFilter: !0,
    channel: t
  }), O = (0, o.e7)([v.default], () => v.default.getCurrentUser()), B = (0, o.e7)([p.Z], () => p.Z.getGuild(n), [n]), {
    analyticsLocations: V
  } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY), R = (0, T.Z)(null == t ? void 0 : t.id), k = (0, x.vp)(null == t ? void 0 : t.id, "ActivityShelfSlideActivityDirectory"), {
    isDeveloperActivityShelfEnabled: H,
    filter: F
  } = (0, o.cj)([I.Z], () => ({
    filter: I.Z.getFilter(),
    isDeveloperActivityShelfEnabled: I.Z.getIsEnabled()
  }));
  if (a.useEffect(() => {
      let e = E.current;
      if (null != e) return e.addEventListener("scroll", t, !1), () => {
        if (null != e) e.removeEventListener("scroll", t, !1)
      };

      function t() {
        var e, t;
        D(null !== (t = null === (e = E.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
      }
    }, [E]), a.useEffect(() => {
      (R || null != n) && (0, h.w1)({
        guildId: n,
        force: !0
      })
    }, [n, R]), (0, f.g)(), null == B && !R || null == O) return null;
  let P = L.length > 0;
  return (0, i.jsx)(g.Gt, {
    value: V,
    children: (0, i.jsxs)("div", {
      className: N.scrollContainer,
      children: [P ? (0, i.jsx)("div", {
        className: N.scrollBackgroundContainer,
        style: {
          top: -y
        },
        children: (0, i.jsx)("div", {
          className: s()(N.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length;
              return A + Math.ceil(e.length / 2) * (t ? b : Z)
            })(L)
          }
        })
      }) : null, (0, i.jsxs)(d.Scroller, {
        ref: E,
        className: N.scroller,
        children: [function() {
          if (k) {
            let e = j.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT,
              t = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)("div", {
                className: N.poster,
                children: [(0, i.jsx)("img", {
                  className: N.posterBackground,
                  src: M,
                  alt: e
                }), (0, i.jsx)("div", {
                  className: N.posterTextParent,
                  children: (0, i.jsx)(d.Text, {
                    className: s()((0, m.Q)(S.BRd.DARK), N.posterText),
                    variant: "display-sm",
                    style: {
                      fontSize: t
                    },
                    children: e
                  })
                })]
              }), (0, i.jsx)("div", {
                className: N.posterDivider
              })]
            })
          }
          return null
        }(), P ? (0, i.jsx)("div", {
          className: N.scrollSection,
          children: (0, i.jsx)("div", {
            className: s()(N.shelf),
            children: L.map(e => (0, i.jsx)(C.Z, {
              large: 1 === L.length,
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
        }) : H && F.length > 0 ? (0, i.jsx)(d.Text, {
          variant: "text-md/normal",
          className: N.filterError,
          children: j.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: F
          })
        }) : (0, i.jsx)("div", {
          className: N.spinnerContainer,
          children: (0, i.jsx)(d.Spinner, {})
        })]
      })]
    })
  })
}

function D() {
  return (0, i.jsx)(d.Text, {
    variant: "text-sm/normal",
    children: j.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: E.Es
    })
  })
}