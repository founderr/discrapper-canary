var n = r(325008),
    a = r(936940);
e.exports =
    n &&
    a(function () {
        return (
            42 !==
            Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: !1
            }).prototype
        );
    });
