e.exports = function (e) {
    var n = [];
    return e.shiftKey && n.push('shift'), e.altKey && n.push('alt'), e.ctrlKey && n.push('ctrl'), e.metaKey && n.push('meta'), n;
};
