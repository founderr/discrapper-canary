r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(981631);
function a(e) {
    let { CDN_HOST: n, PROJECT_ENV: r } = window.GLOBAL_ENV;
    return 'development' !== r ? ''.concat(location.protocol, '//').concat(n).concat(i.ANM.SOUNDBOARD_SOUND(e)) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.ANM.SOUNDBOARD_SOUND(e));
}
