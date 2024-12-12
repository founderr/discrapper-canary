r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(358085);
async function a(e, n) {
    let { default: a } = await Promise.resolve().then(r.bind(r, 315263)),
        s = a(e, {
            skipExtensionCheck: n,
            analyticsLocations: []
        });
    if (null != s) s(null);
    else if (i.isPlatformEmbedded) window.open(e);
    else {
        let n = document.createElement('a');
        (n.href = e), (n.target = '_blank'), (n.rel = 'noreferrer noopener'), n.click();
    }
}
