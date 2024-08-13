n.d(t, {
  x: function() {
return c;
  },
  z: function() {
return o;
  }
});
var i = n(873011),
  a = n(481060),
  s = n(192720),
  r = n(689938);

function l(e, t) {
  return e ? t === i.J.REMINDER ? a.ToastType.CLOCK : a.ToastType.BOOKMARK : a.ToastType.FAILURE;
}
async function o(e) {
  let {
displayToast: t = !1,
...n
  } = e, o = null != n.dueAt ? i.J.REMINDER : i.J.BOOKMARK, c = await (0, s.XA)({
type: o,
...n
  });
  if (null == c || null != c && t) {
var u;
(0, a.showToast)((0, a.createToast)((u = o, null != c ? u === i.J.REMINDER ? r.Z.Messages.MESSAGE_REMINDERS_CREATE_SUCCESS : r.Z.Messages.MESSAGE_BOOKMARKS_CREATE_SUCCESS : u === i.J.REMINDER ? r.Z.Messages.MESSAGE_REMINDERS_CREATE_FAIL : r.Z.Messages.MESSAGE_BOOKMARKS_CREATE_FAIL), l(null != c, o)));
  }
}
async function c(e) {
  let {
displayToast: t = !1,
...n
  } = e, o = null != n.dueAt ? i.J.REMINDER : i.J.BOOKMARK, c = await (0, s.ep)({
type: o,
...n
  });
  if (null == c || null != c && t) {
var u;
(0, a.showToast)((0, a.createToast)((u = o, null != c ? u === i.J.REMINDER ? r.Z.Messages.MESSAGE_REMINDERS_DELETE_SUCCESS : r.Z.Messages.MESSAGE_BOOKMARKS_DELETE_SUCCESS : u === i.J.REMINDER ? r.Z.Messages.MESSAGE_REMINDERS_DELETE_FAIL : r.Z.Messages.MESSAGE_BOOKMARKS_DELETE_FAIL), l(null != c, o)));
  }
}