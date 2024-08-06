t.d(n, {
  Z: function() {
return u;
  }
});
var l = t(735250);
t(470079);
var r = t(481060),
  i = t(424602),
  a = t(397698),
  o = t(776862),
  s = t(701488),
  c = t(981631);

function u(e) {
  let {
channel: n,
guildId: u,
locationObject: d,
openInPopout: m,
initialSelectedApplicationId: f,
initialSlide: _ = s.ag.DIRECTORY,
enableSelectedTextChannelInvite: p = !1,
analyticsLocations: C,
opensAppLauncherModal: v = !1
  } = e, h = C.length > 0 ? C[C.length - 1] : 'open-activity-shelf', {
enabled: E
  } = i.m1.getCurrentConfig({
location: h
  }, {
autoTrackExposure: !1
  });
  if (v && E) {
null != n && (0, a.Z)({
  openInPopout: m,
  channel: n,
  analyticsLocation: h
});
return;
  }
  m && (0, o.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
  let x = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
  return (0, r.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  t.e('64714'),
  t.e('6495')
]).then(t.bind(t, 471840));
return t => (0, l.jsx)(e, {
  ...t,
  channel: n,
  guildId: u,
  locationObject: d,
  initialSlide: _,
  initialSelectedApplicationId: f,
  enableSelectedTextChannelInvite: p,
  analyticsLocations: C
});
  }, {
modalKey: s.AC,
contextKey: x
  });
}