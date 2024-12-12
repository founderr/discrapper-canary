r.d(n, {
    Z: function () {
        return a;
    }
});
var i = {
    start: 'end',
    end: 'start'
};
function a(e) {
    return e.replace(/start|end/g, function (e) {
        return i[e];
    });
}
