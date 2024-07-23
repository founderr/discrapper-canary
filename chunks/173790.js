t.d(n, {
  Z: function() {
return x;
  }
});
var i = t(735250),
  l = t(470079),
  a = t(442837),
  r = t(218061),
  s = t(481060),
  o = t(361213),
  c = t(778569),
  u = t(213459),
  d = t(835473),
  m = t(541099),
  p = t(827498),
  _ = t(783097),
  E = t(753972),
  A = t(387658),
  h = t(536650),
  f = t(675993),
  N = t(689079),
  C = t(689938),
  v = t(254044),
  I = t(413097);

function x(e) {
  var n;
  let {
channel: t,
application: o,
sectionName: c,
installOnDemand: x
  } = e, T = (0, a.e7)([m.Z], () => m.Z.entrypoint()), S = null !== (n = (0, d.q)(o.id === N.bi.BUILT_IN ? null : o.id)) && void 0 !== n ? n : o, L = (0, _.ye)({
application: S
  }) ? P : f.Z, g = l.useRef(null), {
iconURL: R,
name: M
  } = l.useMemo(() => (0, _.sl)(S, {
fakeAppIconURL: I,
size: 84
  }), [S]);
  return l.useEffect(() => {
x ? u.ZP.queryInstallOnDemandApp(S.id, t.id) : u.ZP.maybeQueryForInstallLessApps(S.id, t.id);
  }, [
S.id,
t.id,
x
  ]), (0, i.jsxs)(s.ScrollerNone, {
className: v.container,
fade: !0,
ref: g,
role: 'region',
'aria-label': C.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format({
  applicationName: M
}),
children: [
  (0, i.jsx)(h.Z, {
    name: M,
    iconURL: R,
    scrollerRef: g
  }),
  null != R && (0, i.jsx)(E.Z, {
    src: R,
    className: v.appIcon
  }),
  (0, i.jsx)(r.Z, {
    size: 54
  }),
  (0, i.jsx)(L, {
    channel: t,
    application: S,
    sectionName: c
  }),
  T === p._b.TEXT ? (0, i.jsx)(A.Z, {
    channel: t,
    application: S,
    sectionName: c,
    installOnDemand: x
  }) : null
]
  });
}

function P(e) {
  let {
channel: n,
application: t,
sectionName: l
  } = e, a = (0, c.Z)({
applicationId: t.id,
size: 2048,
names: ['embedded_cover']
  }), r = (0, _.yJ)(t), s = null != r && null != r.activity_preview_video_asset_id ? (0, o.Z)(t.id, r.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(f.Z, {
channel: n,
application: t,
imageCoverUrl: a.url,
videoUrl: s,
sectionName: l
  });
}