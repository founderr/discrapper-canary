n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651),
    l = n(70097),
    a = n(955843),
    r = n(590558);
function s(e) {
    let { baseTileRef: t, cleanup: n } = e;
    return null == t || 0 === t.offsetHeight || (0, a.QC)()
        ? null
        : (0, i.jsx)('div', {
              style: {
                  width: 1.22 * t.offsetWidth,
                  height: 1.22 * t.offsetHeight
              },
              className: r.demoEffectOverlay,
              children: (0, i.jsx)(l.Z, {
                  autoPlay: !0,
                  className: r.demoEffectImg,
                  onEnded: n,
                  children: (0, i.jsx)('source', {
                      src: 'https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm',
                      type: 'video/webm'
                  })
              })
          });
}
