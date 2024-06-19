a.d(t, {
  Z: function() {
    return v
  }
}), a(47120);
var n = a(735250),
  l = a(470079),
  r = a(442837),
  i = a(481060),
  s = a(835473),
  o = a(706454),
  u = a(366695),
  d = a(709054),
  c = a(689938),
  m = a(649328);

function v(e) {
  var t, a;
  let {
    clip: v
  } = e, [f] = (0, s.Z)([null !== (t = v.applicationId) && void 0 !== t ? t : ""]), p = (0, r.e7)([o.default], () => o.default.locale), h = l.useMemo(() => new Date(d.default.extractTimestamp(v.id)), [v.id]);
  return (0, n.jsxs)("div", {
    className: m.root,
    children: [(0, n.jsxs)("div", {
      className: m.nameSection,
      children: [(0, n.jsx)(u.Z, {
        game: f
      }), (0, n.jsx)(i.Text, {
        className: m.name,
        variant: "text-md/medium",
        color: "interactive-active",
        children: null !== (a = null == f ? void 0 : f.name) && void 0 !== a ? a : v.applicationName
      })]
    }), (0, n.jsxs)("div", {
      className: m.timeContainer,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(i.FormTitle, {
          className: m.timeTitle,
          children: c.Z.Messages.CLIPS_EDIT_DATE_TITLE
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleDateString(p, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })
        })]
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(i.FormTitle, {
          className: m.timeTitle,
          children: c.Z.Messages.CLIPS_EDIT_TIME_TITLE
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleTimeString(p, {
            hour: "numeric",
            minute: "numeric"
          })
        })]
      })]
    })]
  })
}