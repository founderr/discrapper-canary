n.d(t, {
    x: function () {
        return p;
    },
    z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(481060),
    l = n(668781),
    a = n(100527),
    o = n(585483),
    s = n(192720),
    c = n(768943),
    u = n(175006),
    d = n(981631),
    m = n(989925),
    f = n(388032);
async function h(e) {
    let { displayToast: t = !1, ...h } = e;
    if (null == c.Z.getSavedMessage(h.channelId, h.messageId) && !(0, u.Z)()) {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: a.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    if (
        null !=
        (await (0, s.XA)(h).catch((e) => {
            var t, n, i;
            return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES
                ? (l.Z.show({
                      title: f.intl.string(f.t.mlbiZW),
                      body: f.intl.formatToPlainString(f.t['1zVbEB'], { max: m.D }),
                      cancelText: f.intl.string(f.t.BddRzc),
                      confirmText: f.intl.string(f.t.ZGbTc3),
                      onConfirm: () => o.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
                  }),
                  null)
                : ((0, r.showToast)((0, r.createToast)(null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : f.intl.string(f.t.R0RpRU), r.ToastType.FAILURE)), null);
        }))
    ) {
        if (t) {
            let e = null != h.dueAt ? f.intl.string(f.t.i1IsOz) : f.intl.string(f.t['WQdL//']),
                t = null != h.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
            (0, r.showToast)((0, r.createToast)(e, t));
        }
    }
}
async function p(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
        (await (0, s.ep)(n).catch((e) => {
            var t, n;
            return (0, r.showToast)((0, r.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : f.intl.string(f.t.R0RpRU), r.ToastType.FAILURE)), null;
        }))
    ) {
        if (t) {
            let e = null != n.dueAt ? f.intl.string(f.t.D0tS09) : f.intl.string(f.t['5KOMiY']),
                t = null != n.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
            (0, r.showToast)((0, r.createToast)(e, t));
        }
    }
}
