n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(406877);
function o(e) {
    let { guildId: t, productId: n, attachmentId: o, ...s } = e,
        { isLoading: l, downloadAttachment: u } = (0, a.Z)(t, n);
    function c() {
        u(o);
    }
    return (0, r.jsx)(i.Button, {
        ...s,
        submitting: l,
        onClick: c
    });
}
