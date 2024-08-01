t.d(n, {
  L: function() {
return u;
  }
});
var i = t(373793),
  l = t(367907),
  o = t(69580),
  a = t(812206),
  s = t(981631),
  r = t(689079);

function u(e) {
  var n, t, u, d, c;
  let {
applicationId: m,
userIndexState: h,
guildIndexState: E,
sectionName: I,
location: p,
source: C
  } = e;
  if (m === r.bi.BUILT_IN || (null === (n = h.result) || void 0 === n ? void 0 : n.sections[m]) != null || (null === (t = E.result) || void 0 === t ? void 0 : t.sections[m]) != null)
return Promise.resolve(!0);
  (0, l.yw)(s.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: p,
application_id: m,
section_name: I,
source: C
  });
  let M = a.Z.getApplication(m),
_ = i.Y.USER_INSTALL,
N = null == M ? void 0 : null === (c = M.integrationTypesConfig) || void 0 === c ? void 0 : null === (d = c[_]) || void 0 === d ? void 0 : null === (u = d.oauth2InstallParams) || void 0 === u ? void 0 : u.scopes;
  return new Promise(e => {
(0, o.openOAuth2Modal)({
  clientId: m,
  integrationType: _,
  scopes: N,
  callback: n => {
    let {
      location: t
    } = n;
    null != t ? ((0, l.yw)(s.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: p,
      application_id: m,
      section_name: I,
      source: C
    }), e(!0)) : e(!1);
  }
}, () => {
  e(!1);
});
  });
}