n.d(t, {
    x: function () {
        return h;
    },
    z: function () {
        return f;
    }
});
var r = n(735250),
    i = n(481060),
    a = n(668781),
    o = n(100527),
    s = n(585483),
    l = n(192720),
    u = n(768943),
    c = n(175006),
    d = n(981631),
    _ = n(989925),
    E = n(689938);
async function f(e) {
    let { displayToast: t = !1, ...f } = e;
    if (null == u.Z.getSavedMessage(f.channelId, f.messageId) && !(0, c.Z)()) {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, r.jsx)(e, {
                    source: o.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    if (
        null !=
        (await (0, l.XA)(f).catch((e) => {
            var t, n, r;
            return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES
                ? (a.Z.show({
                      title: E.Z.Messages.FOR_LATER_TOO_MANY_TITLE,
                      body: E.Z.Messages.FOR_LATER_TOO_MANY_BODY.format({ max: _.D }),
                      cancelText: E.Z.Messages.OKAY,
                      confirmText: E.Z.Messages.FOR_LATER_MANAGE_MESSAGES,
                      onConfirm: () => s.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
                  }),
                  null)
                : ((0, i.showToast)((0, i.createToast)(null !== (r = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : E.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE)), null);
        }))
    ) {
        if (t) {
            let e = null != f.dueAt ? E.Z.Messages.MESSAGE_REMINDERS_CREATE_SUCCESS : E.Z.Messages.MESSAGE_BOOKMARKS_CREATE_SUCCESS_LONG,
                t = null != f.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
            (0, i.showToast)((0, i.createToast)(e, t));
        }
    }
}
async function h(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
        (await (0, l.ep)(n).catch((e) => {
            var t, n;
            return (0, i.showToast)((0, i.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : E.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE)), null;
        }))
    ) {
        if (t) {
            let e = null != n.dueAt ? E.Z.Messages.MESSAGE_REMINDERS_DELETE_SUCCESS : E.Z.Messages.MESSAGE_BOOKMARKS_DELETE_SUCCESS,
                t = null != n.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
            (0, i.showToast)((0, i.createToast)(e, t));
        }
    }
}
