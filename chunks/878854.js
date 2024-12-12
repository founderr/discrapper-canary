function i(e, n, r) {
    if (n.set) n.set.call(e, r);
    else {
        if (!n.writable) throw TypeError('attempted to set read only private field');
        n.value = r;
    }
}
r.d(n, {
    y: function () {
        return i;
    }
});
