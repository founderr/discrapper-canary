n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(392711),
  i = n.n(s),
  l = n(243814),
  a = n(186901),
  r = n(981631);

function o(e, t) {
  return {
    [r.zMe.VOICE_SETTINGS_UPDATE]: {
      scope: {
        [a.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
      },
      handler: () => t => {
        let {
          prevState: n,
          dispatch: s
        } = t, l = e();
        return !i().isEqual(l, n) && s(l), l
      }
    },
    [r.zMe.VOICE_SETTINGS_UPDATE_2]: {
      scope: a.lH,
      handler(e) {
        let {
          socket: n
        } = e;
        return e => {
          let {
            prevState: s,
            dispatch: l
          } = e;
          if (null == n.application.id) return s;
          let a = t(n.application.id);
          return !i().isEqual(a, s) && l(a), a
        }
      }
    }
  }
}