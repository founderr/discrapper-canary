n.d(t, {
    x: function () {
        return u;
    },
    z: function () {
        return c;
    }
});
var i = n(481060),
    s = n(668781),
    a = n(585483),
    r = n(192720),
    l = n(981631),
    o = n(689938);
async function c(e) {
    let { displayToast: t = !1, ...n } = e,
        c = await (0, r.XA)(n).catch((e) => {
            var t, n, r;
            return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === l.evJ.TOO_MANY_SAVED_MESSAGES
                ? (s.Z.show({
                      title: o.Z.Messages.FOR_LATER_TOO_MANY_TITLE,
                      body: o.Z.Messages.FOR_LATER_TOO_MANY_BODY.format({ max: '200' }),
                      confirmText: o.Z.Messages.OKAY,
                      cancelText: o.Z.Messages.FOR_LATER_MANAGE_MESSAGES,
                      onCancel: () => a.S.dispatch(l.CkL.TOGGLE_FOR_LATER)
                  }),
                  null)
                : ((0, i.showToast)((0, i.createToast)(null !== (r = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : o.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE)), null);
        });
    if (t && null != c) {
        let e = null != n.dueAt ? o.Z.Messages.MESSAGE_REMINDERS_CREATE_SUCCESS : o.Z.Messages.MESSAGE_BOOKMARKS_CREATE_SUCCESS,
            t = null != n.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}
async function u(e) {
    let { displayToast: t = !1, ...n } = e,
        s = await (0, r.ep)(n).catch((e) => {
            var t, n;
            return (0, i.showToast)((0, i.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : o.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE)), null;
        });
    if (t && null != s) {
        let e = null != n.dueAt ? o.Z.Messages.MESSAGE_REMINDERS_DELETE_SUCCESS : o.Z.Messages.MESSAGE_BOOKMARKS_DELETE_SUCCESS,
            t = null != n.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}
