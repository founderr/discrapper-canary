var r = /\s/;
function i(e) {
    for (var n = e.length; n-- && r.test(e.charAt(n)); );
    return n;
}
n.Z = i;
