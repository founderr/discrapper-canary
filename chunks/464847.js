function i(e) {
    var n;
    null === (n = window.DiscordSentry) ||
        void 0 === n ||
        n.addBreadcrumb({
            type: 'default',
            level: 'info',
            category: e.category,
            message: e.message,
            data: e.data,
            timestamp: Date.now()
        });
}
r.d(n, {
    Z: function () {
        return i;
    }
});
