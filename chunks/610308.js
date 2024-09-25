var r = n(411104);
var i = n(374023);
let a = (0, n(733393).V)();
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
let s = void 0 !== a ? a : o;
i.s.isDiscordGatewayPlaintextSet() && (s = o), (t.Z = s);
