e.exports = function (e, n, r) {
    var i = this;
    return !r && (r = i.getReverseMap()[e] ? 'keydown' : 'keypress'), 'keypress' === r && n.length && (r = 'keydown'), r;
};
