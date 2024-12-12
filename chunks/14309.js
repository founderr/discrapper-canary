r.d(n, {
    S: function () {
        return a;
    }
});
let i = [];
for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));
function a(e, n = 0) {
    return i[e[n + 0]] + i[e[n + 1]] + i[e[n + 2]] + i[e[n + 3]] + '-' + i[e[n + 4]] + i[e[n + 5]] + '-' + i[e[n + 6]] + i[e[n + 7]] + '-' + i[e[n + 8]] + i[e[n + 9]] + '-' + i[e[n + 10]] + i[e[n + 11]] + i[e[n + 12]] + i[e[n + 13]] + i[e[n + 14]] + i[e[n + 15]];
}
