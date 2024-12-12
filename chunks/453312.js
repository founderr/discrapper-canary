var i = r(690244)('%Array%'),
    a = !i.isArray && r(192853)('Object.prototype.toString');
e.exports =
    i.isArray ||
    function (e) {
        return '[object Array]' === a(e);
    };
