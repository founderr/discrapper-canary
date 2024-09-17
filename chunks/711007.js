t.d(n, {
    p: function () {
        return o;
    }
});
var l = t(470079),
    i = t(409813),
    u = t(882712);
function o(e, n, t) {
    l.useEffect(() => {
        null != e && e !== i.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === u.I.PENDING ? t(i.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === u.I.SUCCESS && t(i.h8.REVIEW);
    }, [e, n, t]);
}
