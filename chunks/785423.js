var n = /\s/;
function r(e) {
    for (var t = e.length; t-- && n.test(e.charAt(t)); );
    return t;
}
t.Z = r;
