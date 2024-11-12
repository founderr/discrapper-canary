n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var l = n(70097),
    a = n(590558);
function r(e) {
    let { baseTileRef: t } = e;
    return null == t || 0 === t.offsetHeight
        ? null
        : (0, i.jsx)('div', {
              style: {
                  width: 1.22 * t.offsetWidth,
                  height: 1.22 * t.offsetHeight
              },
              className: a.demoEffectOverlay,
              children: (0, i.jsx)(l.Z, {
                  autoPlay: !0,
                  className: a.demoEffectImg,
                  children: (0, i.jsx)('source', {
                      src: 'https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm',
                      type: 'video/webm'
                  })
              })
          });
}
