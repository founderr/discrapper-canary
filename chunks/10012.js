var r = n(447631),
    i = n(821819),
    a = n(535538);
e.exports =
    !r &&
    !i(function () {
        return (
            7 !==
            Object.defineProperty(a('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
