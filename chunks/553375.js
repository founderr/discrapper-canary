n.d(t, {
  Z: function() {
return d;
  },
  n: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(26033),
  s = n(810568),
  o = n(168524),
  l = n(981631),
  u = n(689938);

function c(e) {
  let {
user: t,
activity: n,
entry: r
  } = e;
  if (null != r) {
var i;
return {
  applicationId: (0, a.dX)(r) ? null === (i = r.extra) || void 0 === i ? void 0 : i.application_id : void 0,
  sourceUserId: r.author_id
};
  }
  return null != n ? {
applicationId: n.type === l.IIU.PLAYING && null != n.application_id ? n.application_id : void 0,
sourceUserId: t.id
  } : {
applicationId: void 0,
sourceUserId: void 0
  };
}

function d(e) {
  let {
user: t,
activity: n,
entry: a
  } = e, {
applicationId: l,
sourceUserId: d
  } = c({
activity: n,
entry: a,
user: t
  }), _ = (0, o.Z)({
location: 'UserProfileActivityContextMenu',
source: s.m1.UserProfileCardContextMenu,
trackEntryPointImpression: !0,
applicationId: l,
sourceUserId: d
  });
  return null == _ ? null : (0, r.jsx)(i.MenuItem, {
id: 'game-profile',
label: u.Z.Messages.VIEW_GAME_PROFILE,
action: _
  });
}