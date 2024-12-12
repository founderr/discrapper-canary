var i = r(535213),
    a = r(234268),
    s = r(286233);
e.exports = function () {
    i();
    var e = a();
    return (
        s(
            Promise,
            { allSettled: e },
            {
                allSettled: function () {
                    return Promise.allSettled !== e;
                }
            }
        ),
        e
    );
};
