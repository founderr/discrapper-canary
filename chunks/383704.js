r.d(t, {
    f: function () {
        return a;
    }
});
let a = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9000000000000 - 1)) + 1000000000000}`;
