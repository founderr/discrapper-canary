e.exports = function (e, n) {
    if ((' ' + n.className + ' ').indexOf(' combokeys ') > -1) return !1;
    var r = n.tagName.toLowerCase();
    return 'input' === r || 'select' === r || 'textarea' === r || n.isContentEditable;
};
