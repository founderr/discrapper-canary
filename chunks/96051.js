var s = n(570140),
  i = n(317770),
  l = n(117984);

function a(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  (0, l.oC)(t)
}
class r extends i.Z {
  _initialize() {
    s.Z.subscribe("CHANNEL_DELETE", a)
  }
  _terminate() {
    s.Z.unsubscribe("CHANNEL_DELETE", a)
  }
}
t.Z = new r