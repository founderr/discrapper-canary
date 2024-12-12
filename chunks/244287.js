r.d(n, {
    Z: function () {
        return a;
    }
});
var i = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function a(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
        return i[e];
    });
}
