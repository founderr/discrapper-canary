"use strict";
n.d(t, {
  x: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(245315),
  s = n(467679),
  o = n(368859),
  a = n(425577);

function l(e) {
  let t, {
    message: n,
    channel: l,
    user: u,
    compact: _,
    isRepliedMessage: c,
    hideIcon: d = !1,
    children: E
  } = e;
  return ((null == n ? void 0 : n.isSystemDM()) ? t = s.Z.Types.SYSTEM_DM : null != n && (0, o.Z)(n) ? t = (0, r.cp)(n) ? s.Z.Types.OFFICIAL : s.Z.Types.SERVER : (null == u ? void 0 : u.bot) ? t = s.Z.Types.BOT : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !c && (t = s.Z.Types.ORIGINAL_POSTER), null == t) ? null : (0, i.jsx)(s.Z, {
    className: _ ? a.botTagCompact : a.botTagCozy,
    type: t,
    verified: null == u ? void 0 : u.isVerifiedBot(),
    hideIcon: d,
    useRemSizes: !0,
    children: E
  })
}