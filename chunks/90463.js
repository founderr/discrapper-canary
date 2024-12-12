r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(757143);
function a(e) {
    return e
        .replace(/[\s-~]+/g, '-')
        .replace(/^-+/, '')
        .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
        .toLowerCase();
}
