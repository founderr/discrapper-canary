r.d(n, {
    b: function () {
        return a;
    }
});
var i = r(981631);
function a(e, n, r, a) {
    let s = null != r ? r : n;
    return (null != s && e.can(i.Plq.CREATE_INSTANT_INVITE, s)) || (null != n && null != n.vanityURLCode) || (null == a ? void 0 : a.invite_code) != null;
}
