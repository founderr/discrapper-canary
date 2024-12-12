function i(e) {
    let n = e.getContext('2d');
    return null == n
        ? null
        : {
              render: (e) => {
                  n.putImageData(e, 0, 0);
              }
          };
}
r.d(n, {
    y: function () {
        return i;
    }
});
