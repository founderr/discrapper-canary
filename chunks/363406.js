var n = String.prototype.replace,
    r = /%20/g,
    i = 'RFC1738',
    a = 'RFC3986';
e.exports = {
    default: a,
    formatters: {
        RFC1738: function (e) {
            return n.call(e, r, '+');
        },
        RFC3986: function (e) {
            return String(e);
        }
    },
    RFC1738: i,
    RFC3986: a
};
