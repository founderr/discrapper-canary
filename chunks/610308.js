var i = r(411104);
var a = r(374023);
let s = (0, r(733393).V)();
class o {
    pack(e) {
        return JSON.stringify(e);
    }
    unpack(e) {
        if ('string' != typeof e) throw Error('Expected a string to be passed to JSONEncoding.unpack, got '.concat(null == e ? null : typeof e));
        return JSON.parse(e);
    }
    getName() {
        return 'json';
    }
    wantsString() {
        return !0;
    }
}
let l = void 0 !== s ? s : o;
a.s.isDiscordGatewayPlaintextSet() && (l = o), (n.Z = l);
