r.d(n, {
    KV: function () {
        return E;
    },
    PY: function () {
        return g;
    },
    Wo: function () {
        return v;
    },
    iy: function () {
        return b;
    },
    yp: function () {
        return I;
    }
});
var i = r(411104);
var a = r(177593);
var s = r(47120);
var o = r(763472),
    l = r(726542),
    u = r(594190),
    c = r(70956),
    d = r(781518),
    f = r(18323),
    _ = r(768419),
    h = r(616922),
    p = r(981631);
let m = 30 * c.Z.Millis.SECOND;
function g(e) {
    return null != e.getActiveSocketAndDevice() || f.Z.isProtocolRegistered();
}
function E() {
    let e = _.Z.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!f.Z.isProtocolRegistered()) return Promise.reject(Error('protocol is not registered'));
    let n = _.Z.getPlayableComputerDevices();
    if (u.ZP.isObservedAppRunning(l.Z.get(p.ABu.SPOTIFY).name) && n.length > 0) {
        let { socket: e, device: r } = n[0];
        return (
            (0, d.Tu)(e.accountId, r.id),
            Promise.resolve({
                socket: e,
                device: r
            })
        );
    }
    return new Promise((e, r) => {
        let i = setTimeout(() => {
                _.Z.removeChangeListener(a), r(Error('timeout launching spotify'));
            }, m),
            a = () => {
                for (let { socket: r, device: s } of _.Z.getPlayableComputerDevices())
                    null == n.find((e) => e.device.id === s.id) &&
                        (clearTimeout(i),
                        _.Z.removeChangeListener(a),
                        setImmediate(() => {
                            (0, d.Tu)(r.accountId, s.id),
                                e({
                                    socket: r,
                                    device: s
                                });
                        }));
            };
        _.Z.addChangeListener(a), window.open(''.concat(h.M5, ':'));
    });
}
function v() {
    let e = _.Z.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: n } = e;
    return n.isPremium;
}
function I() {
    let e = _.Z.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error('no active profile'));
    let { socket: n } = e;
    return n.isPremium
        ? Promise.resolve()
        : (0, d.Ai)(n.accountId, n.accessToken).then(() => {
              if (!n.isPremium) return Promise.reject(Error('spotify account is not premium'));
          });
}
function T(e) {
    if ('string' == typeof e) return e;
    throw Error('value is not a string');
}
async function b(e, n) {
    var r;
    let i = await (0, o.sd)(e, n),
        a = (0, h.c8)(T(null !== (r = i.type) && void 0 !== r ? r : h.Hw.TRACK));
    if (null === a) throw Error('invalid type '.concat(i.type));
    return {
        context_uri: 'string' == typeof i.context_uri ? i.context_uri : void 0,
        album_id: T(i.album_id),
        artist_ids: Array.isArray(i.artist_ids) ? i.artist_ids.map(T) : [],
        type: a,
        button_urls: Array.isArray(i.button_urls) ? i.button_urls.map(T) : []
    };
}
