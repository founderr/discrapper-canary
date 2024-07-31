t.d(n, {
  L: function() {
return d;
  }
});
var i = t(373793),
  l = t(367907),
  o = t(69580),
  a = t(812206),
  s = t(981631),
  r = t(689079);

function d(e) {
  var n, t, d, u, c;
  let {
applicationId: m,
userIndexState: h,
guildIndexState: I,
sectionName: E,
location: p,
source: C
  } = e;
  if (m === r.bi.BUILT_IN || (null === (n = h.result) || void 0 === n ? void 0 : n.sections[m]) != null || (null === (t = I.result) || void 0 === t ? void 0 : t.sections[m]) != null)
return Promise.resolve(!0);
  (0, l.yw)(s.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: p,
application_id: m,
section_name: E,
source: C
  });
  let x = a.Z.getApplication(m),
M = i.Y.USER_INSTALL,
g = null == x ? void 0 : null === (c = x.integrationTypesConfig) || void 0 === c ? void 0 : null === (u = c[M]) || void 0 === u ? void 0 : null === (d = u.oauth2InstallParams) || void 0 === d ? void 0 : d.scopes;
  return new Promise(e => {
(0, o.openOAuth2Modal)({
  clientId: m,
  integrationType: M,
  scopes: g,
  callback: n => {
    let {
      location: t
    } = n;
    null != t ? ((0, l.yw)(s.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: p,
      application_id: m,
      section_name: E,
      source: C
    }), e(!0)) : e(!1);
  }
}, () => {
  e(!1);
});
  });
}