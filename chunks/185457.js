"use strict";
i.r(t), i.d(t, {
  default: function() {
    return A
  }
});
var a = i("735250"),
  n = i("470079"),
  l = i("481060"),
  d = i("906732"),
  u = i("702557"),
  s = i("171368"),
  o = i("314897"),
  r = i("246946"),
  c = i("626135"),
  f = i("981631"),
  I = i("228168"),
  p = i("689938");

function A(e) {
  let {
    user: t,
    guildId: i,
    context: A
  } = e, {
    id: T
  } = t, {
    loading: S,
    note: _
  } = (0, u.default)(T), y = !S && null != _ && _.length > 0, v = A === f.AppContext.POPOUT, E = n.useContext(c.AnalyticsContext), {
    analyticsLocations: m
  } = (0, d.default)();
  return T === o.default.getId() || r.default.hidePersonalInformation || v ? null : (0, a.jsx)(l.MenuItem, {
    id: "note",
    label: S ? p.default.Messages.LOADING_NOTE : y ? p.default.Messages.EDIT_NOTE : p.default.Messages.ADD_NOTE,
    action: () => {
      (0, s.openUserProfileModal)({
        userId: t.id,
        section: I.UserProfileSections.USER_INFO,
        guildId: i,
        autoFocusNote: !0,
        sourceAnalyticsLocations: m,
        analyticsLocation: E.location
      })
    }
  })
}