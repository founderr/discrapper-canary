var i = r(824289),
    a = '\u200B',
    s = '\u180E';
e.exports = function () {
    return String.prototype.trim && a.trim() === a && s.trim() === s && ('_' + s).trim() === '_' + s && (s + '_').trim() === s + '_' ? String.prototype.trim : i;
};
