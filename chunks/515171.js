var i = r(286233),
    a = r(673555);
e.exports = function () {
    var e = a();
    return (
        i(
            Array.prototype,
            { map: e },
            {
                map: function () {
                    return Array.prototype.map !== e;
                }
            }
        ),
        e
    );
};
