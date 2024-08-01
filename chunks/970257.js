n.d(t, {
  a4: function() {
return o;
  },
  vc: function() {
return c;
  }
});
var i = n(592125),
  a = n(650774),
  s = n(496675),
  r = n(594174),
  l = n(981631);

function o(e) {
  return null != e && function(e) {
if (null == e)
  return !1;
let t = e.id,
  n = r.default.getCurrentUser();
return null != n && n.id !== t && !0 !== e.system && !0;
  }(e.author);
}

function c(e) {
  return null != e && o(e) && function(e) {
let t = i.Z.getChannel(e);
if (null == t)
  return !1;
if (t.type === l.d4z.DM || t.type === l.d4z.GROUP_DM)
  return !0;
if (s.Z.canWithPartialContext(l.Plq.MANAGE_MESSAGES, {
    channelId: e
  })) {
  let e = a.Z.getMemberCount(t.getGuildId());
  return null != e && e >= 50;
}
return !1;
  }(e.getChannelId());
}