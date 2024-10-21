n.d(t, {
    p: function () {
        return r;
    }
});
var i = n(192379),
    l = n(409813),
    a = n(882712);
function r(e, t, n) {
    i.useEffect(() => {
        null != e && e !== l.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.PENDING ? n(l.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === l.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.SUCCESS && n(l.h8.REVIEW);
    }, [e, t, n]);
}
