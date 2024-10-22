n.r(t),
    n.d(t, {
        default: function () {
            return o;
        }
    });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(933557),
    r = n(689938),
    s = n(884921);
function o(e) {
    let { channel: t, category: n, ...o } = e,
        c = (0, a.ZP)(t, !0),
        u = (0, a.ZP)(n);
    return (0, i.jsx)(l.ConfirmModal, {
        header: r.Z.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
        confirmText: r.Z.Messages.SYNC_PERMISSIONS,
        cancelText: r.Z.Messages.KEEP_PERMISSIONS,
        confirmButtonColor: l.Button.Colors.BRAND,
        ...o,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            className: s.message,
            selectable: !1,
            children: r.Z.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
                channelName: c,
                categoryName: u
            })
        })
    });
}
