t.d(n, {
  Bm: function() {
return T;
  },
  L_: function() {
return R;
  },
  P7: function() {
return S;
  },
  ae: function() {
return L;
  }
});
var i = t(470079),
  a = t(392711),
  l = t.n(a),
  r = t(373793),
  o = t(25209),
  s = t(481060),
  c = t(2052),
  u = t(542094),
  d = t(513202),
  m = t(367907),
  p = t(812206),
  _ = t(691424),
  f = t(428595),
  C = t(364458),
  h = t(69580),
  A = t(499254),
  E = t(541099),
  N = t(827498),
  v = t(981631),
  x = t(689079),
  I = t(689938);
let g = {
...f.Z.RULES.commandMention,
parse: (e, n, t) => ({
  content: f.Z.RULES.commandMention.parse(e, n, t).content
})
  },
  P = l().pick((0, C.Z)([
f.Z.RULES,
{
  commandMention: g
},
(0, _.Z)({
  enableBuildOverrides: !1,
  enableEmojiClick: !1
})
  ]), [
'commandMention',
'customEmoji',
'em',
'emoji',
'emoticon',
'highlight',
'inlineCode',
'looseEm',
's',
'strong',
'text',
'timestamp',
'u',
'spoiler'
  ]),
  L = o.w4(P);

function S(e) {
  var n;
  let {
channel: t,
application: i,
location: a,
sectionName: l,
commandName: r
  } = e, o = (0, c.O)(), p = (0, u.Qv)({
applicationId: i.id,
channelId: t.id
  }), _ = (0, u.w1)({
applicationId: i.id,
embeddedActivitiesManager: d.Z,
channelId: t.id,
guildId: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
locationObject: o.location,
onActivityItemSelectedProp: e => {
  let {
    applicationId: n
  } = e, t = E.Z.entrypoint();
  A.y(N.ti.ACTIVITY), (0, m.yw)(v.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
    location: a,
    application_id: n,
    section_name: l,
    action: p,
    source: t
  });
}
  }), f = s.ButtonColors.BRAND, C = null != r ? r : I.Z.Messages.LAUNCH;
  return p === u.JS.JOIN ? (f = s.ButtonColors.GREEN, C = I.Z.Messages.JOIN_ACTIVITY) : p === u.JS.LEAVE && (f = s.ButtonColors.RED, C = I.Z.Messages.LEAVE), {
onActivityItemSelected: _,
activityAction: p,
buttonColor: f,
buttonText: C
  };
}

function T(e, n) {
  let t = E.Z.entrypoint(),
l = i.useMemo(() => (0, a.debounce)((e, n) => {
  (0, m.yw)(v.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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

function R(e) {
  var n, t, i, a, l;
  let {
applicationId: o,
userIndexState: s,
guildIndexState: c,
sectionName: u,
location: d
  } = e;
  if (o === x.bi.BUILT_IN || (null === (n = s.result) || void 0 === n ? void 0 : n.sections[o]) != null || (null === (t = c.result) || void 0 === t ? void 0 : t.sections[o]) != null)
return Promise.resolve(!0);
  let _ = E.Z.lastShownEntrypoint();
  (0, m.yw)(v.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: d,
application_id: o,
section_name: u,
source: _
  });
  let f = p.Z.getApplication(o),
C = r.Y.USER_INSTALL,
A = null == f ? void 0 : null === (l = f.integrationTypesConfig) || void 0 === l ? void 0 : null === (a = l[C]) || void 0 === a ? void 0 : null === (i = a.oauth2InstallParams) || void 0 === i ? void 0 : i.scopes;
  return new Promise(e => {
(0, h.openOAuth2Modal)({
  clientId: o,
  integrationType: C,
  scopes: A,
  callback: n => {
    let {
      location: t
    } = n;
    null != t && ((0, m.yw)(v.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: d,
      application_id: o,
      section_name: u,
      source: _
    }), e(!0));
  }
}, () => {
  e(!1);
});
  });
}