n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(512722),
  r = n.n(s),
  l = n(481060),
  o = n(626135),
  c = n(358085),
  u = n(981631),
  d = n(689938);

function _(e) {
  let t = a.useCallback(() => {
r()(null != e, 'text cannot be null'), o.default.track(u.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open('https://www.google.com/search?q='.concat(encodeURIComponent(e)), '_blank');
  }, [e]);
  return c.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, i.jsx)(l.MenuItem, {
id: 'search-google',
label: d.Z.Messages.SEARCH_WITH_GOOGLE,
action: t
  }, 'search-google')] : null;
}