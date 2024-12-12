var i = r(546299).rotr32;
function a(e, n, r, i) {
    return 0 === e ? s(n, r, i) : 1 === e || 3 === e ? l(n, r, i) : 2 === e ? o(n, r, i) : void 0;
}
function s(e, n, r) {
    return (e & n) ^ (~e & r);
}
function o(e, n, r) {
    return (e & n) ^ (e & r) ^ (n & r);
}
function l(e, n, r) {
    return e ^ n ^ r;
}
function u(e) {
    return i(e, 2) ^ i(e, 13) ^ i(e, 22);
}
function c(e) {
    return i(e, 6) ^ i(e, 11) ^ i(e, 25);
}
function d(e) {
    return i(e, 7) ^ i(e, 18) ^ (e >>> 3);
}
function f(e) {
    return i(e, 17) ^ i(e, 19) ^ (e >>> 10);
}
(n.ft_1 = a), (n.ch32 = s), (n.maj32 = o), (n.p32 = l), (n.s0_256 = u), (n.s1_256 = c), (n.g0_256 = d), (n.g1_256 = f);
