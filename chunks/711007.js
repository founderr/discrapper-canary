n.d(t, {
    p: function () {
        return a;
    }
});
var i = n(192379),
    l = n(409813),
    r = n(882712);
function a(e, t, n) {
    i.useEffect(() => {
        null != e && e !== l.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === r.I.PENDING ? n(l.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === l.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === r.I.SUCCESS && n(l.h8.REVIEW);
    }, [e, t, n]);
}
