r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(650886);
function s(e) {
    let { disabled: n, deviceId: r, width: s, height: o } = e;
    return n
        ? (0, i.jsx)('div', {
              className: 'media-engine-video',
              style: {
                  width: s,
                  height: o
              }
          })
        : (0, i.jsx)(a.Z, {
              streamId: r,
              style: {
                  width: s,
                  height: o
              }
          });
}
s.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
