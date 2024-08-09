n.d(t, {
  L: function() {
return d;
  }
});
var i = n(373793),
  o = n(367907),
  a = n(69580),
  l = n(812206),
  r = n(981631),
  c = n(689079);

function d(e) {
  var t, n, d, s, u;
  let {
applicationId: m,
userIndexState: p,
guildIndexState: _,
sectionName: E,
location: g,
source: x
  } = e;
  if (m === c.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[m]) != null || (null === (n = _.result) || void 0 === n ? void 0 : n.sections[m]) != null)
return Promise.resolve(!0);
  (0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: g,
application_id: m,
section_name: E,
source: x
  });
  let h = l.Z.getApplication(m),
f = i.Y.USER_INSTALL,
M = null == h ? void 0 : null === (u = h.integrationTypesConfig) || void 0 === u ? void 0 : null === (s = u[f]) || void 0 === s ? void 0 : null === (d = s.oauth2InstallParams) || void 0 === d ? void 0 : d.scopes;
  return new Promise(e => {
(0, a.openOAuth2Modal)({
  clientId: m,
  integrationType: f,
  scopes: M,
  callback: t => {
    let {
      location: n
    } = t;
    null != n ? ((0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: g,
      application_id: m,
      section_name: E,
      source: x
    }), e(!0)) : e(!1);
  }
}, () => {
  e(!1);
});
  });
}