var r = n(627494);
var i = n(757143);
let a = /[<>:"/\\|?*\.]/g;
function o(e) {
    return e.replaceAll(a, '').trim().replaceAll(' ', '_');
}
t.Z = o;
