n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var l = n(131951);
function i() {
    return Object.entries(l.Z.getVideoDevices()).map((e) => {
        let [t, n] = e;
        return {
            id: 'camera:' + n.id,
            name: n.name,
            url: ''
        };
    });
}
