r.d(n, {
    Pg: function () {
        return o;
    },
    Te: function () {
        return a;
    },
    kb: function () {
        return s;
    }
});
var i = r(570140);
function a() {
    i.Z.wait(() => i.Z.dispatch({ type: 'DOMAIN_MIGRATION_START' }));
}
function s() {
    i.Z.dispatch({ type: 'DOMAIN_MIGRATION_FAILURE' });
}
function o() {
    window.location.reload();
}
