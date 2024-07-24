t.d(n, {
  Bm: function() {
return N;
  },
  L_: function() {
return v;
  },
  P7: function() {
return E;
  }
});
var i = t(470079),
  a = t(392711),
  l = t(373793),
  r = t(481060),
  o = t(2052),
  s = t(542094),
  c = t(513202),
  u = t(367907),
  d = t(812206),
  m = t(69580),
  p = t(499254),
  _ = t(541099),
  f = t(827498),
  C = t(981631),
  h = t(689079),
  A = t(689938);

function E(e, n, t, i) {
  var a;
  let l = (0, o.O)(),
d = (0, s.Qv)({
  applicationId: n.id,
  channelId: e.id
}),
m = (0, s.w1)({
  applicationId: n.id,
  embeddedActivitiesManager: c.Z,
  channelId: e.id,
  guildId: null !== (a = e.getGuildId()) && void 0 !== a ? a : void 0,
  locationObject: l.location,
  onActivityItemSelectedProp: e => {
    let {
      applicationId: n
    } = e, a = _.Z.entrypoint();
    p.y(f.ti.ACTIVITY), (0, u.yw)(C.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
      location: t,
      application_id: n,
      section_name: i,
      action: d,
      source: a
    });
  }
}),
h = r.ButtonColors.BRAND,
E = A.Z.Messages.LAUNCH;
  return d === s.JS.JOIN ? (h = r.ButtonColors.GREEN, E = A.Z.Messages.JOIN_ACTIVITY) : d === s.JS.LEAVE && (h = r.ButtonColors.RED, E = A.Z.Messages.LEAVE), {
onActivityItemSelected: m,
activityAction: d,
buttonColor: h,
buttonText: E
  };
}

function N(e, n) {
  let t = _.Z.entrypoint(),
l = i.useMemo(() => (0, a.debounce)((e, n) => {
  (0, u.yw)(C.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
    type: e,
    source: n
  });
}, 400, {
  leading: !1,
  trailing: !0
}), []);
  i.useEffect(() => {
null != e && l(e, t);
  }, [
e,
n,
t,
l
  ]);
}

function v(e) {
  var n, t, i, a, r;
  let {
applicationId: o,
userIndexState: s,
guildIndexState: c,
sectionName: p,
location: f
  } = e;
  if (o === h.bi.BUILT_IN || (null === (n = s.result) || void 0 === n ? void 0 : n.sections[o]) != null || (null === (t = c.result) || void 0 === t ? void 0 : t.sections[o]) != null)
return Promise.resolve(!0);
  let A = _.Z.lastShownEntrypoint();
  (0, u.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: f,
application_id: o,
section_name: p,
source: A
  });
  let E = d.Z.getApplication(o),
N = l.Y.USER_INSTALL,
v = null == E ? void 0 : null === (r = E.integrationTypesConfig) || void 0 === r ? void 0 : null === (a = r[N]) || void 0 === a ? void 0 : null === (i = a.oauth2InstallParams) || void 0 === i ? void 0 : i.scopes;
  return new Promise(e => {
(0, m.openOAuth2Modal)({
  clientId: o,
  integrationType: N,
  scopes: v,
  callback: n => {
    let {
      location: t
    } = n;
    null != t && ((0, u.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: f,
      application_id: o,
      section_name: p,
      source: A
    }), e(!0));
  }
}, () => {
  e(!1);
});
  });
}