n.d(t, {
    Q: function () {
        return a;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104);
var o = n(981631);
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
function a(e) {
    let t = new URL(''.concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
    if (null == t.pathname.match(i)) throw Error('Unexpected Tenor GIF path.');
    let a = ''.concat(o.ANM.TENOR_ASSET_PATH).concat(t.pathname);
    return ''.concat(location.protocol).concat(n).concat(a);
}
