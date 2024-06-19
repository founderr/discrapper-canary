l.d(n, {
  Z: function() {
    return y
  },
  d: function() {
    return b
  }
}), l(47120);
var t = l(735250),
  i = l(470079),
  a = l(120356),
  s = l.n(a),
  r = l(468194),
  o = l(442837),
  c = l(477690),
  d = l(481060),
  u = l(100527),
  g = l(906732),
  p = l(430824),
  m = l(594174),
  v = l(792125),
  I = l(867176),
  x = l(115130),
  E = l(566620),
  T = l(127255),
  h = l(880308),
  f = l(451576),
  C = l(439934),
  _ = l(701488),
  S = l(981631),
  j = l(689938),
  Z = l(644620),
  N = l(497263);
let M = (0, r.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  A = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  D = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function y(e) {
  let {
    channel: n,
    guildId: l,
    locationObject: a,
    onClose: r,
    onActivityItemVisible: c,
    scrollerRef: _
  } = e, [y, b] = i.useState(0), L = (0, T.Z)({
    guildId: l,
    enableFilter: !0,
    channel: n
  }), V = (0, o.e7)([m.default], () => m.default.getCurrentUser()), R = (0, o.e7)([p.Z], () => p.Z.getGuild(l), [l]), {
    analyticsLocations: O
  } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY), B = (0, f.Z)(null == n ? void 0 : n.id), H = (0, I.vp)(null == n ? void 0 : n.id, "ActivityShelfSlideActivityDirectory"), {
    isDeveloperActivityShelfEnabled: P,
    filter: F
  } = (0, o.cj)([x.Z], () => ({
    filter: x.Z.getFilter(),
    isDeveloperActivityShelfEnabled: x.Z.getIsEnabled()
  }));
  if (i.useEffect(() => {
      let e = _.current;
      if (null != e) return e.addEventListener("scroll", n, !1), () => {
        if (null != e) e.removeEventListener("scroll", n, !1)
      };

      function n() {
        var e, n;
        b(null !== (n = null === (e = _.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== n ? n : 0)
      }
    }, [_]), i.useEffect(() => {
      (B || null != l) && (0, E.w1)({
        guildId: l,
        force: !0
      })
    }, [l, B]), (0, h.g)(), null == R && !B || null == V) return null;
  let k = L.length > 0;
  return (0, t.jsx)(g.Gt, {
    value: O,
    children: (0, t.jsxs)("div", {
      className: Z.scrollContainer,
      children: [k ? (0, t.jsx)("div", {
        className: Z.scrollBackgroundContainer,
        style: {
          top: -y
        },
        children: (0, t.jsx)("div", {
          className: s()(Z.scrollTierBackground),
          style: {
            height: (e => {
              let n = 1 === e.length;
              return M + Math.ceil(e.length / 2) * (n ? D : A)
            })(L)
          }
        })
      }) : null, (0, t.jsxs)(d.Scroller, {
        ref: _,
        className: Z.scroller,
        children: [function() {
          if (H) {
            let e = j.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT,
              n = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
            return (0, t.jsxs)(t.Fragment, {
              children: [(0, t.jsxs)("div", {
                className: Z.poster,
                children: [(0, t.jsx)("img", {
                  className: Z.posterBackground,
                  src: N,
                  alt: e
                }), (0, t.jsx)("div", {
                  className: Z.posterTextParent,
                  children: (0, t.jsx)(d.Text, {
                    className: s()((0, v.Q)(S.BRd.DARK), Z.posterText),
                    variant: "display-sm",
                    style: {
                      fontSize: n
                    },
                    children: e
                  })
                })]
              }), (0, t.jsx)("div", {
                className: Z.posterDivider
              })]
            })
          }
          return null
        }(), k ? (0, t.jsx)("div", {
          className: Z.scrollSection,
          children: (0, t.jsx)("div", {
            className: s()(Z.shelf),
            children: L.map(e => (0, t.jsx)(C.Z, {
              large: 1 === L.length,
              activityItem: e,
              channel: n,
              guildId: l,
              locationObject: a,
              onActivityItemVisible: c,
              onActivityItemSelected: () => {
                var n;
                n = e.application.id, r()
              }
            }, "activity-shelf-item-".concat(e.application.id)))
          })
        }) : P && F.length > 0 ? (0, t.jsx)(d.Text, {
          variant: "text-md/normal",
          className: Z.filterError,
          children: j.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: F
          })
        }) : (0, t.jsx)("div", {
          className: Z.spinnerContainer,
          children: (0, t.jsx)(d.Spinner, {})
        })]
      })]
    })
  })
}

function b() {
  return (0, t.jsx)(d.Text, {
    variant: "text-sm/normal",
    children: j.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: _.Es
    })
  })
}