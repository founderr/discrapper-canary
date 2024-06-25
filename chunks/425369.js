var s = n(735250),
  i = n(470079),
  l = n(266067),
  a = n(410575),
  r = n(765717),
  o = n(252618),
  c = n(108427),
  u = n(895991),
  d = n(993977),
  E = n(981631),
  h = n(689938),
  _ = n(799847);

function I() {
  return (0, s.jsxs)(l.rs, {
    children: [(0, s.jsx)(r.Z, {
      path: E.Z5c.APPLICATION_LIBRARY_SETTINGS,
      exact: !0,
      children: (0, s.jsxs)(a.Z, {
        page: E.ZY5.LIBRARY_SETTINGS,
        root: !0,
        children: [(0, s.jsx)(o.yY, {
          subsection: h.Z.Messages.SETTINGS
        }), (0, s.jsx)(d.Z, {})]
      })
    }), (0, s.jsx)(r.Z, {
      path: E.Z5c.APPLICATION_LIBRARY,
      children: (0, s.jsxs)(a.Z, {
        page: E.ZY5.LIBRARY,
        root: !0,
        children: [(0, s.jsx)(o.yY, {
          subsection: h.Z.Messages.APPLICATION_LIBRARY_MY_GAMES
        }), (0, s.jsx)(u.Z, {})]
      })
    })]
  })
}
t.Z = i.memo(function() {
  return i.useEffect(() => {
    (0, c.e)("application_library")
  }, []), (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsx)(o.yY, {
      location: h.Z.Messages.LIBRARY
    }), (0, s.jsx)(I, {})]
  })
})