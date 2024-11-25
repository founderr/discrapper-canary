n.d(e, {
    j: function () {
        return i;
    },
    r: function () {
        return r;
    }
});
var o = n(981631);
function i(t, e) {
    return e === o.ABu.MASTODON && /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(t), /^.+\.[^.@]{2,}$/.test(t);
}
function r(t) {
    return t === o.ABu.MASTODON ? '@clyde@mastodon.social' : t === o.ABu.BLUESKY ? 'clyde.bsky.social' : 'clyde@example.com';
}
