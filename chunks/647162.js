n.d(t, {
    KV: function () {
        return m;
    },
    PY: function () {
        return p;
    },
    Wo: function () {
        return I;
    },
    iy: function () {
        return S;
    },
    yp: function () {
        return T;
    }
});
var r = n(411104);
var i = n(177593);
var a = n(47120);
var o = n(763472),
    s = n(726542),
    l = n(594190),
    u = n(70956),
    c = n(781518),
    d = n(18323),
    _ = n(768419),
    E = n(616922),
    f = n(981631);
let h = 30 * u.Z.Millis.SECOND;
function p(e) {
    return null != e.getActiveSocketAndDevice() || d.Z.isProtocolRegistered();
}
function m() {
    let e = _.Z.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!d.Z.isProtocolRegistered()) return Promise.reject(Error('protocol is not registered'));
    let t = _.Z.getPlayableComputerDevices();
    if (l.ZP.isObservedAppRunning(s.Z.get(f.ABu.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (
            (0, c.Tu)(e.accountId, n.id),
            Promise.resolve({
                socket: e,
                device: n
            })
        );
    }
    return new Promise((e, n) => {
        let r = setTimeout(() => {
                _.Z.removeChangeListener(i), n(Error('timeout launching spotify'));
            }, h),
            i = () => {
                for (let { socket: n, device: a } of _.Z.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === a.id) &&
                        (clearTimeout(r),
                        _.Z.removeChangeListener(i),
                        setImmediate(() => {
                            (0, c.Tu)(n.accountId, a.id),
                                e({
                                    socket: n,
                                    device: a
                                });
                        }));
            };
        _.Z.addChangeListener(i), window.open(''.concat(E.M5, ':'));
    });
}
function I() {
    let e = _.Z.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function T() {
    let e = _.Z.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error('no active profile'));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, c.Ai)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error('spotify account is not premium'));
          });
}
function g(e) {
    if ('string' == typeof e) return e;
    throw Error('value is not a string');
}
async function S(e, t) {
    var n;
    let r = await (0, o.sd)(e, t),
        i = (0, E.c8)(g(null !== (n = r.type) && void 0 !== n ? n : E.Hw.TRACK));
    if (null === i) throw Error('invalid type '.concat(r.type));
    return {
        context_uri: 'string' == typeof r.context_uri ? r.context_uri : void 0,
        album_id: g(r.album_id),
        artist_ids: Array.isArray(r.artist_ids) ? r.artist_ids.map(g) : [],
        type: i,
        button_urls: Array.isArray(r.button_urls) ? r.button_urls.map(g) : []
    };
}
