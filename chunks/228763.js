n.d(t, {
    d: function () {
        return a;
    }
});
var r = n(149765);
function i(e) {
    return e.map((e) => ({
        ...e,
        permissions: r.vB(e.permissions)
    }));
}
function a(e) {
    return null == e.guilds
        ? e
        : {
              ...e,
              guilds: i(e.guilds)
          };
}
