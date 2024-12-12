r.d(n, {
    z: function () {
        return a;
    }
});
var i = r(661763);
function a(e) {
    let n,
        r = (0, i.zL)(e, { labelable: !0 });
    return ('vertical' === e.orientation && (n = 'vertical'), 'hr' !== e.elementType)
        ? {
              separatorProps: {
                  ...r,
                  role: 'separator',
                  'aria-orientation': n
              }
          }
        : { separatorProps: r };
}
