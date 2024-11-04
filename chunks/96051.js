var i = n(570140),
    r = n(317770),
    a = n(117984);
function l(e) {
    let {
        channel: { id: t }
    } = e;
    (0, a.oC)(t);
}
class s extends r.Z {
    _initialize() {
        i.Z.subscribe('CHANNEL_DELETE', l);
    }
    _terminate() {
        i.Z.unsubscribe('CHANNEL_DELETE', l);
    }
}
t.Z = new s();
