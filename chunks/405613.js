n.d(e, {
    Z: function () {
        return i;
    }
});
var l = n(134432),
    r = n(981631);
function i(t, e) {
    let n;
    if (null == t.image) return null;
    null == e && (e = window.screen.width * (0, l.x_)()), (e = (0, l.oO)(e));
    let i = window.GLOBAL_ENV.CDN_HOST;
    if (null != i) {
        var a;
        n = ''
            .concat(((a = 'https:'), 'https:'), '//')
            .concat(i, '/guild-events/')
            .concat(t.id, '/')
            .concat(t.image);
    } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + r.ANM.GUILD_EVENT_IMAGE(t.id, t.image, 'png');
    return (n += '?size='.concat(e));
}
