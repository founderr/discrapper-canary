var t = Math.ceil,
    r = Math.floor;
e.exports =
    Math.trunc ||
    function (e) {
        var n = +e;
        return (n > 0 ? r : t)(n);
    };
