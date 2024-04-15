"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
});
var a = l("735250"),
  u = l("470079"),
  n = l("481060"),
  d = l("906732"),
  s = l("702557"),
  r = l("171368"),
  i = l("314897"),
  o = l("246946"),
  f = l("626135"),
  c = l("981631"),
  E = l("228168"),
  m = l("689938");

function M(e) {
  let {
    user: t,
    guildId: l,
    context: M
  } = e, {
    id: S
  } = t, {
    loading: _,
    note: g
  } = (0, s.default)(S), I = !_ && null != g && g.length > 0, R = M === c.AppContext.POPOUT, C = u.useContext(f.AnalyticsContext), {
    analyticsLocations: A
  } = (0, d.default)();
  return S === i.default.getId() || o.default.hidePersonalInformation || R ? null : (0, a.jsx)(n.MenuItem, {
    id: "note",
    label: _ ? m.default.Messages.LOADING_NOTE : I ? m.default.Messages.EDIT_NOTE : m.default.Messages.ADD_NOTE,
    action: () => {
      (0, r.openUserProfileModal)({
        userId: t.id,
        section: E.UserProfileSections.USER_INFO,
        guildId: l,
        autoFocusNote: !0,
        sourceAnalyticsLocations: A,
        analyticsLocation: C.location
      })
    }
  })
}