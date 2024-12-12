var n = '_erd';
function r(e) {
    return (e[n] = {}), i(e);
}
function i(e) {
    return e[n];
}
function a(e) {
    delete e[n];
}
e.exports = {
    initState: r,
    getState: i,
    cleanState: a
};
