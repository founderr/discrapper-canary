t.d(n, {
  Z: function() {
return I;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(442837),
  r = t(218061),
  o = t(481060),
  s = t(361213),
  c = t(778569),
  u = t(213459),
  d = t(835473),
  m = t(541099),
  p = t(827498),
  _ = t(783097),
  f = t(753972),
  C = t(387658),
  h = t(536650),
  A = t(675993),
  E = t(689079),
  N = t(689938),
  v = t(132439),
  x = t(413097);

function I(e) {
  var n;
  let {
channel: t,
application: s,
sectionName: c,
installOnDemand: I
  } = e, S = (0, l.e7)([m.Z], () => m.Z.entrypoint()), P = null !== (n = (0, d.q)(s.id === E.bi.BUILT_IN ? null : s.id)) && void 0 !== n ? n : s, L = (0, _.ye)({
application: P
  }) ? g : A.Z, T = a.useRef(null), {
iconURL: b,
name: R
  } = a.useMemo(() => (0, _.sl)(P, {
fakeAppIconURL: x,
size: 84
  }), [P]);
  return a.useEffect(() => {
I ? u.ZP.queryInstallOnDemandApp(P.id, t.id) : u.ZP.maybeQueryForInstallLessApps(P.id, t.id);
  }, [
P.id,
t.id,
I
  ]), (0, i.jsxs)(o.ScrollerNone, {
className: v.container,
fade: !0,
ref: T,
role: 'region',
'aria-label': N.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format({
  applicationName: R
}),
children: [
  (0, i.jsx)(h.Z, {
    name: R,
    iconURL: b,
    scrollerRef: T
  }),
  null != b && (0, i.jsx)(f.Z, {
    src: b,
    className: v.appIcon
  }),
  (0, i.jsx)(r.Z, {
    size: 54
  }),
  (0, i.jsx)(L, {
    channel: t,
    application: P,
    sectionName: c
  }),
  S === p._b.TEXT ? (0, i.jsx)(C.Z, {
    channel: t,
    application: P,
    sectionName: c,
    installOnDemand: I
  }) : null
]
  });
}

function g(e) {
  let {
channel: n,
application: t,
sectionName: a
  } = e, l = (0, c.Z)({
applicationId: t.id,
size: 2048,
names: ['embedded_cover']
  }), r = (0, _.yJ)(t), o = null != r && null != r.activity_preview_video_asset_id ? (0, s.Z)(t.id, r.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(A.Z, {
channel: n,
application: t,
imageCoverUrl: l.url,
videoUrl: o,
sectionName: a
  });
}