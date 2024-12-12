var i = r(690244),
    a = r(76542),
    s = i('%TypeError%');
e.exports = function (e) {
    if ('number' != typeof e && 'bigint' != typeof e) throw new s('argument must be a Number or a BigInt');
    var n = e < 0 ? -a(-e) : a(e);
    return 0 === n ? 0 : n;
};
