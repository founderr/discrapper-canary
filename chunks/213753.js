r.d(n, {
    V: function () {
        return o;
    }
});
var i = r(846903);
let a = new (r(259443).Yd)('codedLinkQueue'),
    s = new i.default({
        concurrency: 5,
        intervalCap: 10,
        interval: 2000
    });
function o(e) {
    s.add(e);
}
s.on('add', () => {
    s.size > 0 && a.warn('Message link fetch queue backlog:', s.size);
});
