n.d(t, {
  L: function() {
return r;
  }
});
var i = n(373793),
  a = n(367907),
  o = n(69580),
  l = n(812206),
  c = n(981631),
  d = n(689079);

function r(e) {
  var t, n, r, m, s;
  let {
applicationId: u,
userIndexState: p,
guildIndexState: _,
sectionName: E,
location: g,
source: C
  } = e;
  if (u === d.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[u]) != null || (null === (n = _.result) || void 0 === n ? void 0 : n.sections[u]) != null)
return Promise.resolve(!0);
  (0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: g,
application_id: u,
section_name: E,
source: C
  });
  let M = l.Z.getApplication(u),
I = i.Y.USER_INSTALL,
x = null == M ? void 0 : null === (s = M.integrationTypesConfig) || void 0 === s ? void 0 : null === (m = s[I]) || void 0 === m ? void 0 : null === (r = m.oauth2InstallParams) || void 0 === r ? void 0 : r.scopes;
  return new Promise(e => {
(0, o.openOAuth2Modal)({
  clientId: u,
  integrationType: I,
  scopes: x,
  callback: t => {
    let {
      location: n
    } = t;
    null != n ? ((0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: g,
      application_id: u,
      section_name: E,
      source: C
    }), e(!0)) : e(!1);
  }
}, () => {
  e(!1);
});
  });
}