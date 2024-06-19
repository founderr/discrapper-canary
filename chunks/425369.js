var i = n(735250),
  s = n(470079),
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
  return (0, i.jsxs)(l.rs, {
    children: [(0, i.jsx)(r.Z, {
      path: E.Z5c.APPLICATION_LIBRARY_SETTINGS,
      exact: !0,
      children: (0, i.jsxs)(a.Z, {
        page: E.ZY5.LIBRARY_SETTINGS,
        root: !0,
        children: [(0, i.jsx)(o.yY, {
          subsection: h.Z.Messages.SETTINGS
        }), (0, i.jsx)(d.Z, {})]
      })
    }), (0, i.jsx)(r.Z, {
      path: E.Z5c.APPLICATION_LIBRARY,
      children: (0, i.jsxs)(a.Z, {
        page: E.ZY5.LIBRARY,
        root: !0,
        children: [(0, i.jsx)(o.yY, {
          subsection: h.Z.Messages.APPLICATION_LIBRARY_MY_GAMES
        }), (0, i.jsx)(u.Z, {})]
      })
    })]
  })
}
t.Z = s.memo(function() {
  return s.useEffect(() => {
    (0, c.e)("application_library")
  }, []), (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(o.yY, {
      location: h.Z.Messages.LIBRARY
    }), (0, i.jsx)(I, {})]
  })
})