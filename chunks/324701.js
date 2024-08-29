n.d(t, {
    x: function () {
        return T;
    },
    z: function () {
        return m;
    }
});
var i = n(735250),
    s = n(481060),
    a = n(668781),
    r = n(100527),
    l = n(594174),
    o = n(585483),
    c = n(111361),
    u = n(192720),
    d = n(981631),
    _ = n(474936),
    E = n(989925),
    I = n(689938);
async function m(e) {
    let { displayToast: t = !1, ...m } = e,
        T = l.default.getCurrentUser();
    if (!(0, c.I5)(T, _.p9.TIER_2)) {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: r.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    let N = await (0, u.XA)(m).catch((e) => {
        var t, n, i;
        return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES
            ? (a.Z.show({
                  title: I.Z.Messages.FOR_LATER_TOO_MANY_TITLE,
                  body: I.Z.Messages.FOR_LATER_TOO_MANY_BODY.format({ max: E.D }),
                  confirmText: I.Z.Messages.OKAY,
                  cancelText: I.Z.Messages.FOR_LATER_MANAGE_MESSAGES,
                  onCancel: () => o.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
              }),
              null)
            : ((0, s.showToast)((0, s.createToast)(null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : I.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE)), null);
    });
    if (t && null != N) {
        let e = null != m.dueAt ? I.Z.Messages.MESSAGE_REMINDERS_CREATE_SUCCESS : I.Z.Messages.MESSAGE_BOOKMARKS_CREATE_SUCCESS_LONG,
            t = null != m.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
        (0, s.showToast)((0, s.createToast)(e, t));
    }
}
async function T(e) {
    let { displayToast: t = !1, ...a } = e,
        o = l.default.getCurrentUser();
    if (!(0, c.I5)(o, _.p9.TIER_2)) {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: r.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    let d = await (0, u.ep)(a).catch((e) => {
        var t, n;
        return (0, s.showToast)((0, s.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : I.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE)), null;
    });
    if (t && null != d) {
        let e = null != a.dueAt ? I.Z.Messages.MESSAGE_REMINDERS_DELETE_SUCCESS : I.Z.Messages.MESSAGE_BOOKMARKS_DELETE_SUCCESS,
            t = null != a.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
        (0, s.showToast)((0, s.createToast)(e, t));
    }
}
