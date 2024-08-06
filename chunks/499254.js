t.d(n, {
  _: function() {
return r;
  },
  y: function() {
return i;
  }
});
var l = t(570140);

function r(e, n) {
  l.Z.dispatch({
type: 'APP_LAUNCHER_SHOW',
entrypoint: e,
activeViewType: n
  });
}

function i(e) {
  l.Z.dispatch({
type: 'APP_LAUNCHER_DISMISS',
closeReason: e
  });
}