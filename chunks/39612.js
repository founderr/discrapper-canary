function i(e) {
    return ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.INVITE_HOST, '/').concat(e);
}
function a(e) {
    return ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, '/').concat(e);
}
function s() {
    return ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/channels/@me');
}
r.d(n, {
    Gk: function () {
        return s;
    },
    Oh: function () {
        return a;
    },
    z0: function () {
        return i;
    }
});
